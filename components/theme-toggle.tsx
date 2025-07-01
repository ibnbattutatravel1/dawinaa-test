"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon">
        <Sun className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="hover:bg-neutral-100 dark:hover:bg-neutral-800"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
      ) : (
        <Sun className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
      )}
      <span className="sr-only">تبديل المظهر</span>
    </Button>
  )
}
