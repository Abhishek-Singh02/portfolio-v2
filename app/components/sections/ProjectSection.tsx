import { ProjectType } from "@/sanity";
import { FC } from "react";
import { BaseSection } from "./BaseSection";
import { SectionCard } from "./SectionCard";

export type ProjectSectionProps = {
    projects: ProjectType[];
};

export const ProjectSection: FC<ProjectSectionProps> = ({ projects }) => {
    return (
        <BaseSection title="Projects" id="projects">
            <>
                <div className="flex flex-col gap-12 group/list">
                    {projects
                        .filter(({ showOnHome }) => showOnHome)
                        .map((project, index) => {
                            const { description, tags, name, url, thumbnail } =
                                project;
                            return (
                                <SectionCard
                                    key={index}
                                    url={url}
                                    className="lg:!gap-4"
                                    leftSlot={
                                        <img
                                            loading="lazy"
                                            alt={project.name}
                                            src={thumbnail}
                                            decoding="sync"
                                            width="200"
                                            height="48"
                                            data-nimg="1"
                                            className="z-50 aspect-video lg:h-20 object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:translate-y-1"
                                        />
                                    }
                                    title={name}
                                    tags={tags}
                                    description={description}
                                />
                            );
                        })}
                </div>
                {projects.filter(({ showOnHome }) => !showOnHome).length >
                    0 && <ViewProjectsArchive />}
            </>
        </BaseSection>
    );
};

export type ViewProjectsArchiveProps = {};

export const ViewProjectsArchive: FC<ViewProjectsArchiveProps> = () => {
    return (
        <a
            className="mt-12 inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
            aria-label="View Full Project Archive"
            href="/archive"
        >
            <span>
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                    View Full Project{" "}
                </span>
                <span className="whitespace-nowrap">
                    <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                        Archive
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </span>
            </span>
        </a>
    );
};
