import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      {/* Page Header / Hero Section */}
      <section className="py-20 md:py-32 bg-stone-900 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-light tracking-tight text-white mb-6 leading-tight">
            {t("about.headerTitle") || "Et ønske om å bringe syden hjem"}
          </h1>
          <p className="text-lg text-stone-300 font-light max-w-3xl mx-auto">
            {t("about.headerSubtitle") ||
              "En reise som startet med en drøm om å beholde følelsen av Middelhavet hele året"}
          </p>
        </div>
      </section>

      {/* Section 1: The Inspiration */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-widest font-light text-stone-600 uppercase mb-6">
                {t("about.inspirationLabel") || "Inspirasjon"}
              </p>
              <h2 className="text-5xl font-light tracking-tight text-stone-900 mb-8">
                {t("about.inspirationHeading") || "Inspirasjonen"}
              </h2>
              <div className="space-y-6 text-stone-600 font-light leading-relaxed">
                <p>
                  {t("about.inspirationP1") ||
                    "For alle som drømmer om å ta med seg følelsen av varme, solrike Middelhavsfeeling hjem — Velkommen til VillaBella."}
                </p>
                <p>
                  {t("about.inspirationP2") ||
                    "Vi i Skandinavia elsker å reise til Middelhavet for å finne solen som varmer litt dypere og roen som får skuldrene våre til å slappe av. Men så drar vi hjem til den grå hverdagen, og følelsen forsvinner så fort."}
                </p>
                <p>
                  {t("about.inspirationP3") ||
                    "VillaBella inviterer deg inn i et univers hvor denne følelsen får lov å bli, gjennom våre design som bærer mosaikkmønstre og dyp inspirasjon fra Middelhavsånden."}
                </p>
              </div>
            </div>
            <div className="h-96 sm:h-[600px] md:h-[750px] rounded-lg overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe39acd0515c343298f9577041fa60f29%2Fccad9fee65c147f9af5ac91d4f47801b?format=webp&width=800"
                alt="Mediterranean inspiration"
                className="w-full h-full object-cover rounded-lg"
                width="800"
                height="600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Designs */}
      <section className="py-20 md:py-32 bg-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="h-96 sm:h-[600px] md:h-[750px] rounded-lg overflow-hidden order-2 lg:order-1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe39acd0515c343298f9577041fa60f29%2F5e67c3514401438ab8d1e2feefdc3fd6?format=webp&width=800"
                alt="Our designs"
                className="w-full h-full object-cover rounded-lg"
                width="800"
                height="600"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs tracking-widest font-light text-stone-600 uppercase mb-6">
                {t("about.designLabel") || "Håndverk"}
              </p>
              <h2 className="text-5xl font-light tracking-tight text-stone-900 mb-8">
                {t("about.designHeading") || "Våre design"}
              </h2>
              <div className="space-y-6 text-stone-600 font-light leading-relaxed">
                <p>
                  {t("about.designP1") ||
                    "Vi visste at vi ikke kunne bringe våre produkter til liv uten en kunstnerisk hånd som kunne fange essensen av våre visjoner."}
                </p>
                <p>
                  {t("about.designP2") ||
                    "Det var derfor vi fikk hjelp fra Jelena Zivkovic, en dyktig mosaikkkünstler med en dypfølelse for den mediterrane estetikken."}
                </p>
                <p>
                  {t("about.designP3") ||
                    "Samarbeidet vårt er basert på en felles passion for håndverkskvalitet og en dyp respekt for tradisjonell kunstteknikk. Hver design er et resultat av grundig forskning og kunstnerisk dedikasjon."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Created with Intention */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-widest font-light text-stone-600 uppercase mb-6">
                {t("about.qualityLabel") || "Kvalitet"}
              </p>
              <h2 className="text-5xl font-light tracking-tight text-stone-900 mb-8">
                {t("about.qualityHeading") || "Skapt med hensikt"}
              </h2>
              <div className="space-y-6 text-stone-600 font-light leading-relaxed">
                <p>
                  {t("about.qualityP1") ||
                    "Designene våre er individuelle kunstverk med estetikk i fokus, skapt for å komplimentere ditt hjem med stil og eleganse."}
                </p>
                <p>
                  {t("about.qualityP2") ||
                    "VillaBella er et norsk merke som pakker produkter for hånd med omhu og oppmerksomhet på hver detalj."}
                </p>
                <p>
                  {t("about.qualityP3") ||
                    "Når du kjøper et VillaBella produkt, kjøper du ren kvalitet. Våre produkter er produsert i Tyrkia fra 100% bomull og designet for å vare hele livet."}
                </p>

                {/* Quality Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-8 border-t border-stone-200">
                  <div>
                    <h4 className="text-sm font-light uppercase tracking-wider text-stone-900 mb-2">
                      {t("about.material") || "Materiale"}
                    </h4>
                    <p className="text-sm text-stone-600 font-light">
                      {t("about.materialDesc") ||
                        "100% organisk bomull fra etiske kilder"}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-light uppercase tracking-wider text-stone-900 mb-2">
                      {t("about.production") || "Produksjon"}
                    </h4>
                    <p className="text-sm text-stone-600 font-light">
                      {t("about.productionDesc") ||
                        "Håndpakket i Norge, produsert i Tyrkia"}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-light uppercase tracking-wider text-stone-900 mb-2">
                      {t("about.design") || "Design"}
                    </h4>
                    <p className="text-sm text-stone-600 font-light">
                      {t("about.designDesc") ||
                        "Kunstnerisk tolkning av mediterransk ikonografi"}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-light uppercase tracking-wider text-stone-900 mb-2">
                      {t("about.sustainability") || "Bærekraft"}
                    </h4>
                    <p className="text-sm text-stone-600 font-light">
                      {t("about.sustainabilityDesc") ||
                        "Miljøvennlig produksjon og etiske standarder"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-96 sm:h-[600px] md:h-[750px] rounded-lg overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe39acd0515c343298f9577041fa60f29%2Fbc5a0f02c5e64f4ba7ba111ba39f80ef?format=webp&width=800"
                alt="Quality craftsmanship"
                className="w-full h-full object-cover rounded-lg"
                width="800"
                height="600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Meet the Founders */}
      <section className="py-20 md:py-32 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="h-96 sm:h-[600px] md:h-[750px] rounded-lg overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe39acd0515c343298f9577041fa60f29%2F02bee4e14e5f402294ea66f7cefe585e?format=webp&width=800"
                  alt="Founders Ola and Milad"
                  className="w-full h-full object-cover"
                  width="800"
                  height="600"
                />
              </div>
            </div>
            <div>
              <p className="text-xs tracking-widest font-light text-stone-400 uppercase mb-6">
                {t("about.foundersLabel") || "Vårt team"}
              </p>
              <h2 className="text-5xl font-light tracking-tight text-white mb-8">
                {t("about.foundersHeading") || "Møt grunnleggerne"}
              </h2>
              <div className="space-y-6 text-stone-300 font-light leading-relaxed">
                <p>
                  {t("about.foundersP1") ||
                    "Ola og Milad har alltid kjempet for å finne produkter som matchet deres estetiske ønsker og verdier. Frustrasjonen over det begrenset tilbudet inspirerte dem til å skape noe eget."}
                </p>
                <p>
                  {t("about.foundersP2") ||
                    "De ønsket å bringe varmen fra Middelhavet hjem til Norge, en kontrast til den dominerende skandinaviske minimalismen. De så et behov for design som kunne fortelle historier og vekke følelser."}
                </p>
                <p>
                  {t("about.foundersP3") ||
                    "VillaBella er en invitasjon til mennesker som ønsker «det lille ekstra» i hjemmene sine — som er forelsket i skjønnhet, håndverk og den mediterrane livsfilosofien."}
                </p>

                {/* Founders Signature */}
                <div className="pt-8 border-t border-stone-700">
                  <p className="text-stone-400 font-light mb-4">
                    {t("about.signoff") || "Med varme og håp,"}
                  </p>
                  <p className="text-lg text-white font-light">Ola & Milad</p>
                  <p className="text-sm text-stone-500 font-light mt-2">
                    {t("about.founders") || "Grunnleggere av VillaBella"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-light tracking-tight text-stone-900 mb-6">
            {t("about.ctaHeading") || "Bli en del av VillaBella familien"}
          </h2>
          <p className="text-lg text-stone-600 font-light mb-8 max-w-2xl mx-auto">
            {t("about.ctaText") ||
              "Utforsk vår samling av håndlagde putehyller og oppdag hvordan du kan bringe Middelhavet inn i ditt hjem."}
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-stone-800 hover:bg-stone-900 text-white font-light uppercase tracking-wider text-sm rounded-sm transition duration-300"
          >
            {t("about.ctaButton") || "Utforsk kolleksjonen"}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
