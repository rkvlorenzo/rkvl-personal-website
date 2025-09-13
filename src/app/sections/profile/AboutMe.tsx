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
    )
}
export default AboutMe
