import React from 'react'
import { Link } from 'react-router-dom'
import { Search, Star, Users, Shield, TrendingUp, Award, ArrowRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const Home = () => {
  const features = [
    {
      icon: Search,
      title: 'Find Top Freelancers',
      description: 'Discover verified freelancers from Fiverr and Upwork with authentic reviews and ratings.',
    },
    {
      icon: Star,
      title: 'Authentic Reviews',
      description: 'Read real experiences from clients who have worked with freelancers on major platforms.',
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'Our moderation system ensures all reviews are genuine and helpful for the community.',
    },
    {
      icon: TrendingUp,
      title: 'Performance Insights',
      description: 'Get detailed analytics on freelancer performance across different platforms.',
    },
  ]

  const stats = [
    { number: '10,000+', label: 'Freelancers Listed' },
    { number: '25,000+', label: 'Reviews Posted' },
    { number: '50+', label: 'Categories' },
    { number: '4.8/5', label: 'Average Rating' },
  ]

  const topCategories = [
    { name: 'Graphic Design', count: '2,500+ freelancers', color: 'bg-purple-100 text-purple-800' },
    { name: 'Web Development', count: '1,800+ freelancers', color: 'bg-blue-100 text-blue-800' },
    { name: 'Content Writing', count: '1,200+ freelancers', color: 'bg-green-100 text-green-800' },
    { name: 'Digital Marketing', count: '900+ freelancers', color: 'bg-orange-100 text-orange-800' },
    { name: 'Video Editing', count: '750+ freelancers', color: 'bg-red-100 text-red-800' },
    { name: 'SEO Services', count: '600+ freelancers', color: 'bg-indigo-100 text-indigo-800' },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Startup Founder',
      content: 'Skyline Agency helped me find the perfect designer for my brand. The reviews were spot-on!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      name: 'Michael Chen',
      role: 'E-commerce Owner',
      content: 'The detailed reviews saved me hours of research. Found an amazing developer in minutes.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Manager',
      content: 'Best platform for finding reliable freelancers. The community reviews are incredibly helpful.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-skyline section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-skyline-900 mb-6">
                Find & Review
                <span className="text-gradient block">Top Freelancers</span>
              </h1>
              <p className="text-xl text-skyline-600 mb-8 max-w-2xl mx-auto">
                Discover verified freelancers from Fiverr and Upwork through authentic reviews. 
                Make informed decisions and build your dream team with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/search" className="btn-primary text-lg px-8 py-3">
                  <Search className="inline mr-2" size={20} />
                  Find Freelancers
                </Link>
                <Link to="/write-review" className="btn-outline text-lg px-8 py-3">
                  Write a Review
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-skyline-900 mb-4">
              Why Choose Skyline Agency?
            </h2>
            <p className="text-xl text-skyline-600 max-w-2xl mx-auto">
              We've built the most comprehensive platform for freelancer discovery and reviews
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-skyline-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-skyline-600">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-skyline-900 mb-4">
              Popular Categories
            </h2>
            <p className="text-xl text-skyline-600">
              Explore freelancers across various skill categories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-skyline-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-skyline-600">{category.count}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
                    Popular
                  </div>
                </div>
                <ArrowRight className="mt-4 text-skyline-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all duration-200" size={20} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/search" className="btn-primary">
              View All Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-skyline section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-skyline-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-skyline-600">
              Join thousands of satisfied clients who found their perfect freelancers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-skyline-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-skyline-900">
                      {testimonial.name}
                    </div>
                    <div className="text-skyline-600 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 section-padding">
        <div className="container-max">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Perfect Freelancer?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join our community today and discover top-rated freelancers with verified reviews
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Get Started Free
              </Link>
              <Link to="/search" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-all duration-200">
                Browse Freelancers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home