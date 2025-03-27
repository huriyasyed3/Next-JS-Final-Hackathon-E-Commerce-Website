'use client'

import { useState } from 'react'
import { Star, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Review {
  id: string
  user: string
  rating: number
  comment: string
  date: string
}

export default function ReviewsAndRatings() {
  const [reviews, setReviews] = useState<Review[]>([
    { id: '1', user: 'John Doe', rating: 5, comment: 'Great product!', date: '2023-07-01' },
    { id: '2', user: 'Jane Smith', rating: 4, comment: 'Good quality, but a bit pricey.', date: '2023-06-28' },
  ])
  const [newReview, setNewReview] = useState<Omit<Review, 'id' | 'date'>>({
    user: '',
    rating: 5,
    comment: ''
  })

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    const review: Review = {
      ...newReview,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0]
    }
    setReviews([review, ...reviews])
    setNewReview({ user: '', rating: 5, comment: '' })
  }

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 bg-white rounded-2xl">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-bold text-gray-900">Customer Reviews</h2>
        <p className="text-lg text-gray-600">Share your experience with our community</p>
      </div>
      
      {/* Rating Summary */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-sm text-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-6xl font-bold text-blue-600">{averageRating.toFixed(1)}</div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-8 w-8 transition-colors ${
                  star <= Math.round(averageRating) 
                    ? 'text-amber-400 fill-amber-400' 
                    : 'text-gray-200 fill-gray-100'
                }`}
              />
            ))}
          </div>
          <div className="text-sm font-medium text-gray-500">
            Based on {reviews.length} review{reviews.length !== 1 && 's'}
          </div>
        </div>
      </div>

      {/* Review Form */}
      <form onSubmit={handleSubmitReview} className="space-y-6 p-8 bg-white border border-gray-100 rounded-2xl shadow-xs">
        <h3 className="text-2xl font-semibold text-gray-900">Write a Review</h3>
        <div className="space-y-5">
          <Input
            placeholder="Your Name"
            className="h-12 rounded-lg border-gray-200 focus:ring-2 focus:ring-blue-500"
            value={newReview.user}
            onChange={(e) => setNewReview({...newReview, user: e.target.value})}
            required
          />
          
          <Select
            value={newReview.rating.toString()}
            onValueChange={(value) => setNewReview({...newReview, rating: parseInt(value)})}
          >
            <SelectTrigger className="h-12 rounded-lg border-gray-200 focus:ring-2 focus:ring-blue-500">
              <SelectValue placeholder="Select your rating" />
            </SelectTrigger>
            <SelectContent className="rounded-lg">
              {[1, 2, 3, 4, 5].map((rating) => (
                <SelectItem 
                  key={rating} 
                  value={rating.toString()}
                  className="hover:bg-blue-50 focus:bg-blue-50"
                >
                  {rating} Star{rating !== 1 ? 's' : ''}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Textarea
            placeholder="Share your thoughts..."
            className="min-h-[120px] rounded-lg border-gray-200 focus:ring-2 focus:ring-blue-500"
            value={newReview.comment}
            onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
            required
          />

          <Button 
            type="submit" 
            className="w-full h-12 text-lg font-medium bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg"
          >
            Submit Review
          </Button>
        </div>
      </form>

      {/* Reviews List */}
      <div className="space-y-8">
        <h3 className="text-2xl font-semibold text-gray-900">Customer Experiences</h3>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="p-6 bg-white border border-gray-100 rounded-xl shadow-xs hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100">
                  <User className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{review.user}</h4>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${
                      star <= review.rating 
                        ? 'text-amber-400 fill-amber-400' 
                        : 'text-gray-200 fill-gray-100'
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
