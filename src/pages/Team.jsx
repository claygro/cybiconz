import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import teamMembers from "../static/teamMembers";

const Team = () => {
  return (
    <section className="py-24 bg-[#050A18] px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Meet the <span style={{ color: "#00FF8E" }}>Minds</span> behind
            CybiconZ
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collective of passionate innovators, creators, and engineers
            dedicated to building the future of technology in Nepal.
          </p>
        </div>

        {/* Team Grid */}
        {/* FIX 1: Add 'items-stretch' to the grid to ensure all cards have equal height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-[#0A1128] border border-white/5 rounded-2xl overflow-hidden hover:border-[#00FF8E]/30 transition-all duration-300 group flex flex-col"
            >
              {/* Photo */}
              <div className="aspect-square overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              {/* FIX 3: Add 'flex flex-col flex-grow' to the content area */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p
                  style={{ color: "#00FF8E" }}
                  className="text-sm font-medium mb-4 uppercase tracking-wider"
                >
                  {member.role}
                </p>
                {/* FIX 4: Add 'flex-grow' to the bio to push down subsequent elements */}
                <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                  {member.bio}
                </p>

                {/* Skills Tags */}
                {/* FIX 5: Use min-h to ensure the skills section takes up consistent space even with fewer tags */}
                <div className="flex flex-wrap gap-2 mb-6 min-h-[50px] items-start">
                  {member.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-[10px] px-2 py-1 bg-white/5 text-gray-300 rounded border border-white/10 uppercase font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                {/* FIX 6: Add 'mt-auto' to lock this section to the bottom of the content area */}
                <div className="flex space-x-4 border-t border-white/5 pt-4 mt-auto">
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-[#00FF8E] transition"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-[#00FF8E] transition"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-[#00FF8E] transition"
                  >
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ... CTA section remains the same ... */}
        <div className="mt-20 p-10 rounded-3xl bg-[#0A1128] border border-white/5 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to join our mission?</h2>
          <p className="text-gray-400 mb-8">
            We are always looking for talented developers through the CybiLearn
            Community.
          </p>
          <button
            style={{ backgroundColor: "#00FF8E" }}
            className="text-[#050A18] px-8 py-3 rounded-full font-bold hover:brightness-110 transition"
          >
            Join the Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
