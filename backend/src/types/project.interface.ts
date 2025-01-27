export interface Project {
    id: number;
    name: string;
    country: string;
    image: string;
    pricePerTon: number;
    offeredVolume: number;
    distributionWeight: number;
    supplierName: string;
    earliestDelivery?: string;
    description: string
}

export interface ProjectAllocation extends Project {
    allocatedTonage: number
}