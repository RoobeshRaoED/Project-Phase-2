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







```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HLMS - Housing Loan Management System</title>
  
  <!-- Tailwind CSS CDN for utility structure -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Inter Google Font -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  
  <!-- Custom Embedded Stylesheet (Kept separately within the same page) -->
  <style>
    /* Custom Color Variables matching the premium theme from Image 2 */
    :root {
      --bg-cream: #f6f5f0;
      --pine-green: #2d624f;
      --pine-green-hover: #1f4537;
      --navy-blue: #1b2b48;
      --border-warm: #e5e2d9;
    }

    body {
      font-family: 'Inter', sans-serif;
    }

    .bg-cream { background-color: var(--bg-cream); }
    .text-pine { color: var(--pine-green); }
    .bg-pine { background-color: var(--pine-green); }
    .border-warm { border-color: var(--border-warm); }
    .text-navy { color: var(--navy-blue); }
    .bg-navy { background-color: var(--navy-blue); }
  </style>
</head>
<body class="bg-cream text-slate-800 min-h-screen flex flex-col antialiased">

  <!-- HEADER BAR (Deep Navy Blue Theme from Image 2) -->
  <header class="bg-navy text-white sticky top-0 z-50 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      
      <!-- Brand Logo Left Block -->
      <div class="flex items-center space-x-4">
        <div class="lg:hidden p-2 text-slate-300">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        <div class="flex items-center space-x-2.5">
          <!-- Logo Shield SVG -->
          <div class="w-9 h-9 rounded bg-[#2d624f] flex items-center justify-center font-bold text-lg border border-[#3e7a63] shadow-inner">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <div>
            <span class="font-bold tracking-wider text-lg block leading-none">HLMS</span>
            <span class="text-[10px] text-gray-300 font-light block tracking-tight">Housing Loan Management System</span>
          </div>
        </div>
      </div>

      <!-- Search Bar (Visual Placement Only) -->
      <div class="hidden md:flex items-center bg-slate-800/40 border border-slate-700/60 rounded-full px-3.5 py-1.5 w-80">
        <svg class="w-4 h-4 text-slate-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span class="text-xs text-slate-400 font-light">Search accounts, transactions, status...</span>
      </div>

      <!-- Right Profile Segment -->
      <div class="flex items-center space-x-4">
        <!-- Notification Icon -->
        <div class="relative p-2 rounded-full bg-slate-800/40 border border-slate-700/40 cursor-default">
          <svg class="w-5 h-5 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span class="absolute top-1.5 right-1.5 bg-red-500 text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">3</span>
        </div>

        <!-- User Profile Avatar -->
        <div class="flex items-center space-x-2.5 pl-2 border-l border-slate-700/80">
          <div class="w-9 h-9 rounded-full bg-pine border border-[#3e7a63] flex items-center justify-center text-xs font-semibold text-white shadow-sm">
            JD
          </div>
          <div class="hidden sm:block text-left text-xs">
            <p class="font-semibold text-gray-100 leading-none">John Doe</p>
            <p class="text-[9px] text-slate-400 font-light mt-0.5">Applicant Account</p>
          </div>
          <svg class="w-3.5 h-3.5 text-slate-400 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

    </div>
  </header>

  <!-- BODY CONTENT LAYOUT (Sidebar + Main panel) -->
  <div class="flex-1 max-w-7xl w-full mx-auto flex flex-col lg:flex-row">
    
    <!-- LEFT SIDEBAR NAV - Identical to Image 1 Wireframe -->
    <aside class="w-full lg:w-72 bg-white border-b lg:border-b-0 lg:border-r border-warm p-5 flex flex-col justify-between shrink-0">
      <div class="space-y-1">
        
        <!-- Dashboard (Active State) -->
        <div class="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-bold bg-[#f0f6f4] text-pine border-l-4 border-pine shadow-sm cursor-default">
          <div class="flex items-center space-x-3">
            <svg class="w-4 h-4 text-pine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span>Dashboard</span>
          </div>
        </div>

        <!-- Other Navigation Items (Inactive States) -->
        <div class="space-y-0.5 pt-2">
          <!-- Loan Guidance -->
          <div class="flex items-center space-x-3 px-3.5 py-2.5 text-slate-600 text-xs font-medium rounded-lg hover:bg-slate-50 cursor-default">
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>Loan Guidance</span>
          </div>

          <!-- Check Eligibility -->
          <div class="flex items-center space-x-3 px-3.5 py-2.5 text-slate-600 text-xs font-medium rounded-lg hover:bg-slate-50 cursor-default">
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Check Eligibility</span>
          </div>

          <!-- Apply for Loan -->
          <div class="flex items-center space-x-3 px-3.5 py-2.5 text-slate-600 text-xs font-medium rounded-lg hover:bg-slate-50 cursor-default">
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Apply for Loan</span>
          </div>

          <!-- Loan Status Tracking -->
          <div class="flex items-center space-x-3 px-3.5 py-2.5 text-slate-600 text-xs font-medium rounded-lg hover:bg-slate-50 cursor-default">
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span>Loan Status Tracking</span>
          </div>

          <!-- Repayment -->
          <div class="flex items-center space-x-3 px-3.5 py-2.5 text-slate-600 text-xs font-medium rounded-lg hover:bg-slate-50 cursor-default">
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span>Repayment</span>
          </div>

          <!-- Post Disbursement -->
          <div class="flex items-center space-x-3 px-3.5 py-2.5 text-slate-600 text-xs font-medium rounded-lg hover:bg-slate-50 cursor-default">
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Post Disbursement</span>
          </div>

          <!-- Auction Management -->
          <div class="flex items-center space-x-3 px-3.5 py-2.5 text-slate-600 text-xs font-medium rounded-lg hover:bg-slate-50 cursor-default">
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>Auction Management</span>
          </div>

          <!-- Documents -->
          <div class="flex items-center space-x-3 px-3.5 py-2.5 text-slate-600 text-xs font-medium rounded-lg hover:bg-slate-50 cursor-default">
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
            <span>Documents</span>
          </div>

          <!-- Profile Settings -->
          <div class="flex items-center space-x-3 px-3.5 py-2.5 text-slate-600 text-xs font-medium rounded-lg hover:bg-slate-50 cursor-default">
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 01-6 0z" />
            </svg>
            <span>Profile Settings</span>
          </div>

          <!-- Support / Help -->
          <div class="flex items-center space-x-3 px-3.5 py-2.5 text-slate-600 text-xs font-medium rounded-lg hover:bg-slate-50 cursor-default">
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span>Support / Help</span>
          </div>
        </div>

      </div>

      <!-- NEED HELP WIREFRAME CARD - Exactly matching Bottom Left Wireframe Box -->
      <div class="mt-8 pt-5 border-t border-warm">
        <div class="border border-dashed border-warm bg-cream/50 rounded-xl p-4 text-center">
          <div class="w-10 h-10 bg-white border border-warm flex items-center justify-center mx-auto rounded-lg mb-3">
            <svg class="w-5 h-5 text-pine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 class="text-xs font-bold text-navy uppercase tracking-wider">Need Help?</h4>
          <p class="text-[11px] text-slate-500 mt-1 leading-relaxed">
            Our support team is here to assist you.
          </p>
          <div class="mt-3.5 w-full bg-[#2d624f] hover:bg-[#1f4537] text-white py-2 rounded-lg text-xs font-bold text-center block transition cursor-pointer shadow-sm">
            Contact Support
          </div>
        </div>
      </div>
    </aside>

    <!-- MAIN PAGE CONTENT (Dashboard Workspace) -->
    <main class="flex-1 p-4 sm:p-6 lg:p-8 space-y-6">
      
      <!-- WELCOME BAR & ACTION BLOCK -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-6 rounded-xl border border-warm shadow-xs gap-4">
        <div>
          <h2 class="text-2xl font-black text-navy tracking-tight">Welcome back, John Doe!</h2>
          <p class="text-xs text-slate-500 mt-0.5">Here's an overview of your loan journey.</p>
        </div>
        <div class="bg-[#2d624f] hover:bg-[#1f4537] text-white font-semibold text-xs px-4.5 py-3 rounded-lg shadow-sm transition flex items-center space-x-2 cursor-pointer">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          <span>Apply for New Loan</span>
        </div>
      </div>

      <!-- METRICS GRID - 5 columns perfectly aligned with Image 1 layout -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        
        <!-- Metric 1: Active Loans -->
        <div class="bg-white p-5 rounded-xl border border-warm shadow-xs flex flex-col justify-between">
          <div>
            <div class="w-7 h-7 bg-emerald-50 text-pine rounded-md flex items-center justify-center border border-[#e5e2d9]">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-3 block">Active Loans</span>
            <p class="text-2xl font-extrabold text-navy mt-1">1</p>
          </div>
          <div class="text-[11px] text-pine hover:underline font-bold mt-4 flex items-center cursor-pointer">
            <span>View Details</span>
            <svg class="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>

        <!-- Metric 2: Applications -->
        <div class="bg-white p-5 rounded-xl border border-warm shadow-xs flex flex-col justify-between">
          <div>
            <div class="w-7 h-7 bg-blue-50 text-blue-700 rounded-md flex items-center justify-center border border-[#e5e2d9]">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-3 block">Applications</span>
            <p class="text-2xl font-extrabold text-navy mt-1">2</p>
          </div>
          <div class="text-[11px] text-pine hover:underline font-bold mt-4 flex items-center cursor-pointer">
            <span>View All</span>
            <svg class="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>

        <!-- Metric 3: EMI Paid -->
        <div class="bg-white p-5 rounded-xl border border-warm shadow-xs flex flex-col justify-between">
          <div>
            <div class="w-7 h-7 bg-amber-50 text-amber-700 rounded-md flex items-center justify-center border border-[#e5e2d9]">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-3 block">EMI Paid</span>
            <p class="text-2xl font-extrabold text-navy mt-1">12</p>
          </div>
          <span class="text-[10px] text-slate-400 mt-4 block font-medium">This Year</span>
        </div>

        <!-- Metric 4: Next EMI Due -->
        <div class="bg-white p-5 rounded-xl border border-warm shadow-xs flex flex-col justify-between">
          <div>
            <div class="w-7 h-7 bg-rose-50 text-rose-700 rounded-md flex items-center justify-center border border-[#e5e2d9]">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-3 block">Next EMI Due</span>
            <p class="text-lg font-black text-pine mt-1">₹ 18,750</p>
          </div>
          <span class="text-[10px] text-slate-400 mt-4 block font-semibold">On 05 Jun 2024</span>
        </div>

        <!-- Metric 5: Outstanding Amount -->
        <div class="bg-white p-5 rounded-xl border border-warm shadow-xs flex flex-col justify-between">
          <div>
            <div class="w-7 h-7 bg-red-50 text-red-700 rounded-md flex items-center justify-center border border-[#e5e2d9]">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-3 block">Outstanding Amount</span>
            <p class="text-lg font-black text-red-700 mt-1">₹ 8,45,230</p>
          </div>
          <div class="text-[11px] text-pine hover:underline font-bold mt-4 flex items-center cursor-pointer">
            <span>View Details</span>
            <svg class="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>

      </div>

      <!-- MIDDLE GRID: LOAN OVERVIEW | PROGRESS | QUICK ACTIONS -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <!-- Column 1: Loan Overview card (5/12 width) -->
        <div class="lg:col-span-5 bg-white p-5 rounded-xl border border-warm shadow-xs space-y-4">
          <div class="flex justify-between items-center">
            <h3 class="font-bold text-navy text-xs tracking-wider uppercase">Loan Overview</h3>
            <span class="bg-emerald-100 text-pine text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase">
              Home Loan <span class="ml-1 opacity-75">• Active</span>
            </span>
          </div>

          <!-- Decorative Wireframe Sketch House SVG Box -->
          <div class="bg-cream/40 border border-[#e5e2d9] rounded-lg p-3.5 flex justify-center">
            <svg class="w-32 h-24 text-slate-400" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="25" y="35" width="50" height="35" rx="1" stroke="#2d624f" stroke-width="1.5" fill="none"/>
              <path d="M20 35 L50 15 L80 35 Z" stroke="#2d624f" stroke-width="1.5" fill="#f0f6f4"/>
              <rect x="35" y="47" width="10" height="23" stroke="#2d624f" stroke-width="1.2"/>
              <rect x="55" y="45" width="12" height="12" stroke="#2d624f" stroke-width="1.2" />
              <line x1="61" y1="45" x2="61" y2="57" stroke="#2d624f" stroke-width="0.8"/>
              <line x1="55" y1="51" x2="67" y2="51" stroke="#2d624f" stroke-width="0.8"/>
              <circle cx="15" cy="20" r="4" stroke="currentColor" stroke-width="1"/>
              <line x1="15" y1="24" x2="15" y2="28" stroke="currentColor" stroke-width="1"/>
            </svg>
          </div>

          <!-- Attributes table exactly layout from Image 1 -->
          <div class="space-y-2.5 text-xs">
            <div class="flex justify-between py-1.5 border-b border-slate-100">
              <span class="text-slate-400">Loan Account No.</span>
              <span class="font-semibold text-slate-800">HL1234567890</span>
            </div>
            <div class="flex justify-between py-1.5 border-b border-slate-100">
              <span class="text-slate-400">Sanctioned Amount</span>
              <span class="font-bold text-slate-800">₹ 20,00,000</span>
            </div>
            <div class="flex justify-between py-1.5 border-b border-slate-100">
              <span class="text-slate-400">Interest Rate</span>
              <span class="font-semibold text-pine">8.50% p.a.</span>
            </div>
            <div class="flex justify-between py-1.5 border-b border-slate-100">
              <span class="text-slate-400">Loan Tenure</span>
              <span class="font-semibold text-slate-800">20 Years</span>
            </div>
            <div class="flex justify-between py-1.5 border-b border-slate-100">
              <span class="text-slate-400">EMI Amount</span>
              <span class="font-bold text-slate-800">₹ 18,750</span>
            </div>
            <div class="flex justify-between py-1.5">
              <span class="text-slate-400">Disbursed Amount</span>
              <span class="font-semibold text-slate-700">₹ 11,54,770</span>
            </div>
          </div>

          <div class="w-full bg-[#f0f6f4] hover:bg-emerald-100/50 text-pine py-2.5 rounded-lg text-xs font-bold text-center block transition border border-emerald-200/50 cursor-pointer">
            View Loan Details
          </div>
        </div>

        <!-- Column 2: EMI Payment Progress Donut (4/12 width) -->
        <div class="lg:col-span-4 bg-white p-5 rounded-xl border border-warm shadow-xs flex flex-col justify-between space-y-4">
          <h3 class="font-bold text-navy text-xs tracking-wider uppercase">EMI Payment Progress</h3>
          
          <div class="flex flex-col items-center py-2">
            <!-- Semi Donut Chart Representation using pure CSS and SVGs -->
            <div class="relative w-36 h-36 flex items-center justify-center">
              <svg class="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle class="text-slate-100" stroke-width="9" stroke="currentColor" fill="none" r="40" cx="50" cy="50" />
                <!-- 60% Stroke Dash-array layout -->
                <circle class="text-pine" stroke-width="9" stroke-dasharray="251.2" stroke-dashoffset="100.48" stroke-linecap="round" stroke="currentColor" fill="none" r="40" cx="50" cy="50" />
              </svg>
              <div class="absolute text-center">
                <span class="text-2xl font-black text-navy block">60%</span>
                <span class="text-[9px] text-slate-400 uppercase tracking-wider font-semibold block">Paid</span>
              </div>
            </div>

            <!-- Legend items matches screenshot exactly -->
            <div class="w-full space-y-2 mt-4 text-[11px]">
              <div class="flex items-center justify-between p-2 bg-slate-50 border border-warm rounded-md">
                <div class="flex items-center space-x-1.5">
                  <span class="w-2.5 h-2.5 bg-pine rounded"></span>
                  <span class="text-slate-500">EMI Paid</span>
                </div>
                <span class="font-semibold text-slate-800">12 (60%)</span>
              </div>
              <div class="flex items-center justify-between p-2 bg-slate-50 border border-warm rounded-md">
                <div class="flex items-center space-x-1.5">
                  <span class="w-2.5 h-2.5 bg-slate-200 rounded"></span>
                  <span class="text-slate-500">EMI Remaining</span>
                </div>
                <span class="font-semibold text-slate-800">8 (40%)</span>
              </div>
            </div>
          </div>

          <div class="w-full bg-[#2d624f] hover:bg-[#1f4537] text-white py-2.5 rounded-lg text-xs font-semibold text-center block transition cursor-pointer shadow-sm">
            View Repayment Schedule
          </div>
        </div>

        <!-- Column 3: Quick Actions list (3/12 width) -->
        <div class="lg:col-span-3 bg-white p-5 rounded-xl border border-warm shadow-xs space-y-3">
          <h3 class="font-bold text-navy text-xs tracking-wider uppercase mb-3">Quick Actions</h3>
          
          <div class="space-y-2">
            <!-- List actions directly as styled items in wireframe -->
            <div class="flex justify-between items-center px-3 py-2.5 bg-slate-50 border border-warm rounded-lg text-xs font-semibold text-slate-800 hover:bg-cream transition cursor-pointer">
              <span class="truncate">Check Loan Eligibility</span>
              <svg class="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
            
            <div class="flex justify-between items-center px-3 py-2.5 bg-slate-50 border border-warm rounded-lg text-xs font-semibold text-slate-800 hover:bg-cream transition cursor-pointer">
              <span class="truncate">EMI Calculator</span>
              <svg class="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>

            <div class="flex justify-between items-center px-3 py-2.5 bg-slate-50 border border-warm rounded-lg text-xs font-semibold text-slate-800 hover:bg-cream transition cursor-pointer">
              <span class="truncate">Download Statement</span>
              <svg class="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>

            <div class="flex justify-between items-center px-3 py-2.5 bg-slate-50 border border-warm rounded-lg text-xs font-semibold text-slate-800 hover:bg-cream transition cursor-pointer">
              <span class="truncate">Upload Document</span>
              <svg class="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>

            <div class="flex justify-between items-center px-3 py-2.5 bg-slate-50 border border-warm rounded-lg text-xs font-semibold text-slate-800 hover:bg-cream transition cursor-pointer">
              <span class="truncate">Track Application</span>
              <svg class="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

      </div>

      <!-- BOTTOM SECTION: RECENT APPLICATIONS & NOTIFICATIONS -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <!-- Table Frame (8/12 width) -->
        <div class="lg:col-span-8 bg-white p-5 rounded-xl border border-warm shadow-xs space-y-4">
          <div class="flex justify-between items-center">
            <h3 class="font-bold text-navy text-xs tracking-wider uppercase">Recent Applications</h3>
            <span class="text-xs text-pine hover:underline font-bold cursor-pointer">View All</span>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs text-slate-700 min-w-[500px]">
              <thead class="bg-slate-50 text-slate-500 uppercase font-semibold border-b border-slate-150">
                <tr>
                  <th class="p-3">Application ID</th>
                  <th class="p-3">Loan Type</th>
                  <th class="p-3">Status</th>
                  <th class="p-3">Applied On</th>
                  <th class="p-3">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-slate-50/50">
                  <td class="p-3 font-semibold text-slate-900">HL1234</td>
                  <td class="p-3">Home Loan</td>
                  <td class="p-3">
                    <span class="px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                      In Progress
                    </span>
                  </td>
                  <td class="p-3 text-slate-500">20 May 2024</td>
                  <td class="p-3 text-pine hover:underline font-bold cursor-pointer flex items-center">
                    <span>View Details</span>
                    <svg class="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </td>
                </tr>
                <tr class="hover:bg-slate-50/50">
                  <td class="p-3 font-semibold text-slate-900">HL1122</td>
                  <td class="p-3">Home Loan</td>
                  <td class="p-3">
                    <span class="px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-indigo-50 text-indigo-800 border border-indigo-200">
                      Under Review
                    </span>
                  </td>
                  <td class="p-3 text-slate-500">10 Apr 2024</td>
                  <td class="p-3 text-pine hover:underline font-bold cursor-pointer flex items-center">
                    <span>View Details</span>
                    <svg class="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </td>
                </tr>
                <tr class="hover:bg-slate-50/50">
                  <td class="p-3 font-semibold text-slate-900">HL0987</td>
                  <td class="p-3">Home Loan Top-Up</td>
                  <td class="p-3">
                    <span class="px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      Approved
                    </span>
                  </td>
                  <td class="p-3 text-slate-500">15 Mar 2024</td>
                  <td class="p-3 text-pine hover:underline font-bold cursor-pointer flex items-center">
                    <span>View Details</span>
                    <svg class="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Notifications block (4/12 width) -->
        <div class="lg:col-span-4 bg-white p-5 rounded-xl border border-warm shadow-xs flex flex-col justify-between">
          <div>
            <div class="flex justify-between items-center mb-4">
              <h3 class="font-bold text-navy text-xs tracking-wider uppercase">Notifications</h3>
              <span class="text-xs text-pine hover:underline font-bold cursor-pointer">View All</span>
            </div>

            <div class="space-y-3">
              <div class="p-3 bg-[#fcfbf9] border border-warm rounded-lg text-xs flex gap-2.5">
                <div class="p-1 rounded bg-rose-50 text-rose-700 shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <p class="text-slate-800 leading-normal">EMI of <strong>₹18,750</strong> is due on <strong>05 Jun 2024</strong>.</p>
                  <span class="text-[9px] text-slate-400 mt-1 block">2 hours ago</span>
                </div>
              </div>

              <div class="p-3 bg-[#fcfbf9] border border-warm rounded-lg text-xs flex gap-2.5">
                <div class="p-1 rounded bg-blue-50 text-blue-700 shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p class="text-slate-800 leading-normal">Your application <strong>HL1234</strong> is under processing.</p>
                  <span class="text-[9px] text-slate-400 mt-1 block">1 day ago</span>
                </div>
              </div>

              <div class="p-3 bg-[#fcfbf9] border border-warm rounded-lg text-xs flex gap-2.5">
                <div class="p-1 rounded bg-emerald-50 text-[#2d624f] shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p class="text-slate-800 leading-normal">Document verification completed successfully.</p>
                  <span class="text-[9px] text-slate-400 mt-1 block">3 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </main>

  </div>

  <!-- COMPREHENSIVE FOOTER SEGMENT (Precisely matching the footer requirements of Image 1) -->
  <footer class="bg-white border-t border-warm mt-12 py-12 px-4 sm:px-6 lg:px-8 text-slate-700">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
      
      <!-- Logo Block and Brand statement -->
      <div class="lg:col-span-2 space-y-4">
        <div class="flex items-center space-x-2.5">
          <div class="w-8 h-8 rounded bg-[#2d624f] flex items-center justify-center font-bold text-sm text-white">
            H
          </div>
          <div>
            <h4 class="font-bold text-navy tracking-wider">HLMS</h4>
            <p class="text-[10px] text-slate-400 uppercase font-light">Housing Loan Management System</p>
          </div>
        </div>
        <p class="text-xs text-slate-500 leading-relaxed max-w-sm">
          We help you achieve your dream home with the best loan solutions and personalized support.
        </p>
        <div class="flex space-x-2">
          <div class="w-7 h-7 rounded-full bg-[#f6f5f0] flex items-center justify-center border border-warm cursor-pointer hover:bg-slate-100 text-xs">
            f
          </div>
          <div class="w-7 h-7 rounded-full bg-[#f6f5f0] flex items-center justify-center border border-warm cursor-pointer hover:bg-slate-100 text-xs">
            t
          </div>
          <div class="w-7 h-7 rounded-full bg-[#f6f5f0] flex items-center justify-center border border-warm cursor-pointer hover:bg-slate-100 text-xs">
            in
          </div>
        </div>
      </div>

      <!-- Quick Links col -->
      <div>
        <h5 class="font-bold text-navy text-xs uppercase tracking-widest mb-4">Quick Links</h5>
        <ul class="space-y-2.5 text-xs text-slate-500 font-medium">
          <li><span class="hover:text-pine cursor-pointer">— Dashboard</span></li>
          <li><span class="hover:text-pine cursor-pointer">— Loan Guidance</span></li>
          <li><span class="hover:text-pine cursor-pointer">— Check Eligibility</span></li>
          <li><span class="hover:text-pine cursor-pointer">— Apply for Loan</span></li>
          <li><span class="hover:text-pine cursor-pointer">— Track Application</span></li>
        </ul>
      </div>

      <!-- Important Links col -->
      <div>
        <h5 class="font-bold text-navy text-xs uppercase tracking-widest mb-4">Important Links</h5>
        <ul class="space-y-2.5 text-xs text-slate-500 font-medium">
          <li><span class="hover:text-pine cursor-pointer">— EMI Calculator</span></li>
          <li><span class="hover:text-pine cursor-pointer">— Interest Rates</span></li>
          <li><span class="hover:text-pine cursor-pointer">— FAQs</span></li>
          <li><span class="hover:text-pine cursor-pointer">— Terms & Conditions</span></li>
          <li><span class="hover:text-pine cursor-pointer">— Privacy Policy</span></li>
        </ul>
      </div>

      <!-- Support and Download App column combo -->
      <div class="space-y-6">
        <div>
          <h5 class="font-bold text-navy text-xs uppercase tracking-widest mb-3">Support</h5>
          <ul class="space-y-2 text-xs text-slate-500">
            <li class="flex items-center">
              <svg class="w-3.5 h-3.5 mr-2 text-pine shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>1800-123-4567</span>
            </li>
            <li class="flex items-center">
              <svg class="w-3.5 h-3.5 mr-2 text-pine shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>support@hlms.com</span>
            </li>
            <li class="flex items-start">
              <svg class="w-3.5 h-3.5 mr-2 text-pine shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h5 class="font-bold text-navy text-xs uppercase tracking-widest mb-3">Download App</h5>
          <div class="space-y-2">
            <!-- App Store Visual Link -->
            <div class="flex items-center p-2 border border-warm rounded-lg hover:bg-slate-50 transition cursor-pointer">
              <div class="mr-2 text-slate-800">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.52 14.12l-1.42-.42a1.76 1.76 0 0 0-1.74.45l-.47.47a12.87 12.87 0 0 1-5.11-5.11l.47-.47a1.78 1.78 0 0 0 .45-1.74l-.42-1.42A1.81 1.81 0 0 0 7.49 4H5.01A1.81 1.81 0 0 0 3.2 5.8c0 8.94 7.26 16.2 16.2 16.2a1.81 1.81 0 0 0 1.8-1.81v-2.48a1.81 1.81 0 0 0-1.68-1.79z" />
                </svg>
              </div>
              <div class="text-[9px] leading-tight text-left">
                <span class="text-slate-400 block uppercase font-medium">Get it on</span>
                <span class="text-xs font-bold block text-navy">Google Play</span>
              </div>
            </div>
            <!-- App Store Visual Link -->
            <div class="flex items-center p-2 border border-warm rounded-lg hover:bg-slate-50 transition cursor-pointer">
              <div class="mr-2 text-slate-800">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94.1.08.2.12.3.12.9 0 2-.64 2.51-1.45" />
                </svg>
              </div>
              <div class="text-[9px] leading-tight text-left">
                <span class="text-slate-400 block uppercase font-medium">Download on the</span>
                <span class="text-xs font-bold block text-navy">App Store</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Copyright and compliance disclaimer footer element -->
    <div class="max-w-7xl mx-auto mt-10 pt-8 border-t border-slate-100 text-center">
      <p class="text-xs text-slate-400 font-light">
        © 2024 HLMS. All rights reserved. Housing Loan Management System Portal.
      </p>
    </div>
  </footer>

</body>
</html>

```




