import assert from 'assert';
import fsPath from 'fs-path';
import fs from 'fs';

import scaffold from '../../dist/';

let dirs;
let files;

describe('Scaffolding', function () {

    before(() => {
        const argv = {
            _: ['test'],
            l: 'test/output'
        };

        scaffold.run(argv);
    });

    before(() => {
        fsPath.find('test/functional/expected', (err, list) => {
            if (err) {
                console.log(err);
            }

            dirs = list.dirs;
            files = list.files;
        });
    });

    after(() => {
        fsPath.remove('test/output');
    });

    it('should contain expected directories', (done) => {
        fsPath.find('test/output', (err, list) => {
            if (err) {
                console.log(err);
            }
            assert.equal(dirs.length, list.dirs.length);
            done();
        });
    });

    it('should contain same no of files', (done) => {
        fsPath.find('test/output', (err, list) => {
            if (err) {
                console.log(err);
            }
            assert.equal(files.length, list.files.length);
            done();
        });
    });

    it('module.js contain the same content', (done) => {
        let actualData = fs.readFileSync('test/functional/expected/_module.js').toString();

        fs.readFile('test/output/_module.js', 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            }

            assert.equal(data.toString(), actualData);
            done();
        });
    });

    it('index.html contain the same content', (done) => {
        let actualData = fs.readFileSync('test/functional/expected/index.html').toString();

        fs.readFile('test/output/index.html', 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            }

            assert.equal(data.toString(), actualData);
            done();
        });
    });
});
