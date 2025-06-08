import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Star, MapPin, ExternalLink, Calendar, Award, TrendingUp, MessageCircle, Flag, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const FreelancerProfile = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('reviews')

  // Mock data - in real app, fetch based on ID
  const freelancer = {
    id: 1,
    name: 'Alex Thompson',
    title: 'Full-Stack Developer & UI/UX Designer',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    coverImage: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop',
    rating: 4.9,
    reviewCount: 127,
    location: 'San Francisco, CA',
    joinedDate: 'March 2020',
    responseTime: '< 1 hour',
    completionRate: '98%',
    platforms: [
      { name: 'fiverr', url: 'https://fiverr.com/alexthompson', verified: true },
      { name: 'upwork', url: 'https://upwork.com/freelancers/alexthompson', verified: true },
    ],
    category: 'Web Development',
    startingPrice: 25,
    skills: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Next.js', 'GraphQL', 'AWS', 'Docker'],
    description: `Experienced full-stack developer with 5+ years of building modern web applications. I specialize in React, Node.js, and cloud technologies. I've helped over 100 clients bring their ideas to life with clean, scalable code and beautiful user interfaces.

I'm passionate about creating digital experiences that not only look great but also perform exceptionally well. Whether you need a simple landing page or a complex web application, I'm here to help you succeed.`,
    verified: true,
    badges: ['Top Rated', 'Rising Talent', 'Verified Professional'],
    portfolio: [
      {
        id: 1,
        title: 'E-commerce Platform',
        image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        description: 'Modern e-commerce platform built with React and Node.js',
        technologies: ['React', 'Node.js', 'MongoDB'],
      },
      {
        id: 2,
        title: 'SaaS Dashboard',
        image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        description: 'Analytics dashboard for SaaS companies',
        technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
      },
      {
        id: 3,
        title: 'Mobile Banking App',
        image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        description: 'Secure mobile banking application',
        technologies: ['React Native', 'Node.js', 'AWS'],
      },
    ],
  }

  const reviews = [
    {
      id: 1,
      author: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 5,
      date: '2 weeks ago',
      platform: 'fiverr',
      project: 'E-commerce Website Development',
      content: 'Alex delivered exceptional work on our e-commerce platform. The code quality is outstanding, and he went above and beyond to ensure everything was perfect. Communication was excellent throughout the project.',
      helpful: 12,
    },
    {
      id: 2,
      author: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 5,
      date: '1 month ago',
      platform: 'upwork',
      project: 'React Dashboard Development',
      content: 'Working with Alex was a pleasure. He understood our requirements perfectly and delivered a beautiful, responsive dashboard. The project was completed on time and within budget.',
      helpful: 8,
    },
    {
      id: 3,
      author: 'Emily Rodriguez',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 4,
      date: '2 months ago',
      platform: 'fiverr',
      project: 'API Development',
      content: 'Great technical skills and professional approach. The API was well-documented and thoroughly tested. Minor delays in communication, but overall a solid experience.',
      helpful: 5,
    },
  ]

  const tabs = [
    { id: 'reviews', label: 'Reviews', count: freelancer.reviewCount },
    { id: 'portfolio', label: 'Portfolio', count: freelancer.portfolio.length },
    { id: 'about', label: 'About', count: null },
  ]

  const getPlatformBadge = (platform: string) => {
    const badges = {
      fiverr: 'bg-green-100 text-green-800',
      upwork: 'bg-blue-100 text-blue-800',
    }
    return badges[platform as keyof typeof badges] || 'bg-gray-100 text-gray-800'
  }

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        size={16}
      />
    ))
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Cover Section */}
      <div className="relative h-64 bg-gradient-to-r from-primary-600 to-primary-800">
        <img
          src={freelancer.coverImage}
          alt="Cover"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/80 to-primary-800/80" />
      </div>

      {/* Profile Header */}
      <div className="container-max">
        <div className="relative -mt-20 pb-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Avatar */}
              <div className="relative">
                <img
                  src={freelancer.avatar}
                  alt={freelancer.name}
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                />
                {freelancer.verified && (
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center border-4 border-white">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-skyline-900 mb-2">
                      {freelancer.name}
                    </h1>
                    <p className="text-xl text-skyline-600 mb-3">
                      {freelancer.title}
                    </p>
                    <div className="flex items-center space-x-4 text-skyline-500">
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{freelancer.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>Joined {freelancer.joinedDate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 mt-4 lg:mt-0">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                      <Heart size={20} />
                      <span>Save</span>
                    </button>
                    <button className="btn-outline">
                      <MessageCircle size={16} className="mr-2" />
                      Contact
                    </button>
                    <button className="btn-primary">
                      Write Review
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start space-x-1 mb-1">
                      <Star className="text-yellow-400 fill-current" size={18} />
                      <span className="text-xl font-bold text-skyline-900">
                        {freelancer.rating}
                      </span>
                    </div>
                    <p className="text-skyline-500 text-sm">
                      {freelancer.reviewCount} reviews
                    </p>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-xl font-bold text-skyline-900 mb-1">
                      {freelancer.responseTime}
                    </div>
                    <p className="text-skyline-500 text-sm">Response time</p>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-xl font-bold text-skyline-900 mb-1">
                      {freelancer.completionRate}
                    </div>
                    <p className="text-skyline-500 text-sm">Completion rate</p>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-xl font-bold text-skyline-900 mb-1">
                      ${freelancer.startingPrice}/hr
                    </div>
                    <p className="text-skyline-500 text-sm">Starting price</p>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {freelancer.badges.map((badge) => (
                    <span
                      key={badge}
                      className="flex items-center space-x-1 px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full"
                    >
                      <Award size={14} />
                      <span>{badge}</span>
                    </span>
                  ))}
                </div>

                {/* Platforms */}
                <div className="flex items-center space-x-4">
                  <span className="text-skyline-600 font-medium">Available on:</span>
                  {freelancer.platforms.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium transition-colors hover:opacity-80 ${getPlatformBadge(platform.name)}`}
                    >
                      <span>{platform.name.charAt(0).toUpperCase() + platform.name.slice(1)}</span>
                      <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
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
                  {tab.count && (
                    <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="space-y-6">
                {reviews.map((review) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border-b border-gray-100 pb-6 last:border-b-0"
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={review.avatar}
                        alt={review.author}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-skyline-900">
                              {review.author}
                            </h4>
                            <div className="flex items-center space-x-2 text-sm text-skyline-500">
                              <span>{review.date}</span>
                              <span>•</span>
                              <span className={`px-2 py-0.5 rounded-full text-xs ${getPlatformBadge(review.platform)}`}>
                                {review.platform}
                              </span>
                            </div>
                          </div>
                          <button className="text-gray-400 hover:text-gray-600">
                            <Flag size={16} />
                          </button>
                        </div>
                        
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="flex">
                            {renderStars(review.rating)}
                          </div>
                          <span className="text-sm font-medium text-skyline-700">
                            {review.project}
                          </span>
                        </div>
                        
                        <p className="text-skyline-700 mb-3">
                          {review.content}
                        </p>
                        
                        <div className="flex items-center space-x-4 text-sm text-skyline-500">
                          <button className="hover:text-primary-600 transition-colors">
                            👍 Helpful ({review.helpful})
                          </button>
                          <button className="hover:text-primary-600 transition-colors">
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Portfolio Tab */}
            {activeTab === 'portfolio' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {freelancer.portfolio.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="card overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-skyline-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-skyline-600 text-sm mb-3">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* About Tab */}
            {activeTab === 'about' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-skyline-900 mb-4">
                    About {freelancer.name}
                  </h3>
                  <div className="prose prose-gray max-w-none">
                    {freelancer.description.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-skyline-700 mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-skyline-900 mb-4">
                    Skills & Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {freelancer.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-2 bg-primary-50 text-primary-700 font-medium rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FreelancerProfile