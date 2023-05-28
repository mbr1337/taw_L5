const config = {
  port: process.env.PORT || 3001,
  databaseUrl: process.env.MONGODB_URI || 'mongodb+srv://mb:leakedpass@weatherverifiabilityapp.5fwsjmi.mongodb.net/',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;
