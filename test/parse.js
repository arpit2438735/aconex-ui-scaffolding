import assert from 'assert';
import Parse from '../dist/parse';


describe('String Class', function () {

    let parse;

    beforeEach(function () {
       parse = new Parse("To");
    });

    it('should replace the string with "Replace" keyword', function () {
        let replacedString =  parse.replace("From");
        let data;

        replacedString.on('data', function(chunk) {
            data+=chunk;
        });

        assert.equal(data, "Tod");

    });
});
