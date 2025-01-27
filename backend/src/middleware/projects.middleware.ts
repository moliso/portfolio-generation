import * as express from "express"

import * as db from "../lib/db.lib"
import * as allocation from "../lib/allocation.lib"
import { Project, ProjectAllocation } from "../types/project.interface";
import { request } from "http";

const database = process.env.DB_DATABASE;


function getAllProjects(req: express.Request, res: express.Response, next: express.NextFunction) {
    console.log("reached get projects")
    db.executeQuery({
        query: `
            SELECT 
                id,
                name,
                country,
                image,
                price_per_ton AS pricePerTon, 
                offered_volume_in_tons AS offeredVolume,
                distribution_weight AS distributionWeight,
                supplier_name AS supplierName,
                earliest_delivery AS earliestDelivery,
                description
            FROM ${database}.projects_sample
        `,
        values: []
    })
        .then((projects: Project[]) => {
            console.log(projects)

            res.status(200).json(projects)
        })
        .catch(err => {
            console.log(err)
        })
}

function getCustomerAllocation(req: express.Request, res: express.Response, next: express.NextFunction) {
    console.log("REached")
    console.log(req.body)
    const requestedAmount = req.body.amount;

    db.executeQuery({
        query: `
            SELECT 
                id,
                name,
                country,
                image,
                price_per_ton AS pricePerTon, 
                offered_volume_in_tons AS offeredVolume,
                distribution_weight AS distributionWeight,
                supplier_name AS supplierName,
                earliest_delivery AS earliestDelivery,
                description
            FROM ${database}.projects_sample
        `,
        values: []
    })
        .then((projects: ProjectAllocation[]) => {
            const tonnageDistribution = allocation.allocateCarbonCredits(requestedAmount, projects)
            console.log(tonnageDistribution)


            res.status(200).json(tonnageDistribution)
        })
        .catch(err => {
            console.log(err)
        })
}


export {
    getAllProjects,
    getCustomerAllocation
}