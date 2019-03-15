module.exports = function(grunt) {

    grunt.initConfig({

        sass: {
            sticky_breadcrumb: {
                options: {
                    style: 'compressed',
                },
                files: {
                    'sticky-breadcrumb.css': 'scss/sticky-breadcrumb.scss',
                }
            },
        },

        watch: {
            css: {
                files: ['scss/*.scss'],
                tasks: ['sass:sticky_breadcrumb'],
            },
        },

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass','watch']);

};