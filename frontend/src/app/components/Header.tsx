'use client';
import Link from "next/link";
import React from "react"

const Header = () => {
    return (
        <div className="flex flex-row justify-around h-20">
            <div className="p-2 content-center">
                <Link href="/projects">Projects</Link>
            </div>
            <div className="p-2 content-center">
                <Link href="/home">Home</Link>
            </div>
        </div>
    )
}

export default Header