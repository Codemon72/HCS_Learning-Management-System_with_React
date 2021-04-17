const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from Codemon72')
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server listening on port: ${PORT}`));
