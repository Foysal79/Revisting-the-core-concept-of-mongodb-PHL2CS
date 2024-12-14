import express, {   Request, Response } from 'express';
import { MovieRoutes } from './modules/movies/movie.route';
import cors from "cors"
import notFound from './middleware/NotFound';
import globalErrorHandling from './middleware/globalErrorHandeling';
const app = express()

//Parsers
app.use(express.json());
app.use(cors());

app.use('/api/movies', MovieRoutes)

app.get('/', (req : Request, res : Response) => {
  res.send('Hello Gys Welcome to movie Hub')
})

// Route Error Handler ( middleware )
app.use(notFound);
// global Error Handling ( middleware )
app.use(globalErrorHandling)



export default app;