import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  PiggyBank,
  BarChart3,
  Target,
  ShieldCheck,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Boost Productivity with AI",
    desc: "Automate your workflows and free up time for what truly matters. Say goodbye to manual repetition. AI automation for business has never been easier.",
  },
  {
    icon: PiggyBank,
    title: "Cut Operational Costs",
    desc: "Leverage AI automation to reduce overhead, eliminate inefficiencies, and increase profit margins. Cut operational costs with AI and intelligent operations.",
  },
  {
    icon: BarChart3,
    title: "Scale Seamlessly",
    desc: "Deploy intelligent systems that grow effortlessly with your business—without tech debt. Scale your startup with AI and automated workflows.",
  },
  {
    icon: Target,
    title: "Eliminate Bottlenecks",
    desc: "Identify and resolve workflow delays instantly with AI-powered operational insights. Intelligent operations for modern businesses.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Compliant Infrastructure",
    desc: "Designed for enterprise-grade data privacy, access controls, and regulatory compliance. Trust your AI automation for business.",
  },
  {
    icon: Users,
    title: "Delight Customers at Scale",
    desc: "Personalize engagement and accelerate response times with conversational AI and smart support tools. AI automation for business growth.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const WhyChooseModeAI = React.memo(function WhyChooseModeAI() {
  return (
    <section
      aria-labelledby="why-choose-modeai-heading"
      className="relative w-full overflow-hidden py-20 px-6 bg-gradient-to-br from-[#0a0118] via-[#1a0a2e] to-[#0a1a2e]"
    >
      {/* Subtle blurred glow spots */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-500 opacity-30 blur-3xl rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-400 opacity-20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 opacity-30 blur-2xl rounded-full" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        <h2
          id="why-choose-modeai-heading"
          className="text-center text-4xl md:text-5xl font-heading-bold text-white tracking-tight"
        >
          Why Choose{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            ModeAI
          </span>
          ?
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-center text-lg text-neutral-300 font-body-regular">
          Discover how ModeAI's AI automation for business delivers intelligent
          operations, automated workflows, and productivity software for
          business. Cut operational costs with AI and scale your startup with
          AI-powered solutions designed for modern enterprises.
        </p>

        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, i) => (
            <motion.article
              key={feature.title}
              variants={cardVariants}
              className="group rounded-2xl border border-white/10 bg-gradient-to-tr from-white/5 to-white/10 backdrop-blur-md shadow-xl p-8 flex flex-col items-center transition-transform duration-200 ease-in-out hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-cyan-400 text-white text-2xl shadow-lg mb-4 transition-all duration-200 group-hover:shadow-pink-400/60 group-hover:shadow-lg group-hover:scale-110">
                {feature.icon && <feature.icon size={28} />}
              </div>
              <h3 className="mt-2 text-xl font-heading-semibold text-white text-center">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed text-center font-body-regular">
                {feature.desc}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default WhyChooseModeAI;
