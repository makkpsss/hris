const express= require("express");
const morgan = require("morgan");

var app = new express();

// Express Configuration
const port = 2030||process.env.PORT;

// Development configuration
if(process.env.MODE){
    app.use(new morgan("tiny"));
}


app.get("/",(req,res) => {
    res.send("This works fine");
});

app.listen(port, () => {
    console.log(`Your Backend is Configured at ${port}`);
});