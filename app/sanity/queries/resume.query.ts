import groq from "groq";

export const RESUME_QUERY = groq`*[_type == "resume"][0]{name,"url": file.asset->url}`;
