export type Category = "All" | "Simulation" | "Education" | "Tool" | "Game";

export interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
  category: Exclude<Category, "All">;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Number Learn Studio",
    description:
      "Master Pi, Euler's number, and more with proven mnemonic techniques. An interactive studio for serious memorisation.",
    url: "https://number-learn.xyz/",
    category: "Education",
    tags: ["Mnemonics", "Pi", "Math Constants", "Memory"],
  },
  {
    id: 2,
    title: "Elements",
    description:
      "Explore all 118 elements with interactive 3D atom visualizations, detailed properties, and a beautifully designed periodic table.",
    url: "https://elements-flax.vercel.app/",
    category: "Education",
    tags: ["Chemistry", "3D", "Periodic Table", "Science"],
  },
  {
    id: 3,
    title: "Three-Body Problem Simulator",
    description:
      "Interactive 2D/3D gravitational simulation of the three-body problem. Explore chaotic orbits and stable configurations in real time.",
    url: "https://three-body-problem-ivory.vercel.app/",
    category: "Simulation",
    tags: ["Physics", "Gravity", "3D", "Chaos Theory"],
  },
  {
    id: 4,
    title: "Pitch Studio",
    description:
      "Train your vocal pitch with real-time detection, waveform analysis, spectrum visualization, and MIDI practice mode.",
    url: "https://pitch-tune-studio.vercel.app/",
    category: "Tool",
    tags: ["Audio", "Pitch Detection", "MIDI", "Music"],
  },
  {
    id: 5,
    title: "Typr",
    description:
      "Challenge your friends to a real-time type race. Compete head-to-head, practice solo, or race against bots.",
    url: "https://typr-beta.vercel.app/",
    category: "Game",
    tags: ["Multiplayer", "Typing", "Racing", "Real-time"],
  },
  {
    id: 6,
    title: "Game of Life",
    description:
      "Conway's cellular automaton brought to life. Paint cells, choose presets, and watch emergent complexity unfold on an infinite grid.",
    url: "https://game-of-life-alpha-liart.vercel.app/",
    category: "Simulation",
    tags: ["Cellular Automaton", "Conway", "Interactive", "Math"],
  },
  {
    id: 7,
    title: "Sequence Memory",
    description:
      "Test and train your working memory with increasingly complex sequences. How far can you go?",
    url: "https://sequence-memory.vercel.app/",
    category: "Game",
    tags: ["Memory", "Brain Training", "Puzzle", "Cognitive"],
  },
  {
    id: 8,
    title: "Rain Simulation",
    description:
      "Interactive physics simulation of rain hitting a liquid surface with adjustable parameters in 2D and 3D views.",
    url: "https://rain-sim-nu.vercel.app/",
    category: "Simulation",
    tags: ["Physics", "Water", "Particles", "3D"],
  },
  {
    id: 9,
    title: "Meteor Impact Simulator",
    description:
      "Interactive 2D & 3D meteor impact simulation with real physics. Adjust parameters and watch craters form.",
    url: "https://meteor-sim.vercel.app/",
    category: "Simulation",
    tags: ["Physics", "Space", "3D", "Impact"],
  },
  {
    id: 10,
    title: "Emoji Explorer",
    description:
      "Search, browse, and copy emojis with ease. A clean, fast utility for finding the perfect emoji.",
    url: "https://emoji-explorer-gray.vercel.app/",
    category: "Tool",
    tags: ["Emoji", "Search", "Utility", "Clipboard"],
  },
];

export const categories: Category[] = [
  "All",
  "Simulation",
  "Education",
  "Tool",
  "Game",
];
