import { defineField, defineType } from "sanity";

export const infoType = defineType({
  name: "Info",
  title: "Информация",
  type: "document",
  fields: [
    defineField({
      name: "PhoneNumber",
      title: "Номер телефона",
      type: "string",
    }),
    defineField({
      name: "Telegram",
      title: "Телеграм",
      type: "string",
    }),
    defineField({
      name: "Vk",
      title: "Вконтакте",
      type: "string",
    }),
    defineField({
      name: "Email",
      title: "Почта",
      type: "string",
    }),
    defineField({
      name: "Adress",
      title: "Адрес",
      type: "string",
    }),
    defineField({
      name: "Logo",
      title: "Лого",
      type: "image",
    }),
  ],
});
