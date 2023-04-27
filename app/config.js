const config = {
  port: process.env.PORT || 3000,
  // databaseUrl: process.env.MONGODB_URI || 'mongodb+srv://twwai:KTp5wYwutrLHPLT@cluster0.ooees.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  databaseUrl: process.env.MONGODB_URI || 'mongodb+srv://mb:ODc0RcJv5oKCMwKH@taw.i3umimd.mongodb.net/test',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;
