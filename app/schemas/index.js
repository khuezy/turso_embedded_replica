
const { index, integer, sqliteTable, text } = require('drizzle-orm/sqlite-core')

export const Test = sqliteTable('test', {
  name: text('name')
})