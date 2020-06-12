const express = require('express')

const projectRouter = require('./data/router/project-router.js')
const resourceRouter = require('./data/router/resource-router.js')


const server= express();

server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);

module.exports = server;