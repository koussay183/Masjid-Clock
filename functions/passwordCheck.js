module.exports.handler = async (event, context) => {
  // const password = process.env.PASSWORD;
  const { passwordInput } = JSON.parse(event.body);

  if (passwordInput === "manarah711@") {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Password correct, access granted' }),
    };
  } else {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Invalid password' }),
    };
  }
};
