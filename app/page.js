const { someAction } = require('./actions')

export default async function Home() {
  const r = await someAction()
  return (
    <div>Hello, DB call took: {r}ms</div>
  );
}
