import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

export function Home() {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center">
      <div className="text-center space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-6xl font-bold"
        >
          Hi, I'm Subhrodeep Acharya
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          A passionate Full Stack Developer crafting beautiful and functional web experiences
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <Button variant="outline" size="lg">
            <GithubIcon className="mr-2 h-5 w-5" />
            GitHub
          </Button>
          <Button variant="outline" size="lg">
            <LinkedinIcon className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
          <Button variant="outline" size="lg">
            <MailIcon className="mr-2 h-5 w-5" />
            Contact
          </Button>
        </motion.div>
      </div>
    </div>
  );
}