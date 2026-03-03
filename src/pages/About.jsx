import React from "react";
import { Target, Eye, Rocket, Shield } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 bg-[#050A18] px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="mb-16">
          <h2 className="text-[#00FF8E] font-semibold tracking-widest uppercase text-sm mb-4">
            About the Company
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold leading-tight">
            Redefining the Digital <br className="hidden md:block" /> Landscape
            of Nepal.
          </h3>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Who We Are */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white">
              <Users className="text-teal-500" size={24} />
              <h4 className="text-xl font-bold tracking-tight">Who We Are</h4>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* What We Do */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white">
              <Rocket className="text-teal-500" size={24} />
              <h4 className="text-xl font-bold tracking-tight">What We Do</h4>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Why We Exist */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white">
              <Shield className="text-teal-500" size={24} />
              <h4 className="text-xl font-bold tracking-tight">Why We Exist</h4>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* 5-Year Vision */}
          <div className="space-y-4 bg-teal-500/5 p-8 rounded-2xl border border-teal-500/10">
            <div className="flex items-center gap-3 text-teal-400">
              <Target size={24} />
              <h4 className="text-xl font-bold tracking-tight">
                Our 5-Year Vision
              </h4>
            </div>
            <p className="text-gray-300 leading-relaxed italic">
              "By 2031, CybiconZ aims to be the primary engine for Nepal's
              digital transformation. Our roadmap involves scaling our internal
              platforms—CybiLearn and ShoppingGhar—into household names while
              establishing a borderless community of developers ready to compete
              in the global technology market."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simple icon imports for the component
const Users = ({ className, size }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default About;
