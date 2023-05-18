import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import schemas from "./Sanity/schemas";
const config = defineConfig({
  projectId: "f5t7diuj",
  dataset: "production",
  useCdn: false,
  title: "My Personal Website",

  apiVersion: "2023-05-16",

  basePath: "/admin",

  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
