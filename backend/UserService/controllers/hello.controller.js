async function hello(req,res){ 
  
    try {
      res.send('Hello World')
    } catch (error) {
      console.log('Something went Wrong')
    }
  
  }
  module.exports = {hello}