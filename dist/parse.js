'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _replacestream = require('replacestream');

var _replacestream2 = _interopRequireDefault(_replacestream);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var Parse = (function () {
    function Parse(replaceString) {
        _classCallCheck(this, Parse);

        this.replaceString = replaceString;
    }

    _createClass(Parse, [{
        key: '_readFile',
        value: function _readFile(fileName) {
            return _fs2['default'].createReadStream(fileName);
        }
    }, {
        key: '_replaceString',
        value: function _replaceString(file, templateString, replaceString) {
            return this._readFile(file).pipe(this.replaceStream(templateString, replaceString));
        }
    }, {
        key: 'replace',
        value: function replace(file, templateString) {
            return this._replaceString(file, templateString, this.replaceString);
        }
    }, {
        key: 'replaceStream',
        value: function replaceStream(templateString, replaceString) {
            return (0, _replacestream2['default'])(templateString, replaceString);
        }
    }]);

    return Parse;
})();

exports['default'] = Parse;
module.exports = exports['default'];