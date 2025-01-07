import groq from "groq";

export const ABOUT_QUERY = groq`*[_type == "about"][0]`;
