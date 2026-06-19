import type { LegalDocument } from '../types';

const VERSION = '1.0 — May 2026';
const EFFECTIVE = '4 May 2026';
const ADMIN = '[mailto:admin@dgeconcept.ch|admin@dgeconcept.ch]';
const SITE = '[link:https://www.leplatdujour.ch|https://www.leplatdujour.ch]';
const PRIVACY = '[route:/politique-de-confidentialite|Privacy Policy]';
const PRICING = '[route:/#tarifs|Pricing page]';
const ODR = '[link:https://ec.europa.eu/consumers/odr|ec.europa.eu/consumers/odr]';

export const cguDoc: LegalDocument = {
  meta: {
    eyebrow: 'D.G.E. Concept SàRL · www.leplatdujour.ch',
    title: 'General Terms of Use',
    subtitle: 'Le Plat du Jour Platform',
    version: VERSION,
    effectiveDate: EFFECTIVE,
    footerLine: `Le Plat du Jour · D.G.E. Concept SàRL · GTU Version ${VERSION}`,
  },
  toc: {
    label: 'Table of Contents — GTU',
    items: [
      'Preamble',
      'Definitions',
      'Purpose and scope',
      'Access and account creation',
      'Restaurants obligations',
      'Clients obligations',
      'Limitation of liability',
      'Personal data',
      'Intellectual property',
      'Availability and maintenance',
      'Applicable law',
      'Amendments to the GTU',
      'Miscellaneous provisions',
    ],
  },
  sections: [
    {
      title: 'Preamble',
      blocks: [
        {
          kind: 'p',
          text: `These General Terms of Use (hereinafter the "GTU") govern access to and use of the Le Plat du Jour online platform, available at ${SITE} (hereinafter the "Platform"), published by D.G.E. Concept SàRL, with registered office in Arzier-Le Muids, canton of Vaud, Switzerland, registered in the Commercial Register under UID CHE-456.471.738 (hereinafter the "Publisher").`,
        },
        {
          kind: 'p',
          text: 'By creating an account on the Platform, whether a Restaurant account or a Client account, the User acknowledges having read, understood and accepted all of these GTU. This acceptance is electronically recorded with a timestamp and constitutes admissible evidence.',
        },
        {
          kind: 'p',
          text: 'The Platform is a marketplace connecting food service establishments (hereinafter "Restaurants") offering their daily specials and private end customers (hereinafter "Clients") wishing to order online. The Publisher acts as a technical intermediary and does not intervene in the contractual relationship between the Restaurant and the Client for the provision of meals.',
        },
      ],
    },
    {
      title: 'Art. 1 — Definitions',
      blocks: [
        { kind: 'p', text: 'For the purposes of these GTU, the following terms shall mean:' },
        {
          kind: 'ul',
          items: [
            '[strong:Platform:] the Le Plat du Jour service accessible online at https://www.leplatdujour.ch, operated by D.G.E. Concept SàRL.',
            '[strong:Publisher:] D.G.E. Concept SàRL, a Swiss limited liability company, Arzier-Le Muids, canton of Vaud, Switzerland, UID CHE-456.471.738, operator of the Platform.',
            '[strong:User:] any natural or legal person who has created an account on the Platform, whether as a Restaurant or a Client.',
            '[strong:Restaurant:] any professional food service establishment holding an active subscription on the Platform, authorized to publish daily special offers.',
            '[strong:Client:] any natural person at least 18 years old who has created an account on the Platform and places orders there.',
            '[strong:Offer:] publication by a Restaurant of one or more daily specials available for ordering via the Platform.',
            '[strong:Order:] the act by which a Client selects an Offer and confirms it via the Platform.',
            '[strong:Restaurant Subscription:] the paid access contract allowing a Restaurant to publish its Offers on the Platform, subscribed through the available plans.',
            '[strong:Account:] the secure personal space created by the User upon registration, providing access to the Platform features.',
          ],
        },
      ],
    },
    {
      title: 'Art. 2 — Purpose and scope of the Platform',
      blocks: [
        { kind: 'h3', text: '2.1 — What Le Plat du Jour is' },
        {
          kind: 'p',
          text: 'Le Plat du Jour is an online matchmaking platform allowing Restaurants to publish their daily special offers and Clients to view and order them. The Publisher provides the technical infrastructure enabling this matchmaking.',
        },
        { kind: 'h3', text: '2.2 — What Le Plat du Jour is not' },
        { kind: 'p', text: 'The Platform is not:' },
        {
          kind: 'ul',
          items: [
            'a restaurateur, caterer or food service provider;',
            'a home-delivery service — no logistics services are provided by the Publisher;',
            'a guarantor of the quality, composition, allergens or sanitary compliance of dishes offered by Restaurants;',
            'a party to the sales contract entered into between the Restaurant and the Client.',
          ],
        },
        { kind: 'h3', text: '2.3 — Role as technical intermediary' },
        {
          kind: 'p',
          text: 'The Publisher acts exclusively as a technical intermediary. The sales contract relating to each order is concluded directly between the Restaurant and the Client. The Publisher cannot be held liable for performance or non-performance of this contract.',
        },
        { kind: 'h3', text: '2.4 — Geographic area' },
        {
          kind: 'p',
          text: 'The Platform is available throughout Switzerland. The Publisher reserves the right to extend or restrict geographic coverage at any time.',
        },
      ],
    },
    {
      title: 'Art. 3 — Access to the Platform and account creation',
      blocks: [
        { kind: 'h3', text: '3.1 — Access conditions' },
        {
          kind: 'p',
          text: 'Access to the Platform as a Client is reserved for natural persons at least 18 years old. Access as a Restaurant is reserved for legal or natural persons acting within a duly authorized professional food service activity.',
        },
        {
          kind: 'p',
          text: 'By creating an account, the User guarantees that the information provided is accurate, complete and up to date. Any false declaration is the sole responsibility of the User.',
        },
        { kind: 'h3', text: '3.2 — Account creation process' },
        { kind: 'p', text: 'Account creation is carried out exclusively online according to the following steps:' },
        {
          kind: 'ol',
          items: [
            'Entering identification information (email address, password, profile information).',
            'Acceptance of these GTU (mandatory checkbox — acceptance recorded with timestamp).',
            'Validation of the email address through the confirmation link sent automatically.',
          ],
        },
        { kind: 'p', text: 'The account becomes active once the email address is validated.' },
        { kind: 'h3', text: '3.3 — Account management and security' },
        {
          kind: 'p',
          text: `The User is solely responsible for the confidentiality of their login credentials and for all activity carried out from their account. In the event of compromise or unauthorized use, the User undertakes to inform the Publisher immediately at ${ADMIN}.`,
        },
        { kind: 'h3', text: '3.4 — Account suspension and closure' },
        {
          kind: 'p',
          text: 'The Publisher reserves the right to suspend or close any account in the event of breach of these GTU, fraudulent or abusive use, or use contrary to public policy, without prior notice or compensation.',
        },
        {
          kind: 'p',
          text: `The User may close their account at any time by sending a request to ${ADMIN}. Closure of a Restaurant account does not entitle the User to reimbursement for the current subscription period.`,
        },
      ],
    },
    {
      title: 'Art. 4 — Restaurants obligations',
      blocks: [
        { kind: 'h3', text: '4.1 — Regulatory compliance' },
        { kind: 'p', text: 'The Restaurant is solely and fully responsible for:' },
        {
          kind: 'ul',
          items: [
            'holding all authorizations, licenses and permits required to carry out its food service activity (cantonal/municipal authorization, restaurateur license, etc.);',
            'compliance of its culinary preparations with hygiene and food safety standards applicable in Switzerland (ODAl, HACCP, etc.);',
            'the accuracy of information published on the Platform, in particular dish descriptions, prices, allergens and availability;',
            'compliance with legal obligations regarding food labeling and allergen disclosure.',
          ],
        },
        { kind: 'h3', text: '4.2 — Exclusive responsibility of the Restaurant' },
        {
          kind: 'callout',
          variant: 'warning',
          text: '[strong:Critical point —] The Restaurant is solely responsible for the quality, composition, allergens and sanitary compliance of the dishes offered. In the event of a dispute related to an order (non-compliance, food poisoning, allergen error, etc.), liability lies exclusively with the Restaurant. The Publisher may under no circumstances be held liable.',
        },
        { kind: 'h3', text: '4.3 — Publication obligations' },
        { kind: 'p', text: 'The Restaurant undertakes to:' },
        {
          kind: 'ul',
          items: [
            'publish accurate, up-to-date and non-misleading information regarding its Offers;',
            'update its availability in real time and immediately remove any Offer that can no longer be fulfilled;',
            'state clearly and completely the allergens present in its preparations;',
            'respect the prices published on the Platform at the time the Order is placed by the Client.',
          ],
        },
        { kind: 'h3', text: '4.4 — Prohibited uses' },
        { kind: 'p', text: 'In particular, the following are prohibited:' },
        {
          kind: 'ul',
          items: [
            'publishing false or misleading information, or information likely to mislead the Client;',
            'any use of the Platform for purposes unrelated to food service activity;',
            'any attempt to circumvent Platform mechanisms or gain unauthorized access to other accounts.',
          ],
        },
      ],
    },
    {
      title: 'Art. 5 — Clients obligations',
      blocks: [
        { kind: 'h3', text: '5.1 — Ordering conditions' },
        { kind: 'p', text: 'The Client undertakes to:' },
        {
          kind: 'ul',
          items: [
            'provide accurate and up-to-date identification information when creating their account;',
            'place only genuine orders and honor every confirmed order;',
            'comply with the specific conditions set by the Restaurant (opening times, pickup terms, etc.);',
            'promptly report any issue related to an order directly to the relevant Restaurant.',
          ],
        },
        { kind: 'h3', text: '5.2 — Client responsibility' },
        {
          kind: 'p',
          text: 'The Client is solely responsible for verifying information relating to Offers before placing an order, in particular allergens, composition and pickup conditions. In case of doubt, the Client is invited to contact the Restaurant directly.',
        },
      ],
    },
    {
      title: 'Art. 6 — Limitation of the Publisher liability',
      blocks: [
        { kind: 'h3', text: '6.1 — Exclusions of liability' },
        {
          kind: 'p',
          text: 'To the fullest extent permitted by applicable Swiss law, the Publisher excludes all liability for:',
        },
        {
          kind: 'ul',
          items: [
            'direct or indirect damage resulting from use of, or inability to use, the Platform;',
            'any dispute related to the execution of an order between a Restaurant and a Client (quality, timing, allergens, non-delivery, etc.);',
            'the accuracy, completeness or updating of information published by Restaurants;',
            'any service interruption related to force majeure, maintenance or technical failure;',
            'any damage resulting from fraudulent or abusive use of a User login credentials.',
          ],
        },
        { kind: 'h3', text: '6.2 — Financial cap' },
        {
          kind: 'p',
          text: 'In cases where the Publisher liability cannot be fully excluded, it is expressly limited, with regard to Restaurants, to the amount of subscription fees effectively paid for the current period at the time of the event giving rise to the damage.',
        },
      ],
    },
    {
      title: 'Art. 7 — Personal data and confidentiality',
      blocks: [
        { kind: 'h3', text: '7.1 — Data collected' },
        {
          kind: 'p',
          text: 'As part of use of the Platform, the Publisher collects and processes the following data:',
        },
        {
          kind: 'ul',
          items: [
            '[strong:Identification data:] email address, first name, last name (for Clients); company name, address, professional email (for Restaurants).',
            '[strong:Usage data:] order history, published offers, interactions with the Platform.',
            '[strong:Technical data:] IP address, browser, login logs.',
            '[strong:Payment data (Restaurants only):] processed exclusively by payment providers — not stored by the Publisher.',
          ],
        },
        { kind: 'h3', text: '7.2 — Processing purposes' },
        {
          kind: 'p',
          text: 'Collected data is processed for the following purposes: account and access management, Restaurant/Client matching, order processing, Platform improvement, and sending service-related communications.',
        },
        { kind: 'h3', text: '7.3 — Users rights' },
        {
          kind: 'p',
          text: `In accordance with the Swiss nFADP (and the GDPR for Users residing in the EU), every User has rights of access, rectification, erasure, portability and objection regarding their personal data, exercisable at ${ADMIN}. For more details, please consult our ${PRIVACY}.`,
        },
        { kind: 'h3', text: '7.4 — Retention and hosting' },
        {
          kind: 'p',
          text: 'Data is hosted in Switzerland and/or in the European Union. Personal data is retained for the duration of the active account plus twelve (12) months after account closure, unless contrary legal obligations apply.',
        },
        { kind: 'h3', text: '7.5 — Confidentiality' },
        {
          kind: 'p',
          text: 'Users data is neither sold, rented nor transferred to third parties for commercial purposes. It may be transmitted to technical service providers bound by confidentiality obligations and acting exclusively on behalf of the Publisher.',
        },
      ],
    },
    {
      title: 'Art. 8 — Intellectual property',
      blocks: [
        {
          kind: 'p',
          text: 'The Le Plat du Jour Platform, its interface, algorithms, databases and all proprietary content are the exclusive property of D.G.E. Concept SàRL and are protected by Swiss and international intellectual property law.',
        },
        {
          kind: 'p',
          text: 'Content published by Restaurants (descriptions, photos) remains the property of its authors. By publishing it on the Platform, the Restaurant grants the Publisher a non-exclusive, royalty-free right of use for service needs (display, indexing, Platform promotion).',
        },
        {
          kind: 'p',
          text: 'The User benefits from a personal, non-exclusive and non-transferable right to access and use the Platform features.',
        },
      ],
    },
    {
      title: 'Art. 9 — Availability and maintenance',
      blocks: [
        {
          kind: 'p',
          text: 'The Publisher endeavors to ensure availability of the Platform 24/7, without being able to guarantee uninterrupted access. Interruptions may occur for maintenance, updates or force majeure. The Publisher will inform Users, where possible, of scheduled maintenance operations. No guaranteed service level (SLA) is contractually undertaken.',
        },
      ],
    },
    {
      title: 'Art. 10 — Applicable law and competent jurisdiction',
      blocks: [
        {
          kind: 'p',
          text: 'These GTU are governed by Swiss law, in particular the Code of Obligations (CO) and the Federal Data Protection Act (nFADP). Any dispute between professionals shall be subject to the exclusive jurisdiction of the District Court of La Côte (Nyon, canton of Vaud, Switzerland).',
        },
        {
          kind: 'p',
          text: `For Users residing in the European Union and acting as consumers, mandatory jurisdiction rules under EU law shall apply. The European Commission online dispute resolution platform is available at: ${ODR}.`,
        },
      ],
    },
    {
      title: 'Art. 11 — Amendments to the GTU',
      blocks: [
        {
          kind: 'p',
          text: 'The Publisher reserves the right to amend these GTU at any time. In the event of a substantial amendment, the User will be informed by email with thirty (30) days prior notice. Continued use of the Platform after expiry of this period constitutes acceptance of the new GTU. In case of refusal, the User may close their account free of charge before the effective date.',
        },
      ],
    },
    {
      title: 'Art. 12 — Miscellaneous provisions',
      blocks: [
        { kind: 'h3', text: '12.1 — Partial invalidity' },
        {
          kind: 'p',
          text: 'If any provision is declared null or unenforceable, the remaining provisions shall remain fully in force.',
        },
        { kind: 'h3', text: '12.2 — No waiver' },
        {
          kind: 'p',
          text: 'Failure by the Publisher to invoke any provision shall not be interpreted as a waiver of its right to invoke it later.',
        },
        { kind: 'h3', text: '12.3 — Contact' },
        {
          kind: 'p',
          text: `For any question related to these GTU: ${ADMIN} — D.G.E. Concept SàRL, Arzier-Le Muids, canton of Vaud, Switzerland — [link:https://www.leplatdujour.ch|www.leplatdujour.ch].`,
        },
      ],
    },
  ],
};

export const cgvDoc: LegalDocument = {
  meta: {
    title: 'General Terms of Sale',
    subtitle: 'Le Plat du Jour Platform — Restaurant Subscriptions',
    version: VERSION,
    effectiveDate: EFFECTIVE,
    footerLine: `Le Plat du Jour · D.G.E. Concept SàRL · GTS Version ${VERSION}`,
  },
  toc: {
    label: 'Table of Contents — GTS',
    items: [
      'Preamble',
      'Purpose',
      'Offers, prices and currencies',
      'Order and subscription',
      'Payment',
      'Duration, renewal and termination',
      'No-refund policy',
      'Right of withdrawal',
      'Service and support',
      'Subscription assignment',
      'Applicable law',
      'Final provisions',
    ],
  },
  sections: [
    {
      title: 'Preamble',
      blocks: [
        {
          kind: 'p',
          text: 'These General Terms of Sale (hereinafter the "GTS") govern all commercial transactions concluded between D.G.E. Concept SàRL, Arzier-Le Muids, canton of Vaud, Switzerland, UID CHE-456.471.738, publisher of the Le Plat du Jour platform (hereinafter the "Seller"), and any food service establishment subscribing to a paid subscription (hereinafter the "Buyer").',
        },
        {
          kind: 'p',
          text: 'Any subscription to a paid plan implies full and unconditional acceptance of these GTS, together with the General Terms of Use. This acceptance is electronically recorded with a timestamp and constitutes admissible evidence.',
        },
        {
          kind: 'p',
          text: 'These GTS govern exclusively the commercial relationship between the Seller and subscribed Restaurants. They do not apply to end Clients, whose relationship with the Platform is governed by the GTU.',
        },
      ],
    },
    {
      title: 'Art. 1 — Purpose',
      blocks: [
        {
          kind: 'p',
          text: 'These GTS aim to define the terms and conditions for selling subscriptions granting access to publication and visibility features on the Le Plat du Jour platform. The service sold is access to a digital matchmaking infrastructure allowing Restaurants to publish their daily special offers and make them accessible to Clients.',
        },
      ],
    },
    {
      title: 'Art. 2 — Offers, prices and currencies',
      blocks: [
        { kind: 'h3', text: '2.1 — Available plans' },
        {
          kind: 'p',
          text: `Le Plat du Jour offers several monthly subscription plans adapted to Restaurant needs. Full details of plans and features included in each plan are available on the Platform ${PRICING}, which is authoritative.`,
        },
        { kind: 'p', text: 'The available plans and prices are as follows:' },
        {
          kind: 'subscriptionPricingTable',
          headers: ['Plan', 'Price', 'Main features'],
          targetType: 'RESTAURANT',
        },
        { kind: 'h3', text: '2.2 — Currency' },
        {
          kind: 'p',
          text: 'Subscriptions are billed in Swiss francs (CHF). The applicable price is the one displayed at the time of subscription.',
        },
        { kind: 'h3', text: '2.3 — Prices and VAT' },
        {
          kind: 'p',
          text: 'D.G.E. Concept SàRL is a Swiss company not subject to VAT as of the effective date of these GTS. The displayed prices are therefore tax-inclusive at the applicable rate. In the event of subsequent VAT liability, prices will be adjusted in accordance with Article 2.4.',
        },
        { kind: 'h3', text: '2.4 — Pricing changes' },
        {
          kind: 'p',
          text: 'The Seller reserves the right to change prices with a minimum notice period of thirty (30) days communicated by email to the address registered at subscription. The Buyer may terminate the subscription free of charge if they refuse the new prices, before the effective date.',
        },
      ],
    },
    {
      title: 'Art. 3 — Order and subscription',
      blocks: [
        { kind: 'h3', text: '3.1 — Subscription process' },
        {
          kind: 'p',
          text: 'Subscription to a plan is carried out exclusively online on www.leplatdujour.ch, according to the following steps:',
        },
        {
          kind: 'ol',
          items: [
            'Creation of a Restaurant account or login to an existing account.',
            'Selection of the desired subscription plan.',
            'Acceptance of these GTS and the GTU (mandatory checkbox — acceptance recorded with timestamp).',
            'Entry and validation of payment details.',
            'Confirmation of the subscription by email to the registered address.',
          ],
        },
        { kind: 'h3', text: '3.2 — Contract formation' },
        {
          kind: 'p',
          text: 'The sales contract is deemed concluded on the date the Buyer receives the subscription confirmation email. This email summarizes the subscribed plan, the amount billed and the subscription period.',
        },
        { kind: 'h3', text: '3.3 — Professional framework' },
        {
          kind: 'p',
          text: 'Le Plat du Jour is a service intended exclusively for food service professionals. By subscribing, the Buyer declares that they are acting within the scope of their professional activity and hold all authorizations required to carry out that activity.',
        },
      ],
    },
    {
      title: 'Art. 4 — Payment',
      blocks: [
        { kind: 'h3', text: '4.1 — Accepted payment methods' },
        { kind: 'p', text: 'Payments are accepted through the following methods:' },
        {
          kind: 'ul',
          items: [
            '[strong:TWINT] — available for CHF payments from Switzerland.',
            '[strong:Bank card] (Visa, Mastercard) via MyPos terminal — PCI-DSS secure processing.',
            '[strong:PayPal.]',
            '[strong:Bank transfer] — banking details are provided after order confirmation; access to the Platform is activated upon receipt of the transfer.',
          ],
        },
        {
          kind: 'callout',
          variant: 'info',
          text: '[strong:Payment security —] D.G.E. Concept SàRL has no access to any bank data or card number. Card payments are processed by a PCI-DSS certified provider. No banking data is stored by the Publisher.',
        },
        { kind: 'h3', text: '4.2 — Invoicing' },
        {
          kind: 'p',
          text: 'A receipt or invoice is automatically issued by email for each transaction. The Buyer can access payment history from their dashboard.',
        },
        { kind: 'h3', text: '4.3 — Payment default' },
        {
          kind: 'p',
          text: 'In case of payment failure or refusal, the Buyer is informed by email. A period of ten (10) days is granted to regularize the situation. After this period, access to publication features is suspended until regularization.',
        },
      ],
    },
    {
      title: 'Art. 5 — Duration, renewal and termination',
      blocks: [
        { kind: 'h3', text: '5.1 — Subscription duration' },
        {
          kind: 'p',
          text: 'Subscriptions are monthly, with no minimum commitment period. The subscription takes effect on the date payment is validated and runs until the end of the current calendar month.',
        },
        { kind: 'h3', text: '5.2 — Renewal' },
        {
          kind: 'p',
          text: 'The subscription is not automatically renewed. Upon expiry, access to publication features ends. The Buyer receives a reminder email before the end of the period to allow them to subscribe for a new monthly period if desired.',
        },
        { kind: 'h3', text: '5.3 — Termination by the Buyer' },
        {
          kind: 'p',
          text: 'The Buyer may terminate the subscription at any time. No refund is granted for the current month, regardless of the termination date or usage level. Access to features remains active until the end of the initially subscribed monthly period.',
        },
        { kind: 'h3', text: '5.4 — Termination by the Seller' },
        {
          kind: 'p',
          text: 'The Seller may suspend or terminate a Buyer access without prior notice in the event of serious breach of the GTU or these GTS, proven fraudulent or abusive use, or non-payment after the grace period defined in Article 4.3. In case of termination by the Seller for a reason not attributable to the Buyer, the prorated amount for unused days is refunded.',
        },
        { kind: 'h3', text: '5.5 — End of service' },
        {
          kind: 'p',
          text: 'If the Seller decides to discontinue operation of the Platform, Buyers with an active subscription will be informed by email with ninety (90) days prior notice. The prorated amount for unused days will be refunded.',
        },
      ],
    },
    {
      title: 'Art. 6 — No-refund policy',
      blocks: [
        {
          kind: 'callout',
          variant: 'warning',
          text: '[strong:Strict no-refund policy —] Any monthly fee paid is definitively acquired by the Seller, except in cases expressly provided for in Articles 5.4 and 5.5. The month is fully due, regardless of the termination date during the period.',
        },
        { kind: 'p', text: 'No refund is granted for:' },
        {
          kind: 'ul',
          items: [
            'a current monthly period, regardless of the termination date;',
            'partial or total non-use of features included in the subscription;',
            'a change in the Buyer professional situation or needs;',
            'dissatisfaction with the service.',
          ],
        },
        {
          kind: 'p',
          text: `As a commercial gesture and in good faith, the Seller undertakes to review any refund request submitted within forty-eight (48) hours following the first subscription, in case of proven and documented technical impossibility to access the service. Such requests must be sent to ${ADMIN}.`,
        },
      ],
    },
    {
      title: 'Art. 7 — Right of withdrawal',
      blocks: [
        {
          kind: 'p',
          text: 'In accordance with Article 16 of European Directive 2011/83/EU, the 14-day right of withdrawal does not apply to digital content whose performance began before expiry of the withdrawal period, with the Buyer prior express consent.',
        },
        {
          kind: 'p',
          text: 'By subscribing and immediately accessing Platform features, the Buyer acknowledges that the digital service is provided as soon as payment is confirmed, resulting in waiver of the right of withdrawal. For Buyers acting in a professional capacity, the consumer right of withdrawal does not apply.',
        },
      ],
    },
    {
      title: 'Art. 8 — Service and support',
      blocks: [
        { kind: 'h3', text: '8.1 — Availability' },
        {
          kind: 'p',
          text: 'The Seller endeavors to ensure Platform availability 24/7. No guaranteed service level (SLA) is contractually undertaken. Interruptions may occur for maintenance, updates or force majeure, without giving rise to compensation.',
        },
        { kind: 'h3', text: '8.2 — Support' },
        {
          kind: 'p',
          text: `Support is available by email at ${ADMIN}. The Seller undertakes to respond within two (2) business days.`,
        },
      ],
    },
    {
      title: 'Art. 9 — Subscription assignment',
      blocks: [
        {
          kind: 'p',
          text: `The subscription is personal and nominative. It may not be assigned or shared without the Seller prior written consent. In case of business transfer, assignment may be considered upon request at ${ADMIN}.`,
        },
      ],
    },
    {
      title: 'Art. 10 — Applicable law and jurisdiction',
      blocks: [
        {
          kind: 'p',
          text: 'These GTS are governed by Swiss law (Code of Obligations). Any dispute between professionals shall be subject to the exclusive jurisdiction of the District Court of La Côte (Nyon, canton of Vaud, Switzerland).',
        },
        {
          kind: 'p',
          text: `For Buyers residing in the European Union and acting as consumers, mandatory jurisdiction rules under EU law shall apply. The European Commission online dispute resolution platform is available at: ${ODR}.`,
        },
      ],
    },
    {
      title: 'Art. 11 — Final provisions',
      blocks: [
        { kind: 'h3', text: '11.1 — Precedence of the GTS' },
        {
          kind: 'p',
          text: 'In case of contradiction between these GTS and any other commercial document, these GTS shall prevail, unless expressly agreed otherwise in writing by the Seller.',
        },
        { kind: 'h3', text: '11.2 — Partial invalidity' },
        {
          kind: 'p',
          text: 'If one clause is declared null or unenforceable, the other clauses remain fully in force.',
        },
        { kind: 'h3', text: '11.3 — Archiving and contact' },
        {
          kind: 'p',
          text: `These GTS are archived by version and available on request at ${ADMIN} — D.G.E. Concept SàRL, Arzier-Le Muids, canton of Vaud, Switzerland.`,
        },
      ],
    },
  ],
};
