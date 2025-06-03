// import TeamSwiper from "./team-swiper"

// export default function Department() {
//   return <TeamSwiper />
// }

"use client"

import { ChevronRight, Users, Calendar, ArrowRight, Newspaper } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Department() {
  const router = useRouter()
  const [hoveredDept, setHoveredDept] = useState(null)

  const departments = [
    {
      id: "industrial-automation",
      name: "Industrial Automation",
      description: "Developing cutting-edge automation solutions for manufacturing and industrial processes",
      members: [
        {
          name: "Rashid Uzhakhov",
          role: "Department Head",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
        },
        {
          name: "Vladislav Rudenko",
          role: "Senior Automation Engineer",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
        },
      ],
      newsCount: 3,
      color: "from-blue-500 to-blue-700",
      icon: "🏭",
    },
    {
      id: "industrial-digitalization",
      name: "Industrial Digitalization",
      description: "Leading digital transformation initiatives for modern industrial enterprises",
      members: [
        {
          name: "Kirillov Vladimir",
          role: "Digital Transformation Lead",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
        },
        {
          name: "Azarov Yuri",
          role: "Digitalization Specialist",
          image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=300&h=300&fit=crop&crop=face",
        },
      ],
      newsCount: 2,
      color: "from-purple-500 to-purple-700",
      icon: "💻",
    },
    {
      id: "cybersecurity",
      name: "Cybersecurity",
      description: "Protecting digital assets and ensuring robust security across all systems",
      members: [
        {
          name: "Balniyazova Anargul",
          role: "Cybersecurity Director",
          image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
        },
        {
          name: "Tolibov Salad",
          role: "Security Analyst",
          image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face",
        },
      ],
      newsCount: 4,
      color: "from-red-500 to-red-700",
      icon: "🔒",
    },
    {
      id: "products-data-analytics",
      name: "Products and Data Analytics",
      description: "Driving data-driven decisions and developing innovative product solutions",
      members: [
        {
          name: "Arthur",
          role: "Head of Analytics",
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
        },
      ],
      newsCount: 5,
      color: "from-green-500 to-green-700",
      icon: "📊",
    },
    {
      id: "infrastructure",
      name: "Infrastructure",
      description: "Building and maintaining robust IT infrastructure and cloud solutions",
      members: [
        {
          name: "Tolibov Salat",
          role: "Infrastructure Manager",
          image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face",
        },
        {
          name: "Azarov Yuri",
          role: "Cloud Architect",
          image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=300&h=300&fit=crop&crop=face",
        },
      ],
      newsCount: 1,
      color: "from-indigo-500 to-indigo-700",
      icon: "🏗️",
    },
  ]

  const handleDepartmentClick = (department) => {
    router.push(`/departments/${department.id}`)
  }

  const handleViewDepartmentNews = (department, e) => {
    e.stopPropagation() 
    router.push(`/#news`)

    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent("filterDepartmentNews", {
          detail: { departmentId: department.id },
        }),
      )
    }, 100)
  }

  return (
    <section id="department" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Departments</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Specialized teams working together to deliver innovative technology solutions across various domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((department, index) => (
            <div
              key={department.id}
              onMouseEnter={() => setHoveredDept(department.id)}
              onMouseLeave={() => setHoveredDept(null)}
              onClick={() => handleDepartmentClick(department)}
              className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                <div className={`bg-gradient-to-r ${department.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 text-6xl opacity-20 transform rotate-12">
                    {department.icon}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-2">{department.name}</h3>
                    <p className="text-sm opacity-90">{department.description}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Team Members</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    {department.members.map((member, memberIndex) => (
                      <div key={memberIndex} className="flex items-center gap-3">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600"
                        />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white text-sm">{member.name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {department.newsCount} recent {department.newsCount === 1 ? "update" : "updates"}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <button
                        onClick={(e) => handleViewDepartmentNews(department, e)}
                        className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                      >
                        <Newspaper className="w-4 h-4" />
                        View News
                      </button>

                      <div
                        className={`flex items-center gap-1 text-sm font-medium transition-all duration-300 ${
                          hoveredDept === department.id
                            ? "text-blue-600 dark:text-blue-400 transform translate-x-1"
                            : "text-gray-500 dark:text-gray-400"
                        }`}
                      >
                        View Details
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Want to Join Our Team?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for talented professionals to join our innovative departments. Explore career
              opportunities and be part of our mission to drive technological excellence.
            </p>
            <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              View Open Positions
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
