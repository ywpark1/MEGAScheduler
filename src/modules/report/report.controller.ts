import { FastifyReply, FastifyRequest } from "fastify";
import { Controller, GET, Inject, POST } from "fastify-decorators";
import { getLogger, Logger, LogLevel } from "../../log/logger";
import { CreateReportInputType } from "./report";
import { CreateReportCore } from "./report.schema";
import { ReportService } from "./report.service";

export type CreateReportBody = FastifyRequest<{
  Body: CreateReportInputType;
}>;

@Controller({
  route: "/api/reports",
})
export default class ReportController {
  private logger: Logger = getLogger();

  @Inject(ReportService)
  private _reportService!: ReportService;

  @POST("/", {
    schema: { body: CreateReportCore },
  })
  public async createReport(request: CreateReportBody, reply: FastifyReply) {
    const { datetimeFrom, datetimeTo } = request.body;
    this.logger.message(`From ${datetimeFrom} to ${datetimeTo}`, LogLevel.INFO);

    const newReport = await this._reportService.createReport(
      datetimeFrom,
      datetimeTo
    );

    this.logger.message(JSON.stringify(newReport), LogLevel.INFO);
  }
}
