// Import the Landing Page component and necessary modules from react-router-dom
import LandPg from "./LandPg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Define the main application component
function App() {
  return (
    // Wrap the application in the Router component to enable routing
    <Router>
      {/* Define routes for different application paths */}
      <Routes>
        {/* Route for the landing page */}
        <Route path="/" element={<LandPg />} />
      </Routes>
    </Router>
  );
}

// Export the App component as the default export
export default App;
