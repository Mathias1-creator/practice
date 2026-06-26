import { useState } from "react";

const inputClass =
  "w-full font-body text-sm rounded-md border px-4 py-2.5 outline-none transition-all duration-150 bg-white";
const inputStyle = { borderColor: "#D1D5DB", color: "#1A1D21" };

const projectTypes = [
  "New Construction",
  "Remodel or Repipe",
  "Service or Repair",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    projectType: "",
    message: "",
  });
  const [focused, setFocused] = useState(null);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  function focusStyle(field) {
    return focused === field
      ? { borderColor: "#B26B3E", boxShadow: "0 0 0 3px rgba(178,107,62,0.12)" }
      : inputStyle;
  }

  return (
    <div
      className="bg-white rounded-xl p-7 sm:p-9"
      style={{
        boxShadow: "0 8px 32px -8px rgba(19,35,59,0.13)",
        borderTop: "3px solid #B26B3E",
      }}
    >
      <h2
        className="font-heading font-bold text-xl sm:text-2xl mb-2"
        style={{ color: "#13233B" }}
      >
        Request a Quote
      </h2>
      <p className="font-body text-sm mb-7" style={{ color: "#4C525A" }}>
        Fill this out and we will get back to you as soon as possible.
      </p>

      {submitted ? (
        <div
          className="rounded-lg px-6 py-5 font-body text-sm leading-relaxed"
          style={{
            backgroundColor: "rgba(178,107,62,0.08)",
            color: "#13233B",
            border: "1px solid rgba(178,107,62,0.25)",
          }}
        >
          Thank you. Your request has been received and we will get back to you shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block font-body font-medium text-sm mb-1.5" style={{ color: "#13233B" }}>
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
              className={inputClass}
              style={focusStyle("name")}
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-body font-medium text-sm mb-1.5" style={{ color: "#13233B" }}>
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              onFocus={() => setFocused("phone")}
              onBlur={() => setFocused(null)}
              className={inputClass}
              style={focusStyle("phone")}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-body font-medium text-sm mb-1.5" style={{ color: "#13233B" }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
              className={inputClass}
              style={focusStyle("email")}
            />
          </div>

          {/* Location */}
          <div>
            <label className="block font-body font-medium text-sm mb-1.5" style={{ color: "#13233B" }}>
              City or Project Location
            </label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              onFocus={() => setFocused("location")}
              onBlur={() => setFocused(null)}
              className={inputClass}
              style={focusStyle("location")}
            />
          </div>

          {/* Project Type */}
          <div>
            <label className="block font-body font-medium text-sm mb-1.5" style={{ color: "#13233B" }}>
              Project Type
            </label>
            <select
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              onFocus={() => setFocused("projectType")}
              onBlur={() => setFocused(null)}
              className={inputClass}
              style={focusStyle("projectType")}
            >
              <option value="" disabled>Select a project type</option>
              {projectTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block font-body font-medium text-sm mb-1.5" style={{ color: "#13233B" }}>
              Tell Us About Your Project
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              rows={4}
              className={inputClass}
              style={{ ...focusStyle("message"), resize: "vertical" }}
            />
          </div>

          <button
            type="submit"
            className="w-full font-body font-semibold text-sm text-white rounded-md px-6 py-3.5 transition-all duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: "#B26B3E",
              boxShadow: "0 2px 8px rgba(178,107,62,0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#9A5A30";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(178,107,62,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#B26B3E";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(178,107,62,0.25)";
            }}
          >
            Send Quote Request
          </button>
        </form>
      )}
    </div>
  );
}