import { defineField, defineType } from "sanity";

export const newsType = defineType({
  name: "News",
  title: "Новости",
  type: "document",
  fields: [
    defineField({
      name: "Title",
      title: "Название",
      type: "string",
    }),

    defineField({
      name: "Text",
      title: "Основной текст",
      type: "string",
    }),
    defineField({
      name: "Preview",
      title: "Превью",
      type: "image",
    }),
    defineField({
      name: "Date",
      title: "Дата публикации",
      type: "string",
    }),
  ],
});
