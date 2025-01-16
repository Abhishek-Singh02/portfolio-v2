import { SocialMediaType } from "@/sanity";
import parse from "html-react-parser";
import { cloneElement, FC } from "react";

export type SocialMediaLinksProps = {
    socialMedias: SocialMediaType[];
};

export const SocialMediaLinks: FC<SocialMediaLinksProps> = ({
    socialMedias,
}) => {
    return (
        <div className="flex gap-4 mt-8">
            {socialMedias.map((sm, index) => (
                <SocialMediaLink key={index} socialMedia={sm} />
            ))}
        </div>
    );
};

export type SocialMediaLinkProps = {
    socialMedia: SocialMediaType;
};

export const SocialMediaLink: FC<SocialMediaLinkProps> = ({ socialMedia }) => {
    const { url, icon, name } = socialMedia;
    const component: any = parse(icon, {
        replace(ele) {
            if (ele.type === "script") return <></>;
        },
    });
    const ICON_SIZE = "28";
    return (
        <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="block hover:text-slate-200"
            aria-label={`${name} (opens in new tab)`}
        >
            <span className="w-8 h-8">
                {cloneElement(component, {
                    width: ICON_SIZE,
                    height: ICON_SIZE,
                    strokeWidth: "1.5",
                })}
            </span>
        </a>
    );
};
