import "./App.css";
import { Container } from "react-bootstrap";
import TopNavBar from "./components/TopNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePage from "./components/ProfilePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="mainBGColor">
        <Container>
          <TopNavBar />

        </Container>
        <Routes>
          {/* <Route element={<SearchResults />} path="/search" /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
