const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(
    () => { console.log("MONGO DB CONNECTED!")}
).catch( e => console.log("cannot connect to mongo", e))