import { useState } from "react";
import { useCurrency } from "@/contexts/CurrencyContext";
import { useLanguage } from "@/contexts/LanguageContext";

interface BundleSelectorProps {
  coverOnlyPrice: number;
  bundlePrice: number;
  onSelectionChange: (option: "cover" | "bundle") => void;
}

export default function BundleSelector({
  coverOnlyPrice,
  bundlePrice,
  onSelectionChange,
}: BundleSelectorProps) {
  const { formatPrice } = useCurrency();
  const { t } = useLanguage();
  const [selectedOption, setSelectedOption] = useState<"cover" | "bundle">(
    "cover",
  );

  const handleSelectOption = (option: "cover" | "bundle") => {
    setSelectedOption(option);
    onSelectionChange(option);
  };

  const savingsAmount = bundlePrice - coverOnlyPrice;
  const savingsPercent = Math.round((savingsAmount / bundlePrice) * 100);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-light text-stone-900">
        {t("bundle.selectProduct")}
      </h3>

      {/* Cover Only Option */}
      <label
        className="flex items-start gap-4 p-6 border-2 rounded-lg cursor-pointer transition-all duration-300"
        style={{
          borderColor: selectedOption === "cover" ? "#5c5c5c" : "#d4d4d8",
          backgroundColor: selectedOption === "cover" ? "#f5f5f4" : "#ffffff",
        }}
      >
        <input
          type="radio"
          name="bundle"
          value="cover"
          checked={selectedOption === "cover"}
          onChange={() => handleSelectOption("cover")}
          className="w-5 h-5 mt-1 accent-stone-700"
        />
        <div className="flex-1">
          <p className="font-light text-stone-900">{t("bundle.coverOnly")}</p>
          <p className="text-xs text-stone-500 font-light mt-1">
            {t("bundle.coverOnlyDesc")}
          </p>
        </div>
        <div className="text-right">
          <p className="text-lg font-light text-stone-900">
            {formatPrice(coverOnlyPrice)}
          </p>
        </div>
      </label>

      {/* Bundle Option with Savings Badge */}
      <label
        className="flex items-start gap-4 p-6 border-2 rounded-lg cursor-pointer transition-all duration-300 relative"
        style={{
          borderColor: selectedOption === "bundle" ? "#5c5c5c" : "#d4d4d8",
          backgroundColor: selectedOption === "bundle" ? "#f5f5f4" : "#ffffff",
        }}
      >
        {selectedOption === "bundle" && (
          <div className="absolute top-3 right-3 bg-amber-400 text-amber-950 px-3 py-1 rounded-full text-xs font-light">
            {t("bundle.save")} {savingsAmount} kr
          </div>
        )}
        <input
          type="radio"
          name="bundle"
          value="bundle"
          checked={selectedOption === "bundle"}
          onChange={() => handleSelectOption("bundle")}
          className="w-5 h-5 mt-1 accent-stone-700"
        />
        <div className="flex-1">
          <p className="font-light text-stone-900">{t("bundle.withPillow")}</p>
          <p className="text-xs text-stone-500 font-light mt-1">
            {t("bundle.withPillowDesc")}
          </p>
        </div>
        <div className="text-right">
          <p className="text-lg font-light text-stone-900">
            {formatPrice(bundlePrice)}
          </p>
          <p className="text-xs text-stone-400 line-through font-light mt-1">
            {formatPrice(coverOnlyPrice + 300)}
          </p>
        </div>
      </label>

      {/* Bundle Upsell Section */}
      <div className="mt-8 pt-8 border-t border-stone-200">
        <h3 className="text-lg font-light text-stone-900 mb-4">
          {t("bundle.multipleOffers")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-stone-200 rounded-lg hover:border-stone-400 transition">
            <p className="font-light text-stone-900">{t("bundle.buy2")}</p>
            <p className="text-2xl font-light text-stone-700 mt-1">
              {t("bundle.buy2Price")}
            </p>
            <p className="text-xs text-stone-500 font-light mt-2">
              {t("bundle.buy2Save")}
            </p>
          </div>

          <div className="p-4 border border-stone-200 rounded-lg hover:border-stone-400 transition">
            <p className="font-light text-stone-900">{t("bundle.buy3")}</p>
            <p className="text-2xl font-light text-stone-700 mt-1">
              {t("bundle.buy3Price")}
            </p>
            <p className="text-xs text-stone-500 font-light mt-2">
              {t("bundle.buy3Save")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
