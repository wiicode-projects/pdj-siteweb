import type { LegalDocument } from '../types';

const ADMIN = '[mailto:admin@dgeconcept.ch|admin@dgeconcept.ch]';
const LEGAL_NOTICE = '[route:/mentions-legales|Legal Notice]';

export const privacyDoc: LegalDocument = {
  meta: {
    title: 'Privacy Policy',
    version: '',
    effectiveDate: 'June 2026',
    intro:
      'Protecting your personal data is a priority for [strong:Le Plat du Jour]. This policy explains which data we collect, why, how we use it, how long we retain it, and what your rights are. It complies with the General Data Protection Regulation (GDPR - EU 2016/679) and the Swiss Federal Act on Data Protection (nFADP).',
  },
  toc: {
    label: 'Table of Contents',
    items: [
      'Data controller',
      'Data collected',
      'Purposes and legal bases',
      'Retention period',
      'Data sharing',
      'Transfers outside the EEA',
      'Your rights',
      'Cookies and trackers',
      'Geolocation',
      'Profiling and automated decisions',
      'Security',
      'Data concerning minors',
      'Data breach notification',
      'Policy changes',
    ],
  },
  sections: [
    {
      title: '1. Data controller',
      blocks: [
        {
          kind: 'p',
          text: 'The data controller for data collected through the [strong:Le Plat du Jour] application and website is the publishing company whose full contact details are provided in the ' + LEGAL_NOTICE + '.',
        },
        {
          kind: 'p',
          text: 'For any question regarding your personal data or to exercise your rights, contact us at: ' + ADMIN + ' and include "Data Protection" in the subject line of your message.',
        },
      ],
    },
    {
      title: '2. Data collected',
      blocks: [
        {
          kind: 'p',
          text: 'Depending on how you use the Service, we collect the following categories of data:',
        },
        {
          kind: 'cards',
          items: [
            {
              title: 'Identity and account data',
              text: 'Last name, first name, email address, password (hashed, never stored in plain text), profile picture (optional), dietary preferences (if voluntarily provided).',
            },
            {
              title: 'Geolocation data',
              text: 'Approximate geographic location (within a radius of a few hundred meters) used to display nearby restaurants. Collected only if you grant permission on your device and never stored permanently on our servers.',
            },
            {
              title: 'Browsing and usage data',
              text: 'Restaurants viewed, dishes searched, favorite restaurants, published reviews and ratings, frequency and time of use, features used.',
            },
            {
              title: 'Transaction and billing data',
              text: 'Subscription plan, billing history, amounts paid. Banking data (card number, IBAN) does not pass through our systems and is processed directly by our PCI-DSS certified payment provider.',
            },
            {
              title: 'Technical data',
              text: 'IP address (partially anonymized), device type and model, operating system and version, application version, session identifiers, error and performance logs.',
            },
            {
              title: 'Partner restaurant data',
              text: 'Business name, contact person name, professional email address, phone number, restaurant address, photos and descriptions of published dishes, billing data for restaurant subscription plans.',
            },
          ],
        },
        {
          kind: 'p',
          text: 'We do not collect sensitive data within the meaning of the GDPR (ethnic origin, religious beliefs, health data, biometric data, etc.), unless explicitly indicated and with your express consent. Dietary preferences that you voluntarily provide (vegetarian, halal, gluten-free, etc.) are considered potentially sensitive data and are handled with enhanced protection.',
        },
      ],
    },
    {
      title: '3. Purposes and legal bases',
      blocks: [
        {
          kind: 'table',
          headers: ['Purpose', 'Legal basis (GDPR)'],
          rows: [
            ['Creation and management of user accounts', 'Performance of a contract (Art. 6.1.b)'],
            ['Display of nearby restaurants and menus', 'Performance of a contract (Art. 6.1.b)'],
            ['Geolocation for personalized suggestions', 'Consent (Art. 6.1.a)'],
            ['Processing reservations and orders', 'Performance of a contract (Art. 6.1.b)'],
            ['Billing of Premium subscriptions', 'Performance of a contract (Art. 6.1.b)'],
            ['Sending service notifications (booking confirmation, etc.)', 'Performance of a contract (Art. 6.1.b)'],
            ['Sending marketing communications and personalized offers', 'Consent (Art. 6.1.a)'],
            ['Service improvement and statistical usage analysis', 'Legitimate interest (Art. 6.1.f)'],
            ['Fraud detection and prevention', 'Legitimate interest (Art. 6.1.f) + Legal obligation (Art. 6.1.c)'],
            ['Retention of billing data', 'Legal obligation (Art. 6.1.c)'],
            ['Handling support requests and disputes', 'Legitimate interest (Art. 6.1.f)'],
            ['Compliance with legal and regulatory obligations', 'Legal obligation (Art. 6.1.c)'],
          ],
        },
      ],
    },
    {
      title: '4. Data retention period',
      blocks: [
        {
          kind: 'p',
          text: 'Data is retained only for the period strictly necessary for the purposes for which it was collected:',
        },
        {
          kind: 'table',
          headers: ['Data category', 'Retention period'],
          rows: [
            ['Active account data', 'For the entire account registration period'],
            ['Account data after deletion', '3 years (civil limitation period)'],
            ['Transaction data and invoices', '10 years (statutory accounting obligation)'],
            ['Technical and access logs', 'Maximum 12 months'],
            ['Real-time geolocation data', 'Not stored permanently'],
            ['Published reviews and ratings', 'Account lifetime plus 3 years'],
            ['Marketing data (consent-based)', 'Until consent withdrawal, max. 3 years without activity'],
            ['Functional cookies', 'Maximum 13 months'],
            ['Customer support data', '5 years after case closure'],
          ],
        },
        {
          kind: 'p',
          text: 'Once these periods expire, data is either permanently deleted or irreversibly anonymized for statistical purposes.',
        },
      ],
    },
    {
      title: '5. Data sharing',
      blocks: [
        {
          kind: 'p',
          text: 'Your personal data is never sold, rented, or transferred to third parties for commercial purposes. It may be shared in the following cases only:',
        },
        {
          kind: 'ul',
          items: [
            '[strong:Partner restaurants:] Only information necessary for booking or ordering (first name, booking time, number of guests, reported allergens). Restaurant partners are contractually bound not to use this data for any other purpose.',
            '[strong:Technical providers (processors):] Cloud hosting, payment provider, transactional email delivery service, push notification management tool. These providers act exclusively on our instructions and are bound by GDPR-compliant processing agreements (Art. 28).',
            '[strong:Competent authorities:] Upon judicial request, administrative order, or legal obligation, we may disclose data to authorized authorities.',
            '[strong:Business restructuring:] In the event of merger, acquisition, asset transfer, or insolvency proceedings, your data may be transferred to the successor entity, which will remain bound by this policy.',
          ],
        },
      ],
    },
    {
      title: '6. Transfers outside the EEA',
      blocks: [
        {
          kind: 'p',
          text: 'Some of our technical providers may be established in, or store data outside, the European Economic Area (EEA), including in the United States. In such cases, we ensure these transfers are governed by appropriate safeguards:',
        },
        {
          kind: 'ul',
          items: [
            'Adequacy decision of the European Commission (e.g., countries recognized as providing equivalent protection to the EU).',
            'Standard Contractual Clauses (SCCs) adopted by the European Commission.',
            'EU-US Data Privacy Framework for transfers to certified US entities.',
          ],
        },
        {
          kind: 'p',
          text: 'You can obtain a copy of the applicable safeguards by contacting: ' + ADMIN + '.',
        },
      ],
    },
    {
      title: '7. Your rights',
      blocks: [
        {
          kind: 'p',
          text: 'Under the GDPR (Chapter III) and, where applicable, Swiss data protection law, you have the following rights regarding your personal data:',
        },
        {
          kind: 'cards',
          items: [
            {
              title: 'Right of access (Art. 15 GDPR)',
              desc: 'Obtain confirmation that your data is being processed and receive a copy.',
            },
            {
              title: 'Right to rectification (Art. 16)',
              desc: 'Have inaccurate data corrected or incomplete data completed.',
            },
            {
              title: 'Right to erasure (Art. 17)',
              desc: 'Request deletion of your data in cases provided by law (right to be forgotten).',
            },
            {
              title: 'Right to restriction (Art. 18)',
              desc: 'Temporarily restrict processing of your data in case of dispute or during verification.',
            },
            {
              title: 'Right to data portability (Art. 20)',
              desc: 'Receive your data in a structured, commonly used, machine-readable format, or have it transferred to another controller.',
            },
            {
              title: 'Right to object (Art. 21)',
              desc: 'Object at any time to processing based on legitimate interest or to processing for direct marketing purposes.',
            },
            {
              title: 'Right to withdraw consent',
              desc: 'Withdraw your consent at any time without affecting the lawfulness of processing carried out before withdrawal.',
            },
            {
              title: 'Right not to be subject to an automated decision (Art. 22)',
              desc: 'Not be subject to a decision producing legal effects based solely on automated processing.',
            },
          ].map(({ title, desc }) => ({ title, text: desc })),
        },
        {
          kind: 'p',
          text: 'To exercise any of these rights, send your request to ' + ADMIN + ' and attach proof of identity if needed to verify your identity. We will respond within a maximum period of [strong:one month] (30 calendar days).',
        },
        {
          kind: 'p',
          text: 'If you believe your rights are not respected, you may lodge a complaint with the competent supervisory authority in your country:',
        },
        {
          kind: 'ul',
          items: [
            '[strong:France:] CNIL - cnil.fr',
            '[strong:Belgium:] DPA (Data Protection Authority) - autoriteprotectiondonnees.be',
            '[strong:Switzerland:] FDPIC (Federal Data Protection and Information Commissioner) - edoeb.admin.ch',
            '[strong:Luxembourg:] CNPD - cnpd.public.lu',
          ],
        },
      ],
    },
    {
      title: '8. Cookies and trackers',
      blocks: [
        {
          kind: 'p',
          text: 'The application and website use local storage technologies. The following types of trackers are used:',
        },
        {
          kind: 'table',
          headers: ['Type', 'Purpose', 'Consent required'],
          rows: [
            ['Session cookie', 'Maintain connection', 'No (strictly necessary)'],
            ['Language preferences (localStorage)', 'Remember selected language', 'No (strictly necessary)'],
            ['Authentication tokens', 'Persistent login ("Remember me" option)', 'No (strictly necessary)'],
            ['Anonymized analytics', 'Aggregated audience measurement', 'Yes (opt-in)'],
            ['Push notifications', 'Booking alerts and new menus', 'Yes (opt-in)'],
          ],
        },
        {
          kind: 'p',
          text: 'You can manage or withdraw your consent at any time from the application privacy settings. Refusing certain non-essential cookies does not affect access to the main Service features.',
        },
      ],
    },
    {
      title: '9. Geolocation',
      blocks: [
        {
          kind: 'p',
          text: 'Geolocation is used solely to display restaurants near your current location. It works through your operating system geolocation API (iOS or Android) and requires your explicit authorization.',
        },
        {
          kind: 'p',
          text: '[strong:What we do not do:] we do not store your movement history, we do not track your location in the background (even when the app is closed), and we do not sell your location data to third parties.',
        },
        {
          kind: 'p',
          text: 'You can revoke location access at any time in your device settings. In that case, you can manually enter a city or address to search for restaurants.',
        },
      ],
    },
    {
      title: '10. Profiling and automated decisions',
      blocks: [
        {
          kind: 'p',
          text: 'We use your browsing data (viewed restaurants, searches, favorites) to provide personalized suggestions for restaurants and daily dishes likely to interest you. This processing constitutes profiling within the meaning of Art. 4.4 GDPR.',
        },
        {
          kind: 'p',
          text: 'This profiling produces [strong:no legal effect] and no significant decision affecting you. Its sole purpose is to improve recommendation relevance. You may object to this profiling at any time by contacting ' + ADMIN + '.',
        },
      ],
    },
    {
      title: '11. Security',
      blocks: [
        {
          kind: 'p',
          text: 'We implement appropriate technical and organizational measures to protect your data against unauthorized access, loss, alteration, or disclosure:',
        },
        {
          kind: 'ul',
          items: [
            'Encryption of all communications (HTTPS/TLS 1.3).',
            'Password hashing using bcrypt or Argon2 algorithm.',
            'Two-factor authentication (2FA) available as an option.',
            'Access to production data restricted to authorized staff.',
            'Regular encrypted backups with restoration testing.',
            'Logging and monitoring of access to sensitive data.',
            'Formalized security incident management policy.',
          ],
        },
        {
          kind: 'p',
          text: 'Despite these measures, no system is infallible. We recommend using a strong and unique password for your Le Plat du Jour account.',
        },
      ],
    },
    {
      title: '12. Data concerning minors',
      blocks: [
        {
          kind: 'p',
          text: 'The Service is not intended for children under 16 years old (or the applicable digital age of consent in your country). We do not knowingly collect personal data from minors below that age without verifiable consent from a parent or legal guardian.',
        },
        {
          kind: 'p',
          text: 'If you are a parent or legal guardian and believe your child has provided data without your consent, contact us immediately at ' + ADMIN + ' so we can delete it as quickly as possible.',
        },
      ],
    },
    {
      title: '13. Data breach notification',
      blocks: [
        {
          kind: 'p',
          text: 'In the event of a personal data breach likely to create a risk to your rights and freedoms, we undertake to:',
        },
        {
          kind: 'ul',
          items: [
            'Notify the competent supervisory authority within [strong:72 hours] of detecting the incident (Art. 33 GDPR).',
            'Inform you directly, as soon as possible, if the breach presents a high risk to your rights and freedoms (Art. 34 GDPR).',
            'Document the incident and corrective measures taken.',
          ],
        },
      ],
    },
    {
      title: '14. Policy changes',
      blocks: [
        {
          kind: 'p',
          text: 'This privacy policy may be updated to reflect changes in our practices, applicable legislation, or technical infrastructure. The date of the latest update is shown at the top of this document.',
        },
        {
          kind: 'p',
          text: 'In the event of a substantial change, we will notify you by email or in-app notification at least [strong:30 days before] the changes take effect. Continued use of the Service after that date constitutes acceptance of the updated policy.',
        },
      ],
    },
  ],
};
