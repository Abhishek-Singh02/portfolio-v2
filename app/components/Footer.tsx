import { FC } from "react";

export type FooterProps = {};

export const Footer: FC<FooterProps> = () => {
    return (
        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p>
                Crafted in{" "}
                <a
                    href="https://neovim.io/"
                    className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Neovim (opens in a new tab)"
                >
                    Neovim
                </a>{" "}
                with care. Built using{" "}
                <a
                    href="https://remix.run/"
                    className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Remix (opens in a new tab)"
                >
                    Remix
                </a>{" "}
                and styled with{" "}
                <a
                    href="https://tailwindcss.com/"
                    className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Tailwind CSS (opens in a new tab)"
                >
                    Tailwind CSS
                </a>
                , and seamlessly deployed via{" "}
                <a
                    href="https://vercel.com/"
                    className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Vercel (opens in a new tab)"
                >
                    Vercel
                </a>
                . Content is managed with{" "}
                <a
                    href="https://www.sanity.io/"
                    className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Sanity.io (opens in a new tab)"
                >
                    Sanity.io
                </a>{" "}
                . The text is elegantly presented in the{" "}
                <a
                    href="https://fonts.google.com/specimen/Ubuntu"
                    className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Ubuntu (opens in a new tab)"
                >
                    Ubuntu
                </a>{" "}
                typeface.
            </p>
        </footer>
    );
};
