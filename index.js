const axios = require('axios').default;

const teasyBot =  axios.create({
  baseURL: 'https://api.bot.teasy.solutions',
  timeout: 10000,
  headers: {
    access_key: 'sua-chave-teasy'
  }
});

const sendTextWithTeasyBot = async () => {
  try {
    await teasyBot.post('/send/text', {
      phoneNumber: 'XXXXXXXXXXXXX',
      message: 'Integration with teasy bot'
    });
  } catch (error) {
    console.log(error);
  }
}

sendTextWithTeasyBot();
