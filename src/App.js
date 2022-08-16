import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Containers/Landing';
import Dashboard from './Containers/Projects/Dashboard';

// styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import Animation style
import 'animate.css';
// Import custom styles
import './assets/css/bootstrap.min.css';
import './assets/css/plugins.css';
import './assets/css/style.css';
import './assets/css/custom-style-1.css';
import './assets/css/coloring.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/projects">
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
