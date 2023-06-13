const express = require('express');
const app = require('./app')

app.use(express.static('./'))
app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000")
})
