/// <reference types="vite/client" />
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { Toaster } from "sonner";
import Careers from "./components/Careers";
import CaseStudies from "./components/CaseStudies";
import Clients from "./components/Clients";
import CompanyStats from "./components/CompanyStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GrowthConsulting from "./components/GrowthConsulting";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowWeWork from "./components/HowWeWork";
import MeasurableImpact from "./components/MeasurableImpact";
import Pricing from "./components/Pricing";
import SalesAudit from "./components/SalesAudit";
import SalesHelpline from "./components/SalesHelpline";
import Solutions from "./components/Solutions";
import Team from "./components/Team";
import TempleOfSales from "./components/TempleOfSales";
import Testimonials from "./components/Testimonials";
import Visionary from "./components/Visionary";
import WhatsAppChatButton from "./components/WhatsAppChatButton";
import GapAnalysisPage from "./pages/gap-analysis";
import {
  BlogDetailPage,
  BlogsPage,
  CourseDetailPage,
  CoursesPage,
  DownloadDetailPage,
  DownloadsPage,
} from "./pages/ResourcePages";
import SalesConsultantPage from "./pages/SalesConsultantPage";
import CaseStudyDetailPage from "./pages/CaseStudyDetailPage";

function HomePage() {
  return (
    <>
      <Hero />
      <TempleOfSales />
      <SalesAudit />
      <Clients />
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
      {/* <DynamicResources /> */}
      <MeasurableImpact />
      <SalesHelpline />
      <Contact />
    </>
  );
}

function ScrollToLocation() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  return null;
}

function SiteRoutes() {
  return (
    <>
      <ScrollToLocation />
      <Header />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<SalesConsultantPage />} path="/sales-consultant-india" />
        <Route element={<CaseStudyDetailPage />} path="/case-studies/:slug" />
        <Route element={<CoursesPage />} path="/courses" />
        <Route element={<CourseDetailPage />} path="/courses/:slug" />
        <Route element={<BlogsPage />} path="/blogs" />
        <Route element={<BlogDetailPage />} path="/blogs/:slug" />
        <Route element={<DownloadsPage />} path="/downloads" />
        <Route element={<DownloadDetailPage />} path="/downloads/:slug" />
        <Route element={<HomePage />} path="*" />
      </Routes>
      <Footer />
      <WhatsAppChatButton />
      <Toaster position="top-center" richColors />
    </>
  );
}

export default function App() {
  return (
    <div className="size-full bg-white text-gray-900 selection:bg-yellow-500/30 selection:text-blue-900">
      <BrowserRouter>
        <SiteRoutes />
      </BrowserRouter>
    </div>
  );
}
