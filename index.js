'use strict';

const awsServerlessExpress = require('aws-serverless-express')
const app = require('./app')
const userService = require('./userService/user')
const server = awsServerlessExpress.createServer(userService)

exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);
