export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Kamba. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-xs text-text-muted hover:text-text-secondary">
            Privacy
          </a>
          <a href="#" className="text-xs text-text-muted hover:text-text-secondary">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
