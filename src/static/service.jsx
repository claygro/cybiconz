import { Globe, Smartphone, ShoppingBag, Layers, Video } from "lucide-react";

const allServices = [
  {
    title: "Website Development",
    desc: "Custom-built, high-performance websites ranging from corporate landing pages to complex web applications tailored for scalability.",
    icon: <Globe size={32} />,
    link: "/services/web-dev",
  },
  {
    title: "App Development",
    desc: "Native and cross-platform mobile applications designed for seamless user experiences on both iOS and Android devices.",
    icon: <Smartphone size={32} />,
    link: "/services/app-dev",
  },
  {
    title: "E-commerce Solutions",
    desc: "End-to-end online store setups featuring secure payment gateways, inventory management, and optimized checkout flows.",
    icon: <ShoppingBag size={32} />,
    link: "/services/ecommerce",
  },
  {
    title: "UI/UX Design",
    desc: "User-centric design focusing on intuitive interfaces and engaging experiences that convert visitors into loyal customers.",
    icon: <Layers size={32} />,
    link: "/services/ui-ux",
  },
  {
    title: "Video Editing & Digital Media",
    desc: "Professional video production and digital content creation to help your brand tell its story effectively through visual media.",
    icon: <Video size={32} />,
    link: "/services/digital-media",
  },
];
export default allServices;
