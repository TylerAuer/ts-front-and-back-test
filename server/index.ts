import express, { Request, Response } from 'express';
const app = express();
const port = process.env.PORT || 4000;

////////////////////////////////////////////////////////////////////////////////
//   SERVE CLIENT APP   ////////////////////////////////////////////////////////

app.use(express.static(__dirname + '/app'));

app.get('/', (req: Request, res: Response): void => {
  res.sendFile(__dirname + '/app/index.html');
});

////////////////////////////////////////////////////////////////////////////////
//   START SERVER   ////////////////////////////////////////////////////////////

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
