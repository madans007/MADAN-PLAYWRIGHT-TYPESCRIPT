export class Logger {
    static info(message: string) {
        console.info(`[INFO] ${new Date().toISOString()} - ${message}`);
    }

    static error(message: string) {
        console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
    }

    static debug(message: string) {
        console.debug(`[DEBUG] ${new Date().toISOString()} - ${message}`);
    }
}
