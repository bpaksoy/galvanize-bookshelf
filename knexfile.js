'use strict';

module.exports = {
  development: {
   connection: 'postgres://localhost/bookshelf_dev'
  },

  test: {
   connection: 'postgres://localhost/bookshelf_test'
  },

  production: {}
};
