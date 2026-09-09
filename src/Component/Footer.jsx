import React from "react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-neutral-100 mb-3">
          Let's build something.
        </h2>
        <p className="text-neutral-400 max-w-md mx-auto mb-8">
          Open to full stack and AI integration roles — reach out by email or connect
          on LinkedIn / GitHub.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a
            href="mailto:manojmano4533@gmail.com"
            className="rounded-md border border-neutral-700 text-neutral-200 px-5 py-2.5 hover:border-[#d4a24c] hover:text-[#d4a24c] transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/manoj4588/"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-neutral-700 text-neutral-200 px-5 py-2.5 hover:border-[#d4a24c] hover:text-[#d4a24c] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/manoj4563"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-neutral-700 text-neutral-200 px-5 py-2.5 hover:border-[#d4a24c] hover:text-[#d4a24c] transition-colors"
          >
            GitHub
          </a>
        </div>
        <p className="text-neutral-600 text-xs mt-12">
          &copy; {new Date().getFullYear()} Manoj. Built with React, MUI & Tailwind.
        </p>
      </div>
    </footer>
  );
}
