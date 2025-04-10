import { defineField, defineType } from "sanity";

export const aboutUsType = defineType({
  name: "AboutUs",
  title: "О нас",
  type: "document",
  fields: [
    defineField({
      name: "Short",
      title: "Краткая информация для главной страницы",
      type: "string",
    }),

    defineField({
      name: "Big",
      title: "Полная информация",
      type: "string",
    }),
    defineField({
      name: "MainImage",
      title: "Изображение для главной страницы",
      type: "image",
    }),

    defineField({
      name: "SecondImage",
      title: "Изображение для страницы 'О нас' ",
      type: "image",
    }),
  ],
});
