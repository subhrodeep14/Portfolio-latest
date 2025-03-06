import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BriefcaseIcon } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovators Inc.",
      period: "2022 - Present",
      description: "Led development of enterprise-scale web applications, mentored junior developers, and implemented CI/CD pipelines.",
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Implemented microservices architecture",
        "Led a team of 5 developers"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects using React, Node.js, and AWS.",
      achievements: [
        "Delivered 10+ successful client projects",
        "Introduced automated testing, achieving 90% coverage",
        "Optimized database queries, improving performance by 30%"
      ]
    },
    {
      title: "Frontend Developer",
      company: "WebCraft Studios",
      period: "2018 - 2020",
      description: "Created responsive web applications and implemented modern UI/UX designs.",
      achievements: [
        "Built reusable component library",
        "Improved site accessibility to WCAG standards",
        "Reduced bundle size by 45%"
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
        Experience
      </motion.h1>

      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <BriefcaseIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{experience.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {experience.company} • {experience.period}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{experience.description}</p>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, i) => (
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