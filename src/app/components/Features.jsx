import { Zap, Shield, Headphones, Rocket } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Fast & Reliable",
      description: "Lightning-fast solutions with 99.9% uptime guarantee",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Secure & Safe",
      description: "Enterprise-grade security with advanced encryption",
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance",
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Scalable Solutions",
      description: "Solutions that grow with your business needs",
    },
  ]

  return (
    <section id="solutions" className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose TopTech?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We deliver exceptional value through innovative technology solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white bg-opacity-10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:bg-opacity-20 transition-all">
                <div className="text-white">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-blue-100 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}