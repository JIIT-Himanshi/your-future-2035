const careerOptions = ['Developer', 'Designer', 'Business', 'Student'];

function InputSection({ sectionRef, name, career, onNameChange, onCareerChange, onAnalyze, error, isProcessing }) {
  return (
    <section ref={sectionRef} className="story-section relative px-4 py-24 sm:px-8">
      <div className="section-inner mx-auto max-w-5xl">
        <div className="glass-panel p-7 sm:p-10">
          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-violet-200/80">Phase 1: Input Signature</p>
          <h2 className="neon-title text-3xl text-white sm:text-4xl">Train The Prediction Model</h2>
          <p className="mt-3 max-w-2xl text-slate-200/80">
            Enter your profile and let the AI simulation project your 2035 reality.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-slate-200/80">
              Name
              <input
                type="text"
                value={name}
                onChange={(event) => onNameChange(event.target.value)}
                placeholder="Enter your name"
                className="rounded-xl border border-cyan-200/25 bg-slate-900/55 px-4 py-3 text-base text-white placeholder:text-slate-300/45 outline-none transition focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/25"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm text-slate-200/80">
              Career Interest
              <select
                value={career}
                onChange={(event) => onCareerChange(event.target.value)}
                className="rounded-xl border border-violet-200/25 bg-slate-900/55 px-4 py-3 text-base text-white outline-none transition focus:border-violet-300/70 focus:ring-2 focus:ring-violet-300/25"
              >
                {careerOptions.map((option) => (
                  <option key={option} value={option} className="bg-slate-900">
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onAnalyze}
              disabled={isProcessing}
              className="interactive-btn analyze-btn disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isProcessing ? 'Analyzing...' : 'Analyze My Future'}
            </button>
            {error ? <span className="text-sm text-rose-300">{error}</span> : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InputSection;
