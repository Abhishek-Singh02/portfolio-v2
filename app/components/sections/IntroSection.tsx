import { IntroType } from "@/sanity";
import { FC } from "react";

export type IntroSectionProps = {
  intro: IntroType;
};

export const IntroSection: FC<IntroSectionProps> = ({ intro }) => {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        <a href="/">{intro.name}</a>
      </h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
        {intro.title}
      </h2>
      <p className="mt-4 max-w-xs leading-normal">{intro.subtitle}</p>
    </>
  );
};
