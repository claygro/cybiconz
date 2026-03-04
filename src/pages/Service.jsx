import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import allServices from "../static/service";
const Services = () => {
  return (
    <section className="py-24 bg-[#050A18] px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Expertise that <span className="text-[#00FF8E]">scales</span> your
            business.
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            We don't just build tools; we build the digital infrastructure your
            company needs to thrive in the modern economy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((service, index) => (
            <div
              key={index}
              className="group bg-[#0A1128] border border-white/5 p-8 rounded-2xl hover:border-teal-500/40 hover:bg-[#0c1531] transition-all duration-300"
            >
              <div className="text-[#00FF8E] mb-6 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                {service.desc}
              </p>

              <Link
                to={service.link}
                className="inline-flex items-center text-sm font-semibold text-[#00FF8E] group-hover:text-teal-300 transition-colors"
              >
                Learn More{" "}
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          ))}

          {/* Special CTA Card */}
          <div className="bg-gradient-to-br from-teal-600 to-blue-700 p-8 rounded-2xl flex flex-col justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Ready to start a custom project?
              </h3>
              <p className="text-white/80 text-sm mb-6">
                Let’s discuss your specific requirements and build something
                legendary.
              </p>
            </div>
            <Link
              to="/contact"
              className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
