const express = require('express')
require('./db/mongoose')

const indexRouter = require('./routers/index')
const usersRouter = require('./routers/users')

const app = express()
const port = process.env.PORT || 3000
app.use(express.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
	console.log('Server is up on port ' + port)
})
