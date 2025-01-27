'use client';
import axios, { AxiosResponse } from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react"

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
        console.log(event)
        setAmount(Number.parseInt(event.target.value))
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        console.log(amount)
        console.log(event)
        try {
            const response = await axios.post(BACKEND_URL + "/projects", { amount: amount });
            console.log(response.data);
            setHasResponse(response)
        } catch (error) {
            console.log(error);
            setHasResponse(null)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col justify-center items-center">
                    <label>Input desired Carbon Credits</label>
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
                    <div>
                        <span>Suggested Project Allocation</span>
                        {(
                            serverResponse.data.map((i: ProjectAllocation) => {
                                <span>{i.id}</span>
                            })
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default InputCard