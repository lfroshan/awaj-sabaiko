import app from './app';
import GLOBAL_CONFIG from './globalConfig';

require('dotenv').config();

const PORT = GLOBAL_CONFIG.PORT;

app.listen(PORT, () => {
  console.info(`App started! listening to PORT: ${PORT}`);
})
