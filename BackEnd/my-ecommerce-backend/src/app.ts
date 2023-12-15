import express, { Request, Response, NextFunction } from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import bodyParser from 'body-parser';
import orderRoutes from './routes/orderRoutes';

const app = express();
const cors = require('cors');
app.use(cors());
const PORT = process.env.PORT || 3000;
const config = {
  db:{
    host:"localhost",
    port:"27017",
    name:"myecommerce"
  }
}

const connectDB = ()=>{
  mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`)
  .then(()=>{
     console.log("DB connection successful.");
  })
  .catch((err)=>{
     console.log(`DB connection error:${err}`);
  });
}

connectDB();

// Configuración de middlewares
app.use(bodyParser.json());
app.use('/api/orders', orderRoutes);

// Middleware para manejar errores
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
