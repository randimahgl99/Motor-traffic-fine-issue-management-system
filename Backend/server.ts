import  express  from "express";

const app = express();
const PORT:Number = 3000;

app.get('/home',(req,res) => {
    res.send('Wellcome');
})

app.listen(PORT,() =>{
    console.log('server is running on '+ PORT);
})
