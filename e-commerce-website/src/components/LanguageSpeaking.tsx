'use client'

import { useState, useEffect } from 'react'
import { Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  {code:'ur' , name:'اردو'},
]

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState('en')

  useEffect(() => {
    // Load language preference from localStorage or default to 'en'
    const savedLang = localStorage.getItem('language') || 'en'
    setCurrentLang(savedLang)
  }, [])

  const changeLang = (langCode: string) => {
    setCurrentLang(langCode)
    localStorage.setItem('language', langCode)
    // Here you would typically fetch and apply new translations
    console.log(`Language changed to ${langCode}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" className=' text-lg'>
          <Globe className="h-4 w-4" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem 
            key={lang.code}
            onClick={() => changeLang(lang.code)}
            className={currentLang === lang.code ? 'bg-accent' : ''}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}