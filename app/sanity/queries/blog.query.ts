import groq from "groq";

export const BLOG_QUERY = groq`*[_type == "blog"]{name,year,madeAt,description,tags,url,"thumbnail": thumbnail.asset->url,showOnHome,order} | order(order asc)`;
