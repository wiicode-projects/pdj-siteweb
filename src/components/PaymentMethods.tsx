import React from 'react';

const METHODS = [
  { id: 'visa', label: 'VISA', className: 'bg-[#1a1f71] text-white' },
  { id: 'mastercard', label: 'Mastercard', className: 'bg-[#111827] text-white' },
  { id: 'twint', label: 'TWINT', className: 'bg-black text-white font-bold tracking-wide' },
  { id: 'paypal', label: 'PayPal', className: 'bg-[#003087] text-white' },
  { id: 'transfer', label: 'Virement', className: 'bg-[#166534] text-white' },
] as const;

type PaymentMethodsProps = {
  title: string;
};

export function PaymentMethods({ title }: PaymentMethodsProps) {
  return (
    <div className="mt-10 text-center">
      <p className="mb-5 text-sm font-medium text-gray-600">{title}</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {METHODS.map((method) => (
          <div
            key={method.id}
            className={`flex h-11 min-w-[92px] items-center justify-center rounded-xl px-4 text-sm font-semibold shadow-sm ${method.className}`}
          >
            {method.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaymentMethods;
