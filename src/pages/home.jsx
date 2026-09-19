import { ParticlesProvider } from "@tsparticles/react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { FiMail } from "react-icons/fi";
import { SiDiscord, SiGithub, SiInstagram, SiSteam } from "react-icons/si";
import profileImage from "../assets/profile.png";
import TopProjects from "../components/topProjects";
import Footer from "../layout/footer";
import Header from "../layout/header";

function ParticlesBackground({ id }) {
  return (
    <div className="pointer-events-none absolute inset-0">
      <ParticlesProvider init={loadSlim}>
        <Particles
          id={id}
          className="absolute inset-0"
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            particles: {
              color: { value: "#ffffff" },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: { enable: true, speed: 1 },
              number: {
                density: { enable: true },
                value: 80,
              },
              opacity: { value: 0.5 },
              size: { value: { min: 1, max: 3 } },
            },
          }}
        />
      </ParticlesProvider>
    </div>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center text-white"
    >
      <div className="mb-6">
        <img
          src={profileImage}
          alt="Sabin Thapa"
          className="h-28 w-28 rounded-full object-cover shadow-lg ring-2 ring-white/10"
        />
      </div>

      <h1 className="mb-3 text-5xl font-extrabold tracking-tight md:text-6xl">
        Sabin Thapa
      </h1>

      <p className="mb-8 text-xl font-medium text-gray-300 md:text-2xl">
        Student, Developer &amp; Yapper
      </p>

      <div className="flex flex-wrap items-center justify-center gap-5 text-gray-300">
        <a
          href="https://github.com/sabinThapa-arch"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-white"
          title="GitHub"
          aria-label="GitHub"
        >
          <SiGithub className="h-6 w-6" />
        </a>
        <a
          href="https://www.instagram.com/tsabin.me/"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-white"
          title="Instagram"
          aria-label="Instagram"
        >
          <SiInstagram className="h-6 w-6" />
        </a>
        <a
          href="https://discord.com/users/pho3nix_fury_91372"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-white"
          title="Discord"
          aria-label="Discord"
        >
          <SiDiscord className="h-6 w-6" />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sabeenthapa9861@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-white"
          title="Email"
          aria-label="Email"
        >
          <FiMail className="h-6 w-6" />
        </a>
        <a
          href="https://steamcommunity.com/profiles/76561199732498477"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-white"
          title="Steam"
          aria-label="Steam"
        >
          <SiSteam className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <Header />

      <main className="relative">
        <div className="relative overflow-hidden bg-[#111111]">
          <ParticlesBackground id="heroParticles" />

          <div className="relative z-10">
            <HeroSection />
          </div>
        </div>

        <section
          id="about"
          className="w-full bg-white px-6 py-16 text-center text-[#111111]"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-2xl font-bold">Hey!</h2>
            <p className="text-lg leading-relaxed text-[#1a1a1a]">
              I&apos;m Sabin Thapa from Kathmandu! I love programming, taking
              photos and learning new things! Feel free to get in touch or take
              a look at my past work below.
            </p>
          </div>
        </section>

        <div className="relative overflow-hidden bg-[#111111] px-6 py-20 text-center">
          <ParticlesBackground id="portfolioParticles" />

          <div className="relative z-10 mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-white">Portfolio</h2>
          </div>
        </div>

        <TopProjects />
      </main>

      <Footer />
    </div>
  );
}
