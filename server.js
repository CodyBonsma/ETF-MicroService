const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

//middelware
app.use(express.json());

// routers
const routers = require('./routes/etfRouter');
app.use('/etfs', routers)

app.get('/', (req,res) => {
    res.send('Hello World!')
});

app.listen(PORT, () => {
    console.log(`ETF app is listening on http://localhost:${PORT}`)
});