// const MongoDB = require('../api/mongodb.js')

class Settings {
  constructor () {

  }

  async request (req) {
    let headers = req.headers
    let query = req.query
    let params = req.params
    let body = req.body

    return {test: true}
  }
}

module.exports = new Settings()
