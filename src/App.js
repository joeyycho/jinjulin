import './App.css';
import LandingPage from './Page/LandingPage';
import { Route, Routes } from "react-router-dom"
import ListPage from './Page/ListPage';
import AnnouncePage from './Page/AnnouncePage';
import AnnouncementDetailPage from './Page/AnnouncementDetailPage';
import DongPage from './Page/DongPage';
import PostPage from './Page/PostPage';
import PostWritePage from './Page/PostWritePage';
import PostDetail from './Page/PostDetail';


function App() {
  return (
  <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/notice" element={<AnnouncePage />} />
        <Route path="/notice/:id" element={<AnnouncementDetailPage />} />
        <Route path="/map" element={<DongPage/>} />
        <Route path="/post" element={<PostPage/>} />
        <Route path="/post/write" element={<PostWritePage/>} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
  </>
  );
}

export default App;
