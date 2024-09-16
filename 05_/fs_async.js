import path from 'node:path';
import fs from 'node:fs/promises';
import { Buffer } from 'node:buffer';

const __filename = import.meta.filename;
const __dirname = import.meta.dirname;

const folderPath = path.join(__dirname, 'files');
const filePath = path.join(folderPath, 'data.txt');

const buff = Buffer.from('NODEJS Programm');

async function createFolderIfNotExists(folderPath) {
    try {
        await fs.mkdir(folderPath, { recursive: true });
        console.log('Папка успешно создана или уже существует');
    } catch (err) {
        console.error('Ошибка при создании папки:', err);
    }
}

async function writeBufferToFile(filePath, buffer) {
    try {
        await fs.writeFile(filePath, buffer);
        console.log('Файл успешно записан');
    } catch (err) {
        console.error('Ошибка при записи файла:', err);
    }
}

async function readFileContent(filePath) {
    try {
        const data = await fs.readFile(filePath);
        console.log('Содержимое файла:', data.toString());
    } catch (err) {
        console.error('Ошибка при чтении файла:', err);
    }
}

async function run() {
    await createFolderIfNotExists(folderPath);
    await writeBufferToFile(filePath, buff);
    await readFileContent(filePath);
}

run();
