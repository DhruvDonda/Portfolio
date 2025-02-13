import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution built with React and Node.js",
    image:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/DhruvDonda/Smart-Care",
  },
  {
    title: "Task Management App",
    description: "A productivity app built with React",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/DhruvDonda/Task-Manager",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/DhruvDonda/Social-Media-Dsahboard",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-5"
        >
          <h2 className="fw-bold text-dark">My Projects</h2>
          <p className="text-muted">
            Here are some of my recent projects that showcase my skills and
            experience.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="row">
          {projects.map(({ title, description, image, link }, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              variants={fadeInUp}
              className="col-md-6 col-lg-4 mb-4"
            >
              <div className="card shadow-sm">
                <img
                  src={image}
                  alt={title || "Project Image"}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text text-muted">{description}</p>
                  <a
                    href={link}
                    className="btn btn-primary d-flex align-items-center"
                    aria-label={`View ${title} project`}
                  >
                    View Project <ExternalLink className="ms-2" size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
