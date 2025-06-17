import React, { useState } from 'react';
import { Smartphone, Plus } from 'lucide-react';

const RechargeForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPrice, setShowPrice] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber && amount && termsAccepted) {
      // Handle form submission
      console.log('Form submitted:', { phoneNumber, amount });
    }
  };

  const handleFieldChange = () => {
    if (phoneNumber && amount) {
      setShowPrice(true);
    } else {
      setShowPrice(false);
    }
  };

  return (
    <div className="relative">
      {/* Phone Mockup */}
      <div className="w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
        <div className="w-full h-full bg-white rounded-[2.5rem] relative overflow-hidden">
          {/* Screen Content */}
          <div className="p-6 h-full flex flex-col">
            {/* Status Bar */}
            <div className="flex justify-center mb-2">
              <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
            </div>

            {/* Header */}
            <div className="flex items-center justify-center mb-8 mt-4">
              <Smartphone className="text-indigo-600 mr-2" size={24} />
              <h3 className="text-xl font-bold text-gray-800">Mobile Recharge</h3>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
              {/* Phone Number Input */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Enter number
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    handleFieldChange();
                  }}
                  placeholder="Enter your phone number"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Amount Input */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Put your amount
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    handleFieldChange();
                  }}
                  placeholder="0"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Terms Checkbox */}
              <div className="mb-6">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    className="mt-1 w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <span className="text-sm text-gray-600">
                    Accept{' '}
                    <a href="#" className="text-indigo-600 hover:underline">
                      terms and conditions
                    </a>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!phoneNumber || !amount || !termsAccepted}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                  phoneNumber && amount && termsAccepted
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Quick Recharge
              </button>

              {/* Load More Numbers */}
              <button
                type="button"
                className="mt-4 text-red-500 hover:text-red-600 font-medium transition-colors duration-200"
              >
                Load more numbers
              </button>

              {/* Price Info */}
              {showPrice && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center text-blue-700 text-sm">
                    <div className="w-4 h-4 bg-blue-500 rounded-full mr-2 flex items-center justify-center">
                      <span className="text-white text-xs">i</span>
                    </div>
                    Price will appear once all fields are filled.
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RechargeForm;