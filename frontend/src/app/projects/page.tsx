'use client'
import axios from 'axios';
import { useState, useEffect } from 'react'

type Project = {
    id: number;
    name: string;
    country: string;
    image: string;
    supplierName: string;
    description: string;
}

const BACKEND_URL = "http://localhost:3000"

function Project() {
    const [projects, setData] = useState<Project[]>([])
    const [isLoading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        axios.get(BACKEND_URL + '/projects')
            .then(response => {
                setData(response.data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!projects) return <p>No project data</p>

    return (
        <div className="grid">
            {projects.map((project: Project) => (
                <div>
                    <div>
                        <span>{project.id}</span>
                        <img src={project.image} width="500" height="500"></img>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Project