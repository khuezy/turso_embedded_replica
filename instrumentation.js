'use server'
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const db = require('./app/db')
    console.log('Syncing client...')
    await db.client.sync()
    console.log('done')
  }

}