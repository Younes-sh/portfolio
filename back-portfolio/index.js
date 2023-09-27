const express = require('express');
const app = express()

app.get('/' , (req , res) => {
    res.send('Hi YOUNES')
})
app.listen(5000 ,() => console.log('server is run'))