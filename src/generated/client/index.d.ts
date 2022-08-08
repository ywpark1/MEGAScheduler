
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  email: string
  phoneNumber: string
  password: string
  salt: string
  kakaoID: string | null
  isBlacklisted: boolean
  role: Role
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Appointment
 * 
 */
export type Appointment = {
  id: number
  datetimeFrom: Date
  datetimeTo: Date
  totalHours: number
  userEmail: string
  calendarEventId: string
  status: AppointmentStatus
  createdAt: Date
  updatedAt: Date
}

/**
 * Model AppointmentDetail
 * 
 */
export type AppointmentDetail = {
  id: number
  appointmentId: number
  comments: string | null
  appointmentType: string
}

/**
 * Model Report
 * 
 */
export type Report = {
  id: number
  fileName: string
  datetimeFrom: Date
  datetimeTo: Date
  totalUsers: number
  totalHours: number
  totalAppointmentBooked: number
  totalAppointmentCancelled: number
}

/**
 * Model ReportUser
 * 
 */
export type ReportUser = {
  id: number
  reportId: number
  userEmail: string
  totalHours: number
  appointmentBookedCount: number
  appointmentCancelledCount: number
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Role: {
  CLIENT: 'CLIENT',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const AppointmentStatus: {
  NOT_STARTED: 'NOT_STARTED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<GlobalReject>;

  /**
   * `prisma.appointmentDetail`: Exposes CRUD operations for the **AppointmentDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppointmentDetails
    * const appointmentDetails = await prisma.appointmentDetail.findMany()
    * ```
    */
  get appointmentDetail(): Prisma.AppointmentDetailDelegate<GlobalReject>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<GlobalReject>;

  /**
   * `prisma.reportUser`: Exposes CRUD operations for the **ReportUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReportUsers
    * const reportUsers = await prisma.reportUser.findMany()
    * ```
    */
  get reportUser(): Prisma.ReportUserDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.0.0
   * Query Engine version: da41d2bb3406da22087b849f0e911199ba4fbf11
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Appointment: 'Appointment',
    AppointmentDetail: 'AppointmentDetail',
    Report: 'Report',
    ReportUser: 'ReportUser'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    appointments: number
    ReportUser: number
  }

  export type UserCountOutputTypeSelect = {
    appointments?: boolean
    ReportUser?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type ReportCountOutputType
   */


  export type ReportCountOutputType = {
    reportUsers: number
  }

  export type ReportCountOutputTypeSelect = {
    reportUsers?: boolean
  }

  export type ReportCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ReportCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ReportCountOutputType
    : S extends undefined
    ? never
    : S extends ReportCountOutputTypeArgs
    ?'include' extends U
    ? ReportCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ReportCountOutputType ? ReportCountOutputType[P] : never
  } 
    : ReportCountOutputType
  : ReportCountOutputType




  // Custom InputTypes

  /**
   * ReportCountOutputType without action
   */
  export type ReportCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ReportCountOutputType
     * 
    **/
    select?: ReportCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    phoneNumber: string | null
    password: string | null
    salt: string | null
    kakaoID: string | null
    isBlacklisted: boolean | null
    role: Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    phoneNumber: string | null
    password: string | null
    salt: string | null
    kakaoID: string | null
    isBlacklisted: boolean | null
    role: Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    phoneNumber: number
    password: number
    salt: number
    kakaoID: number
    isBlacklisted: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    phoneNumber?: true
    password?: true
    salt?: true
    kakaoID?: true
    isBlacklisted?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    phoneNumber?: true
    password?: true
    salt?: true
    kakaoID?: true
    isBlacklisted?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    phoneNumber?: true
    password?: true
    salt?: true
    kakaoID?: true
    isBlacklisted?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    email: string
    phoneNumber: string
    password: string
    salt: string
    kakaoID: string | null
    isBlacklisted: boolean
    role: Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    salt?: boolean
    kakaoID?: boolean
    isBlacklisted?: boolean
    role?: boolean
    appointments?: boolean | AppointmentFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    ReportUser?: boolean | ReportUserFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    appointments?: boolean | AppointmentFindManyArgs
    ReportUser?: boolean | ReportUserFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'appointments' ? Array < AppointmentGetPayload<S['include'][P]>>  :
        P extends 'ReportUser' ? Array < ReportUserGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'appointments' ? Array < AppointmentGetPayload<S['select'][P]>>  :
        P extends 'ReportUser' ? Array < ReportUserGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    appointments<T extends AppointmentFindManyArgs = {}>(args?: Subset<T, AppointmentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Appointment>>, PrismaPromise<Array<AppointmentGetPayload<T>>>>;

    ReportUser<T extends ReportUserFindManyArgs = {}>(args?: Subset<T, ReportUserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ReportUser>>, PrismaPromise<Array<ReportUserGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User: findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = UserFindUniqueArgsBase
      

  /**
   * User: findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = UserFindFirstArgsBase
      

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Appointment
   */


  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    id: number | null
    totalHours: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    id: number | null
    totalHours: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: number | null
    datetimeFrom: Date | null
    datetimeTo: Date | null
    totalHours: number | null
    userEmail: string | null
    calendarEventId: string | null
    status: AppointmentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: number | null
    datetimeFrom: Date | null
    datetimeTo: Date | null
    totalHours: number | null
    userEmail: string | null
    calendarEventId: string | null
    status: AppointmentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    datetimeFrom: number
    datetimeTo: number
    totalHours: number
    userEmail: number
    calendarEventId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    id?: true
    totalHours?: true
  }

  export type AppointmentSumAggregateInputType = {
    id?: true
    totalHours?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    datetimeFrom?: true
    datetimeTo?: true
    totalHours?: true
    userEmail?: true
    calendarEventId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    datetimeFrom?: true
    datetimeTo?: true
    totalHours?: true
    userEmail?: true
    calendarEventId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    datetimeFrom?: true
    datetimeTo?: true
    totalHours?: true
    userEmail?: true
    calendarEventId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs = {
    /**
     * Filter which Appointment to aggregate.
     * 
    **/
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     * 
    **/
    orderBy?: Enumerable<AppointmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs = {
    where?: AppointmentWhereInput
    orderBy?: Enumerable<AppointmentOrderByWithAggregationInput>
    by: Array<AppointmentScalarFieldEnum>
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }


  export type AppointmentGroupByOutputType = {
    id: number
    datetimeFrom: Date
    datetimeTo: Date
    totalHours: number
    userEmail: string
    calendarEventId: string
    status: AppointmentStatus
    createdAt: Date
    updatedAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect = {
    id?: boolean
    datetimeFrom?: boolean
    datetimeTo?: boolean
    totalHours?: boolean
    user?: boolean | UserArgs
    userEmail?: boolean
    calendarEventId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    AppointmentDetail?: boolean | AppointmentDetailArgs
  }

  export type AppointmentInclude = {
    user?: boolean | UserArgs
    AppointmentDetail?: boolean | AppointmentDetailArgs
  }

  export type AppointmentGetPayload<
    S extends boolean | null | undefined | AppointmentArgs,
    U = keyof S
      > = S extends true
        ? Appointment
    : S extends undefined
    ? never
    : S extends AppointmentArgs | AppointmentFindManyArgs
    ?'include' extends U
    ? Appointment  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'AppointmentDetail' ? AppointmentDetailGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'AppointmentDetail' ? AppointmentDetailGetPayload<S['select'][P]> | null :  P extends keyof Appointment ? Appointment[P] : never
  } 
    : Appointment
  : Appointment


  type AppointmentCountArgs = Merge<
    Omit<AppointmentFindManyArgs, 'select' | 'include'> & {
      select?: AppointmentCountAggregateInputType | true
    }
  >

  export interface AppointmentDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AppointmentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AppointmentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Appointment'> extends True ? CheckSelect<T, Prisma__AppointmentClient<Appointment>, Prisma__AppointmentClient<AppointmentGetPayload<T>>> : CheckSelect<T, Prisma__AppointmentClient<Appointment | null >, Prisma__AppointmentClient<AppointmentGetPayload<T> | null >>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AppointmentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AppointmentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Appointment'> extends True ? CheckSelect<T, Prisma__AppointmentClient<Appointment>, Prisma__AppointmentClient<AppointmentGetPayload<T>>> : CheckSelect<T, Prisma__AppointmentClient<Appointment | null >, Prisma__AppointmentClient<AppointmentGetPayload<T> | null >>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AppointmentFindManyArgs>(
      args?: SelectSubset<T, AppointmentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Appointment>>, PrismaPromise<Array<AppointmentGetPayload<T>>>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
    **/
    create<T extends AppointmentCreateArgs>(
      args: SelectSubset<T, AppointmentCreateArgs>
    ): CheckSelect<T, Prisma__AppointmentClient<Appointment>, Prisma__AppointmentClient<AppointmentGetPayload<T>>>

    /**
     * Create many Appointments.
     *     @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     *     @example
     *     // Create many Appointments
     *     const appointment = await prisma.appointment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AppointmentCreateManyArgs>(
      args?: SelectSubset<T, AppointmentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
    **/
    delete<T extends AppointmentDeleteArgs>(
      args: SelectSubset<T, AppointmentDeleteArgs>
    ): CheckSelect<T, Prisma__AppointmentClient<Appointment>, Prisma__AppointmentClient<AppointmentGetPayload<T>>>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AppointmentUpdateArgs>(
      args: SelectSubset<T, AppointmentUpdateArgs>
    ): CheckSelect<T, Prisma__AppointmentClient<Appointment>, Prisma__AppointmentClient<AppointmentGetPayload<T>>>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AppointmentDeleteManyArgs>(
      args?: SelectSubset<T, AppointmentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AppointmentUpdateManyArgs>(
      args: SelectSubset<T, AppointmentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
    **/
    upsert<T extends AppointmentUpsertArgs>(
      args: SelectSubset<T, AppointmentUpsertArgs>
    ): CheckSelect<T, Prisma__AppointmentClient<Appointment>, Prisma__AppointmentClient<AppointmentGetPayload<T>>>

    /**
     * Find one Appointment that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AppointmentFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__AppointmentClient<Appointment>, Prisma__AppointmentClient<AppointmentGetPayload<T>>>

    /**
     * Find the first Appointment that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__AppointmentClient<Appointment>, Prisma__AppointmentClient<AppointmentGetPayload<T>>>

    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AppointmentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    AppointmentDetail<T extends AppointmentDetailArgs = {}>(args?: Subset<T, AppointmentDetailArgs>): CheckSelect<T, Prisma__AppointmentDetailClient<AppointmentDetail | null >, Prisma__AppointmentDetailClient<AppointmentDetailGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Appointment base type for findUnique actions
   */
  export type AppointmentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Appointment
     * 
    **/
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppointmentInclude | null
    /**
     * Filter, which Appointment to fetch.
     * 
    **/
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment: findUnique
   */
  export interface AppointmentFindUniqueArgs extends AppointmentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Appointment base type for findFirst actions
   */
  export type AppointmentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Appointment
     * 
    **/
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppointmentInclude | null
    /**
     * Filter, which Appointment to fetch.
     * 
    **/
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     * 
    **/
    orderBy?: Enumerable<AppointmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     * 
    **/
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     * 
    **/
    distinct?: Enumerable<AppointmentScalarFieldEnum>
  }

  /**
   * Appointment: findFirst
   */
  export interface AppointmentFindFirstArgs extends AppointmentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Appointment
     * 
    **/
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppointmentInclude | null
    /**
     * Filter, which Appointments to fetch.
     * 
    **/
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     * 
    **/
    orderBy?: Enumerable<AppointmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     * 
    **/
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AppointmentScalarFieldEnum>
  }


  /**
   * Appointment create
   */
  export type AppointmentCreateArgs = {
    /**
     * Select specific fields to fetch from the Appointment
     * 
    **/
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppointmentInclude | null
    /**
     * The data needed to create a Appointment.
     * 
    **/
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }


  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs = {
    /**
     * The data used to create many Appointments.
     * 
    **/
    data: Enumerable<AppointmentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Appointment
     * 
    **/
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppointmentInclude | null
    /**
     * The data needed to update a Appointment.
     * 
    **/
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     * 
    **/
    where: AppointmentWhereUniqueInput
  }


  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs = {
    /**
     * The data used to update Appointments.
     * 
    **/
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     * 
    **/
    where?: AppointmentWhereInput
  }


  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Appointment
     * 
    **/
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppointmentInclude | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     * 
    **/
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     * 
    **/
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }


  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Appointment
     * 
    **/
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppointmentInclude | null
    /**
     * Filter which Appointment to delete.
     * 
    **/
    where: AppointmentWhereUniqueInput
  }


  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs = {
    /**
     * Filter which Appointments to delete
     * 
    **/
    where?: AppointmentWhereInput
  }


  /**
   * Appointment: findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs = AppointmentFindUniqueArgsBase
      

  /**
   * Appointment: findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs = AppointmentFindFirstArgsBase
      

  /**
   * Appointment without action
   */
  export type AppointmentArgs = {
    /**
     * Select specific fields to fetch from the Appointment
     * 
    **/
    select?: AppointmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppointmentInclude | null
  }



  /**
   * Model AppointmentDetail
   */


  export type AggregateAppointmentDetail = {
    _count: AppointmentDetailCountAggregateOutputType | null
    _avg: AppointmentDetailAvgAggregateOutputType | null
    _sum: AppointmentDetailSumAggregateOutputType | null
    _min: AppointmentDetailMinAggregateOutputType | null
    _max: AppointmentDetailMaxAggregateOutputType | null
  }

  export type AppointmentDetailAvgAggregateOutputType = {
    id: number | null
    appointmentId: number | null
  }

  export type AppointmentDetailSumAggregateOutputType = {
    id: number | null
    appointmentId: number | null
  }

  export type AppointmentDetailMinAggregateOutputType = {
    id: number | null
    appointmentId: number | null
    comments: string | null
    appointmentType: string | null
  }

  export type AppointmentDetailMaxAggregateOutputType = {
    id: number | null
    appointmentId: number | null
    comments: string | null
    appointmentType: string | null
  }

  export type AppointmentDetailCountAggregateOutputType = {
    id: number
    appointmentId: number
    comments: number
    appointmentType: number
    _all: number
  }


  export type AppointmentDetailAvgAggregateInputType = {
    id?: true
    appointmentId?: true
  }

  export type AppointmentDetailSumAggregateInputType = {
    id?: true
    appointmentId?: true
  }

  export type AppointmentDetailMinAggregateInputType = {
    id?: true
    appointmentId?: true
    comments?: true
    appointmentType?: true
  }

  export type AppointmentDetailMaxAggregateInputType = {
    id?: true
    appointmentId?: true
    comments?: true
    appointmentType?: true
  }

  export type AppointmentDetailCountAggregateInputType = {
    id?: true
    appointmentId?: true
    comments?: true
    appointmentType?: true
    _all?: true
  }

  export type AppointmentDetailAggregateArgs = {
    /**
     * Filter which AppointmentDetail to aggregate.
     * 
    **/
    where?: AppointmentDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentDetails to fetch.
     * 
    **/
    orderBy?: Enumerable<AppointmentDetailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AppointmentDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentDetails from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentDetails.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppointmentDetails
    **/
    _count?: true | AppointmentDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentDetailMaxAggregateInputType
  }

  export type GetAppointmentDetailAggregateType<T extends AppointmentDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointmentDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointmentDetail[P]>
      : GetScalarType<T[P], AggregateAppointmentDetail[P]>
  }




  export type AppointmentDetailGroupByArgs = {
    where?: AppointmentDetailWhereInput
    orderBy?: Enumerable<AppointmentDetailOrderByWithAggregationInput>
    by: Array<AppointmentDetailScalarFieldEnum>
    having?: AppointmentDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentDetailCountAggregateInputType | true
    _avg?: AppointmentDetailAvgAggregateInputType
    _sum?: AppointmentDetailSumAggregateInputType
    _min?: AppointmentDetailMinAggregateInputType
    _max?: AppointmentDetailMaxAggregateInputType
  }


  export type AppointmentDetailGroupByOutputType = {
    id: number
    appointmentId: number
    comments: string | null
    appointmentType: string
    _count: AppointmentDetailCountAggregateOutputType | null
    _avg: AppointmentDetailAvgAggregateOutputType | null
    _sum: AppointmentDetailSumAggregateOutputType | null
    _min: AppointmentDetailMinAggregateOutputType | null
    _max: AppointmentDetailMaxAggregateOutputType | null
  }

  type GetAppointmentDetailGroupByPayload<T extends AppointmentDetailGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AppointmentDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentDetailGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentDetailGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentDetailSelect = {
    id?: boolean
    appointment?: boolean | AppointmentArgs
    appointmentId?: boolean
    comments?: boolean
    appointmentType?: boolean
  }

  export type AppointmentDetailInclude = {
    appointment?: boolean | AppointmentArgs
  }

  export type AppointmentDetailGetPayload<
    S extends boolean | null | undefined | AppointmentDetailArgs,
    U = keyof S
      > = S extends true
        ? AppointmentDetail
    : S extends undefined
    ? never
    : S extends AppointmentDetailArgs | AppointmentDetailFindManyArgs
    ?'include' extends U
    ? AppointmentDetail  & {
    [P in TrueKeys<S['include']>]:
        P extends 'appointment' ? AppointmentGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'appointment' ? AppointmentGetPayload<S['select'][P]> :  P extends keyof AppointmentDetail ? AppointmentDetail[P] : never
  } 
    : AppointmentDetail
  : AppointmentDetail


  type AppointmentDetailCountArgs = Merge<
    Omit<AppointmentDetailFindManyArgs, 'select' | 'include'> & {
      select?: AppointmentDetailCountAggregateInputType | true
    }
  >

  export interface AppointmentDetailDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one AppointmentDetail that matches the filter.
     * @param {AppointmentDetailFindUniqueArgs} args - Arguments to find a AppointmentDetail
     * @example
     * // Get one AppointmentDetail
     * const appointmentDetail = await prisma.appointmentDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AppointmentDetailFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AppointmentDetailFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AppointmentDetail'> extends True ? CheckSelect<T, Prisma__AppointmentDetailClient<AppointmentDetail>, Prisma__AppointmentDetailClient<AppointmentDetailGetPayload<T>>> : CheckSelect<T, Prisma__AppointmentDetailClient<AppointmentDetail | null >, Prisma__AppointmentDetailClient<AppointmentDetailGetPayload<T> | null >>

    /**
     * Find the first AppointmentDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentDetailFindFirstArgs} args - Arguments to find a AppointmentDetail
     * @example
     * // Get one AppointmentDetail
     * const appointmentDetail = await prisma.appointmentDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AppointmentDetailFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AppointmentDetailFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AppointmentDetail'> extends True ? CheckSelect<T, Prisma__AppointmentDetailClient<AppointmentDetail>, Prisma__AppointmentDetailClient<AppointmentDetailGetPayload<T>>> : CheckSelect<T, Prisma__AppointmentDetailClient<AppointmentDetail | null >, Prisma__AppointmentDetailClient<AppointmentDetailGetPayload<T> | null >>

    /**
     * Find zero or more AppointmentDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentDetailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppointmentDetails
     * const appointmentDetails = await prisma.appointmentDetail.findMany()
     * 
     * // Get first 10 AppointmentDetails
     * const appointmentDetails = await prisma.appointmentDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentDetailWithIdOnly = await prisma.appointmentDetail.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AppointmentDetailFindManyArgs>(
      args?: SelectSubset<T, AppointmentDetailFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<AppointmentDetail>>, PrismaPromise<Array<AppointmentDetailGetPayload<T>>>>

    /**
     * Create a AppointmentDetail.
     * @param {AppointmentDetailCreateArgs} args - Arguments to create a AppointmentDetail.
     * @example
     * // Create one AppointmentDetail
     * const AppointmentDetail = await prisma.appointmentDetail.create({
     *   data: {
     *     // ... data to create a AppointmentDetail
     *   }
     * })
     * 
    **/
    create<T extends AppointmentDetailCreateArgs>(
      args: SelectSubset<T, AppointmentDetailCreateArgs>
    ): CheckSelect<T, Prisma__AppointmentDetailClient<AppointmentDetail>, Prisma__AppointmentDetailClient<AppointmentDetailGetPayload<T>>>

    /**
     * Create many AppointmentDetails.
     *     @param {AppointmentDetailCreateManyArgs} args - Arguments to create many AppointmentDetails.
     *     @example
     *     // Create many AppointmentDetails
     *     const appointmentDetail = await prisma.appointmentDetail.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AppointmentDetailCreateManyArgs>(
      args?: SelectSubset<T, AppointmentDetailCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a AppointmentDetail.
     * @param {AppointmentDetailDeleteArgs} args - Arguments to delete one AppointmentDetail.
     * @example
     * // Delete one AppointmentDetail
     * const AppointmentDetail = await prisma.appointmentDetail.delete({
     *   where: {
     *     // ... filter to delete one AppointmentDetail
     *   }
     * })
     * 
    **/
    delete<T extends AppointmentDetailDeleteArgs>(
      args: SelectSubset<T, AppointmentDetailDeleteArgs>
    ): CheckSelect<T, Prisma__AppointmentDetailClient<AppointmentDetail>, Prisma__AppointmentDetailClient<AppointmentDetailGetPayload<T>>>

    /**
     * Update one AppointmentDetail.
     * @param {AppointmentDetailUpdateArgs} args - Arguments to update one AppointmentDetail.
     * @example
     * // Update one AppointmentDetail
     * const appointmentDetail = await prisma.appointmentDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AppointmentDetailUpdateArgs>(
      args: SelectSubset<T, AppointmentDetailUpdateArgs>
    ): CheckSelect<T, Prisma__AppointmentDetailClient<AppointmentDetail>, Prisma__AppointmentDetailClient<AppointmentDetailGetPayload<T>>>

    /**
     * Delete zero or more AppointmentDetails.
     * @param {AppointmentDetailDeleteManyArgs} args - Arguments to filter AppointmentDetails to delete.
     * @example
     * // Delete a few AppointmentDetails
     * const { count } = await prisma.appointmentDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AppointmentDetailDeleteManyArgs>(
      args?: SelectSubset<T, AppointmentDetailDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppointmentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppointmentDetails
     * const appointmentDetail = await prisma.appointmentDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AppointmentDetailUpdateManyArgs>(
      args: SelectSubset<T, AppointmentDetailUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one AppointmentDetail.
     * @param {AppointmentDetailUpsertArgs} args - Arguments to update or create a AppointmentDetail.
     * @example
     * // Update or create a AppointmentDetail
     * const appointmentDetail = await prisma.appointmentDetail.upsert({
     *   create: {
     *     // ... data to create a AppointmentDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppointmentDetail we want to update
     *   }
     * })
    **/
    upsert<T extends AppointmentDetailUpsertArgs>(
      args: SelectSubset<T, AppointmentDetailUpsertArgs>
    ): CheckSelect<T, Prisma__AppointmentDetailClient<AppointmentDetail>, Prisma__AppointmentDetailClient<AppointmentDetailGetPayload<T>>>

    /**
     * Find one AppointmentDetail that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {AppointmentDetailFindUniqueOrThrowArgs} args - Arguments to find a AppointmentDetail
     * @example
     * // Get one AppointmentDetail
     * const appointmentDetail = await prisma.appointmentDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AppointmentDetailFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AppointmentDetailFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__AppointmentDetailClient<AppointmentDetail>, Prisma__AppointmentDetailClient<AppointmentDetailGetPayload<T>>>

    /**
     * Find the first AppointmentDetail that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentDetailFindFirstOrThrowArgs} args - Arguments to find a AppointmentDetail
     * @example
     * // Get one AppointmentDetail
     * const appointmentDetail = await prisma.appointmentDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AppointmentDetailFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AppointmentDetailFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__AppointmentDetailClient<AppointmentDetail>, Prisma__AppointmentDetailClient<AppointmentDetailGetPayload<T>>>

    /**
     * Count the number of AppointmentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentDetailCountArgs} args - Arguments to filter AppointmentDetails to count.
     * @example
     * // Count the number of AppointmentDetails
     * const count = await prisma.appointmentDetail.count({
     *   where: {
     *     // ... the filter for the AppointmentDetails we want to count
     *   }
     * })
    **/
    count<T extends AppointmentDetailCountArgs>(
      args?: Subset<T, AppointmentDetailCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppointmentDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentDetailAggregateArgs>(args: Subset<T, AppointmentDetailAggregateArgs>): PrismaPromise<GetAppointmentDetailAggregateType<T>>

    /**
     * Group by AppointmentDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointmentDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentDetailGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointmentDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentDetailGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppointmentDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AppointmentDetailClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    appointment<T extends AppointmentArgs = {}>(args?: Subset<T, AppointmentArgs>): CheckSelect<T, Prisma__AppointmentClient<Appointment | null >, Prisma__AppointmentClient<AppointmentGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * AppointmentDetail base type for findUnique actions
   */
  export type AppointmentDetailFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the AppointmentDetail
     * 
    **/
    select?: AppointmentDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppointmentDetailInclude | null
    /**
     * Filter, which AppointmentDetail to fetch.
     * 
    **/
    where: AppointmentDetailWhereUniqueInput
  }

  /**
   * AppointmentDetail: findUnique
   */
  export interface AppointmentDetailFindUniqueArgs extends AppointmentDetailFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AppointmentDetail base type for findFirst actions
   */
  export type AppointmentDetailFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the AppointmentDetail
     * 
    **/
    select?: AppointmentDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppointmentDetailInclude | null
    /**
     * Filter, which AppointmentDetail to fetch.
     * 
    **/
    where?: AppointmentDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentDetails to fetch.
     * 
    **/
    orderBy?: Enumerable<AppointmentDetailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppointmentDetails.
     * 
    **/
    cursor?: AppointmentDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentDetails from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentDetails.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppointmentDetails.
     * 
    **/
    distinct?: Enumerable<AppointmentDetailScalarFieldEnum>
  }

  /**
   * AppointmentDetail: findFirst
   */
  export interface AppointmentDetailFindFirstArgs extends AppointmentDetailFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AppointmentDetail findMany
   */
  export type AppointmentDetailFindManyArgs = {
    /**
     * Select specific fields to fetch from the AppointmentDetail
     * 
    **/
    select?: AppointmentDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppointmentDetailInclude | null
    /**
     * Filter, which AppointmentDetails to fetch.
     * 
    **/
    where?: AppointmentDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentDetails to fetch.
     * 
    **/
    orderBy?: Enumerable<AppointmentDetailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppointmentDetails.
     * 
    **/
    cursor?: AppointmentDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentDetails from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentDetails.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AppointmentDetailScalarFieldEnum>
  }


  /**
   * AppointmentDetail create
   */
  export type AppointmentDetailCreateArgs = {
    /**
     * Select specific fields to fetch from the AppointmentDetail
     * 
    **/
    select?: AppointmentDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppointmentDetailInclude | null
    /**
     * The data needed to create a AppointmentDetail.
     * 
    **/
    data: XOR<AppointmentDetailCreateInput, AppointmentDetailUncheckedCreateInput>
  }


  /**
   * AppointmentDetail createMany
   */
  export type AppointmentDetailCreateManyArgs = {
    /**
     * The data used to create many AppointmentDetails.
     * 
    **/
    data: Enumerable<AppointmentDetailCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * AppointmentDetail update
   */
  export type AppointmentDetailUpdateArgs = {
    /**
     * Select specific fields to fetch from the AppointmentDetail
     * 
    **/
    select?: AppointmentDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppointmentDetailInclude | null
    /**
     * The data needed to update a AppointmentDetail.
     * 
    **/
    data: XOR<AppointmentDetailUpdateInput, AppointmentDetailUncheckedUpdateInput>
    /**
     * Choose, which AppointmentDetail to update.
     * 
    **/
    where: AppointmentDetailWhereUniqueInput
  }


  /**
   * AppointmentDetail updateMany
   */
  export type AppointmentDetailUpdateManyArgs = {
    /**
     * The data used to update AppointmentDetails.
     * 
    **/
    data: XOR<AppointmentDetailUpdateManyMutationInput, AppointmentDetailUncheckedUpdateManyInput>
    /**
     * Filter which AppointmentDetails to update
     * 
    **/
    where?: AppointmentDetailWhereInput
  }


  /**
   * AppointmentDetail upsert
   */
  export type AppointmentDetailUpsertArgs = {
    /**
     * Select specific fields to fetch from the AppointmentDetail
     * 
    **/
    select?: AppointmentDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppointmentDetailInclude | null
    /**
     * The filter to search for the AppointmentDetail to update in case it exists.
     * 
    **/
    where: AppointmentDetailWhereUniqueInput
    /**
     * In case the AppointmentDetail found by the `where` argument doesn't exist, create a new AppointmentDetail with this data.
     * 
    **/
    create: XOR<AppointmentDetailCreateInput, AppointmentDetailUncheckedCreateInput>
    /**
     * In case the AppointmentDetail was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AppointmentDetailUpdateInput, AppointmentDetailUncheckedUpdateInput>
  }


  /**
   * AppointmentDetail delete
   */
  export type AppointmentDetailDeleteArgs = {
    /**
     * Select specific fields to fetch from the AppointmentDetail
     * 
    **/
    select?: AppointmentDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppointmentDetailInclude | null
    /**
     * Filter which AppointmentDetail to delete.
     * 
    **/
    where: AppointmentDetailWhereUniqueInput
  }


  /**
   * AppointmentDetail deleteMany
   */
  export type AppointmentDetailDeleteManyArgs = {
    /**
     * Filter which AppointmentDetails to delete
     * 
    **/
    where?: AppointmentDetailWhereInput
  }


  /**
   * AppointmentDetail: findUniqueOrThrow
   */
  export type AppointmentDetailFindUniqueOrThrowArgs = AppointmentDetailFindUniqueArgsBase
      

  /**
   * AppointmentDetail: findFirstOrThrow
   */
  export type AppointmentDetailFindFirstOrThrowArgs = AppointmentDetailFindFirstArgsBase
      

  /**
   * AppointmentDetail without action
   */
  export type AppointmentDetailArgs = {
    /**
     * Select specific fields to fetch from the AppointmentDetail
     * 
    **/
    select?: AppointmentDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppointmentDetailInclude | null
  }



  /**
   * Model Report
   */


  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportAvgAggregateOutputType = {
    id: number | null
    totalUsers: number | null
    totalHours: number | null
    totalAppointmentBooked: number | null
    totalAppointmentCancelled: number | null
  }

  export type ReportSumAggregateOutputType = {
    id: number | null
    totalUsers: number | null
    totalHours: number | null
    totalAppointmentBooked: number | null
    totalAppointmentCancelled: number | null
  }

  export type ReportMinAggregateOutputType = {
    id: number | null
    fileName: string | null
    datetimeFrom: Date | null
    datetimeTo: Date | null
    totalUsers: number | null
    totalHours: number | null
    totalAppointmentBooked: number | null
    totalAppointmentCancelled: number | null
  }

  export type ReportMaxAggregateOutputType = {
    id: number | null
    fileName: string | null
    datetimeFrom: Date | null
    datetimeTo: Date | null
    totalUsers: number | null
    totalHours: number | null
    totalAppointmentBooked: number | null
    totalAppointmentCancelled: number | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    fileName: number
    datetimeFrom: number
    datetimeTo: number
    totalUsers: number
    totalHours: number
    totalAppointmentBooked: number
    totalAppointmentCancelled: number
    _all: number
  }


  export type ReportAvgAggregateInputType = {
    id?: true
    totalUsers?: true
    totalHours?: true
    totalAppointmentBooked?: true
    totalAppointmentCancelled?: true
  }

  export type ReportSumAggregateInputType = {
    id?: true
    totalUsers?: true
    totalHours?: true
    totalAppointmentBooked?: true
    totalAppointmentCancelled?: true
  }

  export type ReportMinAggregateInputType = {
    id?: true
    fileName?: true
    datetimeFrom?: true
    datetimeTo?: true
    totalUsers?: true
    totalHours?: true
    totalAppointmentBooked?: true
    totalAppointmentCancelled?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    fileName?: true
    datetimeFrom?: true
    datetimeTo?: true
    totalUsers?: true
    totalHours?: true
    totalAppointmentBooked?: true
    totalAppointmentCancelled?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    fileName?: true
    datetimeFrom?: true
    datetimeTo?: true
    totalUsers?: true
    totalHours?: true
    totalAppointmentBooked?: true
    totalAppointmentCancelled?: true
    _all?: true
  }

  export type ReportAggregateArgs = {
    /**
     * Filter which Report to aggregate.
     * 
    **/
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     * 
    **/
    orderBy?: Enumerable<ReportOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs = {
    where?: ReportWhereInput
    orderBy?: Enumerable<ReportOrderByWithAggregationInput>
    by: Array<ReportScalarFieldEnum>
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _avg?: ReportAvgAggregateInputType
    _sum?: ReportSumAggregateInputType
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }


  export type ReportGroupByOutputType = {
    id: number
    fileName: string
    datetimeFrom: Date
    datetimeTo: Date
    totalUsers: number
    totalHours: number
    totalAppointmentBooked: number
    totalAppointmentCancelled: number
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect = {
    id?: boolean
    fileName?: boolean
    datetimeFrom?: boolean
    datetimeTo?: boolean
    totalUsers?: boolean
    totalHours?: boolean
    totalAppointmentBooked?: boolean
    totalAppointmentCancelled?: boolean
    reportUsers?: boolean | ReportUserFindManyArgs
    _count?: boolean | ReportCountOutputTypeArgs
  }

  export type ReportInclude = {
    reportUsers?: boolean | ReportUserFindManyArgs
    _count?: boolean | ReportCountOutputTypeArgs
  }

  export type ReportGetPayload<
    S extends boolean | null | undefined | ReportArgs,
    U = keyof S
      > = S extends true
        ? Report
    : S extends undefined
    ? never
    : S extends ReportArgs | ReportFindManyArgs
    ?'include' extends U
    ? Report  & {
    [P in TrueKeys<S['include']>]:
        P extends 'reportUsers' ? Array < ReportUserGetPayload<S['include'][P]>>  :
        P extends '_count' ? ReportCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'reportUsers' ? Array < ReportUserGetPayload<S['select'][P]>>  :
        P extends '_count' ? ReportCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Report ? Report[P] : never
  } 
    : Report
  : Report


  type ReportCountArgs = Merge<
    Omit<ReportFindManyArgs, 'select' | 'include'> & {
      select?: ReportCountAggregateInputType | true
    }
  >

  export interface ReportDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReportFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ReportFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Report'> extends True ? CheckSelect<T, Prisma__ReportClient<Report>, Prisma__ReportClient<ReportGetPayload<T>>> : CheckSelect<T, Prisma__ReportClient<Report | null >, Prisma__ReportClient<ReportGetPayload<T> | null >>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReportFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ReportFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Report'> extends True ? CheckSelect<T, Prisma__ReportClient<Report>, Prisma__ReportClient<ReportGetPayload<T>>> : CheckSelect<T, Prisma__ReportClient<Report | null >, Prisma__ReportClient<ReportGetPayload<T> | null >>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReportFindManyArgs>(
      args?: SelectSubset<T, ReportFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Report>>, PrismaPromise<Array<ReportGetPayload<T>>>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
    **/
    create<T extends ReportCreateArgs>(
      args: SelectSubset<T, ReportCreateArgs>
    ): CheckSelect<T, Prisma__ReportClient<Report>, Prisma__ReportClient<ReportGetPayload<T>>>

    /**
     * Create many Reports.
     *     @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     *     @example
     *     // Create many Reports
     *     const report = await prisma.report.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReportCreateManyArgs>(
      args?: SelectSubset<T, ReportCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
    **/
    delete<T extends ReportDeleteArgs>(
      args: SelectSubset<T, ReportDeleteArgs>
    ): CheckSelect<T, Prisma__ReportClient<Report>, Prisma__ReportClient<ReportGetPayload<T>>>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReportUpdateArgs>(
      args: SelectSubset<T, ReportUpdateArgs>
    ): CheckSelect<T, Prisma__ReportClient<Report>, Prisma__ReportClient<ReportGetPayload<T>>>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReportDeleteManyArgs>(
      args?: SelectSubset<T, ReportDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReportUpdateManyArgs>(
      args: SelectSubset<T, ReportUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
    **/
    upsert<T extends ReportUpsertArgs>(
      args: SelectSubset<T, ReportUpsertArgs>
    ): CheckSelect<T, Prisma__ReportClient<Report>, Prisma__ReportClient<ReportGetPayload<T>>>

    /**
     * Find one Report that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ReportFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ReportClient<Report>, Prisma__ReportClient<ReportGetPayload<T>>>

    /**
     * Find the first Report that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ReportFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ReportClient<Report>, Prisma__ReportClient<ReportGetPayload<T>>>

    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ReportClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    reportUsers<T extends ReportUserFindManyArgs = {}>(args?: Subset<T, ReportUserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ReportUser>>, PrismaPromise<Array<ReportUserGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Report base type for findUnique actions
   */
  export type ReportFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Report
     * 
    **/
    select?: ReportSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReportInclude | null
    /**
     * Filter, which Report to fetch.
     * 
    **/
    where: ReportWhereUniqueInput
  }

  /**
   * Report: findUnique
   */
  export interface ReportFindUniqueArgs extends ReportFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Report base type for findFirst actions
   */
  export type ReportFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Report
     * 
    **/
    select?: ReportSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReportInclude | null
    /**
     * Filter, which Report to fetch.
     * 
    **/
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     * 
    **/
    orderBy?: Enumerable<ReportOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     * 
    **/
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     * 
    **/
    distinct?: Enumerable<ReportScalarFieldEnum>
  }

  /**
   * Report: findFirst
   */
  export interface ReportFindFirstArgs extends ReportFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Report findMany
   */
  export type ReportFindManyArgs = {
    /**
     * Select specific fields to fetch from the Report
     * 
    **/
    select?: ReportSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReportInclude | null
    /**
     * Filter, which Reports to fetch.
     * 
    **/
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     * 
    **/
    orderBy?: Enumerable<ReportOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     * 
    **/
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ReportScalarFieldEnum>
  }


  /**
   * Report create
   */
  export type ReportCreateArgs = {
    /**
     * Select specific fields to fetch from the Report
     * 
    **/
    select?: ReportSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReportInclude | null
    /**
     * The data needed to create a Report.
     * 
    **/
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }


  /**
   * Report createMany
   */
  export type ReportCreateManyArgs = {
    /**
     * The data used to create many Reports.
     * 
    **/
    data: Enumerable<ReportCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Report update
   */
  export type ReportUpdateArgs = {
    /**
     * Select specific fields to fetch from the Report
     * 
    **/
    select?: ReportSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReportInclude | null
    /**
     * The data needed to update a Report.
     * 
    **/
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     * 
    **/
    where: ReportWhereUniqueInput
  }


  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs = {
    /**
     * The data used to update Reports.
     * 
    **/
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     * 
    **/
    where?: ReportWhereInput
  }


  /**
   * Report upsert
   */
  export type ReportUpsertArgs = {
    /**
     * Select specific fields to fetch from the Report
     * 
    **/
    select?: ReportSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReportInclude | null
    /**
     * The filter to search for the Report to update in case it exists.
     * 
    **/
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     * 
    **/
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }


  /**
   * Report delete
   */
  export type ReportDeleteArgs = {
    /**
     * Select specific fields to fetch from the Report
     * 
    **/
    select?: ReportSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReportInclude | null
    /**
     * Filter which Report to delete.
     * 
    **/
    where: ReportWhereUniqueInput
  }


  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs = {
    /**
     * Filter which Reports to delete
     * 
    **/
    where?: ReportWhereInput
  }


  /**
   * Report: findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs = ReportFindUniqueArgsBase
      

  /**
   * Report: findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs = ReportFindFirstArgsBase
      

  /**
   * Report without action
   */
  export type ReportArgs = {
    /**
     * Select specific fields to fetch from the Report
     * 
    **/
    select?: ReportSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReportInclude | null
  }



  /**
   * Model ReportUser
   */


  export type AggregateReportUser = {
    _count: ReportUserCountAggregateOutputType | null
    _avg: ReportUserAvgAggregateOutputType | null
    _sum: ReportUserSumAggregateOutputType | null
    _min: ReportUserMinAggregateOutputType | null
    _max: ReportUserMaxAggregateOutputType | null
  }

  export type ReportUserAvgAggregateOutputType = {
    id: number | null
    reportId: number | null
    totalHours: number | null
    appointmentBookedCount: number | null
    appointmentCancelledCount: number | null
  }

  export type ReportUserSumAggregateOutputType = {
    id: number | null
    reportId: number | null
    totalHours: number | null
    appointmentBookedCount: number | null
    appointmentCancelledCount: number | null
  }

  export type ReportUserMinAggregateOutputType = {
    id: number | null
    reportId: number | null
    userEmail: string | null
    totalHours: number | null
    appointmentBookedCount: number | null
    appointmentCancelledCount: number | null
  }

  export type ReportUserMaxAggregateOutputType = {
    id: number | null
    reportId: number | null
    userEmail: string | null
    totalHours: number | null
    appointmentBookedCount: number | null
    appointmentCancelledCount: number | null
  }

  export type ReportUserCountAggregateOutputType = {
    id: number
    reportId: number
    userEmail: number
    totalHours: number
    appointmentBookedCount: number
    appointmentCancelledCount: number
    _all: number
  }


  export type ReportUserAvgAggregateInputType = {
    id?: true
    reportId?: true
    totalHours?: true
    appointmentBookedCount?: true
    appointmentCancelledCount?: true
  }

  export type ReportUserSumAggregateInputType = {
    id?: true
    reportId?: true
    totalHours?: true
    appointmentBookedCount?: true
    appointmentCancelledCount?: true
  }

  export type ReportUserMinAggregateInputType = {
    id?: true
    reportId?: true
    userEmail?: true
    totalHours?: true
    appointmentBookedCount?: true
    appointmentCancelledCount?: true
  }

  export type ReportUserMaxAggregateInputType = {
    id?: true
    reportId?: true
    userEmail?: true
    totalHours?: true
    appointmentBookedCount?: true
    appointmentCancelledCount?: true
  }

  export type ReportUserCountAggregateInputType = {
    id?: true
    reportId?: true
    userEmail?: true
    totalHours?: true
    appointmentBookedCount?: true
    appointmentCancelledCount?: true
    _all?: true
  }

  export type ReportUserAggregateArgs = {
    /**
     * Filter which ReportUser to aggregate.
     * 
    **/
    where?: ReportUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<ReportUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ReportUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReportUsers
    **/
    _count?: true | ReportUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportUserMaxAggregateInputType
  }

  export type GetReportUserAggregateType<T extends ReportUserAggregateArgs> = {
        [P in keyof T & keyof AggregateReportUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReportUser[P]>
      : GetScalarType<T[P], AggregateReportUser[P]>
  }




  export type ReportUserGroupByArgs = {
    where?: ReportUserWhereInput
    orderBy?: Enumerable<ReportUserOrderByWithAggregationInput>
    by: Array<ReportUserScalarFieldEnum>
    having?: ReportUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportUserCountAggregateInputType | true
    _avg?: ReportUserAvgAggregateInputType
    _sum?: ReportUserSumAggregateInputType
    _min?: ReportUserMinAggregateInputType
    _max?: ReportUserMaxAggregateInputType
  }


  export type ReportUserGroupByOutputType = {
    id: number
    reportId: number
    userEmail: string
    totalHours: number
    appointmentBookedCount: number
    appointmentCancelledCount: number
    _count: ReportUserCountAggregateOutputType | null
    _avg: ReportUserAvgAggregateOutputType | null
    _sum: ReportUserSumAggregateOutputType | null
    _min: ReportUserMinAggregateOutputType | null
    _max: ReportUserMaxAggregateOutputType | null
  }

  type GetReportUserGroupByPayload<T extends ReportUserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ReportUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportUserGroupByOutputType[P]>
            : GetScalarType<T[P], ReportUserGroupByOutputType[P]>
        }
      >
    >


  export type ReportUserSelect = {
    id?: boolean
    Report?: boolean | ReportArgs
    reportId?: boolean
    user?: boolean | UserArgs
    userEmail?: boolean
    totalHours?: boolean
    appointmentBookedCount?: boolean
    appointmentCancelledCount?: boolean
  }

  export type ReportUserInclude = {
    Report?: boolean | ReportArgs
    user?: boolean | UserArgs
  }

  export type ReportUserGetPayload<
    S extends boolean | null | undefined | ReportUserArgs,
    U = keyof S
      > = S extends true
        ? ReportUser
    : S extends undefined
    ? never
    : S extends ReportUserArgs | ReportUserFindManyArgs
    ?'include' extends U
    ? ReportUser  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Report' ? ReportGetPayload<S['include'][P]> | null :
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Report' ? ReportGetPayload<S['select'][P]> | null :
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof ReportUser ? ReportUser[P] : never
  } 
    : ReportUser
  : ReportUser


  type ReportUserCountArgs = Merge<
    Omit<ReportUserFindManyArgs, 'select' | 'include'> & {
      select?: ReportUserCountAggregateInputType | true
    }
  >

  export interface ReportUserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ReportUser that matches the filter.
     * @param {ReportUserFindUniqueArgs} args - Arguments to find a ReportUser
     * @example
     * // Get one ReportUser
     * const reportUser = await prisma.reportUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReportUserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ReportUserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ReportUser'> extends True ? CheckSelect<T, Prisma__ReportUserClient<ReportUser>, Prisma__ReportUserClient<ReportUserGetPayload<T>>> : CheckSelect<T, Prisma__ReportUserClient<ReportUser | null >, Prisma__ReportUserClient<ReportUserGetPayload<T> | null >>

    /**
     * Find the first ReportUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUserFindFirstArgs} args - Arguments to find a ReportUser
     * @example
     * // Get one ReportUser
     * const reportUser = await prisma.reportUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReportUserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ReportUserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ReportUser'> extends True ? CheckSelect<T, Prisma__ReportUserClient<ReportUser>, Prisma__ReportUserClient<ReportUserGetPayload<T>>> : CheckSelect<T, Prisma__ReportUserClient<ReportUser | null >, Prisma__ReportUserClient<ReportUserGetPayload<T> | null >>

    /**
     * Find zero or more ReportUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReportUsers
     * const reportUsers = await prisma.reportUser.findMany()
     * 
     * // Get first 10 ReportUsers
     * const reportUsers = await prisma.reportUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportUserWithIdOnly = await prisma.reportUser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReportUserFindManyArgs>(
      args?: SelectSubset<T, ReportUserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ReportUser>>, PrismaPromise<Array<ReportUserGetPayload<T>>>>

    /**
     * Create a ReportUser.
     * @param {ReportUserCreateArgs} args - Arguments to create a ReportUser.
     * @example
     * // Create one ReportUser
     * const ReportUser = await prisma.reportUser.create({
     *   data: {
     *     // ... data to create a ReportUser
     *   }
     * })
     * 
    **/
    create<T extends ReportUserCreateArgs>(
      args: SelectSubset<T, ReportUserCreateArgs>
    ): CheckSelect<T, Prisma__ReportUserClient<ReportUser>, Prisma__ReportUserClient<ReportUserGetPayload<T>>>

    /**
     * Create many ReportUsers.
     *     @param {ReportUserCreateManyArgs} args - Arguments to create many ReportUsers.
     *     @example
     *     // Create many ReportUsers
     *     const reportUser = await prisma.reportUser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReportUserCreateManyArgs>(
      args?: SelectSubset<T, ReportUserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ReportUser.
     * @param {ReportUserDeleteArgs} args - Arguments to delete one ReportUser.
     * @example
     * // Delete one ReportUser
     * const ReportUser = await prisma.reportUser.delete({
     *   where: {
     *     // ... filter to delete one ReportUser
     *   }
     * })
     * 
    **/
    delete<T extends ReportUserDeleteArgs>(
      args: SelectSubset<T, ReportUserDeleteArgs>
    ): CheckSelect<T, Prisma__ReportUserClient<ReportUser>, Prisma__ReportUserClient<ReportUserGetPayload<T>>>

    /**
     * Update one ReportUser.
     * @param {ReportUserUpdateArgs} args - Arguments to update one ReportUser.
     * @example
     * // Update one ReportUser
     * const reportUser = await prisma.reportUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReportUserUpdateArgs>(
      args: SelectSubset<T, ReportUserUpdateArgs>
    ): CheckSelect<T, Prisma__ReportUserClient<ReportUser>, Prisma__ReportUserClient<ReportUserGetPayload<T>>>

    /**
     * Delete zero or more ReportUsers.
     * @param {ReportUserDeleteManyArgs} args - Arguments to filter ReportUsers to delete.
     * @example
     * // Delete a few ReportUsers
     * const { count } = await prisma.reportUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReportUserDeleteManyArgs>(
      args?: SelectSubset<T, ReportUserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReportUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReportUsers
     * const reportUser = await prisma.reportUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReportUserUpdateManyArgs>(
      args: SelectSubset<T, ReportUserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ReportUser.
     * @param {ReportUserUpsertArgs} args - Arguments to update or create a ReportUser.
     * @example
     * // Update or create a ReportUser
     * const reportUser = await prisma.reportUser.upsert({
     *   create: {
     *     // ... data to create a ReportUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReportUser we want to update
     *   }
     * })
    **/
    upsert<T extends ReportUserUpsertArgs>(
      args: SelectSubset<T, ReportUserUpsertArgs>
    ): CheckSelect<T, Prisma__ReportUserClient<ReportUser>, Prisma__ReportUserClient<ReportUserGetPayload<T>>>

    /**
     * Find one ReportUser that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ReportUserFindUniqueOrThrowArgs} args - Arguments to find a ReportUser
     * @example
     * // Get one ReportUser
     * const reportUser = await prisma.reportUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReportUserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ReportUserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ReportUserClient<ReportUser>, Prisma__ReportUserClient<ReportUserGetPayload<T>>>

    /**
     * Find the first ReportUser that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUserFindFirstOrThrowArgs} args - Arguments to find a ReportUser
     * @example
     * // Get one ReportUser
     * const reportUser = await prisma.reportUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReportUserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ReportUserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ReportUserClient<ReportUser>, Prisma__ReportUserClient<ReportUserGetPayload<T>>>

    /**
     * Count the number of ReportUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUserCountArgs} args - Arguments to filter ReportUsers to count.
     * @example
     * // Count the number of ReportUsers
     * const count = await prisma.reportUser.count({
     *   where: {
     *     // ... the filter for the ReportUsers we want to count
     *   }
     * })
    **/
    count<T extends ReportUserCountArgs>(
      args?: Subset<T, ReportUserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReportUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportUserAggregateArgs>(args: Subset<T, ReportUserAggregateArgs>): PrismaPromise<GetReportUserAggregateType<T>>

    /**
     * Group by ReportUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReportUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportUserGroupByArgs['orderBy'] }
        : { orderBy?: ReportUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReportUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReportUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ReportUserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Report<T extends ReportArgs = {}>(args?: Subset<T, ReportArgs>): CheckSelect<T, Prisma__ReportClient<Report | null >, Prisma__ReportClient<ReportGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ReportUser base type for findUnique actions
   */
  export type ReportUserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ReportUser
     * 
    **/
    select?: ReportUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReportUserInclude | null
    /**
     * Filter, which ReportUser to fetch.
     * 
    **/
    where: ReportUserWhereUniqueInput
  }

  /**
   * ReportUser: findUnique
   */
  export interface ReportUserFindUniqueArgs extends ReportUserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ReportUser base type for findFirst actions
   */
  export type ReportUserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ReportUser
     * 
    **/
    select?: ReportUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReportUserInclude | null
    /**
     * Filter, which ReportUser to fetch.
     * 
    **/
    where?: ReportUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<ReportUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReportUsers.
     * 
    **/
    cursor?: ReportUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReportUsers.
     * 
    **/
    distinct?: Enumerable<ReportUserScalarFieldEnum>
  }

  /**
   * ReportUser: findFirst
   */
  export interface ReportUserFindFirstArgs extends ReportUserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ReportUser findMany
   */
  export type ReportUserFindManyArgs = {
    /**
     * Select specific fields to fetch from the ReportUser
     * 
    **/
    select?: ReportUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReportUserInclude | null
    /**
     * Filter, which ReportUsers to fetch.
     * 
    **/
    where?: ReportUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<ReportUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReportUsers.
     * 
    **/
    cursor?: ReportUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportUsers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ReportUserScalarFieldEnum>
  }


  /**
   * ReportUser create
   */
  export type ReportUserCreateArgs = {
    /**
     * Select specific fields to fetch from the ReportUser
     * 
    **/
    select?: ReportUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReportUserInclude | null
    /**
     * The data needed to create a ReportUser.
     * 
    **/
    data: XOR<ReportUserCreateInput, ReportUserUncheckedCreateInput>
  }


  /**
   * ReportUser createMany
   */
  export type ReportUserCreateManyArgs = {
    /**
     * The data used to create many ReportUsers.
     * 
    **/
    data: Enumerable<ReportUserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ReportUser update
   */
  export type ReportUserUpdateArgs = {
    /**
     * Select specific fields to fetch from the ReportUser
     * 
    **/
    select?: ReportUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReportUserInclude | null
    /**
     * The data needed to update a ReportUser.
     * 
    **/
    data: XOR<ReportUserUpdateInput, ReportUserUncheckedUpdateInput>
    /**
     * Choose, which ReportUser to update.
     * 
    **/
    where: ReportUserWhereUniqueInput
  }


  /**
   * ReportUser updateMany
   */
  export type ReportUserUpdateManyArgs = {
    /**
     * The data used to update ReportUsers.
     * 
    **/
    data: XOR<ReportUserUpdateManyMutationInput, ReportUserUncheckedUpdateManyInput>
    /**
     * Filter which ReportUsers to update
     * 
    **/
    where?: ReportUserWhereInput
  }


  /**
   * ReportUser upsert
   */
  export type ReportUserUpsertArgs = {
    /**
     * Select specific fields to fetch from the ReportUser
     * 
    **/
    select?: ReportUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReportUserInclude | null
    /**
     * The filter to search for the ReportUser to update in case it exists.
     * 
    **/
    where: ReportUserWhereUniqueInput
    /**
     * In case the ReportUser found by the `where` argument doesn't exist, create a new ReportUser with this data.
     * 
    **/
    create: XOR<ReportUserCreateInput, ReportUserUncheckedCreateInput>
    /**
     * In case the ReportUser was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ReportUserUpdateInput, ReportUserUncheckedUpdateInput>
  }


  /**
   * ReportUser delete
   */
  export type ReportUserDeleteArgs = {
    /**
     * Select specific fields to fetch from the ReportUser
     * 
    **/
    select?: ReportUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReportUserInclude | null
    /**
     * Filter which ReportUser to delete.
     * 
    **/
    where: ReportUserWhereUniqueInput
  }


  /**
   * ReportUser deleteMany
   */
  export type ReportUserDeleteManyArgs = {
    /**
     * Filter which ReportUsers to delete
     * 
    **/
    where?: ReportUserWhereInput
  }


  /**
   * ReportUser: findUniqueOrThrow
   */
  export type ReportUserFindUniqueOrThrowArgs = ReportUserFindUniqueArgsBase
      

  /**
   * ReportUser: findFirstOrThrow
   */
  export type ReportUserFindFirstOrThrowArgs = ReportUserFindFirstArgsBase
      

  /**
   * ReportUser without action
   */
  export type ReportUserArgs = {
    /**
     * Select specific fields to fetch from the ReportUser
     * 
    **/
    select?: ReportUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReportUserInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
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
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    datetimeFrom: 'datetimeFrom',
    datetimeTo: 'datetimeTo',
    totalHours: 'totalHours',
    userEmail: 'userEmail',
    calendarEventId: 'calendarEventId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const AppointmentDetailScalarFieldEnum: {
    id: 'id',
    appointmentId: 'appointmentId',
    comments: 'comments',
    appointmentType: 'appointmentType'
  };

  export type AppointmentDetailScalarFieldEnum = (typeof AppointmentDetailScalarFieldEnum)[keyof typeof AppointmentDetailScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    fileName: 'fileName',
    datetimeFrom: 'datetimeFrom',
    datetimeTo: 'datetimeTo',
    totalUsers: 'totalUsers',
    totalHours: 'totalHours',
    totalAppointmentBooked: 'totalAppointmentBooked',
    totalAppointmentCancelled: 'totalAppointmentCancelled'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const ReportUserScalarFieldEnum: {
    id: 'id',
    reportId: 'reportId',
    userEmail: 'userEmail',
    totalHours: 'totalHours',
    appointmentBookedCount: 'appointmentBookedCount',
    appointmentCancelledCount: 'appointmentCancelledCount'
  };

  export type ReportUserScalarFieldEnum = (typeof ReportUserScalarFieldEnum)[keyof typeof ReportUserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    phoneNumber?: StringFilter | string
    password?: StringFilter | string
    salt?: StringFilter | string
    kakaoID?: StringNullableFilter | string | null
    isBlacklisted?: BoolFilter | boolean
    role?: EnumRoleFilter | Role
    appointments?: AppointmentListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    ReportUser?: ReportUserListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    kakaoID?: SortOrder
    isBlacklisted?: SortOrder
    role?: SortOrder
    appointments?: AppointmentOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ReportUser?: ReportUserOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
    phoneNumber?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    kakaoID?: SortOrder
    isBlacklisted?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    phoneNumber?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    salt?: StringWithAggregatesFilter | string
    kakaoID?: StringNullableWithAggregatesFilter | string | null
    isBlacklisted?: BoolWithAggregatesFilter | boolean
    role?: EnumRoleWithAggregatesFilter | Role
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AppointmentWhereInput = {
    AND?: Enumerable<AppointmentWhereInput>
    OR?: Enumerable<AppointmentWhereInput>
    NOT?: Enumerable<AppointmentWhereInput>
    id?: IntFilter | number
    datetimeFrom?: DateTimeFilter | Date | string
    datetimeTo?: DateTimeFilter | Date | string
    totalHours?: FloatFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    userEmail?: StringFilter | string
    calendarEventId?: StringFilter | string
    status?: EnumAppointmentStatusFilter | AppointmentStatus
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    AppointmentDetail?: XOR<AppointmentDetailRelationFilter, AppointmentDetailWhereInput> | null
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    datetimeFrom?: SortOrder
    datetimeTo?: SortOrder
    totalHours?: SortOrder
    user?: UserOrderByWithRelationInput
    userEmail?: SortOrder
    calendarEventId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    AppointmentDetail?: AppointmentDetailOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = {
    id?: number
  }

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    datetimeFrom?: SortOrder
    datetimeTo?: SortOrder
    totalHours?: SortOrder
    userEmail?: SortOrder
    calendarEventId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AppointmentScalarWhereWithAggregatesInput>
    OR?: Enumerable<AppointmentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AppointmentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    datetimeFrom?: DateTimeWithAggregatesFilter | Date | string
    datetimeTo?: DateTimeWithAggregatesFilter | Date | string
    totalHours?: FloatWithAggregatesFilter | number
    userEmail?: StringWithAggregatesFilter | string
    calendarEventId?: StringWithAggregatesFilter | string
    status?: EnumAppointmentStatusWithAggregatesFilter | AppointmentStatus
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AppointmentDetailWhereInput = {
    AND?: Enumerable<AppointmentDetailWhereInput>
    OR?: Enumerable<AppointmentDetailWhereInput>
    NOT?: Enumerable<AppointmentDetailWhereInput>
    id?: IntFilter | number
    appointment?: XOR<AppointmentRelationFilter, AppointmentWhereInput>
    appointmentId?: IntFilter | number
    comments?: StringNullableFilter | string | null
    appointmentType?: StringFilter | string
  }

  export type AppointmentDetailOrderByWithRelationInput = {
    id?: SortOrder
    appointment?: AppointmentOrderByWithRelationInput
    appointmentId?: SortOrder
    comments?: SortOrder
    appointmentType?: SortOrder
  }

  export type AppointmentDetailWhereUniqueInput = {
    id?: number
    appointmentId?: number
  }

  export type AppointmentDetailOrderByWithAggregationInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    comments?: SortOrder
    appointmentType?: SortOrder
    _count?: AppointmentDetailCountOrderByAggregateInput
    _avg?: AppointmentDetailAvgOrderByAggregateInput
    _max?: AppointmentDetailMaxOrderByAggregateInput
    _min?: AppointmentDetailMinOrderByAggregateInput
    _sum?: AppointmentDetailSumOrderByAggregateInput
  }

  export type AppointmentDetailScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AppointmentDetailScalarWhereWithAggregatesInput>
    OR?: Enumerable<AppointmentDetailScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AppointmentDetailScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    appointmentId?: IntWithAggregatesFilter | number
    comments?: StringNullableWithAggregatesFilter | string | null
    appointmentType?: StringWithAggregatesFilter | string
  }

  export type ReportWhereInput = {
    AND?: Enumerable<ReportWhereInput>
    OR?: Enumerable<ReportWhereInput>
    NOT?: Enumerable<ReportWhereInput>
    id?: IntFilter | number
    fileName?: StringFilter | string
    datetimeFrom?: DateTimeFilter | Date | string
    datetimeTo?: DateTimeFilter | Date | string
    totalUsers?: IntFilter | number
    totalHours?: FloatFilter | number
    totalAppointmentBooked?: IntFilter | number
    totalAppointmentCancelled?: IntFilter | number
    reportUsers?: ReportUserListRelationFilter
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    fileName?: SortOrder
    datetimeFrom?: SortOrder
    datetimeTo?: SortOrder
    totalUsers?: SortOrder
    totalHours?: SortOrder
    totalAppointmentBooked?: SortOrder
    totalAppointmentCancelled?: SortOrder
    reportUsers?: ReportUserOrderByRelationAggregateInput
  }

  export type ReportWhereUniqueInput = {
    id?: number
  }

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    fileName?: SortOrder
    datetimeFrom?: SortOrder
    datetimeTo?: SortOrder
    totalUsers?: SortOrder
    totalHours?: SortOrder
    totalAppointmentBooked?: SortOrder
    totalAppointmentCancelled?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _avg?: ReportAvgOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
    _sum?: ReportSumOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ReportScalarWhereWithAggregatesInput>
    OR?: Enumerable<ReportScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ReportScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    fileName?: StringWithAggregatesFilter | string
    datetimeFrom?: DateTimeWithAggregatesFilter | Date | string
    datetimeTo?: DateTimeWithAggregatesFilter | Date | string
    totalUsers?: IntWithAggregatesFilter | number
    totalHours?: FloatWithAggregatesFilter | number
    totalAppointmentBooked?: IntWithAggregatesFilter | number
    totalAppointmentCancelled?: IntWithAggregatesFilter | number
  }

  export type ReportUserWhereInput = {
    AND?: Enumerable<ReportUserWhereInput>
    OR?: Enumerable<ReportUserWhereInput>
    NOT?: Enumerable<ReportUserWhereInput>
    id?: IntFilter | number
    Report?: XOR<ReportRelationFilter, ReportWhereInput> | null
    reportId?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    userEmail?: StringFilter | string
    totalHours?: FloatFilter | number
    appointmentBookedCount?: IntFilter | number
    appointmentCancelledCount?: IntFilter | number
  }

  export type ReportUserOrderByWithRelationInput = {
    id?: SortOrder
    Report?: ReportOrderByWithRelationInput
    reportId?: SortOrder
    user?: UserOrderByWithRelationInput
    userEmail?: SortOrder
    totalHours?: SortOrder
    appointmentBookedCount?: SortOrder
    appointmentCancelledCount?: SortOrder
  }

  export type ReportUserWhereUniqueInput = {
    id?: number
  }

  export type ReportUserOrderByWithAggregationInput = {
    id?: SortOrder
    reportId?: SortOrder
    userEmail?: SortOrder
    totalHours?: SortOrder
    appointmentBookedCount?: SortOrder
    appointmentCancelledCount?: SortOrder
    _count?: ReportUserCountOrderByAggregateInput
    _avg?: ReportUserAvgOrderByAggregateInput
    _max?: ReportUserMaxOrderByAggregateInput
    _min?: ReportUserMinOrderByAggregateInput
    _sum?: ReportUserSumOrderByAggregateInput
  }

  export type ReportUserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ReportUserScalarWhereWithAggregatesInput>
    OR?: Enumerable<ReportUserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ReportUserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    reportId?: IntWithAggregatesFilter | number
    userEmail?: StringWithAggregatesFilter | string
    totalHours?: FloatWithAggregatesFilter | number
    appointmentBookedCount?: IntWithAggregatesFilter | number
    appointmentCancelledCount?: IntWithAggregatesFilter | number
  }

  export type UserCreateInput = {
    email: string
    phoneNumber: string
    password: string
    salt: string
    kakaoID?: string | null
    isBlacklisted?: boolean
    role?: Role
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
    ReportUser?: ReportUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    phoneNumber: string
    password: string
    salt: string
    kakaoID?: string | null
    isBlacklisted?: boolean
    role?: Role
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
    ReportUser?: ReportUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    kakaoID?: NullableStringFieldUpdateOperationsInput | string | null
    isBlacklisted?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | Role
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ReportUser?: ReportUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    kakaoID?: NullableStringFieldUpdateOperationsInput | string | null
    isBlacklisted?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | Role
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ReportUser?: ReportUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    phoneNumber: string
    password: string
    salt: string
    kakaoID?: string | null
    isBlacklisted?: boolean
    role?: Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    kakaoID?: NullableStringFieldUpdateOperationsInput | string | null
    isBlacklisted?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    kakaoID?: NullableStringFieldUpdateOperationsInput | string | null
    isBlacklisted?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateInput = {
    datetimeFrom: Date | string
    datetimeTo: Date | string
    totalHours: number
    user: UserCreateNestedOneWithoutAppointmentsInput
    calendarEventId: string
    status?: AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    AppointmentDetail?: AppointmentDetailCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: number
    datetimeFrom: Date | string
    datetimeTo: Date | string
    totalHours: number
    userEmail: string
    calendarEventId: string
    status?: AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    AppointmentDetail?: AppointmentDetailUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUpdateInput = {
    datetimeFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    datetimeTo?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHours?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutAppointmentsNestedInput
    calendarEventId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AppointmentDetail?: AppointmentDetailUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    datetimeFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    datetimeTo?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHours?: FloatFieldUpdateOperationsInput | number
    userEmail?: StringFieldUpdateOperationsInput | string
    calendarEventId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AppointmentDetail?: AppointmentDetailUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentCreateManyInput = {
    id?: number
    datetimeFrom: Date | string
    datetimeTo: Date | string
    totalHours: number
    userEmail: string
    calendarEventId: string
    status?: AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    datetimeFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    datetimeTo?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHours?: FloatFieldUpdateOperationsInput | number
    calendarEventId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    datetimeFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    datetimeTo?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHours?: FloatFieldUpdateOperationsInput | number
    userEmail?: StringFieldUpdateOperationsInput | string
    calendarEventId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentDetailCreateInput = {
    appointment: AppointmentCreateNestedOneWithoutAppointmentDetailInput
    comments?: string | null
    appointmentType: string
  }

  export type AppointmentDetailUncheckedCreateInput = {
    id?: number
    appointmentId: number
    comments?: string | null
    appointmentType: string
  }

  export type AppointmentDetailUpdateInput = {
    appointment?: AppointmentUpdateOneRequiredWithoutAppointmentDetailNestedInput
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentType?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    appointmentId?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentType?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentDetailCreateManyInput = {
    id?: number
    appointmentId: number
    comments?: string | null
    appointmentType: string
  }

  export type AppointmentDetailUpdateManyMutationInput = {
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentType?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    appointmentId?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentType?: StringFieldUpdateOperationsInput | string
  }

  export type ReportCreateInput = {
    fileName: string
    datetimeFrom: Date | string
    datetimeTo: Date | string
    totalUsers: number
    totalHours: number
    totalAppointmentBooked: number
    totalAppointmentCancelled: number
    reportUsers?: ReportUserCreateNestedManyWithoutReportInput
  }

  export type ReportUncheckedCreateInput = {
    id?: number
    fileName: string
    datetimeFrom: Date | string
    datetimeTo: Date | string
    totalUsers: number
    totalHours: number
    totalAppointmentBooked: number
    totalAppointmentCancelled: number
    reportUsers?: ReportUserUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportUpdateInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    datetimeFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    datetimeTo?: DateTimeFieldUpdateOperationsInput | Date | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    totalHours?: FloatFieldUpdateOperationsInput | number
    totalAppointmentBooked?: IntFieldUpdateOperationsInput | number
    totalAppointmentCancelled?: IntFieldUpdateOperationsInput | number
    reportUsers?: ReportUserUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    datetimeFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    datetimeTo?: DateTimeFieldUpdateOperationsInput | Date | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    totalHours?: FloatFieldUpdateOperationsInput | number
    totalAppointmentBooked?: IntFieldUpdateOperationsInput | number
    totalAppointmentCancelled?: IntFieldUpdateOperationsInput | number
    reportUsers?: ReportUserUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportCreateManyInput = {
    id?: number
    fileName: string
    datetimeFrom: Date | string
    datetimeTo: Date | string
    totalUsers: number
    totalHours: number
    totalAppointmentBooked: number
    totalAppointmentCancelled: number
  }

  export type ReportUpdateManyMutationInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    datetimeFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    datetimeTo?: DateTimeFieldUpdateOperationsInput | Date | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    totalHours?: FloatFieldUpdateOperationsInput | number
    totalAppointmentBooked?: IntFieldUpdateOperationsInput | number
    totalAppointmentCancelled?: IntFieldUpdateOperationsInput | number
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    datetimeFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    datetimeTo?: DateTimeFieldUpdateOperationsInput | Date | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    totalHours?: FloatFieldUpdateOperationsInput | number
    totalAppointmentBooked?: IntFieldUpdateOperationsInput | number
    totalAppointmentCancelled?: IntFieldUpdateOperationsInput | number
  }

  export type ReportUserCreateInput = {
    Report?: ReportCreateNestedOneWithoutReportUsersInput
    user: UserCreateNestedOneWithoutReportUserInput
    totalHours: number
    appointmentBookedCount: number
    appointmentCancelledCount: number
  }

  export type ReportUserUncheckedCreateInput = {
    id?: number
    reportId: number
    userEmail: string
    totalHours: number
    appointmentBookedCount: number
    appointmentCancelledCount: number
  }

  export type ReportUserUpdateInput = {
    Report?: ReportUpdateOneWithoutReportUsersNestedInput
    user?: UserUpdateOneRequiredWithoutReportUserNestedInput
    totalHours?: FloatFieldUpdateOperationsInput | number
    appointmentBookedCount?: IntFieldUpdateOperationsInput | number
    appointmentCancelledCount?: IntFieldUpdateOperationsInput | number
  }

  export type ReportUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reportId?: IntFieldUpdateOperationsInput | number
    userEmail?: StringFieldUpdateOperationsInput | string
    totalHours?: FloatFieldUpdateOperationsInput | number
    appointmentBookedCount?: IntFieldUpdateOperationsInput | number
    appointmentCancelledCount?: IntFieldUpdateOperationsInput | number
  }

  export type ReportUserCreateManyInput = {
    id?: number
    reportId: number
    userEmail: string
    totalHours: number
    appointmentBookedCount: number
    appointmentCancelledCount: number
  }

  export type ReportUserUpdateManyMutationInput = {
    totalHours?: FloatFieldUpdateOperationsInput | number
    appointmentBookedCount?: IntFieldUpdateOperationsInput | number
    appointmentCancelledCount?: IntFieldUpdateOperationsInput | number
  }

  export type ReportUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reportId?: IntFieldUpdateOperationsInput | number
    userEmail?: StringFieldUpdateOperationsInput | string
    totalHours?: FloatFieldUpdateOperationsInput | number
    appointmentBookedCount?: IntFieldUpdateOperationsInput | number
    appointmentCancelledCount?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type EnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ReportUserListRelationFilter = {
    every?: ReportUserWhereInput
    some?: ReportUserWhereInput
    none?: ReportUserWhereInput
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    kakaoID?: SortOrder
    isBlacklisted?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    kakaoID?: SortOrder
    isBlacklisted?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    kakaoID?: SortOrder
    isBlacklisted?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type EnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EnumAppointmentStatusFilter = {
    equals?: AppointmentStatus
    in?: Enumerable<AppointmentStatus>
    notIn?: Enumerable<AppointmentStatus>
    not?: NestedEnumAppointmentStatusFilter | AppointmentStatus
  }

  export type AppointmentDetailRelationFilter = {
    is?: AppointmentDetailWhereInput | null
    isNot?: AppointmentDetailWhereInput | null
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    datetimeFrom?: SortOrder
    datetimeTo?: SortOrder
    totalHours?: SortOrder
    userEmail?: SortOrder
    calendarEventId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    id?: SortOrder
    totalHours?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    datetimeFrom?: SortOrder
    datetimeTo?: SortOrder
    totalHours?: SortOrder
    userEmail?: SortOrder
    calendarEventId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    datetimeFrom?: SortOrder
    datetimeTo?: SortOrder
    totalHours?: SortOrder
    userEmail?: SortOrder
    calendarEventId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    id?: SortOrder
    totalHours?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type EnumAppointmentStatusWithAggregatesFilter = {
    equals?: AppointmentStatus
    in?: Enumerable<AppointmentStatus>
    notIn?: Enumerable<AppointmentStatus>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter | AppointmentStatus
    _count?: NestedIntFilter
    _min?: NestedEnumAppointmentStatusFilter
    _max?: NestedEnumAppointmentStatusFilter
  }

  export type AppointmentRelationFilter = {
    is?: AppointmentWhereInput
    isNot?: AppointmentWhereInput
  }

  export type AppointmentDetailCountOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    comments?: SortOrder
    appointmentType?: SortOrder
  }

  export type AppointmentDetailAvgOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
  }

  export type AppointmentDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    comments?: SortOrder
    appointmentType?: SortOrder
  }

  export type AppointmentDetailMinOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    comments?: SortOrder
    appointmentType?: SortOrder
  }

  export type AppointmentDetailSumOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    datetimeFrom?: SortOrder
    datetimeTo?: SortOrder
    totalUsers?: SortOrder
    totalHours?: SortOrder
    totalAppointmentBooked?: SortOrder
    totalAppointmentCancelled?: SortOrder
  }

  export type ReportAvgOrderByAggregateInput = {
    id?: SortOrder
    totalUsers?: SortOrder
    totalHours?: SortOrder
    totalAppointmentBooked?: SortOrder
    totalAppointmentCancelled?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    datetimeFrom?: SortOrder
    datetimeTo?: SortOrder
    totalUsers?: SortOrder
    totalHours?: SortOrder
    totalAppointmentBooked?: SortOrder
    totalAppointmentCancelled?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    datetimeFrom?: SortOrder
    datetimeTo?: SortOrder
    totalUsers?: SortOrder
    totalHours?: SortOrder
    totalAppointmentBooked?: SortOrder
    totalAppointmentCancelled?: SortOrder
  }

  export type ReportSumOrderByAggregateInput = {
    id?: SortOrder
    totalUsers?: SortOrder
    totalHours?: SortOrder
    totalAppointmentBooked?: SortOrder
    totalAppointmentCancelled?: SortOrder
  }

  export type ReportRelationFilter = {
    is?: ReportWhereInput | null
    isNot?: ReportWhereInput | null
  }

  export type ReportUserCountOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    userEmail?: SortOrder
    totalHours?: SortOrder
    appointmentBookedCount?: SortOrder
    appointmentCancelledCount?: SortOrder
  }

  export type ReportUserAvgOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    totalHours?: SortOrder
    appointmentBookedCount?: SortOrder
    appointmentCancelledCount?: SortOrder
  }

  export type ReportUserMaxOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    userEmail?: SortOrder
    totalHours?: SortOrder
    appointmentBookedCount?: SortOrder
    appointmentCancelledCount?: SortOrder
  }

  export type ReportUserMinOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    userEmail?: SortOrder
    totalHours?: SortOrder
    appointmentBookedCount?: SortOrder
    appointmentCancelledCount?: SortOrder
  }

  export type ReportUserSumOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    totalHours?: SortOrder
    appointmentBookedCount?: SortOrder
    appointmentCancelledCount?: SortOrder
  }

  export type AppointmentCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AppointmentCreateWithoutUserInput>, Enumerable<AppointmentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AppointmentCreateOrConnectWithoutUserInput>
    createMany?: AppointmentCreateManyUserInputEnvelope
    connect?: Enumerable<AppointmentWhereUniqueInput>
  }

  export type ReportUserCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ReportUserCreateWithoutUserInput>, Enumerable<ReportUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReportUserCreateOrConnectWithoutUserInput>
    createMany?: ReportUserCreateManyUserInputEnvelope
    connect?: Enumerable<ReportUserWhereUniqueInput>
  }

  export type AppointmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AppointmentCreateWithoutUserInput>, Enumerable<AppointmentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AppointmentCreateOrConnectWithoutUserInput>
    createMany?: AppointmentCreateManyUserInputEnvelope
    connect?: Enumerable<AppointmentWhereUniqueInput>
  }

  export type ReportUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ReportUserCreateWithoutUserInput>, Enumerable<ReportUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReportUserCreateOrConnectWithoutUserInput>
    createMany?: ReportUserCreateManyUserInputEnvelope
    connect?: Enumerable<ReportUserWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: Role
  }

  export type AppointmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AppointmentCreateWithoutUserInput>, Enumerable<AppointmentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AppointmentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AppointmentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AppointmentCreateManyUserInputEnvelope
    set?: Enumerable<AppointmentWhereUniqueInput>
    disconnect?: Enumerable<AppointmentWhereUniqueInput>
    delete?: Enumerable<AppointmentWhereUniqueInput>
    connect?: Enumerable<AppointmentWhereUniqueInput>
    update?: Enumerable<AppointmentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AppointmentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AppointmentScalarWhereInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReportUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ReportUserCreateWithoutUserInput>, Enumerable<ReportUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReportUserCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ReportUserUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ReportUserCreateManyUserInputEnvelope
    set?: Enumerable<ReportUserWhereUniqueInput>
    disconnect?: Enumerable<ReportUserWhereUniqueInput>
    delete?: Enumerable<ReportUserWhereUniqueInput>
    connect?: Enumerable<ReportUserWhereUniqueInput>
    update?: Enumerable<ReportUserUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ReportUserUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ReportUserScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AppointmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AppointmentCreateWithoutUserInput>, Enumerable<AppointmentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AppointmentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AppointmentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AppointmentCreateManyUserInputEnvelope
    set?: Enumerable<AppointmentWhereUniqueInput>
    disconnect?: Enumerable<AppointmentWhereUniqueInput>
    delete?: Enumerable<AppointmentWhereUniqueInput>
    connect?: Enumerable<AppointmentWhereUniqueInput>
    update?: Enumerable<AppointmentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AppointmentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AppointmentScalarWhereInput>
  }

  export type ReportUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ReportUserCreateWithoutUserInput>, Enumerable<ReportUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReportUserCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ReportUserUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ReportUserCreateManyUserInputEnvelope
    set?: Enumerable<ReportUserWhereUniqueInput>
    disconnect?: Enumerable<ReportUserWhereUniqueInput>
    delete?: Enumerable<ReportUserWhereUniqueInput>
    connect?: Enumerable<ReportUserWhereUniqueInput>
    update?: Enumerable<ReportUserUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ReportUserUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ReportUserScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsInput
    connect?: UserWhereUniqueInput
  }

  export type AppointmentDetailCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<AppointmentDetailCreateWithoutAppointmentInput, AppointmentDetailUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: AppointmentDetailCreateOrConnectWithoutAppointmentInput
    connect?: AppointmentDetailWhereUniqueInput
  }

  export type AppointmentDetailUncheckedCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<AppointmentDetailCreateWithoutAppointmentInput, AppointmentDetailUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: AppointmentDetailCreateOrConnectWithoutAppointmentInput
    connect?: AppointmentDetailWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsInput
    upsert?: UserUpsertWithoutAppointmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAppointmentsInput, UserUncheckedUpdateWithoutAppointmentsInput>
  }

  export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: AppointmentStatus
  }

  export type AppointmentDetailUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<AppointmentDetailCreateWithoutAppointmentInput, AppointmentDetailUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: AppointmentDetailCreateOrConnectWithoutAppointmentInput
    upsert?: AppointmentDetailUpsertWithoutAppointmentInput
    disconnect?: boolean
    delete?: boolean
    connect?: AppointmentDetailWhereUniqueInput
    update?: XOR<AppointmentDetailUpdateWithoutAppointmentInput, AppointmentDetailUncheckedUpdateWithoutAppointmentInput>
  }

  export type AppointmentDetailUncheckedUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<AppointmentDetailCreateWithoutAppointmentInput, AppointmentDetailUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: AppointmentDetailCreateOrConnectWithoutAppointmentInput
    upsert?: AppointmentDetailUpsertWithoutAppointmentInput
    disconnect?: boolean
    delete?: boolean
    connect?: AppointmentDetailWhereUniqueInput
    update?: XOR<AppointmentDetailUpdateWithoutAppointmentInput, AppointmentDetailUncheckedUpdateWithoutAppointmentInput>
  }

  export type AppointmentCreateNestedOneWithoutAppointmentDetailInput = {
    create?: XOR<AppointmentCreateWithoutAppointmentDetailInput, AppointmentUncheckedCreateWithoutAppointmentDetailInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutAppointmentDetailInput
    connect?: AppointmentWhereUniqueInput
  }

  export type AppointmentUpdateOneRequiredWithoutAppointmentDetailNestedInput = {
    create?: XOR<AppointmentCreateWithoutAppointmentDetailInput, AppointmentUncheckedCreateWithoutAppointmentDetailInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutAppointmentDetailInput
    upsert?: AppointmentUpsertWithoutAppointmentDetailInput
    connect?: AppointmentWhereUniqueInput
    update?: XOR<AppointmentUpdateWithoutAppointmentDetailInput, AppointmentUncheckedUpdateWithoutAppointmentDetailInput>
  }

  export type ReportUserCreateNestedManyWithoutReportInput = {
    create?: XOR<Enumerable<ReportUserCreateWithoutReportInput>, Enumerable<ReportUserUncheckedCreateWithoutReportInput>>
    connectOrCreate?: Enumerable<ReportUserCreateOrConnectWithoutReportInput>
    createMany?: ReportUserCreateManyReportInputEnvelope
    connect?: Enumerable<ReportUserWhereUniqueInput>
  }

  export type ReportUserUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<Enumerable<ReportUserCreateWithoutReportInput>, Enumerable<ReportUserUncheckedCreateWithoutReportInput>>
    connectOrCreate?: Enumerable<ReportUserCreateOrConnectWithoutReportInput>
    createMany?: ReportUserCreateManyReportInputEnvelope
    connect?: Enumerable<ReportUserWhereUniqueInput>
  }

  export type ReportUserUpdateManyWithoutReportNestedInput = {
    create?: XOR<Enumerable<ReportUserCreateWithoutReportInput>, Enumerable<ReportUserUncheckedCreateWithoutReportInput>>
    connectOrCreate?: Enumerable<ReportUserCreateOrConnectWithoutReportInput>
    upsert?: Enumerable<ReportUserUpsertWithWhereUniqueWithoutReportInput>
    createMany?: ReportUserCreateManyReportInputEnvelope
    set?: Enumerable<ReportUserWhereUniqueInput>
    disconnect?: Enumerable<ReportUserWhereUniqueInput>
    delete?: Enumerable<ReportUserWhereUniqueInput>
    connect?: Enumerable<ReportUserWhereUniqueInput>
    update?: Enumerable<ReportUserUpdateWithWhereUniqueWithoutReportInput>
    updateMany?: Enumerable<ReportUserUpdateManyWithWhereWithoutReportInput>
    deleteMany?: Enumerable<ReportUserScalarWhereInput>
  }

  export type ReportUserUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<Enumerable<ReportUserCreateWithoutReportInput>, Enumerable<ReportUserUncheckedCreateWithoutReportInput>>
    connectOrCreate?: Enumerable<ReportUserCreateOrConnectWithoutReportInput>
    upsert?: Enumerable<ReportUserUpsertWithWhereUniqueWithoutReportInput>
    createMany?: ReportUserCreateManyReportInputEnvelope
    set?: Enumerable<ReportUserWhereUniqueInput>
    disconnect?: Enumerable<ReportUserWhereUniqueInput>
    delete?: Enumerable<ReportUserWhereUniqueInput>
    connect?: Enumerable<ReportUserWhereUniqueInput>
    update?: Enumerable<ReportUserUpdateWithWhereUniqueWithoutReportInput>
    updateMany?: Enumerable<ReportUserUpdateManyWithWhereWithoutReportInput>
    deleteMany?: Enumerable<ReportUserScalarWhereInput>
  }

  export type ReportCreateNestedOneWithoutReportUsersInput = {
    create?: XOR<ReportCreateWithoutReportUsersInput, ReportUncheckedCreateWithoutReportUsersInput>
    connectOrCreate?: ReportCreateOrConnectWithoutReportUsersInput
    connect?: ReportWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReportUserInput = {
    create?: XOR<UserCreateWithoutReportUserInput, UserUncheckedCreateWithoutReportUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportUserInput
    connect?: UserWhereUniqueInput
  }

  export type ReportUpdateOneWithoutReportUsersNestedInput = {
    create?: XOR<ReportCreateWithoutReportUsersInput, ReportUncheckedCreateWithoutReportUsersInput>
    connectOrCreate?: ReportCreateOrConnectWithoutReportUsersInput
    upsert?: ReportUpsertWithoutReportUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: ReportWhereUniqueInput
    update?: XOR<ReportUpdateWithoutReportUsersInput, ReportUncheckedUpdateWithoutReportUsersInput>
  }

  export type UserUpdateOneRequiredWithoutReportUserNestedInput = {
    create?: XOR<UserCreateWithoutReportUserInput, UserUncheckedCreateWithoutReportUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportUserInput
    upsert?: UserUpsertWithoutReportUserInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutReportUserInput, UserUncheckedUpdateWithoutReportUserInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedEnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedEnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumAppointmentStatusFilter = {
    equals?: AppointmentStatus
    in?: Enumerable<AppointmentStatus>
    notIn?: Enumerable<AppointmentStatus>
    not?: NestedEnumAppointmentStatusFilter | AppointmentStatus
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedEnumAppointmentStatusWithAggregatesFilter = {
    equals?: AppointmentStatus
    in?: Enumerable<AppointmentStatus>
    notIn?: Enumerable<AppointmentStatus>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter | AppointmentStatus
    _count?: NestedIntFilter
    _min?: NestedEnumAppointmentStatusFilter
    _max?: NestedEnumAppointmentStatusFilter
  }

  export type AppointmentCreateWithoutUserInput = {
    datetimeFrom: Date | string
    datetimeTo: Date | string
    totalHours: number
    calendarEventId: string
    status?: AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    AppointmentDetail?: AppointmentDetailCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutUserInput = {
    id?: number
    datetimeFrom: Date | string
    datetimeTo: Date | string
    totalHours: number
    calendarEventId: string
    status?: AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    AppointmentDetail?: AppointmentDetailUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutUserInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput>
  }

  export type AppointmentCreateManyUserInputEnvelope = {
    data: Enumerable<AppointmentCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ReportUserCreateWithoutUserInput = {
    Report?: ReportCreateNestedOneWithoutReportUsersInput
    totalHours: number
    appointmentBookedCount: number
    appointmentCancelledCount: number
  }

  export type ReportUserUncheckedCreateWithoutUserInput = {
    id?: number
    reportId: number
    totalHours: number
    appointmentBookedCount: number
    appointmentCancelledCount: number
  }

  export type ReportUserCreateOrConnectWithoutUserInput = {
    where: ReportUserWhereUniqueInput
    create: XOR<ReportUserCreateWithoutUserInput, ReportUserUncheckedCreateWithoutUserInput>
  }

  export type ReportUserCreateManyUserInputEnvelope = {
    data: Enumerable<ReportUserCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type AppointmentUpsertWithWhereUniqueWithoutUserInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutUserInput, AppointmentUncheckedUpdateWithoutUserInput>
    create: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutUserInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutUserInput, AppointmentUncheckedUpdateWithoutUserInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutUserInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutAppointmentsInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: Enumerable<AppointmentScalarWhereInput>
    OR?: Enumerable<AppointmentScalarWhereInput>
    NOT?: Enumerable<AppointmentScalarWhereInput>
    id?: IntFilter | number
    datetimeFrom?: DateTimeFilter | Date | string
    datetimeTo?: DateTimeFilter | Date | string
    totalHours?: FloatFilter | number
    userEmail?: StringFilter | string
    calendarEventId?: StringFilter | string
    status?: EnumAppointmentStatusFilter | AppointmentStatus
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ReportUserUpsertWithWhereUniqueWithoutUserInput = {
    where: ReportUserWhereUniqueInput
    update: XOR<ReportUserUpdateWithoutUserInput, ReportUserUncheckedUpdateWithoutUserInput>
    create: XOR<ReportUserCreateWithoutUserInput, ReportUserUncheckedCreateWithoutUserInput>
  }

  export type ReportUserUpdateWithWhereUniqueWithoutUserInput = {
    where: ReportUserWhereUniqueInput
    data: XOR<ReportUserUpdateWithoutUserInput, ReportUserUncheckedUpdateWithoutUserInput>
  }

  export type ReportUserUpdateManyWithWhereWithoutUserInput = {
    where: ReportUserScalarWhereInput
    data: XOR<ReportUserUpdateManyMutationInput, ReportUserUncheckedUpdateManyWithoutReportUserInput>
  }

  export type ReportUserScalarWhereInput = {
    AND?: Enumerable<ReportUserScalarWhereInput>
    OR?: Enumerable<ReportUserScalarWhereInput>
    NOT?: Enumerable<ReportUserScalarWhereInput>
    id?: IntFilter | number
    reportId?: IntFilter | number
    userEmail?: StringFilter | string
    totalHours?: FloatFilter | number
    appointmentBookedCount?: IntFilter | number
    appointmentCancelledCount?: IntFilter | number
  }

  export type UserCreateWithoutAppointmentsInput = {
    email: string
    phoneNumber: string
    password: string
    salt: string
    kakaoID?: string | null
    isBlacklisted?: boolean
    role?: Role
    createdAt?: Date | string
    updatedAt?: Date | string
    ReportUser?: ReportUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    email: string
    phoneNumber: string
    password: string
    salt: string
    kakaoID?: string | null
    isBlacklisted?: boolean
    role?: Role
    createdAt?: Date | string
    updatedAt?: Date | string
    ReportUser?: ReportUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAppointmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
  }

  export type AppointmentDetailCreateWithoutAppointmentInput = {
    comments?: string | null
    appointmentType: string
  }

  export type AppointmentDetailUncheckedCreateWithoutAppointmentInput = {
    id?: number
    comments?: string | null
    appointmentType: string
  }

  export type AppointmentDetailCreateOrConnectWithoutAppointmentInput = {
    where: AppointmentDetailWhereUniqueInput
    create: XOR<AppointmentDetailCreateWithoutAppointmentInput, AppointmentDetailUncheckedCreateWithoutAppointmentInput>
  }

  export type UserUpsertWithoutAppointmentsInput = {
    update: XOR<UserUpdateWithoutAppointmentsInput, UserUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
  }

  export type UserUpdateWithoutAppointmentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    kakaoID?: NullableStringFieldUpdateOperationsInput | string | null
    isBlacklisted?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ReportUser?: ReportUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    kakaoID?: NullableStringFieldUpdateOperationsInput | string | null
    isBlacklisted?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ReportUser?: ReportUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AppointmentDetailUpsertWithoutAppointmentInput = {
    update: XOR<AppointmentDetailUpdateWithoutAppointmentInput, AppointmentDetailUncheckedUpdateWithoutAppointmentInput>
    create: XOR<AppointmentDetailCreateWithoutAppointmentInput, AppointmentDetailUncheckedCreateWithoutAppointmentInput>
  }

  export type AppointmentDetailUpdateWithoutAppointmentInput = {
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentType?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentDetailUncheckedUpdateWithoutAppointmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentType?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentCreateWithoutAppointmentDetailInput = {
    datetimeFrom: Date | string
    datetimeTo: Date | string
    totalHours: number
    user: UserCreateNestedOneWithoutAppointmentsInput
    calendarEventId: string
    status?: AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUncheckedCreateWithoutAppointmentDetailInput = {
    id?: number
    datetimeFrom: Date | string
    datetimeTo: Date | string
    totalHours: number
    userEmail: string
    calendarEventId: string
    status?: AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutAppointmentDetailInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutAppointmentDetailInput, AppointmentUncheckedCreateWithoutAppointmentDetailInput>
  }

  export type AppointmentUpsertWithoutAppointmentDetailInput = {
    update: XOR<AppointmentUpdateWithoutAppointmentDetailInput, AppointmentUncheckedUpdateWithoutAppointmentDetailInput>
    create: XOR<AppointmentCreateWithoutAppointmentDetailInput, AppointmentUncheckedCreateWithoutAppointmentDetailInput>
  }

  export type AppointmentUpdateWithoutAppointmentDetailInput = {
    datetimeFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    datetimeTo?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHours?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutAppointmentsNestedInput
    calendarEventId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateWithoutAppointmentDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    datetimeFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    datetimeTo?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHours?: FloatFieldUpdateOperationsInput | number
    userEmail?: StringFieldUpdateOperationsInput | string
    calendarEventId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUserCreateWithoutReportInput = {
    user: UserCreateNestedOneWithoutReportUserInput
    totalHours: number
    appointmentBookedCount: number
    appointmentCancelledCount: number
  }

  export type ReportUserUncheckedCreateWithoutReportInput = {
    id?: number
    userEmail: string
    totalHours: number
    appointmentBookedCount: number
    appointmentCancelledCount: number
  }

  export type ReportUserCreateOrConnectWithoutReportInput = {
    where: ReportUserWhereUniqueInput
    create: XOR<ReportUserCreateWithoutReportInput, ReportUserUncheckedCreateWithoutReportInput>
  }

  export type ReportUserCreateManyReportInputEnvelope = {
    data: Enumerable<ReportUserCreateManyReportInput>
    skipDuplicates?: boolean
  }

  export type ReportUserUpsertWithWhereUniqueWithoutReportInput = {
    where: ReportUserWhereUniqueInput
    update: XOR<ReportUserUpdateWithoutReportInput, ReportUserUncheckedUpdateWithoutReportInput>
    create: XOR<ReportUserCreateWithoutReportInput, ReportUserUncheckedCreateWithoutReportInput>
  }

  export type ReportUserUpdateWithWhereUniqueWithoutReportInput = {
    where: ReportUserWhereUniqueInput
    data: XOR<ReportUserUpdateWithoutReportInput, ReportUserUncheckedUpdateWithoutReportInput>
  }

  export type ReportUserUpdateManyWithWhereWithoutReportInput = {
    where: ReportUserScalarWhereInput
    data: XOR<ReportUserUpdateManyMutationInput, ReportUserUncheckedUpdateManyWithoutReportUsersInput>
  }

  export type ReportCreateWithoutReportUsersInput = {
    fileName: string
    datetimeFrom: Date | string
    datetimeTo: Date | string
    totalUsers: number
    totalHours: number
    totalAppointmentBooked: number
    totalAppointmentCancelled: number
  }

  export type ReportUncheckedCreateWithoutReportUsersInput = {
    id?: number
    fileName: string
    datetimeFrom: Date | string
    datetimeTo: Date | string
    totalUsers: number
    totalHours: number
    totalAppointmentBooked: number
    totalAppointmentCancelled: number
  }

  export type ReportCreateOrConnectWithoutReportUsersInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutReportUsersInput, ReportUncheckedCreateWithoutReportUsersInput>
  }

  export type UserCreateWithoutReportUserInput = {
    email: string
    phoneNumber: string
    password: string
    salt: string
    kakaoID?: string | null
    isBlacklisted?: boolean
    role?: Role
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutReportUserInput = {
    id?: number
    email: string
    phoneNumber: string
    password: string
    salt: string
    kakaoID?: string | null
    isBlacklisted?: boolean
    role?: Role
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutReportUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReportUserInput, UserUncheckedCreateWithoutReportUserInput>
  }

  export type ReportUpsertWithoutReportUsersInput = {
    update: XOR<ReportUpdateWithoutReportUsersInput, ReportUncheckedUpdateWithoutReportUsersInput>
    create: XOR<ReportCreateWithoutReportUsersInput, ReportUncheckedCreateWithoutReportUsersInput>
  }

  export type ReportUpdateWithoutReportUsersInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    datetimeFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    datetimeTo?: DateTimeFieldUpdateOperationsInput | Date | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    totalHours?: FloatFieldUpdateOperationsInput | number
    totalAppointmentBooked?: IntFieldUpdateOperationsInput | number
    totalAppointmentCancelled?: IntFieldUpdateOperationsInput | number
  }

  export type ReportUncheckedUpdateWithoutReportUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    datetimeFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    datetimeTo?: DateTimeFieldUpdateOperationsInput | Date | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    totalHours?: FloatFieldUpdateOperationsInput | number
    totalAppointmentBooked?: IntFieldUpdateOperationsInput | number
    totalAppointmentCancelled?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutReportUserInput = {
    update: XOR<UserUpdateWithoutReportUserInput, UserUncheckedUpdateWithoutReportUserInput>
    create: XOR<UserCreateWithoutReportUserInput, UserUncheckedCreateWithoutReportUserInput>
  }

  export type UserUpdateWithoutReportUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    kakaoID?: NullableStringFieldUpdateOperationsInput | string | null
    isBlacklisted?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | Role
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutReportUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    kakaoID?: NullableStringFieldUpdateOperationsInput | string | null
    isBlacklisted?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | Role
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyUserInput = {
    id?: number
    datetimeFrom: Date | string
    datetimeTo: Date | string
    totalHours: number
    calendarEventId: string
    status?: AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUserCreateManyUserInput = {
    id?: number
    reportId: number
    totalHours: number
    appointmentBookedCount: number
    appointmentCancelledCount: number
  }

  export type AppointmentUpdateWithoutUserInput = {
    datetimeFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    datetimeTo?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHours?: FloatFieldUpdateOperationsInput | number
    calendarEventId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AppointmentDetail?: AppointmentDetailUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    datetimeFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    datetimeTo?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHours?: FloatFieldUpdateOperationsInput | number
    calendarEventId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AppointmentDetail?: AppointmentDetailUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    datetimeFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    datetimeTo?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHours?: FloatFieldUpdateOperationsInput | number
    calendarEventId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUserUpdateWithoutUserInput = {
    Report?: ReportUpdateOneWithoutReportUsersNestedInput
    totalHours?: FloatFieldUpdateOperationsInput | number
    appointmentBookedCount?: IntFieldUpdateOperationsInput | number
    appointmentCancelledCount?: IntFieldUpdateOperationsInput | number
  }

  export type ReportUserUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    reportId?: IntFieldUpdateOperationsInput | number
    totalHours?: FloatFieldUpdateOperationsInput | number
    appointmentBookedCount?: IntFieldUpdateOperationsInput | number
    appointmentCancelledCount?: IntFieldUpdateOperationsInput | number
  }

  export type ReportUserUncheckedUpdateManyWithoutReportUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    reportId?: IntFieldUpdateOperationsInput | number
    totalHours?: FloatFieldUpdateOperationsInput | number
    appointmentBookedCount?: IntFieldUpdateOperationsInput | number
    appointmentCancelledCount?: IntFieldUpdateOperationsInput | number
  }

  export type ReportUserCreateManyReportInput = {
    id?: number
    userEmail: string
    totalHours: number
    appointmentBookedCount: number
    appointmentCancelledCount: number
  }

  export type ReportUserUpdateWithoutReportInput = {
    user?: UserUpdateOneRequiredWithoutReportUserNestedInput
    totalHours?: FloatFieldUpdateOperationsInput | number
    appointmentBookedCount?: IntFieldUpdateOperationsInput | number
    appointmentCancelledCount?: IntFieldUpdateOperationsInput | number
  }

  export type ReportUserUncheckedUpdateWithoutReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    userEmail?: StringFieldUpdateOperationsInput | string
    totalHours?: FloatFieldUpdateOperationsInput | number
    appointmentBookedCount?: IntFieldUpdateOperationsInput | number
    appointmentCancelledCount?: IntFieldUpdateOperationsInput | number
  }

  export type ReportUserUncheckedUpdateManyWithoutReportUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    userEmail?: StringFieldUpdateOperationsInput | string
    totalHours?: FloatFieldUpdateOperationsInput | number
    appointmentBookedCount?: IntFieldUpdateOperationsInput | number
    appointmentCancelledCount?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}