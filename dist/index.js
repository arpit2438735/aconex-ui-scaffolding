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
var path = undefined;

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

var scaffold = {
    run: function run(argv) {
        var moduleName = argv._.pop();

        if (argv.l) {
            path = argv.l;
        }

        var parse = new _parse2['default'](moduleName);

        makeDirectory(path);

        _fsPath2['default'].find(__dirname + '/../template', function (err, list) {

            if (err) {
                console.log(err);
            }

            list.dirs.forEach(function (dirName) {
                makeDirectory(path + "/" + dirName.split("/").pop());
            });

            list.files.forEach(function (file) {
                var fileName = file.replace(_path2['default'].join(__dirname + "/../template").toString(), "");

                if (fileName.indexOf('controllers') >= 0) {
                    fileName = fileName.replace("Controller", moduleName + "Controller");
                }

                parse.replace(hardCodedName, file).pipe(createWriteStream(path, fileName));
            });
        });
    }
};

exports['default'] = scaffold;
module.exports = exports['default'];