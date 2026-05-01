function FinalSection({ onRestart }) {
  return (
    <section className="story-section relative px-4 py-24 pb-28 sm:px-8">
      <div className="section-inner mx-auto max-w-4xl text-center">
        <div className="glass-panel p-8 sm:p-12">
          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-cyan-100/80">Final Signal</p>
          <h2 className="neon-title text-3xl text-white sm:text-5xl">Your future depends on your present.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200/80">
            Keep learning, keep building, and keep choosing intentionally. The timeline is yours to shape.
          </p>

          <button type="button" onClick={onRestart} className="interactive-btn mt-8">
            Re-run Prediction
          </button>
        </div>
      </div>
    </section>
  );
}

export default FinalSection;
