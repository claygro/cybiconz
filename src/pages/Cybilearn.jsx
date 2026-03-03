import cybiLearn from "../static/Cybilearn.static";
import { Link } from "react-router-dom";
const CybiLearn = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Empowering Students with <br /> Real Digital Skills
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-8">
          Moving beyond theory. Learn practical development by building
          real-world projects used by CybiconZ.
        </p>

        <Link
          to="##"
          className="bg-[#00FF8E] px-8 py-3 rounded-lg font-bold text-green-900 inline-block"
        >
          Apply Now
        </Link>
      </div>

      <h2 className="text-3xl font-bold mb-12">How it Works</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {cybiLearn.map((item, idx) => (
          <div key={idx} className="border-l-2 border-[#00FF8E]  pl-6 py-4">
            <span className="text-[#00FF8E]  font-mono text-lg">
              {item.step}
            </span>
            <h3 className="text-xl font-bold mt-2">{item.title}</h3>
            <p className="text-[#00FF8E]  mt-2 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CybiLearn;
