---
layout: single
title: "Projects"
permalink: /projects/
author_profile: true
---

## Personal & Academic Projects

### Sum-of-norms regularized Nonnegative Matrix Factorization [[GitHub](https://github.com/waqasbinhamed/sonnmf)] [[Paper](https://arxiv.org/abs/2407.00706)]

Implementation and experimental code for the paper "Sum-of-norms regularized Nonnegative Matrix Factorization".

The method addresses a fundamental challenge in NMF: automatically determining the correct rank (number of components) without prior knowledge. SONNMF uses sum-of-norms (SON) regularization to encourage pairwise similarity between factor columns, enabling automatic rank discovery by starting with an overestimated rank and reducing it during optimization. 

---

### Nonnegative Unimodal Matrix Factorization [[GitHub](https://github.com/waqasbinhamed/numf)]

Python implementation of Nonnegative Unimodal Matrix Factorization (NuMF), an NMF method that enforces unimodality constraints. NuMF is particularly useful for applications where the underlying data is expected to have a single peak (unimodal structure) and nonnegative values, such as in signal processing, bioinformatics, and chemometrics.

The implementation is based on the [Nonnegative Unimodal Matrix Factorization](https://ieeexplore.ieee.org/iel7/9413349/9413350/09414631.pdf) research paper. 

<!-- --- -->

## Professional Projects

*Projects completed during employment where I made key contributions.*

### [SYMX.AI X.Parts](https://symx.ai/product/xparts/)

**Organization:** SYMX.AI (formerly Symboticware)

An NLP system that transforms free-text maintenance logs into structured data, enabling fleet-wide analysis to reduce fuel costs and equipment downtime.

*My Contributions:* Developed the initial proof of concept, evaluated LLM models and selected the appropriate one, curated a domain-specific dataset for training, and built the first extraction algorithm.

---

### [Intellistocks.ai](https://intellistocks.ai/)

**Organization:** Big Byte Insights
A financial analytics platform that applied NLP and predictive modeling to extract investment signals from social media activity and financial documents, including earnings calls and quarterly reports.

*My Contributions:* Led core development efforts, trained sentiment analysis and named entity recognition (NER) models for text data, and contributed to designing the project’s data architecture.