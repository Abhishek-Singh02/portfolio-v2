"use client";
import { FC, useEffect, useState } from "react";

export type CursorTrackerProps = {};

export const CursorTracker: FC<CursorTrackerProps> = () => {
    const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (ev: any) => {
            setPos({ x: ev.clientX, y: ev.clientY + window.scrollY });
        };
        window.addEventListener("mousemove", updateMousePosition);
        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);
    return (
        <div
            className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
            style={{
                background: `radial-gradient(600px at ${pos.x}px ${pos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
            }}
        ></div>
    );
};
