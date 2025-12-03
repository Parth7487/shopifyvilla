import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Leaf, Truck, RotateCcw, CheckCircle } from "lucide-react";

export default function Products() {
  const { t } = useLanguage();
  const { formatPrice } = useCurrency();

  return (
    <div className="bg-white">
      {/* Page Header with Banner */}
      <section className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden bg-stone-900">
        {/* Banner Image */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fe39acd0515c343298f9577041fa60f29%2F808c482bedef4853baeeb36908805c3d?format=webp&width=1200"
          alt="VillaBella Products"
          className="absolute inset-0 w-full h-full object-cover"
          width="1200"
          height="400"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <p className="text-xs tracking-widest font-light text-stone-300 uppercase mb-4">
            {t("products.pageLabel")}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-4">
            {t("products.pageHeading")}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/90 font-light max-w-2xl mx-auto">
            {t("products.pageDescription")}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Introduction */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-stone-900 mb-4">
              {t("products.collectionHeading")}
            </h2>
            <p className="text-stone-600 font-light max-w-2xl mx-auto">
              {t("products.collectionDescription")}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 mb-20">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group cursor-pointer transition duration-300"
              >
                <ProductCard
                  name={product.title}
                  description={product.subtitle}
                  price={formatPrice(product.basePrice)}
                  images={product.images}
                  bgGradient="bg-gradient-to-br from-stone-100 to-stone-50"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Gallery Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <p className="text-xs tracking-widest font-light text-stone-400 uppercase mb-4">
              {t("products.lifestyleLabel")}
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
              {t("products.lifestyleHeading")}
            </h2>
            <p className="text-lg text-stone-300 font-light max-w-2xl mx-auto">
              {t("products.lifestyleDescription")}
            </p>
          </div>

          {/* Masonry Gallery */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {/* Image 1 - Rattan Chair */}
            <div className="break-inside-avoid">
              <div className="overflow-hidden rounded-lg shadow-2xl hover:shadow-stone-900/30 transition duration-500">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe39acd0515c343298f9577041fa60f29%2Fa823fb3706024cb6a456b310a63c139a?format=webp&width=800"
                  alt="VillaBella Cushion on Rattan Chair"
                  className="w-full h-auto object-cover hover:scale-105 transition duration-500"
                  width="600"
                  height="700"
                />
              </div>
            </div>

            {/* Image 2 - Beach Peacock */}
            <div className="break-inside-avoid">
              <div className="overflow-hidden rounded-lg shadow-2xl hover:shadow-stone-900/30 transition duration-500">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe39acd0515c343298f9577041fa60f29%2F4596621349714abcbed19051e4a7e8f0?format=webp&width=800"
                  alt="VillaBella Cushion at Beach"
                  className="w-full h-auto object-cover hover:scale-105 transition duration-500"
                  width="600"
                  height="700"
                />
              </div>
            </div>

            {/* Image 3 - Tote Bag Detail */}
            <div className="break-inside-avoid">
              <div className="overflow-hidden rounded-lg shadow-2xl hover:shadow-stone-900/30 transition duration-500">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe39acd0515c343298f9577041fa60f29%2Fbba1f46d852146e5a6c2933c89fb6265?format=webp&width=800"
                  alt="VillaBella Tote Bag with Cushion"
                  className="w-full h-auto object-cover hover:scale-105 transition duration-500"
                  width="600"
                  height="700"
                />
              </div>
            </div>

            {/* Image 4 - Close-up Mosaic */}
            <div className="break-inside-avoid">
              <div className="overflow-hidden rounded-lg shadow-2xl hover:shadow-stone-900/30 transition duration-500">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe39acd0515c343298f9577041fa60f29%2F5892bc65aff14345aa9f1ab651180318?format=webp&width=800"
                  alt="Intricate Mosaic Design Detail"
                  className="w-full h-auto object-cover hover:scale-105 transition duration-500"
                  width="600"
                  height="700"
                />
              </div>
            </div>

            {/* Image 5 - Olive Branch Detail */}
            <div className="break-inside-avoid">
              <div className="overflow-hidden rounded-lg shadow-2xl hover:shadow-stone-900/30 transition duration-500">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe39acd0515c343298f9577041fa60f29%2F49442462fd4642868154edba834d76e0?format=webp&width=800"
                  alt="Cushion with Olive Details"
                  className="w-full h-auto object-cover hover:scale-105 transition duration-500"
                  width="600"
                  height="700"
                />
              </div>
            </div>

            {/* Image 6 - Palm Tree Lifestyle */}
            <div className="break-inside-avoid">
              <div className="overflow-hidden rounded-lg shadow-2xl hover:shadow-stone-900/30 transition duration-500">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe39acd0515c343298f9577041fa60f29%2Fe912e6a28431429585f636dd9310093c?format=webp&width=800"
                  alt="VillaBella Tote Bag in Tropical Setting"
                  className="w-full h-auto object-cover hover:scale-105 transition duration-500"
                  width="600"
                  height="700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar - 4 Column Trust Indicator */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-stone-50 to-stone-100 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-light tracking-tight text-stone-900 mb-2">
              {t("products.whyChoose")}
            </h3>
            <p className="text-stone-600 font-light max-w-xl mx-auto">
              {t("products.whyChooseDesc")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Delivery */}
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

            {/* Origin */}
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

            {/* Returns */}
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

            {/* Norwegian Shop */}
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
    </div>
  );
}
