/* 
 *  Import env variables from .env
 */
import dotenv from "dotenv"
dotenv.config()

/*
 *  Create Express App
 */
import ExpressApp, * as express from "express"
const app: express.Application = ExpressApp()

/**
 * CORS
 */
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

/**
 * Body parser
 */
import bodyParser from "body-parser"
app.use(bodyParser.json({ type: "application/json" }))


/*
 * Routes
 */
import projectsController from "./controller/projects.controller"
app.use("/projects", projectsController)


/* 
 * Error handler
 */
import * as errorHandler from "./middleware/error.middleware"
app.use(errorHandler.handleAppErrors)

/*
 * Print configuration and start the server
 */
const port: number = Number(process.env.NODE_PORT) || 3306
const host: string = process.env.NODE_HOST || "localhost"

const hostInfo =
    `
##################################
# Backend for portfolio project
# (${host}:${port})
##################################
`

app.listen(port, host, function () {
    console.log(hostInfo)
})