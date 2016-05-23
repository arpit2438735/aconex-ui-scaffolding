'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fsPath = require('fs-path');

var _fsPath2 = _interopRequireDefault(_fsPath);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _parse = require('./parse');

var _parse2 = _interopRequireDefault(_parse);

var hardCodedName = '<%= templateName %>';
var path = undefined,
    directive = undefined;

var fileLocation = 'template/angular/main';

var createWriteStream = function createWriteStream(path, fileName) {
    if (path) {
        return _fs2['default'].createWriteStream(path + "/" + fileName);
    }
    return _fs2['default'].createWriteStream(fileName);
};

var makeDirectory = function makeDirectory(dirName) {
    _fsPath2['default'].mkdirSync(dirName, function (err) {
        if (err) {
            console.log(err);
        }
    });
};

var generateUrl = function generateUrl(url) {
    if (url.slice(-1) !== '/') {
        return url + "/";
    }

    return url;
};

var scaffold = {
    run: function run(argv) {
        var moduleName = undefined;

        if (argv.directive) {
            moduleName = argv.directive;
            directive = argv.directive;
            fileLocation = "template/angular/directive";
        } else {
            moduleName = argv._.pop();
        }

        if (argv.location) {
            path = argv.location;
        }

        var parse = new _parse2['default'](moduleName);

        makeDirectory(path);

        _fsPath2['default'].find(_path2['default'].join(__dirname + '/../' + fileLocation), function (err, list) {

            if (err) {
                console.log(err);
            }

            list.dirs.forEach(function (dirName) {
                makeDirectory(path + "/" + dirName.split("/").pop());
            });

            list.files.forEach(function (file) {
                var fileName = file.replace(_path2['default'].join(__dirname + "/../" + fileLocation.toString()), "");

                if (fileName.indexOf('.gitkeep') >= 0) {
                    return;
                }

                if (fileName.indexOf('controllers') >= 0) {
                    fileName = fileName.replace("Controller", moduleName + "Controller");
                }

                if (argv.directive) {
                    fileName = fileName.replace('index', moduleName);

                    return parse.replace(file, hardCodedName).pipe(parse.replaceStream('<%= directiveTemplatePath %>', generateUrl(path) + directive + '.tpl.html')).pipe(createWriteStream(path, fileName));
                }

                return parse.replace(file, hardCodedName).pipe(createWriteStream(path, fileName));
            });

            console.log("Successfully scaffold your '" + moduleName + "' at " + path);
        });
    }
};

exports['default'] = scaffold;
module.exports = exports['default'];