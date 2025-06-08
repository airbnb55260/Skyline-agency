import React, { useState } from 'react'
import { Search, Filter, Star, MapPin, ExternalLink, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const FreelancerSearch = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPlatform, setSelectedPlatform] = useState('all')
  const [sortBy, setSortBy] = useState('rating')

  const categories = [
    'All Categories',
    'Graphic Design',
    'Web Development',
    'Content Writing',
    'Digital Marketing',
    'Video Editing',
    'SEO Services',
    'Mobile Apps',
    'Data Entry',
    'Translation',
  ]

  const platforms = [
    { value: 'all', label: 'All Platforms' },
    { value: 'fiverr', label: 'Fiverr' },
    { value: 'upwork', label: 'Upwork' },
  ]

  const sortOptions = [
    { value: 'rating', label: 'Highest Rated' },
    { value: 'reviews', label: 'Most Reviews' },
    { value: 'recent', label: 'Recently Added' },
    { value: 'price', label: 'Price: Low to High' },
  ]

  const freelancers = [
    {
      id: 1,
      name: 'Alex Thompson',
      title: 'Full-Stack Developer',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 4.9,
      reviewCount: 127,
      location: 'United States',
      platforms: ['fiverr', 'upwork'],
      category: 'Web Development',
      startingPrice: 25,
      skills: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
      description: 'Experienced full-stack developer with 5+ years building modern web applications.',
      verified: true,
    },
    {
      id: 2,
      name: 'Maria Garcia',
      title: 'Brand Designer',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 4.8,
      reviewCount: 89,
      location: 'Spain',
      platforms: ['fiverr'],
      category: 'Graphic Design',
      startingPrice: 15,
      skills: ['Adobe Creative Suite', 'Branding', 'Logo Design', 'UI/UX'],
      description: 'Creative designer specializing in brand identity and visual storytelling.',
      verified: true,
    },
    {
      id: 3,
      name: 'David Kim',
      title: 'SEO Specialist',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 4.7,
      reviewCount: 156,
      location: 'South Korea',
      platforms: ['upwork'],
      category: 'Digital Marketing',
      startingPrice: 30,
      skills: ['SEO', 'Google Analytics', 'Content Strategy', 'Link Building'],
      description: 'SEO expert helping businesses improve their search engine rankings.',
      verified: false,
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      title: 'Content Writer',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 4.9,
      reviewCount: 203,
      location: 'Canada',
      platforms: ['fiverr', 'upwork'],
      category: 'Content Writing',
      startingPrice: 20,
      skills: ['Blog Writing', 'Copywriting', 'Technical Writing', 'SEO Writing'],
      description: 'Professional writer creating engaging content for businesses worldwide.',
      verified: true,
    },
    {
      id: 5,
      name: 'Ahmed Hassan',
      title: 'Video Editor',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 4.6,
      reviewCount: 74,
      location: 'Egypt',
      platforms: ['fiverr'],
      category: 'Video Editing',
      startingPrice: 35,
      skills: ['Adobe Premiere', 'After Effects', 'Motion Graphics', 'Color Grading'],
      description: 'Creative video editor with expertise in promotional and educational content.',
      verified: true,
    },
    {
      id: 6,
      name: 'Lisa Chen',
      title: 'Mobile App Developer',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 4.8,
      reviewCount: 92,
      location: 'Singapore',
      platforms: ['upwork'],
      category: 'Mobile Apps',
      startingPrice: 40,
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      description: 'Mobile app developer creating cross-platform solutions for startups.',
      verified: true,
    },
  ]

  const getPlatformBadge = (platform: string) => {
    const badges = {
      fiverr: 'bg-green-100 text-green-800',
      upwork: 'bg-blue-100 text-blue-800',
    }
    return badges[platform as keyof typeof badges] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Search Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-max py-8">
          <h1 className="text-3xl font-bold text-skyline-900 mb-6">Find Freelancers</h1>
          
          {/* Search Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search freelancers, skills, or services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <button className="btn-primary px-8 py-3">
              Search
            </button>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="input-field"
            >
              {categories.map((category) => (
                <option key={category} value={category.toLowerCase().replace(' ', '-')}>
                  {category}
                </option>
              ))}
            </select>

            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="input-field"
            >
              {platforms.map((platform) => (
                <option key={platform.value} value={platform.value}>
                  {platform.label}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="input-field"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container-max section-padding">
        <div className="flex justify-between items-center mb-8">
          <p className="text-skyline-600">
            Showing {freelancers.length} freelancers
          </p>
          <button className="flex items-center space-x-2 text-skyline-600 hover:text-primary-600 transition-colors">
            <Filter size={16} />
            <span>More Filters</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {freelancers.map((freelancer, index) => (
            <motion.div
              key={freelancer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <img
                    src={freelancer.avatar}
                    alt={freelancer.name}
                    className="w-16 h-16 rounded-full"
                  />
                  {freelancer.verified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white\" fill="currentColor\" viewBox="0 0 20 20">
                        <path fillRule="evenodd\" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z\" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-skyline-900 hover:text-primary-600 cursor-pointer">
                        {freelancer.name}
                      </h3>
                      <p className="text-skyline-600">{freelancer.title}</p>
                    </div>
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                      <Heart size={20} />
                    </button>
                  </div>

                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className="font-medium">{freelancer.rating}</span>
                      <span className="text-skyline-500">({freelancer.reviewCount})</span>
                    </div>
                    <div className="flex items-center space-x-1 text-skyline-500">
                      <MapPin size={14} />
                      <span className="text-sm">{freelancer.location}</span>
                    </div>
                  </div>

                  <p className="text-skyline-600 mb-4 text-sm">
                    {freelancer.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {freelancer.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {freelancer.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        +{freelancer.skills.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {freelancer.platforms.map((platform) => (
                        <span
                          key={platform}
                          className={`px-2 py-1 text-xs font-medium rounded-full ${getPlatformBadge(platform)}`}
                        >
                          {platform.charAt(0).toUpperCase() + platform.slice(1)}
                        </span>
                      ))}
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-skyline-500">Starting at</p>
                      <p className="text-lg font-semibold text-skyline-900">
                        ${freelancer.startingPrice}/hr
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-3 mt-4 pt-4 border-t border-gray-100">
                    <button className="flex-1 btn-primary text-sm py-2">
                      View Profile
                    </button>
                    <button className="flex items-center space-x-1 px-3 py-2 text-skyline-600 hover:text-primary-600 transition-colors">
                      <ExternalLink size={14} />
                      <span className="text-sm">External</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-outline px-8 py-3">
            Load More Freelancers
          </button>
        </div>
      </div>
    </div>
  )
}

export default FreelancerSearch