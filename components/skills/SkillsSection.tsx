"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import styles from "./SkillsSection.module.css"
import SkillCard from "./SkillCard"
import { Brain, Server, Cpu, Network  } from "lucide-react"
import SkillsGraph from "./SkillsGraph"
import { BarChart, Database } from 'lucide-react';
import { Code } from 'lucide-react';

const skillCategories = [
  {
    id: "programming",
    title: "General Programming",
    icon: <Code size={24} />,
    skills: [
      { name: "Python", level: 85 },
      { name: "C++", level: 90 },
      { name: "Javascript", level: 85 },
      
      // { name: "Bash", level: 75 },
      { name: "Git/GitBash", level: 70 },
    ],
  },
  {
    id: "ml",
    title: "General ML & AI",
    icon: <Brain size={24} />,
    skills: [
      { name: "Llama", level: 70 },
      { name: "Python", level: 85 },
      { name: "Transformers", level: 80 },
      { name: "Natural Language Processing (NLP)", level: 80 }
  
    ],
  },
  {
    id: "mlops",
    title: "Cloud Computing",
    icon: <Server size={24} />,
    skills: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 80 },
      { name: "AWS", level: 85 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "Google Cloud Platform(GCP)", level: 75 },
      { name: "Hadoop File System", level: 75 },
      { name: "Cloud Architecture", level: 75 },
    ],
  },
  {
    id: "genai",
    title: "Data Science & Machine Learning",
    icon :<BarChart size={24} /> ,
    skills: [
      { name: "Data Analysis", level: 90 },
      { name: "Data Visualization", level: 85 },
      { name: "Model Training and Evaluation", level: 80 },
      { name: "Pandas", level: 75 },
      { name: "Numpy", level: 85 },
      { name: "Scikit-Learn", level: 95 },
      { name: "TensorFlow", level: 95 },
      { name: "PyTorch", level: 90 },
      { name: "Keras", level: 85 },
      { name: "Matplotlib", level: 80 },
      { name: "Seaborn", level: 75 },
      { name: "OpenCV", level: 70 },
      {name: "Power Bi", level: 80},
    ],
  },
  {
    id: "data",
    title: "DataBase",
    icon: <Database size={24} />,
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "Sql", level: 80 },
      { name: "MySql", level: 75 },
      { name: "Firebase", level: 85 },
      { name: "Normalization", level: 80 },
     
    ],
  },
  {
    id: "research",
    title: "Web Development",
    icon :  <Code size={24} />,

    skills: [
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "ReactJs", level: 85 },
      { name: "NextJs", level: 90 },
      { name: "WebScraping", level: 80 },
      { name: "FAST API", level: 85 },
    ],
  },
]

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("programming")

  return (
    <section id="skills" className={`${styles.skills} section`}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          className={styles.categories}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skillCategories.map((category) => (
            <button
              key={category.id}
              className={`${styles.categoryButton} ${activeCategory === category.id ? styles.active : ""}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className={styles.categoryIcon}>{category.icon}</span>
              <span className={styles.categoryTitle}>{category.title}</span>
            </button>
          ))}
        </motion.div>

        <div className={styles.skillsContainer}>
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              className={`${styles.skillsGrid} ${activeCategory === category.id ? styles.active : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: activeCategory === category.id ? 1 : 0,
                y: activeCategory === category.id ? 0 : 20,
                display: activeCategory === category.id ? "grid" : "none",
              }}
              transition={{ duration: 0.5 }}
            >
              {category.skills.map((skill, index) => (
                <SkillCard key={skill.name} name={skill.name} level={skill.level} delay={index * 0.1} />
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.skillsVisual}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <SkillsGraph activeCategory={activeCategory} />
        </motion.div>
      </div>
    </section>
  )
}

