import { CursorTracker } from "@/components";

export function loader() {
    return new Response("Not Found", {
        status: 404,
    });
}

export default function NotFoundPage() {
    return (
        <div className="relative">
            <CursorTracker />
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
                <div className="h-screen w-full flex items-center justify-center">
                    <div className="flex gap-4 items-center">
                        <h1 className="text-2xl ">404</h1>
                        <div className="h-12 w-[1px] bg-neutral-600" />
                        <h2 className="text-sm font-light">
                            This page could not be found.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
