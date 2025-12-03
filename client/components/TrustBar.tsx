import { Truck, RotateCcw, Lock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TrustBar() {
  const { t } = useLanguage();

  return (
    <div className="bg-stone-50 rounded-lg p-6 border border-stone-200">
      <h4 className="text-sm font-light uppercase tracking-wider text-stone-600 mb-6">
        {t("trust.buyWithConfidence")}
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Delivery */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-stone-900 border border-stone-700">
              <Truck size={20} className="text-stone-100" />
            </div>
          </div>
          <div>
            <p className="text-sm font-light text-stone-900">
              {t("trust.delivery")}
            </p>
            <p className="text-xs text-stone-500 font-light mt-1">
              {t("trust.deliveryDesc")}
            </p>
          </div>
        </div>

        {/* Returns */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-stone-900 border border-stone-700">
              <RotateCcw size={20} className="text-stone-100" />
            </div>
          </div>
          <div>
            <p className="text-sm font-light text-stone-900">
              {t("trust.returns")}
            </p>
            <p className="text-xs text-stone-500 font-light mt-1">
              {t("trust.returnsDesc")}
            </p>
          </div>
        </div>

        {/* Secure Payment */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-stone-900 border border-stone-700">
              <Lock size={20} className="text-stone-100" />
            </div>
          </div>
          <div>
            <p className="text-sm font-light text-stone-900">
              {t("trust.securePayment")}
            </p>
            <div className="flex gap-2 mt-1">
              <div className="w-6 h-4 bg-blue-600 rounded text-xs flex items-center justify-center text-white font-bold">
                V
              </div>
              <div className="w-6 h-4 bg-blue-900 rounded text-xs flex items-center justify-center text-white font-bold">
                M
              </div>
              <span className="text-xs text-stone-500 font-light">VIPPS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
