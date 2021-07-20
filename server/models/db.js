const mongoose = require('mongoose')
const app = require('../app')

const URI = process.env.DB_CONN_STRING
console.log(`DB Conn String = ${URI}`)

// Connect to database
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.info('Connected to database!');
    
    // Emit event to start application
    app.emit('dbConnected');
  })
  .catch(err => {
    console.error('Failed to connect to database.');
    console.error(err);
    process.exit();
  })

// Log error message on error event
mongoose.connection.on('error', err => console.error(err))