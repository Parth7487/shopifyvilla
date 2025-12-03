import { useState } from "react";
import { Star, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Review {
  id: string;
  author: string;
  rating: number;
  title: string;
  text: string;
  date: string;
  verified: boolean;
  helpful: number;
}

interface ReviewSectionProps {
  productId: string;
}

export default function ReviewSection({ productId }: ReviewSectionProps) {
  const { t } = useLanguage();
  const [sortBy, setSortBy] = useState<"recent" | "helpful" | "rating">(
    "recent",
  );
  const [showReviewForm, setShowReviewForm] = useState(false);

  const mockReviews: Review[] = [
    {
      id: "1",
      author: "Maria Hansen",
      rating: 5,
      title: "Exceptionally beautiful and high quality",
      text: "Denne puten er absolutt fantastisk! Designet er vakkert og detaljert, og kvaliteten på materialet er utmerket. Jeg har anbefalt det til alle venner mine.",
      date: "2024-01-15",
      verified: true,
      helpful: 24,
    },
    {
      id: "2",
      author: "Per Olsen",
      rating: 5,
      title: "Perfect addition to my living room",
      text: "Søkte etter noe spesielt for stuen min, og denne fant jeg akkurat det jeg trengte. Fargene er vakre og puten passer perfekt med interiøret mitt.",
      date: "2024-01-10",
      verified: true,
      helpful: 18,
    },
    {
      id: "3",
      author: "Ingrid Nordstrom",
      rating: 4,
      title: "Beautiful design, comfortable too",
      text: "Veldig glad med mitt kjøp! Designet er fantastisk og innerputen er veldig komfortabel. Kan varmt anbefales.",
      date: "2024-01-05",
      verified: true,
      helpful: 12,
    },
    {
      id: "4",
      author: "Erik Svendsen",
      rating: 5,
      title: "Worth every krone",
      text: "Investering i kvalitet! Denne puten er verdt hver eneste krone. Håndverkskvaliteten er merkelig god og designet er tidløst.",
      date: "2023-12-28",
      verified: true,
      helpful: 31,
    },
  ];

  const averageRating =
    mockReviews.reduce((sum, r) => sum + r.rating, 0) / mockReviews.length;

  const ratingDistribution = {
    5: mockReviews.filter((r) => r.rating === 5).length,
    4: mockReviews.filter((r) => r.rating === 4).length,
    3: mockReviews.filter((r) => r.rating === 3).length,
    2: mockReviews.filter((r) => r.rating === 2).length,
    1: mockReviews.filter((r) => r.rating === 1).length,
  };

  return (
    <div className="py-20 md:py-32 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs tracking-widest font-light text-stone-600 uppercase mb-4">
            {t("review.title")}
          </p>
          <h2 className="text-5xl font-light tracking-tight text-stone-900 mb-4">
            {t("review.heading")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Rating Summary */}
          <div className="space-y-6">
            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-light text-stone-900">
                  {averageRating.toFixed(1)}
                </span>
                <span className="text-stone-600 font-light">/5</span>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < Math.round(averageRating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-stone-300"
                    }
                  />
                ))}
              </div>
              <p className="text-sm text-stone-600 font-light mt-2">
                {t("review.basedOn")} {mockReviews.length} {t("review.reviews")}
              </p>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-2">
                  <span className="text-xs text-stone-600 font-light w-8">
                    {rating}★
                  </span>
                  <div className="flex-1 h-2 bg-stone-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400"
                      style={{
                        width: `${
                          (ratingDistribution[
                            rating as keyof typeof ratingDistribution
                          ] /
                            mockReviews.length) *
                          100
                        }%`,
                      }}
                    />
                  </div>
                  <span className="text-xs text-stone-600 font-light w-8 text-right">
                    {
                      ratingDistribution[
                        rating as keyof typeof ratingDistribution
                      ]
                    }
                  </span>
                </div>
              ))}
            </div>

            {/* Write Review Button */}
            <button
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="w-full px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white font-light uppercase tracking-wider text-sm rounded-sm transition duration-300"
            >
              {t("review.writeReview")}
            </button>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-3 space-y-6">
            {/* Sort Options */}
            <div className="flex items-center gap-3 pb-6 border-b border-stone-200">
              <span className="text-sm text-stone-600 font-light">
                {t("review.sortBy")}
              </span>
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as "recent" | "helpful" | "rating")
                }
                className="px-4 py-2 border border-stone-300 rounded-sm text-sm font-light text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              >
                <option value="recent">{t("review.recent")}</option>
                <option value="helpful">{t("review.helpful")}</option>
                <option value="rating">{t("review.rating")}</option>
              </select>
            </div>

            {/* Reviews */}
            <div className="space-y-6">
              {mockReviews.map((review) => (
                <div
                  key={review.id}
                  className="pb-6 border-b border-stone-200 last:border-b-0"
                >
                  {/* Review Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={
                                i < review.rating
                                  ? "fill-amber-400 text-amber-400"
                                  : "text-stone-300"
                              }
                            />
                          ))}
                        </div>
                        {review.verified && (
                          <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded font-light">
                            {t("review.verified")}
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg font-light text-stone-900">
                        {review.title}
                      </h4>
                    </div>
                  </div>

                  {/* Review Body */}
                  <p className="text-stone-700 font-light leading-relaxed mb-4">
                    {review.text}
                  </p>

                  {/* Review Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-stone-600 font-light">
                      <span>{review.author}</span>
                      <span>
                        {new Date(review.date).toLocaleDateString("no-NO", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <button className="text-xs text-stone-600 hover:text-emerald-700 font-light transition">
                      {t("review.helpful_button")} ({review.helpful})
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Review Form Modal */}
        {showReviewForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-60 p-4">
            <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
              <h3 className="text-2xl font-light text-stone-900 mb-6">
                {t("review.shareOpinion")}
              </h3>

              <form className="space-y-6">
                {/* Rating */}
                <div>
                  <label className="block text-sm font-light text-stone-900 mb-4">
                    {t("review.yourRating")}
                  </label>
                  <div className="flex gap-3">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        className="p-2 hover:bg-stone-100 rounded-lg transition"
                      >
                        <Star
                          size={32}
                          className="text-stone-400 hover:text-amber-400"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <div>
                  <label className="block text-sm font-light text-stone-900 mb-2">
                    {t("review.reviewTitle")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("review.reviewTitlePlaceholder")}
                    className="w-full px-4 py-3 border border-stone-300 rounded-sm font-light text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                {/* Review Text */}
                <div>
                  <label className="block text-sm font-light text-stone-900 mb-2">
                    {t("review.reviewText")}
                  </label>
                  <textarea
                    placeholder={t("review.reviewTextPlaceholder")}
                    rows={6}
                    className="w-full px-4 py-3 border border-stone-300 rounded-sm font-light text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 resize-none"
                  />
                </div>

                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-light text-stone-900 mb-2">
                      {t("review.yourName")}
                    </label>
                    <input
                      type="text"
                      placeholder={t("review.namePlaceholder")}
                      className="w-full px-4 py-3 border border-stone-300 rounded-sm font-light text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-stone-900 mb-2">
                      {t("review.yourEmail")}
                    </label>
                    <input
                      type="email"
                      placeholder={t("review.emailPlaceholder")}
                      className="w-full px-4 py-3 border border-stone-300 rounded-sm font-light text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-6 border-t border-stone-200">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white font-light uppercase tracking-wider text-sm rounded-sm transition duration-300"
                  >
                    {t("review.submitReview")}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowReviewForm(false)}
                    className="px-6 py-3 border border-stone-300 text-stone-900 hover:bg-stone-50 font-light uppercase tracking-wider text-sm rounded-sm transition duration-300"
                  >
                    {t("review.cancel")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
