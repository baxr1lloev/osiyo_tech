import { Linkedin, Twitter, Github } from 'lucide-react'

  

export default function Team() {

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

]

  

return (

<section id="team" className="py-20 bg-white">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center mb-16">

<h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>

<p className="text-xl text-gray-600 max-w-3xl mx-auto">

Our experienced professionals are dedicated to delivering exceptional results

</p>

</div>

  

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

{team.map((member, index) => (

<div key={index} className="text-center group">

<div className="relative mb-6 overflow-hidden rounded-xl">

<img

src={member.image || "/placeholder.svg"}

alt={member.name}

className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"

/>

<div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">

<div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

<a href={member.social.linkedin} className="text-white hover:text-blue-200">

<Linkedin size={24} />

</a>

<a href={member.social.twitter} className="text-white hover:text-blue-200">

<Twitter size={24} />

</a>

<a href={member.social.github} className="text-white hover:text-blue-200">

<Github size={24} />

</a>

</div>

</div>

</div>

<h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>

<p className="text-blue-600 font-medium">{member.role}</p>

</div>

))}

</div>

</div>

</section>

)

}