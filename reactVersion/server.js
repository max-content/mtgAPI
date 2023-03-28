const express = require('express');
const cors = require('cors');
const dbConfig = require('./server/config/mongoose.config');
const http = require('http');
const socketIo = require('socket.io');

const app = express();

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:8080",
    }
});
const socketMiddleware = require('./server/middlewares/socket')
socketMiddleware(io);

// var corsOptions = {
//     origin: 'http://localhost:8081'
// };

// app.use(cors(corsOptions));

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended: true}));


// ================= DB Init ===============
const db = require('./server/models')
const Role = db.role;

db.mongoose
    .connect(`mongodb+srv://max:${dbConfig.PW}@loginreg.rxemb.mongodb.net/mtgwar?retryWrites=true&w=majority`, {
        useNewURLParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connected to MongoDB");
        initial();
    })
    .catch(err => {
        console.error('Connection Error', err);
        process.exit();
    });

    function initial() {
        Role.estimatedDocumentCount((err, count) => {
            if (!err && count === 0) {
                new Role({
                    name: 'user'
                }).save(err => {
                    if(err) {
                        console.log('error', err);
                    }
                    console.log("added 'user' to roles collection")
                });
    
                new Role({
                    name: 'moderator'
                }).save(err => {
                    if(err) {
                        console.log('error', err);
                    }
                    console.log("added 'moderator' to roles collection")
                });
    
                new Role({
                    name: 'admin'
                }).save(err => {
                    if(err) {
                        console.log('error', err);
                    }
                    console.log("added 'admin' to roles collection")
                });
            }
        })
    }

    // ================= Routes ===============
app.get('/', (req, res) => {
    res.json({ message: "Welcome you have created a test route! (FYI I'm in the server.js file =)"})
});

require('./server/routes/auth.routes')(app);
require('./server/routes/user.routes')(app);


        // ================= port ===============
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}.`)
});