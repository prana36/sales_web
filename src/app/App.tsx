/// <reference types="vite/client" />
import Header from "./components/Header";
import Hero from "./components/Hero";
import SalesAudit from "./components/SalesAudit";
import Clients from "./components/Clients";
import TempleOfSales from "./components/TempleOfSales";
import GrowthConsulting from "./components/GrowthConsulting";
import CompanyStats from "./components/CompanyStats";
import Solutions from "./components/Solutions";
import HowWeWork from "./components/HowWeWork";
import CaseStudies from "./components/CaseStudies";
import Visionary from "./components/Visionary";
import Team from "./components/Team";
import Pricing from "./components/Pricing";
import Careers from "./components/Careers";
import Testimonials from "./components/Testimonials";
import DynamicResources from "./components/DynamicResources";
import MeasurableImpact from "./components/MeasurableImpact";
import SalesHelpline from "./components/SalesHelpline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "sonner";

export default function App() {
  return (
    <div className="size-full bg-white text-gray-900 selection:bg-yellow-500/30 selection:text-blue-900">
      <Header />
      <Hero />
      <SalesAudit />
      <Clients />
      <TempleOfSales />
      <GrowthConsulting />
      <CompanyStats />
      <Solutions />
      <HowWeWork />
      <CaseStudies />
      <Visionary />
      <Team />
      <Pricing />
      <Careers />
      <Testimonials />
      <DynamicResources />
      <MeasurableImpact />
      <SalesHelpline />
      <Contact />
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
