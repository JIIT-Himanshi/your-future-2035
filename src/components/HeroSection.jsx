function HeroSection({ sectionRef, onStart }) {
  return (
    <section ref={sectionRef} className="story-section relative min-h-screen overflow-hidden px-4 pt-24 sm:px-8">
      <video
        className="hero-video absolute inset-0 h-full w-full object-cover opacity-35"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://cdn.pixabay.com/video/2023/06/11/166660-835149711_large.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,22,0.25),rgba(2,2,10,0.9))]" />
      <div className="aurora absolute -left-16 top-14 h-44 w-44 rounded-full bg-cyan-500/35" />
      <div className="aurora absolute right-5 top-1/3 h-60 w-60 rounded-full bg-fuchsia-500/30" />

      <div className="section-inner relative mx-auto flex h-full max-w-6xl flex-col items-start justify-center">
        <p className="mb-3 rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-1 text-xs uppercase tracking-[0.18em] text-cyan-100">
          AI Vision Engine
        </p>
        <h1 className="hero-heading neon-title max-w-4xl text-4xl leading-tight text-white sm:text-6xl lg:text-7xl">
          See Your Future in 2035
        </h1>
        <p className="hero-subtext mt-6 max-w-2xl text-lg text-blue-100/80 sm:text-xl">
          An AI-powered experience that turns your present choices into a cinematic glimpse of tomorrow.
        </p>

        <button type="button" onClick={onStart} className="interactive-btn hero-cta mt-10">
          Start Prediction
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
