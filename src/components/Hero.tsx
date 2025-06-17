import React from 'react';
import Logo from './Logo';
import RechargeForm from './RechargeForm';
import PaymentMethods from './PaymentMethods';

const Hero = () => {
  return (
    <section className="px-4 md:px-8 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <Logo />
            
            <div className="mt-12 space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Recharge your PrePay card
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90">
                Recharge your card online.
              </h2>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-white/80">
                Instantly, without an account.
              </h3>
            </div>

            <PaymentMethods />
          </div>

          {/* Right Content - Mobile Form */}
          <div className="flex justify-center lg:justify-end">
            <RechargeForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;