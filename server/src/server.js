const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');
const { loadPlanetsData } = require('./models/planets.model');

const PORT = process.env.PORT || 8001;

const server = http.createServer(app);

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
})

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
})

async function startServer() {
  await mongoose.connect(process.env.DATABASE_URL)
  
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
}

startServer();