require('dotenv').config()
module.exports = {
  development: {
    database: 'waypoint',
    dialect: 'postgres'
  },
  test: {
    database: 'waypoint_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}