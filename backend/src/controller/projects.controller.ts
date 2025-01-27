import * as express from 'express'
import * as projectsMiddleware from "../middleware/projects.middleware"

let projects = express.Router({ mergeParams: true })

projects.get("/",
    projectsMiddleware.getAllProjects
)

projects.post("/",
    projectsMiddleware.getCustomerAllocation
)


export default projects;