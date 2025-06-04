import { CheckCircle, Users, Award, Clock } from "lucide-react"
import Counter from "./Counter"

export default function About() {
  const features = [
    "Expert team with 10+ years experience",
    "Proven track record of successful projects",
    "24/7 customer support and maintenance",
    "Cutting-edge technology solutions",
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">About TopTech Solutions</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                With over a decade of experience in the IT industry, TopTech Solutions has been at the forefront of
                digital transformation. We help businesses leverage technology to achieve their goals and stay
                competitive in today's fast-paced market.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Our team of certified professionals brings expertise across various domains including software
                development, cloud computing, cybersecurity, and digital consulting.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <Users className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  <Counter whileInView={{ opacity: 1 }} targetNumber={50} suffix="+" />
                </div>
                <div className="text-gray-600 dark:text-gray-300">Team Members</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  <Counter whileInView={{ opacity: 1 }} targetNumber={15} suffix="+" />
                </div>
                <div className="text-gray-600 dark:text-gray-300">Awards Won</div>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  <Counter whileInView={{ opacity: 1 }} targetNumber={10} suffix="+" />
                </div>
                <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/placeholder.svg?height=500&width=600"
              alt="About TopTech"
              className="w-full h-auto rounded-2xl shadow-lg dark:shadow-gray-900/50"
            />
            <div className="absolute inset-0 bg-blue-600 dark:bg-blue-700 bg-opacity-10 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
