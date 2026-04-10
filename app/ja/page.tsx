import NavJa from "../components/ja/NavJa";
import HeroJa from "../components/ja/HeroJa";
import ProblemJa from "../components/ja/ProblemJa";
import ServicesJa from "../components/ja/ServicesJa";
import AboutJa from "../components/ja/AboutJa";
import HowItWorksJa from "../components/ja/HowItWorksJa";
import ContactJa from "../components/ja/ContactJa";
import FooterJa from "../components/ja/FooterJa";

export default function HomeJa() {
  return (
    <>
      <NavJa />
      <main>
        <HeroJa />
        <ProblemJa />
        <ServicesJa />
        <AboutJa />
        <HowItWorksJa />
        <ContactJa />
      </main>
      <FooterJa />
    </>
  );
}
