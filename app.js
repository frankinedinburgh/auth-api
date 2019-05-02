const express = require('express')
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./src/routers/index')
const usersRouter = require('./src/routers/users')

const app = express();

const myFunction = async () => {
	const password = 'Red12345!'
	const hashedPassword = await bcrypt.hash(password, 8)
3
	const isMatch = await bcrypt.compare(password, hashedPassword)

	console.log(password)
	console.log(hashedPassword)
	console.log(isMatch)
}


//myFunction();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
