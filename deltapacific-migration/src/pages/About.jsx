import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import AboutValues from "../components/about/AboutValues";
import AboutServiceArea from "../components/about/AboutServiceArea";
import AboutCredentials from "../components/about/AboutCredentials";
import AboutCTA from "../components/about/AboutCTA";

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutServiceArea />
      <AboutCredentials />
      <AboutCTA />
    </>
  );
}