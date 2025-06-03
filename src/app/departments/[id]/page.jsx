"use client"

import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Calendar, User, Clock, Mail, Linkedin, Github, ArrowRight } from "lucide-react"
import { useState } from "react"

const getDepartmentData = (id) => {
  const departments = {
    "industrial-automation": {
      name: "Industrial Automation",
      description:
        "Our Industrial Automation department specializes in developing cutting-edge automation solutions for manufacturing and industrial processes. We focus on creating intelligent systems that enhance productivity, reduce costs, and improve safety across various industrial sectors.",
      color: "from-blue-500 to-blue-700",
      icon: "🏭",
      members: [
        {
          name: "Rashid Uzhakhov",
          role: "Department Head",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
          email: "rashid.uzhakhov@osiyotech.com",
          linkedin: "#",
          github: "#",
          bio: "Leading expert in industrial automation with over 15 years of experience in manufacturing systems and process optimization.",
        },
        {
          name: "Vladislav Rudenko",
          role: "Senior Automation Engineer",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
          email: "vladislav.rudenko@osiyotech.com",
          linkedin: "#",
          github: "#",
          bio: "Specialized in PLC programming, SCADA systems, and industrial IoT implementations for smart manufacturing.",
        },
      ],
      news: [
        {
          id: 7,
          slug: "plc-integration-system-manufacturing",
          title: "Revolutionary PLC Integration System Deployed at Manufacturing Plant",
          excerpt:
            "Our team successfully implemented an advanced PLC integration system that increased production efficiency by 35%.",
          date: "2024-01-20",
          author: "Rashid Uzhakhov",
          readTime: "4 min read",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop",
        },
        {
          id: 8,
          slug: "iot-sensors-smart-factory",
          title: "Smart Factory Initiative: IoT Sensors Transform Production Line",
          excerpt:
            "Implementation of IoT sensors and real-time monitoring systems revolutionizes traditional manufacturing processes.",
          date: "2024-01-15",
          author: "Vladislav Rudenko",
          readTime: "3 min read",
          image: "https://unsplash.com/photos/young-caucasian-supervisor-evaluating-quality-of-food-in-food-plant-while-holding-tablet-man-is-dressed-in-white-uniform-and-having-hair-net-iakQH4EN7hQ?w=600&h=300&fit=crop"
        },
        {
          id: 14,
          slug: "automated-quality-control-system",
          title: "Automated Quality Control System Reduces Defects by 60%",
          excerpt:
            "Our latest automated quality control implementation demonstrates significant improvements in product quality and consistency.",
          date: "2024-01-10",
          author: "Rashid Uzhakhov",
          readTime: "5 min read",
          image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=300&fit=crop",
        },
      ],
    },
    "industrial-digitalization": {
      name: "Industrial Digitalization",
      description:
        "The Industrial Digitalization department leads digital transformation initiatives for modern industrial enterprises. We help companies transition from traditional operations to smart, connected, and data-driven industrial ecosystems.",
      color: "from-purple-500 to-purple-700",
      icon: "💻",
      members: [
        {
          name: "Kirillov Vladimir",
          role: "Digital Transformation Lead",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
          email: "vladimir.kirillov@osiyotech.com",
          linkedin: "#",
          github: "#",
          bio: "Digital transformation expert with extensive experience in Industry 4.0 implementations and smart manufacturing solutions.",
        },
        {
          name: "Azarov Yuri",
          role: "Digitalization Specialist",
          image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=300&h=300&fit=crop&crop=face",
          email: "yuri.azarov@osiyotech.com",
          linkedin: "#",
          github: "#",
          bio: "Specialist in digital twin technologies, predictive analytics, and industrial data integration platforms.",
        },
      ],
      news: [
        {
          id: 9,
          slug: "digital-twin-predictive-maintenance",
          title: "Digital Twin Technology Transforms Predictive Maintenance",
          excerpt:
            "Implementation of digital twin technology enables predictive maintenance strategies, reducing downtime by 40%.",
          date: "2024-01-18",
          author: "Kirillov Vladimir",
          readTime: "6 min read",
          image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=300&fit=crop",
        },
        {
          id: 4,
          slug: "digital-transformation-manufacturing-success-story",
          title: "Digital Transformation Success Story: Local Manufacturing Company",
          excerpt:
            "Discover how we helped a local manufacturing company increase efficiency by 40% through comprehensive digital transformation initiatives.",
          date: "2023-12-28",
          author: "Case Study Team",
          readTime: "4 min read",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop",
        },
        {
          id: 15,
          slug: "industry-4-roadmap-guide",
          title: "Industry 4.0 Roadmap: Complete Digital Transformation Guide",
          excerpt:
            "Comprehensive guide to implementing Industry 4.0 principles in traditional manufacturing environments.",
          date: "2024-01-12",
          author: "Azarov Yuri",
          readTime: "8 min read",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop",
        },
      ],
    },
    cybersecurity: {
      name: "Cybersecurity",
      description:
        "Our Cybersecurity department is dedicated to protecting digital assets and ensuring robust security across all systems. We implement comprehensive security strategies to safeguard industrial and enterprise environments from cyber threats.",
      color: "from-red-500 to-red-700",
      icon: "🔒",
      members: [
        {
          name: "Balniyazova Anargul",
          role: "Cybersecurity Director",
          image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
          email: "anargul.balniyazova@osiyotech.com",
          linkedin: "#",
          github: "#",
          bio: "Cybersecurity expert with deep knowledge in industrial security, threat assessment, and security architecture design.",
        },
        {
          name: "Tolibov Salad",
          role: "Security Analyst",
          image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face",
          email: "salad.tolibov@osiyotech.com",
          linkedin: "#",
          github: "#",
          bio: "Security analyst specializing in threat detection, incident response, and security monitoring systems.",
        },
      ],
      news: [
        {
          id: 10,
          slug: "advanced-threat-detection-system",
          title: "Advanced Threat Detection System Prevents Major Security Breach",
          excerpt:
            "Our AI-powered threat detection system successfully identified and prevented a sophisticated cyber attack targeting industrial systems.",
          date: "2024-01-22",
          author: "Balniyazova Anargul",
          readTime: "5 min read",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=300&fit=crop",
        },
        {
          id: 11,
          slug: "zero-trust-architecture-implementation",
          title: "Zero Trust Architecture Implementation in Industrial Networks",
          excerpt:
            "Complete implementation of zero trust security model enhances protection for critical industrial infrastructure.",
          date: "2024-01-16",
          author: "Tolibov Salad",
          readTime: "7 min read",
          image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=300&fit=crop",
        },
        {
          id: 3,
          slug: "cybersecurity-best-practices-small-businesses",
          title: "Cybersecurity Best Practices for Small Businesses",
          excerpt:
            "Learn essential cybersecurity measures that every small business should implement to protect their digital assets and customer data.",
          date: "2024-01-05",
          author: "Security Team",
          readTime: "5 min read",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=300&fit=crop",
        },
        {
          id: 16,
          slug: "industrial-cybersecurity-framework",
          title: "Comprehensive Industrial Cybersecurity Framework Implementation",
          excerpt:
            "New cybersecurity framework provides comprehensive protection for industrial control systems and operational technology.",
          date: "2024-01-08",
          author: "Balniyazova Anargul",
          readTime: "6 min read",
          image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=300&fit=crop",
        },
      ],
    },
    "products-data-analytics": {
      name: "Products and Data Analytics",
      description:
        "The Products and Data Analytics department drives data-driven decisions and develops innovative product solutions. We transform raw data into actionable insights that fuel business growth and product innovation.",
      color: "from-green-500 to-green-700",
      icon: "📊",
      members: [
        {
          name: "Arthur",
          role: "Head of Analytics",
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
          email: "arthur@osiyotech.com",
          linkedin: "#",
          github: "#",
          bio: "Data science expert with extensive experience in machine learning, predictive analytics, and product development strategies.",
        },
      ],
      news: [
        {
          id: 12,
          slug: "machine-learning-product-recommendations",
          title: "Machine Learning Model Improves Product Recommendation by 45%",
          excerpt:
            "Advanced ML algorithms enhance customer experience through personalized product recommendations and predictive analytics.",
          date: "2024-01-19",
          author: "Arthur",
          readTime: "4 min read",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
        },
        {
          id: 1,
          slug: "osiyotech-launches-ai-powered-solutions",
          title: "OsiyoTech Launches New AI-Powered Solutions for Enterprise Clients",
          excerpt:
            "We're excited to announce our latest artificial intelligence solutions designed to streamline business operations and enhance productivity for our enterprise partners.",
          date: "2024-01-15",
          author: "Tech Team",
          readTime: "3 min read",
          image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=300&fit=crop",
        },
        {
          id: 5,
          slug: "technology-trends-2024",
          title: "Upcoming Technology Trends for 2024",
          excerpt:
            "Our experts share insights on the most important technology trends that will shape businesses in 2024 and beyond.",
          date: "2023-12-20",
          author: "Research Team",
          readTime: "6 min read",
          image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=300&fit=crop",
        },
        {
          id: 17,
          slug: "real-time-analytics-dashboard",
          title: "Real-time Analytics Dashboard Transforms Business Intelligence",
          excerpt:
            "New analytics dashboard provides real-time insights into business performance and customer behavior patterns.",
          date: "2024-01-14",
          author: "Arthur",
          readTime: "3 min read",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
        },
        {
          id: 18,
          slug: "predictive-analytics-customer-behavior",
          title: "Predictive Analytics Revolutionizes Customer Behavior Analysis",
          excerpt:
            "Advanced predictive models help businesses understand and anticipate customer needs with unprecedented accuracy.",
          date: "2024-01-11",
          author: "Arthur",
          readTime: "5 min read",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
        },
      ],
    },
    infrastructure: {
      name: "Infrastructure",
      description:
        "Our Infrastructure department builds and maintains robust IT infrastructure and cloud solutions. We ensure scalable, reliable, and secure infrastructure that supports all organizational operations and growth.",
      color: "from-indigo-500 to-indigo-700",
      icon: "🏗️",
      members: [
        {
          name: "Tolibov Salat",
          role: "Infrastructure Manager",
          image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face",
          email: "salat.tolibov@osiyotech.com",
          linkedin: "#",
          github: "#",
          bio: "Infrastructure expert with deep knowledge in cloud architecture, DevOps practices, and scalable system design.",
        },
        {
          name: "Azarov Yuri",
          role: "Cloud Architect",
          image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=300&h=300&fit=crop&crop=face",
          email: "yuri.azarov@osiyotech.com",
          linkedin: "#",
          github: "#",
          bio: "Cloud architect specializing in multi-cloud strategies, containerization, and infrastructure automation.",
        },
      ],
      news: [
        {
          id: 13,
          slug: "multi-cloud-infrastructure-cost-reduction",
          title: "Multi-Cloud Infrastructure Reduces Costs by 30%",
          excerpt:
            "Strategic multi-cloud implementation optimizes resource allocation and significantly reduces operational costs.",
          date: "2024-01-17",
          author: "Tolibov Salat",
          readTime: "5 min read",
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=300&fit=crop",
        },
        {
          id: 2,
          slug: "partnership-cloud-infrastructure-provider",
          title: "Partnership with Leading Cloud Infrastructure Provider",
          excerpt:
            "OsiyoTech has formed a strategic partnership to provide enhanced cloud services and infrastructure solutions to businesses across Uzbekistan.",
          date: "2024-01-10",
          author: "Business Development",
          readTime: "2 min read",
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=300&fit=crop",
        },
      ],
    },
  }

  return departments[id] || null
}

export default function DepartmentPage() {
  const params = useParams()
  const router = useRouter()
  const [selectedMember, setSelectedMember] = useState(null)

  const department = getDepartmentData(params.id)

  if (!department) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Department Not Found</h1>
          <button onClick={() => router.push("/#department")} className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Departments
          </button>
        </div>
      </div>
    )
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  const handleReadMore = (article) => {
    router.push(`/news/${article.slug}`)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.push("/#department")}
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Departments
          </button>
        </div>
      </header>

      <section className={`bg-gradient-to-r ${department.color} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">{department.icon}</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">{department.name}</h1>
              <p className="text-xl opacity-90">{department.description}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Team Members</h2>
            <div className="space-y-6">
              {department.members.map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 dark:text-white">{member.name}</h3>
                      <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-2">{member.role}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{member.bio}</p>

                      <div className="flex items-center gap-3">
                        <a
                          href={`mailto:${member.email}`}
                          className="text-gray-500 hover:text-blue-600 transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                        <a href={member.linkedin} className="text-gray-500 hover:text-blue-600 transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a href={member.github} className="text-gray-500 hover:text-blue-600 transition-colors">
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Latest Updates</h2>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {department.news.length} {department.news.length === 1 ? "update" : "updates"}
              </span>
            </div>

            <div className="space-y-6">
              {department.news.map((article) => (
                <article
                  key={article.id}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{article.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{article.excerpt}</p>

                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(article.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </div>
                      </div>

                      <button
                        onClick={() => handleReadMore(article)}
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
          </div>
        </div>
      </div>
    </div>
  )
}
