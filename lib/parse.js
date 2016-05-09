import replaceStream from 'replacestream';
import fs from 'fs';
import path from 'path';
import split from 'split';

class Parse {
    constructor(replaceString) {
        this.replaceString = replaceString;
    }

    _readFile (fileName) {
        return fs.createReadStream(path.join(process.cwd() + '/template/' + fileName));
    }

    replace (templateString) {
        return this._readFile('_module.js')
            .pipe(replaceStream(templateString, this.replaceString))
            .pipe(split());
    }
}

export default Parse;