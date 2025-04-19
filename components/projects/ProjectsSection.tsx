"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github } from "lucide-react"
import styles from "./ProjectsSection.module.css"
import ProjectCard from "./ProjectCard"
import AIProjectShowcase from "./AIProjectShowcase"

const projects = [
  {
    id: 1,
    title: "AI-Interno Platform (Private Repo)",
    description: "AI-Interno is an AI-powered virtual internship platform designed to bridge the gap between academia and industry. It offers students personalized learning experiences and practical exposure to real-world tasks, enhancing their skills through AI-driven insights and feedback. The platform aims to streamline the internship process, providing both academic institutions and businesses with efficient tools for talent development and recruitment",
    image: "/AI-interno.jpeg",
    tags: ["MERN", "ReactJS", "AI", "MongoDB","APIs" , "TailwindCSS"],
    repoUrl: "https://github.com/HassanMehmood-star/FYP-AI-interno",
  },
  {
    id: 2,
    title: "Custom Transformer-Based LLM",
    description: "Designed and implemented a custom Transformer-based LLM from scratch for text summarization, leveraging advanced NLP techniques for extractive and abstractive summarization.",
    image: "/custom.webp",
    tags: ["NLP", "Transformers", "HuggingFace", "LLama" , "Python"],
    repoUrl: "https://github.com/HassanMehmood-star/Designing-a-Custom-Transformer-Based-LLM-for-Text-Summarization",
  },
  {
    id: 3,
    title: "I-Cinema-Master(Mern Stack)",
    description: "A full-stack MERN website for movie theaters that allows users to browse for films and filter them by available  categories and ratings, as well as enables administrators to add new films to the list..",
    image: "/Mover.webp",
    tags: ["MERN" , "ReactJS", "MongoDB", "APIs", "TailwindCSS" ,"postman"],
    repoUrl: "https://github.com/HassanMehmood-star/iCinema-master",
  },
  {
    id: 4,
    title: "Hadoop File System (HDFS) on Pokec Profile Analysis",
    description: "The Hadoop File System (HDFS) is a distributed storage system designed to store vast amounts of data across multiple machines in a cluster. It enables reliable, scalable, and high-throughput data storage, making it ideal for big data applications. In profile analysis, HDFS efficiently stores large datasets generated from user profiles, facilitating fast access and analysis. The system is fault-tolerant, ensuring data integrity even in case of hardware failures, and is optimized for read-heavy workloads, which is common in profile analysis scenarios.",
    image: "/Hadoop.webp",
    tags: ["YARN", "HDFS", "Hadoop", "Java" , "MapReduce"],
    repoUrl: "https://github.com/HassanMehmood-star/Hadoop-File-System",
  },
  {
    id: 5,
    title: "CodeTransformer",
    description: "A tool that seamlessly translates between pseudocode and C++ code using a custom-trained Seq2Seq transformer model, helping bridge the gap between algorithm design and implementation.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    tags: ["GANs", "Style Transfer", "Flask", "TensorFlow"],
    repoUrl: "https://github.com/shaiiikh/CodeTransformer",
  },
  {
    id: 6,
    title: "Nazam Generator using GRU",
    description: "A deep learning model using GRU (Gated Recurrent Unit) to generate Urdu poetry (Nazam) in Roman script. Features include custom text generation, a web interface for interaction, and comprehensive poetry generation history.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop",
    tags: ["NLP", "BERT", "React", "Python"],
    repoUrl: "https://github.com/shaiiikh/Nazam-Generator-using-GRU",
  },
]

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const [showcaseProject, setShowcaseProject] = useState<number | null>(null)

  return (
    <section id="projects" className={`${styles.projects} section`}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        {showcaseProject !== null && (
          <AIProjectShowcase
            project={projects.find((p) => p.id === showcaseProject)!}
            onClose={() => setShowcaseProject(null)}
          />
        )}

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isActive={activeProject === project.id}
              onHover={() => setActiveProject(project.id)}
              onLeave={() => setActiveProject(null)}
              onShowcase={() => setShowcaseProject(project.id)}
            />
          ))}
        </div>

        <motion.div
          className={styles.githubStats}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>GitHub Contributions</h3>
          <div className={styles.statsContainer}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>20+</span>
              <span className={styles.statLabel}>Repositories</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>100+</span>
              <span className={styles.statLabel}>Contributions</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Stars</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Forks</span>
            </div>
          </div>
          <a href="https://github.com/shaiiikh" target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
            <Github size={18} />
            <span>View GitHub Profile</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

