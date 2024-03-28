// const {StatusCodes}=require('http-status-codes');
const info=(req,res)=>{
    return res.status(500).json({
        success:true,
        message:"Server is live",
        error:{},
        data:{}

    })
}
module.exports={
 info
    
}