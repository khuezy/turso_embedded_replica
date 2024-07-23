const { createClient } = require('@libsql/client');
const { drizzle } = require('drizzle-orm/libsql')
const schema = require('./schemas')
const syncConfig = {
  url: 'file:///tmp/data/local.db',
  syncUrl: process.env.DB_URL,
  authToken: process.env.DB_TOKEN,
}

export const client = drizzle(createClient(syncConfig), { schema })