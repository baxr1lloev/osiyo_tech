'use client';

import { ArrowRight, BarChart, Play } from "lucide-react";
import AreaChart from "./AreaChart";
import { motion } from "framer-motion";
import Counter from './Counter';
export default function Hero() {
  return (
    <section
      id="home"
      className="pt-20 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                IT Solutions for
                <span className="text-blue-600"> Modern Business</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your business with cutting-edge technology solutions.
                We provide comprehensive IT consulting, development, and support
                services to drive your success.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2.0, ease: "easeOut" }}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-semibold"
              >
                Get Started
                <ArrowRight size={20} />
              </motion.button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center justify-center gap-2 font-semibold">
                <Play size={20} />
                Watch Demo
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">
                  <Counter targetNumber={500} suffix="+" />
                </div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">
                  <Counter targetNumber={98} suffix="%" />
                </div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white w-full h-[500px] rounded-2xl shadow-2xl p-8">
              <AreaChart />
            </div>

            <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-sm">Uptime</div>
            </div>
            {/* <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Support</div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
