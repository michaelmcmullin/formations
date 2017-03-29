module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

    sasslint: {
        options: {
            configFile: 'sass/.sass-lint.yml'
        },
        target: ['sass/**/*.scss']
    },

		sass: {
      options: {
        sourceMap: true
      },
			dist: {
				files: {
					'css/ntbh.css' : 'sass/ntbh.scss'
				}
			}
		},

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['**/*.css', '!**/*.min.css'],
          dest: 'css',
          ext: '.min.css'
        }]
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
    		tasks: ['sasslint', 'sass', 'cssmin']
      }
    }
	});
  grunt.loadNpmTasks('grunt-sass-lint');
	grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}