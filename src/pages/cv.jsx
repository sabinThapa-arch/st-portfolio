import { useState, useRef } from "react";
import {
  Sun,
  Moon,
  Download,
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  FolderGit2,
} from "lucide-react";
import { SiDiscord, SiGithub, SiInstagram, SiSteam } from "react-icons/si";

export default function Resume() {
  const [darkMode, setDarkMode] = useState(true);
  const cvRef = useRef(null);

  // Handles exporting the CV section directly to PDF
  const handleDownloadPDF = async () => {
    try {
      const element = cvRef.current;
      if (!element) return;

      // Lazy-load libraries only when the user clicks download
      const { jsPDF } = await import("jspdf");
      const html2canvasModule = await import("html2canvas-pro");
      const html2canvas = html2canvasModule.default ?? html2canvasModule;

      // Render the CV into a canvas (html2canvas-pro supports Tailwind v4 oklch colors)
      const canvas = await html2canvas(element, {
        scale: 2, // Increases quality/resolution
        useCORS: true, // Handles external icons/images properly
        backgroundColor: darkMode ? "#1e293b" : "#ffffff",
      });

      const img = canvas.toDataURL("image/jpeg", 0.95);

      // Build the PDF (letter, portrait) and fit the canvas across pages
      const pdf = new jsPDF({
        unit: "in",
        format: "letter",
        orientation: "portrait",
      });
      const pageWidth = 8.5;
      const pageHeight = 11;
      const margin = 0.5;

      const imgWidth = pageWidth - margin * 2;
      const imgHeight = imgWidth * (canvas.height / canvas.width);

      let heightLeft = imgHeight;
      let position = margin;

      pdf.addImage(img, "JPEG", margin, position, imgWidth, imgHeight);
      heightLeft -= pageHeight - margin * 2;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight + margin;
        pdf.addPage();
        pdf.addImage(img, "JPEG", margin, position, imgWidth, imgHeight);
        heightLeft -= pageHeight - margin * 2;
      }

      pdf.save("Sabin_Thapa_CV.pdf");
    } catch (error) {
      console.error("Could not generate the CV PDF:", error);
      alert("The CV could not be downloaded. Please try again.");
    }
  };

  return (
    <div
      className={`min-h-screen py-10 px-4 transition-colors duration-300 font-sans ${
        darkMode ? "bg-slate-900 text-slate-100" : "bg-slate-50 text-slate-800"
      }`}
    >
      {/* Action Header / Toolbar */}
      <div className="max-w-4xl mx-auto mb-6 flex justify-end gap-3 print:hidden">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2.5 rounded-lg border flex items-center gap-2 transition-all ${
            darkMode
              ? "bg-slate-800 border-slate-700 hover:bg-slate-700 text-amber-400"
              : "bg-white border-slate-200 hover:bg-slate-100 text-slate-700 shadow-sm"
          }`}
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          <span className="text-sm font-medium">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </span>
        </button>

        <button
          onClick={handleDownloadPDF}
          className="px-4 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-medium text-sm flex items-center gap-2 transition-all shadow-md"
        >
          <Download size={18} />
          <span>Download PDF</span>
        </button>
      </div>

      {/* Main CV Container */}
      <div
        ref={cvRef}
        className={`max-w-4xl mx-auto p-8 rounded-xl border shadow-xl ${
          darkMode
            ? "bg-slate-800/80 border-slate-700/60"
            : "bg-white border-slate-200"
        }`}
      >
        <header className="border-b pb-6 mb-8 border-slate-700/40">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-teal-400">
            SABIN THAPA
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-400 font-medium">
            Student, Developer & Yapper
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-8">
            {/* Contact */}
            <section>
              <h2 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-3">
                Contact
              </h2>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2.5">
                  <Mail size={16} className="text-teal-400 shrink-0" />
                  <a
                    href="mailto:sabeenthapa9861@gmail.com"
                    className="hover:text-teal-400 transition"
                  >
                    sabeenthapa9861@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin size={16} className="text-teal-400 shrink-0" />
                  <span>Kathmandu, Nepal</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <SiInstagram size={16} className="text-teal-400 shrink-0" />
                  <a
                    href="https://www.instagram.com/tsabin.me/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-teal-400 transition"
                  >
                    @tsabin.me
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <SiGithub size={16} className="text-teal-400 shrink-0" />
                  <a
                    href="https://github.com/sabinThapa-arch"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-teal-400 transition"
                  >
                    @sabinThapa-arch
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <SiDiscord size={16} className="text-teal-400 shrink-0" />
                  <a
                    href="https://discord.com/users/pho3nix_fury_91372"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-teal-400 transition"
                  >
                    pho3nix_fury_91372
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <SiSteam size={16} className="text-teal-400 shrink-0" />
                  <a
                    href="https://steamcommunity.com/profiles/76561199732498477"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-teal-400 transition"
                  >
                    Steam profile
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-3">
                Programming Skills
              </h2>
              <div className="space-y-2">
                {[
                  { name: "JavaScript", rating: 5 },
                  { name: "Node.js & Express", rating: 5 },
                  { name: "HTML/CSS", rating: 5 },
                  { name: "Full-stack development", rating: 4 },
                  { name: "REST APIs", rating: 3 },
                  { name: "React & Next.js", rating: 3 },
                  { name: "MongoDB & SQL", rating: 3 },
                  { name: "Arduino & Embedded Systems", rating: 3 },
                  { name: "C/C++", rating: 2 },
                  { name: "Python", rating: 2 },
                  { name: "OpenCV & MediaPipe", rating: 2 },
                  { name: "AI/ML/STATS", rating: 1 },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className="font-medium">{skill.name}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < skill.rating
                              ? "bg-teal-400"
                              : darkMode
                                ? "bg-slate-700"
                                : "bg-slate-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-3">
                Interests
              </h2>
              <ul className="text-sm space-y-1.5 text-slate-300">
                {[
                  "Programming",
                  "Photography",
                  "Internet of Things(IOT)",
                  "Wireless Technologies",
                  "Learning new things",
                  "Gaming",
                ].map((project) => (
                  <li key={project} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                    <span>{project}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="md:col-span-2 space-y-8">
            <section>
              <div className="flex items-center gap-2 mb-4 border-b pb-1 border-slate-700/40">
                <GraduationCap className="text-teal-400" size={20} />
                <h2 className="text-lg font-bold tracking-tight">Education</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-base">
                      Bachelor's in BSc CSIT
                    </h3>
                    <span className="text-xs text-slate-400">Ongoing</span>
                  </div>
                  <p className="text-xs text-teal-400 font-medium">
                    Trinity International College, Kathmandu, Nepal
                  </p>
                  <ul className="mt-2 text-xs text-slate-300 list-disc list-inside space-y-1">
                    <li>
                      Currently studying for a Bachelor's degree in Computer
                      Science and Information Technology.
                    </li>
                    <li>
                      Building practical software projects alongside academic
                      studies.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <div className="flex items-center gap-2 mb-4 border-b pb-1 border-slate-700/40">
                <Briefcase className="text-teal-400" size={20} />
                <h2 className="text-lg font-bold tracking-tight">
                  Professional Experience
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-base">
                      Independent Developer
                    </h3>
                    <span className="text-xs text-slate-400">Present</span>
                  </div>
                  <p className="text-xs text-teal-400 font-medium">
                    Personal Projects
                  </p>
                  <p className="mt-1 text-xs text-slate-300">
                    Designing and building full-stack applications, APIs, and
                    interactive tools while exploring new technologies.
                  </p>
                </div>
              </div>
            </section>
            <section>
              <div className="flex items-center gap-2 mb-4 border-b pb-1 border-slate-700/40">
                <FolderGit2 className="text-teal-400" size={20} />
                <h2 className="text-lg font-bold tracking-tight">Projects</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    title: "E-Commerce API",
                    description:
                      "RESTful e-commerce backend built with Node.js and Express.",
                    href: "https://github.com/sabinThapa-arch/ecomApiTest",
                  },
                  {
                    title: "X-Ray Hand Vision",
                    description:
                      "Real-time webcam hand skeleton overlay powered by MediaPipe and OpenCV.",
                    href: "https://github.com/sabinThapa-arch/xray",
                  },
                  {
                    title: "EduSmart AI",
                    description:
                      "Full-stack AI learning platform with role-based dashboards.",
                    href: "https://github.com/sabinThapa-arch/EDU-Dashboard",
                  },
                  {
                    title: "ShopEasy",
                    description:
                      "Vanilla JavaScript storefront with cart, wishlist, and checkout.",
                    href: "https://github.com/sabinThapa-arch/dummyjs-ecom-html-css",
                  },
                  {
                    title: "Job Portal",
                    description:
                      "Full-stack job portal connecting employers and candidates.",
                    href: "https://github.com/sabinThapa-arch/job-portal",
                  },
                ].map((project) => (
                  <a
                    key={project.title}
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-3 rounded-lg border transition-colors hover:border-teal-400 ${
                      darkMode
                        ? "bg-slate-900/40 border-slate-700/50"
                        : "bg-slate-50 border-slate-200"
                    }`}
                  >
                    <h4 className="font-bold text-sm text-teal-400">
                      {project.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      {project.description}
                    </p>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
