export interface Product {
  id: string;
  name: string;
  subName: string;
  price: string;
  description: string;
  folderPath: string;
  themeColor: string;
  gradient: string;
  features: string[];
  stats: { label: string; val: string }[];
  section1: { title: string; subtitle: string };
  section2: { title: string; subtitle: string };
  section3: { title: string; subtitle: string };
  section4: { title: string; subtitle: string };
  detailsSection: {
    title: string;
    description: string;
    imageAlt: string;
  };
  freshnessSection: {
    title: string;
    description: string;
  };
  buyNowSection: {
    price: string;
    unit: string;
    processingParams: string[];
    deliveryPromise: string;
    returnPolicy: string;
  };
}

export const products: Product[] = [
  {
    id: "feast",
    name: "Feast Chocolate",
    subName: "Crunch into indulgence.",
    price: "₹40",
    description: "Rich chocolate coating - Roasted nuts - Creamy chocolate ice cream",
    folderPath: "/images/feast",
    themeColor: "#6D3B25",
    gradient: "linear-gradient(135deg, #6D3B25 0%, #2B1209 100%)",

    features: [
      "Rich Chocolate Coating",
      "Crunchy Roasted Nuts",
      "Creamy Chocolate Ice Cream",
    ],

    stats: [
      { label: "Chocolate", val: "Rich" },
      { label: "Nuts", val: "Crunchy" },
      { label: "Center", val: "Creamy" },
    ],

    section1: {
      title: "Feast Chocolate.",
      subtitle: "Crunch into indulgence.",
    },

    section2: {
      title: "A shell made to crack.",
      subtitle:
        "A thick, rich chocolate coating packed with crunchy roasted nut pieces delivers an irresistible first bite.",
    },

    section3: {
      title: "Creamy chocolate at the center.",
      subtitle:
        "Break through the crunchy shell and discover a smooth, velvety chocolate ice cream center.",
    },

    section4: {
      title: "Every bite. A little celebration.",
      subtitle: "Crunchy outside. Creamy inside. Completely indulgent.",
    },

    detailsSection: {
      title: "The Ultimate Chocolate Crunch",
      description:
        "Feast brings together two irresistible textures in one iconic ice cream bar. A rich chocolate shell loaded with crunchy roasted nut pieces surrounds a smooth and creamy chocolate ice cream center. Every bite delivers the satisfying contrast of crisp chocolate, roasted crunch, and velvety ice cream.",
      imageAlt: "Feast Chocolate Ice Cream Bar",
    },

    freshnessSection: {
      title: "Made for the Perfect Bite",
      description:
        "From the first crack of the chocolate shell to the smooth chocolate ice cream inside, every element is designed to create a satisfying contrast of textures. Keep frozen until ready to enjoy for the ultimate creamy and crunchy experience.",
    },

    buyNowSection: {
      price: "₹40",
      unit: "per ice cream bar",
      processingParams: [
        "Chocolate Coated",
        "Nut Crunch",
        "Creamy Ice Cream",
      ],
      deliveryPromise:
        "Delivered frozen and carefully packed to preserve the perfect ice cream texture.",
      returnPolicy: "Enjoy every bite fresh from the freezer.",
    },
  },
  {
    id: "feast-dark-hazelnut",
    name: "Feast Dark Hazelnut",
    subName: "Intense cocoa with toasted hazelnuts.",
    price: "₹50",
    description: "70% Dark cocoa shell - Toasted Piedmont hazelnuts - Bittersweet center",
    folderPath: "/images/feast",
    themeColor: "#421C0E",
    gradient: "linear-gradient(135deg, #421C0E 0%, #170905 100%)",

    features: [
      "70% Dark Chocolate Shell",
      "Toasted Piedmont Hazelnuts",
      "Bittersweet Truffle Core",
    ],

    stats: [
      { label: "Dark Cocoa", val: "70%" },
      { label: "Hazelnuts", val: "Toasted" },
      { label: "Profile", val: "Intense" },
    ],

    section1: {
      title: "Feast Dark Hazelnut.",
      subtitle: "Deep roasted intensity.",
    },

    section2: {
      title: "Bittersweet snap.",
      subtitle:
        "A robust 70% dark chocolate crust generously crusted with slow-roasted crushed hazelnuts.",
    },

    section3: {
      title: "Silky molten dark heart.",
      subtitle:
        "Inside awaits an intensely rich dark chocolate ice cream crafted with single-origin beans.",
    },

    section4: {
      title: "For the true chocolate connoisseur.",
      subtitle: "Bold, nutty, unapologetically deep.",
    },

    detailsSection: {
      title: "Intense Cocoa & Roasted Hazelnuts",
      description:
        "Crafted for those who crave deep cocoa notes and roasted aromatics. High-percentage dark chocolate enrobes a dense chocolate ice cream with a subtle hazelnut praline swirl.",
      imageAlt: "Feast Dark Hazelnut Ice Cream Bar",
    },

    freshnessSection: {
      title: "Crafted for Pure Indulgence",
      description:
        "Store at -18°C. Let rest at ambient temperature for 60 seconds before biting to unlock aromatic cocoa volatiles and maximum nut crunch.",
    },

    buyNowSection: {
      price: "₹50",
      unit: "per ice cream bar",
      processingParams: [
        "Dark Chocolate Shell",
        "Toasted Hazelnuts",
        "Rich Truffle Center",
      ],
      deliveryPromise:
        "Dispatched in insulated dry-ice packs guaranteed frozen for up to 4 hours.",
      returnPolicy: "Guaranteed satisfaction in every crunchy bite.",
    },
  },
  {
    id: "feast-salted-caramel",
    name: "Feast Salted Caramel",
    subName: "Golden caramel swirl in milk chocolate.",
    price: "₹45",
    description: "Belgian milk chocolate - Caramelized almond brittle - Salted caramel core",
    folderPath: "/images/feast",
    themeColor: "#8C4F1E",
    gradient: "linear-gradient(135deg, #8C4F1E 0%, #291206 100%)",

    features: [
      "Belgian Milk Chocolate",
      "Caramelized Almond Brittle",
      "Fleur de Sel Caramel Swirl",
    ],

    stats: [
      { label: "Caramel", val: "Gourmet" },
      { label: "Almonds", val: "Brittle" },
      { label: "Salt", val: "Fleur de Sel" },
    ],

    section1: {
      title: "Feast Salted Caramel.",
      subtitle: "The dance of sweet & savory.",
    },

    section2: {
      title: "Caramelized almond crack.",
      subtitle:
        "Golden milk chocolate coating studded with glistening crystallized almond brittle.",
    },

    section3: {
      title: "Ribbon of molten fleur de sel.",
      subtitle:
        "Creamy vanilla caramel ice cream swirled with gooey handcrafted sea salt caramel.",
    },

    section4: {
      title: "Pure golden bliss.",
      subtitle: "Warm caramel notes meets freezing velvet ice cream.",
    },

    detailsSection: {
      title: "Golden Caramel & Crunchy Almond Brittle",
      description:
        "An irresistible fusion of smooth Belgian milk chocolate, golden crunch, and rich caramel ribbons balancing sweetness with mineral sea salt.",
      imageAlt: "Feast Salted Caramel Ice Cream Bar",
    },

    freshnessSection: {
      title: "Artisanal Confectionery Standards",
      description:
        "Made with real dairy cream and slow-cooked caramel. Delivered in climate-controlled temperature boxes straight to your doorstep.",
    },

    buyNowSection: {
      price: "₹45",
      unit: "per ice cream bar",
      processingParams: [
        "Milk Chocolate Shell",
        "Almond Brittle",
        "Salted Caramel Core",
      ],
      deliveryPromise:
        "Express 30-minute hyper-local frozen delivery in select cities.",
      returnPolicy: "100% frozen arrival guarantee or instant refund.",
    },
  },
];
