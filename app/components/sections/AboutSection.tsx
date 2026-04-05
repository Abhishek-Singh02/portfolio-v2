import { AboutType } from "@/sanity";
import { FC } from "react";
import { BaseSection } from "./BaseSection";
import { parseHtml } from "@/utils/parseHtml";

export type AboutSectionProps = {
    about: AboutType;
};

export const AboutSection: FC<AboutSectionProps> = ({ about }) => {
    return (
        <BaseSection id="about" title="About">
            <div>
                {about.sections.map((section, index) => {
                    return (
                        <p className="mb-4" key={index}>
                            {parseHtml(section)}
                        </p>
                    );
                })}
            </div>
        </BaseSection>
    );
};
