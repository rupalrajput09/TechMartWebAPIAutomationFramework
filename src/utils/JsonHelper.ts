

import fs from 'fs';

export class JsonHelper {
    static readJson(filePath: string): Record<string, string>[] {
        return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
}





// static readJson(filePath: string) - a static method name readJson says give me file path as a string type.
// JSON.parse -> convert json to JavaScript object