import { motion } from "motion/react"
import React from 'react'
import TechStack from "@/app/sections/tech_stack";

const Profile = () => {
    return (
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{
                duration: 0.35,
                ease: [0.25, 0.1, 0.25, 1],
            }}
        >
            <div className="mt-5 mb-5">
                <p className="mt-3 mb-3">
                    I&apos;m a Software Engineer with over 8 years of experience building backend systems, cloud-native services, and data engineering pipelines. I specialize in designing scalable APIs, automating infrastructure with Terraform, and maintaining CI/CD workflows using tools like CircleCI, Jenkins, and ConcourseCI.
                </p>
                <p className="mt-3 mb-3">
                    My work spans developing RESTful and GraphQL APIs using Python and Java, building event-driven microservices, and creating efficient data pipelines using tools like Airflow, Databricks, and Snowflake. I’ve worked extensively across AWS, GCP, and Azure environments, handling everything from deployments to monitoring.
                </p>
                <p className="mt-3 mb-3">
                    I&apos;ve also contributed to frontend development with React, AngularJS, and jQuery when needed, and have a strong foundation in database design, performance optimization, and schema migrations using PostgreSQL, MySQL, and Oracle SQL.
                </p>
                <p className="mt-3 mb-3">
                    I follow best practices like test-driven development and pair programming, and I care deeply about system observability, performance, and maintainability.
                </p>
            </div>

            <div className="inline-flex items-center justify-center w-full">
                <hr className="h-px w-full my-5 bg-gray-600 border-0" />
            </div>

            <TechStack/>
        </motion.div>
    )
}
export default Profile
