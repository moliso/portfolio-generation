'use client';
import axios, { AxiosResponse } from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react"
import PortfolioCard from "./PortfolioCard";

const BACKEND_URL = "http://localhost:3000"

type ProjectAllocation = {
    id: number;
    name: string;
    country: string;
    image: string;
    supplierName: string;
    description: string;
    allocatedTonnage: number;
}

const InputCard = () => {
    const [amount, setAmount] = useState<number>(0)
    const [serverResponse, setHasResponse] = useState<AxiosResponse | null>(null)

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        const number = Number.parseInt(event.target.value) || 0
        setAmount(number)
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()

        try {
            const response = await axios.post(BACKEND_URL + "/projects", { amount: amount });
            setHasResponse(response)
        } catch (error) {
            console.log(error);
            setHasResponse(null)
        }
    }

    console.log(serverResponse?.data);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col justify-center items-center">
                    <label className="p-2">Input desired Carbon Credits</label>
                    <input
                        className="p-2"
                        name="amount"
                        value={amount}
                        onChange={handleInput}>
                    </input>
                    <button className="bg-slate-500 p-2 m-2 rounded-full" type="submit">
                        Calculate!
                    </button>
                </div>
            </form>
            <div className="flex flex-col">
                {serverResponse?.data && (
                    <div className="flex flex-col justify-center align-center">
                        <div className="p-2 flex justify-center">
                            <h2><strong>Suggested Project Allocation</strong></h2>
                        </div>
                        <div className="flex flex-col bg-scroll">
                            {(
                                serverResponse.data.map((project: ProjectAllocation) => {
                                    console.log(project)
                                    // porftolio card with props from project
                                    return <div>
                                        <PortfolioCard
                                            name={project.name}
                                            image={project.image}
                                            country={project.country}
                                            supplierName={project.supplierName}
                                            description={project.description}
                                            allocatedTonnage={project.allocatedTonnage}>
                                        </PortfolioCard>
                                    </div>
                                })
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default InputCard