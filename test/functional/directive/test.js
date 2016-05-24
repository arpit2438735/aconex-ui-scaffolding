import assert from 'assert';
import fsPath from 'fs-path';
import fs from 'fs';

import scaffold from '../../../dist/';

describe('Scaffolding for directive', function () {

    before((done) => {
        const argv = {
            directive: 'foo',
            location: 'test/output/directive'
        };

        scaffold.run(argv);
        done();
    });

    after(() => {
        fsPath.remove('test/output');
    });

    it('directive.js contain the same content', (done) => {
        let actualData = fs.readFileSync('test/functional/directive/expected/directive.js').toString();

        fs.readFile('test/output/directive/foo.js', 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            }

            assert.equal(data.toString(), actualData);
            done();
        });
    });
});
