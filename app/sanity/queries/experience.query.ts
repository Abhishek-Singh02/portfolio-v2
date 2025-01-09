import groq from "groq";

export const EXPERIENCE_QUERY = groq`*[_type == "experience"] | order(order asc)`;
