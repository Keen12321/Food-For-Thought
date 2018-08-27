import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import path from 'path'
import config from 'config'
import authDeliveryRoutes from './routes/delivery-auth'
import authRestaurantRoutes from './routes/restaurant-auth'
import protectedDeliveryRoutes from './routes/delivery-protected'
import protectedRestaurantRoutes from './routes/restaurant-protected'
import jwt from 'express-jwt'

const app = express()

const env = app.get('env') || 'development'

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', authDeliveryRoutes)
app.use('/api', authRestaurantRoutes)
app.use('/api', jwt({secret: config.get('jwt.secret')}), protectedDeliveryRoutes)
app.use('/api', jwt({secret: config.get('jwt.secret')}), protectedRestaurantRoutes)


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
