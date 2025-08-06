import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./pages/Home.js";


export function App() {
  return (
    <Router>
      <div className="">
             
        <main className="flex-1">
          <Home />
          
        </main>
      </div>
    </Router>
  );
}