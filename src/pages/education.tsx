import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCapIcon } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Tech University",
      period: "2016 - 2018",
      description: "Specialized in Software Engineering and Distributed Systems",
      achievements: [
        "Graduated with Distinction",
        "Published research paper on distributed systems",
        "Led student development team"
      ]
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Engineering Institute",
      period: "2012 - 2016",
      description: "Foundation in Computer Science and Software Development",
      achievements: [
        "First Class Honours",
        "Best Final Year Project Award",
        "Technical Club President"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.h1 
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h1>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <GraduationCapIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {edu.institution} • {edu.period}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{edu.description}</p>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: (index * 0.1) + (i * 0.1) }}
                      className="flex items-center space-x-2"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}