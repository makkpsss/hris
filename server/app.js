var express = require("express");
var morgan = require("morgan");

var app = new express();

// Express Configuration
const port = 2030 || process.env.PORT;
// const options = {
//     dotfiles: "ignore",
//     etag: false,
//     extensions: ["htm", "html", "js"],
//     index: false,
//     maxAge: "1d",
//     redirect: false,
//     setHeaders: function (res, path, stat) {
//         res.set("x-timestamp", Date.now());
//     }
// };

// Development configuration
if (process.env.MODE) {
    app.use(new morgan("tiny"));
}

app.get("/", (req, res) => {
    res.send("This works fine");
});

app.listen(port, () => {
    console.log(`Backend is at ${process.env.hostname} : ${port}`);
});
