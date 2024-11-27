import express, { Request, Response } from 'express';
import { MovieRoutes } from './modules/movies/movie.route';
import cors from "cors"
const app = express()

//Parsers
app.use(express.json());
app.use(cors());

app.use('/api/movies', MovieRoutes)

app.get('/', (req : Request, res : Response) => {
  res.send('Hello Gys Welcome to movie Hub')
})





export default app;