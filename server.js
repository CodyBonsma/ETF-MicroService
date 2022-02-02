const express = require('express');
const app = express();
const PORT = process.env.PORT || 5280;
const cors = require('cors');

app.use(cors());

//middelware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routers
const ETFrouters = require('./routes/etfRouter');
app.use('/etfs', ETFrouters);

const holdingRouters = require('./routes/holdingRouter');
app.use('/holdings', holdingRouters);

const userRouters = require('./routes/userRouter');
app.use('/users', userRouters);

app.get('/', (req,res) => {
    res.send('Hello World!')
});

app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`)
});

module.exports = app; // for testing 