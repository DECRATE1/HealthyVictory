import { defineField, defineType } from "sanity";

export const ourProjectsType = defineType({
  name: "Projects",
  title: "Наши проекты",
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
    defineField({
      name: "Media",
      title: "Видео или Фотографии",
      type: "array",
      of: [
        defineField({
          name: "mefiaFile",
          title: "Медиа",
          type: "file",
          options: {
            accept: "image/*, video/*",
          },
        }),
      ],
    }),
  ],
});
