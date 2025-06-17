import React, { useState } from 'react';

const OperatorCharging = () => {
  const [selectedOperator, setSelectedOperator] = useState<string | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);

  const operators = [
    {
      name: 'Telekom Charging',
      color: 'pink',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-300',
      textColor: 'text-pink-600',
      hoverColor: 'hover:bg-pink-100',
      selectedColor: 'bg-pink-500 text-white border-pink-500'
    },
    {
      name: 'Orange Charging',
      color: 'orange',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-300',
      textColor: 'text-orange-600',
      hoverColor: 'hover:bg-orange-100',
      selectedColor: 'bg-orange-500 text-white border-orange-500'
    },
    {
      name: 'Vodafone Charging',
      color: 'red',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-300',
      textColor: 'text-red-600',
      hoverColor: 'hover:bg-red-100',
      selectedColor: 'bg-red-500 text-white border-red-500'
    }
  ];

  const amounts = [
    '3 Euro', '4 Euro', '5 Euro', '6 Euro', '7 Euro',
    '8 Euro', '9 Euro', '10 Euro', '12 Euro', '15 Euro',
    '20 Euro', '25 Euro', '30 Euro', '35 Euro', '40 Euro',
    '50 Euro', '60 Euro', '75 Euro', '100 Euro', 'Over'
  ];

  const handleOperatorSelect = (operatorName: string) => {
    setSelectedOperator(operatorName);
    setSelectedAmount(null); // Reset amount selection when operator changes
  };

  const handleAmountSelect = (amount: string) => {
    setSelectedAmount(amount);
  };

  return (
    <section className="px-4 md:px-8 py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-16">
          Choose Your Operator & Amount
        </h2>

        {/* Operator Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {operators.map((operator, index) => (
            <div
              key={index}
              className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                selectedOperator === operator.name ? 'scale-105' : ''
              }`}
              onClick={() => handleOperatorSelect(operator.name)}
            >
              <div className={`p-8 rounded-2xl border-2 text-center ${
                selectedOperator === operator.name 
                  ? operator.selectedColor 
                  : `${operator.bgColor} ${operator.borderColor} ${operator.hoverColor}`
              }`}>
                <h3 className={`text-2xl font-bold mb-4 ${
                  selectedOperator === operator.name ? 'text-white' : operator.textColor
                }`}>
                  {operator.name}
                </h3>
                <div className={`w-16 h-16 mx-auto rounded-full border-4 ${
                  selectedOperator === operator.name 
                    ? 'border-white' 
                    : operator.borderColor
                } flex items-center justify-center`}>
                  <div className={`w-8 h-8 rounded-full ${
                    selectedOperator === operator.name 
                      ? 'bg-white' 
                      : operator.color === 'pink' ? 'bg-pink-500' :
                        operator.color === 'orange' ? 'bg-orange-500' : 'bg-red-500'
                  }`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Amount Selection */}
        {selectedOperator && (
          <div className="animate-fadeIn">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
              Select Amount for {selectedOperator}
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {amounts.map((amount, index) => {
                const currentOperator = operators.find(op => op.name === selectedOperator);
                const isSpecial = amount === '100 Euro' || amount === 'Over';
                
                return (
                  <button
                    key={index}
                    onClick={() => handleAmountSelect(amount)}
                    className={`p-4 rounded-full border-2 font-semibold transition-all duration-200 transform hover:scale-105 ${
                      selectedAmount === amount
                        ? currentOperator?.selectedColor
                        : `${currentOperator?.bgColor} ${currentOperator?.borderColor} ${currentOperator?.textColor} ${currentOperator?.hoverColor}`
                    } ${
                      isSpecial ? 'ring-2 ring-offset-2 ring-current' : ''
                    }`}
                  >
                    {amount}
                  </button>
                );
              })}
            </div>

            {/* Proceed Button */}
            {selectedAmount && (
              <div className="text-center mt-12 animate-fadeIn">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  Proceed with {selectedAmount} - {selectedOperator}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default OperatorCharging;