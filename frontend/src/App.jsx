// src/App.jsx
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'; // Import our new page
import ContactPage from './pages/ContactPage'; // Import ContactPage

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;