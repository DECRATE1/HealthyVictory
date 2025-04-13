import { type SchemaTypeDefinition } from "sanity";
import { infoType } from "../types/infoType";
import { aboutUsType } from "../types/aboutType";
import { newsType } from "../types/newsType";
import { ourProjectsType } from "../types/ourProjectsType";
import { useFulMaterialsType } from "../types/usefulMaterialsType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    infoType,
    aboutUsType,
    newsType,
    ourProjectsType,
    useFulMaterialsType,
  ],
};
