// Imports
const express = require('express')
const http = require('http')
const path = require('path')


//Var Declarations
const app = express()
const port = 3214 || process.env.PORT
const server = http.createServer(app);


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './index.html'));
})

// Port
app.listen(port, () => console.log(`[SERVER] Live on port ${port}!`))

if (process.env.NODE_ENV == 'development')
{

}
else {
	
}