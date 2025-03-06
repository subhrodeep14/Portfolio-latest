import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Home } from '@/pages/home';
import { About } from '@/pages/about';
import { Skills } from '@/pages/skills';
import { Projects } from '@/pages/projects';
import { Experience } from '@/pages/experience';
import { Education } from '@/pages/education';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <Router>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <main className="container mx-auto px-4 pt-24 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;