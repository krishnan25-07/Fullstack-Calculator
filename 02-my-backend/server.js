import express from 'express'
import cors from 'cors'
const app=express()
app.use(cors())
app.get('/api/',(req,res)=>{
   
   res.send({ success:true,
    message:'Hello from the server'
   })
})
app.get('/api/add/:a/:b',(req,res)=>{
    const a=parseInt(req.params.a)
    const b=parseInt(req.params.b)
    if(isNaN(a)||isNaN(b)){
        res.send({
            success: false,
            message: 'invalid variables',
            data: null,
        })
    }
    else{
        res.send({
            success: true,
            message: 'Operation Successful',
            data: a+b,
        })
    }
})
app.get('/api/sub/:a/:b',(req,res)=>{
    const a=parseInt(req.params.a)
    const b=parseInt(req.params.b)
    if(isNaN(a)||isNaN(b)){
        res.send({
            success:false,
            message:'Inavalid',
            data:null
         })
          }
          else{
            res.send({
                success:true,
                message:'Operation Succesful',
                data:a-b
            })
          }
})
     app.get('/api/multiply/:a/:b',(req,res)=>{
    const a=parseInt(req.params.a)
    const b=parseInt(req.params.b)
    if(isNaN(a)||isNaN(b)){
        res.send({
            success:false,
            message:'Inavalid',
            data:null
         })
          }
          else{
            res.send({
                success:true,
                message:'Operation Succesful',
                data:a*b
            })
          }
        })
          app.get('/api/divide/:a/:b',(req,res)=>{
    const a=parseInt(req.params.a)
    const b=parseInt(req.params.b)
    if(isNaN(a)||isNaN(b)){
        res.send({
            success:false,
            message:'Inavalid',
            data:null
         })
          }
          else if(b==0){
           res.send({ success:false,
                message:'denominator cannot be 0',
                data:null
           })
          }
          else{
            res.send({
                success:true,
                message:'Operation Succesful',
                data:a/b
            })
          }
        })
    
          app.get('/api/module/:a/:b',(req,res)=>{
    const a=parseInt(req.params.a)
    const b=parseInt(req.params.b)
    if(isNaN(a)||isNaN(b)){
        res.send({
            success:false,
            message:'Inavalid',
            data:null
         })
          }
          else{
            res.send({
                success:true,
                message:'Operation Succesful',
                data:a%b
            })
          }
        })
          app.get('/api/square/:a',(req,res)=>{
    const a=parseInt(req.params.a)
    
    if(isNaN(a)){
        res.send({
            success:false,
            message:'Inavalid',
            data:null
         })
          }
          else{
            res.send({
                success:true,
                message:'Operation Succesful',
                data:a*a
            })
          }
        })
        app.get('/api/percentage/:part/:whole',(req,res)=>{
    const part=parseFloat(req.params.part)
    const whole=parseFloat(req.params.whole)

    if(isNaN(part)||isNaN(whole)){
        res.send({
            success:false,
            message:"Invalid",
            data:null
        })
    }
    else{
        res.send({
            success:true,
            message:"Operation Successful",
            data:(part/100)*whole
        })
    }
})

if (process.env.NETLIFY !== 'true') {
    const PORT = process.env.PORT || 3000

    app.listen(PORT, () => {
        console.log("Server is running...")
    })
}

export default app