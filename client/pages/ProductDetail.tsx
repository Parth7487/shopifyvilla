import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Heart, Share2, ArrowLeft } from "lucide-react";
import { useCurrency } from "@/contexts/CurrencyContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProductById, getRelatedProducts } from "@/data/products";
import BundleSelector from "@/components/BundleSelector";
import ProductInfo from "@/components/ProductInfo";
import TrustBar from "@/components/TrustBar";
import ReviewSection from "@/components/ReviewSection";
import ProductCard from "@/components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { formatPrice } = useCurrency();
  const { t } = useLanguage();
  const [selectedOption, setSelectedOption] = useState<"cover" | "bundle">(
    "cover",
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const product = getProductById(id || "");
  const relatedProducts = getRelatedProducts(id || "");

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-light text-stone-900">
            {t("product.notFound")}
          </h1>
          <button
            onClick={() => navigate("/products")}
            className="text-emerald-700 hover:text-emerald-800 font-light flex items-center gap-2 justify-center"
          >
            <ArrowLeft size={16} />
            {t("product.backToProducts")}
          </button>
        </div>
      </div>
    );
  }

  const currentPrice =
    selectedOption === "cover" ? product.basePrice : product.bundlePrice;

  return (
    <div className="bg-white">
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button
          onClick={() => navigate("/products")}
          className="inline-flex items-center gap-2 text-stone-600 hover:text-emerald-700 transition font-light"
        >
          <ArrowLeft size={18} />
          {t("product.backToProducts")}
        </button>
      </div>

      {/* Two Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Sticky Image Viewer */}
          <div className="lg:sticky lg:top-32 h-fit">
            {/* Main Image */}
            <div className="relative bg-stone-50 rounded-lg overflow-hidden mb-6 aspect-square">
              <img
                src={product.images[currentImageIndex]}
                alt={`${product.title} - View ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
                width="600"
                height="600"
              />
            </div>

            {/* Image Thumbnails */}
            <div className="grid grid-cols-5 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`aspect-square rounded-lg overflow-hidden transition border-2 ${
                    idx === currentImageIndex
                      ? "border-stone-700"
                      : "border-stone-200 hover:border-stone-400"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.title} - Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                    width="120"
                    height="120"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Purchase Block */}
          <div className="space-y-8">
            {/* Product Header */}
            <div className="space-y-4">
              <p className="text-xs tracking-widest font-light text-stone-600 uppercase">
                {product.collection}
              </p>
              <h1 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900">
                {product.title}
              </h1>
              <p className="text-lg text-stone-600 font-light">
                {product.subtitle}
              </p>
            </div>

            {/* Quick Details */}
            <div className="space-y-3 pb-6 border-b border-stone-200">
              <div>
                <p className="text-xs uppercase tracking-wider font-light text-stone-600 mb-1">
                  {t("product.motif")}
                </p>
                <p className="text-stone-900 font-light">{product.motif}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-light text-stone-600 mb-1">
                  {t("product.material")}
                </p>
                <p className="text-stone-900 font-light">
                  {product.material.cover}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-light text-stone-600 mb-1">
                  {t("product.size")}
                </p>
                <p className="text-stone-900 font-light">45 x 45 cm</p>
              </div>
            </div>

            {/* Product Description */}
            <p className="text-stone-700 font-light leading-relaxed">
              {product.description}
            </p>

            {/* Bundle Selector */}
            <BundleSelector
              coverOnlyPrice={product.basePrice}
              bundlePrice={product.bundlePrice}
              onSelectionChange={setSelectedOption}
            />

            {/* Price Display */}
            <div className="bg-stone-50 rounded-lg p-6 border border-stone-200">
              <p className="text-xs uppercase tracking-wider font-light text-stone-600 mb-2">
                {t("product.totalPrice")}
              </p>
              <p className="text-4xl font-light text-stone-900">
                {formatPrice(currentPrice)}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white font-light uppercase tracking-wider text-sm rounded-sm transition duration-300">
                {t("product.addToCart")}
              </button>
              <div className="flex gap-3">
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className={`flex-1 py-3 border-2 font-light uppercase tracking-wider text-sm rounded-sm transition ${
                    isSaved
                      ? "border-emerald-700 text-emerald-700"
                      : "border-stone-300 text-stone-600 hover:border-stone-400"
                  }`}
                >
                  <Heart
                    size={18}
                    className="inline mr-2"
                    fill={isSaved ? "currentColor" : "none"}
                  />
                  {t("product.save")}
                </button>
                <button className="flex-1 py-3 border-2 border-stone-300 text-stone-600 hover:border-stone-400 font-light uppercase tracking-wider text-sm rounded-sm transition">
                  <Share2 size={18} className="inline mr-2" />
                  {t("product.share")}
                </button>
              </div>
            </div>

            {/* Trust Bar */}
            <TrustBar />
          </div>
        </div>
      </div>

      {/* Product Details Sections Below */}
      <section className="py-20 md:py-32 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductInfo product={product} />
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-xs tracking-widest font-light text-stone-600 uppercase mb-4">
                {t("product.relatedProducts")}
              </p>
              <h2 className="text-5xl font-light tracking-tight text-stone-900">
                {t("product.otherFromCollection")}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group cursor-pointer"
                >
                  <ProductCard
                    name={relatedProduct.title}
                    description={relatedProduct.subtitle}
                    price={formatPrice(relatedProduct.basePrice)}
                    images={relatedProduct.images}
                    bgGradient="bg-gradient-to-br from-stone-100 to-stone-50"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Review Section */}
      <ReviewSection productId={product.id} />
    </div>
  );
}
