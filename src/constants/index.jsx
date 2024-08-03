import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

import game1 from "../assets/images/game1.jpg"
import game2 from "../assets/images/game2.jpg"
import game3 from "../assets/images/game3.jpg"
import game4 from "../assets/images/game4.jpg"
import game5 from "../assets/images/game5.jpg"
import game6 from "../assets/images/game6.jpg"

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const games = [
  {
    image: game1,
    name: "Echoes of Eternity: The Lost Kingdom",
    description:
      "In a world where memories shape reality, you play as a guardian tasked with restoring the lost kingdom of Eternia. Journey through time, uncover ancient secrets, and battle formidable foes in this epic RPG. Your choices will determine the fate of the realm.",
  },
  {
    image: game5,
    name: "Starlight Expedition: Galactic Frontier",
    description:
      "Embark on a thrilling space adventure in Starlight Expedition. As the captain of an interstellar crew, explore uncharted planets, engage in intense space battles, and forge alliances with alien civilizations. The galaxy's future is in your hands.",
  },
  {
    image:  game6,
    name: "Mystic Forge: Legends of the Arcane",
    description:
      "In a land where magic and craftsmanship intertwine, you are an apprentice of the Mystic Forge. Craft powerful artifacts, unravel ancient spells, and defend the kingdom from dark forces. Your journey to becoming a master arcane smith begins now.",
  },
  {
    image: game4,
    name: "Shadowstrike: The Assassin's Creed",
    description:
      "Step into the shadows as a master assassin in Shadowstrike. Navigate a sprawling city filled with secrets, intrigue, and danger. Use stealth, cunning, and lethal skills to eliminate targets and uncover a conspiracy that threatens the realm.",
  },
  {
    image:  game2,
    name: "Verdant Valley: Farming Chronicles",
    description:
      "Escape to the peaceful Verdant Valley, where you can build and manage your own farm. Grow crops, raise animals, and engage with a vibrant community of characters. Discover hidden treasures and uncover the valley's rich history in this relaxing simulation game.",
  },
  {
    image: game3,
    name: "Chrono Sentinel: Guardians of Time",
    description:
      "As a Chrono Sentinel, your mission is to protect the timeline from chaotic disruptions. Travel through different eras, solve intricate puzzles, and battle time-warped enemies. Balance the past, present, and future to ensure the continuity of history.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
