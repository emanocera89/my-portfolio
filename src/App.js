import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import Resume from './pages/Resume/Resume';

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<Home />} />
        <Route exact path="/p/" element={<Home />} />
        <Route exact path="/p/:projectId" element={<ProjectDetail />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/cv" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
