//to read data from json & csv

import fs from 'fs';
import { parse } from 'csv-parse/sync';
//import * as xlsx from xlsx;   //only if you have added xlsx dependency and working with excel

export class DataProvider {

    static getTestDataFromJson(filePath: string) {
        const raw = fs.readFileSync(filePath, 'utf8');      // read file synchronously
        return JSON.parse(raw); 
    }

    static getTestDataFromCsv(filePath: string) {
        return parse(fs.readFileSync(filePath), {
            columns: true,                  // meaning first row will be skipped for column names
            skip_empty_lines: true          // empty lines are skipped, if any
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