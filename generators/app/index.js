'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var _ = require('lodash');

module.exports = yeoman.generators.Base.extend({
    constructor: function () {
        yeoman.generators.Base.apply(this, arguments);

        this.argument('name', {
            type: String,
            required: false
        });
    },
    prompting: {
        sayHello: function () {
            this.log(yosay('Hello and congratulations on making an astronomer integration!'));
        },
        askAppNameEarly: function () {
            if (this.name) {
                return;
            }

            var next = this.async();

            this.prompt({
                message: 'What is the name of your integration? i.e. Kenshoo, Google Analytics, etc.',
                name: 'name',
                validate: function (str) {
                    return !!str;
                }
            }, function (answers) {
                var name = answers.name;
                var kebabName = _.kebabCase(name);
                this.name = 'analytics.js-integration-' + kebabName;
                var startCase = _.startCase(answers.name);
                this.properName = _.replace(startCase, ' ', '');
                this.log(this.config.getAll());
                next();
            }.bind(this));
        },
        setAppName: function () {
            var oldRoot = this.destinationRoot();
            if (path.basename(oldRoot) !== this.name) {
                this.destinationRoot(path.join(oldRoot, this.name));
            }
        },
        setDefaults: function () {

        },
        askFor: function () {

        }
    },
    writing: {
        copyFiles: function () {
            this.fs.copyTpl(
                this.templatePath(),
                this.destinationPath(), {
                    name: this.name,
                    properName: this.properName
                }
            );
        }
    }
});