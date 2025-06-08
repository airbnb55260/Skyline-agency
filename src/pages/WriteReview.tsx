import React, { useState } from 'react'
import { Star, Upload, X, Search } from 'lucide-react'
import { motion } from 'framer-motion'

const WriteReview = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    freelancerName: '',
    freelancerProfile: '',
    platform: '',
    category: '',
    projectTitle: '',
    projectDescription: '',
    rating: 0,
    reviewTitle: '',
    reviewContent: '',
    workQuality: 0,
    communication: 0,
    timeliness: 0,
    value: 0,
    wouldRecommend: '',
    attachments: [] as File[],
  })

  const platforms = [
    { value: 'fiverr', label: 'Fiverr' },
    { value: 'upwork', label: 'Upwork' },
    { value: 'freelancer', label: 'Freelancer.com' },
    { value: 'other', label: 'Other' },
  ]

  const categories = [
    'Graphic Design',
    'Web Development',
    'Content Writing',
    'Digital Marketing',
    'Video Editing',
    'SEO Services',
    'Mobile Apps',
    'Data Entry',
    'Translation',
    'Other',
  ]

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleRatingClick = (field: string, rating: number) => {
    handleInputChange(field, rating)
  }

  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      const newFiles = Array.from(files)
      handleInputChange('attachments', [...formData.attachments, ...newFiles])
    }
  }

  const removeAttachment = (index: number) => {
    const newAttachments = formData.attachments.filter((_, i) => i !== index)
    handleInputChange('attachments', newAttachments)
  }

  const renderStars = (rating: number, field: string, size = 24) => {
    return [...Array(5)].map((_, i) => (
      <button
        key={i}
        type="button"
        onClick={() => handleRatingClick(field, i + 1)}
        className="focus:outline-none transition-colors"
      >
        <Star
          size={size}
          className={`${
            i < rating
              ? 'text-yellow-400 fill-current'
              : 'text-gray-300 hover:text-yellow-300'
          }`}
        />
      </button>
    ))
  }

  const nextStep = () => {
    if (step < 3) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Review submitted:', formData)
  }

  return (
    <div className="bg-gray-50 min-h-screen section-padding">
      <div className="container-max max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-skyline-900 mb-4">
            Write a Review
          </h1>
          <p className="text-xl text-skyline-600">
            Share your experience and help others find great freelancers
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= stepNumber
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div
                    className={`w-16 h-1 mx-2 ${
                      step > stepNumber ? 'bg-primary-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-8 text-sm text-skyline-600">
            <span className={step >= 1 ? 'text-primary-600 font-medium' : ''}>
              Freelancer Info
            </span>
            <span className={step >= 2 ? 'text-primary-600 font-medium' : ''}>
              Project Details
            </span>
            <span className={step >= 3 ? 'text-primary-600 font-medium' : ''}>
              Your Review
            </span>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Freelancer Information */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-semibold text-skyline-900 mb-6">
                  Freelancer Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-skyline-700 mb-2">
                      Freelancer Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.freelancerName}
                      onChange={(e) => handleInputChange('freelancerName', e.target.value)}
                      className="input-field"
                      placeholder="Enter freelancer's name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-skyline-700 mb-2">
                      Platform *
                    </label>
                    <select
                      required
                      value={formData.platform}
                      onChange={(e) => handleInputChange('platform', e.target.value)}
                      className="input-field"
                    >
                      <option value="">Select platform</option>
                      {platforms.map((platform) => (
                        <option key={platform.value} value={platform.value}>
                          {platform.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-skyline-700 mb-2">
                    Freelancer Profile URL
                  </label>
                  <input
                    type="url"
                    value={formData.freelancerProfile}
                    onChange={(e) => handleInputChange('freelancerProfile', e.target.value)}
                    className="input-field"
                    placeholder="https://fiverr.com/username or https://upwork.com/freelancers/username"
                  />
                  <p className="text-sm text-skyline-500 mt-1">
                    Optional: Link to their profile for verification
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-skyline-700 mb-2">
                    Service Category *
                  </label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="input-field"
                  >
                    <option value="">Select category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-primary"
                    disabled={!formData.freelancerName || !formData.platform || !formData.category}
                  >
                    Next Step
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Project Details */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-semibold text-skyline-900 mb-6">
                  Project Details
                </h2>

                <div>
                  <label className="block text-sm font-medium text-skyline-700 mb-2">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.projectTitle}
                    onChange={(e) => handleInputChange('projectTitle', e.target.value)}
                    className="input-field"
                    placeholder="Brief title of the project you worked on"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-skyline-700 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.projectDescription}
                    onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                    className="input-field"
                    placeholder="Describe the project scope, requirements, and what was delivered"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-skyline-700 mb-4">
                    Overall Rating *
                  </label>
                  <div className="flex items-center space-x-2">
                    {renderStars(formData.rating, 'rating', 32)}
                    <span className="ml-4 text-lg font-medium text-skyline-700">
                      {formData.rating > 0 ? `${formData.rating}/5` : 'Select rating'}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-secondary"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-primary"
                    disabled={!formData.projectTitle || !formData.projectDescription || formData.rating === 0}
                  >
                    Next Step
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Detailed Review */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-semibold text-skyline-900 mb-6">
                  Your Review
                </h2>

                <div>
                  <label className="block text-sm font-medium text-skyline-700 mb-2">
                    Review Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.reviewTitle}
                    onChange={(e) => handleInputChange('reviewTitle', e.target.value)}
                    className="input-field"
                    placeholder="Summarize your experience in one line"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-skyline-700 mb-2">
                    Detailed Review *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.reviewContent}
                    onChange={(e) => handleInputChange('reviewContent', e.target.value)}
                    className="input-field"
                    placeholder="Share your detailed experience working with this freelancer. What went well? What could be improved? Would you work with them again?"
                  />
                  <p className="text-sm text-skyline-500 mt-1">
                    Minimum 100 characters. Be honest and constructive.
                  </p>
                </div>

                {/* Detailed Ratings */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-skyline-700 mb-2">
                      Work Quality
                    </label>
                    <div className="flex items-center space-x-2">
                      {renderStars(formData.workQuality, 'workQuality')}
                      <span className="text-sm text-skyline-600">
                        {formData.workQuality}/5
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-skyline-700 mb-2">
                      Communication
                    </label>
                    <div className="flex items-center space-x-2">
                      {renderStars(formData.communication, 'communication')}
                      <span className="text-sm text-skyline-600">
                        {formData.communication}/5
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-skyline-700 mb-2">
                      Timeliness
                    </label>
                    <div className="flex items-center space-x-2">
                      {renderStars(formData.timeliness, 'timeliness')}
                      <span className="text-sm text-skyline-600">
                        {formData.timeliness}/5
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-skyline-700 mb-2">
                      Value for Money
                    </label>
                    <div className="flex items-center space-x-2">
                      {renderStars(formData.value, 'value')}
                      <span className="text-sm text-skyline-600">
                        {formData.value}/5
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-skyline-700 mb-2">
                    Would you recommend this freelancer? *
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="recommend"
                        value="yes"
                        checked={formData.wouldRecommend === 'yes'}
                        onChange={(e) => handleInputChange('wouldRecommend', e.target.value)}
                        className="mr-2"
                      />
                      Yes, definitely
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="recommend"
                        value="maybe"
                        checked={formData.wouldRecommend === 'maybe'}
                        onChange={(e) => handleInputChange('wouldRecommend', e.target.value)}
                        className="mr-2"
                      />
                      Maybe
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="recommend"
                        value="no"
                        checked={formData.wouldRecommend === 'no'}
                        onChange={(e) => handleInputChange('wouldRecommend', e.target.value)}
                        className="mr-2"
                      />
                      No
                    </label>
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-skyline-700 mb-2">
                    Attachments (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-600 mb-2">
                      Upload screenshots, project files, or other relevant documents
                    </p>
                    <input
                      type="file"
                      multiple
                      accept="image/*,.pdf,.doc,.docx"
                      onChange={(e) => handleFileUpload(e.target.files)}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="btn-outline cursor-pointer"
                    >
                      Choose Files
                    </label>
                    <p className="text-xs text-gray-500 mt-2">
                      Max 5 files, 10MB each. Supported: JPG, PNG, PDF, DOC
                    </p>
                  </div>

                  {/* Uploaded Files */}
                  {formData.attachments.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {formData.attachments.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <span className="text-sm text-skyline-700">
                            {file.name}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeAttachment(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-secondary"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={
                      !formData.reviewTitle ||
                      !formData.reviewContent ||
                      !formData.wouldRecommend ||
                      formData.reviewContent.length < 100
                    }
                  >
                    Submit Review
                  </button>
                </div>
              </motion.div>
            )}
          </form>
        </div>

        {/* Guidelines */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-3">Review Guidelines</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Be honest and constructive in your feedback</li>
            <li>• Focus on the work quality and professional experience</li>
            <li>• Avoid personal attacks or inappropriate language</li>
            <li>• Include specific details about the project and outcomes</li>
            <li>• All reviews are moderated before publication</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WriteReview