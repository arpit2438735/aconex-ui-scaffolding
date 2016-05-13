import fsPath from 'fs-path';
import fs from 'fs';

import Parse from './parse';

const hardCodedName = '<%= templateName %>';
let path;

const createWriteStream = (path, fileName) => {
    return fs.createWriteStream(path + fileName);
};

const makeDirectory = (dirName) => {
    fsPath.mkdirSync(dirName, (err) => {
        if (err) {
            console.log(err);
        }
    });
};

const scaffold = {
    run: function (argv) {
        const moduleName = argv._.pop();

        if (argv.l) {
            path = argv.l;
        }

        const parse = new Parse(moduleName);

        makeDirectory(path);

        fsPath.find('template', (err, list) => {

            if (err) {
                console.log(err);
            }

            list.dirs.forEach((dirName) => {
                makeDirectory(path + "/" + dirName.split("/").pop());
            });

            list.files.forEach((file) => {
                let fileName = file.replace("template/", "/");

                if (fileName.indexOf('controllers') === 1) {
                    fileName = fileName.replace("Controller", moduleName+ "Controller");
                }

                parse.replace(hardCodedName, file)
                    .pipe(createWriteStream(path, fileName));
            });
        });
    }
};

export default scaffold;
