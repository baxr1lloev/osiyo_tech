"use client"
import { Linkedin, Twitter, Github } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

export default function TeamSwiper() {
  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Mike Davis",
      role: "Lead Developer",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Emily Chen",
      role: "UI/UX Designer",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Alex Rodriguez",
      role: "DevOps Engineer",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Lisa Wang",
      role: "Product Manager",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
  ]

  return (
    <section id="department" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Department</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced professionals are dedicated to delivering exceptional results
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 1600,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="team-swiper"
          >
            {team.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="text-center group h-full pb-12">
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                      <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={member.social.linkedin}
                          className="text-white hover:text-blue-200 transform hover:scale-110 transition-transform"
                        >
                          <Linkedin size={24} />
                        </a>
                        <a
                          href={member.social.twitter}
                          className="text-white hover:text-blue-200 transform hover:scale-110 transition-transform"
                        >
                          <Twitter size={24} />
                        </a>
                        <a
                          href={member.social.github}
                          className="text-white hover:text-blue-200 transform hover:scale-110 transition-transform"
                        >
                          <Github size={24} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* <div className="flex items-center justify-center mt-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              <span>Auto-playing every 2.5 seconds</span>
            </div>
          </div> */}

        </div>
      </div>

      <style jsx global>{`
        .team-swiper .swiper-pagination {
          position: relative !important;
          margin-top: 2rem;
        }
        .team-swiper .swiper-pagination-bullet {
          background-color: #d1d5db;
          opacity: 0.5;
          width: 12px;
          height: 12px;
        }
        .team-swiper .swiper-pagination-bullet-active {
          background-color: #1e40af;
          opacity: 1;
        }
        .team-swiper .swiper-slide {
          height: auto;
        }
      `}</style>
    </section>
  )
}
