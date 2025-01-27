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
        <form>
            <div className="flex flex-col justify-center items-center">
                <div>Input desired Carbon Credits</div>
                <input
                    className="p-2"
                    name="amount">
                </input>
                <button className="bg-slate-500 p-2 rounded-full" type="submit">
                    Calculate!
                </button>
            </div>
        </form>
    )
}

export default PortfolioCard