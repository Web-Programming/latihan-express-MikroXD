let mongoose=require("mongoose")
let dbURI = "mongodb+srv://paw2:si@paw2.iendmj6.mongodb.net/pawII-SI?retryWrites=true&w=majority&appName=paw2";

mongoose.connect(dbURI,{
   // useNewURLParser: true
});

mongoose.connection.on("connected",() => {
 console.log("connected to MongoDB");
});

mongoose.connection.on("error", (error) => {
console.log("disconnected from MongoDB");
});