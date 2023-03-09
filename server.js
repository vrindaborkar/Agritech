const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')
var bodyParser = require('body-parser');
const path = require('path');
const fileUpload = require('express-fileupload')

//<<<<<<< HEAD
var corsOptions = {
  // origin: "http://wingrowagritech.herokuapp.com/"
    origin:'*', 
  //  credentials:true,            access-control-allow-credentials:true
  //  optionSuccessStatus:200,
};
//=======
// var corsOptions = {
//   // origin: "http://wingrowagritech.herokuapp.com/"
//     origin:'*', 
//   //  credentials:true,            //access-control-allow-credentials:true
//   //  optionSuccessStatus:200,
// };
//>>>>>>> 9fab8b86ae322461a04a144517de7b8d42822b5d

// app.use(cors({
//   origin: 'http://localhost:3000', // use your actual domain name (or localhost), using * is not recommended
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
//   credentials: true
// }))

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authortization');
//   res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
// })
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//app.use(cors(corsOptions));
app.use(express.static('client/build'))
app.use(fileUpload({
  useTempFiles:true
}))

// routes
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/payment.routes")(app);
require("./routes/stalls.routes")(app);
require("./routes/twilio.routes")(app);

mongoose.connect(process.env.DB_CONNECTION, 
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false} , 
    console.log("connected to db"));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
app.timeout = 120000;
