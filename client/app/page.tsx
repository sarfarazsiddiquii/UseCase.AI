import LandingPageHeader from "./components/landing-page-header";
import Hero from "./components/hero";
import About from "./components/about";


export default function HomePage() {
  return (
    <div suppressHydrationWarning>
      <LandingPageHeader />
      <Hero />

      <About />

    </div>
  );
}
