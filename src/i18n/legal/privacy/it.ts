import type { LegalDocument } from '../types';

const ADMIN = '[mailto:admin@dgeconcept.ch|admin@dgeconcept.ch]';
const LEGAL_NOTICE = '[route:/mentions-legales|Note legali]';

export const privacyDoc: LegalDocument = {
  meta: {
    title: 'Informativa sulla Privacy',
    version: '',
    effectiveDate: 'Giugno 2026',
    intro:
      'La protezione dei vostri dati personali e una priorita per [strong:Plat du Jour]. Questa informativa spiega quali dati raccogliamo, perche, come li utilizziamo, per quanto tempo li conserviamo e quali sono i vostri diritti. E conforme al Regolamento Generale sulla Protezione dei Dati (GDPR - UE 2016/679) e alla Legge federale svizzera sulla protezione dei dati (nLPD).',
  },
  toc: {
    label: 'Sommario',
    items: [
      'Responsabile del trattamento',
      'Dati raccolti',
      'Finalita e basi giuridiche del trattamento',
      'Durata di conservazione',
      'Condivisione dei dati',
      'Trasferimenti fuori dallo SEE',
      'I vostri diritti',
      'Cookie e tecnologie simili',
      'Geolocalizzazione',
      'Profilazione e decisioni automatizzate',
      'Sicurezza',
      'Dati dei minori',
      'Notifica in caso di violazione dei dati',
      'Modifiche della policy',
    ],
  },
  sections: [
    {
      title: '1. Responsabile del trattamento',
      blocks: [
        {
          kind: 'p',
          text: "Il responsabile del trattamento dei dati raccolti tramite l'applicazione e il sito web [strong:Plat du Jour] e la societa editrice, i cui riferimenti completi sono riportati nelle " + LEGAL_NOTICE + '.',
        },
        {
          kind: 'p',
          text: 'Per qualsiasi domanda relativa ai vostri dati personali o per esercitare i vostri diritti, contattateci a: ' + ADMIN + ' indicando "Protezione dei dati" nell\'oggetto del messaggio.',
        },
      ],
    },
    {
      title: '2. Dati raccolti',
      blocks: [
        {
          kind: 'p',
          text: "In base all'utilizzo del Servizio, raccogliamo le seguenti categorie di dati:",
        },
        {
          kind: 'cards',
          items: [
            {
              title: 'Dati identificativi e di account',
              text: 'Nome, cognome, indirizzo e-mail, password (hashata, mai memorizzata in chiaro), foto profilo (facoltativa), preferenze alimentari (se fornite volontariamente).',
            },
            {
              title: 'Dati di geolocalizzazione',
              text: 'Posizione geografica approssimativa (raggio di alcune centinaia di metri) per mostrare i ristoranti nelle vicinanze. Raccolta solo se concedete il permesso sul vostro dispositivo e mai conservata in modo permanente sui nostri server.',
            },
            {
              title: 'Dati di navigazione e utilizzo',
              text: 'Ristoranti consultati, piatti cercati, ristoranti aggiunti ai preferiti, recensioni e valutazioni pubblicate, frequenza e orari di utilizzo, funzionalita utilizzate.',
            },
            {
              title: 'Dati di transazione e fatturazione',
              text: 'Abbonamento sottoscritto, storico di fatturazione, importi pagati. I dati bancari (numero carta, IBAN) non transitano nei nostri sistemi e sono trattati direttamente dal nostro fornitore di pagamento certificato PCI-DSS.',
            },
            {
              title: 'Dati tecnici',
              text: "Indirizzo IP (parzialmente anonimizzato), tipo e modello del dispositivo, sistema operativo e versione, versione dell'applicazione, identificativi di sessione, log di errore e prestazioni.",
            },
            {
              title: 'Dati dei ristoranti partner',
              text: "Ragione sociale, nome del referente, indirizzo e-mail professionale, numero di telefono, indirizzo del ristorante, foto e descrizioni dei piatti pubblicati, dati di fatturazione dell'abbonamento ristorante.",
            },
          ],
        },
        {
          kind: 'p',
          text: 'Non raccogliamo dati sensibili ai sensi del GDPR (origine etnica, convinzioni religiose, dati sanitari, dati biometrici, ecc.), salvo esplicita indicazione e vostro consenso espresso. Le preferenze alimentari che fornite volontariamente (vegetariano, halal, senza glutine, ecc.) sono considerate dati potenzialmente sensibili e trattate con protezione rafforzata.',
        },
      ],
    },
    {
      title: '3. Finalita e basi giuridiche del trattamento',
      blocks: [
        {
          kind: 'table',
          headers: ['Finalita', 'Base giuridica (GDPR)'],
          rows: [
            ['Creazione e gestione dell\'account utente', 'Esecuzione del contratto (art. 6.1.b)'],
            ['Visualizzazione dei ristoranti e menu nelle vicinanze', 'Esecuzione del contratto (art. 6.1.b)'],
            ['Geolocalizzazione per suggerimenti personalizzati', 'Consenso (art. 6.1.a)'],
            ['Trattamento di prenotazioni e ordini', 'Esecuzione del contratto (art. 6.1.b)'],
            ['Fatturazione degli abbonamenti Premium', 'Esecuzione del contratto (art. 6.1.b)'],
            ['Invio di notifiche di servizio (conferma prenotazione, ecc.)', 'Esecuzione del contratto (art. 6.1.b)'],
            ['Invio di comunicazioni marketing e offerte personalizzate', 'Consenso (art. 6.1.a)'],
            ['Miglioramento del servizio e analisi statistiche di utilizzo', 'Interesse legittimo (art. 6.1.f)'],
            ['Rilevazione e prevenzione delle frodi', 'Interesse legittimo (art. 6.1.f) + Obbligo legale (art. 6.1.c)'],
            ['Conservazione dei dati di fatturazione', 'Obbligo legale (art. 6.1.c)'],
            ['Risposta alle richieste di supporto e ai contenziosi', 'Interesse legittimo (art. 6.1.f)'],
            ['Conformita agli obblighi legali e normativi', 'Obbligo legale (art. 6.1.c)'],
          ],
        },
      ],
    },
    {
      title: '4. Durata di conservazione',
      blocks: [
        {
          kind: 'p',
          text: 'I dati sono conservati per il periodo strettamente necessario alle finalita per cui sono stati raccolti:',
        },
        {
          kind: 'table',
          headers: ['Categoria di dati', 'Periodo di conservazione'],
          rows: [
            ['Dati account attivo', "Per tutta la durata dell'iscrizione"],
            ['Dati account dopo cancellazione', '3 anni (termine di prescrizione civile)'],
            ['Dati di transazione e fatture', '10 anni (obbligo contabile legale)'],
            ['Log tecnici e di accesso', 'Massimo 12 mesi'],
            ['Dati di geolocalizzazione in tempo reale', 'Non conservati in modo permanente'],
            ['Recensioni e valutazioni pubblicate', "Durata di attivita dell'account + 3 anni"],
            ['Dati marketing (consenso)', 'Fino alla revoca del consenso, max. 3 anni senza attivita'],
            ['Cookie funzionali', 'Massimo 13 mesi'],
            ['Dati di supporto clienti', '5 anni dopo la chiusura del caso'],
          ],
        },
        {
          kind: 'p',
          text: 'Alla scadenza di tali termini, i dati sono cancellati definitivamente oppure anonimizzati in modo irreversibile a fini statistici.',
        },
      ],
    },
    {
      title: '5. Condivisione dei dati',
      blocks: [
        {
          kind: 'p',
          text: 'I vostri dati personali non vengono mai venduti, noleggiati o ceduti a terzi per finalita commerciali. Possono essere condivisi solo nei seguenti casi:',
        },
        {
          kind: 'ul',
          items: [
            '[strong:Ristoranti partner:] Solo le informazioni necessarie per la prenotazione o l\'ordine (nome, orario, numero di coperti, allergeni segnalati). I ristoratori si impegnano contrattualmente a non utilizzare tali dati per altre finalita.',
            '[strong:Fornitori tecnici (responsabili del trattamento):] Hosting cloud, fornitore di pagamento, servizio di invio e-mail transazionali, strumento di gestione delle notifiche push. Questi fornitori agiscono esclusivamente su nostra istruzione e sono vincolati da accordi conformi al GDPR (art. 28).',
            '[strong:Autorita competenti:] Su richiesta giudiziaria, ingiunzione amministrativa o obbligo legale, possiamo comunicare i dati alle autorita abilitate.',
            '[strong:Riorganizzazione aziendale:] In caso di fusione, acquisizione, cessione di asset o procedura concorsuale, i vostri dati potrebbero essere trasferiti al soggetto successore, che restera vincolato al rispetto della presente policy.',
          ],
        },
      ],
    },
    {
      title: '6. Trasferimenti fuori dallo SEE',
      blocks: [
        {
          kind: 'p',
          text: 'Alcuni nostri fornitori tecnici possono essere stabiliti o conservare dati fuori dallo Spazio Economico Europeo (SEE), in particolare negli Stati Uniti. In tali casi, ci assicuriamo che tali trasferimenti siano disciplinati da garanzie adeguate:',
        },
        {
          kind: 'ul',
          items: [
            'Decisione di adeguatezza della Commissione Europea (es. paesi riconosciuti con livello di protezione equivalente all\'UE).',
            'Clausole Contrattuali Standard (SCC) adottate dalla Commissione Europea.',
            'EU-US Data Privacy Framework per trasferimenti verso entita statunitensi certificate.',
          ],
        },
        {
          kind: 'p',
          text: 'Potete ottenere una copia delle garanzie applicabili contattando: ' + ADMIN + '.',
        },
      ],
    },
    {
      title: '7. I vostri diritti',
      blocks: [
        {
          kind: 'p',
          text: 'Ai sensi del GDPR (Capitolo III) e, ove applicabile, della LPD svizzera, disponete dei seguenti diritti sui vostri dati personali:',
        },
        {
          kind: 'cards',
          items: [
            {
              title: 'Diritto di accesso (art. 15 GDPR)',
              desc: 'Ottenere conferma che i dati che vi riguardano siano trattati e riceverne copia.',
            },
            {
              title: 'Diritto di rettifica (art. 16)',
              desc: 'Far correggere dati inesatti o completare dati incompleti.',
            },
            {
              title: 'Diritto alla cancellazione (art. 17)',
              desc: 'Richiedere la cancellazione dei vostri dati nei casi previsti dalla legge (diritto all\'oblio).',
            },
            {
              title: 'Diritto alla limitazione (art. 18)',
              desc: 'Limitare temporaneamente il trattamento dei vostri dati in caso di contestazione o durante verifiche.',
            },
            {
              title: 'Diritto alla portabilita (art. 20)',
              desc: 'Ricevere i vostri dati in formato strutturato, di uso comune e leggibile da macchina, oppure richiederne la trasmissione a un altro titolare.',
            },
            {
              title: 'Diritto di opposizione (art. 21)',
              desc: 'Opporvi in qualsiasi momento al trattamento basato su interesse legittimo o al trattamento per finalita di marketing diretto.',
            },
            {
              title: 'Diritto di revoca del consenso',
              desc: 'Revocare il consenso in qualsiasi momento senza pregiudicare la liceita dei trattamenti effettuati prima della revoca.',
            },
            {
              title: 'Diritto a non essere soggetti a decisioni automatizzate (art. 22)',
              desc: 'Non essere soggetti a decisioni con effetti giuridici basate esclusivamente su trattamenti automatizzati.',
            },
          ].map(({ title, desc }) => ({ title, text: desc })),
        },
        {
          kind: 'p',
          text: 'Per esercitare uno di questi diritti, inviate la vostra richiesta a ' + ADMIN + ' allegando, se necessario per la verifica della vostra identita, un documento di riconoscimento. Risponderemo entro un termine massimo di [strong:un mese] (30 giorni di calendario).',
        },
        {
          kind: 'p',
          text: 'Se ritenete che i vostri diritti non siano rispettati, potete presentare un reclamo presso l\'autorita di controllo competente nel vostro paese:',
        },
        {
          kind: 'ul',
          items: [
            '[strong:Francia:] CNIL - cnil.fr',
            '[strong:Belgio:] APD (Autorite de Protection des Donnees) - autoriteprotectiondonnees.be',
            '[strong:Svizzera:] IFPDT (Incaricato federale della protezione dei dati) - edoeb.admin.ch',
            '[strong:Lussemburgo:] CNPD - cnpd.public.lu',
          ],
        },
      ],
    },
    {
      title: '8. Cookie e tecnologie simili',
      blocks: [
        {
          kind: 'p',
          text: "L'applicazione e il sito web utilizzano tecnologie di archiviazione locale. Di seguito i tipi di tracciatori utilizzati:",
        },
        {
          kind: 'table',
          headers: ['Tipo', 'Finalita', 'Consenso richiesto'],
          rows: [
            ['Cookie di sessione', 'Mantenimento della connessione', 'No (strettamente necessario)'],
            ['Preferenze lingua (localStorage)', 'Memorizzare la lingua scelta', 'No (strettamente necessario)'],
            ['Token di autenticazione', 'Accesso persistente (opzione "Ricordami")', 'No (strettamente necessario)'],
            ['Analytics anonimizzati', 'Misurazione aggregata dell\'audience', 'Si (opt-in)'],
            ['Notifiche push', 'Avvisi di prenotazione e nuovi menu', 'Si (opt-in)'],
          ],
        },
        {
          kind: 'p',
          text: "Potete gestire o revocare i vostri consensi in qualsiasi momento dalle impostazioni privacy dell'applicazione. Il rifiuto di alcuni cookie non essenziali non pregiudica l'accesso alle funzionalita principali del Servizio.",
        },
      ],
    },
    {
      title: '9. Geolocalizzazione',
      blocks: [
        {
          kind: 'p',
          text: "La geolocalizzazione e utilizzata esclusivamente per mostrarvi i ristoranti vicini alla vostra posizione attuale. Funziona tramite l'API di geolocalizzazione del vostro sistema operativo (iOS o Android) e richiede la vostra autorizzazione esplicita.",
        },
        {
          kind: 'p',
          text: "[strong:Cosa non facciamo:] non conserviamo la cronologia dei vostri spostamenti, non tracciamo i vostri movimenti in background (anche con app chiusa), non vendiamo i vostri dati di localizzazione a terzi.",
        },
        {
          kind: 'p',
          text: 'Potete revocare in qualsiasi momento l\'accesso alla localizzazione dalle impostazioni del vostro dispositivo. In tal caso, potete inserire manualmente una citta o un indirizzo per cercare ristoranti.',
        },
      ],
    },
    {
      title: '10. Profilazione e decisioni automatizzate',
      blocks: [
        {
          kind: 'p',
          text: 'Utilizziamo i vostri dati di navigazione (ristoranti consultati, ricerche, preferiti) per proporvi suggerimenti personalizzati di ristoranti e piatti del giorno che potrebbero interessarvi. Questo trattamento costituisce profilazione ai sensi dell\'art. 4.4 GDPR.',
        },
        {
          kind: 'p',
          text: 'Questa profilazione non produce [strong:alcun effetto giuridico] ne decisioni significative che vi riguardino. Ha il solo scopo di migliorare la pertinenza delle raccomandazioni mostrate. Potete opporvi in qualsiasi momento contattando ' + ADMIN + '.',
        },
      ],
    },
    {
      title: '11. Sicurezza',
      blocks: [
        {
          kind: 'p',
          text: 'Adottiamo misure tecniche e organizzative adeguate per proteggere i vostri dati da accessi non autorizzati, perdita, alterazione o divulgazione:',
        },
        {
          kind: 'ul',
          items: [
            'Cifratura di tutte le comunicazioni (HTTPS/TLS 1.3).',
            'Hashing delle password con algoritmo bcrypt o Argon2.',
            'Autenticazione a due fattori (2FA) disponibile come opzione.',
            'Accesso ai dati di produzione limitato al personale autorizzato.',
            'Backup cifrati regolari con test di ripristino.',
            'Registrazione e monitoraggio degli accessi ai dati sensibili.',
            'Policy formalizzata di gestione degli incidenti di sicurezza.',
          ],
        },
        {
          kind: 'p',
          text: 'Nonostante queste misure, nessun sistema e infallibile. Vi consigliamo di utilizzare una password forte e unica per il vostro account Plat du Jour.',
        },
      ],
    },
    {
      title: '12. Dati dei minori',
      blocks: [
        {
          kind: 'p',
          text: 'Il Servizio non e destinato ai minori di 16 anni (o all\'eta digitale di consenso applicabile nel vostro paese). Non raccogliamo consapevolmente dati personali di minori al di sotto di tale eta senza il consenso verificabile di un genitore o tutore legale.',
        },
        {
          kind: 'p',
          text: 'Se siete genitore o tutore e ritenete che vostro figlio ci abbia trasmesso dati senza il vostro consenso, contattateci immediatamente a ' + ADMIN + ' affinche procediamo alla loro cancellazione nel piu breve tempo possibile.',
        },
      ],
    },
    {
      title: '13. Notifica in caso di violazione dei dati',
      blocks: [
        {
          kind: 'p',
          text: 'In caso di violazione dei dati personali suscettibile di comportare un rischio per i vostri diritti e le vostre liberta, ci impegniamo a:',
        },
        {
          kind: 'ul',
          items: [
            'Notificare l\'autorita di controllo competente entro [strong:72 ore] dalla rilevazione dell\'incidente (art. 33 GDPR).',
            'Informarvi direttamente, nel piu breve tempo possibile, se la violazione presenta un rischio elevato per i vostri diritti e le vostre liberta (art. 34 GDPR).',
            'Documentare l\'incidente e le misure correttive adottate.',
          ],
        },
      ],
    },
    {
      title: '14. Modifiche della policy',
      blocks: [
        {
          kind: 'p',
          text: 'Questa informativa privacy puo essere aggiornata per riflettere cambiamenti nelle nostre pratiche, nella normativa applicabile o nella nostra infrastruttura tecnica. La data dell\'ultimo aggiornamento e indicata all\'inizio di questo documento.',
        },
        {
          kind: 'p',
          text: 'In caso di modifica sostanziale, vi informeremo via e-mail o tramite notifica in-app almeno [strong:30 giorni prima] dell\'entrata in vigore dei cambiamenti. Il proseguimento dell\'uso del Servizio dopo tale data vale come accettazione della policy aggiornata.',
        },
      ],
    },
  ],
};
