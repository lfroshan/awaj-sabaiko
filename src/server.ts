import app from './app';
import mongoose from 'mongoose';
import GLOBAL_CONFIG from './globalConfig';

const PORT = GLOBAL_CONFIG.PORT;

mongoose.connect(GLOBAL_CONFIG.MONGO_DB_CONNECTION)
  .then(res => {
    console.log(`Connected to MongoDB.`);

    app.listen(PORT, () => {
      console.info(`App started! listening to PORT: ${PORT}`);
    });
  })
  .catch(err => console.error(err));
