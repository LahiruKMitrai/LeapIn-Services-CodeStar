'use strict';

const awsServerlessExpress = require('aws-serverless-express')
const app = require('./app')
const userService = require('./userService/user')
const server = awsServerlessExpress.createServer(userService)

// test PL commit
exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);
