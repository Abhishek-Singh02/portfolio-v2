import { BlogType } from "@/sanity";
import { FC } from "react";
import { BaseSection } from "./BaseSection";
import { SectionCard } from "./SectionCard";

export type BlogsSectionProps = {
  blogs: BlogType[];
};

export const BlogsSection: FC<BlogsSectionProps> = ({ blogs }) => {
  if (!blogs?.length) {
    return null;
  }
  return (
    <BaseSection title="Blogs" id="blogs">
      <>
        <div className="flex flex-col gap-12 group/list">
          {blogs
            .filter(({ showOnHome }) => showOnHome)
            .map((blog, index) => {
              const { name, url, thumbnail, year } = blog;
              return (
                <SectionCard
                  className="!flex-row lg:!items-center lg:!gap-4"
                  key={index}
                  url={url}
                  topSlot={
                    <p className="-mb-2 text-sm font-semibold leading-6">
                      {year}
                    </p>
                  }
                  leftSlot={
                    <img
                      loading="lazy"
                      src={thumbnail}
                      alt={blog.name}
                      decoding="sync"
                      width="200"
                      height="48"
                      data-nimg="1"
                      className="z-50 !aspect-video max-sm:w-24 max-sm:mt-1 max-sm:max-w-[120px] max-sm:max-h-11 mb-2 lg:w-36 lg:h-20 object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:translate-y-1"
                    />
                  }
                  title={name}
                />
              );
            })}
        </div>
        {blogs.filter(({ showOnHome }) => !showOnHome).length > 0 && (
          <ViewBlogs />
        )}
      </>
    </BaseSection>
  );
};

export type ViewBlogsProps = {};

export const ViewBlogs: FC<ViewBlogsProps> = () => {
  return (
    <a
      className="mt-12 inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
      aria-label="Read all blogs"
      href="/blogs"
    >
      <span>
        <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
          Read all{" "}
        </span>
        <span className="whitespace-nowrap">
          <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
            blogs
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
