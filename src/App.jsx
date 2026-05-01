import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FinalSection from './components/FinalSection';
import HeroSection from './components/HeroSection';
import InputSection from './components/InputSection';
import ProcessingSection from './components/ProcessingSection';
import ResultSection from './components/ResultSection';
import VisualizationSection from './components/VisualizationSection';
import { generatePrediction } from './utils/predictionEngine';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroRef = useRef(null);
  const inputRef = useRef(null);
  const processingRef = useRef(null);
  const resultRef = useRef(null);
  const audioRef = useRef(null);
  const analysisTweenRef = useRef(null);

  const [name, setName] = useState('');
  const [career, setCareer] = useState('Developer');
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('Standby for signal scan');
  const [isProcessing, setIsProcessing] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState('');
  const [soundEnabled, setSoundEnabled] = useState(false);

  const ensureAudioPlayback = useCallback(async () => {
    if (!audioRef.current) {
      return;
    }

    audioRef.current.volume = 0.2;

    if (audioRef.current.paused) {
      try {
        await audioRef.current.play();
        setSoundEnabled(true);
      } catch (_error) {
        setSoundEnabled(false);
      }
    }
  }, []);

  const handleStart = () => {
    inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    ensureAudioPlayback();
  };

  const handleAnalyze = () => {
    const cleanName = name.trim();

    if (!cleanName) {
      setError('Please enter your name before analysis.');
      return;
    }

    if (isProcessing) {
      return;
    }

    setError('');
    setPrediction(null);
    setProgress(0);
    setMessage('Analyzing data...');
    setIsProcessing(true);

    ensureAudioPlayback();
    processingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    gsap.fromTo('.analyze-btn', { scale: 1 }, { scale: 0.96, duration: 0.1, yoyo: true, repeat: 1 });

    analysisTweenRef.current?.kill();

    const progressState = { value: 0 };
    analysisTweenRef.current = gsap.to(progressState, {
      value: 100,
      duration: 3.8,
      ease: 'power2.inOut',
      onUpdate: () => {
        const nextValue = Math.round(progressState.value);
        setProgress(nextValue);

        if (nextValue < 35) {
          setMessage('Analyzing data...');
        } else if (nextValue < 72) {
          setMessage('Predicting possibilities...');
        } else if (nextValue < 95) {
          setMessage('Synthesizing lifestyle trajectories...');
        } else {
          setMessage('Finalizing your future profile...');
        }
      },
      onComplete: () => {
        const result = generatePrediction(cleanName, career);
        setPrediction(result);
        setIsProcessing(false);
        setMessage('Prediction complete');

        gsap.delayedCall(0.25, () => {
          resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      },
    });
  };

  const toggleSound = async () => {
    if (!audioRef.current) {
      return;
    }

    if (audioRef.current.paused) {
      try {
        await audioRef.current.play();
        audioRef.current.volume = 0.2;
        setSoundEnabled(true);
      } catch (_error) {
        setSoundEnabled(false);
      }
      return;
    }

    audioRef.current.pause();
    setSoundEnabled(false);
  };

  const handleRestart = () => {
    heroRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from('.hero-heading', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.hero-subtext, .hero-cta', {
        y: 24,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        delay: 0.24,
        ease: 'power2.out',
      });

      gsap.to('.hero-video', {
        scale: 1.08,
        duration: 10,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });

      gsap.utils.toArray('.story-section').forEach((section) => {
        const inner = section.querySelector('.section-inner');

        if (!inner) {
          return;
        }

        gsap.from(inner, {
          opacity: 0,
          y: 66,
          duration: 0.95,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
          },
        });
      });

      gsap.from('.floating-chip', {
        opacity: 0,
        y: 16,
        stagger: 0.14,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.visualization-scene',
          start: 'top 72%',
        },
      });

      gsap.to('.future-video', {
        yPercent: -8,
        scale: 1.08,
        ease: 'none',
        scrollTrigger: {
          trigger: '.visualization-scene',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => context.revert();
  }, []);

  useEffect(() => {
    if (!prediction) {
      return;
    }

    gsap.fromTo(
      '.result-card',
      { opacity: 0, y: 24, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out' },
    );
  }, [prediction]);

  useEffect(() => {
    return () => {
      analysisTweenRef.current?.kill();
    };
  }, []);

  return (
    <div className="relative overflow-x-clip">
      <div className="pointer-events-none fixed inset-0 -z-20 opacity-55 grid-halo" />
      <div className="pointer-events-none fixed -left-24 top-20 -z-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-[100px]" />
      <div className="pointer-events-none fixed -right-20 top-40 -z-20 h-72 w-72 rounded-full bg-violet-500/20 blur-[100px]" />

      <button
        type="button"
        onClick={toggleSound}
        className="fixed right-4 top-4 z-30 rounded-full border border-white/20 bg-slate-900/70 px-4 py-2 text-xs uppercase tracking-[0.14em] text-slate-100 backdrop-blur md:right-8 md:top-7"
      >
        {soundEnabled ? 'Sound: On' : 'Sound: Off'}
      </button>

      <audio ref={audioRef} loop preload="auto">
        <source src="https://cdn.pixabay.com/download/audio/2022/03/10/audio_1f4e98c395.mp3?filename=space-ambient-110040.mp3" type="audio/mpeg" />
      </audio>

      <main>
        <HeroSection sectionRef={heroRef} onStart={handleStart} />
        <InputSection
          sectionRef={inputRef}
          name={name}
          career={career}
          onNameChange={setName}
          onCareerChange={setCareer}
          onAnalyze={handleAnalyze}
          error={error}
          isProcessing={isProcessing}
        />
        <ProcessingSection
          sectionRef={processingRef}
          progress={progress}
          message={message}
          isProcessing={isProcessing}
        />
        <ResultSection sectionRef={resultRef} prediction={prediction} />
        <VisualizationSection prediction={prediction} />
        <FinalSection onRestart={handleRestart} />
      </main>
    </div>
  );
}

export default App;
