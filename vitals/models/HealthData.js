const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const VitalsSchema = new Schema(
  {
    userId: String,
    dateTime: Date,
    device: {
      type: String,
      enum: ["Garmin", "FitBit", "Apple", "Other"],
    },
    metricType: {
      type: String,
      enum: ["HeartRate", "SpO2", "Other"],
    },
    dateTimeFromProvider: Date,
    value: Number,
    minValue: Number,
    maxValue: Number,
    avgValue: Number,
    additionalData: Map,
    cows: {
      type: String,
      enum: [0, 1, 2, 4],
    },
  },
  { timestamps: true }
);

const Vitals = mongoose.model("Vitals", VitalsSchema);

const TokensSchema = new Schema(
  {
    username: String,
    userIdFromProvider: String,
    accessToken: String,
    refreshtoken: String,
    expiresIn: String,
    scope: String,

    device: {
      type: String,
      enum: ["Garmin", "FitBit", "Apple", "Other"],
    },
  },
  { timestamps: true }
);

const Tokens = mongoose.model("Tokens", TokensSchema);

const CodeStuffSchema = new Schema({
  // for fitbit
  codeChallenge: String,
  codeVerifier: String,

  // for garmin
  oauth_nonce: String,
  oauth_signature: String,
  oauth_token: String,
  oauth_timestamp: String,
  oauth_token_secret: String,
  oauth_verifier: String,
  device: {
    type: String,
    enum: ["Garmin", "FitBit", "Apple", "Other"],
  },
});

const CodeStuff = mongoose.model("CodeStuff", CodeStuffSchema);

module.exports = { Vitals, Tokens, CodeStuff };
