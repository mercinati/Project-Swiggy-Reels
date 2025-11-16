//start server
require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/db/db');


// Connect to the database
connectDB();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



//1:15:00 tk dekh liye hai 
//1:07:25 food partner APIs ko test krna hai
