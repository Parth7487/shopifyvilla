import { createContext, useContext, useState, ReactNode } from "react";

type Currency = "NOK" | "EUR" | "USD" | "GBP" | "SEK";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (curr: Currency) => void;
  formatPrice: (priceInNOK: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined,
);

const exchangeRates: Record<Currency, number> = {
  NOK: 1,
  EUR: 0.095,
  USD: 0.1,
  GBP: 0.082,
  SEK: 1.05,
};

const currencySymbols: Record<Currency, string> = {
  NOK: "kr",
  EUR: "€",
  USD: "$",
  GBP: "£",
  SEK: "kr",
};

const currencyDecimals: Record<Currency, number> = {
  NOK: 0,
  EUR: 2,
  USD: 2,
  GBP: 2,
  SEK: 0,
};

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>("NOK");

  const formatPrice = (priceInNOK: number): string => {
    const rate = exchangeRates[currency];
    const convertedPrice = priceInNOK * rate;
    const decimals = currencyDecimals[currency];
    const symbol = currencySymbols[currency];

    if (currency === "NOK" || currency === "SEK") {
      return `${Math.round(convertedPrice)} ${symbol}`;
    }
    return `${symbol}${convertedPrice.toFixed(decimals)}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};
