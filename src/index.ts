import * as express from 'express';
import * as bodyparser from 'body-parser';

const app = express();

app.use('/', bodyparser.json())

app.listen(2002, ()=>{
    console.log('app running on port 2002')
})