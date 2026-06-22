"use client";

import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    backgroundColor: "var(--color-navy-light)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "white",
    padding: "0.75rem 1rem",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 150ms",
    boxSizing: "border-box" as const,
  };

  const labelStyle = {
    display: "block",
    color: "rgba(255,255,255,0.8)",
    fontSize: "0.875rem",
    fontWeight: 500,
    marginBottom: "0.375rem",
  };

  return (
    <section
      id="contact"
      style={{ padding: "5rem 0", backgroundColor: "var(--color-navy)" }}
    >
      <div className="container-site">
        <div className="contact-grid">

          {/* LEFT — info */}
          <div>
            <p style={{
              color: "var(--color-gold)",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>
              Get In Touch
            </p>

            <h2 className="heading-accent" style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              color: "white",
              marginBottom: "1.5rem",
            }}>
              Let&apos;s Find Your Next Property
            </h2>

            <p style={{
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
              maxWidth: "28rem",
            }}>
              Whether you&apos;re buying your first condo or your fifth investment
              property, our team will guide you through every step. We&apos;ll be
              in touch within one business day.
            </p>

            {/* CONTACT DETAILS */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                { icon: "📍", label: "Studio",  value: "123 Water St, Vancouver BC" },
                { icon: "📞", label: "Phone",   value: "+1 (604) 555-0190" },
                { icon: "✉️", label: "Email",   value: "hello@prestigeproperties.ca" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <span style={{ fontSize: "1.1rem", marginTop: "0.1rem" }}>{item.icon}</span>
                  <div>
                    <p style={{
                      color: "var(--color-gold)",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginBottom: "0.2rem",
                    }}>
                      {item.label}
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.875rem" }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — form */}
          <div>
            {submitted ? (
              // SUCCESS STATE
              <div style={{
                backgroundColor: "var(--color-navy-light)",
                padding: "3rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                minHeight: "20rem",
              }}>
                <div style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "50%",
                  backgroundColor: "rgba(184,144,42,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}>
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="var(--color-gold)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  color: "white",
                  marginBottom: "0.5rem",
                }}>
                  Message Received
                </h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
                  We&apos;ll be in touch within one business day.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", phone: "", message: "" });
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--color-gold)",
                    fontSize: "0.875rem",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              // FORM
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
              >
                {/* NAME */}
                <div>
                  <label htmlFor="name" style={labelStyle}>Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Alex Chen"
                    value={form.name}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label htmlFor="email" style={labelStyle}>Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={form.email}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label htmlFor="phone" style={labelStyle}>Phone (optional)</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 604 555 0100"
                    value={form.phone}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label htmlFor="message" style={labelStyle}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="I'm interested in a 2-bedroom in Yaletown under $1.2M..."
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: "none" }}
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{
                    width: "100%",
                    opacity: loading ? 0.65 : 1,
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
        }
        @media (min-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </section>
  );
}