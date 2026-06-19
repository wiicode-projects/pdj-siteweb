import type { LegalDocument } from '../types';

const VERSION = '1.0 — Maggio 2026';
const EFFECTIVE = '4 maggio 2026';
const ADMIN = '[mailto:admin@dgeconcept.ch|admin@dgeconcept.ch]';
const SITE = '[link:https://www.leplatdujour.ch|https://www.leplatdujour.ch]';
const PRIVACY = '[route:/politique-de-confidentialite|Informativa sulla privacy]';
const PRICING = '[route:/#tarifs|pagina Tariffe]';
const ODR = '[link:https://ec.europa.eu/consumers/odr|ec.europa.eu/consumers/odr]';

export const cguDoc: LegalDocument = {
  meta: {
    eyebrow: 'D.G.E. Concept SàRL · www.leplatdujour.ch',
    title: "Condizioni Generali d'Uso",
    subtitle: 'Piattaforma Le Plat du Jour',
    version: VERSION,
    effectiveDate: EFFECTIVE,
    footerLine: `Le Plat du Jour · D.G.E. Concept SàRL · CGU Versione ${VERSION}`,
  },
  toc: {
    label: 'Indice — CGU',
    items: [
      'Preambolo',
      'Definizioni',
      'Oggetto e ambito',
      "Accesso e creazione dell'account",
      'Obblighi dei Ristoranti',
      'Obblighi dei Clienti',
      'Limitazione di responsabilità',
      'Dati personali',
      'Proprietà intellettuale',
      'Disponibilità e manutenzione',
      'Legge applicabile',
      'Modifiche delle CGU',
      'Disposizioni varie',
    ],
  },
  sections: [
    {
      title: 'Preambolo',
      blocks: [
        {
          kind: 'p',
          text: `Le presenti Condizioni Generali d'Uso (di seguito "CGU") disciplinano l'accesso e l'utilizzo della piattaforma online Le Plat du Jour, accessibile all'indirizzo ${SITE} (di seguito "la Piattaforma"), edita da D.G.E. Concept SàRL, con sede ad Arzier-Le Muids, cantone di Vaud, Svizzera, iscritta al Registro di commercio con numero IDE CHE-456.471.738 (di seguito "l'Editore").`,
        },
        {
          kind: 'p',
          text: "Creando un account sulla Piattaforma, sia esso un account Ristorante o un account Cliente, l'Utente riconosce di aver letto, compreso e accettato integralmente le presenti CGU. Tale accettazione è registrata elettronicamente con marca temporale e costituisce prova opponibile.",
        },
        {
          kind: 'p',
          text: "La Piattaforma è un marketplace che mette in relazione esercizi di ristorazione (di seguito \"Ristoranti\") che propongono il loro piatto del giorno e clienti finali privati (di seguito \"Clienti\") che desiderano ordinare online. L'Editore agisce in qualità di intermediario tecnico e non interviene nel rapporto contrattuale tra Ristorante e Cliente per la fornitura del pasto.",
        },
      ],
    },
    {
      title: 'Art. 1 — Definizioni',
      blocks: [
        { kind: 'p', text: 'Ai sensi delle presenti CGU, i seguenti termini indicano:' },
        {
          kind: 'ul',
          items: [
            '[strong:Piattaforma:] il servizio Le Plat du Jour accessibile online all’indirizzo https://www.leplatdujour.ch, gestito da D.G.E. Concept SàRL.',
            "[strong:Editore:] D.G.E. Concept SàRL, società a responsabilità limitata di diritto svizzero, Arzier-Le Muids, cantone di Vaud, Svizzera, IDE CHE-456.471.738, gestore della Piattaforma.",
            "[strong:Utente:] qualsiasi persona fisica o giuridica che abbia creato un account sulla Piattaforma, sia come Ristorante sia come Cliente.",
            "[strong:Ristorante:] qualsiasi esercizio professionale di ristorazione titolare di un abbonamento attivo sulla Piattaforma, autorizzato a pubblicare le proprie offerte di piatti del giorno.",
            "[strong:Cliente:] qualsiasi persona fisica di almeno 18 anni che abbia creato un account sulla Piattaforma e vi effettui ordini.",
            '[strong:Offerta:] la pubblicazione da parte di un Ristorante di uno o più piatti del giorno disponibili per ordinazione tramite la Piattaforma.',
            '[strong:Ordine:] l’atto con cui un Cliente seleziona un’Offerta e la conferma tramite la Piattaforma.',
            "[strong:Abbonamento Ristorante:] il contratto di accesso a pagamento che consente a un Ristorante di pubblicare le proprie Offerte sulla Piattaforma, sottoscritto secondo le formule disponibili.",
            "[strong:Account:] l'area personale protetta creata dall'Utente al momento della registrazione, che dà accesso alle funzionalità della Piattaforma.",
          ],
        },
      ],
    },
    {
      title: 'Art. 2 — Oggetto e ambito della Piattaforma',
      blocks: [
        { kind: 'h3', text: "2.1 — Che cos'è Le Plat du Jour" },
        {
          kind: 'p',
          text: "Le Plat du Jour è una piattaforma online di intermediazione che consente ai Ristoranti di pubblicare le proprie offerte di piatti del giorno e ai Clienti di consultarle e ordinarle. L'Editore fornisce l'infrastruttura tecnica che consente tale intermediazione.",
        },
        { kind: 'h3', text: "2.2 — Che cosa Le Plat du Jour non è" },
        { kind: 'p', text: 'La Piattaforma non è:' },
        {
          kind: 'ul',
          items: [
            'un ristoratore, un servizio catering o un prestatore alimentare;',
            "un servizio di consegna a domicilio — nessuna prestazione logistica è fornita dall'Editore;",
            'un garante della qualità, composizione, allergeni o conformità sanitaria dei piatti proposti dai Ristoranti;',
            'una parte del contratto di vendita concluso tra il Ristorante e il Cliente.',
          ],
        },
        { kind: 'h3', text: '2.3 — Ruolo di intermediario tecnico' },
        {
          kind: 'p',
          text: "L'Editore agisce esclusivamente in qualità di intermediario tecnico. Il contratto di vendita relativo a ciascun ordine è concluso direttamente tra il Ristorante e il Cliente. L'Editore non può essere ritenuto responsabile dell'esecuzione o della mancata esecuzione di tale contratto.",
        },
        { kind: 'h3', text: '2.4 — Area geografica' },
        {
          kind: 'p',
          text: "La Piattaforma è disponibile su tutto il territorio svizzero. L'Editore si riserva il diritto di estendere o limitare in qualsiasi momento la copertura geografica.",
        },
      ],
    },
    {
      title: "Art. 3 — Accesso alla Piattaforma e creazione dell'account",
      blocks: [
        { kind: 'h3', text: "3.1 — Condizioni di accesso" },
        {
          kind: 'p',
          text: "L'accesso alla Piattaforma come Cliente è riservato alle persone fisiche di almeno 18 anni. L'accesso come Ristorante è riservato alle persone giuridiche o fisiche che agiscono nell'ambito di un'attività professionale di ristorazione debitamente autorizzata.",
        },
        {
          kind: 'p',
          text: "Creando un account, l'Utente garantisce che le informazioni fornite sono esatte, complete e aggiornate. Qualsiasi falsa dichiarazione è sotto la sola responsabilità dell'Utente.",
        },
        { kind: 'h3', text: "3.2 — Procedura di creazione dell'account" },
        { kind: 'p', text: "La creazione di un account avviene esclusivamente online secondo le seguenti fasi:" },
        {
          kind: 'ol',
          items: [
            'Inserimento delle informazioni identificative (indirizzo email, password, informazioni profilo).',
            'Accettazione delle presenti CGU (casella obbligatoria — accettazione registrata con marca temporale).',
            "Convalida dell'indirizzo email tramite il link di conferma inviato automaticamente.",
          ],
        },
        { kind: 'p', text: "L'account è attivo a partire dalla convalida dell'indirizzo email." },
        { kind: 'h3', text: "3.3 — Gestione e sicurezza dell'account" },
        {
          kind: 'p',
          text: `L'Utente è l'unico responsabile della riservatezza delle proprie credenziali di accesso e di ogni attività effettuata dal proprio account. In caso di compromissione o utilizzo non autorizzato, l'Utente si impegna a informare immediatamente l'Editore all'indirizzo ${ADMIN}.`,
        },
        { kind: 'h3', text: "3.4 — Sospensione e chiusura dell'account" },
        {
          kind: 'p',
          text: "L'Editore si riserva il diritto di sospendere o chiudere qualsiasi account in caso di violazione delle presenti CGU, uso fraudolento, abusivo o contrario all'ordine pubblico, senza preavviso né indennizzo.",
        },
        {
          kind: 'p',
          text: `L'Utente può chiudere il proprio account in qualsiasi momento inviando una richiesta a ${ADMIN}. La chiusura dell'account Ristorante non dà diritto al rimborso del periodo di abbonamento in corso.`,
        },
      ],
    },
    {
      title: 'Art. 4 — Obblighi dei Ristoranti',
      blocks: [
        { kind: 'h3', text: '4.1 — Conformità normativa' },
        { kind: 'p', text: 'Il Ristorante è il solo ed esclusivo responsabile di:' },
        {
          kind: 'ul',
          items: [
            "detenere tutte le autorizzazioni, licenze e patenti necessarie all'esercizio dell'attività di ristorazione (autorizzazione cantonale/comunale, patente di ristoratore, ecc.);",
            'conformità delle proprie preparazioni culinarie alle norme di igiene e sicurezza alimentare applicabili in Svizzera (ODAl, HACCP, ecc.);',
            'esattezza delle informazioni pubblicate sulla Piattaforma, in particolare descrizioni dei piatti, prezzi, allergeni e disponibilità;',
            'rispetto degli obblighi legali in materia di etichettatura alimentare e dichiarazione degli allergeni.',
          ],
        },
        { kind: 'h3', text: '4.2 — Responsabilità esclusiva del Ristorante' },
        {
          kind: 'callout',
          variant: 'warning',
          text: "[strong:Punto critico —] Il Ristorante è il solo responsabile della qualità, composizione, allergeni e conformità sanitaria dei piatti proposti. In caso di controversia legata a un ordine (non conformità, intossicazione, errore sugli allergeni, ecc.), la responsabilità ricade esclusivamente sul Ristorante. L'Editore non potrà in alcun caso essere chiamato in causa.",
        },
        { kind: 'h3', text: '4.3 — Obblighi di pubblicazione' },
        { kind: 'p', text: 'Il Ristorante si impegna a:' },
        {
          kind: 'ul',
          items: [
            'pubblicare informazioni esatte, aggiornate e non fuorvianti sulle proprie Offerte;',
            'aggiornare in tempo reale le disponibilità e ritirare immediatamente ogni Offerta non più onorabile;',
            'indicare in modo chiaro e completo gli allergeni presenti nelle proprie preparazioni;',
            "rispettare i prezzi pubblicati sulla Piattaforma al momento in cui l'Ordine è effettuato dal Cliente.",
          ],
        },
        { kind: 'h3', text: '4.4 — Usi vietati' },
        { kind: 'p', text: 'Sono in particolare vietati:' },
        {
          kind: 'ul',
          items: [
            'la pubblicazione di informazioni false, fuorvianti o suscettibili di indurre in errore il Cliente;',
            "qualsiasi utilizzo della Piattaforma per finalità non connesse all'attività di ristorazione;",
            "qualsiasi tentativo di aggirare i meccanismi della Piattaforma o di accedere senza autorizzazione ad altri account.",
          ],
        },
      ],
    },
    {
      title: 'Art. 5 — Obblighi dei Clienti',
      blocks: [
        { kind: 'h3', text: "5.1 — Condizioni d'ordine" },
        { kind: 'p', text: 'Il Cliente si impegna a:' },
        {
          kind: 'ul',
          items: [
            "fornire informazioni identificative esatte e aggiornate al momento della creazione dell'account;",
            'effettuare solo ordini seri e onorare ogni ordine confermato;',
            'rispettare le condizioni specifiche definite dal Ristorante (orari, modalità di ritiro, ecc.);',
            'segnalare senza ritardo qualsiasi problema legato a un ordine direttamente al Ristorante interessato.',
          ],
        },
        { kind: 'h3', text: '5.2 — Responsabilità del Cliente' },
        {
          kind: 'p',
          text: 'Il Cliente è il solo responsabile della verifica delle informazioni relative alle Offerte prima di effettuare un ordine, in particolare allergeni, composizione e condizioni di ritiro. In caso di dubbio, il Cliente è invitato a contattare direttamente il Ristorante.',
        },
      ],
    },
    {
      title: "Art. 6 — Limitazione di responsabilità dell'Editore",
      blocks: [
        { kind: 'h3', text: '6.1 — Esclusioni di responsabilità' },
        {
          kind: 'p',
          text: "Nella misura massima consentita dal diritto svizzero applicabile, l'Editore esclude ogni responsabilità per:",
        },
        {
          kind: 'ul',
          items: [
            "danni diretti o indiretti derivanti dall'uso o dall'impossibilità di usare la Piattaforma;",
            "qualsiasi controversia legata all'esecuzione di un ordine tra un Ristorante e un Cliente (qualità, tempi, allergeni, mancata consegna, ecc.);",
            'esattezza, completezza o aggiornamento delle informazioni pubblicate dai Ristoranti;',
            'qualsiasi interruzione del servizio dovuta a forza maggiore, manutenzione o guasto tecnico;',
            "qualsiasi danno derivante da un utilizzo fraudolento o abusivo delle credenziali di accesso di un Utente.",
          ],
        },
        { kind: 'h3', text: "6.2 — Limitazione dell'importo" },
        {
          kind: 'p',
          text: "Nei casi in cui la responsabilità dell'Editore non possa essere totalmente esclusa, essa è espressamente limitata, per quanto riguarda i Ristoranti, all'importo dell'abbonamento effettivamente pagato per il periodo in corso al momento del fatto generatore del danno.",
        },
      ],
    },
    {
      title: 'Art. 7 — Dati personali e riservatezza',
      blocks: [
        { kind: 'h3', text: '7.1 — Dati raccolti' },
        {
          kind: 'p',
          text: "Nell'ambito dell'utilizzo della Piattaforma, l'Editore raccoglie e tratta i seguenti dati:",
        },
        {
          kind: 'ul',
          items: [
            "[strong:Dati identificativi:] indirizzo email, nome, cognome (per i Clienti); ragione sociale, indirizzo, email professionale (per i Ristoranti).",
            "[strong:Dati d'uso:] storico ordini, offerte pubblicate, interazioni con la Piattaforma.",
            '[strong:Dati tecnici:] indirizzo IP, browser, log di accesso.',
            '[strong:Dati di pagamento (solo Ristoranti):] trattati esclusivamente dai prestatori di pagamento — non memorizzati dall’Editore.',
          ],
        },
        { kind: 'h3', text: '7.2 — Finalità del trattamento' },
        {
          kind: 'p',
          text: 'I dati raccolti sono trattati per le seguenti finalità: gestione account e accessi, messa in relazione Ristoranti/Clienti, trattamento ordini, miglioramento della Piattaforma, invio di comunicazioni legate al servizio.',
        },
        { kind: 'h3', text: '7.3 — Diritti degli Utenti' },
        {
          kind: 'p',
          text: `In conformità alla nuova LPD svizzera (e al GDPR per gli Utenti residenti nell'UE), ogni Utente dispone dei diritti di accesso, rettifica, cancellazione, portabilità e opposizione sui propri dati personali, esercitabili a ${ADMIN}. Per maggiori dettagli, consulta la nostra ${PRIVACY}.`,
        },
        { kind: 'h3', text: '7.4 — Conservazione e hosting' },
        {
          kind: 'p',
          text: "I dati sono ospitati in Svizzera e/o nell'Unione Europea. I dati personali sono conservati per la durata dell'account attivo più dodici (12) mesi dopo la chiusura dell'account, salvo obblighi legali contrari.",
        },
        { kind: 'h3', text: '7.5 — Riservatezza' },
        {
          kind: 'p',
          text: "I dati degli Utenti non sono venduti, noleggiati né ceduti a terzi per finalità commerciali. Possono essere trasmessi a fornitori tecnici vincolati da obblighi di riservatezza e che agiscono esclusivamente per conto dell'Editore.",
        },
      ],
    },
    {
      title: 'Art. 8 — Proprietà intellettuale',
      blocks: [
        {
          kind: 'p',
          text: 'La Piattaforma Le Plat du Jour, la sua interfaccia, i suoi algoritmi, le sue banche dati e tutti i suoi contenuti propri sono di proprietà esclusiva di D.G.E. Concept SàRL e sono protetti dal diritto svizzero e internazionale della proprietà intellettuale.',
        },
        {
          kind: 'p',
          text: "I contenuti pubblicati dai Ristoranti (descrizioni, foto) restano di proprietà dei rispettivi autori. Pubblicandoli sulla Piattaforma, il Ristorante concede all'Editore un diritto d'uso non esclusivo, gratuito, per le esigenze del servizio (visualizzazione, indicizzazione, promozione della Piattaforma).",
        },
        {
          kind: 'p',
          text: "L'Utente beneficia di un diritto di accesso e utilizzo personale, non esclusivo e non trasferibile delle funzionalità della Piattaforma.",
        },
      ],
    },
    {
      title: 'Art. 9 — Disponibilità e manutenzione',
      blocks: [
        {
          kind: 'p',
          text: "L'Editore si adopera per garantire la disponibilità della Piattaforma 24 ore su 24 e 7 giorni su 7, senza poter garantire un accesso ininterrotto. Possono verificarsi interruzioni per manutenzione, aggiornamenti o forza maggiore. L'Editore informerà gli Utenti, per quanto possibile, delle operazioni di manutenzione pianificate. Nessun livello di servizio garantito (SLA) è contrattualmente impegnato.",
        },
      ],
    },
    {
      title: 'Art. 10 — Legge applicabile e foro competente',
      blocks: [
        {
          kind: 'p',
          text: "Le presenti CGU sono disciplinate dal diritto svizzero, in particolare dal Codice delle Obbligazioni (CO) e dalla Legge sulla protezione dei dati (nLPD). Qualsiasi controversia tra professionisti sarà sottoposta al foro esclusivo del Tribunale distrettuale de La Côte (Nyon, cantone di Vaud, Svizzera).",
        },
        {
          kind: 'p',
          text: `Per gli Utenti residenti nell'Unione Europea che agiscono in qualità di consumatori, si applicano le regole imperative di competenza del diritto dell'UE. La piattaforma di risoluzione online delle controversie della Commissione Europea è accessibile a: ${ODR}.`,
        },
      ],
    },
    {
      title: 'Art. 11 — Modifiche delle CGU',
      blocks: [
        {
          kind: 'p',
          text: "L'Editore si riserva il diritto di modificare le presenti CGU in qualsiasi momento. In caso di modifica sostanziale, l'Utente sarà informato via email con un preavviso di trenta (30) giorni. La prosecuzione dell'uso della Piattaforma dopo la scadenza del termine vale come accettazione delle nuove CGU. In caso di rifiuto, l'Utente può chiudere il proprio account senza costi prima della data di entrata in vigore.",
        },
      ],
    },
    {
      title: 'Art. 12 — Disposizioni varie',
      blocks: [
        { kind: 'h3', text: '12.1 — Nullità parziale' },
        {
          kind: 'p',
          text: 'Se una qualsiasi disposizione è dichiarata nulla o inapplicabile, le altre restano pienamente in vigore.',
        },
        { kind: 'h3', text: '12.2 — Mancata rinuncia' },
        {
          kind: 'p',
          text: "Il fatto che l'Editore non faccia valere una disposizione non può essere interpretato come rinuncia a invocarla successivamente.",
        },
        { kind: 'h3', text: '12.3 — Contatto' },
        {
          kind: 'p',
          text: `Per qualsiasi domanda relativa alle presenti CGU: ${ADMIN} — D.G.E. Concept SàRL, Arzier-Le Muids, cantone di Vaud, Svizzera — [link:https://www.leplatdujour.ch|www.leplatdujour.ch].`,
        },
      ],
    },
  ],
};

export const cgvDoc: LegalDocument = {
  meta: {
    title: 'Condizioni Generali di Vendita',
    subtitle: 'Piattaforma Le Plat du Jour — Abbonamenti Ristoranti',
    version: VERSION,
    effectiveDate: EFFECTIVE,
    footerLine: `Le Plat du Jour · D.G.E. Concept SàRL · CGV Versione ${VERSION}`,
  },
  toc: {
    label: 'Indice — CGV',
    items: [
      'Preambolo',
      'Oggetto',
      'Offerte, tariffe e valute',
      'Ordine e sottoscrizione',
      'Pagamento',
      'Durata, rinnovo e recesso',
      'Politica di non rimborso',
      'Diritto di recesso',
      'Servizio e supporto',
      "Cessione dell'abbonamento",
      'Legge applicabile',
      'Disposizioni finali',
    ],
  },
  sections: [
    {
      title: 'Preambolo',
      blocks: [
        {
          kind: 'p',
          text: "Le presenti Condizioni Generali di Vendita (di seguito \"CGV\") disciplinano l'insieme delle transazioni commerciali concluse tra D.G.E. Concept SàRL, Arzier-Le Muids, cantone di Vaud, Svizzera, IDE CHE-456.471.738, editrice della piattaforma Le Plat du Jour (di seguito \"il Venditore\"), e qualsiasi esercizio di ristorazione che sottoscriva un abbonamento a pagamento (di seguito \"l'Acquirente\").",
        },
        {
          kind: 'p',
          text: "Qualsiasi sottoscrizione a un abbonamento a pagamento comporta l'accettazione piena e integrale delle presenti CGV, congiuntamente alle Condizioni Generali d'Uso. Tale accettazione è registrata elettronicamente con marca temporale e costituisce prova opponibile.",
        },
        {
          kind: 'p',
          text: 'Le presenti CGV disciplinano esclusivamente il rapporto commerciale tra il Venditore e i Ristoranti abbonati. Non si applicano ai Clienti finali, il cui rapporto con la Piattaforma è disciplinato dalle CGU.',
        },
      ],
    },
    {
      title: 'Art. 1 — Oggetto',
      blocks: [
        {
          kind: 'p',
          text: "Le presenti CGV hanno lo scopo di definire le condizioni e le modalità di vendita degli abbonamenti che danno accesso alle funzionalità di pubblicazione e visibilità sulla piattaforma Le Plat du Jour. Il servizio venduto consiste nell'accesso a un'infrastruttura digitale di intermediazione che consente ai Ristoranti di pubblicare le proprie offerte di piatti del giorno e renderle accessibili ai Clienti.",
        },
      ],
    },
    {
      title: 'Art. 2 — Offerte, tariffe e valute',
      blocks: [
        { kind: 'h3', text: '2.1 — Formule disponibili' },
        {
          kind: 'p',
          text: `Le Plat du Jour propone diverse formule di abbonamento mensile adatte alle esigenze dei Ristoranti. Il dettaglio completo delle formule e delle funzionalità incluse in ciascun piano è disponibile sulla ${PRICING} della Piattaforma, che fa fede.`,
        },
        { kind: 'p', text: 'Le formule disponibili e le relative tariffe sono le seguenti:' },
        {
          kind: 'subscriptionPricingTable',
          headers: ['Formula', 'Tariffa', 'Funzionalità principali'],
          targetType: 'RESTAURANT',
        },
        { kind: 'h3', text: '2.2 — Valuta' },
        {
          kind: 'p',
          text: 'Gli abbonamenti sono fatturati in franchi svizzeri (CHF). Il prezzo applicabile è quello visualizzato al momento della sottoscrizione.',
        },
        { kind: 'h3', text: '2.3 — Prezzi e IVA' },
        {
          kind: 'p',
          text: "D.G.E. Concept SàRL è un'impresa di diritto svizzero non soggetta a IVA alla data di entrata in vigore delle presenti CGV. I prezzi visualizzati si intendono pertanto comprensivi di imposte secondo l'aliquota applicabile. In caso di successivo assoggettamento all'IVA, le tariffe saranno adeguate conformemente all'Articolo 2.4.",
        },
        { kind: 'h3', text: '2.4 — Modifiche tariffarie' },
        {
          kind: 'p',
          text: "Il Venditore si riserva il diritto di modificare le proprie tariffe con un preavviso minimo di trenta (30) giorni comunicato via email all'indirizzo registrato in fase di sottoscrizione. L'Acquirente può recedere dall'abbonamento senza costi se rifiuta le nuove tariffe, prima della data di entrata in vigore.",
        },
      ],
    },
    {
      title: 'Art. 3 — Ordine e sottoscrizione',
      blocks: [
        { kind: 'h3', text: '3.1 — Procedura di sottoscrizione' },
        {
          kind: 'p',
          text: 'La sottoscrizione di un abbonamento avviene esclusivamente online su www.leplatdujour.ch, secondo i seguenti passaggi:',
        },
        {
          kind: 'ol',
          items: [
            'Creazione di un account Ristorante o accesso a un account esistente.',
            "Selezione della formula di abbonamento desiderata.",
            "Accettazione delle presenti CGV e delle CGU (casella obbligatoria — accettazione registrata con marca temporale).",
            'Inserimento e convalida delle informazioni di pagamento.',
            "Conferma della sottoscrizione via email all'indirizzo registrato.",
          ],
        },
        { kind: 'h3', text: '3.2 — Formazione del contratto' },
        {
          kind: 'p',
          text: "Il contratto di vendita si considera concluso alla data di ricezione da parte dell'Acquirente dell'email di conferma della sottoscrizione. Tale email riepiloga la formula sottoscritta, l'importo fatturato e il periodo di abbonamento.",
        },
        { kind: 'h3', text: '3.3 — Ambito professionale' },
        {
          kind: 'p',
          text: "Le Plat du Jour è un servizio destinato esclusivamente ai professionisti della ristorazione. Sottoscrivendo, l'Acquirente dichiara di agire nell'ambito della propria attività professionale e di disporre di tutte le autorizzazioni necessarie all'esercizio della propria attività.",
        },
      ],
    },
    {
      title: 'Art. 4 — Pagamento',
      blocks: [
        { kind: 'h3', text: '4.1 — Metodi di pagamento accettati' },
        { kind: 'p', text: 'I pagamenti sono accettati tramite i seguenti metodi:' },
        {
          kind: 'ul',
          items: [
            '[strong:TWINT] — disponibile per pagamenti in CHF dalla Svizzera.',
            '[strong:Carta bancaria] (Visa, Mastercard) tramite terminale MyPos — elaborazione sicura PCI-DSS.',
            '[strong:PayPal.]',
            "[strong:Bonifico bancario] — le coordinate bancarie sono comunicate dopo la conferma dell'ordine; l'accesso alla Piattaforma è attivato al ricevimento del bonifico.",
          ],
        },
        {
          kind: 'callout',
          variant: 'info',
          text: "[strong:Sicurezza dei pagamenti —] D.G.E. Concept SàRL non accede ad alcun dato bancario né numero di carta. I pagamenti con carta sono trattati da un prestatore certificato PCI-DSS. Nessun dato bancario è memorizzato dall'Editore.",
        },
        { kind: 'h3', text: '4.2 — Fatturazione' },
        {
          kind: 'p',
          text: "A ogni transazione viene emessa automaticamente una ricevuta o una fattura via email. L'Acquirente può consultare lo storico dei pagamenti dal proprio pannello di controllo.",
        },
        { kind: 'h3', text: '4.3 — Mancato pagamento' },
        {
          kind: 'p',
          text: "In caso di mancato o rifiutato pagamento, l'Acquirente è informato via email. È concesso un termine di dieci (10) giorni per regolarizzare la situazione. Trascorso tale termine, l'accesso alle funzionalità di pubblicazione è sospeso fino alla regolarizzazione.",
        },
      ],
    },
    {
      title: 'Art. 5 — Durata, rinnovo e recesso',
      blocks: [
        { kind: 'h3', text: "5.1 — Durata dell'abbonamento" },
        {
          kind: 'p',
          text: "Gli abbonamenti sono sottoscritti su base mensile, senza impegno minimo di durata. L'abbonamento decorre dalla data di convalida del pagamento e dura fino alla fine del mese di calendario in corso.",
        },
        { kind: 'h3', text: '5.2 — Rinnovo' },
        {
          kind: 'p',
          text: "L'abbonamento non si rinnova automaticamente. Alla scadenza, l'accesso alle funzionalità di pubblicazione termina. L'Acquirente riceve un'email di promemoria prima della fine del periodo per consentirgli di sottoscrivere, se lo desidera, una nuova mensilità.",
        },
        { kind: 'h3', text: "5.3 — Recesso da parte dell'Acquirente" },
        {
          kind: 'p',
          text: "L'Acquirente può interrompere il proprio abbonamento in qualsiasi momento. Non è riconosciuto alcun rimborso per la mensilità in corso, indipendentemente dalla data di recesso o dal livello di utilizzo. L'accesso alle funzionalità resta attivo fino alla fine del periodo mensile inizialmente sottoscritto.",
        },
        { kind: 'h3', text: '5.4 — Recesso da parte del Venditore' },
        {
          kind: 'p',
          text: "Il Venditore può sospendere o risolvere l'accesso di un Acquirente senza preavviso in caso di grave violazione delle CGU o delle presenti CGV, di uso fraudolento o abusivo comprovato, o di mancato pagamento dopo il periodo di tolleranza definito all'Articolo 4.3. In caso di risoluzione da parte del Venditore per motivo non imputabile all'Acquirente, viene rimborsato il pro-rata dei giorni non usufruiti.",
        },
        { kind: 'h3', text: '5.5 — Fine del servizio' },
        {
          kind: 'p',
          text: "Nell'ipotesi in cui il Venditore decida di cessare l'esercizio della Piattaforma, gli Acquirenti con abbonamento attivo saranno informati via email con un preavviso di novanta (90) giorni. Il pro-rata dei giorni non usufruiti sarà rimborsato.",
        },
      ],
    },
    {
      title: 'Art. 6 — Politica di non rimborso',
      blocks: [
        {
          kind: 'callout',
          variant: 'warning',
          text: '[strong:Politica rigorosa di non rimborso —] Qualsiasi mensilità versata è definitivamente acquisita al Venditore, salvo i casi espressamente previsti agli Articoli 5.4 e 5.5. Il mese è dovuto per intero, indipendentemente dalla data di recesso durante il periodo.',
        },
        { kind: 'p', text: 'Non è concesso alcun rimborso per:' },
        {
          kind: 'ul',
          items: [
            'una mensilità in corso, qualunque sia la data di recesso;',
            "il mancato utilizzo parziale o totale delle funzionalità incluse nell'abbonamento;",
            "un cambiamento della situazione professionale o delle esigenze dell'Acquirente;",
            'un’insoddisfazione relativa al servizio.',
          ],
        },
        {
          kind: 'p',
          text: `A titolo commerciale e in buona fede, il Venditore si impegna a esaminare ogni richiesta di rimborso presentata entro quarantotto (48) ore dalla prima sottoscrizione, in caso di comprovata e documentata impossibilità tecnica di accesso al servizio. Tali richieste devono essere inviate a ${ADMIN}.`,
        },
      ],
    },
    {
      title: 'Art. 7 — Diritto di recesso',
      blocks: [
        {
          kind: 'p',
          text: "Conformemente all'articolo 16 della direttiva europea 2011/83/UE, il diritto di recesso di 14 giorni non si applica ai contenuti digitali la cui esecuzione è iniziata prima della scadenza del termine di recesso, con il previo consenso espresso dell'Acquirente.",
        },
        {
          kind: 'p',
          text: "Sottoscrivendo e accedendo immediatamente alle funzionalità della Piattaforma, l'Acquirente riconosce che il servizio digitale è fornito già dalla conferma del pagamento, con conseguente rinuncia al diritto di recesso. Per gli Acquirenti che agiscono in ambito professionale, il diritto di recesso del consumatore non è applicabile.",
        },
      ],
    },
    {
      title: 'Art. 8 — Servizio e supporto',
      blocks: [
        { kind: 'h3', text: '8.1 — Disponibilità' },
        {
          kind: 'p',
          text: "Il Venditore si adopera per garantire la disponibilità della Piattaforma 24 ore su 24 e 7 giorni su 7. Nessun livello di servizio garantito (SLA) è contrattualmente impegnato. Possono verificarsi interruzioni per manutenzione, aggiornamenti o forza maggiore, senza diritto a indennizzo.",
        },
        { kind: 'h3', text: '8.2 — Supporto' },
        {
          kind: 'p',
          text: `Il supporto è accessibile via email a ${ADMIN}. Il Venditore si impegna a fornire una risposta entro due (2) giorni lavorativi.`,
        },
      ],
    },
    {
      title: "Art. 9 — Cessione dell'abbonamento",
      blocks: [
        {
          kind: 'p',
          text: `L'abbonamento è personale e nominativo. Non può essere ceduto o condiviso senza previo accordo scritto del Venditore. In caso di cessione d'attività, il trasferimento può essere valutato su richiesta a ${ADMIN}.`,
        },
      ],
    },
    {
      title: 'Art. 10 — Legge applicabile e giurisdizione',
      blocks: [
        {
          kind: 'p',
          text: 'Le presenti CGV sono disciplinate dal diritto svizzero (Codice delle Obbligazioni). Qualsiasi controversia tra professionisti sarà sottoposta al foro esclusivo del Tribunale distrettuale de La Côte (Nyon, cantone di Vaud, Svizzera).',
        },
        {
          kind: 'p',
          text: `Per gli Acquirenti residenti nell'Unione Europea e che agiscono in qualità di consumatori, si applicano le regole imperative di competenza del diritto dell'UE. La piattaforma di risoluzione online delle controversie della Commissione Europea è accessibile a: ${ODR}.`,
        },
      ],
    },
    {
      title: 'Art. 11 — Disposizioni finali',
      blocks: [
        { kind: 'h3', text: '11.1 — Prevalenza delle CGV' },
        {
          kind: 'p',
          text: 'In caso di contraddizione tra le presenti CGV e qualsiasi altro documento commerciale, prevalgono le presenti CGV, salvo diverso accordo scritto espresso del Venditore.',
        },
        { kind: 'h3', text: '11.2 — Nullità parziale' },
        {
          kind: 'p',
          text: 'Se una clausola è dichiarata nulla o inapplicabile, le altre clausole restano pienamente in vigore.',
        },
        { kind: 'h3', text: '11.3 — Archiviazione e contatto' },
        {
          kind: 'p',
          text: `Le presenti CGV sono archiviate per versione e accessibili su richiesta a ${ADMIN} — D.G.E. Concept SàRL, Arzier-Le Muids, cantone di Vaud, Svizzera.`,
        },
      ],
    },
  ],
};
