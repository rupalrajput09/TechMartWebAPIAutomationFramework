import XLSX from 'xlsx';

export class ExcelHelper {

    static readExcel(filePath: string, sheetName: string): Record<string, string>[] {
        const workbook = XLSX.readFile(filePath);
        const sheet = workbook.Sheets[sheetName];
        return XLSX.utils.sheet_to_json<Record<string, string>>(sheet, { defval: "" });
    }

}

// defval - default value, ignore the blank values inside the excel. Any empty cell available it will ignore it.