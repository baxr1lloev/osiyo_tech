"use client"

import { useParams, useRouter } from "next/navigation"
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Share2,
  Bookmark,
  Tag,
  Building2,
  Users,
  Mail,
  Linkedin,
  Github,
} from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
const getDepartmentInfo = (departmentId) => {
  const departments = {
    "products-data-analytics": {
      name: "Products and Data Analytics",
      description: "Driving data-driven decisions and developing innovative product solutions",
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
        },
      ],
    },
    infrastructure: {
      name: "Infrastructure",
      description: "Building and maintaining robust IT infrastructure and cloud solutions",
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
        },
        {
          name: "Azarov Yuri",
          role: "Cloud Architect",
          image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=300&h=300&fit=crop&crop=face",
          email: "yuri.azarov@osiyotech.com",
          linkedin: "#",
          github: "#",
        },
      ],
    },
    cybersecurity: {
      name: "Cybersecurity",
      description: "Protecting digital assets and ensuring robust security across all systems",
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
        },
        {
          name: "Tolibov Salad",
          role: "Security Analyst",
          image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face",
          email: "salad.tolibov@osiyotech.com",
          linkedin: "#",
          github: "#",
        },
      ],
    },
    "industrial-digitalization": {
      name: "Industrial Digitalization",
      description: "Leading digital transformation initiatives for modern industrial enterprises",
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
        },
        {
          name: "Azarov Yuri",
          role: "Digitalization Specialist",
          image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=300&h=300&fit=crop&crop=face",
          email: "yuri.azarov@osiyotech.com",
          linkedin: "#",
          github: "#",
        },
      ],
    },
    "industrial-automation": {
      name: "Industrial Automation",
      description: "Developing cutting-edge automation solutions for manufacturing and industrial processes",
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
        },
        {
          name: "Vladislav Rudenko",
          role: "Senior Automation Engineer",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
          email: "vladislav.rudenko@osiyotech.com",
          linkedin: "#",
          github: "#",
        },
      ],
    },
  }
  return departments[departmentId] || null
}

const getArticleBySlug = (slug) => {
  const newsArticles = [
    {
      id: 1,
      slug: "osiyotech-launches-ai-powered-solutions",
      title: "OsiyoTech Launches New AI-Powered Solutions for Enterprise Clients",
      excerpt:
        "We're excited to announce our latest artificial intelligence solutions designed to streamline business operations and enhance productivity for our enterprise partners.",
      content: `
        <h2>Revolutionary AI Solutions for Modern Enterprises</h2>
        <p>OsiyoTech is proud to announce the launch of our groundbreaking AI-powered solutions designed specifically for enterprise clients. These cutting-edge tools represent a significant leap forward in business automation and intelligence.</p>
        
        <h3>Key Features</h3>
        <ul>
          <li><strong>Intelligent Process Automation:</strong> Streamline repetitive tasks with smart automation that learns and adapts to your business processes.</li>
          <li><strong>Predictive Analytics:</strong> Leverage machine learning algorithms to forecast trends and make data-driven decisions.</li>
          <li><strong>Natural Language Processing:</strong> Enable seamless communication between humans and systems through advanced NLP capabilities.</li>
          <li><strong>Real-time Insights:</strong> Get instant access to critical business metrics and performance indicators.</li>
        </ul>
        
        <h3>Benefits for Enterprise Clients</h3>
        <p>Our AI solutions offer numerous advantages for large-scale operations:</p>
        <ul>
          <li>Increased operational efficiency by up to 40%</li>
          <li>Reduced manual errors and improved accuracy</li>
          <li>Enhanced customer experience through personalized interactions</li>
          <li>Significant cost savings through process optimization</li>
        </ul>
        
        <h3>Implementation and Support</h3>
        <p>OsiyoTech provides comprehensive implementation support, including:</p>
        <ul>
          <li>Custom integration with existing systems</li>
          <li>Staff training and onboarding</li>
          <li>24/7 technical support</li>
          <li>Regular updates and maintenance</li>
        </ul>
        
        <p>Contact our enterprise solutions team today to learn how these AI-powered tools can transform your business operations.</p>
      `,
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
      content: `
        <h2>Strategic Partnership Announcement</h2>
        <p>We are thrilled to announce our strategic partnership with one of the world's leading cloud infrastructure providers. This collaboration will enable us to offer enhanced cloud services and infrastructure solutions to businesses across Uzbekistan and the broader Central Asian region.</p>
        
        <h3>Partnership Benefits</h3>
        <p>This partnership brings several key advantages to our clients:</p>
        <ul>
          <li><strong>Enhanced Reliability:</strong> Access to world-class infrastructure with 99.9% uptime guarantee</li>
          <li><strong>Scalability:</strong> Seamlessly scale resources up or down based on business needs</li>
          <li><strong>Security:</strong> Enterprise-grade security measures and compliance standards</li>
          <li><strong>Cost Efficiency:</strong> Optimized pricing models for businesses of all sizes</li>
        </ul>
        
        <h3>Service Offerings</h3>
        <p>Through this partnership, we now offer:</p>
        <ul>
          <li>Cloud migration services</li>
          <li>Hybrid cloud solutions</li>
          <li>Disaster recovery and backup services</li>
          <li>DevOps and CI/CD pipeline setup</li>
          <li>Cloud security and monitoring</li>
        </ul>
        
        <h3>Regional Impact</h3>
        <p>This partnership positions OsiyoTech as a leading cloud services provider in the region, enabling local businesses to compete on a global scale with access to world-class infrastructure and support.</p>
      `,
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
      content: `
        <h2>Essential Cybersecurity for Small Businesses</h2>
        <p>In today's digital landscape, cybersecurity is not just a concern for large corporations. Small businesses are increasingly becoming targets for cybercriminals. This comprehensive guide outlines essential cybersecurity measures every small business should implement.</p>
        
        <h3>Why Small Businesses Are Targets</h3>
        <p>Small businesses often lack the robust security infrastructure of larger companies, making them attractive targets for cybercriminals. Common reasons include:</p>
        <ul>
          <li>Limited cybersecurity budgets</li>
          <li>Lack of dedicated IT security staff</li>
          <li>Outdated software and systems</li>
          <li>Insufficient employee training</li>
        </ul>
        
        <h3>Essential Security Measures</h3>
        <h4>1. Strong Password Policies</h4>
        <ul>
          <li>Implement multi-factor authentication (MFA)</li>
          <li>Use password managers</li>
          <li>Regular password updates</li>
          <li>Avoid common passwords</li>
        </ul>
        
        <h4>2. Regular Software Updates</h4>
        <ul>
          <li>Keep operating systems updated</li>
          <li>Update all software applications</li>
          <li>Install security patches promptly</li>
          <li>Use automatic updates when possible</li>
        </ul>
        
        <h4>3. Employee Training</h4>
        <ul>
          <li>Phishing awareness training</li>
          <li>Social engineering recognition</li>
          <li>Safe browsing practices</li>
          <li>Incident reporting procedures</li>
        </ul>
        
        <h4>4. Data Backup and Recovery</h4>
        <ul>
          <li>Regular automated backups</li>
          <li>Test backup restoration</li>
          <li>Offsite backup storage</li>
          <li>Disaster recovery planning</li>
        </ul>
        
        <h3>Implementation Checklist</h3>
        <p>Use this checklist to assess your current cybersecurity posture:</p>
        <ul>
          <li>✓ Firewall and antivirus software installed</li>
          <li>✓ Regular security assessments conducted</li>
          <li>✓ Employee access controls implemented</li>
          <li>✓ Incident response plan documented</li>
          <li>✓ Cyber insurance policy in place</li>
        </ul>
      `,
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
      content: `
        <h2>Manufacturing Digital Transformation Case Study</h2>
        <p>This case study showcases how OsiyoTech successfully implemented a comprehensive digital transformation strategy for a local manufacturing company, resulting in significant operational improvements and cost savings.</p>
        
        <h3>Client Background</h3>
        <p>Our client, a mid-sized manufacturing company specializing in automotive parts, was facing several challenges:</p>
        <ul>
          <li>Manual inventory management leading to stockouts and overstock</li>
          <li>Paper-based quality control processes</li>
          <li>Lack of real-time production visibility</li>
          <li>Inefficient maintenance scheduling</li>
        </ul>
        
        <h3>Solution Implementation</h3>
        <h4>Phase 1: Assessment and Planning</h4>
        <ul>
          <li>Comprehensive workflow analysis</li>
          <li>Technology infrastructure evaluation</li>
          <li>Staff capability assessment</li>
          <li>ROI projections and timeline development</li>
        </ul>
        
        <h4>Phase 2: Core System Implementation</h4>
        <ul>
          <li>ERP system deployment</li>
          <li>IoT sensor installation on production lines</li>
          <li>Digital quality management system</li>
          <li>Predictive maintenance platform</li>
        </ul>
        
        <h4>Phase 3: Integration and Optimization</h4>
        <ul>
          <li>System integration and data synchronization</li>
          <li>Staff training and change management</li>
          <li>Process optimization and fine-tuning</li>
          <li>Performance monitoring and reporting</li>
        </ul>
        
        <h3>Results Achieved</h3>
        <p>The digital transformation initiative delivered impressive results:</p>
        <ul>
          <li><strong>40% increase in operational efficiency</strong></li>
          <li><strong>25% reduction in inventory costs</strong></li>
          <li><strong>60% decrease in quality control time</strong></li>
          <li><strong>30% improvement in on-time delivery</strong></li>
          <li><strong>50% reduction in unplanned downtime</strong></li>
        </ul>
        
        <h3>Key Success Factors</h3>
        <ul>
          <li>Strong leadership commitment</li>
          <li>Comprehensive staff training</li>
          <li>Phased implementation approach</li>
          <li>Continuous monitoring and optimization</li>
        </ul>
        
        <p>This success story demonstrates the transformative power of digital technologies when properly implemented with the right strategy and support.</p>
      `,
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
      content: `
        <h2>Technology Trends Shaping 2024</h2>
        <p>As we move through 2024, several technology trends are emerging that will significantly impact how businesses operate and compete. Our expert team has identified the most important trends to watch.</p>
        
        <h3>1. Artificial Intelligence Integration</h3>
        <p>AI is moving beyond experimental phases into practical business applications:</p>
        <ul>
          <li>Generative AI for content creation and customer service</li>
          <li>AI-powered decision making and analytics</li>
          <li>Automated code generation and testing</li>
          <li>Personalized user experiences at scale</li>
        </ul>
        
        <h3>2. Edge Computing Expansion</h3>
        <p>Processing data closer to its source is becoming critical:</p>
        <ul>
          <li>Reduced latency for real-time applications</li>
          <li>Enhanced data privacy and security</li>
          <li>Improved bandwidth efficiency</li>
          <li>Support for IoT and mobile applications</li>
        </ul>
        
        <h3>3. Quantum Computing Breakthroughs</h3>
        <p>While still emerging, quantum computing is showing practical applications:</p>
        <ul>
          <li>Cryptography and security applications</li>
          <li>Complex optimization problems</li>
          <li>Drug discovery and materials science</li>
          <li>Financial modeling and risk analysis</li>
        </ul>
        
        <h3>4. Sustainable Technology Focus</h3>
        <p>Environmental considerations are driving technology choices:</p>
        <ul>
          <li>Green cloud computing initiatives</li>
          <li>Energy-efficient data centers</li>
          <li>Sustainable software development practices</li>
          <li>Carbon footprint monitoring and reduction</li>
        </ul>
        
        <h3>5. Extended Reality (XR) Adoption</h3>
        <p>AR, VR, and MR technologies are finding business applications:</p>
        <ul>
          <li>Remote collaboration and training</li>
          <li>Product visualization and design</li>
          <li>Immersive customer experiences</li>
          <li>Industrial maintenance and support</li>
        </ul>
        
        <h3>Preparing for the Future</h3>
        <p>To stay competitive, businesses should:</p>
        <ul>
          <li>Invest in employee training and development</li>
          <li>Develop flexible technology architectures</li>
          <li>Foster innovation and experimentation</li>
          <li>Build strategic technology partnerships</li>
        </ul>
        
        <p>The key to success in 2024 will be balancing innovation with practical implementation, ensuring that new technologies deliver real business value.</p>
      `,
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
      content: `
        <h2>Growing Our Team for Greater Impact</h2>
        <p>We're excited to announce significant expansion of our team at OsiyoTech. As we continue to grow and serve more clients across Uzbekistan and beyond, we're welcoming talented professionals who share our vision of technological excellence.</p>
        
        <h3>New Team Members</h3>
        <p>We've recently welcomed several new team members across different departments:</p>
        
        <h4>Development Team</h4>
        <ul>
          <li>Senior Full-Stack Developers specializing in React and Node.js</li>
          <li>Mobile App Developers with expertise in React Native and Flutter</li>
          <li>DevOps Engineers focused on cloud infrastructure and automation</li>
        </ul>
        
        <h4>Design Team</h4>
        <ul>
          <li>UX/UI Designers with experience in enterprise applications</li>
          <li>Product Designers specializing in user research and testing</li>
          <li>Brand Designers for marketing and communication materials</li>
        </ul>
        
        <h4>Business Development</h4>
        <ul>
          <li>Account Managers for client relationship management</li>
          <li>Business Analysts for project planning and execution</li>
          <li>Marketing Specialists for digital marketing and content creation</li>
        </ul>
        
        <h3>Enhanced Service Offerings</h3>
        <p>With our expanded team, we're now able to offer:</p>
        <ul>
          <li>Faster project delivery times</li>
          <li>More specialized expertise in emerging technologies</li>
          <li>Enhanced customer support and service</li>
          <li>Expanded capacity for larger enterprise projects</li>
        </ul>
        
        <h3>Company Culture and Values</h3>
        <p>Our growth is guided by our core values:</p>
        <ul>
          <li><strong>Innovation:</strong> Embracing new technologies and creative solutions</li>
          <li><strong>Quality:</strong> Delivering excellence in every project</li>
          <li><strong>Collaboration:</strong> Working together to achieve common goals</li>
          <li><strong>Growth:</strong> Continuous learning and professional development</li>
        </ul>
        
        <h3>Looking Ahead</h3>
        <p>As we continue to grow, we remain committed to:</p>
        <ul>
          <li>Maintaining our high standards of service quality</li>
          <li>Investing in our team's professional development</li>
          <li>Expanding our technological capabilities</li>
          <li>Building long-term partnerships with our clients</li>
        </ul>
        
        <h3>Join Our Team</h3>
        <p>We're always looking for talented individuals to join our growing team. If you're passionate about technology and want to make a meaningful impact, we'd love to hear from you.</p>
        
        <p>Current open positions include roles in development, design, project management, and business development. Visit our careers page to learn more about opportunities at OsiyoTech.</p>
      `,
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
      content: `
        <h2>Revolutionary PLC Integration Success</h2>
        <p>OsiyoTech's Industrial Automation department has successfully deployed a state-of-the-art Programmable Logic Controller (PLC) integration system at a major manufacturing facility, resulting in unprecedented efficiency gains and operational improvements.</p>
        
        <h3>Project Overview</h3>
        <p>The project involved integrating multiple legacy systems with modern PLC technology to create a unified, intelligent manufacturing environment. Our team worked closely with the client to ensure minimal disruption during the transition period.</p>
        
        <h3>Key Achievements</h3>
        <ul>
          <li><strong>35% increase in production efficiency</strong></li>
          <li><strong>50% reduction in manual intervention</strong></li>
          <li><strong>Real-time monitoring and control capabilities</strong></li>
          <li><strong>Seamless integration with existing systems</strong></li>
        </ul>
        
        <h3>Technical Implementation</h3>
        <p>The solution included:</p>
        <ul>
          <li>Advanced SCADA system integration</li>
          <li>Real-time data acquisition and processing</li>
          <li>Automated quality control mechanisms</li>
          <li>Predictive maintenance algorithms</li>
          <li>Remote monitoring capabilities</li>
        </ul>
        
        <h3>Client Impact</h3>
        <p>The manufacturing plant now operates with significantly improved efficiency, reduced downtime, and enhanced product quality. The system provides comprehensive insights into production processes, enabling data-driven decision making.</p>
        
        <h3>Future Developments</h3>
        <p>Building on this success, we're exploring additional automation opportunities including AI-powered optimization and advanced robotics integration.</p>
      `,
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
      content: `
        <h2>Smart Factory Revolution</h2>
        <p>Our Industrial Automation team has successfully transformed a traditional production line into a smart factory using cutting-edge IoT sensor technology and real-time monitoring systems.</p>
        
        <h3>IoT Implementation Strategy</h3>
        <p>The project involved deploying hundreds of IoT sensors throughout the production facility to create a comprehensive monitoring network:</p>
        <ul>
          <li>Temperature and humidity sensors for environmental control</li>
          <li>Vibration sensors for equipment health monitoring</li>
          <li>Pressure sensors for process optimization</li>
          <li>Vision sensors for quality inspection</li>
          <li>Flow sensors for material tracking</li>
        </ul>
        
        <h3>Real-Time Monitoring Dashboard</h3>
        <p>We developed a comprehensive dashboard that provides:</p>
        <ul>
          <li>Live production metrics and KPIs</li>
          <li>Equipment status and health indicators</li>
          <li>Quality control alerts and notifications</li>
          <li>Energy consumption monitoring</li>
          <li>Predictive maintenance schedules</li>
        </ul>
        
        <h3>Results and Benefits</h3>
        <ul>
          <li><strong>40% reduction in unplanned downtime</strong></li>
          <li><strong>25% improvement in overall equipment effectiveness</strong></li>
          <li><strong>30% reduction in energy consumption</strong></li>
          <li><strong>Real-time visibility into all production processes</strong></li>
        </ul>
        
        <h3>Technology Stack</h3>
        <p>The solution leverages modern technologies including:</p>
        <ul>
          <li>Industrial IoT sensors and gateways</li>
          <li>Edge computing for real-time processing</li>
          <li>Cloud-based data analytics platform</li>
          <li>Machine learning algorithms for predictive insights</li>
          <li>Mobile applications for remote monitoring</li>
        </ul>
        
        <h3>Future Expansion</h3>
        <p>The success of this initiative has paved the way for expanding smart factory capabilities to other production lines and facilities.</p>
      `,
      date: "2024-01-15",
      addedTime: "11:30",
      author: "Vladislav Rudenko",
      category: "Innovation",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop",
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
      content: `
        <h2>Digital Twin Revolution in Maintenance</h2>
        <p>Our Industrial Digitalization team has successfully implemented digital twin technology to transform predictive maintenance strategies, delivering significant operational improvements and cost savings.</p>
        
        <h3>What is Digital Twin Technology?</h3>
        <p>A digital twin is a virtual replica of physical assets, processes, or systems that can be used for various purposes including monitoring, simulation, and optimization. Our implementation creates real-time digital representations of critical manufacturing equipment.</p>
        
        <h3>Implementation Process</h3>
        <h4>Phase 1: Asset Modeling</h4>
        <ul>
          <li>3D modeling of critical equipment</li>
          <li>Integration of sensor data streams</li>
          <li>Historical performance data analysis</li>
          <li>Failure pattern identification</li>
        </ul>
        
        <h4>Phase 2: Predictive Analytics</h4>
        <ul>
          <li>Machine learning model development</li>
          <li>Real-time anomaly detection</li>
          <li>Predictive failure algorithms</li>
          <li>Maintenance scheduling optimization</li>
        </ul>
        
        <h3>Key Benefits Achieved</h3>
        <ul>
          <li><strong>40% reduction in unplanned downtime</strong></li>
          <li><strong>30% decrease in maintenance costs</strong></li>
          <li><strong>50% improvement in maintenance planning accuracy</strong></li>
          <li><strong>Extended equipment lifespan</strong></li>
        </ul>
        
        <h3>Technology Components</h3>
        <ul>
          <li>IoT sensors for real-time data collection</li>
          <li>Cloud-based digital twin platform</li>
          <li>AI/ML algorithms for predictive analytics</li>
          <li>Augmented reality for maintenance guidance</li>
          <li>Mobile applications for field technicians</li>
        </ul>
        
        <h3>Future Applications</h3>
        <p>The success of this digital twin implementation opens opportunities for:</p>
        <ul>
          <li>Process optimization and simulation</li>
          <li>Product design and testing</li>
          <li>Supply chain optimization</li>
          <li>Energy efficiency improvements</li>
        </ul>
        
        <p>This project demonstrates the transformative power of digital twin technology in modern industrial operations.</p>
      `,
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
      content: `
        <h2>Advanced Threat Detection Success Story</h2>
        <p>OsiyoTech's Cybersecurity team successfully prevented a major security breach using our advanced AI-powered threat detection system, demonstrating the critical importance of proactive cybersecurity measures in industrial environments.</p>
        
        <h3>The Threat Landscape</h3>
        <p>Industrial systems face increasingly sophisticated cyber threats, including:</p>
        <ul>
          <li>Advanced Persistent Threats (APTs)</li>
          <li>Ransomware targeting operational technology</li>
          <li>Supply chain attacks</li>
          <li>Insider threats and social engineering</li>
        </ul>
        
        <h3>Our AI-Powered Solution</h3>
        <p>The threat detection system combines multiple advanced technologies:</p>
        <ul>
          <li><strong>Machine Learning Algorithms:</strong> Continuous learning from network behavior patterns</li>
          <li><strong>Behavioral Analytics:</strong> Identifying anomalous user and system activities</li>
          <li><strong>Real-time Monitoring:</strong> 24/7 surveillance of network traffic and system logs</li>
          <li><strong>Threat Intelligence:</strong> Integration with global threat intelligence feeds</li>
        </ul>
        
        <h3>The Incident</h3>
        <p>Our system detected and prevented a sophisticated attack that involved:</p>
        <ul>
          <li>Initial compromise through a spear-phishing email</li>
          <li>Lateral movement across network segments</li>
          <li>Attempted access to critical industrial control systems</li>
          <li>Data exfiltration attempts</li>
        </ul>
        
        <h3>Response and Mitigation</h3>
        <p>The automated response system immediately:</p>
        <ul>
          <li>Isolated affected network segments</li>
          <li>Blocked malicious IP addresses</li>
          <li>Alerted security personnel</li>
          <li>Initiated incident response procedures</li>
        </ul>
        
        <h3>Key Outcomes</h3>
        <ul>
          <li><strong>Zero data loss or system compromise</strong></li>
          <li><strong>Minimal operational disruption</strong></li>
          <li><strong>Complete threat neutralization within 15 minutes</strong></li>
          <li><strong>Enhanced security posture through lessons learned</strong></li>
        </ul>
        
        <h3>Lessons Learned</h3>
        <p>This incident reinforced the importance of:</p>
        <ul>
          <li>Proactive threat detection and response</li>
          <li>Employee cybersecurity training</li>
          <li>Regular security assessments</li>
          <li>Continuous system monitoring</li>
        </ul>
        
        <p>Our cybersecurity team continues to enhance our threat detection capabilities to stay ahead of evolving cyber threats.</p>
      `,
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
      content: `
        <h2>Zero Trust Architecture for Industrial Security</h2>
        <p>Our Cybersecurity team has successfully implemented a comprehensive Zero Trust Architecture across critical industrial networks, significantly enhancing security posture and protecting against modern cyber threats.</p>
        
        <h3>Understanding Zero Trust</h3>
        <p>Zero Trust is a security model based on the principle of "never trust, always verify." It assumes that threats can come from anywhere and requires verification for every user, device, and application attempting to access network resources.</p>
        
        <h3>Implementation Strategy</h3>
        <h4>Phase 1: Assessment and Planning</h4>
        <ul>
          <li>Comprehensive network asset inventory</li>
          <li>Risk assessment and threat modeling</li>
          <li>Current security posture evaluation</li>
          <li>Zero Trust roadmap development</li>
        </ul>
        
        <h4>Phase 2: Identity and Access Management</h4>
        <ul>
          <li>Multi-factor authentication deployment</li>
          <li>Privileged access management implementation</li>
          <li>Role-based access control configuration</li>
          <li>Identity governance and administration</li>
        </ul>
        
        <h4>Phase 3: Network Segmentation</h4>
        <ul>
          <li>Micro-segmentation of network zones</li>
          <li>Software-defined perimeter implementation</li>
          <li>East-west traffic inspection</li>
          <li>Dynamic policy enforcement</li>
        </ul>
        
        <h3>Key Components Deployed</h3>
        <ul>
          <li><strong>Identity Verification:</strong> Continuous authentication and authorization</li>
          <li><strong>Device Security:</strong> Endpoint detection and response (EDR)</li>
          <li><strong>Network Security:</strong> Software-defined networking and micro-segmentation</li>
          <li><strong>Data Protection:</strong> Encryption and data loss prevention</li>
          <li><strong>Application Security:</strong> Secure application access and monitoring</li>
        </ul>
        
        <h3>Security Improvements</h3>
        <ul>
          <li><strong>90% reduction in lateral movement capabilities</strong></li>
          <li><strong>Enhanced visibility into all network activities</strong></li>
          <li><strong>Improved compliance with security standards</strong></li>
          <li><strong>Faster threat detection and response times</strong></li>
        </ul>
        
        <h3>Industrial-Specific Considerations</h3>
        <p>Our implementation addressed unique industrial requirements:</p>
        <ul>
          <li>Operational technology (OT) network protection</li>
          <li>Legacy system integration challenges</li>
          <li>Real-time system performance requirements</li>
          <li>Safety system integrity maintenance</li>
        </ul>
        
        <h3>Ongoing Management</h3>
        <p>The Zero Trust implementation includes:</p>
        <ul>
          <li>Continuous monitoring and assessment</li>
          <li>Regular policy updates and refinements</li>
          <li>Security awareness training programs</li>
          <li>Incident response and recovery procedures</li>
        </ul>
        
        <p>This Zero Trust implementation represents a significant advancement in industrial cybersecurity, providing robust protection against evolving threats while maintaining operational efficiency.</p>
      `,
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
      content: `
        <h2>Machine Learning Transforms Product Recommendations</h2>
        <p>Our Products and Data Analytics team has developed and deployed an advanced machine learning model that has dramatically improved product recommendation accuracy, resulting in enhanced customer satisfaction and increased business value.</p>
        
        <h3>The Challenge</h3>
        <p>Traditional recommendation systems often struggle with:</p>
        <ul>
          <li>Cold start problems for new users and products</li>
          <li>Limited personalization capabilities</li>
          <li>Inability to adapt to changing user preferences</li>
          <li>Poor performance with sparse data</li>
        </ul>
        
        <h3>Our ML Solution</h3>
        <p>We developed a hybrid recommendation system combining multiple approaches:</p>
        <ul>
          <li><strong>Collaborative Filtering:</strong> User-item interaction analysis</li>
          <li><strong>Content-Based Filtering:</strong> Product feature similarity</li>
          <li><strong>Deep Learning:</strong> Neural networks for complex pattern recognition</li>
          <li><strong>Contextual Bandits:</strong> Real-time adaptation to user behavior</li>
        </ul>
        
        <h3>Technical Implementation</h3>
        <h4>Data Processing Pipeline</h4>
        <ul>
          <li>Real-time data ingestion from multiple sources</li>
          <li>Feature engineering and data preprocessing</li>
          <li>Model training and validation workflows</li>
          <li>A/B testing framework for model evaluation</li>
        </ul>
        
        <h4>Model Architecture</h4>
        <ul>
          <li>Ensemble of multiple recommendation algorithms</li>
          <li>Deep neural networks for embedding learning</li>
          <li>Reinforcement learning for optimization</li>
          <li>Real-time inference serving infrastructure</li>
        </ul>
        
        <h3>Key Results</h3>
        <ul>
          <li><strong>45% improvement in recommendation accuracy</strong></li>
          <li><strong>30% increase in click-through rates</strong></li>
          <li><strong>25% boost in conversion rates</strong></li>
          <li><strong>20% improvement in customer satisfaction scores</strong></li>
        </ul>
        
        <h3>Business Impact</h3>
        <p>The improved recommendation system has delivered significant business value:</p>
        <ul>
          <li>Increased revenue through better product discovery</li>
          <li>Enhanced customer engagement and retention</li>
          <li>Reduced customer acquisition costs</li>
          <li>Improved inventory turnover rates</li>
        </ul>
        
        <h3>Technology Stack</h3>
        <ul>
          <li><strong>Machine Learning:</strong> TensorFlow, PyTorch, Scikit-learn</li>
          <li><strong>Data Processing:</strong> Apache Spark, Kafka, Airflow</li>
          <li><strong>Infrastructure:</strong> Kubernetes, Docker, Cloud platforms</li>
          <li><strong>Monitoring:</strong> MLflow, Prometheus, Grafana</li>
        </ul>
        
        <h3>Future Enhancements</h3>
        <p>We're continuously improving the system with:</p>
        <ul>
          <li>Advanced natural language processing for product descriptions</li>
          <li>Computer vision for image-based recommendations</li>
          <li>Graph neural networks for complex relationship modeling</li>
          <li>Federated learning for privacy-preserving recommendations</li>
        </ul>
        
        <p>This project demonstrates the power of machine learning in creating personalized, engaging customer experiences that drive business growth.</p>
      `,
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
      content: `
        <h2>Multi-Cloud Strategy Delivers Significant Savings</h2>
        <p>Our Infrastructure team has successfully implemented a comprehensive multi-cloud strategy that has reduced operational costs by 30% while improving system reliability and performance across our client's enterprise infrastructure.</p>
        
        <h3>The Multi-Cloud Approach</h3>
        <p>Multi-cloud strategy involves using multiple cloud service providers to avoid vendor lock-in, optimize costs, and leverage best-of-breed services from different providers.</p>
        
        <h3>Implementation Strategy</h3>
        <h4>Phase 1: Assessment and Planning</h4>
        <ul>
          <li>Current infrastructure audit and cost analysis</li>
          <li>Workload categorization and requirements mapping</li>
          <li>Cloud provider evaluation and selection</li>
          <li>Migration roadmap and timeline development</li>
        </ul>
        
        <h4>Phase 2: Cloud Provider Selection</h4>
        <ul>
          <li><strong>AWS:</strong> Primary compute and storage workloads</li>
          <li><strong>Azure:</strong> Enterprise applications and Active Directory integration</li>
          <li><strong>Google Cloud:</strong> Data analytics and machine learning workloads</li>
          <li><strong>Hybrid:</strong> On-premises for sensitive data and legacy systems</li>
        </ul>
        
        <h3>Key Benefits Achieved</h3>
        <ul>
          <li><strong>30% reduction in overall infrastructure costs</strong></li>
          <li><strong>99.9% uptime across all services</strong></li>
          <li><strong>50% improvement in deployment speed</strong></li>
          <li><strong>Enhanced disaster recovery capabilities</strong></li>
        </ul>
        
        <h3>Cost Optimization Strategies</h3>
        <ul>
          <li><strong>Right-sizing:</strong> Matching resources to actual usage patterns</li>
          <li><strong>Reserved Instances:</strong> Long-term commitments for predictable workloads</li>
          <li><strong>Spot Instances:</strong> Cost-effective computing for flexible workloads</li>
          <li><strong>Auto-scaling:</strong> Dynamic resource allocation based on demand</li>
        </ul>
        
        <h3>Management and Orchestration</h3>
        <p>We implemented comprehensive tools for multi-cloud management:</p>
        <ul>
          <li><strong>Infrastructure as Code:</strong> Terraform for consistent deployments</li>
          <li><strong>Container Orchestration:</strong> Kubernetes for application portability</li>
          <li><strong>Monitoring and Logging:</strong> Centralized observability across clouds</li>
          <li><strong>Security Management:</strong> Unified security policies and compliance</li>
        </ul>
        
        <h3>Technical Challenges Overcome</h3>
        <ul>
          <li>Data synchronization across multiple clouds</li>
          <li>Network connectivity and latency optimization</li>
          <li>Security and compliance across different platforms</li>
          <li>Skills development for multi-cloud operations</li>
        </ul>
        
        <h3>Governance and Best Practices</h3>
        <p>We established comprehensive governance frameworks:</p>
        <ul>
          <li>Cloud cost management and optimization policies</li>
          <li>Security and compliance standards</li>
          <li>Performance monitoring and SLA management</li>
          <li>Change management and deployment procedures</li>
        </ul>
        
        <h3>Future Roadmap</h3>
        <p>Planned enhancements include:</p>
        <ul>
          <li>Advanced automation and AI-driven optimization</li>
          <li>Edge computing integration</li>
          <li>Serverless architecture adoption</li>
          <li>Enhanced data analytics and insights</li>
        </ul>
        
        <p>This multi-cloud implementation demonstrates how strategic cloud adoption can deliver significant cost savings while improving operational efficiency and system reliability.</p>
      `,
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

  return newsArticles.find((article) => article.slug === slug)
}

export default function ArticlePage() {
  const params = useParams()
  const router = useRouter()
  const [isBookmarked, setIsBookmarked] = useState(false)

  const article = getArticleBySlug(params.slug)
  const departmentInfo = article?.department ? getDepartmentInfo(article.department) : null

  const [isLoading, setIsLoading] = useState(true)

  useState(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center"
      >
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Loading Article...</h2>
          <p className="text-gray-600 dark:text-gray-300">Please wait while we prepare your content</p>
        </div>
      </motion.div>
    )
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Article Not Found</h1>
          <button onClick={() => router.push("/news")} className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to News
          </button>
        </div>
      </div>
    )
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

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        })
      } catch (err) {
        console.log("Error sharing:", err)
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked)
  }

  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.6,
      }}
      className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <article className="lg:col-span-3">
            <header className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium">
                  {article.category}
                </span>
                {article.department && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                    <Building2 className="w-3 h-3" />
                    {article.departmentName}
                  </span>
                )}
              </div>

              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">{article.title}</h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(article.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
                <div className="text-blue-600 dark:text-blue-400 font-medium">
                  Added at {formatTime(article.addedTime)}
                </div>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
                <button
                  onClick={toggleBookmark}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                    isBookmarked
                      ? "bg-yellow-50 border-yellow-200 text-yellow-700 dark:bg-yellow-900 dark:border-yellow-700 dark:text-yellow-300"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`} />
                  {isBookmarked ? "Bookmarked" : "Bookmark"}
                </button>
              </div>
            </header>

            <div className="mb-8">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-64 sm:h-80 object-cover rounded-xl"
              />
            </div>

            <div
              className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-white"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Interested in Our Services?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Contact us today to learn more about how OsiyoTech can help transform your business with cutting-edge
                technology solutions.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Get in Touch
              </button>
            </div>
          </article>

          <aside className="lg:col-span-1">
            {departmentInfo && (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
                <div className={`bg-gradient-to-r ${departmentInfo.color} p-4 rounded-lg text-white mb-4`}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{departmentInfo.icon}</span>
                    <div>
                      <h3 className="font-bold">{departmentInfo.name}</h3>
                      <p className="text-sm opacity-90">{departmentInfo.description}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Team Members</span>
                  </div>

                  {departmentInfo.members.map((member, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-white dark:bg-gray-700 rounded-lg">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 dark:text-white text-sm">{member.name}</p>
                        <p className="text-xs text-blue-600 dark:text-blue-400 mb-2">{member.role}</p>
                        <div className="flex items-center gap-2">
                          <a
                            href={`mailto:${member.email}`}
                            className="text-gray-400 hover:text-blue-600 transition-colors"
                          >
                            <Mail className="w-3 h-3" />
                          </a>
                          <a href={member.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                            <Linkedin className="w-3 h-3" />
                          </a>
                          <a href={member.github} className="text-gray-400 hover:text-blue-600 transition-colors">
                            <Github className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={() => router.push(`/departments/${article.department}`)}
                    className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    View Department Details
                  </button>
                </div>
              </div>
            )}

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">About the Author</h3>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {article.author.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{article.author}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {article.department ? `${article.departmentName} Team` : "OsiyoTech Team"}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Expert contributor sharing insights and updates from the {article.departmentName || "OsiyoTech"} team.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Article Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Published:</span>
                  <span className="text-gray-900 dark:text-white">{formatDate(article.date)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Reading Time:</span>
                  <span className="text-gray-900 dark:text-white">{article.readTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Category:</span>
                  <span className="text-gray-900 dark:text-white">{article.category}</span>
                </div>
                {article.department && (
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Department:</span>
                    <span className="text-gray-900 dark:text-white">{article.departmentName}</span>
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </motion.div>
  )
}