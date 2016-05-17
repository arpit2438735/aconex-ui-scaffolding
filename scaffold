#!/usr/bin/env node

var scaffold = require('./dist/');

var argv = require('yargs')
            .usage('Usage: $0 <command> [options]')
            .argv;

scaffold.run(argv, function() {
    watcher(argv);
});