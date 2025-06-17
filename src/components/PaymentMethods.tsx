import React from 'react';
import { CreditCard } from 'lucide-react';

const PaymentMethods = () => {
  return (
    <div className="mt-8 flex items-center space-x-4">
      {/* Visa */}
      <div className="bg-white rounded-lg px-4 py-2 flex items-center justify-center min-w-[60px] h-10">
        <span className="text-blue-700 font-bold text-lg">VISA</span>
      </div>
      
      {/* MasterCard */}
      <div className="bg-white rounded-lg px-4 py-2 flex items-center justify-center min-w-[60px] h-10">
        <div className="flex space-x-1">
          <div className="w-4 h-4 bg-red-500 rounded-full opacity-80"></div>
          <div className="w-4 h-4 bg-yellow-500 rounded-full opacity-80 -ml-2"></div>
        </div>
      </div>
      
      {/* Maestro */}
      <div className="bg-white rounded-lg px-4 py-2 flex items-center justify-center min-w-[60px] h-10">
        <div className="flex space-x-1">
          <div className="w-4 h-4 bg-blue-600 rounded-full opacity-80"></div>
          <div className="w-4 h-4 bg-red-500 rounded-full opacity-80 -ml-2"></div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;