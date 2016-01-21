exports.config = {

  apiRails: {
    url: {
      dev: 'https://koopman.herokuapp.com',
      prod: 'https://koopman.herokuapp.com'
    }
  },

  apiWp: {
    url: {
      dev: 'http://koopmanblog.com',
      prod: 'http://koopmanblog.com'
    },
    namespace: 'wp-json'
  },

  apiCatalog: {
    url: {
      // dev: 'http://localhost:3001',
      dev: 'https://koopman-admin.herokuapp.com',
      prod: 'https://koopman-admin.herokuapp.com'
    }
  }

};
