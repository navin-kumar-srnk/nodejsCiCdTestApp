const express = require('express');

const app = express();
const port = 9005;

app.get('/status', (req, res) => {
  const message = 'Server is up and running';
  const timestamp = new Date().toISOString();

  res.json('running on ec2 test run on june 30!!!!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
