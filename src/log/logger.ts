import * as fs from "fs";

export enum LogLevel {
  INFO = "INFO",
  DEBUG = "DEBUG",
  WARN = "WARN",
  ERROR = "ERROR",
}

export abstract class Logger {
  private nextLogger: Logger;

  public setNext(logger: Logger): Logger {
    this.nextLogger = logger;
    return logger;
  }

  public message(msg: string, logLevel: LogLevel): void {
    this.write_message(msg, logLevel);

    if (this.nextLogger) {
      return this.nextLogger.message(msg, logLevel);
    }

    return;
  }

  public write_message(msg: string, logLevel: LogLevel) {
    console.log(`${new Date().toISOString()} [${logLevel}] ${msg}`);
  }
}

class ConsoleLogger extends Logger {
  private static _instance: ConsoleLogger;
  public static getInstance() {
    return this._instance || (this._instance = new this());
  }
  public write_message(msg: string, logLevel: LogLevel) {
    console.log(
      `${new Date().toISOString()} - ConsoleLogger => [${logLevel}] ${msg}`
    );
  }
}

class FileLogger extends Logger {
  private static _instance: ConsoleLogger;
  public static getInstance() {
    return this._instance || (this._instance = new this());
  }
  public write_message(msg: string, logLevel: LogLevel) {
    fs.appendFile(
      "log.txt",
      `${new Date().toISOString()} - FileLogger => [${logLevel}] ${msg}`,
      (err) => {
        if (err) {
          console.log(err);
        } else {
          // Get the file contents after the append operation
          console.log(
            "\nFile Contents of file after append:",
            fs.readFileSync("log.txt", "utf8")
          );
        }
      }
    );
  }
}

export const getLogger = () => {
  const consoleLogger: ConsoleLogger = ConsoleLogger.getInstance();
  const fileLogger: FileLogger = FileLogger.getInstance();
  consoleLogger.setNext(fileLogger);
  return consoleLogger;
};
