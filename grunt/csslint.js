// Lint CSS files
//
// grunt-contrib-csslint: <https://github.com/gruntjs/grunt-contrib-csslint>
// CSS Lint: <http://csslint.net/>
// Rules: <https://github.com/stubbornella/csslint/wiki/Rules>

'use strict';

module.exports = {

  options: {
    csslintrc: '.csslintrc'
  },

  app: {
    src: [
      '<%= path.css %>/**/*.css'
    ]
  }

};
