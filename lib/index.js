import fsPath from 'fs-path';
import fs from 'fs';
import Path from 'path';

import Parse from './parse';

const hardCodedName = '<%= templateName %>';
let path, directive;

let fileLocation = 'template/angular/main';

const createWriteStream = (path, fileName) => {
    if(path) {
        return fs.createWriteStream(path + "/" + fileName);
    }
    return fs.createWriteStream(fileName);
};

const makeDirectory = (dirName) => {
    fsPath.mkdirSync(dirName, (err) => {
        if (err) {
            console.log(err);
        }
    });
};

const generateUrl = (url) => {
    if (url.slice(-1) !== '/') {
        return url + "/";
    }

    return url;
};

const scaffold = {
    run: function (argv) {
        let moduleName;

        if(argv.directive) {
            moduleName = argv.directive;
            directive = argv.directive;
            fileLocation =  "template/angular/directive";
        } else {
            moduleName = argv._.pop();
        }

        if (argv.location) {
            path = argv.location;
        }

        let parse = new Parse(moduleName);

        makeDirectory(path);

        fsPath.find(Path.join(__dirname + '/../' + fileLocation), (err, list) => {

            if (err) {
                console.log(err);
            }

            list.dirs.forEach((dirName) => {
                makeDirectory(path + "/" + dirName.split("/").pop());
            });

            list.files.forEach((file) => {
                let fileName = file.replace(Path.join(__dirname + "/../" + fileLocation.toString()) , "");

                if (fileName.indexOf('.gitkeep') >= 0) {
                    return;
                }

                if (fileName.indexOf('controllers') >= 0) {
                    fileName = fileName.replace("Controller", moduleName + "Controller");
                }

                if(argv.directive) {
                    fileName = fileName.replace('index', moduleName);

                    return parse.replace(file, hardCodedName)
                            .pipe(parse.replaceStream('<%= directiveTemplatePath %>', generateUrl(path) + directive + '.tpl.html'))
                            .pipe(createWriteStream(path, fileName));
                }

                return parse.replace( file, hardCodedName)
                    .pipe(createWriteStream(path, fileName));
            });

            console.log("Successfully scaffold your '" + moduleName + "' at '" + path + "'");
        });
    }
};

export default scaffold;
