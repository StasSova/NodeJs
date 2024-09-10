import { Logger } from './Logger.js';

const __filename = import.meta.filename;
const __dirname = import.meta.dirname;

const logger = new Logger(__dirname);

logger.info('Asynchronous task completed');
logger.warn('Potential corruption detected in file (async)');
logger.error('File corruption confirmed (async)');

logger.infoSync('Synchronous task completed');
logger.warnSync('Potential corruption detected in file (sync)');
logger.errorSync('File corruption confirmed (sync)');

console.log(logger.readLogSync());

console.log(logger.readLog());
