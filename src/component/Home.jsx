import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/IMG.png";
import resume from "../assets/Resume.pdf";

const Home = () => {
  return (
    <section id="home" className="min-vh-100 pt-5 bg-light">
      <div className="container py-5">
        <div className="row align-items-center gy-4">
          {/* Profile Image */}
          <motion.div
            className="col-md-5 d-flex justify-content-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={profileImg}
              alt="Professional headshot"
              className="img-fluid rounded shadow-lg"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="col-md-7 text-center text-md-start mt-4 mt-md-0 ps-md-5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="display-4 fw-bold text-dark">Dhruv Donda</h1>
            <h2 className="h3 text-muted mb-3">Front-end Web Developer</h2>
            <p className="text-muted lead">
              Passionate about creating beautiful and functional web
              applications. Specialized in HTML, CSS, JavaScript, and React.js.
            </p>

            <motion.a
              href={resume}
              download
              className="btn btn-primary btn-lg mt-3"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
