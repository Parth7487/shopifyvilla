export interface Product {
  id: string;
  title: string;
  collection: string;
  subtitle: string;
  basePrice: number;
  bundlePrice: number;
  description: string;
  motif: string;
  images: string[];
  material: {
    cover: string;
    features: string[];
  };
  innerPillow: {
    origin: string;
    composition: string;
  };
  design: {
    artist: string;
    inspiration: string;
    details: string;
  };
  care: string[];
  relatedProducts: string[];
}

export const products: Product[] = [
  {
    id: "riviera-tree",
    title: "Riviera - The Tree",
    collection: "Riviera Kolleksjonen",
    subtitle: "Mosaic Tree Motif",
    basePrice: 499,
    bundlePrice: 799,
    description:
      "En vakker pute inspirert av mediterrane mosaikkmanstre. Designet fremstiller et kraftig tre under en blå, symbolisering og og naturlig skjønnhet.",
    motif: "Mosaic Tree Motif",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2Feea18823dba549558ea837e33683ed56?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F3d2e70bd145845ebbf0cfe480a5fe954?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2Fa94b10c4e8a54f7b85172b93de4f3bd2?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2Fda7589f9820947c49d38b7ef90428275?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2Fb3a5da4389604f86804763b12edac687?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F8794fb9299944d8fb22f836d8a1d9ff5?format=webp&width=800",
    ],
    material: {
      cover: "100% bomull",
      features: ["Metal glidelås", "Gull kant", "Håndlagd design"],
    },
    innerPillow: {
      origin: "Norsk Dun",
      composition: "100% European duck feather",
    },
    design: {
      artist: "Jelena Zivkovic",
      inspiration: "Mediterranean mosaic traditions",
      details:
        "Designet kombinerer klassisk mosaikkinspirasjonen med moderne kunstner Jelena Zivkovics tolkning av naturens skjønnhet.",
    },
    care: [
      "Maksimalt 30°C",
      "Ikke tumletørk",
      "Håndvask anbefales",
      "Lufttørk i skyggen",
    ],
    relatedProducts: ["riviera-woman", "riviera-peacock"],
  },
  {
    id: "riviera-woman",
    title: "Riviera - The Woman & Vase",
    collection: "Riviera Kolleksjonen",
    subtitle: "Classical Figure Motif",
    basePrice: 499,
    bundlePrice: 799,
    description:
      "En elegant pute med klassisk mosaikkmotiv av en kvinne og en vase. Inspirasjonen kommer fra antikke middelhavskultur og klassisk kunsthistorie.",
    motif: "Classical Figure Motif",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F0fbe66729078445480d3ce6031e21397?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F7a1ad6da2a4747fc819df1b04990de15?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2Fab4340141e5c49d990a90e70c1ed9bd5?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F8e758c8ec0c9458791f752486df8abfb?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F639ae31eb17848c4a7c71830744f2827?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F45a82758b1ea476bb2620b2abe37d659?format=webp&width=800",
    ],
    material: {
      cover: "100% bomull",
      features: ["Metal glidelås", "Gull kant", "Håndlagd design"],
    },
    innerPillow: {
      origin: "Norsk Dun",
      composition: "100% European duck feather",
    },
    design: {
      artist: "Jelena Zivkovic",
      inspiration: "Classical Mediterranean art",
      details:
        "En tolkning av klassisk antikk kunst, der en ung kvinne og en vakker vase fremstilles i tradisjonell mosaikkteknikk.",
    },
    care: [
      "Maksimalt 30°C",
      "Ikke tumletørk",
      "Håndvask anbefales",
      "Lufttørk i skyggen",
    ],
    relatedProducts: ["riviera-tree", "riviera-peacock"],
  },
  {
    id: "riviera-peacock",
    title: "Riviera - The Peacock & Arch",
    collection: "Riviera Kolleksjonen",
    subtitle: "Peacock & Architecture Motif",
    basePrice: 499,
    bundlePrice: 799,
    description:
      "En praktfull pute som viser en vakker påfugl ved siden av klassisk arkitektur. Kombinasjonen symboliserer eleganse og tiden.",
    motif: "Peacock & Architecture Motif",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F1b4a24ec65264a83b27f8c6ab1bec8de?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F9fa6e7b091cc402d956c3f3c07b9a671?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2Fd9173963b0be4571af804cf2f2e6bc53?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F27f4bf48bde94c77b17002f113b031b2?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F9de34c18c954484293b6d6858cc0df6b?format=webp&width=800",
    ],
    material: {
      cover: "100% bomull",
      features: ["Metal glidelås", "Gull kant", "Håndlagd design"],
    },
    innerPillow: {
      origin: "Norsk Dun",
      composition: "100% European duck feather",
    },
    design: {
      artist: "Jelena Zivkovic",
      inspiration: "Mediterranean garden symbolism",
      details:
        "En harmonisk blanding av dyreliv og arkitektur, som representerer naturens og menneskets skapelse i perfekt balanse.",
    },
    care: [
      "Maksimalt 30°C",
      "Ikke tumletørk",
      "Håndvask anbefales",
      "Lufttørk i skyggen",
    ],
    relatedProducts: ["riviera-tree", "riviera-woman"],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getRelatedProducts = (productId: string): Product[] => {
  const product = getProductById(productId);
  if (!product) return [];
  return product.relatedProducts
    .map((id) => getProductById(id))
    .filter((p) => p !== undefined) as Product[];
};
