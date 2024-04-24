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
  },
  { timestamps: true },
);

const Vitals = mongoose.model("Vitals", VitalsSchema);

const TokensSchema = new Schema(
  {
    userId: String,
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
  { timestamps: true },
);

const Tokens = mongoose.model("Tokens", TokensSchema);

module.exports = { Vitals, Tokens };

// const GarminHeartRateSummarySchema = new Schema(
//   {
//     summaryId: String,
//     userId: String,
//     calendarDate: Date,
//     startTimeInSeconds: Number,
//     durationInSeconds: Number,
//     offsetStartTimeInSeconds: Number,
//     minValue: Number,
//     maxValue: Number,
//     avgValue: Number,
//     epochSummaries: Map,
//     summaryType: { type: String, default: "heart_rate" },
//   },
//   { timestamps: true },
// );

// const GarminSpO2SummarySchema = new Schema(
//   {
//     summaryId: String,
//     userId: String,
//     calendarDate: Date,
//     startTimeInSeconds: Number,
//     durationInSeconds: Number,
//     offsetStartTimeInSeconds: Number,
//     minValue: Number,
//     maxValue: Number,
//     avgValue: Number,
//     epochSummaries: Map,
//     summaryType: { type: String, default: "spo2" },
//   },
//   { timestamps: true },
// );

// const AppleHealthDataSchema = new Schema(
//   {
//     heartRate: Number,
//     spo2: Number,
//     userId: String,
//   },
//   { timestamps: true },
// );

// const FitBitSpO2Schema = new Schema(
//   {
//     dateTime: {
//       type: String,
//       required: true,
//     },
//     value: {
//       avg: {
//         type: Number,
//         required: true,
//       },
//       min: {
//         type: Number,
//         required: true,
//       },
//       max: {
//         type: Number,
//         required: true,
//       },
//     },
//   },
//   { timestamps: true },
// );

// const FitBitHeartRateSchema = new Schema(
//   {
//     dateTime: {
//       type: Date,
//       required: true,
//     },
//     restingHeartRate: {
//       type: Number,
//       required: true,
//     },
//     userId: { type: String, required: true },
//   },
//   { timestamps: true },
// );

// const GarminHeartRateSummary = mongoose.model(
//   "GarminHeartRateSummary",
//   GarminHeartRateSummarySchema,
// );
// const GarminSpO2Summary = mongoose.model(
//   "GarminSpO2Summary",
//   GarminSpO2SummarySchema,
// );
// const AppleHealthData = mongoose.model(
//   "AppleHealthData",
//   AppleHealthDataSchema,
// );
// const FitBitSpO2Data = mongoose.model("FitBitSpO2Data", FitBitSpO2Schema);
// const FitBitHeartRateData = mongoose.model(
//   "FitBitHeartRateData",
//   FitBitHeartRateSchema,
// );

// module.exports = {
//   GarminHeartRateSummary,
//   GarminSpO2Summary,
//   AppleHealthData,
//   FitBitSpO2Data,
// };
