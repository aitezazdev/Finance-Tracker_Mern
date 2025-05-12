import React from "react";
import { FaWallet, FaChartPie, FaSyncAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen text-gray-800">
      <section className="h-[90vh] pt-20 flex flex-col justify-center items-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 text-center">
          <div className="mb-10 md:mb-0 w-full">
            <h1 className="text-4xl md:text-6xl mb-10 font-bold leading-tight">
              Track Your Expenses <br /> Like Never Before
            </h1>
            <p className="mt-6 text-xl max-w-2xl mx-auto">
              Stay on top of your finances with smart, easy-to-use features for
              tracking and budgeting.
            </p>
            <div className="mt-10 flex justify-center">
              {!user ? (
                <Link
                  to="/register"
                  className="bg-[#fd1d28] text-white font-semibold px-6 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Get Started Free
                </Link>
              ) : (
                <Link
                  to="/dashboard"
                  className="bg-cyan-500 text-white font-semibold px-6 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Dashboard
                </Link>
              )}

            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your all-in-one personal finance tool with clear, smart features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaWallet className="text-indigo-600" />,
                title: "Smart Budgeting",
                desc: "Plan your spending with monthly category budgets and stay alert with instant updates.",
              },
              {
                icon: <FaChartPie className="text-indigo-600" />,
                title: "Visual Reports",
                desc: "See your money flow clearly with pie charts, bars, and savings graphs that make sense.",
              },
              {
                icon: <FaSyncAlt className="text-indigo-600" />,
                title: "Auto Tracking",
                desc: "Handle recurring income or bills with automatic schedules that save you time.",
              },
            ].map(({ icon, title, desc }, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 border border-gray-100">
                <div className="text-4xl mb-6 p-4 bg-gray-50 rounded-full inline-block group-hover:bg-indigo-50 transition-all duration-300">
                  {icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              How It Works – Simple & Effective
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start saving more in just three easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Create Account",
                desc: "Sign up and choose your currency, language, and theme — get started in seconds.",
                color: "from-indigo-500 to-indigo-700",
              },
              {
                step: "02",
                title: "Add Transactions",
                desc: "Add income and expenses manually or set them to auto-repeat for bills or salary.",
                color: "from-purple-500 to-purple-700",
              },
              {
                step: "03",
                title: "See Reports",
                desc: "Check dashboard, budget usage, and charts — know where your money goes easily.",
                color: "from-blue-500 to-blue-700",
              },
            ].map(({ step, title, desc, color }) => (
              <div key={step} className="relative">
                <div
                  className={`absolute top-0 left-0 w-16 h-16 rounded-full bg-gradient-to-r ${color} flex items-center justify-center text-white text-xl font-bold`}>
                  {step}
                </div>
                <div className="pt-24 pb-8 px-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Loved by Thousands</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what real users say about using our expense tracker
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "This app completely changed how I manage my money. I saved over $3,000 in six months!",
                author: "Sarah J.",
                role: "Marketing Executive",
              },
              {
                quote:
                  "The reports make it so easy to understand where my money is going. Budgeting finally works.",
                author: "Michael T.",
                role: "Software Engineer",
              },
              {
                quote:
                  "I’ve tried many finance apps, but this one is different. The UI is simple and powerful.",
                author: "Lisa R.",
                role: "Small Business Owner",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-md transition">
                <div className="text-indigo-600 text-4xl font-serif mb-4">
                  "
                </div>
                <p className="italic text-gray-700 mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
