"use client"

import { useState } from "react"

export default function ClassroomsPage() {
  const [classrooms, setClassrooms] = useState<string[]>([])
  const [input, setInput] = useState("")

  const addClassroom = () => {
    if (!input) return
    setClassrooms([...classrooms, input])
    setInput("")
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Classrooms</h1>

      <div className="flex gap-2 mb-4">
        <input
          className="border px-2 py-1 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New Classroom"
        />
        <button
          onClick={addClassroom}
          className="bg-blue-600 text-white px-3 py-1 rounded"
        >
          Add
        </button>
      </div>

      <ul className="list-disc pl-5">
        {classrooms.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  )
}