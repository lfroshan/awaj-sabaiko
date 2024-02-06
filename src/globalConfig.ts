const GLOBAL_CONFIG = {
  PORT: process.env.PORT || 3000,
  MONGO_DB_CONNECTION: process.env.MONGO_DB_CONNECTION ?? '',
  PREFERED_DB: process.env.PREFERRED_DB || 'mongoDB'
}

export default GLOBAL_CONFIG;
