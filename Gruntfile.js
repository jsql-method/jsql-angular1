/*
 * jsql
 *
 * Copyright (c) 2018 JSQL
 * Licensed under the ISC license.
 */

'use strict';

module.exports = function (grunt) {

    grunt.initConfig({

        clean: {
            files: ['dist'],
            publish: ['dist/jsql-angular.js']
        },


        concat: {
			options: {
				separator: ';'
			},
            dist: {
				src: ['node_modules/jsql-core/jsql-core.min.js', 'src/jsql-angular.js'],
				dest: 'dist/jsql-angular.js'
			},
            local: {
                src: ['../jsql-js-core/dist/jsql-core.js', 'src/jsql-angular.js'],
                dest: 'dist/jsql-angular.js'
            }
		},

        uglify: {
            options: {
                mangle: false
            },
            target: {
                files: {
                    'dist/jsql-angular.min.js': ['dist/jsql-angular.js']
                }
            }
        },


        copy: {

            dist: {

                files: [
                    {
                        expand: true,
                        cwd: '.',
                        src: ['LICENSE.md', 'package.json'],
                        dest: './dist'
                    }
                ]

            }

        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('dev', ['concat:local']);
    grunt.registerTask('default', ['concat:dist', 'uglify', 'copy', 'clean:publish']);

};
