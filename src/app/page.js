'use client';

import { HoveredLink, Menu, MenuItem, ProductItem} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { AnimatedTestimonials, testimonials_contra, testimonials_pro} from "@/components/ui/animated-testimonials";
import CompareImages from "react-compare-image";

import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/components/hooks/use-outside-click";


import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
    IconArrowLeft,
    IconDatabase,
    IconReservedLine,
    IconUsers,
} from "@tabler/icons-react";

import Link from "next/link";



export default function Home() {

    const links = [
        {
            label: "Dashboard",
            href: "/data",
            icon: (
                <IconDatabase className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "More Stories",
            href: "#",
            icon: (
                <IconUsers className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "More Resources",
            href: "#",
            icon: (
                <IconReservedLine className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },

    ];
    const [open, setOpen] = useState(false);



    return (
        <div
            className={cn(
                "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
                // for your use case, use `h-screen` instead of `h-[60vh]`
                "h-screen overflow-y-auto"
            )}>
            <Sidebar open={open} setOpen={setOpen}>
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        {open ? <Logo/> : <LogoIcon/>}
                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink key={idx} link={link}/>
                            ))}
                        </div>
                    </div>
                </SidebarBody>
            </Sidebar>

            <div className="h-screen w-full overflow-y-auto bg-gray-900 text-white snap-y snap-mandatory">

                {/* Main Section */}
                <motion.section className="h-screen flex flex-col justify-center items-center text-4xl snap-start z-10">
                    <div className="h-[20rem] flex items-center justify-center">
                        <TextHoverEffect text="Is Lithium the new Oil?"/>
                    </div>
                    {/* Pulsing Arrow */}
                    <div className="animate-bounce mt-4">
                        <svg
                            className="w-10 h-10 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </motion.section>

                {/* Image Comparison Slider */}
                <motion.section className="h-screen flex justify-center items-center snap-start overflow-hidden z-10">
                    {/* Left Side */}
                    <div className="w-1/3 flex flex-col justify-center items-start p-6">
                        <h2 className="title font-bold" style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '20px', textAlign: 'center' }}>Lithium Mining and Its Environmental Impact</h2>
                        <div className="text-columns">
                            <div className="left-column">
                                <p>
                                    The Salar de Atacama, located in northern Chile, is one of the largest salt flats in
                                    the world,
                                    and it holds one of the richest deposits of lithium brine. The extraction of lithium
                                    from this area
                                    has made it a critical region in the global supply chain for electric vehicle
                                    batteries and other
                                    high-tech products.
                                </p>
                                <br/>
                                <p>
                                    Despite its significance, the environmental impact of lithium mining is a growing
                                    concern. Water
                                    scarcity, biodiversity loss, and land degradation are some of the issues associated
                                    with mining in
                                    the Salar de Atacama. Sustainable solutions are needed to balance economic demand
                                    with environmental preservation.
                                </p>
                            </div>
                            <br/>
                            <div className="right-column">
                                <p>
                                    The Salar de Atacama is also home to the lithium mines that fuel the rapid growth of
                                    renewable energy industries.
                                    However, the extraction process consumes vast amounts of water in a region already
                                    struggling with arid conditions.
                                    This has raised alarms among environmentalists, calling for more sustainable mining
                                    practices and technologies.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="h-0.5 w-2/3 flex justify-center items-center background-color: black ">
                        <div className="w-3/4 rounded-lg overflow-hidden">

                            <CompareImages
                                leftImage="/atacama_old.png"
                                rightImage="/atacama_new.jpg"
                                leftAlt="Before Image"
                                rightAlt="After Image"
                                rightImageAlt="borderRadius: '5px!important'"
                            />
                        </div>
                    </div>
                </motion.section>

                {/* Stories */}
                <motion.section className="h-screen flex justify-center items-center snap-start overflow-hidden z-10">
                    {/* Left Side */}
                    <div className="w-1/2 flex flex-col justify-center items-start p-6">
                        <AnimatedTestimonials testimonials={testimonials_contra}/>
                    </div>

                    {/* Right Side */}
                    <div className="w-1/2 flex justify-center items-center background-color: black ">
                        <AnimatedTestimonials testimonials={testimonials_pro}/>
                    </div>
                </motion.section>

                {/* Video stories*/}
                <motion.section className="h-screen flex justify-center items-center text-4xl snap-start z-10">
                    <section className="flex h-screen">
                        {/* Left Side - One Third */}
                        <div className="w-1/3  flex flex-col items-center justify-center p-6">
                            <h2 className="text-xl font-semibold text-center">Video Stories</h2>
                            <p className="mt-4">Click on the tiles on the right for more information</p>
                        </div>

                        {/* Right Side - Two Thirds */}
                        <div className="w-2/3  flex items-center justify-center p-6">
                            <ExpandableCardDemo/>
                        </div>
                    </section>
                </motion.section>

                {/* Datastory */}
                <motion.section className="h-screen w-full flex justify-center items-center text-4xl snap-start z-10">
                    <div className="z-20 h-screen w-full">
                        <iframe src="https://storymaps.arcgis.com/stories/00982c33751e4537be417bd6bd15a9f0"
                                allowFullScreen></iframe>
                    </div>
                </motion.section>
            </div>


        </div>


    );
}


export const Logo = () => {
    return (
        (<Link
            href="#"
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
            <div
                className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-medium text-black dark:text-white whitespace-pre">
                Lithium Mining Databoard
            </motion.span>
        </Link>)
    );
};
export const LogoIcon = () => {
    return (
        (<Link
            href="#"
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
            <div
                className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
        </Link>)
    );
};

/* Information cards */
export const CloseIcon = () => {
    return (
        (<motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>)
    );
};

const cards = [
    {
        description: "Documentary",
        title: "Lithium Extraction in Chile",
        src: "/images/videos/video_1.webp",
        ctaText: "Visit",
        ctaLink: "https://www.youtube.com/watch?v=h0hMetLlBDw",
        content: () => {
            return (
                (<p>In Bolivia, Argentina, and Chile, significant lithium reserves are found. This lithium is essential for the production of electric cars. However, the extraction process threatens ecosystems. To extract lithium, brine is pumped from the Salar de Atacama, a salt flat in Chile. For an average car battery, approximately 20,000 liters of water must evaporate. This is water that the population in Chile is lacking. The environment is equally at risk.
                </p>)
            );
        },
    },
    {
        description: "Documentary",
        title: "The Truth about Lithium",
        src: "/images/videos/video_2.webp",
        ctaText: "Visit",
        ctaLink: "https://www.youtube.com/watch?v=bAgGpm-3uRI",
        content: () => {
            return (
                (<p>
                    A Beacon of Hope for a Climate-Friendly Future or a Massive Environmental Problem?
                    Approximately one gram of lithium is found in every smartphone battery, while the battery of an electric car contains around 15 kilograms. Without this lightweight metal, e-mobility would be unthinkable. But where does lithium actually come from, and what are the environmental consequences of its extraction?
                </p>)
            );
        },
    },

    {
        description: "Documentary",
        title: "The Cost of Lithium Extraction",
        src: "/images/videos/video_3.jpg",
        ctaText: "Visit",
        ctaLink: "https://www.youtube.com/watch?v=nl0E-UhKB5E",
        content: () => {
            return (
                (<p>
                </p>)
            );
        },
    },
    {
        description: "Documentary",
        title: "Lithium for EVs",
        src: "/images/videos/video_4.jpg",
        ctaText: "Visit",
        ctaLink: "https://www.youtube.com/watch?v=BlWw2zaw4pU",
        content: () => {
            return (
                (<p>
                </p>)
            );
        },
    },
];


function ExpandableCardDemo() {
    const [active, setActive] = useState(null);
    const id = useId();
    const ref = useRef(null);

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (<>
        <AnimatePresence>
            {active && typeof active === "object" && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/20 h-full w-full z-10" />
            )}
        </AnimatePresence>
        <AnimatePresence>
            {active && typeof active === "object" ? (
                <div className="fixed inset-0  grid place-items-center z-[100]">
                    <motion.button
                        key={`button-${active.title}-${id}`}
                        layout
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                            transition: {
                                duration: 0.05,
                            },
                        }}
                        className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                        onClick={() => setActive(null)}>
                        <CloseIcon />
                    </motion.button>
                    <motion.div
                        layoutId={`card-${active.title}-${id}`}
                        ref={ref}
                        className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
                        <motion.div layoutId={`image-${active.title}-${id}`}>
                            <Image
                                priority
                                width={200}
                                height={200}
                                src={active.src}
                                alt={active.title}
                                className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
                        </motion.div>

                        <div>
                            <div className="flex justify-between items-start p-4">
                                <div className="">
                                    <motion.h3
                                        layoutId={`title-${active.title}-${id}`}
                                        className="font-medium text-neutral-800 dark:text-neutral-200 text-base">
                                        {active.title}
                                    </motion.h3>
                                    <motion.p
                                        layoutId={`description-${active.description}-${id}`}
                                        className="text-neutral-600 dark:text-neutral-400 text-base">
                                        {active.description}
                                    </motion.p>
                                </div>

                                <motion.a
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    href={active.ctaLink}
                                    target="_blank"
                                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white">
                                    {active.ctaText}
                                </motion.a>
                            </div>
                            <div className="pt-4 relative px-4">
                                <motion.div
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400  [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                                    {typeof active.content === "function"
                                        ? active.content()
                                        : active.content}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            ) : null}
        </AnimatePresence>
        <ul
            className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
            {cards.map((card, index) => (
                <motion.div
                    layoutId={`card-${card.title}-${id}`}
                    key={card.title}
                    onClick={() => setActive(card)}
                    className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
                    <div className="flex gap-4 flex-col  w-full">
                        <motion.div layoutId={`image-${card.title}-${id}`}>
                            <Image
                                width={100}
                                height={100}
                                src={card.src}
                                alt={card.title}
                                className="h-60 w-full  rounded-lg object-cover object-top" />
                        </motion.div>
                        <div className="flex justify-center items-center flex-col">
                            <motion.h3
                                layoutId={`title-${card.title}-${id}`}
                                className="font-medium text-neutral-500 dark:text-neutral-200 text-center md:text-left text-base">
                                {card.title}
                            </motion.h3>
                            <motion.p
                                layoutId={`description-${card.description}-${id}`}
                                className="font-bold text-neutral-200 dark:text-neutral-400 text-center md:text-left text-base">
                                {card.description}
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </ul>
    </>);
}
