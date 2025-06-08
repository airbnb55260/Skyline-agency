import React, { useState } from 'react'
import { Star, TrendingUp, Users, MessageCircle, Eye, Heart, Edit, Plus, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')

  // Mock user data
  const user = {
    name: 'Alex Thompson',
    email: 'alex@example.com',
    type: 'freelancer',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    joinedDate: 'March 2020',
    verified: true,
  }

  const stats = [
    { label: 'Profile Views', value: '1,234', change: '+12%', icon: Eye, color: 'text-blue-600' },
    { label: 'Total Reviews', value: '127', change: '+8%', icon: Star, color: 'text-yellow-600' },
    { label: 'Average Rating', value: '4.9', change: '+0.1', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Saved by Users', value: '89', change: '+15%', icon: Heart, color: 'text-red-600' },
  ]

  const recentReviews = [
    {
      id: 1,
      author: 'Sarah Johnson',
      rating: 5,
      date: '2 days ago',
      project: 'E-commerce Website',
      content: 'Excellent work! Alex delivered exactly what we needed.',
      platform: 'fiverr',
    },
    {
      id: 2,
      author: 'Michael Chen',
      rating: 4,
      date: '1 week ago',
      project: 'React Dashboard',
      content: 'Great communication and quality code.',
      platform: 'upwork',
    },
    {
      id: 3,
      author: 'Emily Rodriguez',
      rating: 5,
      date: '2 weeks ago',
      project: 'API Development',
      content: 'Professional and timely delivery.',
      platform: 'fiverr',
    },
  ]

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'profile', label: 'Profile', icon: Users },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'settings', label: 'Settings', icon: Edit },
  ]

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        size={14}
      />
    ))
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h1 className="text-3xl font-bold text-skyline-900">
                Welcome back, {user.name}!
              </h1>
              <p className="text-skyline-600">
                Manage your profile and track your performance
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon size={16} />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="card p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-2 rounded-lg bg-gray-100 ${stat.color}`}>
                        <Icon size={20} />
                      </div>
                      <span className="text-sm font-medium text-green-600">
                        {stat.change}
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-skyline-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-skyline-600 text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Reviews */}
              <div className="card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-skyline-900">
                    Recent Reviews
                  </h2>
                  <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {recentReviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-medium text-skyline-900">
                            {review.author}
                          </h4>
                          <p className="text-sm text-skyline-600">
                            {review.project}
                          </p>
                        </div>
                        <span className="text-xs text-skyline-500">
                          {review.date}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex">
                          {renderStars(review.rating)}
                        </div>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {review.platform}
                        </span>
                      </div>
                      <p className="text-sm text-skyline-700">
                        {review.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card p-6">
                <h2 className="text-xl font-semibold text-skyline-900 mb-6">
                  Quick Actions
                </h2>
                <div className="space-y-4">
                  <button className="w-full flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <Edit className="text-primary-600" size={20} />
                    <div className="text-left">
                      <div className="font-medium text-skyline-900">
                        Update Profile
                      </div>
                      <div className="text-sm text-skyline-600">
                        Keep your information current
                      </div>
                    </div>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <Plus className="text-primary-600" size={20} />
                    <div className="text-left">
                      <div className="font-medium text-skyline-900">
                        Add Portfolio Item
                      </div>
                      <div className="text-sm text-skyline-600">
                        Showcase your latest work
                      </div>
                    </div>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <MessageCircle className="text-primary-600" size={20} />
                    <div className="text-left">
                      <div className="font-medium text-skyline-900">
                        Respond to Reviews
                      </div>
                      <div className="text-sm text-skyline-600">
                        Engage with your clients
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="card p-8">
            <h2 className="text-2xl font-semibold text-skyline-900 mb-6">
              Profile Information
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-skyline-700 mb-2">
                    Profile Picture
                  </label>
                  <div className="flex items-center space-x-4">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-20 h-20 rounded-full"
                    />
                    <button className="btn-outline">
                      Change Photo
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-skyline-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={user.name}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-skyline-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={user.email}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-skyline-700 mb-2">
                    Professional Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Full-Stack Developer"
                    className="input-field"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-skyline-700 mb-2">
                    Bio
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about yourself and your expertise..."
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-skyline-700 mb-2">
                    Skills
                  </label>
                  <input
                    type="text"
                    placeholder="React, Node.js, TypeScript..."
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-skyline-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="City, Country"
                    className="input-field"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end space-x-4">
              <button className="btn-secondary">
                Cancel
              </button>
              <button className="btn-primary">
                Save Changes
              </button>
            </div>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="space-y-6">
            <div className="card p-6">
              <h2 className="text-2xl font-semibold text-skyline-900 mb-6">
                Your Reviews
              </h2>
              <div className="space-y-6">
                {recentReviews.map((review) => (
                  <div key={review.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-skyline-900">
                          {review.author}
                        </h4>
                        <p className="text-skyline-600">{review.project}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 mb-1">
                          {renderStars(review.rating)}
                        </div>
                        <span className="text-sm text-skyline-500">
                          {review.date}
                        </span>
                      </div>
                    </div>
                    <p className="text-skyline-700 mb-4">
                      {review.content}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {review.platform}
                      </span>
                      <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                        Reply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <div className="card p-6">
              <h2 className="text-2xl font-semibold text-skyline-900 mb-6">
                Account Settings
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-skyline-900 mb-4">
                    Notifications
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" defaultChecked />
                      <span className="text-skyline-700">Email notifications for new reviews</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" defaultChecked />
                      <span className="text-skyline-700">Weekly performance summary</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" />
                      <span className="text-skyline-700">Marketing emails</span>
                    </label>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-skyline-900 mb-4">
                    Privacy
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" defaultChecked />
                      <span className="text-skyline-700">Make profile public</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" defaultChecked />
                      <span className="text-skyline-700">Allow search engines to index profile</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard