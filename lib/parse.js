import replaceStream from 'replacestream';
import fs from 'fs';
import path from 'path';

class Parse {
    constructor(replaceString) {
        this.replaceString = replaceString;
    }

    _readFile(fileName) {
        return fs.createReadStream(path.join(process.cwd() + "/" + fileName));
    }

    replace(templateString, file) {
        return this._readFile(file)
            .pipe(replaceStream(templateString, this.replaceString));
    }
}

export default Parse;
