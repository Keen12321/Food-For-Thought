import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import path from 'path'
import cookieParser from 'cookie-parser'
import config from 'config'
import authRoutes from './routes/auth'
import protectedRoutes from './routes/user'
import jwt from 'express-jwt'

const app = express()

const env = app.get('env') || 'development'

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', authRoutes)
app.use('/api',  protectedRoutes)
// jwt({secret: config.get('jwt.secret')}),

app.use((req, res, next) => {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

if (env === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
      error: err
    })
  })
}


if (env === 'production') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
      message: 'Oops. Our bad.'
    })
  })
}


module.exports = app
