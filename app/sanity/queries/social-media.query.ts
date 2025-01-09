import groq from "groq";

export const SOCIAL_MEDIA_QUERY = groq`*[_type == "social-media"] | order(order asc)`;
