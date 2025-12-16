//to read data from json & csv

import fs from 'fs';
import { parse } from 'csv-parse/sync';
//import * as xlsx from xlsx;                        //only if you have added xlsx dependency and working with excel

export class DataProvider {

    static getTestDataFromJson(filePath: string) {
        const raw: string = fs.readFileSync(filePath, 'utf8');      // read file synchronously
        return JSON.parse(raw);                             // converts JSON formatted string to a js object.
    }

    static getTestDataFromCsv(filePath: string) {
        return parse(fs.readFileSync(filePath), {
            columns: true,                  // meaning first row will be skipped for column names
            skip_empty_lines: true          // empty lines are skipped, if any
        });
    }

    /*
    static getTestDataFromExcel(filePath: string, sheetName?: string) {         // to read Excel file
        const workbook = xlsx.readFile(filePath);                       // read the Excel file
        const sheet = sheetName
            ? workbook.Sheets[sheetName]
            : workbook.Sheets[workbook.SheetNames[0]];              // default to first sheet if not provided

        return xlsx.utils.sheet_to_json(sheet, { defval: null });   // convert sheet to JSON (array of objects)
    }
    */

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