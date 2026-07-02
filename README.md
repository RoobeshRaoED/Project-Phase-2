# EXAMGUARD: A Confidential Computing–Based AI System for Secure and Bias-Free Exam Evaluation
The development of EXAMGUARD, a secure AI-based automated examination evaluation system designed to confidentially assess student answer scripts using OCR and semantic analysis, streamlining the correction process for faculty while ensuring data privacy, accuracy, and transparency in academic evaluation.

## About
<!--Detailed Description about the project-->
EXAMGUARD is a next-generation secure AI-powered examination evaluation system designed to enable confidential, automated, and privacy-preserving assessment of student answer scripts. Traditional evaluation systems involve manual correction or centralized processing, which exposes sensitive academic data and introduces bias, inconsistency, and security risks.

This project addresses these challenges by integrating Optical Character Recognition (OCR), Semantic Similarity Analysis, Encrypted Evaluation Workflow, and Secure Enclave-based Processing into a unified framework. The system allows faculty members to define course structures, upload master answer keys and scanned student scripts, and perform secure AI-based evaluation without exposing raw answer data.

The architecture ensures:

- Encrypted script processing

- Confidential computation within a secure enclave

- Question-wise marks generation

- Transparent activity logging

- Secure result aggregation

The system is designed to support future integration with distributed academic networks, edge-based evaluation frameworks, and AI-powered academic governance systems.

## Features
<!--List the features of the project as shown below-->
- Secure AI Enclave-based confidential evaluation

- OCR-based handwritten answer extraction

- Semantic similarity-based answer comparison

- Question-wise automated marking

- Section-wise structured exam definition

- Encrypted master key and student script handling

- Real-time evaluation logs

- Privacy-first evaluation workflow

- Modular frontend and backend architecture

- Scalable multi-course management

## Requirements
<!--List the requirements of the project as shown below-->
### Operating System

* 64-bit OS required

* Windows 10 / Windows 11

* Ubuntu (recommended for backend deployment)

### Development Environment

* Python 3.8 or later

* Node.js (if backend scaling required)

### AI & NLP Frameworks

* PyTorch / TensorFlow (Semantic Model)

* Sentence Transformers / BERT (for similarity scoring)

* Tesseract OCR (for script extraction)

### Security & Privacy Modules

* Secure Enclave Simulation

* Encrypted File Handling

* Controlled Memory Purging after evaluation

* Activity Logging for transparency

### Frontend & Backend

#### Frontend:

* React.js

* Tailwind CSS

* HTML, CSS, JavaScript

#### Backend:

* FastAPI / Flask (API services)

### Database

* #### PostgreSQL

* ####  Stores:

* Course metadata

* Section definitions

* Evaluation logs

* Final aggregated scores

### IDE & Tools

* Visual Studio Code (VS Code)

* Git (version control)

## System Architecture
<!--Embed the system architecture diagram as shown below-->

The EXAMGUARD architecture consists of four primary layers:

1. Faculty Interaction Layer

2. Preprocessing Layer (OCR Engine)

3. Confidential Evaluation Layer

4. Result Generation Layer

Faculty define exam structure and upload encrypted answer files. The system performs OCR-based extraction and processes semantic similarity inside a secure enclave environment. After evaluation, raw extracted data is purged and only aggregated scores are stored.

The architecture ensures:

* No persistent storage of raw student answers

* Confidential semantic processing

* Structured evaluation workflow

* Scalable modular design

![](Architecture%20Diagram.png)

## Output

<!--Embed the Output picture at respective places as shown below as shown below-->
### Output 1 – Dashboard

Displays course registration interface and evaluation controls.

![](Output%201.png)

### Output 2 – Secure Evaluation Interface

#### Faculty upload:

* Master Answer Key

* Student Script

#### Triggers confidential evaluation.

![](Output%202.png)

### Output 3 – Question-wise Marksheet

#### Displays:

* Section number

* Question number

* Marks obtained

* Section totals

![](Output%203.png)

### Output 4 – Final Aggregated Score

Shows total obtained marks vs total possible marks.

![](Output%204.png)

## Results and Impact
<!--Give the results and impact as shown below-->
The EXAMGUARD system demonstrates how secure AI-based evaluation can eliminate manual bias, reduce correction time, and ensure confidentiality of academic data.

By integrating OCR and semantic similarity evaluation inside a secure enclave simulation, the system ensures that:

* Raw student responses are never exposed

* Only encrypted or processed data is handled

* Final results are released without retaining sensitive content

The system proves that automated academic evaluation can be:

* Secure

* Scalable

* Transparent

* Privacy-preserving

EXAMGUARD lays the foundation for future intelligent academic governance systems, distributed examination networks, and AI-assisted institutional evaluation frameworks.

## Articles published / References
1. J. Devlin et al., “BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding,” NAACL, 2019.

2. A. Vaswani et al., “Attention Is All You Need,” NeurIPS, 2017.

3. R. Smith, “An Overview of the Tesseract OCR Engine,” ICDAR, 2007.

4. C. Dwork and A. Roth, “The Algorithmic Foundations of Differential Privacy,” 2014.

5. Mikolov et al., “Distributed Representations of Words and Phrases and their Compositionality,” NeurIPS, 2013.



