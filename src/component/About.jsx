import React from "react";
import { motion } from "framer-motion";
import { Code, Award, Heart } from "lucide-react";

const sections = [
  {
    title: "Technical Skills",
    icon: <Code className="text-primary me-2" size={24} aria-label="Skills Icon" />,
    items: ["HTML", "CSS", "JavaScript", "React.js", "Swift"],
  },
  {
    title: "Certifications",
    icon: <Award className="text-primary me-2" size={24} aria-label="Certifications Icon" />,
    items: [
      "Project Horizon (Bhagwan Mahavir University, 2023)",
      "Graphics Design & Video Editing Master Class (Udemy)",
      "iOS App Development Course (Simba Institute)",
    ],
  },
  {
    title: "Interests",
    icon: <Heart className="text-primary me-2" size={24} aria-label="Interests Icon" />,
    items: [
      "Web design & improving user experience",
      "Exploring JavaScript frameworks like React.js and Vue.js",
      "Learning back-end development with Node.js and databases",
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-4"
        >
          <h2 className="fw-bold text-dark">About Me</h2>
          <p className="text-muted">Learn more about my skills, certifications, and interests.</p>
        </motion.div>

        {/* Dynamic Section Cards */}
        <div className="row">
          {sections.map(({ title, icon, items }, index) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              variants={fadeInUp}
              className="col-md-4"
            >
              <div className="card shadow-sm p-4">
                <div className="d-flex align-items-center mb-3">
                  {icon}
                  <h3 className="h5 mb-0">{title}</h3>
                </div>
                <ul className="list-unstyled">
                  {items.map((item, idx) => (
                    <li key={idx} className="text-muted">• {item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
