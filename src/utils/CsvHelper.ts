
import fs from "fs";
import { parse } from 'csv-parse/sync';

export class CsvHelper {

    static readCsv(filePath: string): Record<string, string>[] {
        return parse(fs.readFileSync(filePath, 'utf-8'), {
            columns: true, //first row as headers
            skip_empty_lines: true,
            trim: true,
        }) as Record<string, string>[];
    }
}



// fs - file system
// parse is coming from csv-parse
// csv-parse/sync - > we are using sync module, so that all the workers and threads which are going to interact with this Csv
// they start working in parallel mode in sync mode.
// csv-parse/sync -> is coming from the csv-parse dependency (which we downloaded). 
// Always use readFileSync method, which is a promise method 
// utf-8 is an encoding, if any special charcter are there in your excel or csv file, consider them as a unicode
// columns: true, means first row is a column
// Record -> existing interface in PW, it holds data in key-value format