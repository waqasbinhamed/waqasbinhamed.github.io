---
layout: single
title: "Resume"
permalink: /resume/
author_profile: true
---

## Experience

**Data Engineer** <span style="float:right">June 2024 – Present</span>  
The Home Depot, Toronto, ON

- Redesigned 150+ SAP-to-GCP pipeline triggers from scheduled polling to event-driven execution (Pub/Sub → Composer), achieving near-real-time data availability for ML workloads and eliminating timing-gap failures; enforced CI/CD checks for schema compliance before deployment.
- Migrated 100+ Airflow pipelines to GCP Composer 3.x across two upgrade phases with modular refactoring and zero service disruption.
- Designed dimensional models and partitioning/clustering strategies for core BigQuery tables serving 180+ stores and 30,000+ associates, improving query performance and reducing compute costs.
- Provisioned GCP infrastructure (BigQuery, GCS, Composer) as version-controlled Terraform code, standardizing deployments and enforcing data governance across environments.

---

**Data Scientist (Contract)** <span style="float:right">February 2024 – May 2024</span>  
Hyly.AI, Ashburn, VA

- Built a dbt-based data observability framework in BigQuery, implementing automated anomaly detection and pipeline health monitoring across multi-tenant data products and reducing downstream errors by 30–40%.
- Developed ELT pipelines and analytics views for a real estate marketing platform, integrating 5+ data sources per client via REST APIs and enabling self-serve reporting for non-technical stakeholders.

---

**Graduate Researcher** <span style="float:right">September 2022 – June 2023</span>  
University of Waterloo, Waterloo, ON

- Designed and implemented optimization algorithms for sum-of-norms regularized NMF, leading all algorithm development, ablation studies, and statistical benchmarking; published in *Neural Computation* (2026).

---

**Data Scientist (Co-op)** <span style="float:right">May 2022 – August 2022</span>  
SYMX.AI (formerly Symboticware), Sudbury, ON

- Fine-tuned a DistilBERT fault classifier on mining maintenance logs (~500 → ~5,000 training pairs via NLP augmentation), improving classification accuracy from ~50% to ~75%; shipped as a commercial product.
- Engineered an AWS pipeline stress-testing framework (Lambda, S3) to simulate 100s of GBs of IoT sensor data, validating ingestion capacity before production scale-up.

---

**Data Scientist** <span style="float:right">July 2020 – August 2021</span>  
Big Byte Insights, New York, NY

- Built NLP ingestion pipelines processing 10+ GBs/day of SEC filings, Reddit posts, and financial news via REST API integrations for intellistocks.ai.
- Applied time series forecasting and DBSCAN geospatial clustering on real estate data across ~15 homebuilder companies to generate investment reports for hedge fund clients.
- Conducted competitive intelligence analysis via API pattern analysis and feature engineering across product SKUs to enable cross-city pricing comparisons.

---

## Technical Skills

**ML & AI:** PyTorch, HuggingFace Transformers, scikit-learn, XGBoost, LangChain, Gemini API, MLflow  
**Data & Cloud:** GCP (BigQuery, Composer, Pub/Sub, Vertex AI), AWS (S3, Lambda, EC2); Airflow, dbt, Terraform, Dataform  
**Languages & Tools:** Python, SQL, Bash; FastAPI, Docker, Looker, Git

---

## Education

**Master of Mathematics, Computational Mathematics** <span style="float:right">2023</span>  
University of Waterloo, Waterloo, ON  
- International Master's Award of Excellence (IMAE); Outstanding Teaching Assistant Award

**Bachelor of Science, Environmental Engineering** <span style="float:right">2020</span>  
Middle East Technical University, Ankara, Turkey  
- Ranked 2nd in Department; Dean's Honor Roll Award

---

## Publication

Ang, A., **Hamed, W.**, & De Sterck, H. (2026). Sum-of-norms regularized Nonnegative Matrix Factorization. *Neural Computation*. [doi.org/10.1162/NECO.a.1482](https://doi.org/10.1162/NECO.a.1482) | [PDF](/assets/files/2407.00706v1-2.pdf)
