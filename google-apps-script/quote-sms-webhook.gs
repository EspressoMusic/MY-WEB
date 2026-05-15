/**
 * SMS אחרי מילוי טופס באתר (Twilio) → 0586122187
 *
 * התקנה (פעם אחת):
 * 1. צור חשבון ב-https://www.twilio.com (יש ניסיון חינם)
 * 2. מ-Twilio Console העתק: Account SID, Auth Token, מספר שולח (From)
 * 3. פתח https://script.google.com → פרויקט חדש → הדבק קובץ זה
 * 4. Project Settings → Script properties → הוסף:
 *    TWILIO_ACCOUNT_SID
 *    TWILIO_AUTH_TOKEN
 *    TWILIO_FROM_NUMBER  (למשל +15005550006)
 *    OWNER_PHONE         (972586122187 או +972586122187)
 * 5. Deploy → New deployment → Web app
 *    Execute as: Me | Who has access: Anyone
 * 6. העתק את כתובת ה-Web app ל-script.js בשורה QUOTE_SMS_WEBHOOK_URL
 *
 * הערה: בחשבון ניסיון Twilio אפשר לשלוח SMS רק למספרים שאימתת ב-Twilio.
 */

function normalizePhoneE164(phone) {
  var digits = String(phone || "").replace(/\D/g, "");
  if (digits.indexOf("972") === 0) return "+" + digits;
  if (digits.indexOf("0") === 0) return "+972" + digits.substring(1);
  return "+" + digits;
}

function sendLeadSms(name, phone, packageName) {
  var props = PropertiesService.getScriptProperties();
  var accountSid = props.getProperty("TWILIO_ACCOUNT_SID");
  var authToken = props.getProperty("TWILIO_AUTH_TOKEN");
  var fromNumber = props.getProperty("TWILIO_FROM_NUMBER");
  var ownerPhone = props.getProperty("OWNER_PHONE") || "972586122187";

  if (!accountSid || !authToken || !fromNumber) {
    return { ok: false, error: "missing_twilio_credentials" };
  }

  var to = normalizePhoneE164(ownerPhone);
  var body =
    "פנייה חדשה מאתר Picasow\n" +
    "שם: " + (name || "") + "\n" +
    "טלפון: " + (phone || "") + "\n" +
    "חבילה: " + (packageName || "");

  var url =
    "https://api.twilio.com/2010-04-01/Accounts/" +
    accountSid +
    "/Messages.json";

  var payload = {
    To: to,
    From: fromNumber,
    Body: body,
  };

  var options = {
    method: "post",
    payload: payload,
    headers: {
      Authorization:
        "Basic " +
        Utilities.base64Encode(accountSid + ":" + authToken),
    },
    muteHttpExceptions: true,
  };

  var response = UrlFetchApp.fetch(url, options);
  var code = response.getResponseCode();
  var text = response.getContentText();

  if (code >= 200 && code < 300) {
    return { ok: true, response: text };
  }
  return { ok: false, error: "twilio_error", code: code, response: text };
}

function jsonOutput(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function doGet(e) {
  var params = e && e.parameter ? e.parameter : {};
  if (!params.name && !params.phone) {
    return ContentService.createTextOutput("Quote SMS webhook is ready.");
  }
  try {
    return jsonOutput(sendLeadSms(params.name, params.phone, params.package));
  } catch (err) {
    return jsonOutput({ ok: false, error: String(err) });
  }
}

function doPost(e) {
  try {
    var data =
      e.postData && e.postData.contents ? JSON.parse(e.postData.contents) : {};
    return jsonOutput(sendLeadSms(data.name, data.phone, data.package));
  } catch (err) {
    return jsonOutput({ ok: false, error: String(err) });
  }
}
