import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Product } from "@/data/products";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const { t } = useLanguage();
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "material",
  );

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const sections = [
    {
      id: "material",
      title: t("productInfo.material"),
      content: (
        <div className="space-y-3">
          <p className="text-stone-700 font-light">{product.material.cover}</p>
          <div>
            <p className="text-xs uppercase tracking-wider font-light text-stone-600 mb-2">
              {t("productInfo.features")}
            </p>
            <ul className="space-y-1">
              {product.material.features.map((feature, idx) => (
                <li key={idx} className="text-sm text-stone-600 font-light">
                  • {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "innerpute",
      title: t("productInfo.innerPillow"),
      content: (
        <div className="space-y-3">
          <div>
            <p className="text-xs uppercase tracking-wider font-light text-stone-600 mb-1">
              {t("productInfo.origin")}
            </p>
            <p className="text-stone-700 font-light">
              {product.innerPillow.origin}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider font-light text-stone-600 mb-1">
              {t("productInfo.composition")}
            </p>
            <p className="text-stone-700 font-light">
              {product.innerPillow.composition}
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "design",
      title: t("productInfo.designMotif"),
      content: (
        <div className="space-y-3">
          <div>
            <p className="text-xs uppercase tracking-wider font-light text-stone-600 mb-1">
              {t("productInfo.artist")}
            </p>
            <p className="text-stone-700 font-light">{product.design.artist}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider font-light text-stone-600 mb-1">
              {t("productInfo.inspiration")}
            </p>
            <p className="text-stone-700 font-light">
              {product.design.inspiration}
            </p>
          </div>
          <p className="text-stone-700 font-light text-sm leading-relaxed">
            {product.design.details}
          </p>
        </div>
      ),
    },
    {
      id: "care",
      title: t("productInfo.careGuide"),
      content: (
        <ul className="space-y-2">
          {product.care.map((instruction, idx) => (
            <li key={idx} className="text-stone-700 font-light text-sm">
              • {instruction}
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <div className="space-y-0 border-t border-stone-200">
      {sections.map((section) => (
        <div key={section.id} className="border-b border-stone-200">
          <button
            onClick={() => toggleSection(section.id)}
            className="w-full flex items-center justify-between py-6 px-0 text-left hover:text-emerald-700 transition group"
          >
            <h3 className="text-stone-900 font-light text-lg group-hover:text-emerald-700 transition">
              {section.title}
            </h3>
            <ChevronDown
              size={20}
              className={`text-stone-600 transition-transform duration-300 ${
                expandedSection === section.id ? "rotate-180" : ""
              }`}
            />
          </button>

          {expandedSection === section.id && (
            <div className="pb-6 text-stone-700 font-light">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
