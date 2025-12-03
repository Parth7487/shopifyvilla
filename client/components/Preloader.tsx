import { useEffect, useState } from "react";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F1db9259392534731a88f590fac112035%2F6237ddfe75054290a617e455fb47f34b?format=webp&width=800"
          alt="VillaBella Logo"
          className="h-40 sm:h-48 md:h-56 w-auto"
        />
      </div>
    </div>
  );
};

export default Preloader;
