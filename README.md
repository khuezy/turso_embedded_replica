# Turso Embedded Replica Latency

Reproduction:

1. `npm i`
2. `npm run dev`
3. Go to `http://localhost:3000`
4. Note the latency that the transaction introduced - the query takes 150-200ms
5. Go to [file](/app//actions/index.js) and comment out the transaction for a regular query
6. Save and reload, notice the non-transaction takes 1-5ms

NOTE:
Even if the transaction block is empty, it still takes ~160ms
