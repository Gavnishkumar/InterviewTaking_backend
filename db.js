
    const mongoose=require('mongoose');
    // const mongoURI="mongodb+srv://gk991789:gk991789@cluster0.ukzg1kq.mongodb.net/?retryWrites=true&w=majority"
    const mongoURI="mongodb+srv://sasefied:sasefied@cluster0.cl1ooov.mongodb.net/"

const connectToMongo = async ()=>{
    try{
        const conn=await mongoose.connect(mongoURI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`mongoose connected:`);
    }catch (error){
        console.log(`Error: ${error}`);
        
        process.exit();
    }
}
module.exports=connectToMongo