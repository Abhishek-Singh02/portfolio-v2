import { createClient } from "@sanity/client";
import { stegaEnabled, projectId, dataset, studioUrl } from "./projectDetails";

export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: "2023-03-20",
  stega: {
    enabled: stegaEnabled,
    studioUrl,
  },
});
