function VisualizationSection({ prediction }) {
  return (
    <section className="story-section visualization-scene relative overflow-hidden px-4 py-24 sm:px-8">
      <video
        className="future-video absolute inset-0 h-full w-full object-cover opacity-35"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://cdn.pixabay.com/video/2022/10/15/134948-760777089_large.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-[#040610]/65 via-[#08071a]/85 to-[#03020b]" />

      <div className="section-inner relative mx-auto max-w-5xl">
        <p className="mb-2 text-xs uppercase tracking-[0.18em] text-cyan-100/85">Phase 4: Future Visualization</p>
        <h2 className="neon-title text-3xl text-white sm:text-5xl">A glimpse of your life in 2035</h2>
        <p className="mt-4 max-w-3xl text-lg text-blue-100/80">
          You move through intelligent cities, adaptive workplaces, and a lifestyle shaped by the choices you make today.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <span className="floating-chip rounded-full border border-cyan-200/30 bg-cyan-200/10 px-4 py-2 text-sm text-cyan-100/90">
            Smart Career Orbit
          </span>
          <span className="floating-chip rounded-full border border-violet-200/30 bg-violet-200/10 px-4 py-2 text-sm text-violet-100/90">
            Adaptive Lifestyle
          </span>
          <span className="floating-chip rounded-full border border-fuchsia-200/30 bg-fuchsia-200/10 px-4 py-2 text-sm text-fuchsia-100/90">
            AI-Augmented Growth
          </span>
          {prediction ? (
            <span className="floating-chip rounded-full border border-emerald-200/30 bg-emerald-200/10 px-4 py-2 text-sm text-emerald-100/90">
              Destination: {prediction.futureCity}
            </span>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default VisualizationSection;
