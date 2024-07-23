'use server'

const { sql } = require('drizzle-orm')

const db = require('../db')

export async function someAction() {
  const start = Date.now()
  const tx = await db.client.transaction(async tx => {
    const r = await tx.run(sql`SELECT 69;`)
    return r.columns[0]
  })
  console.log(`+++++ Transaction ${tx} took ${Date.now() - start}ms`)
}