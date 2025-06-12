import React from "react";

const Experience = () => {
  return (
    <div
      data-name="experience"
      className="py-32 w-full bg-white"
      id="experience"
    >
      <div className="bg-gray-900 text-gray-200 py-12 md:py-24">
        <div className="max-w-screen-lg mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Experience</h2>
          <p className="text-gray-400 mb-12">
            Crafting scalable systems, leading projects, and building solutions that power real-world impact:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Event Ticketing App */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-200">
                  Event Ticketing Platform
                </h3>
                <p className="text-gray-400 mb-1">Technical Lead & Backend Engineer (Nodejs)</p>
                {/* <p className="text-gray-400 mb-2">2023 – Present</p> */}
                <a
                  href="https://github.com/Tekkdose-Ltd/3ventiz-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm"
                >
                  🔗 View on GitHub
                </a>
              </div>
              <div className="px-6 py-4 bg-gray-700">
                <p className="text-gray-400 mb-2">
                  1. Designed and built the backend for an event management system, supporting both admin and mobile users.
                </p>
                <p className="text-gray-400 mb-2">
                  2. Integrated Stripe for seamless ticket payments.
                </p>
                <p className="text-gray-400 mb-2">
                  3. Leveraged AWS Lambda with SQS/SNS to power a serverless, scalable architecture.
                </p>
              </div>
            </div>

            {/* Loan App */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-200">
                  Loan Management System
                </h3>
                <p className="text-gray-400 mb-1">Backend Developer (Nodejs)</p>
                {/* <p className="text-gray-400 mb-2">2022 – 2023</p> */}
                <a
                  href="https://github.com/ebukacodes21/gaat-server"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm"
                >
                  🔗 View on GitHub
                </a>
              </div>
              <div className="px-6 py-4 bg-gray-700">
                <p className="text-gray-400 mb-2">
                  1. Built a monolithic Node.js backend to manage loan processing, payment tracking, and user management.
                </p>
                <p className="text-gray-400 mb-2">
                  2. Implemented secure file uploads, email notifications, and hosted the service on Namecheap.
                </p>
              </div>
            </div>

            {/* Restaurant App */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-200">
                  Restaurant Ordering Platform
                </h3>
                <p className="text-gray-400 mb-1">Backend Developer (Go)</p>
                {/* <p className="text-gray-400 mb-2">2023</p> */}
                <a
                  href="https://github.com/ebukacodes21/menu-deck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm"
                >
                  🔗 View on GitHub
                </a>
              </div>
              <div className="px-6 py-4 bg-gray-700">
                <p className="text-gray-400 mb-2">
                  1. Built a backend in Golang enabling restaurant registration, profile management, and customer ordering.
                </p>
                <p className="text-gray-400 mb-2">
                  2. Used AWS Lambda and SQS/SNS for event-driven architecture and scalability.
                </p>
              </div>
            </div>

            {/* Peerbill */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-200">
                  Blockchain – P2P Crypto Exchange
                </h3>
                <p className="text-gray-400 mb-1">Fullstack Developer (Golang/GRPC/NextJS)</p>
                {/* <p className="text-gray-400 mb-2">Ongoing</p> */}
                <a
                  href="https://github.com/ebukacodes21/peerbill-trader-api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm"
                >
                  🔗 View on GitHub
                </a>
              </div>
              <div className="px-6 py-4 bg-gray-700">
                <p className="text-gray-400 mb-2">
                  1. Developed P2P crypto trading platform using Golang and gRPC with crypto/fiat matching logic.
                </p>
                <p className="text-gray-400 mb-2">
                  2. Enabled stablecoin-based utility bill payments, airtime/data top-ups via crypto wallets.
                </p>
                <p className="text-gray-400 mb-2">
                  3. Deployed services on AWS EC2 with CI/CD for scalable delivery.
                </p>
              </div>
            </div>

            {/* Blockchain Engineer */}
            {/* <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-200">
                  Hackpiy Blockchain Solutions
                </h3>
                <p className="text-gray-400 mb-1">Blockchain Integration Engineer</p>
                <p className="text-gray-400 mb-2">Oct 2022 – Jul 2023</p>
                <a
                  href="https://github.com/yourusername/hackpiy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm"
                >
                  🔗 View on GitHub
                </a>
              </div>
              <div className="px-6 py-4 bg-gray-700">
                <p className="text-gray-400 mb-2">
                  1. Developed blockchain-integrated services in Go and Node.js to power decentralized apps.
                </p>
                <p className="text-gray-400 mb-2">
                  2. Authored internal docs on blockchain fundamentals, architecture patterns, and tooling.
                </p>
              </div>
            </div> */}

            {/* Instructor Role */}
            {/* <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-200">
                  Applied Technologies
                </h3>
                <p className="text-gray-400 mb-1">JavaScript/TypeScript Instructor</p>
                <p className="text-gray-400 mb-2">Apr 2021 – Aug 2021</p>
                <a
                  href="https://github.com/yourusername/js-typescript-course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm"
                >
                  🔗 View on GitHub
                </a>
              </div>
              <div className="px-6 py-4 bg-gray-700">
                <p className="text-gray-400 mb-2">
                  1. Delivered hands-on lessons in Node.js, REST APIs, and TypeScript fundamentals to early-stage devs.
                </p>
                <p className="text-gray-400 mb-2">
                  2. Mentored students through real-world projects and development best practices.
                </p>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;