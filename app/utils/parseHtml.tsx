import parse, { attributesToProps, domToReact } from "html-react-parser";
import { ReactNode } from "react";

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
export const parseHtml = (section?: string | undefined): ReactNode => {
    if (typeof section !== "string") return "";
    return parse(section, options);
};
