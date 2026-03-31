import React from "react";
import { Check } from "lucide-react";

const PricingTable = () => {
  return (
    <div>
        <div className="text-center">
                <h1 className="text-5xl font-bold mt-[120px] mb-[16px]">
                   Simple, Transparent Pricing
                </h1>
                <p className="text-[#627382] font-semibold mb-[16px]">
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>
        
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Starter Plan */}
        <div className="bg-[#F2F2F2] p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col h-full">
          <h3 className="text-2xl font-bold text-gray-900">Starter</h3>
          <p className="text-gray-500 mt-2 text-sm">
            Perfect for getting started
          </p>
          <div className="mt-6 flex items-baseline">
            <span className="text-5xl font-extrabold text-gray-900">$0</span>
            <span className="text-gray-500 ml-1">/Month</span>
          </div>

          <ul className="mt-8 space-y-4 flex-grow text-gray-600">
            <li className="flex items-center gap-3">
              <Check className="text-green-500 w-5 h-5" />
              <span>Access to 10 free tools</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="text-green-500 w-5 h-5" />
              <span>Basic templates</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="text-green-500 w-5 h-5" />
              <span>Community support</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="text-green-500 w-5 h-5" />
              <span>1 project per month</span>
            </li>
          </ul>

          <button className="mt-10 w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white py-4 rounded-2xl font-bold  shadow-lg">
            Get Started Free
          </button>
        </div>

        {/* Pro Plan (Highlighted) */}
        <div className="relative bg-[#8B2CFF] p-8 rounded-3xl shadow-2xl flex flex-col h-full transform md:scale-105 z-10 text-white">
          <div className="absolute -top-4 ml-21 bg-[#FEF3C6] text-[#BB4D00] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">
            Most Popular
          </div>

          <h3 className="text-2xl font-bold">Pro</h3>
          <p className="text-purple-100 mt-2 text-sm">Best for professionals</p>
          <div className="mt-6 flex items-baseline">
            <span className="text-5xl font-extrabold">$29</span>
            <span className="text-purple-100 ml-1">/Month</span>
          </div>

          <ul className="mt-8 space-y-4 flex-grow">
            {[
              "Access to all premium tools",
              "Unlimited templates",
              "Priority support",
              "Unlimited projects",
              "Cloud sync",
              "Advanced analytics",
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <Check className="text-white w-5 h-5" /> <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button className="mt-10 w-full bg-white text-[#8B2CFF] py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all shadow-xl">
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-[#F2F2F2] p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col h-full">
          <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
          <p className="text-gray-500 mt-2 text-sm">For teams and businesses</p>
          <div className="mt-6 flex items-baseline">
            <span className="text-5xl font-extrabold text-gray-900">$99</span>
            <span className="text-gray-500 ml-1">/Month</span>
          </div>

          <ul className="mt-8 space-y-4 flex-grow text-gray-600">
            {[
              "Everything in Pro",
              "Team collaboration",
              "Custom integrations",
              "Dedicated support",
              "SLA guarantee",
              "Custom branding",
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <Check className="text-green-500 w-5 h-5" />{" "}
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button className="mt-10 w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white py-4 rounded-2xl font-bold  shadow-lg ">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PricingTable;
