import { Routes, Route } from "react-router-dom";
import Header from './assets/Component/header';
import Header2 from './assets/Component/Header2';
import ProjectCards from './assets/Component/ProjectCards';
import Finish from './assets/Component/Fotter';
import Vajalpage from './assets/Component/Why';
import Anotherpage from './assets/Component/Thardpage';
import Another1 from './assets/Component/FothPage';
import Another2 from './assets/Component/Lastoption';
import Thelast from './assets/Component/Pagend';

function App() {
  return (
    <>
      <Header />
      <Header2 />

      <Routes>
        {/* This matches the base URL localhost:5173 */}
        <Route path="/" element={<ProjectCards />} />
        
        {/* This matches localhost:5173/dashboard */}
        <Route path="/dashboard" element={<ProjectCards />} />
        
        {/* This matches localhost:5173/incidents */}
        <Route path="/incidents" element={<Vajalpage />} />

        {/* This matches localhost:5173/locations */}
        <Route path="/locations" element={<Anotherpage />} />

        {/* This matches localhost:5173/Activities */}
        <Route path="/activities" element={<Another1 />} />

        {/* This matches localhost:5173/Lastoption */}
        <Route path="/documents" element={<Another2 />} />

         {/* This matches localhost:5173/Lastoption */}
        <Route path="/cypher" element={<Thelast />} />
        
      </Routes>
      <Finish />

    </>
  );
}

export default App;