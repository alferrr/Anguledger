import React from "react";
import ScrollReveal from "./components/ScrollReveal/ScrollReveal.jsx";

import Why from "./sections/Why.jsx";
import Image from "./assets/app.png";

import { easeOut, motion } from "motion/react";

export default function LandingPage() {
  return (
    <>
      <section className="hero">
        <main>
          <div className="title">
            <motion.div
              initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.5 }}
            >
              <h1>A Better Way to Track Your Money</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.7 }}
            >
              <p>
                AnguLedger combines fast expense logging, intelligent summaries,
                and a modern interface designed for everyday financial control.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut, delay: 1 }}
          >
            <a
              href="https://anguledger-app.vercel.app/dashboard"
              className="cta"
            >
              Get Started Now
            </a>
          </motion.div>
        </main>

        <img src={Image} alt="" />
        <div className="gradient"></div>
      </section>

      <section className="desc">
        <motion.div
          initial={{ opacity: 1, y: 10, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="h1"
        >
          Clean design, fast performance, and reliable tracking—built to help
          you stay in control of your finances.
        </motion.div>
      </section>
      <Why />
    </>
  );
}
