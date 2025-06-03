"use client"

import { Calendar, User, ArrowRight, Clock, Plane, CheckCircle, Filter, Building2 } from "lucide-react"
import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"

export default function News() {
  const router = useRouter()
  const allNewsArticles = [
    {
      id: 1,
      slug: "osiyotech-launches-ai-powered-solutions",
      title: "OsiyoTech Launches New AI-Powered Solutions for Enterprise Clients",
      excerpt:
        "We're excited to announce our latest artificial intelligence solutions designed to streamline business operations and enhance productivity for our enterprise partners.",
      content: `...`, 
      date: "2024-01-15",
      addedTime: "14:30",
      author: "Tech Team",
      category: "Product Launch",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
      tags: ["AI", "Enterprise", "Automation", "Technology"],
      department: "products-data-analytics",
      departmentName: "Products and Data Analytics",
    },
    {
      id: 2,
      slug: "partnership-cloud-infrastructure-provider",
      title: "Partnership with Leading Cloud Infrastructure Provider",
      excerpt:
        "OsiyoTech has formed a strategic partnership to provide enhanced cloud services and infrastructure solutions to businesses across Uzbekistan.",
      content: `...`, 
      date: "2024-01-10",
      addedTime: "09:15",
      author: "Business Development",
      category: "Partnership",
      readTime: "2 min read",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop",
      tags: ["Partnership", "Cloud", "Infrastructure", "Business"],
      department: "infrastructure",
      departmentName: "Infrastructure",
    },
    {
      id: 3,
      slug: "cybersecurity-best-practices-small-businesses",
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt:
        "Learn essential cybersecurity measures that every small business should implement to protect their digital assets and customer data.",
      content: `...`,
      date: "2024-01-05",
      addedTime: "16:45",
      author: "Security Team",
      category: "Education",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop",
      tags: ["Cybersecurity", "Small Business", "Security", "Best Practices"],
      department: "cybersecurity",
      departmentName: "Cybersecurity",
    },
    {
      id: 4,
      slug: "digital-transformation-manufacturing-success-story",
      title: "Digital Transformation Success Story: Local Manufacturing Company",
      excerpt:
        "Discover how we helped a local manufacturing company increase efficiency by 40% through comprehensive digital transformation initiatives.",
      content: `...`, 
      date: "2023-12-28",
      addedTime: "11:20",
      author: "Case Study Team",
      category: "Case Study",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
      tags: ["Digital Transformation", "Manufacturing", "Case Study", "Efficiency"],
      department: "industrial-digitalization",
      departmentName: "Industrial Digitalization",
    },
    {
      id: 5,
      slug: "technology-trends-2024",
      title: "Upcoming Technology Trends for 2024",
      excerpt:
        "Our experts share insights on the most important technology trends that will shape businesses in 2024 and beyond.",
      content: `...`, 
      date: "2023-12-20",
      addedTime: "13:00",
      author: "Research Team",
      category: "Insights",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=400&fit=crop",
      tags: ["Technology Trends", "2024", "Innovation", "Future"],
      department: "products-data-analytics",
      departmentName: "Products and Data Analytics",
    },
    {
      id: 6,
      slug: "team-expansion-welcoming-new-talent",
      title: "OsiyoTech Team Expansion: Welcoming New Talent",
      excerpt:
        "We're growing our team with talented professionals to better serve our clients and expand our service offerings.",
      content: `...`, 
      date: "2023-12-15",
      addedTime: "10:30",
      author: "HR Team",
      category: "Company News",
      readTime: "2 min read",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
      tags: ["Team", "Hiring", "Growth", "Company News"],
      department: "general",
      departmentName: "General",
    },
    {
      id: 7,
      slug: "plc-integration-system-manufacturing",
      title: "Revolutionary PLC Integration System Deployed at Manufacturing Plant",
      excerpt:
        "Our Industrial Automation team successfully implemented an advanced PLC integration system that increased production efficiency by 35%.",
      content: `...`,
      date: "2024-01-20",
      addedTime: "14:00",
      author: "Rashid Uzhakhov",
      category: "Case Study",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
      tags: ["PLC", "Automation", "Manufacturing", "Efficiency"],
      department: "industrial-automation",
      departmentName: "Industrial Automation",
    },
    {
      id: 8,
      slug: "iot-sensors-smart-factory",
      title: "Smart Factory Initiative: IoT Sensors Transform Production Line",
      excerpt:
        "Implementation of IoT sensors and real-time monitoring systems revolutionizes traditional manufacturing processes.",
      content: `...`,
      date: "2024-01-15",
      addedTime: "11:30",
      author: "Vladislav Rudenko",
      category: "Innovation",
      readTime: "3 min read",
      image: "https://unsplash.com/photos/young-caucasian-supervisor-evaluating-quality-of-food-in-food-plant-while-holding-tablet-man-is-dressed-in-white-uniform-and-having-hair-net-iakQH4EN7hQ?w=800&h=400&fit=crop",
      tags: ["IoT", "Smart Factory", "Sensors", "Monitoring"],
      department: "industrial-automation",
      departmentName: "Industrial Automation",
    },
    {
      id: 9,
      slug: "digital-twin-predictive-maintenance",
      title: "Digital Twin Technology Transforms Predictive Maintenance",
      excerpt:
        "Implementation of digital twin technology enables predictive maintenance strategies, reducing downtime by 40%.",
      content: `...`,
      date: "2024-01-18",
      addedTime: "09:45",
      author: "Kirillov Vladimir",
      category: "Technology",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop",
      tags: ["Digital Twin", "Predictive Maintenance", "Industry 4.0"],
      department: "industrial-digitalization",
      departmentName: "Industrial Digitalization",
    },
    {
      id: 10,
      slug: "advanced-threat-detection-system",
      title: "Advanced Threat Detection System Prevents Major Security Breach",
      excerpt:
        "Our AI-powered threat detection system successfully identified and prevented a sophisticated cyber attack targeting industrial systems.",
      content: `...`,
      date: "2024-01-22",
      addedTime: "15:20",
      author: "Balniyazova Anargul",
      category: "Security",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop",
      tags: ["Threat Detection", "AI Security", "Cyber Attack Prevention"],
      department: "cybersecurity",
      departmentName: "Cybersecurity",
    },
    {
      id: 11,
      slug: "zero-trust-architecture-implementation",
      title: "Zero Trust Architecture Implementation in Industrial Networks",
      excerpt:
        "Complete implementation of zero trust security model enhances protection for critical industrial infrastructure.",
      content: `...`,
      date: "2024-01-16",
      addedTime: "13:15",
      author: "Tolibov Salad",
      category: "Security",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
      tags: ["Zero Trust", "Network Security", "Industrial Infrastructure"],
      department: "cybersecurity",
      departmentName: "Cybersecurity",
    },
    {
      id: 12,
      slug: "machine-learning-product-recommendations",
      title: "Machine Learning Model Improves Product Recommendation by 45%",
      excerpt:
        "Advanced ML algorithms enhance customer experience through personalized product recommendations and predictive analytics.",
      content: `...`,
      date: "2024-01-19",
      addedTime: "10:00",
      author: "Arthur",
      category: "Analytics",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      tags: ["Machine Learning", "Product Recommendations", "Analytics"],
      department: "products-data-analytics",
      departmentName: "Products and Data Analytics",
    },
    {
      id: 13,
      slug: "multi-cloud-infrastructure-cost-reduction",
      title: "Multi-Cloud Infrastructure Reduces Costs by 30%",
      excerpt:
        "Strategic multi-cloud implementation optimizes resource allocation and significantly reduces operational costs.",
      content: `...`,
      date: "2024-01-17",
      addedTime: "14:45",
      author: "Tolibov Salat",
      category: "Infrastructure",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
      tags: ["Multi-Cloud", "Cost Optimization", "Infrastructure"],
      department: "infrastructure",
      departmentName: "Infrastructure",
    },
  ]

  const departments = [
    { id: "all", name: "All Departments", icon: "🏢", color: "bg-gray-100 text-gray-800" },
    { id: "general", name: "General", icon: "📰", color: "bg-gray-100 text-gray-800" },
    { id: "industrial-automation", name: "Industrial Automation", icon: "🏭", color: "bg-blue-100 text-blue-800" },
    {
      id: "industrial-digitalization",
      name: "Industrial Digitalization",
      icon: "💻",
      color: "bg-purple-100 text-purple-800",
    },
    { id: "cybersecurity", name: "Cybersecurity", icon: "🔒", color: "bg-red-100 text-red-800" },
    {
      id: "products-data-analytics",
      name: "Products & Data Analytics",
      icon: "📊",
      color: "bg-green-100 text-green-800",
    },
    { id: "infrastructure", name: "Infrastructure", icon: "🏗️", color: "bg-indigo-100 text-indigo-800" },
  ]

  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [visibleCount, setVisibleCount] = useState(8)
  const [isAnimating, setIsAnimating] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [showPlane, setShowPlane] = useState(false)
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false)
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 })
  const newsRef = useRef(null)
  const buttonRef = useRef(null)
  const filteredArticles =
    selectedDepartment === "all"
      ? allNewsArticles
      : allNewsArticles.filter((article) => article.department === selectedDepartment)

  const sortedArticles = [...filteredArticles].sort((a, b) => new Date(b.date) - new Date(a.date))
  const featuredArticle = sortedArticles[0]
  const newsArticles = sortedArticles.slice(1)

  const handleDepartmentFilter = (departmentId) => {
    setSelectedDepartment(departmentId)
    setVisibleCount(8) 
    setIsAnimating(true)

    setTimeout(() => {
      setIsAnimating(false)
    }, 300)

    if (newsRef.current) {
      newsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const loadMore = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setVisibleCount((prevCount) => Math.min(prevCount + 6, newsArticles.length))
      setIsAnimating(false)
    }, 150)
  }

  const showLess = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setVisibleCount(8)
      setIsAnimating(false)
      if (newsRef.current) {
        newsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }, 300)
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address")
      return
    }

    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setButtonPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      })
    }

    setIsSubscribing(true)
    setShowPlane(true)

    setTimeout(() => {
      setIsSubscribing(false)
      setSubscriptionSuccess(true)
      setEmail("")

      setTimeout(() => {
        setSubscriptionSuccess(false)
        setShowPlane(false)
      }, 3000)
    }, 2000)
  }

  const handleReadMore = (article, buttonElement) => {
    const buttonRect = buttonElement.getBoundingClientRect()
    const windowWidth = window.innerWidth
    const animatedButton = buttonElement.cloneNode(true)
    animatedButton.style.position = "fixed"
    animatedButton.style.top = buttonRect.top + "px"
    animatedButton.style.left = buttonRect.left + "px"
    animatedButton.style.width = buttonRect.width + "px"
    animatedButton.style.height = buttonRect.height + "px"
    animatedButton.style.zIndex = "9999"
    animatedButton.style.pointerEvents = "none"
    animatedButton.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
    buttonElement.style.opacity = "0"

    document.body.appendChild(animatedButton)

    setTimeout(() => {
      animatedButton.style.left = windowWidth - buttonRect.width - 20 + "px"
      animatedButton.style.transform = "scale(1.1) rotateY(10deg)"
      animatedButton.style.boxShadow = "0 20px 40px rgba(59, 130, 246, 0.3)"
    }, 50)

    setTimeout(() => {
      const overlay = document.createElement("div")
      overlay.innerHTML = `
      <div class="fixed inset-0 z-50 bg-white dark:bg-gray-900 transform translate-x-full transition-transform duration-700 ease-out">
        <div class="flex items-center justify-center h-full">
          <div class="text-center">
            <div class="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Opening Article...</h3>
            <p class="text-gray-600 dark:text-gray-300">${article.title}</p>
          </div>
        </div>
      </div>
    `
      document.body.appendChild(overlay)

      setTimeout(() => {
        const slideElement = overlay.querySelector("div")
        slideElement.style.transform = "translateX(0)"
      }, 50)

      setTimeout(() => {
        router.push(`/news/${article.slug}`)
        setTimeout(() => {
          if (document.body.contains(animatedButton)) {
            document.body.removeChild(animatedButton)
          }
          if (document.body.contains(overlay)) {
            document.body.removeChild(overlay)
          }
          buttonElement.style.opacity = "1"
        }, 100)
      }, 800)
    }, 400)
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":")
    const hour24 = Number.parseInt(hours)
    const hour12 = hour24 === 0 ? 12 : hour24 > 12 ? hour24 - 12 : hour24
    const ampm = hour24 >= 12 ? "PM" : "AM"
    return `${hour12}:${minutes} ${ampm}`
  }

  const getCategoryColor = (category) => {
    const colors = {
      "Product Launch": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      Partnership: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      Education: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      "Case Study": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      Insights: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
      "Company News": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
      Innovation: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
      Technology: "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200",
      Security: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      Analytics: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
      Infrastructure: "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200",
    }
    return colors[category] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
  }

  const planeVariants = {
    initial: {
      x: buttonPosition.x,
      y: buttonPosition.y,
      rotate: -15,
      scale: 1,
      opacity: 1,
    },
    flying: {
      x: [
        buttonPosition.x,
        buttonPosition.x + 200,
        buttonPosition.x + 600,
        buttonPosition.x + 1200,
        buttonPosition.x + 1800,
      ],
      y: [
        buttonPosition.y,
        buttonPosition.y - 100,
        buttonPosition.y - 250,
        buttonPosition.y - 400,
        buttonPosition.y - 500,
      ],
      rotate: [0, 15, 25, 35, 45],
      scale: [1, 1.2, 1.5, 1.8, 1.2],
      opacity: [1, 1, 1, 0.7, 0],
      transition: {
        duration: 3,
        ease: "easeOut",
        times: [0, 0.2, 0.4, 0.7, 1],
      },
    },
  }

  return (
    <section ref={newsRef} id="news" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Latest News & Updates</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay informed about our latest developments, industry insights, and department achievements
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filter by Department:</span>
          </div>

          <div className="flex flex-wrap gap-3">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => handleDepartmentFilter(dept.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedDepartment === dept.id
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : `${dept.color} hover:shadow-md hover:scale-105`
                }`}
              >
                <span>{dept.icon}</span>
                {dept.name}
                {
                  <span className="bg-white bg-opacity-20 px-2 py-0.5 rounded-full text-xs">
                    {dept.id === "all"
                      ? allNewsArticles.length
                      : allNewsArticles.filter((article) => article.department === dept.id).length}
                  </span>
                }
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between">
            <p className="text-gray-600 dark:text-gray-300">
              {selectedDepartment === "all"
                ? `Showing all ${filteredArticles.length} articles`
                : `Showing ${filteredArticles.length} articles from ${departments.find((d) => d.id === selectedDepartment)?.name}`}
            </p>
            {selectedDepartment !== "all" && (
              <button
                onClick={() => handleDepartmentFilter("all")}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
              >
                Clear Filter
              </button>
            )}
          </div>
        </div>

        {featuredArticle && (
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-block px-3 py-1 bg-white text-blue-600 rounded-full text-sm font-medium shadow-sm">
                      Featured Story
                    </span>
                    {featuredArticle.department && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-600 bg-opacity-20 rounded-full text-sm font-medium">
                        <Building2 className="w-3 h-3" />
                        {featuredArticle.departmentName}
                      </span>
                    )}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{featuredArticle.title}</h3>
                  <p className="text-lg opacity-90 mb-6">{featuredArticle.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm opacity-80 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(featuredArticle.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredArticle.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredArticle.readTime}
                    </div>
                  </div>
                  <div className="text-sm mb-6">
                    <span className="bg-white text-blue-600 px-3 py-2 rounded-full font-medium shadow-sm">
                      Added at {formatTime(featuredArticle.addedTime)} on {formatDate(featuredArticle.date)}
                    </span>
                  </div>
                  <button
                    onClick={(e) => handleReadMore(featuredArticle, e.target)}
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="relative">
                  <img
                    src={featuredArticle.image || "/placeholder.svg"}
                    alt={featuredArticle.title}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {newsArticles.length > 0 ? (
          <div
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${isAnimating ? "opacity-50" : "opacity-100"}`}
          >
            {newsArticles.slice(0, visibleCount).map((article, index) => (
              <article
                key={article.id}
                className={`bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                  index >= 6 ? "animate-fade-in" : ""
                }`}
                style={{
                  animationDelay: `${(index - 6) * 100}ms`,
                  opacity: isAnimating ? 0.5 : 1,
                  transform: isAnimating ? "translateY(10px)" : "translateY(0)",
                }}
              >
                <div className="relative">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}
                    >
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded-full text-xs">
                      {formatTime(article.addedTime)}
                    </span>
                  </div>
                  {article.department && (
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-white bg-opacity-90 rounded-full text-xs font-medium text-gray-700">
                        <Building2 className="w-3 h-3" />
                        {article.departmentName}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>

                  <div className="flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(article.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                      Added at {formatTime(article.addedTime)}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                      <User className="w-4 h-4" />
                      {article.author}
                    </div>
                    <button
                      onClick={(e) => handleReadMore(article, e.target)}
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <Building2 className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p>No articles available for the selected department.</p>
            </div>
            <button
              onClick={() => handleDepartmentFilter("all")}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              View all articles
            </button>
          </div>
        )}

        {newsArticles.length > 8 && (
          <div className="text-center mt-12">
            <button
              onClick={visibleCount < newsArticles.length ? loadMore : showLess}
              disabled={isAnimating}
              className={`bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                isAnimating ? "scale-95 opacity-75" : "scale-100 opacity-100"
              }`}
            >
              {isAnimating ? "Loading..." : visibleCount < newsArticles.length ? "Load More Articles" : "Show Less"}
            </button>
          </div>
        )}

        <div className="mt-20 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center relative overflow-hidden newsletter-container">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Stay Updated</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news, updates, and insights directly in your inbox.
          </p>

          {subscriptionSuccess ? (
            <motion.div
              initial={{ scale: 0.3, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center gap-4"
            >
              <CheckCircle className="w-16 h-16 text-green-500" />
              <div className="text-center">
                <h4 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">
                  🎉 Successfully Subscribed!
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Thank you for subscribing! You'll receive our latest updates soon.
                </p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={isSubscribing}
              />
              <button
                ref={buttonRef}
                type="submit"
                disabled={isSubscribing}
                className={`bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                  isSubscribing ? "scale-95 opacity-75" : "scale-100 opacity-100"
                }`}
              >
                {isSubscribing ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Subscribing...
                  </div>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      <AnimatePresence>
        {showPlane && (
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-50"
            variants={planeVariants}
            initial="initial"
            animate="flying"
            exit={{ opacity: 0 }}
          >
            <motion.div
              animate={{
                rotateY: [0, 5, -5, 0],
              }}
              transition={{
                duration: 0.3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Plane className="w-8 h-8 text-blue-600" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .article-slide-animation {
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
        }

        @keyframes slideInFromRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .slide-in-animation {
          animation: slideInFromRight 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  )
}