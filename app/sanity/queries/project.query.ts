import groq from "groq";

export const PROJECT_QUERY = groq`*[_type == "project"]{name,year,madeAt,description,tags,url,"thumbnail": thumbnail.asset->url,showOnHome}`;
