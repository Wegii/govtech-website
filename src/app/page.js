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
    IconBrandTabler,
    IconSettings,
    IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";



export default function Home() {

    const links = [
        {
            label: "Dashboard",
            href: "#",
            icon: (
                <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Profile",
            href: "#",
            icon: (
                <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Settings",
            href: "#",
            icon: (
                <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Logout",
            href: "#",
            icon: (
                <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
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
                    <div>
                        <SidebarLink
                            link={{
                                label: "Manu Arora",
                                href: "#",
                                icon: (
                                    <Image
                                        className="h-7 w-7 flex-shrink-0 rounded-full"
                                        width={50}
                                        height={50}
                                        alt="Avatar"/>
                                ),
                            }}/>
                    </div>
                </SidebarBody>
            </Sidebar>

            <div className="h-screen w-full overflow-y-auto bg-gray-900 text-white snap-y snap-mandatory">

                {/* Main Section */}
                <motion.section className="h-screen flex justify-center items-center text-4xl snap-start z-10">
                    <div className="h-[20rem] flex items-center justify-center">
                        <TextHoverEffect text="Is Lithium the new Oil?"/>
                    </div>
                </motion.section>

                {/* Image Comparison Slider */}
                <motion.section className="h-screen flex justify-center items-center snap-start overflow-hidden z-10">
                    {/* Left Side */}
                    <div className="w-1/2 flex flex-col justify-center items-start p-6">
                        Test
                    </div>

                    {/* Right Side */}
                    <div className="w-1/2 flex justify-center items-center background-color: black ">
                        <CompareImages
                            leftImage="/atacama_old.png"
                            rightImage="/atacama_new.jpg"
                            leftAlt="Before Image"
                            rightAlt="After Image"
                            rightImageAlt="borderRadius: '5px!important'"
                        />
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

                {/* Additional Information */}
                <motion.section className="h-screen flex justify-center items-center text-4xl snap-start z-10">
                    <ExpandableCardDemo/>
                </motion.section>

                {/* Datastory */}
                <motion.section className="h-screen w-full flex justify-center items-center text-4xl snap-start z-10">
                    <div className="z-20 h-screen w-full">
                        <iframe src="https://storymaps.arcgis.com/stories/00982c33751e4537be417bd6bd15a9f0" allowFullScreen></iframe>
                    </div>
                </motion.section>
            </div>


        </div>


    );
}

/* Navigation bar at the top*/
function Navbar() {
    const [active, setActive] = useState(0); /* useState<string | null>(null);*/
    const className = "top-2";

    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-20", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="About">

                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Data">

                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="More">

                </MenuItem>
            </Menu>
        </div>
    );
}

function SidebarDemo() {

    return (
        (<div
            className={cn(
                "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
                // for your use case, use `h-screen` instead of `h-[60vh]`
                "h-[60vh]"
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
                    <div>
                        <SidebarLink
                            link={{
                                label: "Manu Arora",
                                href: "#",
                                icon: (
                                    <Image
                                        className="h-7 w-7 flex-shrink-0 rounded-full"
                                        width={50}
                                        height={50}
                                        alt="Avatar"/>
                                ),
                            }}/>
                    </div>
                </SidebarBody>
            </Sidebar>

        </div>)
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
                Acet Labs
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

// Dummy dashboard component with content
const Dashboard = () => {
    return (
        (<div className="flex flex-1">
            <div
                className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
                <div className="flex gap-2">
                    {[...new Array(4)].map((i) => (
                        <div
                            key={"first-array" + i}
                            className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"></div>
                    ))}
                </div>
                <div className="flex gap-2 flex-1">
                    {[...new Array(2)].map((i) => (
                        <div
                            key={"second-array" + i}
                            className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"></div>
                    ))}
                </div>
            </div>
        </div>)
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
        description: "Video",
        title: "Summertime Sadness",
        src: "/atacama_old.png",
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
        description: "Babbu Maan",
        title: "Mitran Di Chhatri",
        src: "/atacama_old.png",
        ctaText: "Visit",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                (<p>Babu Maan, a legendary Punjabi singer, is renowned for his soulful
                    voice and profound lyrics that resonate deeply with his audience. Born
                    in the village of Khant Maanpur in Punjab, India, he has become a
                    cultural icon in the Punjabi music industry. <br /> <br />His songs
                    often reflect the struggles and triumphs of everyday life, capturing
                    the essence of Punjabi culture and traditions. With a career spanning
                    over two decades, Babu Maan has released numerous hit albums and
                    singles that have garnered him a massive fan following both in India
                    and abroad.
                </p>)
            );
        },
    },

    {
        description: "Metallica",
        title: "For Whom The Bell Tolls",
        src: "/atacama_old.png",
        ctaText: "Visit",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                (<p>Metallica, an iconic American heavy metal band, is renowned for their
                    powerful sound and intense performances that resonate deeply with
                    their audience. Formed in Los Angeles, California, they have become a
                    cultural icon in the heavy metal music industry. <br /> <br />Their
                    songs often reflect themes of aggression, social issues, and personal
                    struggles, capturing the essence of the heavy metal genre. With a
                    career spanning over four decades, Metallica has released numerous hit
                    albums and singles that have garnered them a massive fan following
                    both in the United States and abroad.
                </p>)
            );
        },
    },
    {
        description: "Lord Himesh",
        title: "Aap Ka Suroor",
        src: "/atacama_old.png",
        ctaText: "Visit",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                (<p>Himesh Reshammiya, a renowned Indian music composer, singer, and
                    actor, is celebrated for his distinctive voice and innovative
                    compositions. Born in Mumbai, India, he has become a prominent figure
                    in the Bollywood music industry. <br /> <br />His songs often feature
                    a blend of contemporary and traditional Indian music, capturing the
                    essence of modern Bollywood soundtracks. With a career spanning over
                    two decades, Himesh Reshammiya has released numerous hit albums and
                    singles that have garnered him a massive fan following both in India
                    and abroad.
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
