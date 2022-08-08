
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.0.0
 * Query Engine version: da41d2bb3406da22087b849f0e911199ba4fbf11
 */
Prisma.prismaVersion = {
  client: "4.0.0",
  engine: "da41d2bb3406da22087b849f0e911199ba4fbf11"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  phoneNumber: 'phoneNumber',
  password: 'password',
  salt: 'salt',
  kakaoID: 'kakaoID',
  isBlacklisted: 'isBlacklisted',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.AppointmentScalarFieldEnum = makeEnum({
  id: 'id',
  datetimeFrom: 'datetimeFrom',
  datetimeTo: 'datetimeTo',
  totalHours: 'totalHours',
  userEmail: 'userEmail',
  calendarEventId: 'calendarEventId',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.AppointmentDetailScalarFieldEnum = makeEnum({
  id: 'id',
  appointmentId: 'appointmentId',
  comments: 'comments',
  appointmentType: 'appointmentType'
});

exports.Prisma.ReportScalarFieldEnum = makeEnum({
  id: 'id',
  fileName: 'fileName',
  datetimeFrom: 'datetimeFrom',
  datetimeTo: 'datetimeTo',
  totalUsers: 'totalUsers',
  totalHours: 'totalHours',
  totalAppointmentBooked: 'totalAppointmentBooked',
  totalAppointmentCancelled: 'totalAppointmentCancelled'
});

exports.Prisma.ReportUserScalarFieldEnum = makeEnum({
  id: 'id',
  reportId: 'reportId',
  userEmail: 'userEmail',
  totalHours: 'totalHours',
  appointmentBookedCount: 'appointmentBookedCount',
  appointmentCancelledCount: 'appointmentCancelledCount'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});
exports.Role = makeEnum({
  CLIENT: 'CLIENT',
  ADMIN: 'ADMIN'
});

exports.AppointmentStatus = makeEnum({
  NOT_STARTED: 'NOT_STARTED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
});

exports.Prisma.ModelName = makeEnum({
  User: 'User',
  Appointment: 'Appointment',
  AppointmentDetail: 'AppointmentDetail',
  Report: 'Report',
  ReportUser: 'ReportUser'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
