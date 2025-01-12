import { createClient } from "@sanity/client";
import { dataset, projectId } from "./projectDetails";

export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: "2023-03-20",
});
