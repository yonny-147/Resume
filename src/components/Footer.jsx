export const Footer = () => {
  return (
    <footer className="border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-text-muted">
          <span className="text-accent">Y</span>.dev
        </span>
        <p className="text-text-muted text-xs">
          &copy; {new Date().getFullYear()} Yonny Ospina
        </p>
      </div>
    </footer>
  )
}
