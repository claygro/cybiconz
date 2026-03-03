const Community = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">The CybiconZ Community</h1>
        <p className="text-gray-400 text-lg mb-12 leading-relaxed">
          We are more than a company; we are a network. Our community members
          are trained through CybiLearn and integrated into real-world client
          projects, allowing them to gain experience and build portfolios.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-[#0A1128] p-8 rounded-xl border border-white/5">
            <h3 className="text-[#00FF8E] font-bold mb-2">For Developers</h3>
            <p className="text-sm text-gray-400">
              Join a network of young innovators, get project opportunities, and
              earn while you learn.
            </p>
          </div>
          <div className="bg-[#0A1128] p-8 rounded-xl border border-white/5">
            <h3 className="text-[#00FF8E] font-bold mb-2">For Clients</h3>
            <p className="text-sm text-gray-400">
              Access a pool of fresh talent overseen by our senior technical
              directors for high-quality results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Community;
