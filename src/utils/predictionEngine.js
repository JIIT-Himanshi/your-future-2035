const futuresByCareer = {
  Developer: {
    jobs: [
      'AI Systems Architect',
      'Quantum App Engineer',
      'Autonomous Cloud Builder',
      'Neural Interface Developer',
      'Ethical AI Platform Lead',
    ],
    cities: ['Bengaluru', 'Singapore', 'Tallinn', 'Toronto', 'Seoul'],
    salaryBase: 98000,
    lifestyles: [
      'You split your week between designing product intelligence and mentoring next-gen builders.',
      'Your mornings begin with deep work blocks and your evenings end with rooftop coding jams.',
      'You live in a smart district where your home, commute, and workspace adapt to your schedule.',
      'You travel lightly, work globally, and spend weekends building side projects with real social impact.',
    ],
  },
  Designer: {
    jobs: [
      'Immersive Experience Designer',
      'XR Product Visionary',
      'AI Interface Storyteller',
      'Holographic Brand Director',
      'Creative Systems Strategist',
    ],
    cities: ['Tokyo', 'Amsterdam', 'Dubai', 'Copenhagen', 'Mumbai'],
    salaryBase: 84000,
    lifestyles: [
      'Your studio blends art, code, and psychology to design products people feel emotionally connected to.',
      'You collaborate with futuristic brands by day and curate digital art worlds by night.',
      'Your routine alternates between rapid concept sprints and slow, intentional creative retreats.',
      'You are known for turning complex systems into elegant visual journeys.',
    ],
  },
  Business: {
    jobs: [
      'AI Venture Strategist',
      'Future Markets Consultant',
      'Digital Economy Director',
      'Sustainable Innovation Lead',
      'Global Product Expansion Head',
    ],
    cities: ['London', 'New York', 'Berlin', 'Bengaluru', 'Sydney'],
    salaryBase: 102000,
    lifestyles: [
      'Your calendar is packed with cross-continental strategy calls and rapid decision labs.',
      'You guide teams building AI-first products that influence millions of customers.',
      'You balance boardroom execution with regular reflection sessions focused on long-term impact.',
      'You move across innovation hubs while leading high-trust, high-performance teams.',
    ],
  },
  Student: {
    jobs: [
      'Research Engineer',
      'Applied AI Scholar',
      'Product Innovation Fellow',
      'Cyber-Systems Specialist',
      'Startup Incubator Resident',
    ],
    cities: ['Boston', 'Zurich', 'Bengaluru', 'Melbourne', 'Stockholm'],
    salaryBase: 68000,
    lifestyles: [
      'You keep learning at high speed while contributing to projects that already shape tomorrow.',
      'Your week mixes labs, internships, and communities where bold ideas become prototypes.',
      'You are building a strong network of mentors while exploring your most ambitious career path.',
      'You stay curious, experimental, and deeply focused on mastery.',
    ],
  },
};

function hashText(value) {
  return [...value].reduce((accumulator, char, index) => {
    return accumulator + char.charCodeAt(0) * (index + 17);
  }, 0);
}

function pickFrom(list, seed, multiplier) {
  return list[(seed * multiplier) % list.length];
}

export function generatePrediction(rawName, rawCareer) {
  const name = rawName.trim();
  const career = rawCareer in futuresByCareer ? rawCareer : 'Developer';
  const seed = Math.max(hashText(name.toLowerCase()), 37);
  const source = futuresByCareer[career];

  const salary = source.salaryBase + (seed % 56) * 2300;

  return {
    personName: name,
    futureJob: pickFrom(source.jobs, seed, 3),
    futureCity: pickFrom(source.cities, seed, 5),
    estimatedSalary: `$${salary.toLocaleString()} / year`,
    lifestyle: pickFrom(source.lifestyles, seed, 7),
  };
}
