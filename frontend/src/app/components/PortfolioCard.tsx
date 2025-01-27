'use client';
import React from "react"

interface CardProps {
    name: string;
    image: string;
    country: string;
    supplierName: string;
    description: string;
    allocatedTonnage: number;
}


const PortfolioCard: React.FC<CardProps> = ({ name, image, country, supplierName, description, allocatedTonnage }) => {

    return (
        <div></div>
    )
}

export default PortfolioCard