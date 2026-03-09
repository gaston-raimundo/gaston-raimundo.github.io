export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <span className="font-bold text-slate-300">GR.</span>
          <span>·</span>
          <span>Gaston Pablo Raimundo</span>
          <span>·</span>
          <span>Data Analyst Senior</span>
        </div>
        <div className="flex items-center gap-6 text-slate-600 text-sm">
          <a
            href="mailto:gaston.rai28@gmail.com"
            className="hover:text-slate-300 transition-colors"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/gaston-raimundo-3a287a213/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-slate-700">© {year}</span>
        </div>
      </div>
    </footer>
  );
}
