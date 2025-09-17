import React from 'react'
import {BookOpen} from "lucide-react";

const AboutMe = () => {
    return (
        <div className="mt-5 mb-5">
            <div className="flex items-center gap-2 text-[#c5c5c5] mb-5">
                <BookOpen data-testid="book-open-icon" color="#c5c5c5" size={24} />
                <span className="text-xl">About Me</span>
            </div>

            <p className="mt-3 mb-3">
                I&apos;m a Software Engineer with 8+ years of experience building scalable applications across different industries. I specialize in backend development, cloud infrastructure, and data engineering. Beyond full-stack development, I also design and deploy CI/CD pipelines, implement monitoring and observability, and ensure system security.
            </p>
            <p className="mt-3 mb-3">
                My experience includes developing REST and GraphQL APIs in Python and Java, building data pipelines with Airflow, Databricks, and Azure Data Factory, and working across AWS, GCP, and Azure. I’ve also contributed to frontend projects using React and AngularJS, and have a strong background in SQL databases like PostgreSQL and MySQL.
            </p>
        </div>
    )
}
export default AboutMe
