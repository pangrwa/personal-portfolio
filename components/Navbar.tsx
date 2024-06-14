"use client";

import { navBarItems } from "@data/index";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const modalVariants = {
    hidden: {
      y: "-100vh",
    },
    visbile: {
      y: 0,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    exit: {
      y: "-100vh",
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };

  return (
    <nav className="w-full flex justify-center items-center px-3 py-2">
      <div
        className="w-full max-w-7xl top-0
                    flex justify-between items-center"
      >
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src="/logo.svg" alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-lg font-bold cursor-pointer flex">
            Rui Wei&nbsp;<span className="sm:block hidden">|&nbsp;Pang</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navBarItems.map((item) => (
            <Link href={item.link} key={item.id}>
              <li className="cursor-pointer font-light">{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="sm:hidden">
        <FaBars onClick={() => setToggle(!toggle)} />
        <AnimatePresence>
          {toggle && (
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visbile"
              exit="exit"
              className="fixed inset-0 bg-white bg-opacity-50 z-10"
            >
              <div className="fixed inset-0 flex justify-center items center z-20 h">
                <div className="absolute inset-0 bg-white" />
                <FaTimes
                  className="absolute top-4 right-3"
                  onClick={() => setToggle(!toggle)}
                />

                  <ul className="relative flex flex-col gap-10 items-center justify-center h-full">
                    {navBarItems.map((item) => (
                      <Link
                        href={item.link}
                        key={item.id}
                        onClick={() => setToggle(!toggle)}
                      >
                          <li className="cursor-pointer font-light">
                            {item.name}
                          </li>
                      </Link>
                    ))}
                  </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
