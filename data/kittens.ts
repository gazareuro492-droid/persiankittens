

export type Kitten = {
  id: string;
  name: string;
  breed: string;
  color: string;
  age: string;
  sex: "Male" | "Female";
  price: number;
  currency: "CAD";
  image: string;
  available: boolean;
  description: {
    en: string;
    fr: string;
  };
};


export const kittens: Kitten[] = [
 
{
  id: "PK001",
  name: "Ivy",
  breed: "Persian",
  color: "White",
  age: "11 weeks",
  sex: "Female",
  price: 1000,
  currency: "CAD",
  image: "/images/Ivy5.jpg",
  available: true,
  description: {
    en: "Meet Ivy, a beautiful white Persian kitten. Contact us to learn more about her.",
    fr: "Découvrez Ivy, une magnifique chatonne Persane blanche. Contactez-nous pour en savoir plus sur elle.",
  },
},
{
  id: "PK002",
  name: "Hector",
  breed: "Persian",
  color: "Grey",
  age: "12 weeks",
  sex: "Male",
  price: 1000,
  currency: "CAD",
  image: "/images/Hector3.jpg",
  available: true,
  description: {
    en: "Meet Hector, a beautiful grey Persian kitten. Contact us to learn more about him.",
    fr: "Voici Hector, un magnifique chaton persan gris. Contactez-nous pour en savoir plus à son sujet..",
  },
},

{
  id: "PK003",
  name: "Lady",
  breed: "Persian",
  color: "Golden Shaded",
  age: "11 weeks",
  sex: "Female",
  price: 1000,
  currency: "CAD",
  image: "/images/Lady8.jpeg",
  available: true,
  description: {
    en: "Meet Lady, a beautiful Golden Shaded Persian kitten. Contact us to learn more about her.",
    fr: "Voici Lady, une magnifique chatonne persane de robe « golden shaded ». Contactez-nous pour en savoir plus à son sujet..",
  },
},

{
  id: "PK004",
  name: "Bella",
  breed: "Persian",
  color: "Cream White",
  age: "11 weeks",
  sex: "Female",
  price: 1000,
  currency: "CAD",
  image: "/images/Bella.jpeg",
  available: true,
  description: {
    en: "Meet Bella, a beautiful Cream White Persian kitten. Contact us to learn more about her.",
    fr: "Voici Bella, une adorable chatonne persane blanc crème. Contactez-nous pour en savoir plus à son sujet..",
  },
},

{
  id: "PK005",
  name: "Bear",
  breed: "Persian",
  color: "Blue",
  age: "11 weeks",
  sex: "Male",
  price: 1000,
  currency: "CAD",
  image: "/images/Bear5.jpg",
  available: true,
  description: {
    en: "Meet Bear, a beautiful Blue Persian kitten. Contact us to learn more about him.",
    fr: "Voici Bear, un magnifique chaton persan bleu. Contactez-nous pour en savoir plus.",
  },
},

{
  id: "PK006",
  name: "Cooper",
  breed: "Persian",
  color: "Golden Tabby",
  age: "12 weeks",
  sex: "Male",
  price: 1100,
  currency: "CAD",
  image: "/images/Cooper.jpeg",
  available: true,
  description: {
    en: "Meet Cooper, a beautiful Golden Tabby Persian kitten. Contact us to learn more about him.",
    fr: "Voici Cooper, un magnifique chaton persan Golden Tabby. Contactez-nous pour en savoir plus..",
  },
},

{
  id: "PK007",
  name: "Lucy",
  breed: "Persian",
  color: "Calico Persian",
  age: "10 weeks",
  sex: "Female",
  price: 900,
  currency: "CAD",
  image: "/images/lucy.jpeg",
  available: true,
  description: {
    en: "Meet Lucy, a beautiful Calico Persian kitten. Contact us to learn more about her..",
    fr: "Voici Lucy, une magnifique chatonne persane calico. Contactez-nous pour en savoir plus sur elle.",
  },
},

{
  id: "PK008",
  name: "Anna",
  breed: "Persian",
  color: "Cream Shaded",
  age: "11 weeks",
  sex: "Female",
  price: 1000,
  currency: "CAD",
  image: "/images/Anna.jpeg",
  available: true,
  description: {
    en: "Meet Anna, a beautiful Cream Shaded Persian kitten. Contact us to learn more about her.",
    fr: "Voici Anna, une magnifique chatonne persane crème ombrée. Contactez-nous pour en savoir plus.",
  },
},

{
   id: "PK009",
  name: "Ayanna",
  breed: "Persian",
  color: "Golden Tabby",
  age: "11 weeks",
  sex: "Female",
  price: 1000,
  currency: "CAD",
  image: "/images/Ayanna.jpeg",
  available: true,
  description: {
    en: "Meet Ayanna, a beautiful Golden Tabby Persian kitten. Contact us to learn more about her.",
    fr: "Voici Ayanna, une magnifique chatonne persane Golden Tabby. Contactez-nous pour en savoir plus.",
  },
},
];

