import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import config from 'config'
import authDeliveryRoutes from './routes/delivery-auth'
import authRestaurauntRoutes from './routes/restauraunt-auth'
import protectedDeliveryRoutes from './routes/delivery-protected'
import protectedRestaurauntRoutes from './routes/restauraunt-protected'
import jwt from 'express-jwt'

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', authDeliveryRoutes)
app.use('/api', authRestaurauntRoutes)
app.use('/api', jwt({secret: config.get('jwt.secret')}), protectedDeliveryRoutes)
app.use('/api', jwt({secret: config.get('jwt.secret')}), protectedRestaurauntRoutes)


app.use((req, res, next) => {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
      error: err
    })
  })
}


if (app.get('env') === 'production') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
      message: 'Oops. Our bad.'
    })
  })
}

module.exports = app
