exports.config = {

  apiRails: {
    url: {
      dev: 'http://localhost:3000',
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
      dev: 'http://localhost:3001',
      prod: 'https://koopman-admin.herokuapp.com'
    }
  }

};
