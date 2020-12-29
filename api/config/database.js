'use strict'

const Url = require('url-parse')

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use('Helpers')

const CLEARDB_DATABASE_URL = new Url(Env.get('CLEARDB_DATABASE_URL'))

module.exports = {
  connection: Env.get('DB_CONNECTION', 'mysql'),

  sqlite: {
    client: 'sqlite3',
    connection: {
      filename: Helpers.databasePath(`${Env.get('DB_DATABASE', 'development')}.sqlite`)
    },
    useNullAsDefault: true
  },

  mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('DB_HOST', CLEARDB_DATABASE_URL.host),
      port: Env.get('DB_PORT', ''),
      user: Env.get('DB_USER', CLEARDB_DATABASE_URL.username),
      password: Env.get('DB_PASSWORD', CLEARDB_DATABASE_URL.password),
      database: Env.get('DB_DATABASE', CLEARDB_DATABASE_URL.pathname.substr(1))
    }
  },

  pg: {
    client: 'pg',
    connection: {
      host: Env.get('DB_HOST', 'localhost'),
      port: Env.get('DB_PORT', ''),
      user: Env.get('DB_USER', 'root'),
      password: Env.get('DB_PASSWORD', ''),
      database: Env.get('DB_DATABASE', 'adonis')
    }
  }
}
