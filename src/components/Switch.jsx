"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function Switch() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={resolvedTheme === "dark"}
        onChange={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        className="sr-only"
      />
      <div className="w-14 h-8 bg-gray-300 rounded-full dark:bg-gray-700 peer-checked:bg-indigo-500 peer-focus:ring-2 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 transition-all duration-500 ease-in-out flex items-center px-1">
        <div
          className={`w-6 h-6 bg-white rounded-full shadow-lg transform transition-transform duration-500 ease-in-out ${
            resolvedTheme === "dark" ? "translate-x-6" : "translate-x-0"
          } flex items-center justify-center`}
        >
          {resolvedTheme === "dark" ? (
            <Moon className="h-4 w-4 text-[#09090B]" />
          ) : (
            <Sun className="h-4 w-4 text-red-600" />
          )}
        </div>
      </div>
      <style jsx>{`
        label:hover .bg-gray-300 {
          background-color: #d1d5db;
        }
        label:hover .dark:bg-gray-700 {
          background-color: #4b5563;
        }
      `}</style>
    </label>
  )
}
