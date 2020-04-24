/* eslint-disable */
export async function handler(event, context, callback) {
  console.log(event);
  try {
    await (() => new Promise((resolve) => setTimeout(resolve, 2500)))();
  } catch (err) {
    console.log(err.message);
  }
  const statusCode = 200;
  const body = JSON.stringify({ msg: 'Hello, World!' });

  callback(null, { statusCode, body });
}
