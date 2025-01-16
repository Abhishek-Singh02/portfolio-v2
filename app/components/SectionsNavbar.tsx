import { useSectionStore } from "@/store";
import { Link } from "@remix-run/react";
import clsx from "clsx";
import { FC } from "react";

export type SectionNavbarProps = {};

export const SectionNavbar: FC<SectionNavbarProps> = () => {
    const hash = useSectionStore(({ active }) => active);
    return (
        <nav className="flex flex-col gap-4 mt-16 hidden lg:block">
            <NavLink
                to="#about"
                label="About"
                active={hash === "#about" || !hash}
            />
            <NavLink
                to="#experience"
                label="Experience"
                active={hash === "#experience"}
            />
            <NavLink
                to="#projects"
                label="Projects"
                active={hash === "#projects"}
            />
        </nav>
    );
};

export type NavLinkProps = {
    active?: boolean;
    to: string;
    label: string;
};

export const NavLink: FC<NavLinkProps> = ({ to, label, active }) => {
    return (
        <Link
            to={to}
            className="group flex items-center py-3 active w-fit data-[active=true]:hidden"
        >
            <span
                className={clsx([
                    "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none",
                    active && "!w-16 !bg-slate-200",
                ])}
            ></span>
            <span
                className={clsx([
                    "nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200",
                    active && "!text-slate-200",
                ])}
            >
                {label}
            </span>
        </Link>
    );
};
