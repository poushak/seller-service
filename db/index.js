const { Pool } = require('pg');
const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  options: `-c search_path=${process.env.PG_DATABASE}`,
});

module.exports = {
    async query(queryString, params) {
      const start = Date.now();
      try {
          const res = await pool.query(queryString, params);
          const duration = Date.now() - start;
          console.log('executed query in', { duration, rows: res.rowCount});

          return res;
      } catch (error) {
          console.log('error in query', {error});
          throw error;
      }
    }
};