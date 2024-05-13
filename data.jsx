import { AiFillStar } from "react-icons/ai";

const data = [
  //new datas
  {
    img: "https://www.nicekicks.com/files/2012/02/Jordan-Son-of-Mars.jpg",
    title: "Jordan Son of Mars Air Max 2009",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "100",
    company: "Nike",
    color: "white",
    category: "heels",
  },
  {
    img: "https://4.bp.blogspot.com/-2ka596ATJl0/TyZNJ7uAVCI/AAAAAAAABmg/HTfiaUG98Ts/s1600/Womens-Nike-Dunk-SB-High-Heels-Black-Outlet-Sale-For-2011-20.jpg",
    title: "Air Max High Heel",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "100",
    company: "Nike",
    color: "black",
    category: "heels",
  },
  {
    img: "https://cdna.lystit.com/photos/18c5-2016/01/26/vans-checkerboard-whiteblack-slide-on-white-product-2-803674268-normal.jpeg",
    title: "Vans Slide-on",
    
    reviews: "(123 reviews)",
    prevPrice: "$100,00",
    newPrice: "50",
    company: "Vans",
    color: "white",
    category: "sandals",
  },
  {
    img: "https://cdnc.lystit.com/1200/630/tr/photos/eastbay/5d1d98df/vans-BlackMarshmallowVans-Slide-on.jpeg",
    title: "Vans Slide-on",
    
    reviews: "(123 reviews)",
    prevPrice: "$100,00",
    newPrice: "50",
    company: "Vans",
    color: "black",
    category: "sandals",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/71sg%2BNr5NaL._AC_UL1500_.jpg",
    title: "PUMA Starcat Sfoam Slides",
    
    reviews: "(123 reviews)",
    prevPrice: "$100,00",
    newPrice: "50",
    company: "Puma",
    color: "black",
    category: "sandals",
  },
  {
    img: "https://cms-cdn.thesolesupplier.co.uk/2017/08/Rihanna-x-PUMA-Fenty-Fur-Slide-Blue-01_w900.png",
    title: "PUMA Fenty Fur Slides",
    
    reviews: "(123 reviews)",
    prevPrice: "$100,00",
    newPrice: "50",
    company: "Puma",
    color: "blue",
    category: "sandals",
  },
  {
    img: "https://cdnd.lystit.com/photos/jdsports/121d0864/puma-BlackWhite-Popcat-Slides.jpeg",
    title: "Puma Popcat Slides",
    
    reviews: "(123 reviews)",
    prevPrice: "$100,00",
    newPrice: "50",
    company: "Puma",
    color: "black",
    category: "sandals",
  },
  {
    img: "https://www.tint-store.com/de-de/Data/Images/Big/nike-air-max-90-slide-sneaker-damen-schwarz-f001-lifestyle-schuhe-damen-sneakers-ct5241-1.jpg",
    title: "Nike Air Max 90 Slide",
    
    reviews: "(123 reviews)",
    prevPrice: "$150,00",
    newPrice: "100",
    company: "Nike",
    color: "green",
    category: "sandals",
  },
  {
    img: "https://cdna.lystit.com/photos/6126-2014/07/22/nike-black-comfort-slide-2-product-1-21939518-2-332634863-normal.jpeg",
    title: "Nike Comfort Slide 2",
    
    reviews: "(123 reviews)",
    prevPrice: "$150,00",
    newPrice: "100",
    company: "Nike",
    color: "green",
    category: "sandals",
  },
  {
    img: "https://cdnd.lystit.com/photos/5420-2014/05/23/nike-blue-solarsoft-slide-product-1-20202600-5-791588877-normal.jpeg",
    title: "Nike Solarsoft Slide",
    
    reviews: "(123 reviews)",
    prevPrice: "$150,00",
    newPrice: "100",
    company: "Nike",
    color: "blue",
    category: "sandals",
  },
  {
    img: "https://cdn11.bigcommerce.com/s-mf8nk5mp4s/images/stencil/1280x1280/products/1338/644/nikecomfortslide2gameroyal__92256.1506106177.jpg?c=2&imbypass=on",
    title: "NIKE COMFORT SLIDE 2 YOUTH",
    
    reviews: "(123 reviews)",
    prevPrice: "$100,00",
    newPrice: "50",
    company: "Nike",
    color: "blue",
    category: "sandals",
  },
  {
    img: "https://cdna.lystit.com/1200/630/tr/photos/amazon-prime/56849bc7/adidas-originals-PinkScarletPink-Adilette-Slides-Sneaker.jpeg",
    title: "Adilette Slides for Women",
    
    reviews: "(123 reviews)",
    prevPrice: "$150,00",
    newPrice: "100",
    company: "Adidas",
    color: "red",
    category: "sandals",
  },
  {
    img: "https://images.internetstores.de/products/1141010/02/addebf/adidas_Adilette_Comfort_Slides_Herren_dark_blue[1920x1920].jpg?forceSize=false&forceAspectRatio=true&useTrim=true",
    title: "Adilette Comfort Slippers",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "100",
    company: "Adidas",
    color: "blue",
    category: "sandals",
  },
  {
    img: "https://media.endclothing.com/media/catalog/product/0/6/06-04-2023-LS_HQ4670_m1_1.jpg",
    title: "Adilette 22 slides",
    
    reviews: "(123 reviews)",
    prevPrice: "$100,00",
    newPrice: "50",
    company: "Adidas",
    color: "white",
    category: "sandals",
  },
  {
    img: "https://images.internetstores.de/products/1141004/02/e793c7/adidas_Adilette_Comfort_Slipper_Herren_core_black[1920x1920].jpg?forceSize=false&forceAspectRatio=true&useTrim=true",
    title: "Adilette Comfort Slippers",
    
    reviews: "(123 reviews)",
    prevPrice: "$100,00",
    newPrice: "50",
    company: "Adidas",
    color: "black",
    category: "sandals",
  },
  //old datas
  {
    img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
    title: "Nike Air Monarch IV",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "white",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "Nike Air Vapormax Plus",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "red",
    category: "sneakers",
  },

  {
    img: "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
    title: "Nike Waffle One Sneaker",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "green",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
    title: "Nike Running Shoe",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Adidas",
    color: "black",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
    title: "Flat Slip On Pumps",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Vans",
    color: "green",
    category: "flats",
  },
  {
    img: "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
    title: "Knit Ballet Flat",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Adidas",
    color: "black",
    category: "flats",
  },

  {
    img: "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg",
    title: "Loafer Flats",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Vans",
    color: "white",
    category: "flats",
  },

  {
    img: "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
    title: "Nike Zoom Freak",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "green",
    category: "sneakers",
  },

  {
    img: "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
    title: "Nike Men's Sneaker",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Adidas",
    color: "blue",
    category: "sneakers",
  },

  {
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    title: "PUMA BLACK-OCE",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Puma",
    color: "green",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
    title: "Pacer Future Sneaker",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Puma",
    color: "red",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
    title: "Unisex-Adult Super",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Puma",
    color: "black",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_UX575_.jpg",
    title: "Roma Basic Sneaker",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Puma",
    color: "white",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/7128-af7joL._AC_UY575_.jpg",
    title: "Pacer Future Doubleknit",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Puma",
    color: "black",
    category: "sneakers",
  },

  {
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    title: "Fusion Evo Golf Shoe",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "100",
    company: "Puma",
    color: "green",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg",
    title: "Rainbow Chex Skate",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "100",
    company: "Vans",
    color: "red",
    category: "flats",
  },
  {
    img: "https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg",
    title: "Low-Top Trainers",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "100",
    company: "Vans",
    color: "white",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/71pf7VFs9CL._AC_UX575_.jpg",
    title: "Vans Unisex Low-Top",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "100",
    company: "Vans",
    color: "blue",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg",
    title: "Classic Bandana Sneakers",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Nike",
    color: "black",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/61bncQ44yML._AC_UX695_.jpg",
    title: "Chunky High Heel",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Vans",
    color: "black",
    category: "heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/71czu7WgGuL._AC_UY695_.jpg",
    title: "Slip On Stiletto High Heel",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "100",
    company: "puma",
    color: "black",
    category: "heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
    title: "DREAM PAIRS Court Shoes",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Nike",
    color: "red",
    category: "heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "Nike Air Vapormax Plus",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "red",
    category: "sneakers",
  },

  {
    img: "https://m.media-amazon.com/images/I/51PGWTXgf-L._AC_UY625_.jpg",
    title: "Low Mid Block Heels",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "black",
    category: "heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/616sA5XUKtL._AC_UY675_.jpg",
    title: "Chunky High Heel",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Adidas",
    color: "black",
    category: "heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/71h5+MbEK7L._AC_UY625_.jpg",
    title: "Amore Fashion Stilettos",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Adidas",
    color: "white",
    category: "heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/61uw5RDxKQL._AC_UY625_.jpg",
    title: "Bridal Sandals Glitter",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Adidas",
    color: "black",
    category: "heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg",
    title: "Wedding Prom Bridal",
    
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Adidas",
    color: "black",
    category: "flats",
  },
];

export default data;
