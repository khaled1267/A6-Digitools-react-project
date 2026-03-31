import React, { use } from 'react';
import { IoCheckmarkSharp } from 'react-icons/io5';

const PricingSection = ({feturepro}) => {
  const plans  = use(feturepro);
  

  return (
    <section className="bg-[#F2F2F2] py-20 px-5 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 mb-12">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, id) => (
            <div 
              key={id} 
              className={`relative p-8 rounded-2xl text-left  ${
                plan.isPopular 
            ? 'bg-[#7C3AED] text-white shadow-2xl ' 
                : 'bg-white text-gray-800 border border-gray-200 shadow-sm'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 ml-24  bg-[#FEF3C7] text-[#D97706] text-xs font-bold px-4 py-1 rounded-full ">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className={`${plan.isPopular ? 'text-purple-100' : 'text-gray-500'} text-sm mb-6`}>
                {plan.description}
              </p>
              
              <div className="text-4xl font-bold mb-6">
                ${plan.price}
                <span className={`text-lg font-normal ${plan.isPopular ? 'text-purple-200' : 'text-gray-400'}`}>/Month</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, id) => (
                  <li key={id} className="flex items-center text-sm">
                    <span className="text-green-700"> <IoCheckmarkSharp /></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-bold transition-colors ${
                plan.isPopular 
                ? 'bg-white text-[#7C3AED] hover:bg-gray-100' 
                : 'bg-[#6366F1] text-white hover:bg-[#4F46E5]'
              }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;