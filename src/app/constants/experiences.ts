const experiences = [
    {
        duration: 'February 2025 - Latest',
        position: 'Software Engineer',
        company: 'Bitdefender',
        summary: [
            'Maintain and enhance a Cloud Security Posture Management (CSPM) service scanning multi-cloud environments (AWS, GCP, Azure, Huawei, AliCloud).',
            'Optimized ECS multi-region deployments by automating container image replication, reducing cross-region data transfer costs and ensuring local availability across AP, EU, and US regions.',
            'Upgrade Python runtime from 3.8 to 3.12, improving performance and long-term maintainability.',
            'Enhanced compliance report generation (SOC, CIS) by creating a reusable base template',
            'Created dashboards in Tesseract by analyzing runtime metrics, improving observability and system monitoring.',
            'Monitor and maintain system health using Datadog (metrics, dashboards, alerts) and Sentry (error tracking), ensuring rapid detection and resolution of issues.'
        ],
        stacks: ['Python', 'AWS', 'PotsgreSQL', 'Datadog', 'Sentry']
    },
    {
        duration: 'June 2022 - January 2025',
        position: 'Senior Software Engineer',
        company: 'Spins LLC.',
        summary: [
            'Maintained and extended a large-scale data ingestion pipeline processing brick-and-mortar retail data from stores across the U.S. This pipeline served as the company’s main source of truth.',
            'Collaborated with the Data Science team to implement models for sales estimation and invalid data detection.',
            'Designed and implemented a new data publishing service to replace a legacy pipeline, improving reliability, scalability, and reducing processing time from 8-10 hours to under 1 hour.',
            'Led the development of APIs for Datasembly Data Integration Project, enabling internal teams to use e-commerce scraped data from a third-party provider.',
            'Designed and implemented an event-driven data pipeline, from scraping Amazon products to transforming it into a usable format and storing it as time-series data.',
            'Built a database migration pipeline using Alembic, automating schema versioning and reducing deployment errors during production releases.',
            'Built CI/CD pipelines for automated deployments and migrated workflows from ConcourseCI to CircleCI.',
            'Maintained and managed cloud infrastructure using Terraform.',
            'Contributed to a revamp of an internal legacy web tool into a modern web application.',
        ],
        stacks: [
            "Python", "React",
            "Airflow", "BigQuery", "Pub/Sub", "Databricks",
            "Alembic", "SQLAlchemy", "Pandas", 'GraphQL',
            "Terraform", "CircleCI", "ConcourseCI",
            "PostgreSQL",
            "GCP", "AWS", "Azure"
        ]
    },
    {
        duration: 'August 2019 – June 2022',
        position: 'Software Engineer II',
        company: 'EScience Corporation',
        summary: [
            'Led a small retail engineering team supporting Android-based POS and Web Admin tools.',
            'Maintained and enhanced an Android POS application integrated with a Web Admin platform.',
            'Optimized the checkout process, reducing transaction time from ~20 minutes to just a few seconds.',
            'Improved report generation performance by optimizing database queries, reducing report generation time to under 1 minute.',
            'Developed and integrated APIs for Web and Mobile application.',
            'Built CI/CD pipelines using Bitbucket Pipelines to automate deployments.',
            'Maintained and managed cloud infrastructure using Terraform.',
            'Contributed to the development of a voting assistant application used in the 2022 Philippines Election.'
        ],
        stacks: [
            'Python', 'Java', 'Android SDK',
            'Spring Boot', 'AngularJS',
            'PostgreSQL',
            'Terraform', 'Bitbucket Pipelines',
            'AWS'
        ]
    },
    {
        duration: 'June 2018 - August 2019',
        position: 'Junior Java Programmer',
        company: '2Success Incorporation',
        summary: [
            'Integrated third-party payment gateway APIs into a online gaming platform.',
            'Participated in the full software development lifecycle, from requirements gathering to deployment.',
            'Investigated and resolved production issues while implementing system enhancements to improve stability and performance.'
        ],
        stacks: [
            'Java', 'Javascript',
            'Struts', 'MyBatis', 'JQuery',
            'Oracle', 'Jenkins'
        ]
    },
]

export default experiences