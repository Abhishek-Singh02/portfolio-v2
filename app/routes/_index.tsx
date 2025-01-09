import {
    AboutSection,
    BlogsSection,
    ClientOnly,
    CursorTracker,
    ExperienceSection,
    Footer,
    IntroSection,
    ProjectSection,
    SectionNavbar,
    SocialMediaLinks,
} from "@/components";
import {
    AboutType,
    BlogType,
    ExperienceType,
    IntroType,
    loadQuery,
    ProjectType,
    ResumeType,
    SocialMediaType,
} from "@/sanity";
import { SOCIAL_MEDIA_QUERY } from "@/sanity/queries/social-media.query";
import { useLoaderData } from "@remix-run/react";
import {
    ABOUT_QUERY,
    BLOG_QUERY,
    EXPERIENCE_QUERY,
    INTRO_QUERY,
    PROJECT_QUERY,
    RESUME_QUERY,
} from "../sanity/queries";

export const loader = async () => {
  const [intro, about, socialMedias, experiences, projects, resume, blogs] =
    (await Promise.all(
      [
        INTRO_QUERY,
        ABOUT_QUERY,
        SOCIAL_MEDIA_QUERY,
        EXPERIENCE_QUERY,
        PROJECT_QUERY,
        RESUME_QUERY,
        BLOG_QUERY,
      ].map((query) => loadQuery(query).then(({ data }) => data))
    )) as [
      IntroType,
      AboutType,
      SocialMediaType[],
      ExperienceType[],
      ProjectType[],
      ResumeType,
      BlogType[]
    ];
  return { intro, about, socialMedias, experiences, projects, resume, blogs };
};

export default function Index() {
  const { intro, resume, socialMedias, about, experiences, projects, blogs } =
    useLoaderData<ReturnType<typeof loader>>();
  return (
    <div className="relative">
      <CursorTracker />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <div>
              <IntroSection intro={intro} />
              <ClientOnly fallback={null}>
                <SectionNavbar />
              </ClientOnly>
            </div>
            <SocialMediaLinks socialMedias={socialMedias} />
          </header>
          <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
            <AboutSection about={about} />
            <ExperienceSection experiences={experiences} resume={resume} />
            <ProjectSection projects={projects} />
            <BlogsSection blogs={blogs} />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
