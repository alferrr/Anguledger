import { useState } from "react";

import LogoLoop from "../components/LogoLoop/LogoLoop";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdInsights } from "react-icons/md";
import { MdSpeed } from "react-icons/md";
import { GrSecure } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";

import {
  SiReact,
  SiJavascript,
  SiAngular,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

import { motion, easeOut } from "motion/react";
import { desc, title } from "motion/react-client";

export default function Why() {
  const [openId, setOpenId] = useState([]);

  const toggleFaq = (id) => {
    setOpenId((prev) =>
      prev.includes(id)
        ? prev.filter((openId) => openId !== id)
        : [...prev, id],
    );
  };
  const steps = [
    {
      step: 1,
      title: "Add Your Expenses",
      description:
        "Quickly log your daily expenses with categories and amounts.",
    },

    {
      step: 2,
      title: "Track & Analyze",
      description:
        "View summaries and charts to understand your spending habits.",
    },

    {
      step: 3,
      title: "Stay in Control",
      description:
        "Set budgets, monitor progress, and make smarter financial decisions.",
    },
  ];
  const Logos1 = [
    {
      node: <SiReact />,
      title: "React",
      href: "https://react.dev",
    },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org/",
    },
    {
      node: <SiVercel />,
      title: "Vercel",
      href: "https://vercel.com",
    },
    {
      node: <SiJavascript />,
      title: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      node: <SiAngular />,
      title: "Angular",
      href: "https://angular.dev",
    },
  ];

  const Logos2 = [
    {
      node: <SiJavascript />,
      title: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      node: <SiReact />,
      title: "React",
      href: "https://react.dev",
    },
    {
      node: <SiAngular />,
      title: "Angular",
      href: "https://angular.dev",
    },
    {
      node: <SiVercel />,
      title: "Vercel",
      href: "https://vercel.com",
    },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org/",
    },
  ];

  const Logos3 = [
    {
      node: <SiAngular />,
      title: "Angular",
      href: "https://angular.dev",
    },
    {
      node: <SiVercel />,
      title: "Vercel",
      href: "https://vercel.com",
    },
    {
      node: <SiReact />,
      title: "React",
      href: "https://react.dev",
    },
    {
      node: <SiJavascript />,
      title: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org/",
    },
  ];

  const features = [
    {
      id: 1,
      icon: FaRegMoneyBillAlt,
      title: "Effortless Expense Tracking",
      description:
        "Log expenses in seconds with a simple, intuitive interface.",
    },

    {
      id: 2,
      icon: MdInsights,
      title: "Clear Financial Insights",
      description:
        "Understand your spending through visual reports and summaries.",
    },

    {
      id: 3,
      icon: MdSpeed,
      title: "Built for Speed & Performance",
      description: "Enjoy a smooth, fast experience across all devices.",
    },

    {
      id: 4,
      icon: GrSecure,
      title: "Secure & Reliable",
      description: "Your data is protected with modern security practices.",
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "Where is my data stored?",
      answer:
        "All your expenses are saved locally in your browser using local storage. Nothing leaves your device.",
    },
    {
      id: 2,
      question: "Can I access my data on multiple devices?",
      answer:
        "Not currently. Data is only available on the device and browser where you use the app.",
    },
    {
      id: 3,
      question: "What happens if I clear my browser data?",
      answer:
        "Clearing your browser’s cache or local storage will erase all saved expenses.",
    },
    {
      id: 4,
      question: "Do I need an internet connection?",
      answer:
        "No. AnguLedger works completely offline since all data is stored locally.",
    },
    {
      id: 5,
      question: "What is AnguLedger made of?",
      answer:
        "The landing page is built with React, and the expense tracker app itself is built with Angular—a modern, fast, and responsive stack.",
    },
    {
      id: 6,
      question: "Who made AnguLedger?",
      answer:
        "AnguLedger was created by Alfer Brent Mercado, a 1st Year IT Student from University of San Carlos dedicated to Web Development",
    },
    {
      id: 7,
      question: "Is my data secure?",
      answer:
        "Your data never leaves your device, so it’s private by default. Keep your device secure to protect your information.",
    },
  ];

  return (
    <div className="why">
      <motion.div
        initial={{ opacity: 0, y: 0, filter: "blur(5px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: easeOut }}
        className="title"
      >
        <h1>Why Choose Anguledger?</h1>
        <p>
          Built for clarity, performance, and confident financial management.
        </p>
      </motion.div>
      <div className="container feat">
        <main>
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div className="block" key={feature.id}>
                <span>
                  <Icon className="" />
                </span>
                <div className="text">
                  <h2>{feature.title}</h2>
                  <p>{feature.description}</p>
                </div>
              </div>
            );
          })}
        </main>
      </div>
      <div className="container empty">
        <main></main>
      </div>
      <div className="container loop">
        <main>
          <div className="block">
            <motion.div
              initial={{ opacity: 0, y: 0, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: easeOut }}
              className="h2"
            >
              Built with Modern, Trusted Technologies
            </motion.div>
          </div>
          <div className="block logos">
            <LogoLoop logos={Logos1} speed={20} direction="left" />
            <LogoLoop logos={Logos2} speed={20} direction="right" />
            <LogoLoop logos={Logos3} speed={20} direction="left" />
          </div>
        </main>
      </div>
      <div className="container empty">
        <main></main>
      </div>
      <div className="container how">
        <main>
          <div className="block">
            <h2>How It Works</h2>
            <p>
              Tracks expenses, organizes data, and shows clear insights—all in
              one place.
            </p>
          </div>
          <div className="block"></div>
        </main>
      </div>
      <div className="container steps">
        <main>
          {steps.map((step) => {
            return (
              <div className="block" key={step.step}>
                <span>{step.step}</span>
                <div className="text">
                  <h2>{step.title}</h2>
                  <p>{step.description}</p>
                </div>
              </div>
            );
          })}
        </main>
      </div>
      <div className="container empty">
        <main></main>
      </div>
      <div className="container faq">
        <main>
          <div className="block">
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className="block faqs">
            {faqs.map((faq) => {
              const isOpen = openId.includes(faq.id);

              return (
                <div className={`ques ${isOpen ? "active" : ""}`} key={faq.id}>
                  <header onClick={() => toggleFaq(faq.id)}>
                    <h2>{faq.question}</h2>
                    <IoMdAdd className="icon" />
                  </header>

                  <p>{faq.answer}</p>
                </div>
              );
            })}
          </div>
        </main>
      </div>
      <div className="container empty">
        <main></main>
      </div>
      <div className="container last">
        <main>
          <h2>Ready to take control of your finances?</h2>
          <p>
            Track spending, gain insights, and stay organized with AnguLedger.
          </p>
          <a href="https://anguledger-app.vercel.app/dashboard" className="cta">
            Get Started Now
          </a>
        </main>
      </div>
      <div className="container empty">
        <main></main>
      </div>
      <div className="container footer">
        <main>
          <div className="block">
            <div className="text">
              <h1>Anguledger</h1>
              <p>
                Clean, fast, and reliable. AnguLedger simplifies the way you
                track expenses.
              </p>
            </div>

            <footer>
              <h2>Created by Alfer Brent Mercado with React</h2>
            </footer>
          </div>
          <div className="block nav">
            <nav>
              <h2>Navigation</h2>
              <a href="">Why Anguledger</a>
              <a href="">How It Works</a>
              <a href="">FAQ</a>
            </nav>
            <nav>
              <h2>Socials</h2>
              <a href="">Instagram</a>
              <a href="">Github</a>
              <a href="">LinkedIn</a>
            </nav>
          </div>
        </main>
      </div>
    </div>
  );
}
