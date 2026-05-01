function ResultSection({ sectionRef, prediction }) {
  const cards = prediction
    ? [
        { label: 'Future Job', value: prediction.futureJob },
        { label: 'Future City', value: prediction.futureCity },
        { label: 'Estimated Salary', value: prediction.estimatedSalary },
        { label: 'Lifestyle Description', value: prediction.lifestyle },
      ]
    : [];

  return (
    <section ref={sectionRef} className="story-section relative px-4 py-24 sm:px-8">
      <div className="section-inner mx-auto max-w-6xl">
        <p className="mb-2 text-xs uppercase tracking-[0.18em] text-fuchsia-200/80">Phase 3: Prediction Result</p>
        <h2 className="neon-title text-3xl text-white sm:text-4xl">Your 2035 Snapshot</h2>
        <p className="mt-3 text-slate-200/75">
          {prediction
            ? `Future profile generated for ${prediction.personName}.`
            : 'Run the analysis above to reveal your personalized future profile.'}
        </p>

        <div className="result-grid mt-10 grid gap-5 md:grid-cols-2">
          {prediction
            ? cards.map((card) => (
                <article
                  key={card.label}
                  className="result-card glass-panel group p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/[0.09]"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/70">{card.label}</p>
                  <p className="mt-3 text-xl font-semibold text-white sm:text-2xl">{card.value}</p>
                </article>
              ))
            : [1, 2, 3, 4].map((item) => (
                <article key={item} className="glass-panel p-6 opacity-55">
                  <div className="h-3 w-32 rounded-full bg-white/15" />
                  <div className="mt-4 h-8 w-4/5 rounded-xl bg-white/10" />
                </article>
              ))}
        </div>
      </div>
    </section>
  );
}

export default ResultSection;
