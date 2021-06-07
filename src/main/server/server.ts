import app from "../config/app";

app.listen(process.env.PORT, ()=>{
  // eslint-disable-next-line no-console
  console.log(`Server up at port: \x1b[32m%s\x1b[0m ${process.env.PORT}`);
});
