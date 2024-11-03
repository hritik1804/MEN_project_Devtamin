require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const ProductRoutes = require('./routes/productRoutes');
const errorMiddleware = require('./middleware/errorMiddleware')
const cors = require('cors')


const app = express();

const MONGO_URL = process.env.MONGO_URL
const PORT_NUMBER = process.env.PORT || 3000

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api', ProductRoutes)

app.use(errorMiddleware);


mongoose.connect(MONGO_URL)
.then(() => {
    console.log('Connected to DB')
    app.listen(PORT_NUMBER, () => {
        console.log('Node App is running on PORT 3000')
    });
}).catch((error) => {
    console.log(error);    
})




