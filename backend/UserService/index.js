const express = require ('express')
// if there is a sepcific file to import then use const express = require ('./xyz')

const app = express()


const person =[
    {
        name : 'Jatin',
        id : 1,
        email : 'jatinkumarphogat@gmail.com'
    },
    {
        name : 'Yogesh',
        id : 2,
        email : 'yogesh0911@gmail.com'
    },
    {
        name : 'Saksham',
        id : 3,
        email : 'Saksham8022@gmail.com'
    }
]


app.get('/alluser',(req, res)=>{
    try{
        res.send(person)
    }
    catch(error){
        res.send('Error')
    }
})



app.get('/hello',(req, res)=>{
res.send('Hello World')
})


app.listen(3000,()=>{
    console.log('3000 Port started')
    })//running service on port 3000 , port different for different apps
// get , post , put , delete
