'use client'

import { useState } from 'react'
import { User, Mail, MapPin, Edit2, Plus, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"

interface UserData {
  name: string
  email: string
  addresses: string[]
  orders: {
    id: string
    date: string
    total: number
    status: string
  }[]
}

export default function UserProfile() {
  const [userData, setUserData] = useState<UserData>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    addresses: [
      '123 Main St, Anytown, USA 12345',
      '456 Elm St, Othertown, USA 67890'
    ],
    orders: [
      { id: 'ORD-001', date: '2023-07-01', total: 99.99, status: 'Delivered' },
      { id: 'ORD-002', date: '2023-07-15', total: 149.99, status: 'Processing' },
    ]
  })

  const [isEditing, setIsEditing] = useState(false)
  const [newAddress, setNewAddress] = useState('')

  const handleSave = () => {
    // Here you would typically send the updated data to your backend
    setIsEditing(false)
  }

  const handleAddAddress = () => {
    if (newAddress) {
      setUserData(prev => ({
        ...prev,
        addresses: [...prev.addresses, newAddress]
      }))
      setNewAddress('')
    }
  }

  const handleRemoveAddress = (index: number) => {
    setUserData(prev => ({
      ...prev,
      addresses: prev.addresses.filter((_, i) => i !== index)
    }))
  }

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-8 bg-gradient-to-r from-purple-50 to-blue-100">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-900 border-b pb-2">User Profile</h2>
      
      <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-800">Personal Information</h3>
          <Button 
            onClick={() => setIsEditing(!isEditing)}
            variant={isEditing ? "outline" : "default"}
            className="flex items-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none"
          >
            {isEditing ? (
              <>Cancel <Edit2 className="ml-2 h-4 w-4" /></>
            ) : (
              <>Edit <Edit2 className="ml-2 h-4 w-4" /></>
            )}
          </Button>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <User className="h-6 w-6 text-indigo-600" />
            {isEditing ? (
              <Input
                value={userData.name}
                onChange={(e) => setUserData({...userData, name: e.target.value})}
                className="flex-grow border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
            ) : (
              <span className="text-lg text-gray-700">{userData.name}</span>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="h-6 w-6 text-indigo-600" />
            {isEditing ? (
              <Input
                value={userData.email}
                onChange={(e) => setUserData({...userData, email: e.target.value})}
                className="flex-grow border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
            ) : (
              <span className="text-lg text-gray-700">{userData.email}</span>
            )}
          </div>
        </div>
        
        {isEditing && (
          <Button onClick={handleSave} className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white transition-colors">Save Changes</Button>
        )}
      </div>

      <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Addresses</h3>
        <ul className="space-y-4">
          {userData.addresses.map((address, index) => (
            <li key={index} className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
              <MapPin className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700 flex-grow">{address}</span>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => handleRemoveAddress(index)}
                className="text-red-600 hover:text-red-700 focus:outline-none"
              >
                <Trash2 className="h-5 w-5" />
              </Button>
            </li>
          ))}
        </ul>
        <div className="mt-6 space-y-4">
          <Label htmlFor="newAddress" className="text-lg font-medium text-gray-700">Add New Address</Label>
          <Textarea
            id="newAddress"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
            placeholder="Enter your new address"
            className="w-full border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500"
          />
          <Button onClick={handleAddAddress} className="bg-green-600 hover:bg-green-700 text-white flex items-center transition-colors">
            <Plus className="mr-2 h-5 w-5" /> Add Address
          </Button>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Order History</h3>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-indigo-600">Order ID</TableHead>
                <TableHead className="text-indigo-600">Date</TableHead>
                <TableHead className="text-indigo-600">Total</TableHead>
                <TableHead className="text-indigo-600">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userData.orders.map((order) => (
                <TableRow key={order.id} className="hover:bg-indigo-50">
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>${order.total.toFixed(2)}</TableCell>
                  <TableCell>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {order.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
