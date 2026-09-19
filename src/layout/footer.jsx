import { Link } from "react-router";
import { ParticlesProvider } from "@tsparticles/react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#111111] px-6 pb-8 pt-16 text-white">
      <div className="pointer-events-none absolute inset-0">
        <ParticlesProvider init={loadSlim}>
          <Particles
            id="footerParticles"
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

      <div className="relative z-10 mx-auto mb-16 grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h3 className="mb-6 text-2xl font-bold">Contact me</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <span className="font-medium text-white">Email: </span>
              <a
                href="mailto:sabeenthapa9861@gmail.com"
                className="text-sky-400 hover:underline"
              >
                sabeenthapa9861@gmail.com
              </a>
            </li>
            <li>
              <span className="font-medium text-white">Discord: </span>
              <a
                href="https://discord.com/users/pho3nix_fury_91372"
                target="_blank"
                rel="noreferrer"
                className="text-sky-400 hover:underline"
              >
                pho3nix_fury_91372
              </a>
            </li>
            <li>
              <span className="font-medium text-white">Instagram: </span>
              <a
                href="https://www.instagram.com/tsabin.me/"
                target="_blank"
                rel="noreferrer"
                className="text-sky-400 hover:underline"
              >
                @tsabin.me
              </a>
            </li>
            <li>
              <span className="font-medium text-white">Steam: </span>
              <a
                href="https://steamcommunity.com/profiles/76561199732498477"
                target="_blank"
                rel="noreferrer"
                className="text-sky-400 hover:underline"
              >
                Steam profile
              </a>
            </li>
            <li>
              <span className="font-medium text-white">GPG Key: </span>
              <Link to="/gpg" className="text-sky-400 hover:underline">
                View GPG key
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-2xl font-bold">Site map</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/impossible-list" className="hover:underline">
                Impossible List
              </Link>
            </li>
            <li>
              <Link to="/cv" className="hover:underline">
                CV
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-gray-400 md:flex-row">
        <p>© 2026 Sabin Thapa</p>
        <a
          href="https://github.com/sabinThapa-arch/st-portfolio"
          target="_blank"
          rel="noreferrer"
          className="text-sky-400 hover:underline"
        >
          View Source Code
        </a>
      </div>
    </footer>
  );
}
