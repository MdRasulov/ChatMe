import pkg from 'pg';
const { Pool } = pkg;

const CREDENTIALS = {
  user: 'postgres',
  host: 'localhost',
  database: 'chatMe_db',
  password: 'Blackjack77',
  port: 5432,
};

export const db = new Pool(CREDENTIALS);
