grunt.initConfig({
        //use the copy with source and destination        
        copy: {
            html: {
                files: [
                    { src: 'default.html', dest: 'build/' }
                ]
            }
    }
});
    
//load the copy module
grunt.loadNpmTasks('grunt-contrib-copy');
 
//register the build task
grunt.registerTask('build', ['copy:html']);


//Sample
module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ["Gruntfile.js", "src/**/*.js", "test/**/*.js"],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ["<%= jshint.files %>"],
      tasks: ["jshint"]
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["jshint"]);
};

//Concatenate
//Using - npm install grunt-contrib-concat --save-dev
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    concat: {
      dist: {
        src: ["css/css1.css", "css/css2.css"],
        dest: "dist/style.css"
      }
    }
  });
  // Default task(s).
  grunt.registerTask("default");
  // Concatenate files, 1.0.1
  grunt.loadNpmTasks("grunt-contrib-concat");
};

//Header or Footer
grunt.initConfig({
  text_include: {
    options: {
      header: "define([], function () {\n",
      footer: "\nreturn this.Templates;\n});"
    },
    files: {
      "dest/templates.js": ["app/templates/*.html"]
    }
  }
});

//Minification
module.exports = function(grunt) {
  //project configurations
  grunt.initConfig({
    uglify: {
      options: {
        banner: "/*! app.min.js file */\n"
      },
      build: {
        src: ["js/app.js"],
        dest: "dist/app.min.js"
      }
    }
  });

  //load uglify plugin
  grunt.loadNpmTasks("grunt-contrib-uglify");

  //create default task
  grunt.registerTask("default", ["uglify"]);
};