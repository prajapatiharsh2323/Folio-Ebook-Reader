export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">Folio</div>
        <p>A quieter place to read.</p>
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} Folio. Read locally, keep it yours.
        </p>
      </div>
    </footer>
  );
}
