module.exports = function(grunt) {

    grunt.initConfig({

        watch: {

            html: {
                files: ['src/**/*.html'],
                tasks: ['copy:html']
            },
            css: {
                files: ['src/css/style.css'],
                tasks:['copy:css']
            },
            translations: {
                files: ['src/app/translations/*.json'],
                tasks: ['copy:translations']
            }
        },

        copy: {
            translations: {
                files: [{
                    expand: true,
                    cwd: './src/app/translations',
                    src: ['**'],
                    dest: 'dev/translations'
                }]
            },
            dev: {
                files: [
                    {
                        expand: true, 
                        cwd: 'src', 
                        src: ['index.html'], 
                        dest: 'dev/'
                    },
                    {
                        expand: true,
                        cwd: './bower_components/materialize/dist/fonts',
                        src: ['**'],
                        dest: 'dev/fonts'
                    },
                    {
                        expand: true,
                        cwd: './bower_components/materialize/dist/css',
                        src: ['**'],
                        dest: 'dev/css'
                    },
                    {
                        expand: true,
                        cwd: './src/css',
                        src: ['**'],
                        dest: 'dev/css'
                    },
                    {
                        expand: true, 
                        cwd: 'src/img', 
                        src: ['**'], 
                        dest: 'dev/img'
                    }
                ]
            },

            html: {
                files: [
                    {
                        expand: true, 
                        cwd: 'src', 
                        src: ['index.html'], 
                        dest: 'dev/'
                    }
                ]
            },
            css: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/css/',
                        src: ['style.css'],
                        dest: 'dev/css'
                    }
                ]
            }
        },

        clean: {
            dev: {
                src: ['dev']
            }
        },

        browserify: {

            options: {

                transform: [
                    ['stringify', {
                        appliesTo: { includeExtensions: ['.html']}
                    }],
                    ['babelify', { 'presets': ['es2015'], 'compact' : true }]
                ]
            },


            vendor: {
                src: [],
                dest: 'dev/vendor.js',
                options: {
                    alias: [
                        './bower_components/angular/angular.min.js:angular',
                        './bower_components/angular-cookies/angular-cookies.min.js:angular-cookies',
                        './bower_components/angular-ui-router/release/angular-ui-router.min.js:ui-router',
                        './bower_components/angular-translate/angular-translate.js:ng-translate',
                        './bower_components/angular-translate-storage-local/angular-translate-storage-local.js:ng-translate-local',
                        './bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.js:ng-translate-cookie',
                        './bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js:ng-translate-loader',
                        './bower_components/angular-resource/angular-resource.js:ng-resource',
                        './bower_components/jquery/dist/jquery.js:jquery',
                        './bower_components/angular-materialize/src/angular-materialize.js:angular-materialize',
                        './src/vendor/underscore.js:underscore',
                        './src/vendor/ngStorage.js:ng-storage'
                    ]
                }
            },

            watchClient: {

                files: {
                    'dev/client.js': ['src/app/app.module.js']
                },

                options: {

                    browserifyOptions: {
                        debug: true
                    },

                    watch: true,
                    external: [
                        'angular',
                        'angular-cookies',
                        'ui-router',
                        'ng-translate',
                        'ng-translate-local',
                        'ng-translate-cookie',
                        'ng-translate-loader',
                        'ng-resource',
                        'jquery',
                        'angular-materialize',
                        'underscore',
                        'ng-storage'
                    ],

                    alias: {}
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'clean:dev', 
        'browserify:vendor',
        'browserify:watchClient',
        'copy:dev',
        'copy:translations',
        'watch'
    ]);

};