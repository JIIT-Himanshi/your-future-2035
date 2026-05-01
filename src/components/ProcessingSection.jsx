function ProcessingSection({ sectionRef, progress, message, isProcessing }) {
  return (
    <section ref={sectionRef} className="story-section relative px-4 py-24 sm:px-8">
      <div className="section-inner mx-auto max-w-5xl">
        <div className="glass-panel relative overflow-hidden p-7 sm:p-10">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-8 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />

          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-cyan-100/80">Phase 2: AI Processing</p>
          <h2 className="neon-title text-3xl text-white sm:text-4xl">Neural Future Engine Running</h2>

          <div className="mt-8 space-y-2 text-sm font-medium text-slate-200/80 sm:text-base">
            <p className={progress < 45 ? 'text-cyan-200 animate-pulse' : ''}>Analyzing data...</p>
            <p className={progress >= 45 && progress < 85 ? 'text-violet-200 animate-pulse' : ''}>Predicting possibilities...</p>
            <p className={progress >= 85 ? 'text-fuchsia-200 animate-pulse' : ''}>Synthesizing timeline outcomes...</p>
          </div>

          <div className="mt-7 h-3 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-3 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-300/75">
            <span>{message}</span>
            <span>{progress}%</span>
          </div>

          {isProcessing ? (
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-cyan-200/35 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-300" />
              Signal scanning in progress
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default ProcessingSection;
