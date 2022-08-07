import { Static } from "@sinclair/typebox";
import { CreateReportCore } from "./report.schema";

type CreateReportInputType = Static<typeof CreateReportCore>;
