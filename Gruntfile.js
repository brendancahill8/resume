module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			all: {
				files: {
					'src/assets/css/main.css': 'src/assets/scss/main.scss'
				}
			}
		},

		watch: {
			all: {
				files: ['src/assets/scss/*.scss'],
				tasks: ['default']
			}
		}
		
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass']);

};