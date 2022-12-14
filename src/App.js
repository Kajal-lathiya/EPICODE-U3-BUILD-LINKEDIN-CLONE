import "./App.css";
import { Container } from "react-bootstrap";
import TopNavBar from "./components/TopNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePage from "./components/ProfilePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import UserProfile from "./components/UserProfile";
import ExperienceSection from "./components/ExperienxeSection";
import AnalyticsComponent from "./components/AnalyticsComponent";
import EducationSection from "./components/EducationalComponent";
import Activity from "./components/ActivityComponent";
import AboutComponent from "./components/AboutComponent";
import Languages from "./components/LanguageComponent";
import ResourcesComponent from "./components/ResourcesComponent";
import Footer from "./components/FooterComponent";
import SkillComponent from "./components/SkillComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="mainBGColor">
        <Container>
          <TopNavBar />

          <ProfilePage />
          {/* <UserProfile /> */}
          <AnalyticsComponent />
          <ResourcesComponent />
          <Activity />
          <ExperienceSection />
          <EducationSection />
          <SkillComponent />
          <AboutComponent />
          <Languages />
          <Footer />
        </Container>
        <Routes>
          {/* <Route element={<SearchResults />} path="/search" /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

