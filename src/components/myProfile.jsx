import React from "react";
import { Container } from "react-bootstrap";
import ProfilePage from "./ProfilePage";
import ExperienceSection from "./ExperienxeSection";
import AnalyticsComponent from "./AnalyticsComponent";
import EducationComponent from "./EducationalComponent";
import Activity from "./ActivityComponent";
import AboutComponent from "./AboutComponent";
import Languages from "./LanguageComponent";
import ResourcesComponent from "./ResourcesComponent";

import SkillComponent from "./SkillComponent";

//import UserProfile from "./components/UserProfile";

const MyProfile = () => {
  return (
    <Container>
      <ProfilePage />
      <AnalyticsComponent />
      <ResourcesComponent />
      <Activity />
      <ExperienceSection />
      <EducationComponent />
      <SkillComponent />
      <AboutComponent />
      <Languages />
    </Container>
  );
};

export default MyProfile;
