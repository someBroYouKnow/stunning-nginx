const express = require('express');
const app = express();
 
// Logging middleware
app.use((req, res, next) => {
  console.log(`Intercepted route: ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/awkward', (req,res)=>{
    res.send("Bro please help");
})

app.get('/swampfire', (req,res)=>{
    res.send('this is what you came for')
})


app.listen(3000, () => console.log('Server listening on port 3000'));