import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CodeIcon, HeartIcon, LightbulbIcon } from "lucide-react";

export function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.h1 
        className="text-4xl font-bold"
        {...fadeInUp}
      >
        About Me
      </motion.h1>

      <motion.div 
        className="prose dark:prose-invert max-w-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-lg text-muted-foreground">
          I'm a full-stack web developer with a passion for creating elegant solutions to complex problems. 
          With expertise in modern web technologies and a keen eye for design, I build applications that are 
          not just functional, but also intuitive and enjoyable to use.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {[
          {
            icon: <CodeIcon className="h-6 w-6" />,
            title: "Technical Excellence",
            description: "Committed to writing clean, maintainable code and staying current with latest technologies"
          },
          {
            icon: <HeartIcon className="h-6 w-6" />,
            title: "Passionate Developer",
            description: "Deeply passionate about creating impactful web experiences and solving real-world problems"
          },
          {
            icon: <LightbulbIcon className="h-6 w-6" />,
            title: "Creative Problem Solver",
            description: "Approaching challenges with creativity and innovative thinking to find optimal solutions"
          }
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <Card>
              <CardContent className="pt-6">
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}