"use client";
import Image from "next/image";
import logoImage from "@/assets/images/logo.svg"
import Button from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/constants/navlinks";


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <section className="py-4 fixed w-full lg:py-8 top-0 z-50">
                <div className="container max-w-5xl">
                    <div className="border border-white/15 rounded-[27px]  md:rounded-full bg-neutral-950/70 backdrop-blur">
                        <div className="grid grid-cols-2 lg:grid-cols-3  p-2 px-4 md:pr-2 items-center ">
                            <div>
                                <Image src={logoImage} alt="Logo" className="h-9 md:h-auto w-auto" />
                            </div>
                            <div className="lg:flex justify-center items-center hidden">
                                <nav className="flex gap-6 font-medium cursor-pointer">
                                    {navLinks.map((link) => (
                                        <Link key={link.label} href={link.href}>{link.label}</Link>
                                    ))}
                                </nav>
                            </div>
                            <div className="flex justify-end gap-4 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu md:hidden"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                ><line x1="3" y1="12" x2="21" y2="12" className={twMerge("origin-left transition", isMenuOpen && "rotate-45 -translate-y-1")}></line><line x1="3" y1="6" x2="21" y2="6" className={twMerge("transition", isMenuOpen && "opacity-0")}></line><line x1="3" y1="18" x2="21" y2="18"
                                    className={twMerge("origin-left transition", isMenuOpen && "-rotate-45 translate-y-1")}
                                ></line></svg>
                                <Button variant="primary" className="hidden md:inline-flex items-center">
                                    Contact Us
                                </Button>
                            </div>
                        </div>
                        <AnimatePresence>
                            {isMenuOpen && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden">
                                    <div className="flex flex-col items-center gap-4 py-4 ">
                                        {
                                            navLinks.map((link) => (
                                                <Link key={link.label}
                                                    href={link.href}
                                                    className=""
                                                >{link.label}</Link>
                                            ))}
                                        <Button variant="primary">
                                            Contact Us
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <div className="pb-[86px] md:pb-[98px] lg:px-[130px]"></div>
        </>
    )
}
