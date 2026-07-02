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





```
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
        <!-- Interactive Mobile Menu Toggle Button -->
        <div id="mobile-menu-toggle" class="lg:hidden p-2 text-slate-300 cursor-pointer hover:bg-slate-800 rounded-lg transition">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        <div class="flex items-center space-x-2.5">
          <!-- Logo Shield SVG -->
          <div class="w-9 h-9 rounded bg-[#2d624f] flex items-center justify-center font-bold text-lg border border-[#3e7a63] shadow-inner">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <div>
            <span class="font-bold tracking-wider text-lg block leading-none">HLMS</span>
            <span class="text-[10px] text-gray-300 font-light block tracking-tight">Housing Loan Management System</span>
          </div>
        </div>
      </div>

      <!-- Search Bar -->
      <div class="hidden md:flex items-center bg-slate-800/40 border border-slate-700/60 rounded-full px-3.5 py-1.5 w-80">
        <svg class="w-4 h-4 text-slate-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input type="text" id="dashboard-search" placeholder="Search accounts, transactions, status..." class="bg-transparent border-none text-xs text-white placeholder-slate-400 focus:outline-none w-full font-light">
      </div>

      <!-- Right Profile Segment -->
      <div class="flex items-center space-x-4">
        <!-- Notification Icon -->
        <div id="notification-bell-btn" class="relative p-2 rounded-full bg-slate-800/40 border border-slate-700/40 cursor-pointer hover:bg-slate-700/50 transition">
          <svg class="w-5 h-5 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span id="global-notification-badge" class="absolute top-1.5 right-1.5 bg-red-500 text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">3</span>
        </div>

        <!-- User Profile Avatar -->
        <div id="user-profile-btn" class="flex items-center space-x-2.5 pl-2 border-l border-slate-700/80 cursor-pointer hover:opacity-90 transition">
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
  <div class="flex-1 max-w-7xl w-full mx-auto flex flex-col lg:flex-row relative">
    
    <!-- LEFT SIDEBAR NAV - Identical to Image 1 Wireframe (With responsive transition handling) -->
    <aside id="main-sidebar" class="hidden lg:flex w-full lg:w-72 bg-white border-b lg:border-b-0 lg:border-r border-warm p-5 flex-col justify-between shrink-0 z-40">
      <div class="space-y-1">
        
        <!-- Dashboard (Active State by Default) -->
        <div data-target="dashboard" class="nav-item flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-bold bg-[#f0f6f4] text-pine border-l-4 border-pine shadow-sm cursor-pointer transition">
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
          <div data-target="loan-guidance" class="nav-item flex items-center space-x-3 px-3.5 py-2.5 text-slate-600 text-xs font-medium rounded-lg hover:bg-slate-50 cursor-pointer transition">
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>Loan Guidance</span>
          </div>

          <!-- Check Eligibility -->
          <div data-target="eligibility" class="nav-item flex items-center space-x-3 px-3.5 py-2.5 text-slate-600 text-xs font-medium rounded-lg hover:bg-slate-50 cursor-pointer transition">
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Check Eligibility</span>
          </div>

          <!-- Apply for Loan -->
          <div data-target="apply-loan" class="nav-item flex items-center space-x-3 px-3.5 py-2.5 text-slate-600 text-xs font-medium rounded-lg hover:bg-slate-50 cursor-pointer transition">
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Apply for Loan</span>
          </div>

          <!-- Loan Status Tracking -->
          <div data-target="track-loan" class="nav-item flex items-center space-x-3 px-3.5 py-2.5 text-slate-600 text-xs font-medium rounded-lg hover:bg-slate-50 cursor-pointer transition">
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span>Loan Status Tracking</span>
          </div>

          <!-- Repayment -->
          <div data-target="repayment" class="nav-item flex items-center space-x-3 px-3.5 py-2.5 text-slate-600 text-xs font-medium rounded-lg hover:bg-slate-50 cursor-pointer transition">
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span>Repayment</span>
          </div>

          <!-- Post Disbursement -->
          <div data-target="post-disb" class="nav-item flex items-center space-x-3 px-3.5 py-2.5 text-slate-600 text-xs font-medium rounded-lg hover:bg-slate-50 cursor-pointer transition">
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Post Disbursement</span>
          </div>

          <!-- Auction Management -->
          <div data-target="auction" class="nav-item flex items-center space-x-3 px-3.5 py-2.5 text-slate-600 text-xs font-medium rounded-lg hover:bg-slate-50 cursor-pointer transition">
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>Auction Management</span>
          </div>

          <!-- Documents -->
          <div data-target="documents" class="nav-item flex items-center space-x-3 px-3.5 py-2.5 text-slate-600 text-xs font-medium rounded-lg hover:bg-slate-50 cursor-pointer transition">
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
            <span>Documents</span>
          </div>

          <!-- Profile Settings -->
          <div data-target="profile-settings" class="nav-item flex items-center space-x-3 px-3.5 py-2.5 text-slate-600 text-xs font-medium rounded-lg hover:bg-slate-50 cursor-pointer transition">
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 01-6 0z" />
            </svg>
            <span>Profile Settings</span>
          </div>

          <!-- Support / Help -->
          <div data-target="support" class="nav-item flex items-center space-x-3 px-3.5 py-2.5 text-slate-600 text-xs font-medium rounded-lg hover:bg-slate-50 cursor-pointer transition">
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
          <div id="btn-contact-support" class="mt-3.5 w-full bg-[#2d624f] hover:bg-[#1f4537] text-white py-2 rounded-lg text-xs font-bold text-center block transition cursor-pointer shadow-sm">
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
        <div id="btn-apply-new-loan" class="bg-[#2d624f] hover:bg-[#1f4537] text-white font-semibold text-xs px-4.5 py-3 rounded-lg shadow-sm transition flex items-center space-x-2 cursor-pointer">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          <span>Apply for New Loan</span>
        </div>
      </div>

      <!-- METRICS GRID - 5 columns perfectly aligned with Image 1 layout -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        
        <!-- Metric 1: Active Loans -->
        <div id="metric-active-loans" class="bg-white p-5 rounded-xl border border-warm shadow-xs flex flex-col justify-between hover:shadow-md transition cursor-pointer">
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
        <div id="metric-applications" class="bg-white p-5 rounded-xl border border-warm shadow-xs flex flex-col justify-between hover:shadow-md transition cursor-pointer">
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
        <div id="metric-outstanding" class="bg-white p-5 rounded-xl border border-warm shadow-xs flex flex-col justify-between hover:shadow-md transition cursor-pointer">
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

          <div id="btn-view-loan-details" class="w-full bg-[#f0f6f4] hover:bg-emerald-100/50 text-pine py-2.5 rounded-lg text-xs font-bold text-center block transition border border-emerald-200/50 cursor-pointer">
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

          <div id="btn-repayment-schedule" class="w-full bg-[#2d624f] hover:bg-[#1f4537] text-white py-2.5 rounded-lg text-xs font-semibold text-center block transition cursor-pointer shadow-sm">
            View Repayment Schedule
          </div>
        </div>

        <!-- Column 3: Quick Actions list (3/12 width) -->
        <div class="lg:col-span-3 bg-white p-5 rounded-xl border border-warm shadow-xs space-y-3">
          <h3 class="font-bold text-navy text-xs tracking-wider uppercase mb-3">Quick Actions</h3>
          
          <div class="space-y-2">
            <!-- List actions directly as styled items in wireframe -->
            <div data-action="eligibility" class="quick-action-item flex justify-between items-center px-3 py-2.5 bg-slate-50 border border-warm rounded-lg text-xs font-semibold text-slate-800 hover:bg-cream transition cursor-pointer">
              <span class="truncate">Check Loan Eligibility</span>
              <svg class="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
            
            <div data-action="emi-calc" class="quick-action-item flex justify-between items-center px-3 py-2.5 bg-slate-50 border border-warm rounded-lg text-xs font-semibold text-slate-800 hover:bg-cream transition cursor-pointer">
              <span class="truncate">EMI Calculator</span>
              <svg class="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>

            <div data-action="download-stmt" class="quick-action-item flex justify-between items-center px-3 py-2.5 bg-slate-50 border border-warm rounded-lg text-xs font-semibold text-slate-800 hover:bg-cream transition cursor-pointer">
              <span class="truncate">Download Statement</span>
              <svg class="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>

            <div data-action="upload-doc" class="quick-action-item flex justify-between items-center px-3 py-2.5 bg-slate-50 border border-warm rounded-lg text-xs font-semibold text-slate-800 hover:bg-cream transition cursor-pointer">
              <span class="truncate">Upload Document</span>
              <svg class="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>

            <div data-action="track" class="quick-action-item flex justify-between items-center px-3 py-2.5 bg-slate-50 border border-warm rounded-lg text-xs font-semibold text-slate-800 hover:bg-cream transition cursor-pointer">
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
            <span id="view-all-apps-btn" class="text-xs text-pine hover:underline font-bold cursor-pointer">View All</span>
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
                <tr class="hover:bg-slate-50/50 table-row-app" data-id="HL1234">
                  <td class="p-3 font-semibold text-slate-900">HL1234</td>
                  <td class="p-3">Home Loan</td>
                  <td class="p-3">
                    <span class="px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                      In Progress
                    </span>
                  </td>
                  <td class="p-3 text-slate-500">20 May 2024</td>
                  <td class="p-3 text-pine hover:underline font-bold cursor-pointer flex items-center btn-view-app">
                    <span>View Details</span>
                    <svg class="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </td>
                </tr>
                <tr class="hover:bg-slate-50/50 table-row-app" data-id="HL1122">
                  <td class="p-3 font-semibold text-slate-900">HL1122</td>
                  <td class="p-3">Home Loan</td>
                  <td class="p-3">
                    <span class="px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-indigo-50 text-indigo-800 border border-indigo-200">
                      Under Review
                    </span>
                  </td>
                  <td class="p-3 text-slate-500">10 Apr 2024</td>
                  <td class="p-3 text-pine hover:underline font-bold cursor-pointer flex items-center btn-view-app">
                    <span>View Details</span>
                    <svg class="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </td>
                </tr>
                <tr class="hover:bg-slate-50/50 table-row-app" data-id="HL0987">
                  <td class="p-3 font-semibold text-slate-900">HL0987</td>
                  <td class="p-3">Home Loan Top-Up</td>
                  <td class="p-3">
                    <span class="px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      Approved
                    </span>
                  </td>
                  <td class="p-3 text-slate-500">15 Mar 2024</td>
                  <td class="p-3 text-pine hover:underline font-bold cursor-pointer flex items-center btn-view-app">
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
              <span id="view-all-notifications-btn" class="text-xs text-pine hover:underline font-bold cursor-pointer">View All</span>
            </div>

            <div class="space-y-3" id="notification-list-container">
              <!-- Notify Item 1 -->
              <div class="notification-item p-3 bg-[#fcfbf9] border border-warm rounded-lg text-xs flex gap-2.5 cursor-pointer hover:bg-slate-50 transition" data-id="notif-1">
                <div class="p-1 rounded bg-rose-50 text-rose-700 shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <p class="text-slate-800 leading-normal">EMI of <strong>₹18,750</strong> is due on <strong>05 Jun 2024</strong>.</p>
                  <span class="text-[9px] text-slate-400 mt-1 block">2 hours ago</span>
                </div>
                <button class="notif-dismiss text-slate-400 hover:text-rose-600 self-start">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>

              <!-- Notify Item 2 -->
              <div class="notification-item p-3 bg-[#fcfbf9] border border-warm rounded-lg text-xs flex gap-2.5 cursor-pointer hover:bg-slate-50 transition" data-id="notif-2">
                <div class="p-1 rounded bg-blue-50 text-blue-700 shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <p class="text-slate-800 leading-normal">Your application <strong>HL1234</strong> is under processing.</p>
                  <span class="text-[9px] text-slate-400 mt-1 block">1 day ago</span>
                </div>
                <button class="notif-dismiss text-slate-400 hover:text-rose-600 self-start">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>

              <!-- Notify Item 3 -->
              <div class="notification-item p-3 bg-[#fcfbf9] border border-warm rounded-lg text-xs flex gap-2.5 cursor-pointer hover:bg-slate-50 transition" data-id="notif-3">
                <div class="p-1 rounded bg-emerald-50 text-[#2d624f] shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <p class="text-slate-800 leading-normal">Document verification completed successfully.</p>
                  <span class="text-[9px] text-slate-400 mt-1 block">3 days ago</span>
                </div>
                <button class="notif-dismiss text-slate-400 hover:text-rose-600 self-start">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
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
      <div>
        <h5 class="text-xs font-bold text-navy uppercase tracking-wider mb-3">System Resources</h5>
        <ul class="space-y-2 text-xs text-slate-500">
          <li><a href="#" class="hover:text-pine">User Guides</a></li>
          <li><a href="#" class="hover:text-pine">Product Manuals</a></li>
          <li><a href="#" class="hover:text-pine">FAQs</a></li>
        </ul>
      </div>
      <div>
        <h5 class="text-xs font-bold text-navy uppercase tracking-wider mb-3">Loan Products</h5>
        <ul class="space-y-2 text-xs text-slate-500">
          <li><a href="#" class="hover:text-pine">Home Purchasing Loan</a></li>
          <li><a href="#" class="hover:text-pine">Home Construction Loan</a></li>
          <li><a href="#" class="hover:text-pine">Home Improvement Top-Up</a></li>
        </ul>
      </div>
      <div>
        <h5 class="text-xs font-bold text-navy uppercase tracking-wider mb-3">Calculators</h5>
        <ul class="space-y-2 text-xs text-slate-500">
          <li><a href="#" class="hover:text-pine">Home Loan EMI Tool</a></li>
          <li><a href="#" class="hover:text-pine">Affordability Checker</a></li>
          <li><a href="#" class="hover:text-pine">Tax Benefit Calculator</a></li>
        </ul>
      </div>
      <div>
        <h5 class="text-xs font-bold text-navy uppercase tracking-wider mb-3">Regulatory</h5>
        <ul class="space-y-2 text-xs text-slate-500">
          <li><a href="#" class="hover:text-pine">Terms of Use</a></li>
          <li><a href="#" class="hover:text-pine">Privacy Statement</a></li>
          <li><a href="#" class="hover:text-pine">Interest Rate Notice</a></li>
        </ul>
      </div>
      <div>
        <h5 class="text-xs font-bold text-navy uppercase tracking-wider mb-3">Helpdesk Contacts</h5>
        <p class="text-xs text-slate-500 leading-relaxed">
          Toll Free: 1800-456-7890<br>
          Email: support@hlmsportal.com<br>
          Hours: Mon-Fri, 9:00 AM - 6:00 PM
        </p>
      </div>
    </div>

    <!-- Copyright and compliance disclaimer footer element -->
    <div class="max-w-7xl mx-auto mt-10 pt-8 border-t border-slate-100 text-center">
      <p class="text-xs text-slate-400 font-light">
        © 2024 HLMS. All rights reserved. Housing Loan Management System Portal.
      </p>
    </div>
  </footer>

  <!-- DYNAMIC MODAL / DRAWER SYSTEM FOR QUICK ACTIONS -->
  <div id="action-modal" class="fixed inset-0 z-50 overflow-y-auto hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      
      <!-- Modal background overlay -->
      <div id="modal-overlay" class="fixed inset-0 bg-slate-900 bg-opacity-60 transition-opacity" aria-hidden="true"></div>

      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <!-- Modal panel -->
      <div id="modal-container" class="inline-block align-bottom bg-white rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-warm">
        
        <!-- Modal Header -->
        <div class="bg-navy px-6 py-4 flex justify-between items-center text-white">
          <h3 class="font-bold text-sm uppercase tracking-wider" id="modal-title">Action Window</h3>
          <button id="close-modal-btn" class="text-slate-300 hover:text-white transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Modal Content Container -->
        <div id="modal-body-content" class="px-6 py-5">
          <!-- Dynamically injected content goes here -->
        </div>

        <!-- Modal Footer -->
        <div class="bg-slate-50 px-6 py-3.5 flex justify-end space-x-2.5 border-t border-warm">
          <button id="modal-cancel-btn" class="px-4 py-2 border border-warm text-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-100 transition">Cancel</button>
          <button id="modal-confirm-btn" class="px-4 py-2 bg-[#2d624f] hover:bg-[#1f4537] text-white rounded-lg text-xs font-semibold transition">Submit</button>
        </div>
      </div>
    </div>
  </div>

  <!-- FLOATING INTERACTIVE TOAST SYSTEM (ELEGANT ALERTS) -->
  <div id="toast-notification" class="fixed bottom-5 right-5 z-50 transform translate-y-20 opacity-0 transition-all duration-300 pointer-events-none">
    <div class="bg-white border-l-4 border-[#2d624f] text-slate-800 px-4.5 py-3.5 rounded-lg shadow-xl border border-warm max-w-sm flex items-start gap-3">
      <div class="p-1 rounded bg-[#f0f6f4] text-pine" id="toast-icon-box">
        <!-- SVG injected dynamically -->
      </div>
      <div class="flex-1">
        <h4 class="text-xs font-bold text-navy" id="toast-title">Success</h4>
        <p class="text-[11px] text-slate-500 mt-0.5" id="toast-message">Your request was processed successfully.</p>
      </div>
      <button id="toast-close-btn" class="text-slate-400 hover:text-slate-600 pointer-events-auto">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>

  <!-- APPLICATION DETAILS MODAL PANEL (FOR DETAILED REVIEWS) -->
  <template id="template-view-details">
    <div class="space-y-4">
      <div class="flex items-center justify-between border-b border-warm pb-3">
        <div>
          <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Application ID</span>
          <span class="text-base font-bold text-navy" id="detail-app-id">HL1234</span>
        </div>
        <span class="px-3 py-1 rounded-full text-xs font-semibold" id="detail-app-status-badge">In Progress</span>
      </div>
      <div class="grid grid-cols-2 gap-4 text-xs">
        <div>
          <p class="text-slate-400 font-medium">Loan Type</p>
          <p class="font-bold text-slate-800 mt-0.5" id="detail-loan-type">Home Purchasing Loan</p>
        </div>
        <div>
          <p class="text-slate-400 font-medium">Applied Date</p>
          <p class="font-bold text-slate-800 mt-0.5" id="detail-applied-date">20 May 2024</p>
        </div>
        <div>
          <p class="text-slate-400 font-medium">Requested Amount</p>
          <p class="font-bold text-pine mt-0.5" id="detail-requested-amount">₹ 20,00,000</p>
        </div>
        <div>
          <p class="text-slate-400 font-medium">Current Officer</p>
          <p class="font-bold text-slate-800 mt-0.5">Siddharth Sharma</p>
        </div>
      </div>
      <div class="mt-4 p-3 bg-cream/40 border border-[#e5e2d9] rounded-lg">
        <p class="text-xs font-bold text-navy mb-2">Process Tracker</p>
        <div class="space-y-3 relative before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
          <div class="flex gap-3 text-[11px] items-start relative">
            <span class="w-4.5 h-4.5 rounded-full bg-pine border-2 border-white flex items-center justify-center text-white font-bold text-[8px] z-10 shrink-0">✓</span>
            <div>
              <p class="font-bold text-slate-800">Application Submitted</p>
              <p class="text-slate-400">Successfully created profile HL1234 on 20 May 2024</p>
            </div>
          </div>
          <div class="flex gap-3 text-[11px] items-start relative">
            <span class="w-4.5 h-4.5 rounded-full bg-pine border-2 border-white flex items-center justify-center text-white font-bold text-[8px] z-10 shrink-0">✓</span>
            <div>
              <p class="font-bold text-slate-800">Initial Verification</p>
              <p class="text-slate-400">KYC and basic documentation successfully verified on 22 May 2024</p>
            </div>
          </div>
          <div class="flex gap-3 text-[11px] items-start relative">
            <span class="w-4.5 h-4.5 rounded-full bg-amber-500 border-2 border-white flex items-center justify-center text-white font-bold text-[8px] z-10 shrink-0">⏳</span>
            <div>
              <p class="font-bold text-slate-800">Property Valuation</p>
              <p class="text-slate-400">Technical engineer assigned. Inspection scheduled.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <!-- EMI CALCULATOR TEMPLATE -->
  <template id="template-emi-calc">
    <div class="space-y-5 text-xs text-slate-700">
      <p class="text-slate-500">Calculate your monthly EMIs based on standard rate matrices.</p>
      
      <div class="space-y-4">
        <div>
          <div class="flex justify-between mb-1.5 font-bold text-navy">
            <span>Loan Amount</span>
            <span id="emi-val-amount">₹ 25,00,000</span>
          </div>
          <input type="range" id="emi-range-amount" min="100000" max="10000000" step="50000" value="2500000" class="w-full accent-[#2d624f]">
        </div>

        <div>
          <div class="flex justify-between mb-1.5 font-bold text-navy">
            <span>Interest Rate (% p.a.)</span>
            <span id="emi-val-rate">8.5%</span>
          </div>
          <input type="range" id="emi-range-rate" min="5" max="15" step="0.1" value="8.5" class="w-full accent-[#2d624f]">
        </div>

        <div>
          <div class="flex justify-between mb-1.5 font-bold text-navy">
            <span>Tenure (Years)</span>
            <span id="emi-val-tenure">20 Years</span>
          </div>
          <input type="range" id="emi-range-tenure" min="1" max="30" step="1" value="20" class="w-full accent-[#2d624f]">
        </div>
      </div>

      <div class="bg-navy rounded-lg p-4 text-white flex flex-col items-center justify-center text-center mt-5">
        <span class="text-[10px] uppercase tracking-wider text-slate-300 font-semibold">Calculated EMI Amount</span>
        <h4 class="text-2xl font-black text-white mt-1.5" id="emi-output-install">₹ 21,696</h4>
        <div class="grid grid-cols-2 gap-4 w-full mt-4 pt-3 border-t border-slate-700/60 text-[10px]">
          <div>
            <span class="text-slate-400 block">Total Interest Payable</span>
            <span class="font-bold text-white text-xs" id="emi-output-interest">₹ 27,07,040</span>
          </div>
          <div>
            <span class="text-slate-400 block">Total Payment (P + I)</span>
            <span class="font-bold text-white text-xs" id="emi-output-total">₹ 52,07,040</span>
          </div>
        </div>
      </div>
    </div>
  </template>

  <!-- ELIGIBILITY FORM TEMPLATE -->
  <template id="template-eligibility">
    <form id="form-eligibility" class="space-y-4 text-xs">
      <p class="text-slate-500">Provide approximate financial details to calculate instant credit range availability.</p>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-slate-600 mb-1 font-semibold">Monthly In-Hand Salary (₹)</label>
          <input type="number" id="elig-salary" placeholder="e.g. 75000" required class="w-full p-2.5 border border-warm rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2d624f]">
        </div>
        <div>
          <label class="block text-slate-600 mb-1 font-semibold">Existing Monthly EMI Outgo (₹)</label>
          <input type="number" id="elig-emi" placeholder="e.g. 10000" class="w-full p-2.5 border border-warm rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2d624f]">
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-slate-600 mb-1 font-semibold">Target Tenure (Years)</label>
          <select id="elig-tenure" class="w-full p-2.5 border border-warm rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2d624f] bg-white">
            <option value="10">10 Years</option>
            <option value="15">15 Years</option>
            <option value="20" selected>20 Years</option>
            <option value="25">25 Years</option>
          </select>
        </div>
        <div>
          <label class="block text-slate-600 mb-1 font-semibold">Self Credit Score Range</label>
          <select id="elig-score" class="w-full p-2.5 border border-warm rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2d624f] bg-white">
            <option value="high">Excellent (750+)</option>
            <option value="mid" selected>Good (650-749)</option>
            <option value="low">Fair (Below 650)</option>
          </select>
        </div>
      </div>

      <div id="eligibility-result" class="hidden mt-4 p-4 rounded-lg text-center">
        <!-- Results are computed on submit -->
      </div>
    </form>
  </template>

  <!-- APPLY LOAN FORM TEMPLATE -->
  <template id="template-apply-loan">
    <form id="form-apply" class="space-y-4 text-xs">
      <p class="text-slate-500">Begin your direct digital home loan onboarding. All decisions are conditional upon verification.</p>
      
      <div>
        <label class="block text-slate-600 mb-1 font-semibold">Employment Segment</label>
        <div class="grid grid-cols-3 gap-2">
          <label class="border border-warm rounded-lg p-2.5 text-center block cursor-pointer hover:bg-slate-50">
            <input type="radio" name="apply-employ" value="Salaried" checked class="accent-[#2d624f] mr-1">
            Salaried
          </label>
          <label class="border border-warm rounded-lg p-2.5 text-center block cursor-pointer hover:bg-slate-50">
            <input type="radio" name="apply-employ" value="Self-Employed" class="accent-[#2d624f] mr-1">
            Business
          </label>
          <label class="border border-warm rounded-lg p-2.5 text-center block cursor-pointer hover:bg-slate-50">
            <input type="radio" name="apply-employ" value="Professional" class="accent-[#2d624f] mr-1">
            Doctor/CA
          </label>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-slate-600 mb-1 font-semibold">Target Property Cost (₹)</label>
          <input type="number" placeholder="e.g. 5000000" required class="w-full p-2.5 border border-warm rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2d624f]">
        </div>
        <div>
          <label class="block text-slate-600 mb-1 font-semibold">Requested Funding Amount (₹)</label>
          <input type="number" placeholder="e.g. 3500000" required class="w-full p-2.5 border border-warm rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2d624f]">
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-slate-600 mb-1 font-semibold">City of Property</label>
          <input type="text" placeholder="e.g. Mumbai" required class="w-full p-2.5 border border-warm rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2d624f]">
        </div>
        <div>
          <label class="block text-slate-600 mb-1 font-semibold">Current Mobile Number</label>
          <input type="tel" placeholder="e.g. +91 98765 43210" required class="w-full p-2.5 border border-warm rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2d624f]">
        </div>
      </div>

      <div class="flex items-center gap-2">
        <input type="checkbox" required id="apply-terms" class="accent-[#2d624f]">
        <label for="apply-terms" class="text-slate-500">I declare that all facts declared are completely valid and conform to my pan metrics.</label>
      </div>
    </form>
  </template>

  <!-- DOCUMENT UPLOADER TEMPLATE -->
  <template id="template-upload-doc">
    <div class="space-y-4 text-xs">
      <p class="text-slate-500">Provide valid soft-copies for validation. PDF, JPG, or PNG under 5MB accepted.</p>
      
      <div>
        <label class="block text-slate-600 mb-1.5 font-semibold">Choose Document Category</label>
        <select id="upload-doc-category" class="w-full p-2.5 border border-warm rounded-lg bg-white">
          <option value="pan">Identity Verification (PAN / Aadhaar)</option>
          <option value="income">Income Validation (3-Months Payslips)</option>
          <option value="bank">Bank Statement (Last 6 Months)</option>
          <option value="property">Property Valuation Papers</option>
        </select>
      </div>

      <div id="drop-zone" class="border-2 border-dashed border-warm bg-[#fcfbf9] hover:bg-[#f0f6f4] transition hover:border-[#2d624f] rounded-xl p-8 text-center cursor-pointer">
        <svg class="w-10 h-10 text-slate-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        <p class="font-bold text-navy">Drag files here to submit or <span class="text-pine underline">browse</span></p>
        <p class="text-[10px] text-slate-400 mt-1">Acceptable formats: PDF, JPG, PNG up to 5MB</p>
        <input type="file" id="file-input-raw" class="hidden">
      </div>

      <div id="selected-file-display" class="hidden p-3 bg-emerald-50 border border-emerald-100 rounded-lg flex justify-between items-center text-[11px]">
        <span class="font-semibold text-slate-800" id="selected-file-name">filename.pdf</span>
        <button id="btn-remove-selected" class="text-rose-600 font-bold hover:underline">Remove</button>
      </div>
    </div>
  </template>

  <!-- HELP & SUPPORT FORM TEMPLATE -->
  <template id="template-support">
    <form id="form-support" class="space-y-4 text-xs">
      <p class="text-slate-500">Need specific clarifications on disbursement timings, interest recalculation, or repayments? Raise a support ticket.</p>
      
      <div>
        <label class="block text-slate-600 mb-1 font-semibold">Priority Severity</label>
        <select class="w-full p-2.5 border border-warm rounded-lg bg-white">
          <option value="low">Low (General Query)</option>
          <option value="med">Medium (Transaction Delays)</option>
          <option value="high">High (Repayment Errors)</option>
        </select>
      </div>

      <div>
        <label class="block text-slate-600 mb-1 font-semibold">Detailed Query</label>
        <textarea rows="4" placeholder="Be as descriptive as possible regarding transaction dates, document IDs, or interest components..." required class="w-full p-2.5 border border-warm rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2d624f]"></textarea>
      </div>
    </form>
  </template>

  <!-- INTERACTIVE CLIENT JAVASCRIPT LOGIC -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      
      // Elements & State management
      const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
      const mainSidebar = document.getElementById('main-sidebar');
      const actionModal = document.getElementById('action-modal');
      const modalOverlay = document.getElementById('modal-overlay');
      const modalContainer = document.getElementById('modal-container');
      const modalTitle = document.getElementById('modal-title');
      const modalBodyContent = document.getElementById('modal-body-content');
      const closeModalBtn = document.getElementById('close-modal-btn');
      const modalCancelBtn = document.getElementById('modal-cancel-btn');
      const modalConfirmBtn = document.getElementById('modal-confirm-btn');
      
      // Floating Toast Notification Elements
      const toastNotification = document.getElementById('toast-notification');
      const toastTitle = document.getElementById('toast-title');
      const toastMessage = document.getElementById('toast-message');
      const toastIconBox = document.getElementById('toast-icon-box');
      const toastCloseBtn = document.getElementById('toast-close-btn');

      // General interactive templates lookup
      const templateViewDetails = document.getElementById('template-view-details');
      const templateEmiCalc = document.getElementById('template-emi-calc');
      const templateEligibility = document.getElementById('template-eligibility');
      const templateApplyLoan = document.getElementById('template-apply-loan');
      const templateUploadDoc = document.getElementById('template-upload-doc');
      const templateSupport = document.getElementById('template-support');

      let currentActionTarget = '';
      let isMobileMenuOpen = false;

      // Elegant helper function to show dynamic state toasts
      function triggerToast(title, msg, type = 'success') {
        toastTitle.textContent = title;
        toastMessage.textContent = msg;
        
        // Dynamic icons for corresponding alerts
        if (type === 'success') {
          toastIconBox.className = "p-1 rounded bg-[#f0f6f4] text-pine";
          toastIconBox.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;
        } else if (type === 'info') {
          toastIconBox.className = "p-1 rounded bg-blue-50 text-blue-700";
          toastIconBox.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;
        } else {
          toastIconBox.className = "p-1 rounded bg-rose-50 text-rose-700";
          toastIconBox.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>`;
        }

        toastNotification.classList.remove('translate-y-20', 'opacity-0');
        toastNotification.classList.add('translate-y-0', 'opacity-100');

        setTimeout(() => {
          dismissToast();
        }, 5000);
      }

      function dismissToast() {
        toastNotification.classList.add('translate-y-20', 'opacity-0');
        toastNotification.classList.remove('translate-y-0', 'opacity-100');
      }

      toastCloseBtn.addEventListener('click', dismissToast);

      // Mobile Menu Toggle interaction
      mobileMenuToggle.addEventListener('click', () => {
        isMobileMenuOpen = !isMobileMenuOpen;
        if (isMobileMenuOpen) {
          mainSidebar.classList.remove('hidden');
          mainSidebar.classList.add('flex', 'absolute', 'top-16', 'left-0', 'w-72', 'shadow-2xl');
        } else {
          mainSidebar.classList.add('hidden');
          mainSidebar.classList.remove('flex', 'absolute', 'top-16', 'left-0', 'w-72', 'shadow-2xl');
        }
      });

      // Navigation Active Highlighting
      const navItems = document.querySelectorAll('.nav-item');
      navItems.forEach(item => {
        item.addEventListener('click', () => {
          // Remove active styles from all items
          navItems.forEach(nav => {
            nav.className = "nav-item flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50 cursor-pointer transition border-l-0";
            // Clean active specific structures
            const icon = nav.querySelector('svg');
            if (icon) {
              icon.classList.remove('text-pine');
              icon.classList.add('text-slate-400');
            }
          });

          // Add active styles to clicked item
          item.className = "nav-item flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-bold bg-[#f0f6f4] text-pine border-l-4 border-pine shadow-sm cursor-pointer transition";
          const itemIcon = item.querySelector('svg');
          if (itemIcon) {
            itemIcon.classList.remove('text-slate-400');
            itemIcon.classList.add('text-pine');
          }

          const target = item.getAttribute('data-target');
          if (target && target !== 'dashboard') {
            openActionModalByTarget(target);
          }

          // Close mobile menu on clicking any navigation option
          if (window.innerWidth < 1024 && isMobileMenuOpen) {
            mobileMenuToggle.click();
          }
        });
      });

      // Quick Action click router
      const quickActionItems = document.querySelectorAll('.quick-action-item');
      quickActionItems.forEach(action => {
        action.addEventListener('click', () => {
          const actionTarget = action.getAttribute('data-action');
          openActionModalByTarget(actionTarget);
        });
      });

      // Connect standard click actions in visual components
      document.getElementById('btn-apply-new-loan').addEventListener('click', () => {
        openActionModalByTarget('apply-loan');
      });

      document.getElementById('btn-contact-support').addEventListener('click', () => {
        openActionModalByTarget('support');
      });

      document.getElementById('btn-view-loan-details').addEventListener('click', () => {
        openActionModalByTarget('loan-overview-details');
      });

      document.getElementById('btn-repayment-schedule').addEventListener('click', () => {
        openActionModalByTarget('repayment');
      });

      document.getElementById('metric-active-loans').addEventListener('click', () => {
        openActionModalByTarget('loan-overview-details');
      });

      document.getElementById('metric-outstanding').addEventListener('click', () => {
        openActionModalByTarget('loan-overview-details');
      });

      document.getElementById('metric-applications').addEventListener('click', () => {
        openActionModalByTarget('track');
      });

      // Interactive application rows details
      const appViewButtons = document.querySelectorAll('.btn-view-app');
      appViewButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const row = btn.closest('.table-row-app');
          const appId = row.getAttribute('data-id');
          openApplicationDetail(appId);
        });
      });

      // Connect "View All" lists trigger action
      document.getElementById('view-all-apps-btn').addEventListener('click', () => {
        triggerToast('All Applications', 'Loaded detailed application logs in history panel', 'info');
      });

      document.getElementById('view-all-notifications-btn').addEventListener('click', () => {
        triggerToast('Notification History', 'Cleared and marked all system updates as read.', 'success');
        document.getElementById('global-notification-badge').classList.add('hidden');
      });

      // Dismiss Notification Event handler
      const notificationItems = document.querySelectorAll('.notification-item');
      notificationItems.forEach(item => {
        // Toggle/Mark as read
        item.addEventListener('click', (e) => {
          if (e.target.closest('.notif-dismiss')) return;
          item.classList.toggle('opacity-50');
          triggerToast('Notification Action', 'Marked update item state toggled.', 'info');
        });

        // Delete / Dismiss
        const dismissBtn = item.querySelector('.notif-dismiss');
        if (dismissBtn) {
          dismissBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            item.classList.add('scale-95', 'opacity-0');
            setTimeout(() => {
              item.remove();
              // Update badge count
              const badge = document.getElementById('global-notification-badge');
              let currentCount = parseInt(badge.textContent);
              if (currentCount > 1) {
                badge.textContent = currentCount - 1;
              } else {
                badge.classList.add('hidden');
              }
            }, 200);
          });
        }
      });

      // Main Modal Dynamic Loader Engine
      function openActionModalByTarget(target) {
        currentActionTarget = target;
        modalBodyContent.innerHTML = '';
        modalConfirmBtn.classList.remove('hidden');
        modalConfirmBtn.textContent = 'Submit';

        if (target === 'loan-overview-details') {
          modalTitle.textContent = 'Active Loan Statement Details';
          modalConfirmBtn.textContent = 'Print Statement';
          modalBodyContent.innerHTML = `
            <div class="space-y-3.5 text-xs text-slate-700">
              <div class="p-3 bg-emerald-50 border border-emerald-100 rounded-lg text-center">
                <span class="text-[10px] uppercase font-bold text-pine tracking-wide block">Active Status Summary</span>
                <p class="text-sm font-bold text-navy mt-1">Excellent Repayment Standing</p>
              </div>
              <div class="space-y-2.5">
                <div class="flex justify-between py-1 border-b border-slate-100">
                  <span class="text-slate-400">Total Sanctioned Limit</span>
                  <span class="font-bold text-slate-800">₹ 20,00,000</span>
                </div>
                <div class="flex justify-between py-1 border-b border-slate-100">
                  <span class="text-slate-400">Paid Back Principle</span>
                  <span class="font-semibold text-slate-800">₹ 3,09,540</span>
                </div>
                <div class="flex justify-between py-1 border-b border-slate-100">
                  <span class="text-slate-400">Cumulative Interest Paid</span>
                  <span class="font-semibold text-slate-800">₹ 8,45,230</span>
                </div>
                <div class="flex justify-between py-1 border-b border-slate-100">
                  <span class="text-slate-400">Overdue Charge Ledger</span>
                  <span class="font-bold text-emerald-600">₹ 0 (Nil)</span>
                </div>
              </div>
            </div>
          `;
        } 
        else if (target === 'repayment') {
          modalTitle.textContent = 'EMI Repayment System';
          modalConfirmBtn.textContent = 'Pay Installment Online';
          modalBodyContent.innerHTML = `
            <div class="space-y-4 text-xs text-slate-700">
              <p class="text-slate-500">Submit payments or configure automated NACH / ECS mandates.</p>
              <div class="p-4 bg-cream/60 border border-warm rounded-lg">
                <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">Upcoming Payment Schedule</p>
                <div class="flex justify-between items-center">
                  <div>
                    <span class="text-base font-extrabold text-navy block">₹ 18,750</span>
                    <span class="text-[10px] text-slate-400 block mt-0.5">Payment due on 05 Jun 2024</span>
                  </div>
                  <span class="px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                    Not Paid
                  </span>
                </div>
              </div>
              <div>
                <label class="block text-slate-600 mb-1 font-semibold">Select Repayment Method</label>
                <select class="w-full p-2.5 border border-warm rounded-lg bg-white">
                  <option value="net">Net Banking (Pre-authorized Bank)</option>
                  <option value="upi">Direct UPI Interlink</option>
                  <option value="nach">NACH Auto Debit Setup</option>
                </select>
              </div>
            </div>
          `;
        }
        else if (target === 'eligibility') {
          modalTitle.textContent = 'Check Credit Eligibility';
          modalConfirmBtn.textContent = 'Submit Computation';
          const clone = templateEligibility.content.cloneNode(true);
          modalBodyContent.appendChild(clone);
          
          // Attach reactive eligibility listeners inside modal
          setTimeout(() => {
            const form = document.getElementById('form-eligibility');
            form.addEventListener('submit', (e) => { e.preventDefault(); });
          }, 50);
        }
        else if (target === 'emi-calc') {
          modalTitle.textContent = 'Interactive EMI Calculator';
          modalConfirmBtn.classList.add('hidden'); // Footer triggers are handled internally/informational
          const clone = templateEmiCalc.content.cloneNode(true);
          modalBodyContent.appendChild(clone);
          
          // Setup Live EMI Computations inside modal context
          setTimeout(() => {
            setupLiveCalculator();
          }, 50);
        }
        else if (target === 'apply-loan') {
          modalTitle.textContent = 'Apply for direct Home Loan';
          modalConfirmBtn.textContent = 'Register Application';
          const clone = templateApplyLoan.content.cloneNode(true);
          modalBodyContent.appendChild(clone);
        }
        else if (target === 'upload-doc' || target === 'documents') {
          modalTitle.textContent = 'Digital Document Submission';
          modalConfirmBtn.textContent = 'Upload files';
          const clone = templateUploadDoc.content.cloneNode(true);
          modalBodyContent.appendChild(clone);
          
          // Setup file upload interaction listeners
          setTimeout(() => {
            const dropZone = document.getElementById('drop-zone');
            const fileInput = document.getElementById('file-input-raw');
            const selectedFileDisplay = document.getElementById('selected-file-display');
            const selectedFileName = document.getElementById('selected-file-name');
            const removeBtn = document.getElementById('btn-remove-selected');

            dropZone.addEventListener('click', () => fileInput.click());
            fileInput.addEventListener('change', (e) => {
              if (e.target.files.length > 0) {
                selectedFileName.textContent = e.target.files[0].name;
                selectedFileDisplay.classList.remove('hidden');
                dropZone.classList.add('hidden');
              }
            });
            removeBtn.addEventListener('click', () => {
              fileInput.value = '';
              selectedFileDisplay.classList.add('hidden');
              dropZone.classList.remove('hidden');
            });
          }, 50);
        }
        else if (target === 'support') {
          modalTitle.textContent = 'Direct Helpdesk Integration';
          modalConfirmBtn.textContent = 'Generate Ticket';
          const clone = templateSupport.content.cloneNode(true);
          modalBodyContent.appendChild(clone);
        }
        else {
          // Fallback static detail tracker
          modalTitle.textContent = 'Loan tracking overview';
          modalConfirmBtn.textContent = 'Close View';
          const clone = templateViewDetails.content.cloneNode(true);
          modalBodyContent.appendChild(clone);
        }

        // Show Modal Dialog Block
        actionModal.classList.remove('hidden');
      }

      // Live Application Specific Detail Loader
      function openApplicationDetail(appId) {
        currentActionTarget = 'view-detail-only';
        modalBodyContent.innerHTML = '';
        modalConfirmBtn.textContent = 'Ok, Got It';
        modalTitle.textContent = `Loan Details: ${appId}`;

        const clone = templateViewDetails.content.cloneNode(true);
        modalBodyContent.appendChild(clone);

        // Bind dynamic fields based on row context lookup
        setTimeout(() => {
          const detailAppId = document.getElementById('detail-app-id');
          const detailStatus = document.getElementById('detail-app-status-badge');
          const detailLoanType = document.getElementById('detail-loan-type');
          const detailRequestedAmount = document.getElementById('detail-requested-amount');
          const detailAppliedDate = document.getElementById('detail-applied-date');

          if (appId === 'HL1234') {
            detailAppId.textContent = 'HL1234';
            detailStatus.textContent = 'In Progress';
            detailStatus.className = 'px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-amber-50 text-amber-800 border border-amber-200';
            detailLoanType.textContent = 'Home Loan';
            detailRequestedAmount.textContent = '₹ 20,00,000';
            detailAppliedDate.textContent = '20 May 2024';
          } else if (appId === 'HL1122') {
            detailAppId.textContent = 'HL1122';
            detailStatus.textContent = 'Under Review';
            detailStatus.className = 'px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-indigo-50 text-indigo-800 border border-indigo-200';
            detailLoanType.textContent = 'Home Loan';
            detailRequestedAmount.textContent = '₹ 15,00,000';
            detailAppliedDate.textContent = '10 Apr 2024';
          } else {
            detailAppId.textContent = 'HL0987';
            detailStatus.textContent = 'Approved';
            detailStatus.className = 'px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200';
            detailLoanType.textContent = 'Home Loan Top-Up';
            detailRequestedAmount.textContent = '₹ 5,00,000';
            detailAppliedDate.textContent = '15 Mar 2024';
          }
        }, 50);

        actionModal.classList.remove('hidden');
      }

      // Interactive Realtime EMI Math engine
      function setupLiveCalculator() {
        const amtRange = document.getElementById('emi-range-amount');
        const rateRange = document.getElementById('emi-range-rate');
        const tenureRange = document.getElementById('emi-range-tenure');

        const amtVal = document.getElementById('emi-val-amount');
        const rateVal = document.getElementById('emi-val-rate');
        const tenureVal = document.getElementById('emi-val-tenure');

        const emiOutput = document.getElementById('emi-output-install');
        const emiTotalInterest = document.getElementById('emi-output-interest');
        const emiTotalSum = document.getElementById('emi-output-total');

        function formatCurrency(val) {
          return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
        }

        function calculateEMI() {
          const P = parseFloat(amtRange.value);
          const R = parseFloat(rateRange.value) / 12 / 100;
          const N = parseFloat(tenureRange.value) * 12;

          amtVal.textContent = formatCurrency(P);
          rateVal.textContent = `${rateRange.value}% p.a.`;
          tenureVal.textContent = `${tenureRange.value} Years`;

          // Standard Loan amortization math formula
          const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
          const totalPayment = emi * N;
          const totalInterest = totalPayment - P;

          emiOutput.textContent = formatCurrency(Math.round(emi));
          emiTotalInterest.textContent = formatCurrency(Math.round(totalInterest));
          emiTotalSum.textContent = formatCurrency(Math.round(totalPayment));
        }

        amtRange.addEventListener('input', calculateEMI);
        rateRange.addEventListener('input', calculateEMI);
        tenureRange.addEventListener('input', calculateEMI);

        calculateEMI();
      }

      // Close modal events
      function closeModal() {
        actionModal.classList.add('hidden');
      }

      closeModalBtn.addEventListener('click', closeModal);
      modalCancelBtn.addEventListener('click', closeModal);
      modalOverlay.addEventListener('click', closeModal);

      // Handle Submit actions inside modals dynamically based on target
      modalConfirmBtn.addEventListener('click', () => {
        if (currentActionTarget === 'eligibility') {
          const salary = document.getElementById('elig-salary').value;
          if (!salary) {
            triggerToast('Information Required', 'Please input monthly in-hand wage details.', 'error');
            return;
          }
          const resultDiv = document.getElementById('eligibility-result');
          const maxFunding = Math.round(parseFloat(salary) * 60);

          resultDiv.className = "mt-4 p-4 rounded-lg text-center bg-emerald-50 border border-emerald-100 text-xs";
          resultDiv.innerHTML = `
            <span class="text-[10px] uppercase font-bold text-pine block">Maximum Eligible Funding Range</span>
            <p class="text-lg font-black text-navy mt-1">${new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(maxFunding)}</p>
            <p class="text-[10px] text-slate-500 mt-1">Based on standard interest cap margin constraints of 8.5% p.a.</p>
          `;
          resultDiv.classList.remove('hidden');
          triggerToast('Eligibility Checked', 'Successful evaluation matrix formulated.', 'success');
        } 
        else if (currentActionTarget === 'apply-loan') {
          const termsChecked = document.getElementById('apply-terms').checked;
          if (!termsChecked) {
            triggerToast('Validation Required', 'Please confirm and accept the terms of the application check ledger.', 'error');
            return;
          }
          closeModal();
          triggerToast('Onboarding Success', 'Loan Application profile submitted to regional desk verification officers.', 'success');
        }
        else if (currentActionTarget === 'upload-doc') {
          closeModal();
          triggerToast('Files Uploaded', 'Document bundle saved inside HLMS vault index secure directory.', 'success');
        }
        else if (currentActionTarget === 'support') {
          closeModal();
          triggerToast('Ticket Generated', 'Customer query registered. Target resolve SLA response 24 hours.', 'success');
        }
        else {
          closeModal();
          triggerToast('Process Complete', 'State transaction committed successfully.', 'success');
        }
      });

    });
  </script>
</body>
</html>

```
