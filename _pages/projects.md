---
layout: single
title: "Projects"
permalink: /projects/
author_profile: true
---

## Personal & Side Projects

### Spotify Playlist Organizer

**Stack:** Gemini API, Spotify API, LangChain, Python, fly.io &nbsp;|&nbsp; 2025 – Present

An agentic LLM classification pipeline that automatically organizes Spotify libraries by mood and genre. Built with Gemini and LangChain using multi-step reasoning with structured output (JSON schema enforcement) to ensure reliable, consistent categorization. Deployed to fly.io with live user testing.

*Key techniques:* agentic tool use, structured output, prompt engineering, REST API integration, cloud deployment

---

### Sum-of-norms regularized NMF [[GitHub](https://github.com/waqasbinhamed/sonnmf)] [[Paper](https://doi.org/10.1162/NECO.a.1482)]

**Stack:** Python, NumPy, SciPy &nbsp;|&nbsp; Published in *Neural Computation* (2026)

An optimization algorithm that automatically discovers the correct number of latent components in high-dimensional data — solving the rank estimation problem that limits standard NMF. Learns sparse, interpretable structure from data with applications in signal decomposition, recommendation systems, and scientific computing.

*Key techniques:* convex optimization, regularization, ablation studies, numerical benchmarking

---

### Nonnegative Unimodal Matrix Factorization [[GitHub](https://github.com/waqasbinhamed/numf)]

**Stack:** Python, NumPy

Python implementation of NuMF, enforcing single-peak (unimodal) constraints on factorized components — useful for spectral analysis, bioinformatics, and signal processing where underlying patterns have natural peak structure.

*Key techniques:* constrained optimization, scientific computing, numerical methods

---

## Professional Projects

### [SYMX.AI X.Parts](https://symx.ai/product/xparts/)

**Organization:** SYMX.AI (formerly Symboticware)

An NLP system that transforms unstructured maintenance logs into structured, queryable data — enabling fleet-wide fault analysis to reduce equipment downtime and fuel costs.

*My contributions:* Fine-tuned a DistilBERT classifier on domain-specific mining logs (~500 → ~5,000 training pairs via NLP augmentation), improving fault classification from ~50% to ~75% accuracy. Took the system from internal PoC to a shipped commercial product.

---

### [Intellistocks.ai](https://intellistocks.ai/)

**Organization:** Big Byte Insights

A financial analytics platform extracting investment signals from SEC filings, earnings calls, and social media using NLP and predictive modeling.

*My contributions:* Built NLP ingestion pipelines processing 10+ GBs/day via REST API integrations; contributed to fine-tuning a financial sentiment classifier using HuggingFace Transformers.
