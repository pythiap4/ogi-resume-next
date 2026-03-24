export default function Footer() {
  return (
    <footer
      className="py-10 text-center border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          &copy; {new Date().getFullYear()} Ognen Slavkovski. Built with
          Next.js, TypeScript &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
