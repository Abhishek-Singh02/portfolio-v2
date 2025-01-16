import { ExperienceType, ResumeType } from "@/sanity";
import { FC } from "react";
import { BaseSection } from "./BaseSection";
import { SectionCard } from "./SectionCard";

export type ExperienceSectionProps = {
    experiences: ExperienceType[];
    resume: ResumeType;
};

export const ExperienceSection: FC<ExperienceSectionProps> = ({
    experiences,
    resume,
}) => {
    return (
        <BaseSection title="Experience" id="experience">
            <>
                <div className="flex flex-col gap-12 group/list">
                    {experiences.map((exp, index) => {
                        const {
                            company,
                            position,
                            timeline,
                            description,
                            tags,
                        } = exp;
                        return (
                            <SectionCard
                                className="max-lg:!gap-0"
                                key={index}
                                url={company.url}
                                leftSlot={
                                    <span className="z-50 align-end mb-2 mt-1 min-w-32 text-[13px] font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 whitespace-nowrap z-10">
                                        {timeline.start} -{" "}
                                        {timeline.end || "Present"}
                                    </span>
                                }
                                title={`${position} · ${company.name}`}
                                tags={tags}
                                description={description}
                            />
                        );
                    })}
                </div>
                <ViewResume resume={resume} />
            </>
        </BaseSection>
    );
};
export type ViewResumeProps = {
    resume: ResumeType;
};

export const ViewResume: FC<ViewResumeProps> = ({ resume }) => {
    return (
        <a
            className="mt-12 inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
            href={resume.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Resume (opens in a new tab)"
        >
            <span>
                View Full Resume
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </span>
        </a>
    );
};
