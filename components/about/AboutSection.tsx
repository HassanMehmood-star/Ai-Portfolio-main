"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Briefcase, Code, Brain } from "lucide-react"
import styles from "./AboutSection.module.css"
import AIBrainAnimation from "./AIBrainAnimation"

export default function AboutSection() {
  return (
    <section id="about" className={`${styles.about} section`}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className={styles.content}>
          <motion.div
            className={styles.bio}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
<h3 className={styles.bioTitle}>My Journey in Cloud Computing, AI/ML MERN-Stack Development</h3>
<p className={styles.bioText}>
  My journey in the field of Cloud Computing, AI, and Full-Stack Development has been both exciting and rewarding. As a Computer Science student at FAST National University, I have developed proficiency in technologies such as <strong>AWS</strong>, <strong>Google Cloud Platform (GCP)</strong>, <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js), and AI/ML tools. Throughout my academic projects, I have gained hands-on experience with <strong>AI model development</strong>, <strong>cloud architecture</strong>, and <strong>full-stack development</strong>, which has equipped me with the ability to build scalable, data-driven applications.
</p>
<p className={styles.bioText}>
  For my final year project, I am focused on developing the <strong>AI-Interno Platform</strong> that bridges the gap between industry and academia. This project aims to utilize the <strong>MERN stack</strong> to build a platform that integrates <strong>AI/ML models</strong>, helping students and industry professionals collaborate through remote internships, AI-driven recommendations, and real-time feedback.
</p>
<p className={styles.bioText}>
  In addition to my academic work, I have served as a <strong>Teaching Assistant</strong> in multiple courses, including <strong>Programming Fundamentals</strong>, <strong>Database Systems</strong>, and <strong>Object-Oriented Programming</strong>. These experiences have honed my communication skills and deepened my understanding of algorithms, system design, and problem-solving. I enjoy mentoring fellow students, assisting them with assignments, quizzes, and exam preparation, and contributing to their learning journey.
</p>
<p className={styles.bioText}>
  As I progress in my career, I am eager to apply my knowledge in <strong>cloud computing</strong>, <strong>AI/ML</strong>, and <strong>MERN-stack development</strong> to solve real-world challenges. If you’re looking for a dedicated developer passionate about innovation and learning, I would love to connect and explore new opportunities to make a meaningful impact.
</p>
<p className={styles.bioText}>
  Outside of coding, I enjoy exploring emerging cloud technologies, mentoring future developers, and continuously learning to stay ahead of the curve in the ever-evolving tech landscape.
</p>




            {/* <div className={styles.aiQuote}>
              <Brain className={styles.quoteIcon} />
              <blockquote>
                "The development of full artificial intelligence could spell the end of the human race... or it could be
                the best thing that ever happened to us."
              </blockquote>
              <cite>— Stephen Hawking</cite>
            </div> */}
          </motion.div>

          <motion.div
            className={styles.timeline}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.timelineTitle}>Education & Certifications</h3>

            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}>
                <GraduationCap size={20} />
              </div>
              <div className={styles.timelineContent}>
                <h4>BS Computer Science</h4>
                <p>FAST NUCES</p>
                <span className={styles.timelinePeriod}>2021 - 2025</span>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}>
                <Award size={20} />
              </div>
              <div className={styles.timelineContent}>
                <h4>Artifical Intelligence</h4>
                <p>HackerRank</p>
                <span className={styles.timelinePeriod}>2022</span>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}>
                <Code size={20} />
              </div>
              <div className={styles.timelineContent}>
                <h4>Data Science</h4>
                <p>CodSoft</p>
                <span className={styles.timelinePeriod}>2023</span>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}>
                <Briefcase size={20} />
              </div>
              <div className={styles.timelineContent}>
                <h4>Machine Learning</h4>
                <p>Prodigy InfoTech</p>
                <span className={styles.timelinePeriod}>2024</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.aiVisualization}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AIBrainAnimation />
          <div className={styles.funFact}>
            <h3>Did you know?</h3>
            <p>
              GPT-4 has approximately 1.76 trillion parameters, making it one of the largest language models ever
              created!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

