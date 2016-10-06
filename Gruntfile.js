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
            }
        },

        copy: {

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
                        './bower_components/angular-ui-router/release/angular-ui-router.min.js:ui-router',
                        './bower_components/jquery/dist/jquery.min.js:jquery',
                        // './bower_components/materialize/js/date_picker/picker.js:date-picker',
                        // './bower_components/materialize/dist/js/materialize.js:materialize',
                        './src/vendor/underscore.js:underscore'
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
                        'ui-router',
                        'underscore',
                        'jquery'
                        // 'materialize',
                        // 'date-picker'
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
        'watch'
    ]);

};