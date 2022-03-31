import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    title: "Trekking",
    description:
      "Computer programming is the process of designing and building an executable computer program to accomplish a specific computing",
      category:"trekking",
  },
  {
    _id: uuid(),
    title: "Skiing",
    description:
      "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application",
    category:'skiing',
  },
  {
    _id: uuid(),
    categoryName: "Rock Climbing",
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
    category:'rockclimbing'
  },
  {
    _id: uuid(),
    categoryName: "Snorkelling",
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
    category:'snorkeling'
  },
];
