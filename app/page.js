const { someAction } = require('./actions')
export default async function Home() {
  await someAction()
  return (
    <div>Hello</div>
  );
}
