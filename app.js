const express       = require('express')
const bodyParser    = require('body-parser')
const cors          = require('cors')

const routes        = require('./src/routes')

require('./src/database')
let port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
app.use(cors())
app.use(routes)
app.use(express.json())

app.listen(port)