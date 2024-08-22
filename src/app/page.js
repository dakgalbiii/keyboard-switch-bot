'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

import { motion, useAnimation, useInView } from "framer-motion";
import Typewriter from "typewriter-effect";

const LandingPage = () => {
  const control = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)

  React.useEffect(() => {
    if (isInView) {
      control.start("visible");
    } else { 
      control.start("hidden");
    }
  }, [control, isInView])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center font-sans">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-lg py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-3xl font-bold text-indigo-600">
            KeyboardSwitchBot
          </div>
          <div className="space-x-6">
            <Link href="#features" className="text-gray-700 hover:text-indigo-600 transition duration-300">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-indigo-600 transition duration-300">
              How it Works
            </Link>
            <Link href="/login" className="text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 py-2 px-4 rounded-full">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="w-full flex-1 flex flex-col justify-center items-center text-center py-28 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
        <motion.h1
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
          className="text-6xl font-extrabold mb-6"
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter.changeDelay(40).pauseFor(30).start().typeString("Find Your Perfect Keyboard Switch")
            }}
          />
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeInOut", duration: 0.3, delay: 0.25 }}
        >
          <p className="text-xl mb-10">
            Discover the best mechanical keyboard switch for your build with our AI-powered chatbot.
          </p>
          <Link href="#get-started" className="bg-white text-indigo-600 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition duration-300">
            Get Started
          </Link>
        </motion.div>
      </header>

      {/* Features Section */}
      <section id="features" className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeInOut", duration: 0.3, delay: 0.25 }}
            className="text-5xl font-bold text-gray-800 text-center mb-16"
          >
            Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ ease: "easeInOut", duration: 0.3, delay: 0.4 }}
              className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition duration-300 rounded-[20px]">
              <Image src="" alt="Feature 1" width={96} height={96} className="mb-6" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Personalized Recommendations
              </h3>
              <p className="text-gray-600">
                Tailored switch suggestions based on your specific preferences.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ ease: "easeInOut", duration: 0.3, delay: 0.45 }}
              className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition duration-300 rounded-[20px]">
              <Image src="" alt="Feature 2" width={96} height={96} className="mb-6" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                User-Friendly Interface
              </h3>
              <p className="text-gray-600">
                Simple and intuitive chatbot experience designed for everyone.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ ease: "easeInOut", duration: 0.3, delay: 0.5 }}
              className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition duration-300 rounded-[20px]">
              <Image src="" alt="Feature 3" width={96} height={96} className="mb-6" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Expert Advice
              </h3>
              <p className="text-gray-600">
                AI trained with extensive knowledge from keyboard enthusiasts.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full py-20 bg-gray-100">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={control}
          className="container mx-auto px-6"
        >
          <h2 className="text-5xl font-bold text-gray-800 text-center mb-16">
            How It Works
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="md:w-1/2 p-6">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                1. Start a Conversation
              </h3>
              <p className="text-gray-600 text-lg">
                Begin by telling our chatbot what you’re looking for in a switch.
              </p>
            </div>
            <div className="md:w-1/2 p-6">
              <Image src="/images/how-it-works1.png" alt="How it works step 1" width={500} height={300} className="rounded-lg shadow-md" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 p-6 order-2 md:order-1">
              <Image src="/images/how-it-works2.png" alt="How it works step 2" width={500} height={300} className="rounded-lg shadow-md" />
            </div>
            <div className="md:w-1/2 p-6 order-1 md:order-2">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                2. Get Recommendations
              </h3>
              <p className="text-gray-600 text-lg">
                Receive a curated list of switch options that match your preferences.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="w-full py-20 bg-indigo-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-8">
            Ready to Find Your Perfect Switch?
          </h2>
          <Link href="#start-chat" className="bg-white text-indigo-600 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition duration-300">
            Start Chatting Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© 2024 KeyboardSwitchBot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
