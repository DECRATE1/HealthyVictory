import { defineField, defineType } from "sanity";

export const useFulMaterialsType = defineType({
  name: "Materials",
  title: "Полезные Материалы",
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
      name: "Documents",
      title: "Файлы",
      type: "array",
      of: [
        defineField({
          name: "File",
          title: "Файл",
          type: "file",

          options: {
            storeOriginalFilename: true,
          },
        }),
      ],
    }),
  ],
});
