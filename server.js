const express = require('express');
const app = express();


const path = require('path');

const PORT = process.env.PORT || 5000


app.get("/api",  function(req, res) {
  res.json("hey");
});

// --> Add this
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static('client/build'));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join('client/build', '/index.html'));
  });
}

app.listen(PORT, (req, res) => {
    console.log(`server listening on port: ${PORT}`)
});