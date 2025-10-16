"use client"

import { useEffect, useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);

    return (
        <div className="p-10 bg-white">
            <h1 className="text-2xl font-semibold mb-4">Counter: {count}</h1>
            <div className="flex gap-4">
            <button 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
                   <button 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                onClick={() => setCount(count - 1)}
            >
                Decrement
            </button>
            </div>
        </div>
    )
}