import { useIntersectionObserver } from "@/hooks";
import { useSectionStore } from "@/store";
import { clsx } from "clsx";
import { FC, HTMLProps, PropsWithChildren, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

export type BaseSectionProps = PropsWithChildren<
  {
    title: string;
  } & HTMLProps<HTMLDivElement>
>;

export const BaseSection: FC<BaseSectionProps> = ({
  children,
  className,
  title,
  id,
  ...props
}) => {
  const ref = useRef<HTMLElement>(null!);
  const setActive = useSectionStore(({ setActive }) => setActive);
  const debounced = useDebouncedCallback((sec: string) => {
    setActive(sec);
  }, 100);
  useIntersectionObserver(ref, {
    threshold: 0.75,
    rootMargin: "0px 50%",
    onIntersect(entry) {
      if (entry.isIntersecting) {
        debounced(`#${id}`);
      }
    },
  });
  return (
    <section
      id={id}
      {...props}
      className={clsx([
        "mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24",
        className,
      ])}
      ref={ref}
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
};
