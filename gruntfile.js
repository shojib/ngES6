module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    clean: ['public'],

    copy: {
      fonts: {
        expand: true,
        cwd: '<%= pkg.folders.src %>/fonts/',
        src: '*',
        dest: '<%= pkg.folders.build %>/fonts'
      },
      i18n: {
        expand: true,
        cwd: '<%= pkg.folders.src %>/i18n/',
        src: '*',
        dest: '<%= pkg.folders.build %>/i18n'
      },
      libs: {
        expand: true,
        cwd: 'jspm_packages/',
        src: '**/*',
        dest: '<%= pkg.folders.build %>/jspm_packages'
      },
      config: {
        expand: true,
        cwd: '',
        src: 'config.js',
        dest: '<%= pkg.folders.build %>'
      }
    },

    babel: {
      compile_all: {
        expand: true,
        flatten: false,
        sourceMap: true,
        cwd: '<%= pkg.folders.entity_src %>',
        src: ['**/*.js'],
        dest: '<%= pkg.folders.entity_build %>',
        ext: '.js'
      }
    },

    jade: {
      compile: {
        files: {
          '<%= pkg.folders.build %>/index.html': '<%= pkg.folders.src %>/index.jade'
        }
      },
      compile_all: {
        expand: true,
        flatten: false,
        cwd: '<%= pkg.folders.entity_src %>',
        src: ['**/*.jade'],
        dest: '<%= pkg.folders.entity_build %>',
        ext: '.html'
      }
    },

    compass: {
      compile_all: {
        expand: true,
        flatten: false,
        cwd: '<%= pkg.folders.src %>/scss',
        src: ['**/*.scss'],
        dest: '<%= pkg.folders.build %>/css',
        ext: '.css'
      }
    },


    watch: {
      babel: {
        files: ['<%= pkg.folders.src %>/modules/**/*.js'],
        tasks: 'babel'
      },
      jade: {
        files: ['<%= pkg.folders.src %>/*.jade', '<%= pkg.folders.src %>/modules/**/*.jade'],
        tasks: 'jade'
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    protractor: {
      e2e: {
        configFile:'e2e.config.js',
        keepAlive: true,
        noColor: false
      }
    },

    selenium_start: {
      options: {}
    },

    selenium_phantom_hub: {
      options: {}
    },

    selenium_stop: {
      options: {}
    },

    connect: {
      server: {
        options:  {
          port: 9000,
          base: '<%= pkg.folders.build %>',
          hostname: 'localhost'
        }
      },
      keepalive: {
        options:  {
          port: 8000,
          base: '<%= pkg.folders.build %>',
          hostname: 'localhost',
          keepalive: true
        }
      }
    }

  });

  // Load the plugins for all the tasks.
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-selenium-webdriver');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Unit task(s).
  grunt.registerTask('unit', [
    'karma:unit'
  ]);

  // E2E task(s).
  grunt.registerTask('e2e', [
    'connect:server',
    'selenium_start', // PhantomJS only
    'selenium_phantom_hub', // PhantomJS only
    'protractor:e2e',
    'selenium_stop' // PhantomJS only
  ]);

  // Test task(s).
  grunt.registerTask('tests', [
    'unit',
    'e2e'
  ]);

  // Build task(s).
  grunt.registerTask('compile', [
    'clean',
    'copy',
    'babel',
    'jade',
    'compass'
  ]);

  // Build task(s).
  grunt.registerTask('prod', [
    'compile',
    'tests'
  ]);

  // Build task(s).
  grunt.registerTask('dev', [
    'compile'
    // 'tests'
  ]);

  // Web task(s).
  grunt.registerTask('web', [
    'dev',
    'connect:server',
    'watch'
  ]);

  // Default task(s).
  grunt.registerTask('default', [
    'webgrunt '
  ]);

};
