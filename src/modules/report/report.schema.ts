import { Type } from "@sinclair/typebox";

export const CreateReportCore = Type.Object({
  datetimeFrom: Type.String({ format: "date-time" }),
  datetimeTo: Type.String({ format: "date-time" }),
});
