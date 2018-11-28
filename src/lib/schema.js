import SimpleSchema2 from "simpl-schema";

const schema = new SimpleSchema2({
  dateRange: { type: Object },
  "dateRange.start": { type: Date },
  "dateRange.end": { type: Date },
  timeRange: { type: Object },
  "timeRange.start": { type: Date },
  "timeRange.end": { type: Date },
  repeater: { optional: true, type: Array },
  "repeater.$": { type: String }
});

export default schema;
