import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  images: string[];
  bgGradient: string;
}

export default function ProductCard({
  name,
  description,
  price,
  images,
  bgGradient,
}: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovering && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 2000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setCurrentImageIndex(0);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovering, images.length]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="group cursor-pointer transition"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative h-64 sm:h-80 md:h-96 ${bgGradient} rounded-lg overflow-hidden mb-6 shadow-sm hover:shadow-2xl transition duration-300`}
      >
        {images && images.length > 0 ? (
          <>
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${name} - view ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  idx === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
                width="600"
                height="600"
              />
            ))}
            {images.length > 1 && (
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1 z-10">
                {images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex
                        ? "w-6 bg-white"
                        : "w-1.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-stone-50">
            <div className="text-center">
              <p className="text-stone-500 font-light">{name}</p>
            </div>
          </div>
        )}
      </div>

      <h3 className="text-xl text-stone-900 font-light mb-2">{name}</h3>
      <p className="text-sm text-stone-600 font-light mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-lg text-stone-900">{price}</span>
        <ArrowRight
          size={18}
          className="text-stone-700 group-hover:translate-x-1 transition"
        />
      </div>
    </div>
  );
}
