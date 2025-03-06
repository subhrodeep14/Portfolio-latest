import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/experience", label: "Experience" },
    { to: "/education", label: "Education" },
  ];

  return (
    <motion.nav 
      className="fixed top-0 w-full bg-background/50 backdrop-blur-sm z-50 border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 xl:px-20 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-extrabold"
        >
          Subhro <span className="text-green-600">.</span>
        </motion.div>
        
        <div className="flex  items-center gap-6">
          {links.map((link, index) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-md font-medium transition-colors  hover:text-green-500 ${
                    isActive ? "text-green-500" : "text-muted-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </motion.div>
          ))}
          
        </div>
        <ThemeToggle />
      </div>
    </motion.nav>
  );
}