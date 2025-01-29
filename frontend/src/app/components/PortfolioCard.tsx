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
        <div style={cardStyle}>
            <h3><strong>{name}</strong></h3>
            <p><strong>Allocated Tonnage:</strong> {allocatedTonnage}</p>
            <img src={image} style={imageStyle}></img>
            <p><strong>Country:</strong> {country}</p>
            <p><strong>Supplier:</strong> {supplierName}</p>
            <p>{description}</p>
        </div>
    )
}

// Image styling
const imageStyle: React.CSSProperties = {
    width: '80%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '16px',
    alignSelf: 'center'
};

// Card styling
const cardStyle: React.CSSProperties = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    width: '800px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column'
};

export default PortfolioCard