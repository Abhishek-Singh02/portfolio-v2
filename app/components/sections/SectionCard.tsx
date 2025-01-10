import clsx from "clsx";
import { FC, ReactNode } from "react";

export type SectionCardProps = {
  url: string;
  leftSlot?: ReactNode;
  topSlot?: ReactNode;
  title: string;
  description?: string;
  tags?: string[];
  className?: string;
  shadowClassname?: string;
};

export const SectionCard: FC<SectionCardProps> = ({
  url,
  leftSlot,
  title,
  description,
  tags,
  className,
  shadowClassname,
  topSlot,
}) => {
  return (
    <a
      className={clsx([
        "group/card w-full flex gap-4 lg:gap-8 lg:group-hover/list:opacity-50 lg:hover:!opacity-100 relative max-lg:flex-col",
        className,
      ])}
      href={url}
      target="_blank"
      referrerPolicy="no-referrer"
      rel="noreferrer"
    >
      <div
        className={clsx([
          "absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover/card:bg-slate-800/50 lg:group-hover/card:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover/card:drop-shadow-lg",
          shadowClassname,
        ])}
      ></div>
      {leftSlot}
      <div className="flex flex-col gap-3 z-50">
        {topSlot}
        <div className="flex gap-1 items-baseline lg:items-end font-medium leading-tight text-slate-200 group-hover/card:text-teal-300 card-focus-visible:text-teal-300 text-base">
          <span>
            {title}
            <span className="inline-block">
              <ArrowIcon />
            </span>
          </span>
        </div>
        <p className="text-sm leading-normal">{description}</p>
        {!!tags?.length && (
          <div className="flex gap-2 flex-wrap w-full">
            {tags.map((tag) => (
              <Tag label={tag} key={tag} />
            ))}
          </div>
        )}
      </div>
    </a>
  );
};

export type TagProps = {
  label: string;
};

export const Tag: FC<TagProps> = ({ label }) => {
  if (!label.length) {
    return null;
  }
  return (
    <span className="flex capitalize items-center justify-center rounded-full min-w-16 bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
      {label}
    </span>
  );
};

export type ArrowIconProps = {
  size?: number;
};

export const ArrowIcon: FC<ArrowIconProps> = ({ size = 14 }) => {
  return (
    <svg
      width={`${size}`}
      height={`${size}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/card:-translate-y-1 group-hover/card:translate-x-1 group-focus-visible/card:-translate-y-1 group-focus-visible/card:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
