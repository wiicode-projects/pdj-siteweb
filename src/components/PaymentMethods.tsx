import React from 'react';
import twintLogo from '../assets/payments/twint.svg';
import visaLogo from '../assets/payments/visa.svg';
import mastercardLogo from '../assets/payments/mastercard.svg';
import bankTransferLogo from '../assets/payments/bank-transfer.svg';
import paypalLogo from '../assets/payments/paypal.svg';

const METHODS = [
  { id: 'twint', src: twintLogo, alt: 'TWINT', className: 'h-7' },
  { id: 'visa', src: visaLogo, alt: 'Visa', className: 'h-5' },
  { id: 'mastercard', src: mastercardLogo, alt: 'Mastercard', className: 'h-7' },
  { id: 'transfer', src: bankTransferLogo, alt: 'Virement bancaire', className: 'h-7' },
  { id: 'paypal', src: paypalLogo, alt: 'PayPal', className: 'h-5' },
] as const;

type PaymentMethodsProps = {
  title: string;
};

export function PaymentMethods({ title }: PaymentMethodsProps) {
  return (
    <div className="mt-10 text-center">
      <p className="mb-5 text-sm font-medium text-gray-600">{title}</p>
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
        {METHODS.map((method) => (
          <img
            key={method.id}
            src={method.src}
            alt={method.alt}
            className={`${method.className} w-auto max-w-[120px] object-contain opacity-90 transition-opacity hover:opacity-100`}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
    </div>
  );
}

export default PaymentMethods;
