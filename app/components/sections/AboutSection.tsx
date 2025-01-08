import { AboutType } from "@/sanity";
import { FC } from "react";
import { BaseSection } from "./BaseSection";

export type AboutSectionProps = {
  about: AboutType;
};

export const AboutSection: FC<AboutSectionProps> = ({ about }) => {
  return (
    <BaseSection id="about" title="About">
      <div>
        {about.sections.map((section, index) => (
          <p className="mb-4" key={index}>
            {section}
          </p>
        ))}
      </div>
    </BaseSection>
  );
};
