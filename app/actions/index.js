'use server'

const { sql } = require('drizzle-orm')

const db = require('../db')

export async function someAction() {
  const start = Date.now()
  const result = await db.client.transaction(async tx => {
    const r = await tx.run(sql`SELECT 69;`)
    return r.columns[0]
  })
  // ATTENTION: comment the block above and uncomment the one below to see
  // the latency
  // const result = await db.client.run(sql`SELECT 69;`)
  const time = Date.now() - start
  console.log(`+++++ Transaction ${result} took ${time}ms`)
  return time
}