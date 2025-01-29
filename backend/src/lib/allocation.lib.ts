import { ProjectAllocation } from "../types/project.interface";

export function allocateCarbonCredits(requestedAmount: number, projectData: ProjectAllocation[]) {
    if (projectData === null) return;

    let supplyShortfall = 0

    // iterate over distribution and allocate the amount proportionally
    for (let i = 0; i < projectData.length; i++) {
        const distribution = projectData[i].distributionWeight
        const volume = projectData[i].offeredVolume
        const allocationAmount = Math.floor(requestedAmount * distribution)

        // if amount exceeds volume add the remaining amount to supply shortfall
        if (allocationAmount > volume) {
            projectData[i].allocatedTonnage = volume
            supplyShortfall = supplyShortfall + (allocationAmount - volume)
        } else {
            projectData[i].allocatedTonnage = allocationAmount
        }
    }

    //check for shortfall and redistribute 
    if (supplyShortfall > 0) {
        //get remaining distribution weights and calculate the sum to use in proportion calculation
        const remainingDistributionWeight = projectData.map((project: ProjectAllocation) => {
            if (project.offeredVolume > project.allocatedTonnage) {
                return project.distributionWeight
            } else return 0
        }).reduce((a, b) => a + b, 0);

        // take the non full projects and redsitribute evenly according to weightDistribution
        for (let i = 0; i < projectData.length; i++) {
            if (projectData[i].offeredVolume > projectData[i].allocatedTonnage) {
                const distributionAmount = Math.floor(supplyShortfall * (projectData[i].distributionWeight / remainingDistributionWeight));
                const availableTonnage = projectData[i].offeredVolume - projectData[i].allocatedTonnage;
                const shortfall = Math.min(distributionAmount, availableTonnage);

                projectData[i].allocatedTonnage += shortfall;
                supplyShortfall -= shortfall;
            }
        }
    }

    // if shortfall still > 0 return error -> not enough volume to satisfy demand
    //if (supplyShortfall > 0) return

    const sortedData = projectData.sort((a: ProjectAllocation, b: ProjectAllocation) => b.allocatedTonnage - a.allocatedTonnage);

    return sortedData;
}