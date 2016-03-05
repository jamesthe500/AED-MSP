module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            }/*,
             build: {
             src: 'client/scripts/app.js',
             dest: 'server/public/assets/scripts/app.min.js'
             }*/ // commented out so line numbers show up
        },
        copy: {
            css: {
                expand: true,
                cwd: 'client',
                src: [
                    "styles/*"
                ],
                "dest": "server/public/assets/"
            },
            images: {
                expand: true,
                cwd: 'client',
                src: [
                    "images/**"
                ],
                "dest": "server/public/assets/"

            },
            html: {
                expand: true,
                cwd: 'client',
                src: [
                    "views/*"
                ],
                "dest": "server/public/assets/"

            },
            index: {
                expand: true,
                cwd: 'client',
                src: [
                    "index.html"
                ],
                "dest": "server/public/"

            },
            scripts: {
                expand: true,
                cwd: 'client',
                src: [
                    "scripts/*"
                ],
                "dest": "server/public/assets/"
            },
            angular: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "angular/angular.min.js",
                    "angular-route/angular-route.min.js",
                    "angular/angular.min.js.map",
                    "angular/angular-csp.css"
                ],
                "dest": "server/public/vendors/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['copy', 'uglify']);
};