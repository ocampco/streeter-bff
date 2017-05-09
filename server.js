const express = require('express');

const app = express();

app.get('/diagnostic/heartbeat', (req, res) => {
  res.send('OK');
});

app.listen(3000, () => {
  console.log('\uD83D\uDE80', ' Server running on port 3000');
});
