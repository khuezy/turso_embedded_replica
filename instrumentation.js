'use server'
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const db = require('./app/db')
    console.log('Embedded Replica sync...')
    await db.config.sync()
    console.log('Embedded Replica sync finished')
  }

}