import React, { useState } from 'react'
import { Users, Star, TrendingUp, AlertTriangle, CheckCircle, X, Eye, Edit, Trash2 } from 'lucide-react'
import { motion } from 'framer-motion'

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { label: 'Total Users', value: '12,456', change: '+8.2%', icon: Users, color: 'text-blue-600' },
    { label: 'Total Reviews', value: '8,923', change: '+12.5%', icon: Star, color: 'text-yellow-600' },
    { label: 'Pending Reviews', value: '23', change: '-5.1%', icon: AlertTriangle, color: 'text-orange-600' },
    { label: 'Active Freelancers', value: '3,421', change: '+15.3%', icon: TrendingUp, color: 'text-green-600' },
  ]

  const pendingReviews = [
    {
      id: 1,
      author: 'John Smith',
      freelancer: 'Alex Thompson',
      rating: 5,
      content: 'Excellent work on the e-commerce platform. Very professional and delivered on time.',
      date: '2 hours ago',
      platform: 'fiverr',
      flagged: false,
    },
    {
      id: 2,
      author: 'Sarah Wilson',
      freelancer: 'Maria Garcia',
      rating: 2,
      content: 'Poor communication and missed deadlines. Would not recommend.',
      date: '4 hours ago',
      platform: 'upwork',
      flagged: true,
    },
    {
      id: 3,
      author: 'Mike Johnson',
      freelancer: 'David Kim',
      rating: 4,
      content: 'Good SEO work but took longer than expected. Overall satisfied.',
      date: '6 hours ago',
      platform: 'fiverr',
      flagged: false,
    },
  ]

  const recentUsers = [
    {
      id: 1,
      name: 'Emily Rodriguez',
      email: 'emily@example.com',
      type: 'Client',
      joinDate: '2024-01-15',
      status: 'Active',
      reviews: 3,
    },
    {
      id: 2,
      name: 'James Wilson',
      email: 'james@example.com',
      type: 'Freelancer',
      joinDate: '2024-01-14',
      status: 'Pending',
      reviews: 0,
    },
    {
      id: 3,
      name: 'Lisa Chen',
      email: 'lisa@example.com',
      type: 'Client',
      joinDate: '2024-01-13',
      status: 'Active',
      reviews: 7,
    },
  ]

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'reviews', label: 'Review Moderation' },
    { id: 'users', label: 'User Management' },
    { id: 'freelancers', label: 'Freelancers' },
    { id: 'analytics', label: 'Analytics' },
  ]

  const handleApproveReview = (reviewId: number) => {
    console.log('Approving review:', reviewId)
  }

  const handleRejectReview = (reviewId: number) => {
    console.log('Rejecting review:', reviewId)
  }

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
          <h1 className="text-3xl font-bold text-skyline-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-skyline-600">
            Manage users, reviews, and platform analytics
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
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
                      <span className={`text-sm font-medium ${
                        stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
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
              {/* Pending Reviews */}
              <div className="card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-skyline-900">
                    Pending Reviews
                  </h2>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm font-medium">
                    {pendingReviews.length} pending
                  </span>
                </div>
                <div className="space-y-4">
                  {pendingReviews.slice(0, 3).map((review) => (
                    <div key={review.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-medium text-skyline-900">
                            {review.author} → {review.freelancer}
                          </h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="flex">
                              {renderStars(review.rating)}
                            </div>
                            {review.flagged && (
                              <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
                                Flagged
                              </span>
                            )}
                          </div>
                        </div>
                        <span className="text-xs text-skyline-500">
                          {review.date}
                        </span>
                      </div>
                      <p className="text-sm text-skyline-700 mb-3">
                        {review.content}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {review.platform}
                        </span>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleApproveReview(review.id)}
                            className="text-green-600 hover:text-green-700 p-1"
                          >
                            <CheckCircle size={16} />
                          </button>
                          <button
                            onClick={() => handleRejectReview(review.id)}
                            className="text-red-600 hover:text-red-700 p-1"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Users */}
              <div className="card p-6">
                <h2 className="text-xl font-semibold text-skyline-900 mb-6">
                  Recent Users
                </h2>
                <div className="space-y-4">
                  {recentUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div>
                        <h4 className="font-medium text-skyline-900">
                          {user.name}
                        </h4>
                        <p className="text-sm text-skyline-600">
                          {user.email} • {user.type}
                        </p>
                        <p className="text-xs text-skyline-500">
                          Joined {user.joinDate}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {user.status}
                        </span>
                        <p className="text-xs text-skyline-500 mt-1">
                          {user.reviews} reviews
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Review Moderation Tab */}
        {activeTab === 'reviews' && (
          <div className="space-y-6">
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-skyline-900">
                  Review Moderation
                </h2>
                <div className="flex space-x-2">
                  <button className="btn-outline">
                    Filter
                  </button>
                  <button className="btn-primary">
                    Bulk Actions
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                {pendingReviews.map((review) => (
                  <div key={review.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-skyline-900 mb-1">
                          Review for {review.freelancer}
                        </h4>
                        <p className="text-skyline-600">
                          By {review.author} • {review.date}
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          <div className="flex">
                            {renderStars(review.rating)}
                          </div>
                          <span className="text-sm text-skyline-600">
                            {review.rating}/5
                          </span>
                          {review.flagged && (
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                              Flagged for Review
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {review.platform}
                      </span>
                    </div>
                    <p className="text-skyline-700 mb-4">
                      {review.content}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <button className="flex items-center space-x-1 text-skyline-600 hover:text-primary-600 text-sm">
                          <Eye size={14} />
                          <span>View Details</span>
                        </button>
                        <button className="flex items-center space-x-1 text-skyline-600 hover:text-primary-600 text-sm">
                          <Edit size={14} />
                          <span>Edit</span>
                        </button>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleRejectReview(review.id)}
                          className="btn-secondary text-sm py-2 px-4"
                        >
                          Reject
                        </button>
                        <button
                          onClick={() => handleApproveReview(review.id)}
                          className="btn-primary text-sm py-2 px-4"
                        >
                          Approve
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* User Management Tab */}
        {activeTab === 'users' && (
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-skyline-900">
                User Management
              </h2>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Search users..."
                  className="input-field"
                />
                <button className="btn-primary">
                  Add User
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-skyline-700">User</th>
                    <th className="text-left py-3 px-4 font-medium text-skyline-700">Type</th>
                    <th className="text-left py-3 px-4 font-medium text-skyline-700">Join Date</th>
                    <th className="text-left py-3 px-4 font-medium text-skyline-700">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-skyline-700">Reviews</th>
                    <th className="text-left py-3 px-4 font-medium text-skyline-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((user) => (
                    <tr key={user.id} className="border-b border-gray-100">
                      <td className="py-3 px-4">
                        <div>
                          <div className="font-medium text-skyline-900">{user.name}</div>
                          <div className="text-sm text-skyline-600">{user.email}</div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-skyline-700">{user.type}</td>
                      <td className="py-3 px-4 text-skyline-700">{user.joinDate}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-skyline-700">{user.reviews}</td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          <button className="text-primary-600 hover:text-primary-700">
                            <Eye size={16} />
                          </button>
                          <button className="text-skyline-600 hover:text-skyline-700">
                            <Edit size={16} />
                          </button>
                          <button className="text-red-600 hover:text-red-700">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Other tabs would be implemented similarly */}
        {(activeTab === 'freelancers' || activeTab === 'analytics') && (
          <div className="card p-8 text-center">
            <h2 className="text-2xl font-semibold text-skyline-900 mb-4">
              {activeTab === 'freelancers' ? 'Freelancer Management' : 'Analytics Dashboard'}
            </h2>
            <p className="text-skyline-600">
              This section is under development and will be available soon.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminPanel