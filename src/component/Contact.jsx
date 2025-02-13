import React, { useState } from "react";
import { Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsModalOpen(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Contact Me</h2>
          <p className="text-muted">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              {["name", "email"].map((field) => (
                <div key={field} className="mb-3">
                  <label htmlFor={field} className="form-label text-capitalize">
                    {field}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    required
                    value={formData[field]}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              ))}
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
              >
                <Send className="me-2" size={20} /> Send Message
              </button>
            </form>

            <hr className="w-100 mx-auto" />

            {/* Social Media Links */}
            <div className="text-center mt-4">
              <span className="fw-bold d-block mb-2">or get in touch with</span>
              <div className="d-flex justify-content-center gap-3">
                {[
                  {
                    href: "https://github.com/DhruvDonda",
                    icon: "bi bi-github",
                  },
                  {
                    href: "https://www.linkedin.com/in/dhruv-donda/",
                    icon: "bi bi-linkedin",
                  },
                  {
                    href: "https://twitter.com/DondaDhruv",
                    icon: "bi bi-twitter-x",
                  },
                  {
                    href: "mailto:dhruvdonda025.com",
                    icon: "bi bi-envelope",
                    title: "Email Me",
                  }, // Email Link
                ].map(({ href, icon, title }) => (
                  <a
                    key={icon}
                    href={href}
                    className="text-dark fs-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={title || ""}
                  >
                    <i className={icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && <SuccessModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
};

// Success Modal Component
const SuccessModal = ({ onClose }) => (
  <>
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Success</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Your message has been sent successfully!</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="modal-backdrop fade show"></div>
  </>
);

export default Contact;
