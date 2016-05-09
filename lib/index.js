import Parse from './parse';
import fsPath from 'fs-path';

const fileData = '<%= templateName %>';
let path = '';

const scaffold = {
    run: function (argv) {
        const fileName = argv[2];

        if(argv.p) {
            path = argv.p;
        }

        const parse = new Parse(fileName);
        console.log(path);

        fsPath.mkdir(path, function(err) {
            if (err) {
                console.log(err);
            }
        });

        parse.replace(fileData)
            .on('data', function(data) {
                fsPath.writeFile(path + '_module,js', data, function (err) {
                    if(err) {
                        console.log(err);
                    }
                })
            });
    }
};

export default scaffold;
