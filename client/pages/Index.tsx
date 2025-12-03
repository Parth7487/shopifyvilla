import { ArrowRight, Leaf, Truck, RotateCcw, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";

export default function Index() {
  const { t } = useLanguage();
  const { formatPrice } = useCurrency();
  const [email, setEmail] = useState("");
  const [gdprAccepted, setGdprAccepted] = useState(false);
  const [subscriptionLoading, setSubscriptionLoading] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!gdprAccepted) {
      return;
    }
    setSubscriptionLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setEmail("");
      setGdprAccepted(false);
    } finally {
      setSubscriptionLoading(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative w-full h-screen bg-stone-900 overflow-hidden flex flex-col items-center justify-between pb-20">
        {/* Video background - with fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          crossOrigin="anonymous"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://cdn.builder.io/o/assets%2Fa5269a01680d457f83a73f069f858527%2F5181c31eae5d40d1a99de211aaef8ab5?alt=media&token=4ce9c61f-5e82-4868-a637-c074b5c85fcf&apiKey=a5269a01680d457f83a73f069f858527"
            type="video/mp4"
          />
        </video>
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-950/30 via-stone-900/50 to-stone-950/70"></div>

        {/* CTA Button - Premium Elegant Design - Larger */}
        <div className="relative z-10 mt-auto">
          <Link
            to="/products"
            className="group inline-flex px-6 sm:px-16 lg:px-20 py-6 bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 text-white font-light uppercase tracking-widest text-sm transition duration-500 shadow-2xl hover:bg-white/15 hover:shadow-stone-900/30"
          >
            <span className="flex items-center gap-4">
              {t("hero.cta")}
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      {/* Riviera Collection Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest font-light text-stone-600 uppercase mb-4">
              {t("riviera.label")}
            </p>
            <h2 className="text-5xl font-light tracking-tight text-stone-900 mb-6">
              {t("riviera.heading")}
            </h2>
            <p className="text-lg text-stone-600 font-light max-w-2xl mx-auto">
              {t("riviera.description")}
            </p>
          </div>

          {/* Product showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Link to="/product/riviera-tree" className="group cursor-pointer">
              <ProductCard
                name="Peacock Mosaic"
                description={t("product.cushionSize")}
                price={formatPrice(parseInt(t("product.price")))}
                images={[
                  "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2Feea18823dba549558ea837e33683ed56?format=webp&width=800",
                  "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F3d2e70bd145845ebbf0cfe480a5fe954?format=webp&width=800",
                  "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2Fa94b10c4e8a54f7b85172b93de4f3bd2?format=webp&width=800",
                  "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2Fda7589f9820947c49d38b7ef90428275?format=webp&width=800",
                  "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2Fb3a5da4389604f86804763b12edac687?format=webp&width=800",
                  "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F8794fb9299944d8fb22f836d8a1d9ff5?format=webp&width=800",
                ]}
                bgGradient="bg-gradient-to-br from-stone-100 to-stone-50"
              />
            </Link>

            <Link to="/product/riviera-woman" className="group cursor-pointer">
              <ProductCard
                name="Garden Arch"
                description={t("product.cushionSize")}
                price={formatPrice(parseInt(t("product.price")))}
                images={[
                  "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F0fbe66729078445480d3ce6031e21397?format=webp&width=800",
                  "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F7a1ad6da2a4747fc819df1b04990de15?format=webp&width=800",
                  "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2Fab4340141e5c49d990a90e70c1ed9bd5?format=webp&width=800",
                  "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F8e758c8ec0c9458791f752486df8abfb?format=webp&width=800",
                  "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F639ae31eb17848c4a7c71830744f2827?format=webp&width=800",
                  "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F45a82758b1ea476bb2620b2abe37d659?format=webp&width=800",
                ]}
                bgGradient="bg-gradient-to-br from-sage-50 to-stone-50"
              />
            </Link>

            <Link
              to="/product/riviera-peacock"
              className="group cursor-pointer"
            >
              <ProductCard
                name="Olive Grove"
                description={t("product.cushionSize")}
                price={formatPrice(parseInt(t("product.price")))}
                images={[
                  "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F1b4a24ec65264a83b27f8c6ab1bec8de?format=webp&width=800",
                  "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F9fa6e7b091cc402d956c3f3c07b9a671?format=webp&width=800",
                  "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2Fd9173963b0be4571af804cf2f2e6bc53?format=webp&width=800",
                  "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F27f4bf48bde94c77b17002f113b031b2?format=webp&width=800",
                  "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F9de34c18c954484293b6d6858cc0df6b?format=webp&width=800",
                ]}
                bgGradient="bg-gradient-to-br from-olive-50 to-stone-50"
              />
            </Link>
          </div>

          {/* Bundle Offer Callout */}
          <div className="bg-gradient-to-r from-stone-100 to-stone-50 rounded-lg p-12 text-center border border-stone-200">
            <p className="text-xs tracking-widest font-light text-stone-600 uppercase mb-4">
              {t("riviera.specialLabel")}
            </p>
            <h3 className="text-3xl font-light text-stone-900 mb-4">
              {t("riviera.special.two")}{" "}
              {formatPrice(parseInt(t("riviera.special.two_price")))} •{" "}
              {t("riviera.special.three")}{" "}
              {formatPrice(parseInt(t("riviera.special.three_price")))}
            </h3>
            <p className="text-stone-600 font-light mb-6 max-w-2xl mx-auto">
              {t("riviera.specialDesc")}
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-3 px-6 sm:px-12 py-3.5 bg-stone-800 hover:bg-stone-900 text-white font-light uppercase tracking-widest text-xs rounded-sm shadow-lg hover:shadow-xl hover:shadow-stone-800/50 transition duration-300 hover:-translate-y-0.5"
            >
              {t("riviera.shop")} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Badge 1 */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-stone-900 rounded-full flex items-center justify-center border border-stone-700">
                  <Leaf className="text-stone-100" size={28} />
                </div>
              </div>
              <h4 className="text-stone-900 font-light text-lg">
                {t("trust.madeInEurope")}
              </h4>
              <p className="text-stone-600 text-sm font-light">
                {t("trust.madeInEuropeDesc")}
              </p>
            </div>

            {/* Badge 2 */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-stone-900 rounded-full flex items-center justify-center border border-stone-700">
                  <Truck className="text-stone-100" size={28} />
                </div>
              </div>
              <h4 className="text-stone-900 font-light text-lg">
                {t("trust.delivery")}
              </h4>
              <p className="text-stone-600 text-sm font-light">
                {t("trust.deliveryDesc")}
              </p>
            </div>

            {/* Badge 3 */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-stone-900 rounded-full flex items-center justify-center border border-stone-700">
                  <RotateCcw className="text-stone-100" size={28} />
                </div>
              </div>
              <h4 className="text-stone-900 font-light text-lg">
                {t("trust.returns")}
              </h4>
              <p className="text-stone-600 text-sm font-light">
                {t("trust.returnsDesc")}
              </p>
            </div>

            {/* Badge 4 */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-stone-900 rounded-full flex items-center justify-center border border-stone-700">
                  <CheckCircle className="text-stone-100" size={28} />
                </div>
              </div>
              <h4 className="text-stone-900 font-light text-lg">
                {t("trust.norwegianShop")}
              </h4>
              <p className="text-stone-600 text-sm font-light">
                {t("trust.norwegianShopDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mediterranean Dream + Newsletter Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content - Mediterranean Dream */}
            <div className="space-y-10 order-last lg:order-first">
              <div>
                <h2 className="text-5xl md:text-6xl font-light tracking-tight text-stone-900 leading-tight mb-6">
                  {t("mediterranean.heading")}
                </h2>
                <p className="text-lg text-stone-600 font-light leading-relaxed">
                  {t("mediterranean.description")}
                </p>
              </div>

              {/* Newsletter Form */}
              <div className="space-y-6 pt-6 border-t border-stone-200">
                <div>
                  <h3 className="text-2xl font-light text-stone-900 mb-2">
                    {t("newsletter.heading")}
                  </h3>
                  <p className="text-sm text-stone-600 font-light">
                    {t("mediterranean.newsletterSubheading")}
                  </p>
                </div>

                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t("newsletter.placeholder")}
                      required
                      className="flex-1 px-6 py-4 bg-stone-50 border border-stone-300 text-stone-900 placeholder-stone-500 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent transition"
                    />
                    <button
                      type="submit"
                      disabled={!gdprAccepted || subscriptionLoading}
                      className="px-6 sm:px-10 py-4 bg-stone-900 hover:bg-stone-800 disabled:bg-stone-400 text-white font-light uppercase tracking-wider text-sm transition duration-300 rounded-sm"
                    >
                      {subscriptionLoading ? "..." : t("newsletter.subscribe")}
                    </button>
                  </div>

                  {/* GDPR Compliance Checkbox */}
                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="gdpr"
                      checked={gdprAccepted}
                      onChange={(e) => setGdprAccepted(e.target.checked)}
                      className="w-5 h-5 mt-0.5 bg-white border border-stone-300 rounded cursor-pointer accent-stone-900 flex-shrink-0"
                    />
                    <label
                      htmlFor="gdpr"
                      className="text-xs text-stone-600 font-light cursor-pointer"
                    >
                      {t("newsletter.gdprDescription")}
                    </label>
                  </div>
                </form>
              </div>
            </div>

            {/* Right image - Mediterranean landscape */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-full min-h-96 rounded-lg overflow-hidden shadow-2xl border border-stone-200">
              <img
                src="https://images.pexels.com/photos/11898897/pexels-photo-11898897.jpeg"
                alt="Mediterranean coastline with calm sea and rocky cliffs"
                className="w-full h-full object-cover"
                width="800"
                height="600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Artist Feature (Designet av Jelena) */}
      <section className="py-20 md:py-32 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="order-last lg:order-first">
              <div className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[700px] overflow-hidden shadow-lg bg-black flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F681f21f8ea574ef690553b20ef9eda65?format=webp&width=800"
                  alt="Jelena Zivkovic, mosaic artist"
                  className="w-full h-full object-cover"
                  width="800"
                  height="700"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <p className="text-xs tracking-widest font-light text-white uppercase mb-4">
                  {t("artist.label")}
                </p>
                <h2 className="text-5xl font-light tracking-tight text-white">
                  {t("artist.heading")}
                </h2>
              </div>

              <p className="text-lg text-stone-300 font-light leading-relaxed">
                {t("artist.p1")}
              </p>

              <p className="text-base text-stone-400 font-light leading-relaxed">
                {t("artist.p2")}
              </p>

              <blockquote className="border-l-4 border-stone-700 pl-6 py-6 italic text-stone-300 font-light text-lg">
                "This collection grew from my lifelong love of mosaic
                storytelling and the warm, symbolic world of Mediterranean art.
                As an artist shaped by both traditional iconography and
                imaginative painting, I am inspired by symbols that reveal
                themselves slowly. In these pieces, I wanted to capture
                timelessness, where myth, nature, and memory blend into a calm,
                luminous atmosphere."
              </blockquote>

              <p className="text-sm text-stone-400 font-light">
                — Jelena Zivkovic, Mosaic Artist
              </p>

              <Link
                to="/"
                className="inline-flex items-center gap-3 text-stone-400 hover:text-stone-300 font-light uppercase tracking-wider text-sm transition mt-4"
              >
                {t("artist.cta")} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-stone-900 to-stone-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-widest font-light text-stone-400 uppercase mb-6">
            {t("cta.heading")}
          </p>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-white mb-8">
            {t("cta.subheading")}
          </h2>
          <p className="text-lg text-stone-300 font-light mb-10 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/products"
              className="px-6 sm:px-10 py-4 bg-stone-800 hover:bg-stone-900 text-white font-light uppercase tracking-wider text-sm transition duration-300 inline-block text-center"
            >
              {t("cta.shop")}
            </Link>
            <Link
              to="/about"
              className="px-6 sm:px-10 py-4 border border-stone-700 hover:border-stone-400 text-white font-light uppercase tracking-wider text-sm transition duration-300 inline-block text-center"
            >
              {t("cta.learn")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
