---
layout: single
title: "Projects"
permalink: /projects/
author_profile: true
---

## Personal & Academic Projects

### Sum-of-norms regularized Nonnegative Matrix Factorization

Implementation and experimental code for the paper "Sum-of-norms regularized Nonnegative Matrix Factorization".

The method addresses a fundamental challenge in NMF: automatically determining the correct rank (number of components) without prior knowledge. SONNMF uses sum-of-norms (SON) regularization to encourage pairwise similarity between factor columns, enabling automatic rank discovery by starting with an overestimated rank and reducing it during optimization.

[GitHub Repository](https://github.com/waqasbinhamed/sonnmf) | [Paper](https://arxiv.org/abs/2407.00706) 

---

### Nonnegative Unimodal Matrix Factorization

Python implementation of Nonnegative Unimodal Matrix Factorization (NuMF), an NMF method that enforces unimodality constraints. NuMF is particularly useful for applications where the underlying data is expected to have a single peak (unimodal structure) and nonnegative values, such as in signal processing, bioinformatics, and chemometrics.

The implementation is based on the [Nonnegative Unimodal Matrix Factorization](https://ieeexplore.ieee.org/iel7/9413349/9413350/09414631.pdf) research paper.

[GitHub Repository](https://github.com/waqasbinhamed/numf) 
<!-- ---

### Duplicate Question Detection
**Duration:** 2021  
**Role:** Primary Researcher  
**Technologies:** Python, NLP, Transformers, PyTorch

Developed an NLP algorithm using novel augmentation approach for detecting duplicate questions on Quora dataset. Achieved higher scores than State-of-the-Art models through innovative data augmentation techniques.


---

### Kaggle PawPularity Contest
**Duration:** 2021  
**Role:** Team Member (4-person team)  
**Technologies:** Python, Transformers, Computer Vision, PyTorch

Trained a transformer model to predict likeability of pets based on images. Achieved bronze ranking in Kaggle competition. Collaborated with 3 other students on model architecture and training strategies.

[GitHub Repository](https://github.com/ofarrelle/stat441-final-project) | [Competition](https://www.kaggle.com/c/petfinder-pawpularity-score) -->

---

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