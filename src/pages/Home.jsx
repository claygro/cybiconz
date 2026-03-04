import {
  ArrowRight,
  Globe,
  Layout,
  ShieldCheck,
  Zap,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import platforms from "../static/Platforms";
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent -z-10" />
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-[1.1]">
            Building Digital Platforms <br />
            <span className="text-[#00FF8E]">for the Future</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            CybiconZ builds scalable digital solutions, from e-commerce systems
            to custom software, empowering businesses in Nepal and beyond.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/services"
              className="bg-white text-[#050A18] px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition"
            >
              View Our Work
            </Link>
            <Link
              to="/contact"
              className="border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/5 transition flex items-center justify-center"
            >
              Start a Project <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-[#070D1F]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Core Platforms
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-[#0A1128] border border-white/5 p-8 rounded-2xl hover:border-teal-500/30 transition"
              >
                <h3 className="text-2xl font-bold mb-3">{platform.title}</h3>
                <p className="text-gray-400 mb-6">{platform.description}</p>

                {platform.linkType === "internal" ? (
                  <Link
                    to={platform.link}
                    className="text-[#00FF8E] font-semibold flex items-center group"
                  >
                    {platform.linkText}
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={16}
                    />
                  </Link>
                ) : (
                  <a
                    href={platform.link}
                    className="text-[#00FF8E] font-semibold flex items-center group"
                  >
                    {platform.linkText}
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={16}
                    />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose CybiconZ</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <WhyCard
            icon={<Zap className="text-[#00FF8E]" />}
            title="Youth Innovation"
            desc="Driven by fresh ideas and the latest tech trends."
          />
          <WhyCard
            icon={<ShieldCheck className="text-[#00FF8E]" />}
            title="Scalable Systems"
            desc="Architecture that grows with your business needs."
          />
          <WhyCard
            icon={<Users className="text-[#00FF8E]" />}
            title="Fast Communication"
            desc="Dedicated support and transparent project updates."
          />
        </div>
      </section>
    </div>
  );
};

const WhyCard = ({ icon, title, desc }) => (
  <div className="text-center">
    <div className="bg-teal-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
      {icon}
    </div>
    <h4 className="text-xl font-bold mb-3">{title}</h4>
    <p className="text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

export default Home;
