import './App.css';
import LandingPage from './Page/LandingPage';
import { Route, Routes } from "react-router-dom"
import ListPage from './Page/ListPage';
import AnnouncePage from './Page/AnnouncePage';
import AnnouncementDetailPage from './Page/AnnouncementDetailPage';
import DongPage from './Page/DongPage';


function App() {
  return (
  <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/notice" element={<AnnouncePage />} />
        <Route path="/notice/:id" element={<AnnouncementDetailPage />} />
        <Route path="/map" element={<DongPage/>} />
      </Routes>
  </>
  );
}

export default App;
