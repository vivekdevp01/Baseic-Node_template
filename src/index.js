const express=require("express");
const apiRoutes=require("./routes");
const app=express();
const {ServerConfig,Logger}=require("./config");
// console.log(process.env);
app.use('/api',apiRoutes);
app.listen(ServerConfig.PORT,()=>{
    // console.log(PORT.BODY);
    console.log(`successfully done ${ServerConfig.PORT}`);
    Logger.info("Sucessfully",{});
})