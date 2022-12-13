import "./App.css";
import { Container } from "react-bootstrap";
import TopNavBar from "./components/TopNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePage from "./components/ProfilePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResults from "./components/SearchResuts";
import UserProfile from "./components/UserProfile";
import ExperienceSection from "./components/ExperienceSection";
function App() {
  return (
    <BrowserRouter>
      <div className="mainBGColor">
        <Container>
          <TopNavBar />
          <ProfilePage />
          {/* <UserProfile /> */}
          <ExperienceSection />
        </Container>
        <Routes>
          {/* <Route element={<SearchResults />} path="/search" /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
