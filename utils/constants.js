// Regex
const NUMBER_REGEX = /^\d+$/;
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const TEN_DIGIT_MOBILE_NUM_REGEX = /^\d{10}$/;
const EMAIL_OR_PHONE_REGEX =
  /^(?:\d{10}|(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
const AADHAAR_NUMBER_REGEX = /^\d{12}$/;
const PAN_NUMBER_REGEX = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

module.exports = {
  NUMBER_REGEX,
  EMAIL_REGEX,
  TEN_DIGIT_MOBILE_NUM_REGEX,
  EMAIL_OR_PHONE_REGEX,
  PASSWORD_REGEX,
  AADHAAR_NUMBER_REGEX,
  PAN_NUMBER_REGEX,
};