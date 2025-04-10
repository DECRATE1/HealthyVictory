import { type SchemaTypeDefinition } from "sanity";
import { infoType } from "../types/infoType";
import { aboutUsType } from "../types/aboutType";
import { newsType } from "../types/newsType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [infoType, aboutUsType, newsType],
};
