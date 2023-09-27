const express = require('express');
const app = express()
const port = process.env.PORT

app.get('/' , (req , res) => {
    res.send('Hi YOUNES')
})
app.listen(port ,() => console.log('server is run'))