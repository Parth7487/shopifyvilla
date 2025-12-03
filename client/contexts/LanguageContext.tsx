import { createContext, useContext, useState, ReactNode } from "react";

type Language = "NO" | "EN";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const translations: Record<Language, Record<string, string>> = {
  NO: {
    "banner.text":
      "Håndplukket mediterrane design • Håndpakket med omhu • Laget i Europa",
    "nav.home": "Hjem",
    "nav.products": "Produkter",
    "nav.about": "Om oss",
    "nav.contact": "Kontakt",
    "inspiration.label": "Inspirasjonen",
    "inspiration.heading": "Inspirasjonen",
    "inspiration.intro":
      "For alle som drømmer om å ta med seg følelsen av varme, solrike Middelhavsfeeling hjem — Velkommen til VillaBella.",
    "inspiration.p1":
      "Vi i Skandinavia elsker å reise til Middelhavet for å finne solen som varmer litt dypere og roen som får skuldrene våre til å slappe av. Men så drar vi hjem til den grå hverdagen, og følelsen forsvinner så fort.",
    "inspiration.p2":
      "VillaBella inviterer deg inn i et univers hvor denne følelsen får lov å bli, gjennom våre design som bærer mosaikkmønstre og dyp inspirasjon fra Middelhavsånden.",
    "inspiration.cta": "Lær historien vår",
    "riviera.label": "Riviera Collection",
    "riviera.heading": "Utforsk Riviera Kolleksjonen",
    "riviera.description":
      "Håndlagde mosaikkmønstre inspirert av antikk middelhavskunst, reimaginert for det moderne hjemmet.",
    "product.cushionSize": "50x50cm pute",
    "product.price": "599",
    "riviera.special.two": "Kjøp 2 for",
    "riviera.special.two_price": "1099",
    "riviera.special.three": "Kjøp 3 for",
    "riviera.special.three_price": "1549",
    "riviera.specialDesc":
      "Velg med eller uten innerpute fra norsk dun — legg til ekstra komfort eller spar med bare putehyllen.",
    "riviera.shop": "Kjøp Kolleksjonen",
    "riviera.specialLabel": "Spesialtilbud",
    "mediterranean.heading":
      "VillaBella – fordi hjemmet ditt fortjener mer enn minimalisme.",
    "mediterranean.description":
      "I en verden dominert av minimalistisk estetikk, inviterer VillaBella deg til å søke etter det ekstra. Vi tror at et vakkert hjem forteller historier, vekker følelser, og reflekterer dine drømmer. Våre håndlagde mosaikkputer er en invitasjon til det varme, solrike og kulturelt rike livet ved Middelhavet.",
    "mediterranean.newsletterSubheading":
      "Bli en del av vår mediterrane sirkel og motta eksklusive tilbud.",
    "artist.label": "Designet av Jelena",
    "artist.heading": "Møt kunstneren",
    "artist.p1":
      "VillaBella er dypt inspirert av den tidløse kvaliteten som mosaikker utstråler. Det er derfor vi har fått hjelp fra Jelena Zivkovic, en dyktig mosaikkkünstner.",
    "artist.p2":
      "Motivene er designet og sammensatt av tusenvis av små mosaikk-biter. Produktene er trykt for å oppnå det mest detaljerte resultatet.",
    "artist.quote":
      "Denne kolleksjonen ble født fra min livslange kjærlighet til mosaikk-fortelling og den varme, symbolske verden av middelhavskunst. Som kunstner formet av både tradisjonell ikonografi og imaginativ maling, inspireres jeg av symboler som avslører seg langsomt. I disse verkene ville jeg fange tidløshet, hvor mytologi, natur og minne blandes inn i en rolig, lysende atmosfære.",
    "artist.cta": "Les Historien",
    "cta.heading": "Klar til å omforme ditt rom?",
    "cta.subheading": "Oppdag din mediterrane drøm",
    "cta.description":
      "Utforsk vår komplette samling av håndlagde putehyller, hver som forteller en historie om middelhavskunst og nordisk håndverk.",
    "cta.shop": "Handle nå",
    "cta.learn": "Lær mer",
    "hero.cta": "Utforsk Riviera",
    "newsletter.heading": "Bli med på reisen",
    "newsletter.placeholder": "Din e-post",
    "newsletter.subscribe": "Abonnere",
    "footer.brand": "VillaBella",
    "footer.brandDesc":
      "Mediterran livsstil for det moderne hjemmet. Håndlaget, gjennomtenkt design, bærekraftig produksjon.",
    "footer.shop": "Butikk",
    "footer.allCollections": "Alle samlinger",
    "footer.newArrivals": "Nye ankomster",
    "footer.bestsellers": "Bestsellere",
    "footer.bundleOffers": "Bundelstilbud",
    "footer.company": "Bedrift",
    "footer.aboutUs": "Om oss",
    "footer.sustainability": "Bærekraftighet",
    "footer.journal": "Blogg",
    "footer.careers": "Karriere",
    "footer.support": "Support",
    "footer.contact": "Kontakt",
    "footer.shippingReturns": "Frakt og retur",
    "footer.faq": "Vanlige spørsmål",
    "footer.careGuide": "Stell-guide",
    "footer.contactInfo": "Kontaktinfo",
    "footer.newsletter": "Bli del av vår mediterrane sirkel",
    "footer.newsletterDesc":
      "Motta designinspirvasjon, eksklusivt tilbud og historier fra vår verden.",
    "footer.emailPlaceholder": "Din e-post",
    "footer.subscribe": "Abonnere",
    "footer.privacy": "Personvernreglementet",
    "footer.terms": "Vilkår for bruk",
    "footer.cookies": "Innstillinger for informasjonskapsler",
    "footer.copyright":
      "© 2025 VillaBella Mediterranean Lifestyle. Håndlaget i Norge.",
    "product.notFound": "Produkt ikke funnet",
    "product.backToProducts": "Tilbake til produkter",
    "product.motif": "Motiv",
    "product.material": "Materiale",
    "product.size": "Størrelse",
    "product.totalPrice": "Total pris:",
    "product.addToCart": "Legg i handlekurv",
    "product.save": "Lagre",
    "product.share": "Del",
    "product.relatedProducts": "Relaterte produkter",
    "product.otherFromCollection": "Andre fra Riviera Kolleksjonen",
    "productInfo.material": "Materiale (Cover)",
    "productInfo.features": "Egenskaper:",
    "productInfo.innerPillow": "Innerpute",
    "productInfo.origin": "Opprinnelse:",
    "productInfo.composition": "Sammensetning:",
    "productInfo.designMotif": "Design og Motiv",
    "productInfo.artist": "Kunstner:",
    "productInfo.inspiration": "Inspirasjon:",
    "productInfo.careGuide": "Vask og Vedlikehold",
    "review.title": "Kundeomtaler",
    "review.heading": "Hva mener kundene?",
    "review.basedOn": "Basert på",
    "review.reviews": "omtaler",
    "review.writeReview": "Skriv en omtale",
    "review.sortBy": "Sorter:",
    "review.recent": "Nyeste først",
    "review.helpful": "Mest nyttig",
    "review.rating": "Høyeste vurdering",
    "review.verified": "Verifisert kjøp",
    "review.helpful_button": "Nyttig",
    "review.shareOpinion": "Del din mening",
    "review.yourRating": "Din vurdering",
    "review.reviewTitle": "Tittel",
    "review.reviewTitlePlaceholder": "Hva synes du om denne puten?",
    "review.reviewText": "Din omtale",
    "review.reviewTextPlaceholder": "Del dine tanker om produktet...",
    "review.yourName": "Ditt navn",
    "review.namePlaceholder": "Navn",
    "review.yourEmail": "Din e-post",
    "review.emailPlaceholder": "E-post",
    "review.submitReview": "Send inn omtale",
    "review.cancel": "Avbryt",
    "bundle.selectProduct": "Velg ditt produkt",
    "bundle.coverOnly": "Putekasse alene",
    "bundle.coverOnlyDesc":
      "Kun putecover (fyll selv eller bruk innerpute du allerede har)",
    "bundle.withPillow": "Med innerpute",
    "bundle.withPillowDesc": "Putecover + norsk innerpute (100% andundun)",
    "bundle.save": "Spar",
    "bundle.multipleOffers": "Kjøp flere og spar!",
    "bundle.buy2": "Kjøp 2 puter",
    "bundle.buy2Price": "2 499 kr",
    "bundle.buy2Save": "Spar ca. 399 kr",
    "bundle.buy3": "Kjøp 3 puter",
    "bundle.buy3Price": "3 499 kr",
    "bundle.buy3Save": "Spar ca. 899 kr",
    "trust.buyWithConfidence": "Kjøp med trygghet",
    "trust.delivery": "3-5 dagers levering",
    "trust.deliveryDesc": "Rask forsendelse fra Norge",
    "trust.returns": "14 dagers retur",
    "trust.returnsDesc": "Åpent kjøp garantert",
    "trust.securePayment": "Sikker betaling",
    "trust.madeInEurope": "Laget i Europa",
    "trust.madeInEuropeDesc":
      "Produsert med omhu i Tyrkia, støtter europeisk håndverk",
    "trust.norwegianShop": "Norsk butikk",
    "trust.norwegianShopDesc":
      "Autentiske nordiske verdier, håndlaget med oppmerksomhet",
    "products.whyChoose": "Hvorfor Velge VillaBella",
    "products.whyChooseDesc":
      "Vi garanterer kvalitet, rask levering og din fullstendige tilfredshet",
    "products.pageLabel": "Produkter",
    "products.pageHeading": "Våre Håndlagde Puter",
    "products.pageDescription":
      "Utforsk vår eksklusive samling av håndlagde puter inspirert av middelhavet",
    "products.collectionHeading": "Samlingen Vår",
    "products.collectionDescription":
      "Hver pute er et kunstnerisk meisterværk designet for å bringe middelhavet inn i ditt hjem",
    "products.lifestyleLabel": "Inspirasjon",
    "products.lifestyleHeading": "VillaBella Livsstil",
    "products.lifestyleDescription":
      "Oppdage hvordan våre håndlagde puter transformerer hjem og skaper magiske øyeblikk",
    "contact.title": "Kontakt oss",
    "contact.subtitle":
      "Vi vil gjerne høre fra deg. Ta kontakt med oss med spørsmål eller henvendelser.",
    "contact.email": "E-post",
    "contact.emailResponse": "Vi svarer innen 24 timer",
    "contact.phone": "Telefon",
    "contact.phoneHours": "Mandag - Fredag, 10:00 - 18:00 CET",
    "contact.address": "Adresse",
    "contact.formName": "Ditt navn",
    "contact.namePlaceholder": "Skriv inn navn",
    "contact.formEmail": "Din e-post",
    "contact.emailPlaceholder": "din@epost.no",
    "contact.formSubject": "Emne",
    "contact.subjectPlaceholder": "Hva handler henvendelsen om?",
    "contact.formMessage": "Melding",
    "contact.messagePlaceholder": "Fortell oss mer om henvendelsen...",
    "contact.sendMessage": "Send melding",
    "contact.faqTitle": "Ofte stilte spørsmål",
    "contact.faq1Q": "Hvor lenge tar forsendelsen?",
    "contact.faq1A":
      "Vi tilbyr 3-5 dagers levering fra lageret vårt i Norge til de fleste steder i Skandinavia og Europa.",
    "contact.faq2Q": "Hva er din returpolicy?",
    "contact.faq2A":
      "Vi tilbyr 14 dagers åpent kjøp. Hvis du ikke er helt fornøyd, kan du returnere kjøpet ditt for full refusjon.",
    "contact.faq3Q": "Sender dere internasjonalt?",
    "contact.faq3A":
      "Ja, vi sender til utvalgte land i Europa. Kontakt oss for fraktpriser og alternativer for din lokasjon.",
    "contact.faq4Q": "Kan jeg tilpasse bestillingen min?",
    "contact.faq4A":
      "Vi tilbyr begrenset tilpasning. Kontakt oss direkte for å diskutere dine spesifikke behov og krav.",
    "about.headerTitle": "Et ønske om å bringe syden hjem",
    "about.headerSubtitle":
      "En reise som startet med en drøm om å beholde følelsen av Middelhavet hele året",
    "about.inspirationLabel": "Inspirasjon",
    "about.inspirationHeading": "Inspirasjonen",
    "about.inspirationP1":
      "For alle som drømmer om å ta med seg følelsen av varme, solrike Middelhavsfeeling hjem — Velkommen til VillaBella.",
    "about.inspirationP2":
      "Vi i Skandinavia elsker å reise til Middelhavet for å finne solen som varmer litt dypere og roen som får skuldrene våre til å slappe av. Men så drar vi hjem til den grå hverdagen, og følelsen forsvinner så fort.",
    "about.inspirationP3":
      "VillaBella inviterer deg inn i et univers hvor denne følelsen får lov å bli, gjennom våre design som bærer mosaikkmønstre og dyp inspirasjon fra Middelhavsånden.",
    "about.designLabel": "Håndverk",
    "about.designHeading": "Våre design",
    "about.designP1":
      "Vi visste at vi ikke kunne bringe våre produkter til liv uten en kunstnerisk hånd som kunne fange essensen av våre visjoner.",
    "about.designP2":
      "Det var derfor vi fikk hjelp fra Jelena Zivkovic, en dyktig mosaikkkünstler med en dypfølelse for den mediterrane estetikken.",
    "about.designP3":
      "Samarbeidet vårt er basert på en felles passion for håndverkskvalitet og en dyp respekt for tradisjonell kunstteknikk. Hver design er et resultat av grundig forskning og kunstnerisk dedikasjon.",
    "about.qualityLabel": "Kvalitet",
    "about.qualityHeading": "Skapt med hensikt",
    "about.qualityP1":
      "Designene våre er individuelle kunstverk med estetikk i fokus, skapt for å komplimentere ditt hjem med stil og eleganse.",
    "about.qualityP2":
      "VillaBella er et norsk merke som pakker produkter for hånd med omhu og oppmerksomhet på hver detalj.",
    "about.qualityP3":
      "Når du kjøper et VillaBella produkt, kjøper du ren kvalitet. Våre produkter er produsert i Tyrkia fra 100% bomull og designet for å vare hele livet.",
    "about.material": "Materiale",
    "about.materialDesc": "100% organisk bomull fra etiske kilder",
    "about.production": "Produksjon",
    "about.productionDesc": "Håndpakket i Norge, produsert i Tyrkia",
    "about.design": "Design",
    "about.designDesc": "Kunstnerisk tolkning av mediterransk ikonografi",
    "about.sustainability": "Bærekraft",
    "about.sustainabilityDesc": "Miljøvennlig produksjon og etiske standarder",
    "about.foundersLabel": "Vårt team",
    "about.foundersHeading": "Møt grunnleggerne",
    "about.foundersP1":
      "Ola og Milad har alltid kjempet for å finne produkter som matchet deres estetiske ønsker og verdier. Frustrasjonen over det begrenset tilbudet inspirerte dem til å skape noe eget.",
    "about.foundersP2":
      "De ønsket å bringe varmen fra Middelhavet hjem til Norge, en kontrast til den dominerende skandinaviske minimalismen. De så et behov for design som kunne fortelle historier og vekke følelser.",
    "about.foundersP3":
      "VillaBella er en invitasjon til mennesker som ønsker «det lille ekstra» i hjemmene sine — som er forelsket i skjønnhet, håndverk og den mediterrane livsfilosofien.",
    "about.signoff": "Med varme og håp,",
    "about.founders": "Grunnleggere av VillaBella",
    "about.galleryLabel": "Vår reise",
    "about.galleryHeading": "Håndlagde detaljer",
    "about.ctaHeading": "Bli en del av VillaBella familien",
    "about.ctaText":
      "Utforsk vår samling av håndlagde putehyller og oppdag hvordan du kan bringe Middelhavet inn i ditt hjem.",
    "about.ctaButton": "Utforsk kolleksjonen",
    "newsletter.gdprLabel": "Jeg godtar vilkårene og personvernreglementene",
    "newsletter.gdprDescription":
      "Ved å abonnere godtar du våre vilkår og samtykker til å motta nyhetsbrev.",
    "newsletter.termsLink": "Les våre vilkår",
  },
  EN: {
    "banner.text":
      "Handpicked Mediterranean designs • Hand-packed with care • Made in Europe",
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.about": "About us",
    "nav.contact": "Contact",
    "inspiration.label": "Our Inspiration",
    "inspiration.heading": "Bringing Syden Home",
    "inspiration.intro":
      "For all who dream of bringing the calm, sun-filled Mediterranean feeling home — Welcome to VillaBella.",
    "inspiration.p1":
      "We in Scandinavia love traveling to the Mediterranean to find the sun that warms a little deeper and the calm that makes our shoulders relax. But then we return home to the gray everyday, and this feeling disappears so quickly.",
    "inspiration.p2":
      "VillaBella invites you into a universe where this feeling is allowed to stay, through our designs bearing mosaic patterns and deep inspiration from the Mediterranean spirit.",
    "inspiration.cta": "Learn Our Story",
    "riviera.label": "Riviera Collection",
    "riviera.heading": "Explore Riviera Collection",
    "riviera.description":
      "Handcrafted mosaic patterns inspired by ancient Mediterranean artistry, reimagined for the modern home.",
    "product.cushionSize": "50x50cm cushion cover",
    "product.price": "599",
    "riviera.special.two": "Buy 2 for",
    "riviera.special.two_price": "1099",
    "riviera.special.three": "Buy 3 for",
    "riviera.special.three_price": "1549",
    "riviera.specialDesc":
      "Choose with or without inner pillow from Norwegian Dun — add extra comfort or save with our cushion covers only option.",
    "riviera.shop": "Shop the Collection",
    "riviera.specialLabel": "Special Offer",
    "mediterranean.heading":
      "VillaBella – because your home deserves more than minimalism.",
    "mediterranean.description":
      "In a world dominated by minimalist aesthetics, VillaBella invites you to seek the extraordinary. We believe that a beautiful home tells stories, awakens emotions, and reflects your dreams. Our handcrafted mosaic cushions are an invitation to the warm, sun-filled, and culturally rich life of the Mediterranean.",
    "mediterranean.newsletterSubheading":
      "Join our Mediterranean circle and receive exclusive offers.",
    "artist.label": "Artist Collaboration",
    "artist.heading": "Meet the Artist",
    "artist.p1":
      "VillaBella is deeply inspired by the timeless quality that mosaics radiate. That's why we have received help from Jelena Zivkovic, a skilled mosaic artist.",
    "artist.p2":
      "The motifs are designed and composed of thousands of small mosaic pieces. The products are printed to achieve the most detailed result.",
    "artist.quote":
      "This collection grew from my lifelong love of mosaic storytelling and the warm, symbolic world of Mediterranean art. As an artist shaped by both traditional iconography and imaginative painting, I am inspired by symbols that reveal themselves slowly. In these pieces, I wanted to capture timelessness, where myth, nature, and memory blend into a calm, luminous atmosphere.",
    "artist.cta": "Read the Story",
    "cta.heading": "Ready to Transform Your Space?",
    "cta.subheading": "Discover Your Mediterranean Dream",
    "cta.description":
      "Explore our complete collection of handcrafted cushion covers, each telling a story of Mediterranean artistry and Nordic craftsmanship.",
    "cta.shop": "Shop Now",
    "cta.learn": "Learn More",
    "hero.cta": "Explore Riviera",
    "newsletter.heading": "Join the Journey",
    "newsletter.placeholder": "Your email",
    "newsletter.subscribe": "Subscribe",
    "footer.brand": "VillaBella",
    "footer.brandDesc":
      "Mediterranean lifestyle for the modern home. Handcrafted, thoughtfully designed, sustainably made.",
    "footer.shop": "Shop",
    "footer.allCollections": "All Collections",
    "footer.newArrivals": "New Arrivals",
    "footer.bestsellers": "Bestsellers",
    "footer.bundleOffers": "Bundle Offers",
    "footer.company": "Company",
    "footer.aboutUs": "About Us",
    "footer.sustainability": "Sustainability",
    "footer.journal": "Journal",
    "footer.careers": "Careers",
    "footer.support": "Support",
    "footer.contact": "Contact",
    "footer.shippingReturns": "Shipping & Returns",
    "footer.faq": "FAQ",
    "footer.careGuide": "Care Guide",
    "footer.contactInfo": "Contact",
    "footer.newsletter": "Join Our Mediterranean Circle",
    "footer.newsletterDesc":
      "Receive design inspiration, exclusive offers, and stories from our world.",
    "footer.emailPlaceholder": "Your email",
    "footer.subscribe": "Subscribe",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookie Settings",
    "footer.copyright":
      "© 2025 VillaBella Mediterranean Lifestyle. Handcrafted in Norway.",
    "product.notFound": "Product not found",
    "product.backToProducts": "Back to products",
    "product.motif": "Motif",
    "product.material": "Material",
    "product.size": "Size",
    "product.totalPrice": "Total price:",
    "product.addToCart": "Add to cart",
    "product.save": "Save",
    "product.share": "Share",
    "product.relatedProducts": "Related products",
    "product.otherFromCollection": "Other from Riviera Collection",
    "productInfo.material": "Material (Cover)",
    "productInfo.features": "Features:",
    "productInfo.innerPillow": "Inner Pillow",
    "productInfo.origin": "Origin:",
    "productInfo.composition": "Composition:",
    "productInfo.designMotif": "Design & Motif",
    "productInfo.artist": "Artist:",
    "productInfo.inspiration": "Inspiration:",
    "productInfo.careGuide": "Washing & Care",
    "review.title": "Customer Reviews",
    "review.heading": "What Customers Think",
    "review.basedOn": "Based on",
    "review.reviews": "reviews",
    "review.writeReview": "Write a Review",
    "review.sortBy": "Sort by:",
    "review.recent": "Newest first",
    "review.helpful": "Most helpful",
    "review.rating": "Highest rating",
    "review.verified": "Verified purchase",
    "review.helpful_button": "Helpful",
    "review.shareOpinion": "Share Your Opinion",
    "review.yourRating": "Your Rating",
    "review.reviewTitle": "Title",
    "review.reviewTitlePlaceholder": "What do you think about this pillow?",
    "review.reviewText": "Your Review",
    "review.reviewTextPlaceholder": "Share your thoughts about the product...",
    "review.yourName": "Your Name",
    "review.namePlaceholder": "Name",
    "review.yourEmail": "Your Email",
    "review.emailPlaceholder": "Email",
    "review.submitReview": "Submit Review",
    "review.cancel": "Cancel",
    "bundle.selectProduct": "Choose Your Product",
    "bundle.coverOnly": "Cover Only",
    "bundle.coverOnlyDesc":
      "Pillow cover only (fill yourself or use an inner pillow you already have)",
    "bundle.withPillow": "With Inner Pillow",
    "bundle.withPillowDesc":
      "Pillow cover + Norwegian inner pillow (100% duck down)",
    "bundle.save": "Save",
    "bundle.multipleOffers": "Buy More and Save!",
    "bundle.buy2": "Buy 2 pillows",
    "bundle.buy2Price": "2,499 kr",
    "bundle.buy2Save": "Save approx. 399 kr",
    "bundle.buy3": "Buy 3 pillows",
    "bundle.buy3Price": "3,499 kr",
    "bundle.buy3Save": "Save approx. 899 kr",
    "trust.buyWithConfidence": "Buy with Confidence",
    "trust.delivery": "3-5 Day Delivery",
    "trust.deliveryDesc": "Fast shipping from Norway",
    "trust.returns": "14 Day Returns",
    "trust.returnsDesc": "Open purchase guarantee",
    "trust.securePayment": "Secure Payment",
    "trust.madeInEurope": "Made in Europe",
    "trust.madeInEuropeDesc":
      "Produced with care in Turkey, supporting European craftsmanship",
    "trust.norwegianShop": "Norwegian Shop",
    "trust.norwegianShopDesc":
      "Authentic Nordic values, handmade with attention",
    "products.whyChoose": "Why Choose VillaBella",
    "products.whyChooseDesc":
      "We guarantee quality, fast delivery and your complete satisfaction",
    "products.pageLabel": "Products",
    "products.pageHeading": "Our Handmade Pillows",
    "products.pageDescription":
      "Explore our exclusive collection of handmade pillows inspired by the Mediterranean",
    "products.collectionHeading": "Our Collection",
    "products.collectionDescription":
      "Each pillow is an artistic masterpiece designed to bring the Mediterranean into your home",
    "products.lifestyleLabel": "Inspiration",
    "products.lifestyleHeading": "VillaBella Lifestyle",
    "products.lifestyleDescription":
      "Discover how our handmade pillows transform homes and create magical moments",
    "contact.title": "Contact Us",
    "contact.subtitle":
      "We'd love to hear from you. Reach out to us with any questions or inquiries.",
    "contact.email": "Email",
    "contact.emailResponse": "We'll respond within 24 hours",
    "contact.phone": "Phone",
    "contact.phoneHours": "Monday - Friday, 10am - 6pm CET",
    "contact.address": "Address",
    "contact.formName": "Your Name",
    "contact.namePlaceholder": "Enter your name",
    "contact.formEmail": "Your Email",
    "contact.emailPlaceholder": "your@email.com",
    "contact.formSubject": "Subject",
    "contact.subjectPlaceholder": "How can we help?",
    "contact.formMessage": "Message",
    "contact.messagePlaceholder": "Tell us more about your inquiry...",
    "contact.sendMessage": "Send Message",
    "contact.faqTitle": "Frequently Asked Questions",
    "contact.faq1Q": "How long does shipping take?",
    "contact.faq1A":
      "We offer 3-5 day delivery from our warehouse in Norway to most locations in Scandinavia and Europe.",
    "contact.faq2Q": "What is your return policy?",
    "contact.faq2A":
      "We offer a 14-day open purchase guarantee. If you're not completely satisfied, you can return your purchase for a full refund.",
    "contact.faq3Q": "Do you ship internationally?",
    "contact.faq3A":
      "Yes, we ship to select countries across Europe. Contact us for shipping rates and options for your location.",
    "contact.faq4Q": "Can I customize my order?",
    "contact.faq4A":
      "We offer limited customization options. Please contact us directly to discuss your specific needs and requirements.",
    "about.headerTitle": "A desire to bring the South home",
    "about.headerSubtitle":
      "A journey that began with a dream of keeping the Mediterranean feeling all year long",
    "about.inspirationLabel": "Inspiration",
    "about.inspirationHeading": "The Inspiration",
    "about.inspirationP1":
      "For all who dream of bringing the calm, sun-filled Mediterranean feeling home — Welcome to VillaBella.",
    "about.inspirationP2":
      "We in Scandinavia love traveling to the Mediterranean to find the sun that warms a little deeper and the calm that makes our shoulders relax. But then we return home to the gray everyday, and this feeling disappears so quickly.",
    "about.inspirationP3":
      "VillaBella invites you into a universe where this feeling is allowed to stay, through our designs bearing mosaic patterns and deep inspiration from the Mediterranean spirit.",
    "about.designLabel": "Craftsmanship",
    "about.designHeading": "Our Designs",
    "about.designP1":
      "We knew we could not bring our products to life without an artistic hand that could capture the essence of our visions.",
    "about.designP2":
      "That's why we received help from Jelena Zivkovic, a skilled mosaic artist with a deep feeling for Mediterranean aesthetics.",
    "about.designP3":
      "Our collaboration is based on a shared passion for craftsmanship quality and a deep respect for traditional artistic techniques. Each design is a result of thorough research and artistic dedication.",
    "about.qualityLabel": "Quality",
    "about.qualityHeading": "Created with Intention",
    "about.qualityP1":
      "Our designs are individual works of art with aesthetics in focus, created to complement your home with style and elegance.",
    "about.qualityP2":
      "VillaBella is a Norwegian brand that packages products by hand with care and attention to every detail.",
    "about.qualityP3":
      "When you buy a VillaBella product, you are buying pure quality. Our products are manufactured in Turkey from 100% cotton and designed to last a lifetime.",
    "about.material": "Material",
    "about.materialDesc": "100% organic cotton from ethical sources",
    "about.production": "Production",
    "about.productionDesc": "Hand-packed in Norway, produced in Turkey",
    "about.design": "Design",
    "about.designDesc": "Artistic interpretation of Mediterranean iconography",
    "about.sustainability": "Sustainability",
    "about.sustainabilityDesc":
      "Environmentally friendly production and ethical standards",
    "about.foundersLabel": "Our Team",
    "about.foundersHeading": "Meet the Founders",
    "about.foundersP1":
      "Ola and Milad have always fought to find products that matched their aesthetic desires and values. Frustration with the limited offerings inspired them to create something of their own.",
    "about.foundersP2":
      "They wanted to bring the warmth of the Mediterranean home to Norway, a contrast to dominant Scandinavian minimalism. They saw a need for design that could tell stories and evoke feelings.",
    "about.foundersP3":
      "VillaBella is an invitation to people who want 'that little extra' in their homes — those who are in love with beauty, craftsmanship, and the Mediterranean lifestyle philosophy.",
    "about.signoff": "With warmth and hope,",
    "about.founders": "Founders of VillaBella",
    "about.galleryLabel": "Our Journey",
    "about.galleryHeading": "Handcrafted Details",
    "about.ctaHeading": "Join the VillaBella Family",
    "about.ctaText":
      "Explore our collection of handcrafted pillow covers and discover how you can bring the Mediterranean into your home.",
    "about.ctaButton": "Explore the Collection",
    "newsletter.gdprLabel": "I accept the terms and privacy policy",
    "newsletter.gdprDescription":
      "By subscribing, you accept our terms and agree to receive newsletters.",
    "newsletter.termsLink": "Read our terms",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("NO");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
