import replaceStream from 'replacestream';
import fs from 'fs';
import path from 'path';

class Parse {
    constructor(replaceString) {
        this.replaceString = replaceString;
    }

    _readFile(fileName) {
        return fs.createReadStream(fileName);
    }

    _replaceString(file, templateString, replaceString) {
        return this._readFile(file)
            .pipe(this.replaceStream(templateString, replaceString));
    };

    replace(file, templateString) {
        return this._replaceString(file, templateString, this.replaceString)
    }

    replaceStream(templateString, replaceString) {
        return replaceStream(templateString, replaceString);
    }
}

export default Parse;
