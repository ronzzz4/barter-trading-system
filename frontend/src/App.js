import Landing from './Pages/Landing/Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UploadProducts from './Pages/UploadProducts/UploadProducts'


function App() {
  return (
    <Router>
    <Routes>
      {/* Define your routes here */}
      <Route path="/" element={<Landing />} />     
      <Route path="/upload" element={<UploadProducts />} /> 
    </Routes>
  </Router>
  );
}

export default App;
