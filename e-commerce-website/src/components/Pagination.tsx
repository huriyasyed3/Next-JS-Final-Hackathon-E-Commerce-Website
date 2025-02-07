'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface PaginationProps {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  onPageChange: (page: number) => void
}

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange
}: PaginationProps) {
  const [pages, setPages] = useState<(number | string)[]>([])

  useEffect(() => {
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const maxVisiblePages = 5
    let newPages: (number | string)[] = []

    if (totalPages <= maxVisiblePages) {
      newPages = Array.from({ length: totalPages }, (_, i) => i + 1)
    } else {
      const leftSiblingIndex = Math.max(currentPage - 1, 1)
      const rightSiblingIndex = Math.min(currentPage + 1, totalPages)

      const shouldShowLeftDots = leftSiblingIndex > 2
      const shouldShowRightDots = rightSiblingIndex < totalPages - 2

      if (!shouldShowLeftDots && shouldShowRightDots) {
        const leftItemCount = 3
        newPages = [...Array(leftItemCount).keys()].map(i => i + 1)
        newPages.push('...')
        newPages.push(totalPages)
      } else if (shouldShowLeftDots && !shouldShowRightDots) {
        newPages = [1, '...']
        const rightItemCount = 3
        newPages.push(...Array(rightItemCount)
          .fill(0)
          .map((_, i) => totalPages - rightItemCount + i + 1))
      } else if (shouldShowLeftDots && shouldShowRightDots) {
        newPages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages]
      } else {
        newPages = [1, 2, 3, 4, 5]
      }
    }

    setPages(newPages)
  }, [totalItems, itemsPerPage, currentPage])

  return (
    <nav className="flex justify-center items-center space-x-1 mt-8">
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        aria-label="Go to first page"
        className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-md text-gray-500 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <ChevronsLeft className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
        className="inline-flex items-center justify-center w-10 h-10 rounded-md text-gray-500 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      
      {pages.map((page, index) => (
        typeof page === 'number' ? (
          <Button
            key={index}
            variant={currentPage === page ? "default" : "outline"}
            size="icon"
            onClick={() => onPageChange(page)}
            aria-label={`Go to page ${page}`}
            aria-current={currentPage === page ? 'page' : undefined}
            className={`hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-md ${
              currentPage === page
                ? 'bg-yellow-400 text-white hover:bg-indigo-700'
                : 'text-gray-500 bg-white hover:bg-gray-50'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            {page}
          </Button>
        ) : (
          <span key={index} className="hidden sm:inline-flex items-center justify-center w-10 h-10 text-gray-500">...</span>
        )
      ))}
      
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
        aria-label="Go to next page"
        className="inline-flex items-center justify-center w-10 h-10 rounded-md text-gray-500 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(Math.ceil(totalItems / itemsPerPage))}
        disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
        aria-label="Go to last page"
        className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-md text-gray-500 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <ChevronsRight className="h-5 w-5" />
      </Button>
    </nav>
  )
}