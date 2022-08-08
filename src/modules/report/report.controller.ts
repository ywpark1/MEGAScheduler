import { FastifyReply, FastifyRequest } from "fastify";
import { Controller, DELETE, GET, Inject, POST } from "fastify-decorators";
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

    return reply.code(200).send(newReport);
  }
  @GET("/:id", {})
  public async getReport(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params;
    this.logger.message(`Retrieve report id - ${id}`, LogLevel.INFO);

    const report = await this._reportService.getReport(id);

    return reply.code(200).send(report);
  }

  @GET("/", {})
  public async getReports(request: FastifyRequest, reply: FastifyReply) {
    this.logger.message(`Retrieve all reports`, LogLevel.INFO);

    const report = await this._reportService.getReports();

    return reply.code(200).send(report);
  }

  @DELETE("/:id", {})
  public async deleteReport(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params;
    this.logger.message(`Delete report id - ${id}`, LogLevel.INFO);

    const report = await this._reportService.deleteReport(id);

    return reply.code(200);
  }
}
