import {
  FiArrowUpRight,
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiCpu,
  FiEye,
  FiLayers,
  FiServer,
  FiShoppingCart,
} from "react-icons/fi";

const topProjects = [
  {
    id: 1,
    title: "E-Commerce API",
    description:
      "A RESTful e-commerce backend built with Node.js and Express, with modular models, middleware, and a database layer.",
    icon: FiServer,
    titleIcon: FiCode,
    color: "bg-blue-600",
    href: "https://github.com/sabinThapa-arch/ecomApiTest",
  },
  {
    id: 2,
    title: "X-Ray Hand Vision",
    description:
      "Real-time webcam X-ray skeleton overlay on hands, powered by MediaPipe and OpenCV with multi-hand, multi-color glow.",
    icon: FiEye,
    titleIcon: FiCpu,
    color: "bg-red-600",
    href: "https://github.com/sabinThapa-arch/xray",
  },
  {
    id: 3,
    title: "EduSmart AI",
    description:
      "A full-stack AI learning platform with role-based dashboards for students, teachers, parents, and admins.",
    icon: FiBookOpen,
    titleIcon: FiLayers,
    color: "bg-[#0f172a]",
    href: "https://github.com/sabinThapa-arch/EDU-Dashboard",
  },
  {
    id: 4,
    title: "ShopEasy",
    description:
      "A responsive vanilla JavaScript storefront powered by the DummyJSON API, with cart, wishlist, and multi-step checkout.",
    icon: FiShoppingCart,
    titleIcon: FiCode,
    color: "bg-[#1f2937]",
    href: "https://github.com/sabinThapa-arch/dummyjs-ecom-html-css",
  },
  {
    id: 5,
    title: "Job Portal",
    description:
      "A full-stack job portal connecting employers and candidates, with separate frontend and backend applications.",
    icon: FiBriefcase,
    titleIcon: FiCode,
    color: "bg-emerald-600",
    href: "https://github.com/sabinThapa-arch/job-portal",
  },
];

export default function TopProjects() {
  return (
    <section
      id="projects"
      className="w-full bg-white px-6 py-20 text-center"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-4xl font-bold text-[#111111]">
          My top projects
        </h2>

        <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-3">
          {topProjects.map((project) => {
            const ProjectIcon = project.icon;
            const TitleIcon = project.titleIcon;

            return (
              <article
                key={project.id}
                className={`flex flex-col justify-between rounded-xl p-6 text-white shadow-lg ring-1 ring-white/10 ${project.color}`}
              >
                <div className="mb-6 flex justify-center">
                  <ProjectIcon className="h-14 w-14" aria-hidden="true" />
                </div>

                <div className="mb-6">
                  <div className="mb-2 flex items-center gap-3">
                    <TitleIcon className="h-5 w-5" aria-hidden="true" />
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <p className="text-sm text-white/80">
                    {project.description}
                  </p>
                </div>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center gap-1 self-start text-xs font-bold tracking-wider uppercase transition-opacity hover:opacity-80"
                >
                  View Project
                  <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
