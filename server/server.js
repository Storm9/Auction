var restify = require('restify');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/auctionsDb');

var server = restify.createServer({
    name: 'myapp',
    version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log("Connected to Mongo Db");
});

var Schema = mongoose.Schema;
var ObjectID = Schema.ObjectID;

var auctionSchema = new Schema({
    id : Number,
    title : String,
    startingBid : Number,
    currentBid: Number ,
    description: String
});

var Auction = mongoose.model("Auction", auctionSchema);

server.get('/echo/:name', function (req, res, next) {
    res.send(req.params);
    return next();
});

server.get('/auctions', getAuctions);

function getAuctions(req, res, next){
    // Resitify currently has a bug which doesn't allow you to set default headers
    // This headers comply with CORS and allow us to server our response to any origin
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    Auction.find().execFind(function (arr,data) {
        res.send(data);
    });
}

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});