import mongoose from 'mongoose';

export default ():void => {
  const url = process.env.MONGO_URL;
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'tdd'}, (err)=>{
    // eslint-disable-next-line no-console
    if (err) console.log(err.message);
    // eslint-disable-next-line no-console
    console.log(`Conectado a DB en el puerto: 27017 -> \x1b[32m%s\x1b[0m`, 'online');
  });
};
