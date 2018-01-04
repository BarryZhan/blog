const mongoose = require('mongoose')

const config = require('../config')

module.exports = function () {
  mongoose.connect(config.mongodb)

  // MongoDB连接成功后回调，这里仅输出一行日志
  mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + config.mongodb)
  })

  // MongoDB连接出错后回调，这里仅输出一行日志
  mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err)
  })

  // MongoDB连接断开后回调，这里仅输出一行日志
  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected')
  })

  // 当前进程退出之前关闭MongoDB连接
  process.on('SIGINT', function () {
    mongoose.connection.close(function () {
      console.log('Mongoose default connection closed through app termination')
      process.exit(0)
    })
  })
}
