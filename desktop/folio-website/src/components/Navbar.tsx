import { useState } from "react";

const navLinks = [
  { href: "/library", label: "Library" },
  { href: "/reading", label: "Reading" },
  { href: "/notes", label: "Notes" },
  { href: "/download", label: "Download" },
];

export function Navbar() {
  const [current, setCurrent] = useState<string>("/");

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a className="navbar__brand" href="/" aria-label="Folio home">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path
              d="M16 2 4 9v6c0 6.627 4.272 11 10 11 4.608 0 8.126-2.85 9.293-6.841L22 14c-2.12-3.584-5.392-6.841-9.293-6.841C8.272 15 4 11.627 4 5V9z"
              fill="currentColor"
              opacity="0.85"
            />
            <path
              d="M16 12 28 19v-6c0-4.418-2.85-8.146-6.5-9.171C21.061 8.83 20 8 20 8c0-.657.248-1.29.665-1.788C22.26 5.334 24 5 24 5c0-2.757-2.243-5-5-5S14 2.243 14 5s2.243 5 5 5c.866 0 1.68-.204 2.354-.567C23.752 7.71 24 8.343 24 9c0 2.757-2.243 5-5 5s-5-2.243-5-5c0-.657.248-1.29.665-1.788C18.739 9.17 20 8.418 20 8c0-4.418-2.85-8.146-6.5-9.171z"
              fill="currentColor"
              opacity="0.55"
            />
            <path d="M16 22c-3.314 0-6-2.686-6-6 0-1.657 1.343-3 3-3s3 1.343 3 3c0 3.314-2.686 6-6 6z" fill="currentColor" />
          </svg>
          <span>Folio</span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="navbar__link"
              href={link.href}
              aria-current={current === link.href ? "page" : undefined}
              onClick={() => setCurrent(link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
