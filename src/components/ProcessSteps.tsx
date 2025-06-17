import React from 'react';
import { Smartphone, Euro, FileCheck, CreditCard } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    {
      icon: Smartphone,
      title: 'ENTER NUMBER',
      description: 'Enter your mobile phone number'
    },
    {
      icon: Euro,
      title: 'CHOOSE AMOUNT',
      description: 'Select the recharge amount'
    },
    {
      icon: FileCheck,
      title: 'CHECK THE DATA',
      description: 'Verify your information'
    },
    {
      icon: CreditCard,
      title: 'PAY',
      description: 'Complete secure payment'
    }
  ];

  return (
    <section className="px-4 md:px-8 py-16 md:py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16">
          Recharge your PrePay card now
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Icon Container */}
              <div className="relative mb-6 flex justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="text-white" size={40} />
                </div>
                
                {/* Connection Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 md:top-16 left-full w-full h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-30"></div>
                )}
              </div>
              
              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-wide">
                {step.title}
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Start Recharging Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;