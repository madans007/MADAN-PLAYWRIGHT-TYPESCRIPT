import fs from 'fs';
import { parse } from 'csv-parse/sync';

export class DataProvider {

    static getTestDataFromJson(filePath: string) {
        const raw = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(raw); // ✅ fixed
    }

    static getTestDataFromCsv(filePath: string) {
        return parse(fs.readFileSync(filePath), {
            columns: true,
            skip_empty_lines: true
        });
    }


}



/*

old code


import fs from 'fs';
import { parse } from 'csv-parse/sync';

export class DataProvider {

    static getTestDataFromJson(filePath: string) {
        let data: string = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        return data;
    }


    static getTestDataFromCsv(filePath: string) {
        let data = parse(fs.readFileSync(filePath), { columns: true, skip_empty_lines: true })
        return data;
    }


}

*/