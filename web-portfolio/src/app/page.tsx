import styles from "./page.module.css";
import { AwardsSection } from "./components/AwardsSection";
import { EducationSection } from "./components/EducationSection";
import { HeroSection } from "./components/HeroSection";
import { HobbiesSection } from "./components/HobbiesSection";
import { SkillsSection } from "./components/SkillsSection";
import { SocialMediaSection } from "./components/SocialMediaSection";
import { StrengthSection } from "./components/StrengthSection";
import { WorkExperienceSection } from "./components/WorkExperienceSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <WorkExperienceSection />
      <SkillsSection />
      <StrengthSection />
      <HobbiesSection />
      <AwardsSection />
      <EducationSection />
      <SocialMediaSection />
    </main>
  );
}
