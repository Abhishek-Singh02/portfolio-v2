import { AboutType } from "@/sanity";
import { FC } from "react";
import { BaseSection } from "./BaseSection";
import parse, { attributesToProps, domToReact } from "html-react-parser";

export type AboutSectionProps = {
    about: AboutType;
};

export const AboutSection: FC<AboutSectionProps> = ({ about }) => {
    return (
        <BaseSection id="about" title="About">
            <div>
                {about.sections.map((section, index) => {
                    const options = {
                        replace(ele: any) {
                            if (ele.type === "script") {
                                return <></>;
                            } else if (ele.type === "tag" && ele.name === "a") {
                                const props = attributesToProps(ele.attribs);
                                return (
                                    <a
                                        target="_blank"
                                        referrerPolicy="no-referrer"
                                        {...props}
                                        className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                                    >
                                        {domToReact(ele.children, options)}
                                    </a>
                                );
                            }
                        },
                    };
                    const component: any = parse(section, options);

                    return (
                        <p className="mb-4" key={index}>
                            {component}
                        </p>
                    );
                })}
            </div>
        </BaseSection>
    );
};
