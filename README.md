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
html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HLMS - Housing Loan Management System</title>
    
    <!-- 
      ========================================================================
      1. CSS STYLESHEET (Copy this block entirely into your 'styles.css' file)
      ========================================================================
    -->
    <style>
        /* --- CSS VARIABLES (LIGHT & DARK THEMES) --- */
        :root {
            --bg-primary: #f8fafc;
            --bg-card: #ffffff;
            --border-color: #e2e8f0;
            --text-primary: #0f172a;
            --text-secondary: #475569;
            --primary: #6d28d9;
            --primary-hover: #5b21b6;
            --primary-light: #f5f3ff;
            --emerald: #10b981;
            --emerald-light: #ecfdf5;
            --amber: #f59e0b;
            --amber-light: #fffbeb;
            --red: #ef4444;
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            --transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .dark {
            --bg-primary: #0f172a;
            --bg-card: #1e293b;
            --border-color: #334155;
            --text-primary: #f8fafc;
            --text-secondary: #94a3b8;
            --primary: #8b5cf6;
            --primary-hover: #7c3aed;
            --primary-light: #2e1065;
            --emerald-light: #064e3b;
            --amber-light: #78350f;
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
            --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
        }

        /* --- BASE RESET & STYLES --- */
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            background-color: var(--bg-primary);
            color: var(--text-primary);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            transition: var(--transition);
            overflow-x: hidden;
        }

        /* --- SCROLLBARS --- */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 9999px;
        }
        .dark ::-webkit-scrollbar-thumb {
            background: #475569;
        }

        /* --- LAYOUT UTILITIES --- */
        .container {
            max-width: 1280px;
            width: 100%;
            margin: 0 auto;
            padding: 0 1.5rem;
        }

        .grid-12 {
            display: grid;
            grid-template-columns: repeat(12, minmax(0, 1fr));
            gap: 1.5rem;
        }

        /* --- HEADER --- */
        .app-header {
            position: sticky;
            top: 0;
            z-index: 40;
            background-color: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(8px);
            border-bottom: 1px solid var(--border-color);
            transition: var(--transition);
            height: 70px;
            display: flex;
            align-items: center;
        }
        .dark .app-header {
            background-color: rgba(30, 41, 59, 0.85);
        }

        .header-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        }

        .brand-logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            text-decoration: none;
            color: inherit;
        }

        .logo-box {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            background: linear-gradient(135deg, var(--primary) 0%, #6366f1 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            font-size: 1.25rem;
            box-shadow: 0 4px 12px rgba(109, 40, 217, 0.25);
        }

        .brand-text h1 {
            font-size: 1.125rem;
            font-weight: 800;
            letter-spacing: -0.025em;
            line-height: 1.2;
        }
        .brand-text p {
            font-size: 0.625rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--text-secondary);
        }

        .header-actions {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        /* --- BUTTONS & CONTROLS --- */
        .btn-icon {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            color: var(--text-secondary);
            width: 40px;
            height: 40px;
            border-radius: 12px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            transition: var(--transition);
        }
        .btn-icon:hover {
            color: var(--primary);
            border-color: var(--primary);
            transform: scale(1.05);
        }

        .badge {
            position: absolute;
            top: -2px;
            right: -2px;
            background-color: var(--red);
            color: #ffffff;
            font-size: 0.65rem;
            font-weight: 700;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid var(--bg-card);
        }

        .user-pill {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.25rem 0.75rem 0.25rem 0.25rem;
            background: transparent;
            border: none;
            border-radius: 9999px;
            cursor: pointer;
            color: var(--text-primary);
            font-weight: 600;
            font-size: 0.875rem;
            transition: var(--transition);
        }
        .user-pill:hover {
            background-color: rgba(0, 0, 0, 0.05);
        }
        .dark .user-pill:hover {
            background-color: rgba(255, 255, 255, 0.05);
        }

        .user-avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            object-cover: cover;
            border: 2px solid var(--primary);
        }

        /* --- NAVIGATION SIDEBAR --- */
        .sidebar {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .nav-menu {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 20px;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
            box-shadow: var(--shadow-sm);
        }

        .nav-link {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.75rem 1rem;
            border-radius: 12px;
            color: var(--text-secondary);
            text-decoration: none;
            font-size: 0.875rem;
            font-weight: 600;
            transition: var(--transition);
            border: none;
            background: transparent;
            width: 100%;
            text-align: left;
            cursor: pointer;
        }
        .nav-link:hover {
            background-color: var(--bg-primary);
            color: var(--primary);
        }
        .nav-link.active {
            background-color: var(--primary-light);
            color: var(--primary);
        }

        /* --- CARDS & BLOCKS --- */
        .card {
            background-color: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 24px;
            padding: 1.5rem;
            box-shadow: var(--shadow-sm);
            transition: var(--transition);
        }
        .card:hover {
            border-color: rgba(109, 40, 217, 0.2);
            box-shadow: var(--shadow-md);
        }

        /* Welcome Banner Card */
        .welcome-banner {
            display: flex;
            flex-direction: column;
            sm-flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            sm-align-items: center;
            gap: 1.5rem;
            background: var(--bg-card);
            border: 1px solid var(--border-color);
        }

        .btn-primary {
            background-color: var(--primary);
            color: #ffffff;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 12px;
            font-weight: 700;
            font-size: 0.875rem;
            cursor: pointer;
            transition: var(--transition);
            box-shadow: 0 4px 12px rgba(109, 40, 217, 0.2);
        }
        .btn-primary:hover {
            background-color: var(--primary-hover);
            transform: translateY(-1px);
        }

        /* --- 5-COLUMN METRICS GRID --- */
        .metrics-container {
            display: grid;
            grid-template-columns: repeat(5, minmax(0, 1fr));
            gap: 1rem;
        }
        @media (max-width: 1024px) {
            .metrics-container {
                grid-template-columns: repeat(3, minmax(0, 1fr));
            }
        }
        @media (max-width: 640px) {
            .metrics-container {
                grid-template-columns: repeat(1, minmax(0, 1fr));
            }
        }

        .metric-card {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 20px;
            padding: 1.25rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 130px;
        }
        .metric-card h4 {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text-secondary);
            font-weight: 700;
        }
        .metric-value {
            font-size: 1.75rem;
            font-weight: 900;
            color: var(--text-primary);
            margin: 0.5rem 0;
            letter-spacing: -0.025em;
        }

        /* --- DECORATIVE HOUSE GRAPHIC SVG --- */
        .house-svg-wrapper {
            background: var(--bg-primary);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* --- EMI PROGRESS DONUT CHART --- */
        .chart-box {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 1.5rem 0;
        }
        .donut-ring {
            stroke: var(--border-color);
        }
        .donut-segment {
            stroke: var(--primary);
            stroke-dasharray: 339.29;
            stroke-dashoffset: 135.71; /* (339.29 * (100 - 60)) / 100 */
            transition: stroke-dashoffset 0.8s ease;
        }
        .chart-label {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
        .chart-label .percent {
            font-size: 1.85rem;
            font-weight: 900;
            color: var(--text-primary);
            line-height: 1;
        }
        .chart-label .sub {
            font-size: 0.65rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--text-secondary);
            margin-top: 0.25rem;
            font-weight: 700;
        }

        /* --- TABLES --- */
        .table-responsive {
            width: 100%;
            overflow-x: auto;
        }
        .data-table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
            font-size: 0.825rem;
        }
        .data-table th {
            padding: 0.75rem 1rem;
            color: var(--text-secondary);
            font-weight: 700;
            text-transform: uppercase;
            font-size: 0.65rem;
            letter-spacing: 0.05em;
            border-bottom: 2px solid var(--border-color);
        }
        .data-table td {
            padding: 1rem;
            border-bottom: 1px solid var(--border-color);
            vertical-align: middle;
        }

        /* Status Badge */
        .status-pill {
            display: inline-block;
            padding: 0.25rem 0.625rem;
            border-radius: 6px;
            font-size: 0.65rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        .status-pill.approved {
            background-color: var(--emerald-light);
            color: var(--emerald);
        }
        .status-pill.progress {
            background-color: var(--amber-light);
            color: var(--amber);
        }
        .status-pill.review {
            background-color: var(--primary-light);
            color: var(--primary);
        }

        /* --- FORMS & SLIDERS --- */
        .form-group {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            margin-bottom: 1.25rem;
        }
        .form-label {
            font-size: 0.75rem;
            font-weight: 700;
            color: var(--text-secondary);
        }
        .form-control, .form-select {
            width: 100%;
            padding: 0.75rem 1rem;
            border-radius: 12px;
            border: 1px solid var(--border-color);
            background-color: var(--bg-card);
            color: var(--text-primary);
            font-family: inherit;
            font-size: 0.825rem;
            outline: none;
            transition: var(--transition);
        }
        .form-control:focus, .form-select:focus {
            border-color: var(--primary);
            box-shadow: 0 0 0 3px var(--primary-light);
        }

        .range-slider {
            width: 100%;
            height: 6px;
            background: var(--border-color);
            border-radius: 999px;
            outline: none;
            accent-color: var(--primary);
            cursor: pointer;
        }

        /* --- TOAST SYSTEM --- */
        .toast {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            z-index: 100;
            background-color: #0f172a;
            color: #ffffff;
            padding: 1rem 1.5rem;
            border-radius: 16px;
            box-shadow: var(--shadow-lg);
            display: flex;
            align-items: center;
            gap: 0.75rem;
            transform: translateY(150%);
            opacity: 0;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .toast.show {
            transform: translateY(0);
            opacity: 1;
        }

        /* --- RESPONISVENESS & HIDING --- */
        .hidden {
            display: none !important;
        }
        @media (max-width: 1024px) {
            .lg-col-9 { grid-column: span 12 / span 12; }
            .lg-col-3 { display: none; }
        }
        @media (min-width: 1025px) {
            .lg-col-9 { grid-column: span 9 / span 12; }
            .lg-col-3 { grid-column: span 3 / span 12; }
        }
    </style>
</head>
<body>

    <!-- 
      ========================================================================
      2. HTML MARKUP (Copy from here down to the script tag into your file)
      ========================================================================
    -->
    <!-- TOP NAVIGATION HEADER -->
    <header class="app-header">
        <div class="container header-content">
            <a href="javascript:void(0)" onclick="switchTab('dashboard')" class="brand-logo">
                <div class="logo-box">🏡</div>
                <div class="brand-text">
                    <h1>HLMS</h1>
                    <p>Housing Loan Management</p>
                </div>
            </a>

            <div class="header-actions">
                <!-- Theme toggle -->
                <button onclick="toggleDarkMode()" class="btn-icon" title="Toggle Theme">
                    <span id="sun-icon" class="hidden">☀️</span>
                    <span id="moon-icon">🌙</span>
                </button>

                <!-- Notifications dropdown control -->
                <button onclick="toggleNotifications()" class="btn-icon" id="notif-btn">
                    <span>🔔</span>
                    <span id="notif-badge" class="badge">3</span>
                </button>

                <!-- User Account Profile info -->
                <button onclick="switchTab('profile-settings')" class="user-pill">
                    <img id="header-avatar" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80" alt="Avatar" class="user-avatar">
                    <span id="header-username">John Doe</span>
                </button>
            </div>
        </div>
    </header>

    <!-- MAIN DASHBOARD CONTENT AREA -->
    <main class="container" style="padding-top: 2rem; padding-bottom: 4rem; flex: 1;">
        <div class="grid-12">
            
            <!-- LEFT NAVIGATION SIDEBAR -->
            <aside class="lg-col-3 sidebar">
                <nav class="nav-menu">
                    <button onclick="switchTab('dashboard')" id="nav-dashboard" class="nav-link active">📊 Dashboard</button>
                    <button onclick="switchTab('guidance')" id="nav-guidance" class="nav-link">📖 Loan Guidance</button>
                    <button onclick="switchTab('eligibility')" id="nav-eligibility" class="nav-link">⚖️ Check Eligibility</button>
                    <button onclick="switchTab('apply')" id="nav-apply" class="nav-link">✍️ Apply for Loan</button>
                    <button onclick="switchTab('repayment')" id="nav-repayment" class="nav-link">📅 Amortization Matrix</button>
                    <button onclick="switchTab('documents')" id="nav-documents" class="nav-link">📁 Documents Vault</button>
                    <button onclick="switchTab('support')" id="nav-support" class="nav-link">💬 Help Desk</button>
                    <button onclick="switchTab('profile-settings')" id="nav-profile-settings" class="nav-link">⚙️ Profile Settings</button>
                </nav>

                <div class="card" style="background: linear-gradient(135deg, var(--primary) 0%, #4f46e5 100%); color: #ffffff;">
                    <h4 style="font-weight: 800; margin-bottom: 0.5rem;">Need Assistance?</h4>
                    <p style="font-size: 0.75rem; opacity: 0.85; line-height: 1.5; margin-bottom: 1rem;">Our mortgage specialists are online to verify and validate your property deeds.</p>
                    <button onclick="switchTab('support')" class="btn-primary" style="background: #ffffff; color: var(--primary); font-size: 0.75rem; width: 100%; box-shadow: none;">Contact Officer</button>
                </div>
            </aside>

            <!-- PRIMARY DESIRED PAGE WORKSPACE -->
            <section class="lg-col-9" style="display: flex; flex-direction: column; gap: 2rem;">

                <!-- ==================== TAB 1: DASHBOARD ==================== -->
                <div id="tab-dashboard" class="tab-pane" style="display: flex; flex-direction: column; gap: 2rem;">
                    
                    <!-- Welcome Block banner -->
                    <div class="card welcome-banner" style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; flex-wrap: wrap;">
                        <div>
                            <h2 style="font-size: 1.5rem; font-weight: 800; letter-spacing: -0.025em;">Welcome back, <span id="welcome-username">John Doe</span>! 👋</h2>
                            <p style="color: var(--text-secondary); font-size: 0.825rem; margin-top: 0.25rem;">Here is a comprehensive summary of your active residential housing mortgage dossier.</p>
                        </div>
                        <button onclick="switchTab('apply')" class="btn-primary">Apply for New Loan</button>
                    </div>

                    <!-- 5-COLUMN METRIC ROW -->
                    <div class="metrics-container">
                        <!-- Stat 1 -->
                        <div class="metric-card">
                            <h4>Active Loans</h4>
                            <div id="metric-active" class="metric-value">1</div>
                            <a href="javascript:void(0)" onclick="switchTab('repayment')" style="font-size: 0.75rem; color: var(--primary); text-decoration: none; font-weight: 700;">Details &rarr;</a>
                        </div>
                        <!-- Stat 2 -->
                        <div class="metric-card">
                            <h4>Applications</h4>
                            <div id="metric-apps" class="metric-value">2</div>
                            <a href="javascript:void(0)" onclick="switchTab('dashboard')" style="font-size: 0.75rem; color: var(--primary); text-decoration: none; font-weight: 700;">Track &rarr;</a>
                        </div>
                        <!-- Stat 3 -->
                        <div class="metric-card">
                            <h4>EMI Paid</h4>
                            <div id="metric-paid" class="metric-value">12</div>
                            <p style="font-size: 0.65rem; color: var(--text-secondary);">This Fiscal Year</p>
                        </div>
                        <!-- Stat 4 -->
                        <div class="metric-card">
                            <h4>Next EMI Due</h4>
                            <div class="metric-value" style="font-size: 1.35rem;">₹ 18,750</div>
                            <p style="font-size: 0.65rem; color: var(--amber); font-weight: 700;">On 05 Jun 2024</p>
                        </div>
                        <!-- Stat 5 -->
                        <div class="metric-card">
                            <h4>Outstanding</h4>
                            <div class="metric-value" style="font-size: 1.25rem;">₹ 8,45,230</div>
                            <a href="javascript:void(0)" onclick="switchTab('repayment')" style="font-size: 0.75rem; color: var(--primary); text-decoration: none; font-weight: 700;">Amortized &rarr;</a>
                        </div>
                    </div>

                    <!-- CARD MIDDLE DECK GRID -->
                    <div style="display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 1.5rem;">
                        
                        <!-- Portfolio house profile card -->
                        <div class="card" style="grid-column: span 12; @media (min-width: 768px) { grid-column: span 7; } display: flex; flex-direction: column; justify-content: space-between;">
                            <div>
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                                    <h3 style="font-weight: 800; font-size: 1.125rem;">Loan Portfolio Overview</h3>
                                    <span class="status-pill approved">Active</span>
                                </div>

                                <div style="display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 1rem; align-items: center;">
                                    <div class="house-svg-wrapper" style="grid-column: span 5;">
                                        <!-- Mini Architectural House Vector Graphic -->
                                        <svg viewBox="0 0 200 160" style="width: 100%; height: auto; max-height: 120px;" fill="none" stroke="currentColor" stroke-width="2">
                                            <rect x="25" y="70" width="150" height="70" rx="4" stroke="var(--text-secondary)" />
                                            <path d="M15 70 L100 25 L185 70 Z" stroke="var(--primary)" fill="var(--primary-light)" stroke-width="2.5" />
                                            <rect x="105" y="90" width="25" height="50" stroke="var(--primary)" fill="var(--bg-card)" />
                                            <circle cx="120" cy="115" r="2.5" fill="var(--primary)" />
                                            <rect x="145" y="90" width="20" height="25" stroke="var(--text-secondary)" />
                                            <line x1="155" y1="90" x2="155" y2="115" stroke="var(--text-secondary)" />
                                            <line x1="145" y1="102" x2="165" y2="102" stroke="var(--text-secondary)" />
                                        </svg>
                                    </div>

                                    <div style="grid-column: span 7; display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.75rem;">
                                        <div style="display: flex; justify-content: space-between; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.25rem;">
                                            <span style="color: var(--text-secondary);">Loan Acc No.</span>
                                            <span style="font-weight: 700;">HL1234567890</span>
                                        </div>
                                        <div style="display: flex; justify-content: space-between; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.25rem;">
                                            <span style="color: var(--text-secondary);">Sanctioned</span>
                                            <span style="font-weight: 700;">₹ 20,00,000</span>
                                        </div>
                                        <div style="display: flex; justify-content: space-between; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.25rem;">
                                            <span style="color: var(--text-secondary);">Interest Rate</span>
                                            <span style="font-weight: 700;">8.50% p.a.</span>
                                        </div>
                                        <div style="display: flex; justify-content: space-between; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.25rem;">
                                            <span style="color: var(--text-secondary);">Loan Tenure</span>
                                            <span style="font-weight: 700;">20 Years</span>
                                        </div>
                                        <div style="display: flex; justify-content: space-between; padding-bottom: 0.25rem;">
                                            <span style="color: var(--text-secondary);">Disbursed</span>
                                            <span style="font-weight: 700; color: var(--emerald);">₹ 11,54,770</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button onclick="switchTab('repayment')" class="btn-primary" style="background: var(--bg-primary); color: var(--text-primary); border: 1px solid var(--border-color); margin-top: 1.5rem; box-shadow: none;">View Full Schedule Matrix</button>
                        </div>

                        <!-- Progress indicator ring visual -->
                        <div class="card" style="grid-column: span 12; @media (min-width: 768px) { grid-column: span 5; } display: flex; flex-direction: column; justify-content: space-between; text-align: center;">
                            <div>
                                <h3 style="font-weight: 800; font-size: 1.125rem; text-align: left; margin-bottom: 1rem;">EMI Payment Progress</h3>
                                
                                <div class="chart-box">
                                    <svg class="donut-chart" viewBox="0 0 120 120" style="width: 140px; height: 140px; transform: rotate(-90deg);">
                                        <circle cx="60" cy="60" r="54" class="donut-ring" stroke-width="12" fill="transparent" />
                                        <circle id="progress-indicator-circle" cx="60" cy="60" r="54" class="donut-segment" stroke-width="12" fill="transparent" />
                                    </svg>
                                    <div class="chart-label">
                                        <span id="chart-percent" class="percent">60%</span>
                                        <span class="sub">Paid</span>
                                    </div>
                                </div>

                                <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.75rem; text-align: left; margin-top: 1rem;">
                                    <div style="display: flex; justify-content: space-between; align-items: center;">
                                        <span style="color: var(--text-secondary);">✔️ EMI Paid</span>
                                        <span id="label-emi-paid" style="font-weight: 700;">12 (60%)</span>
                                    </div>
                                    <div style="display: flex; justify-content: space-between; align-items: center;">
                                        <span style="color: var(--text-secondary);">⏳ Remaining</span>
                                        <span id="label-emi-remaining" style="font-weight: 700;">8 (40%)</span>
                                    </div>
                                </div>
                            </div>

                            <button onclick="logSimulatedRepayment()" class="btn-primary" style="margin-top: 1.5rem; width: 100%;">Log Prepayment Receipt</button>
                        </div>

                    </div>

                    <!-- BOTTOM DECK: RECENT APPLICATIONS LIST -->
                    <div class="card">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                            <h3 style="font-weight: 800; font-size: 1.125rem;">Recent Loan Applications</h3>
                            <button onclick="switchTab('apply')" style="background: transparent; border: none; font-size: 0.75rem; color: var(--primary); font-weight: 700; cursor: pointer;">Apply New &rarr;</button>
                        </div>

                        <div class="table-responsive">
                            <table class="data-table">
                                <thead>
                                    <tr>
                                        <th>Application ID</th>
                                        <th>Loan Category</th>
                                        <th>Status Badge</th>
                                        <th>Applied Date</th>
                                        <th style="text-align: right;">Action</th>
                                    </tr>
                                </thead>
                                <tbody id="apps-table-body">
                                    <!-- Populated from JS -->
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

                <!-- ==================== TAB 2: LOAN GUIDANCE ==================== -->
                <div id="tab-guidance" class="tab-pane hidden card">
                    <h2 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 0.5rem;">📖 Housing Loan Guidance Portfolio</h2>
                    <p style="color: var(--text-secondary); font-size: 0.825rem; margin-bottom: 1.5rem;">Follow our systematic procedures and compile required files to expedite approvals.</p>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
                        <div style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 16px;">
                            <span style="font-size: 1.5rem;">📍</span>
                            <h4 style="font-weight: 800; margin: 0.5rem 0 0.25rem 0;">Phase 1: Eligibility</h4>
                            <p style="font-size: 0.75rem; color: var(--text-secondary); line-height: 1.4;">Check target debt to income ratio parameters and establish maximum borrowing capability limit.</p>
                        </div>
                        <div style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 16px;">
                            <span style="font-size: 1.5rem;">📄</span>
                            <h4 style="font-weight: 800; margin: 0.5rem 0 0.25rem 0;">Phase 2: Documents</h4>
                            <p style="font-size: 0.75rem; color: var(--text-secondary); line-height: 1.4;">Compile income statements, tax registers, title deeds, and property purchase blueprints.</p>
                        </div>
                        <div style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 16px;">
                            <span style="font-size: 1.5rem;">⚡</span>
                            <h4 style="font-weight: 800; margin: 0.5rem 0 0.25rem 0;">Phase 3: Sanctions</h4>
                            <p style="font-size: 0.75rem; color: var(--text-secondary); line-height: 1.4;">Our legal evaluation validates boundaries. Upon checking out complete safety, cash gets disbursed.</p>
                        </div>
                    </div>
                </div>

                <!-- ==================== TAB 3: CHECK ELIGIBILITY ==================== -->
                <div id="tab-eligibility" class="tab-pane hidden grid-12">
                    
                    <!-- Left adjustments -->
                    <div class="card" style="grid-column: span 12; @media (min-width: 768px) { grid-column: span 7; } display: flex; flex-direction: column; gap: 1.5rem;">
                        <div>
                            <h2 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 0.5rem;">⚖️ Premium Borrowing Capability Tool</h2>
                            <p style="color: var(--text-secondary); font-size: 0.825rem;">Adjust parameters live to analyze maximum loan limits and approval probabilities.</p>
                        </div>

                        <!-- Income Slider -->
                        <div class="form-group">
                            <div style="display: flex; justify-content: space-between; font-size: 0.75rem; font-weight: 700;">
                                <span>Monthly Net Income:</span>
                                <span id="label-income-slider" style="color: var(--primary);">₹ 75,000</span>
                            </div>
                            <input type="range" id="slider-income" min="15000" max="500000" step="5000" value="75000" class="range-slider" oninput="calculateEligibilityScore()">
                        </div>

                        <!-- Debts Slider -->
                        <div class="form-group">
                            <div style="display: flex; justify-content: space-between; font-size: 0.75rem; font-weight: 700;">
                                <span>Existing Monthly Obligations:</span>
                                <span id="label-debts-slider" style="color: var(--red);">₹ 10,000</span>
                            </div>
                            <input type="range" id="slider-debts" min="0" max="150000" step="1000" value="10000" class="range-slider" oninput="calculateEligibilityScore()">
                        </div>

                        <!-- Interest rate -->
                        <div class="form-group">
                            <div style="display: flex; justify-content: space-between; font-size: 0.75rem; font-weight: 700;">
                                <span>Annual Interest Rate (%):</span>
                                <span id="label-rate-slider" style="color: var(--primary);">8.50%</span>
                            </div>
                            <input type="range" id="slider-rate" min="5" max="15" step="0.1" value="8.5" class="range-slider" oninput="calculateEligibilityScore()">
                        </div>

                        <!-- Tenure Slider -->
                        <div class="form-group">
                            <div style="display: flex; justify-content: space-between; font-size: 0.75rem; font-weight: 700;">
                                <span>Preferred Tenure (Years):</span>
                                <span id="label-tenure-slider" style="color: var(--primary);">20 Years</span>
                            </div>
                            <input type="range" id="slider-tenure" min="5" max="30" step="1" value="20" class="range-slider" oninput="calculateEligibilityScore()">
                        </div>
                    </div>

                    <!-- Right eligibility scores card -->
                    <div class="card" style="grid-column: span 12; @media (min-width: 768px) { grid-column: span 5; } background-color: #0f172a; color: #ffffff; display: flex; flex-direction: column; justify-content: space-between;">
                        <div>
                            <h3 style="font-weight: 800; font-size: 1.125rem; border-bottom: 1px solid #1e293b; padding-bottom: 1rem; margin-bottom: 1.5rem;">Dossier Assessment</h3>
                            
                            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                                <div>
                                    <span style="font-size: 0.65rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700;">Max Eligible Loan</span>
                                    <div id="result-max-loan" style="font-size: 2rem; font-weight: 900; color: var(--primary); margin-top: 0.25rem;">₹ 34,50,000</div>
                                </div>

                                <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem;">
                                    <div>
                                        <span style="font-size: 0.65rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700;">Installment Cap</span>
                                        <div id="result-emi-cap" style="font-size: 1rem; font-weight: 800; margin-top: 0.25rem;">₹ 27,500</div>
                                    </div>
                                    <div>
                                        <span style="font-size: 0.65rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700;">Approval rate</span>
                                        <div id="result-probability" style="font-size: 0.85rem; font-weight: 800; color: var(--emerald); margin-top: 0.25rem;">High Probability</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style="margin-top: 2rem; border-t: 1px solid #1e293b; padding-top: 1.5rem;">
                            <button onclick="applyCalculatedEligibility()" class="btn-primary" style="width: 100%;">Apply With This Limit</button>
                        </div>
                    </div>

                </div>

                <!-- ==================== TAB 4: APPLY FOR LOAN ==================== -->
                <div id="tab-apply" class="tab-pane hidden card" style="max-w: 640px; margin: 0 auto; width: 100%;">
                    <h2 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 0.5rem;">✍️ Start Mortgage Registration</h2>
                    <p style="color: var(--text-secondary); font-size: 0.825rem; margin-bottom: 1.5rem;">Fill out verification credentials to lock down dynamic rates.</p>

                    <form id="loan-form" onsubmit="handleApplySubmit(event)" style="display: flex; flex-direction: column; gap: 1rem;">
                        <div class="form-group">
                            <label class="form-label">Applicant Legal Name</label>
                            <input type="text" id="form-name" required value="John Doe" class="form-control">
                        </div>

                        <div class="form-group">
                            <label class="form-label">Requested Principal Amount (₹)</label>
                            <input type="number" id="form-amount" required value="4500000" min="50000" class="form-control">
                        </div>

                        <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem;">
                            <div class="form-group">
                                <label class="form-label">Loan Classification</label>
                                <select id="form-type" class="form-select">
                                    <option value="Home Loan" selected>Home Loan</option>
                                    <option value="Plot Purchase">Plot Purchase</option>
                                    <option value="Home Renovation">Home Renovation</option>
                                    <option value="Home Loan Top-Up">Top-Up</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Tenure Duration</label>
                                <select id="form-tenure" class="form-select">
                                    <option value="5">5 Years</option>
                                    <option value="10">10 Years</option>
                                    <option value="15">15 Years</option>
                                    <option value="20" selected>20 Years</option>
                                    <option value="30">30 Years</option>
                                </select>
                            </div>
                        </div>

                        <div style="display: flex; gap: 0.75rem; align-items: flex-start; margin: 0.5rem 0; font-size: 0.75rem;">
                            <input type="checkbox" id="form-consent" required style="width: 16px; height: 16px; margin-top: 2px; accent-color: var(--primary);">
                            <label for="form-consent" style="color: var(--text-secondary); line-height: 1.4;">I certify that the financial records provided map precisely to active tax returns.</label>
                        </div>

                        <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                            <button type="submit" class="btn-primary" style="flex: 1;">Register Application</button>
                            <button type="button" onclick="switchTab('dashboard')" class="btn-primary" style="background: var(--bg-primary); color: var(--text-primary); border: 1px solid var(--border-color); box-shadow: none;">Cancel</button>
                        </div>
                    </form>
                </div>

                <!-- ==================== TAB 5: REPAYMENT SCHEDULE ==================== -->
                <div id="tab-repayment" class="tab-pane hidden card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                        <div>
                            <h2 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 0.25rem;">📈 Portfolio Amortization Schedule</h2>
                            <p style="color: var(--text-secondary); font-size: 0.825rem;">Review projected installments split between principal and interest deductions.</p>
                        </div>
                        <button onclick="logSimulatedRepayment()" class="btn-primary">Prepay Installment</button>
                    </div>

                    <div class="table-responsive">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>Installment ID</th>
                                    <th>EMI Amount</th>
                                    <th>Principal Part</th>
                                    <th>Interest Part</th>
                                    <th>Balance Outstanding</th>
                                    <th style="text-align: right;">Status</th>
                                </tr>
                            </thead>
                            <tbody id="amortization-table-body">
                                <!-- Populated from JS -->
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- ==================== TAB 6: DOCUMENTS VAULT ==================== -->
                <div id="tab-documents" class="tab-pane hidden grid-12">
                    
                    <!-- Upload widget left -->
                    <div class="card" style="grid-column: span 12; @media (min-width: 768px) { grid-column: span 4; } display: flex; flex-direction: column; gap: 1.5rem;">
                        <div>
                            <h3 style="font-weight: 800; font-size: 1.125rem; margin-bottom: 0.25rem;">File Upload</h3>
                            <p style="color: var(--text-secondary); font-size: 0.75rem;">Upload properties or bank registers to secure databases.</p>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Classification Tag</label>
                            <select id="upload-doc-tag" class="form-select">
                                <option value="Identity Proof">Identity Proof</option>
                                <option value="Income Proof">Income Proof</option>
                                <option value="Property Document">Property Deed</option>
                            </select>
                        </div>

                        <!-- Drop zone drag vector mock -->
                        <div onclick="simulateDocUpload()" style="border: 2px dashed var(--border-color); border-radius: 16px; padding: 2rem; text-align: center; cursor: pointer; transition: var(--transition); background: var(--bg-primary);">
                            <span style="font-size: 2rem; display: block; margin-bottom: 0.5rem;">📤</span>
                            <span style="font-size: 0.75rem; font-weight: 700; display: block; color: var(--text-primary);">Click to upload file</span>
                            <span style="font-size: 0.65rem; color: var(--text-secondary); display: block; margin-top: 0.25rem;">PDF, PNG, JPG (Max 10MB)</span>
                        </div>
                    </div>

                    <!-- Repository table right -->
                    <div class="card" style="grid-column: span 12; @media (min-width: 768px) { grid-column: span 8; }">
                        <h3 style="font-weight: 800; font-size: 1.125rem; margin-bottom: 1.5rem;">Repository Vault</h3>

                        <div class="table-responsive">
                            <table class="data-table">
                                <thead>
                                    <tr>
                                        <th>File Name</th>
                                        <th>Tag Category</th>
                                        <th>Validation Status</th>
                                        <th style="text-align: right;">Action</th>
                                    </tr>
                                </thead>
                                <tbody id="docs-table-body">
                                    <!-- Populated from JS -->
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

                <!-- ==================== TAB 7: SUPPORT / HELP DESK ==================== -->
                <div id="tab-support" class="tab-pane hidden grid-12">
                    
                    <!-- Left FAQ elements -->
                    <div class="card" style="grid-column: span 12; @media (min-width: 768px) { grid-column: span 7; } display: flex; flex-direction: column; gap: 1.5rem;">
                        <h2 style="font-size: 1.25rem; font-weight: 800;">🔍 FAQs & Clarifications</h2>
                        
                        <div style="display: flex; flex-direction: column; gap: 1rem; font-size: 0.75rem; line-height: 1.5;">
                            <div style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 12px; background: var(--bg-primary);">
                                <h4 style="font-weight: 800; font-size: 0.825rem; margin-bottom: 0.25rem;">How does partial prepayment impact total interest?</h4>
                                <p style="color: var(--text-secondary);">Logging prepayment deductions updates outstanding principals, instantly shifting subsequent amortization cycles to deduct less interest and more principal!</p>
                            </div>
                            <div style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 12px; background: var(--bg-primary);">
                                <h4 style="font-weight: 800; font-size: 0.825rem; margin-bottom: 0.25rem;">What documentation speeds up validation?</h4>
                                <p style="color: var(--text-secondary);">Uploading Form 16 statements and structural property NOC papers directly in your Documents Vault expedites clearances down to 48 hours.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Right Submit Ticket -->
                    <div class="card" style="grid-column: span 12; @media (min-width: 768px) { grid-column: span 5; }">
                        <h3 style="font-weight: 800; font-size: 1.125rem; margin-bottom: 1rem;">Dispatched Support Ticket</h3>

                        <form id="support-form" onsubmit="handleSupportSubmit(event)" style="display: flex; flex-direction: column; gap: 1rem;">
                            <div class="form-group">
                                <label class="form-label">Subject Category</label>
                                <input type="text" id="support-subject" required placeholder="e.g. Disbursal timeline queries" class="form-control">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Message Details</label>
                                <textarea id="support-message" required rows="4" placeholder="Clarify parameters here..." class="form-control" style="resize: none;"></textarea>
                            </div>

                            <button type="submit" class="btn-primary" style="width: 100%;">Dispatch Help Desk Ticket</button>
                        </form>
                    </div>

                </div>

                <!-- ==================== TAB 8: PROFILE SETTINGS ==================== -->
                <div id="tab-profile-settings" class="tab-pane hidden card" style="max-w: 640px; margin: 0 auto; width: 100%;">
                    <h2 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 0.5rem;">⚙️ Profile Settings</h2>
                    <p style="color: var(--text-secondary); font-size: 0.825rem; margin-bottom: 1.5rem;">Update portfolio handles. Changes propagate across workspace indicators instantly.</p>

                    <div style="display: flex; flex-direction: column; gap: 1.25rem;">
                        <div class="form-group">
                            <label class="form-label">Profile Image URL</label>
                            <input type="text" id="profile-avatar" class="form-control" value="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80">
                        </div>

                        <div class="form-group">
                            <label class="form-label">Profile Full Name</label>
                            <input type="text" id="profile-fullname" required value="John Doe" class="form-control">
                        </div>

                        <div class="form-group">
                            <label class="form-label">Primary Email Coordinates</label>
                            <input type="email" id="profile-email" required value="john.doe@gmail.com" class="form-control">
                        </div>

                        <button onclick="saveProfileChanges()" class="btn-primary" style="margin-top: 1rem;">Save Portfolio Changes</button>
                    </div>
                </div>

            </section>
        </div>
    </main>

    <!-- FOOTER -->
    <footer style="background-color: var(--bg-card); border-top: 1px solid var(--border-color); padding: 2rem 0; font-size: 0.75rem; text-align: center; color: var(--text-secondary); transition: var(--transition);">
        <div class="container" style="display: flex; flex-direction: column; gap: 1rem;">
            <p><strong>HLMS Portfolio Dashboard Manager</strong>. Designed to cleanly separate structure from styling logic.</p>
            <p style="font-size: 0.65rem; opacity: 0.7;">© 2026 HLMS. All rights reserved.</p>
        </div>
    </footer>

    <!-- TOAST POPUP NOTIFICATION -->
    <div id="toast-notif" class="toast">
        <span id="toast-icon">✨</span>
        <span id="toast-message-text">Message</span>
    </div>

    <!-- 
      ========================================================================
      3. JAVASCRIPT CODE (Copy this block entirely into your 'app.js' file)
      ========================================================================
    -->
    <script>
        // --- DYNAMIC DATA STATE STORE ---
        let appState = {
            user: {
                name: "John Doe",
                email: "john.doe@gmail.com",
                avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80"
            },
            applications: [
                { id: "HL1234", type: "Home Loan", status: "In Progress", appliedOn: "20 May 2024", amount: 4500000, tenure: 20 },
                { id: "HL1122", type: "Home Loan", status: "Under Review", appliedOn: "10 Apr 2024", amount: 3500000, tenure: 15 },
                { id: "HL0987", type: "Home Loan Top-Up", status: "Approved", appliedOn: "15 Mar 2024", amount: 1500000, tenure: 10 }
            ],
            documents: [
                { id: "DOC-101", name: "Aadhaar_John_Doe.pdf", tag: "Identity Proof", status: "Verified" },
                { id: "DOC-102", name: "IT_Returns_FY24.pdf", tag: "Income Proof", status: "Verified" },
                { id: "DOC-103", name: "Registry_SaleDeed.pdf", tag: "Property Document", status: "Under Review" }
            ],
            emiPaidCount: 12,
            emiTotalCount: 20,
            darkMode: false
        };

        // Initialize App Dashboard
        window.addEventListener('DOMContentLoaded', () => {
            renderMainDashboard();
            calculateEligibilityScore();
        });

        // --- RENDER FUNCTIONS ---
        function renderMainDashboard() {
            // Profile Sync
            document.getElementById('header-avatar').src = appState.user.avatar;
            document.getElementById('header-username').innerText = appState.user.name;
            document.getElementById('welcome-username').innerText = appState.user.name;
            document.getElementById('profile-avatar').value = appState.user.avatar;
            document.getElementById('profile-fullname').value = appState.user.name;
            document.getElementById('profile-email').value = appState.user.email;

            // Metrics Count
            document.getElementById('metric-apps').innerText = appState.applications.length;
            document.getElementById('metric-paid').innerText = appState.emiPaidCount;

            // Tables Redraw
            renderApplicationsTable();
            renderAmortizationSchedule();
            renderDocumentsVault();
            updateDonutProgressChart();
        }

        // Render dashboard applications table
        function renderApplicationsTable() {
            const tbody = document.getElementById('apps-table-body');
            tbody.innerHTML = '';

            appState.applications.forEach(app => {
                let badgeClass = 'status-pill review';
                if (app.status === 'Approved') badgeClass = 'status-pill approved';
                if (app.status === 'In Progress') badgeClass = 'status-pill progress';

                tbody.innerHTML += `
                    <tr>
                        <td style="font-weight: 700; color: var(--text-primary);">${app.id}</td>
                        <td>${app.type}</td>
                        <td><span class="${badgeClass}">${app.status}</span></td>
                        <td>${app.appliedOn}</td>
                        <td style="text-align: right;">
                            <button onclick="triggerToast('Viewing application audit log details of ${app.id} ...', '📂')" class="btn-primary" style="padding: 0.4rem 0.8rem; font-size: 0.7rem; box-shadow: none;">View File</button>
                        </td>
                    </tr>
                `;
            });
        }

        // Render documents hub table
        function renderDocumentsVault() {
            const tbody = document.getElementById('docs-table-body');
            tbody.innerHTML = '';

            appState.documents.forEach(doc => {
                let badgeClass = 'status-pill review';
                if (doc.status === 'Verified') badgeClass = 'status-pill approved';

                tbody.innerHTML += `
                    <tr>
                        <td style="font-weight: 700; color: var(--text-primary);">${doc.name}</td>
                        <td>${doc.tag}</td>
                        <td><span class="${badgeClass}">${doc.status}</span></td>
                        <td style="text-align: right;">
                            <button onclick="triggerToast('Simulating download of file ${doc.name}...', '📥')" class="btn-primary" style="padding: 0.4rem 0.8rem; font-size: 0.7rem; box-shadow: none;">Download</button>
                        </td>
                    </tr>
                `;
            });
        }

        // Dynamic Amortization schedule engine
        function renderAmortizationSchedule() {
            const tbody = document.getElementById('amortization-table-body');
            tbody.innerHTML = '';

            const principal = 2000000;
            const rate = 8.5;
            const monthlyEmi = 18750;
            let balance = principal;

            for (let i = 1; i <= 15; i++) {
                const interest = Math.round((balance * (rate / 12)) / 100);
                const principalPart = Math.round(monthlyEmi - interest);
                balance = Math.max(0, balance - principalPart);

                const isPaid = i <= appState.emiPaidCount;
                const statusBadge = isPaid
                    ? `<span class="status-pill approved">Paid</span>`
                    : `<span class="status-pill review" style="color: var(--text-secondary); background: var(--border-color)">Scheduled</span>`;

                tbody.innerHTML += `
                    <tr style="${isPaid ? 'background-color: rgba(16, 185, 129, 0.03)' : ''}">
                        <td style="font-weight: 700;">Installment #${i}</td>
                        <td>₹ ${monthlyEmi.toLocaleString('en-IN')}</td>
                        <td>₹ ${principalPart.toLocaleString('en-IN')}</td>
                        <td>₹ ${interest.toLocaleString('en-IN')}</td>
                        <td style="font-weight: 700;">₹ ${balance.toLocaleString('en-IN')}</td>
                        <td style="text-align: right;">${statusBadge}</td>
                    </tr>
                `;
            }

            tbody.innerHTML += `
                <tr style="text-align: center; color: var(--text-secondary); font-size: 0.7rem;">
                    <td colspan="6" style="padding: 1.5rem 0;">Showing initial 15 billing outputs of 240 amortized months.</td>
                </tr>
            `;
        }

        // Donut circle calculations and redraws
        function updateDonutProgressChart() {
            const percent = Math.round((appState.emiPaidCount / appState.emiTotalCount) * 100);
            document.getElementById('chart-percent').innerText = percent + '%';

            // SVG Circumference adjustment (r=54 -> 339.29 px)
            const circle = document.getElementById('progress-indicator-circle');
            const circumference = 339.29;
            const offset = circumference - (percent / 100) * circumference;
            circle.setAttribute('stroke-dashoffset', offset);

            // Labels update
            document.getElementById('label-emi-paid').innerText = `${appState.emiPaidCount} (${percent}%)`;
            document.getElementById('label-emi-remaining').innerText = `${appState.emiTotalCount - appState.emiPaidCount} (${100 - percent}%)`;
        }

        // Log Simulated prepayment
        function logSimulatedRepayment() {
            if (appState.emiPaidCount >= appState.emiTotalCount) {
                triggerToast("Loan is completely paid off! No balance remains. 🎉", "🥳");
                return;
            }

            appState.emiPaidCount++;
            renderMainDashboard();
            triggerToast(`Prepayment Receipt logged successfully for install #${appState.emiPaidCount}!`, "⚡");
        }

        // --- TABS CONTROLLER ROUTER ---
        function switchTab(tabId) {
            document.querySelectorAll('.tab-pane').forEach(tab => {
                tab.classList.add('hidden');
            });

            const activeTab = document.getElementById(`tab-${tabId}`);
            if (activeTab) {
                activeTab.classList.remove('hidden');
            }

            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });

            const activeLink = document.getElementById(`nav-${tabId}`);
            if (activeLink) {
                activeLink.classList.add('active');
            }

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // --- THEME SWAP SWITCHER ---
        function toggleDarkMode() {
            appState.darkMode = !appState.darkMode;
            const body = document.body;
            const sunIcon = document.getElementById('sun-icon');
            const moonIcon = document.getElementById('moon-icon');

            if (appState.darkMode) {
                body.classList.add('dark');
                sunIcon.classList.remove('hidden');
                moonIcon.classList.add('hidden');
                triggerToast("Dark Theme Activated!", "🌙");
            } else {
                body.classList.remove('dark');
                sunIcon.classList.add('hidden');
                moonIcon.classList.remove('hidden');
                triggerToast("Light Theme Activated!", "☀️");
            }
        }

        // --- ELIGIBILITY CALCULATOR FORMULAS ---
        function calculateEligibilityScore() {
            const income = parseFloat(document.getElementById('slider-income').value);
            const debts = parseFloat(document.getElementById('slider-debts').value);
            const rate = parseFloat(document.getElementById('slider-rate').value);
            const tenureYears = parseInt(document.getElementById('slider-tenure').value);

            // Update range labels
            document.getElementById('label-income-slider').innerText = "₹ " + income.toLocaleString('en-IN');
            document.getElementById('label-debts-slider').innerText = "₹ " + debts.toLocaleString('en-IN');
            document.getElementById('label-rate-slider').innerText = rate.toFixed(2) + "%";
            document.getElementById('label-tenure-slider').innerText = tenureYears + " Years";

            // FOIR Calculations (50% max monthly installment cap)
            const foirLimit = income * 0.50;
            const remainingEmiCapacity = Math.max(0, foirLimit - debts);

            // Back-calculation to Principal limit
            const monthlyRate = (rate / 12) / 100;
            const months = tenureYears * 12;

            let maxLoan = 0;
            if (remainingEmiCapacity > 0) {
                maxLoan = (remainingEmiCapacity * (Math.pow(1 + monthlyRate, months) - 1)) / (monthlyRate * Math.pow(1 + monthlyRate, months));
            }

            // Bind values
            document.getElementById('result-max-loan').innerText = "₹ " + Math.round(maxLoan).toLocaleString('en-IN');
            document.getElementById('result-emi-cap').innerText = "₹ " + Math.round(remainingEmiCapacity).toLocaleString('en-IN');

            const probLabel = document.getElementById('result-probability');
            if (maxLoan > 5000000) {
                probLabel.innerText = "Very High Probability";
                probLabel.style.color = "var(--emerald)";
            } else if (maxLoan > 1500000) {
                probLabel.innerText = "Moderate Capability";
                probLabel.style.color = "var(--amber)";
            } else {
                probLabel.innerText = "Low Probability";
                probLabel.style.color = "var(--red)";
            }
        }

        // Apply slider calculation limits back into registration wizard
        function applyCalculatedEligibility() {
            const income = parseFloat(document.getElementById('slider-income').value);
            const debts = parseFloat(document.getElementById('slider-debts').value);
            const rate = parseFloat(document.getElementById('slider-rate').value);
            const tenureYears = parseInt(document.getElementById('slider-tenure').value);

            const foirLimit = income * 0.50;
            const remainingEmiCapacity = Math.max(0, foirLimit - debts);
            const monthlyRate = (rate / 12) / 100;
            const months = tenureYears * 12;
            const maxLoan = Math.round((remainingEmiCapacity * (Math.pow(1 + monthlyRate, months) - 1)) / (monthlyRate * Math.pow(1 + monthlyRate, months)));

            document.getElementById('form-amount').value = maxLoan;
            document.getElementById('form-tenure').value = tenureYears;

            triggerToast(`Sanction rate lock activated for ₹ ${maxLoan.toLocaleString('en-IN')}!`, "⚖️");
            switchTab('apply');
        }

        // --- SUBMISSION HANDLERS ---
        function handleApplySubmit(event) {
            event.preventDefault();

            const name = document.getElementById('form-name').value.trim();
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Housing Loan Management System | HLMS</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            navy: '#1b3154',        /* Header Deep Navy Blue */
                            bg: '#eae8e4',          /* Warm Beige Canvas Backdrop */
                            sidebarBg: '#f2efea',   /* Soft Light Sidebar Beige */
                            emerald: '#0c825a',     /* Accent Deep Emerald Green */
                            emeraldLight: '#e3ebd9',/* Active tab soft background */
                            border: '#d5d2cb',      /* Slate-beige corporate border */
                            charcoal: '#2e3a47'     /* Text Primary Charcoal */
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <!-- Google Fonts Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <style>
        body {
            background-color: #eae8e4;
            font-family: 'Inter', sans-serif;
            color: #2e3a47;
        }

        /* Clean scrollbars */
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 999px;
        }

        /* --- PURE CSS TAB-ROUTING ENGINE --- */
        .tab-pane {
            display: none !important;
        }

        /* Checkbox-radio state triggers for Side navigation links */
        body:has(#tab-db:checked) #sidebar-db,
        body:has(#tab-guide:checked) #sidebar-guide,
        body:has(#tab-elig:checked) #sidebar-elig,
        body:has(#tab-appl:checked) #sidebar-appl,
        body:has(#tab-track:checked) #sidebar-track,
        body:has(#tab-repay:checked) #sidebar-repay,
        body:has(#tab-post:checked) #sidebar-post,
        body:has(#tab-auction:checked) #sidebar-auction,
        body:has(#tab-docs:checked) #sidebar-docs,
        body:has(#tab-prof:checked) #sidebar-prof,
        body:has(#tab-supp:checked) #sidebar-supp {
            color: #0c825a !important;
            font-weight: 700;
            background-color: #e3ebd9 !important;
            border-left: 4px solid #0c825a;
        }

        /* Panes Visibility Controllers */
        body:has(#tab-db:checked) #pane-db { display: block !important; }
        body:has(#tab-guide:checked) #pane-guide { display: block !important; }
        body:has(#tab-elig:checked) #pane-elig { display: block !important; }
        body:has(#tab-appl:checked) #pane-appl { display: block !important; }
        body:has(#tab-track:checked) #pane-track { display: block !important; }
        body:has(#tab-repay:checked) #pane-repay { display: block !important; }
        body:has(#tab-post:checked) #pane-post { display: block !important; }
        body:has(#tab-auction:checked) #pane-auction { display: block !important; }
        body:has(#tab-docs:checked) #pane-docs { display: block !important; }
        body:has(#tab-prof:checked) #pane-prof { display: block !important; }
        body:has(#tab-supp:checked) #pane-supp { display: block !important; }

        /* Floating effect for assistant mascot */
        @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-6px) rotate(1deg); }
        }
        .mascot-assistant {
            animation: float 4s ease-in-out infinite;
        }
    </style>
</head>
<body class="min-h-screen flex flex-col antialiased">

    <!-- CSS TAB CONTROLLERS (RADIOS) -->
    <input type="radio" name="tabs" id="tab-db" checked class="hidden">
    <input type="radio" name="tabs" id="tab-guide" class="hidden">
    <input type="radio" name="tab-tabs" id="tab-elig" class="hidden">
    <input type="radio" name="tabs" id="tab-appl" class="hidden">
    <input type="radio" name="tabs" id="tab-track" class="hidden">
    <input type="radio" name="tabs" id="tab-repay" class="hidden">
    <input type="radio" name="tabs" id="tab-post" class="hidden">
    <input type="radio" name="tabs" id="tab-auction" class="hidden">
    <input type="radio" name="tabs" id="tab-docs" class="hidden">
    <input type="radio" name="tabs" id="tab-prof" class="hidden">
    <input type="radio" name="tabs" id="tab-supp" class="hidden">

    <!-- DEEP NAVY BLUE HEADER (Exactly matching image reference 1000176651.jpg) -->
    <header class="bg-brand-navy h-16 w-full px-6 flex items-center justify-between sticky top-0 z-50 shadow-md border-b border-slate-800">
        <div class="flex items-center gap-4">
            <!-- Hamburger menu icon -->
            <button class="text-white hover:text-slate-300 transition">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>
            
            <div class="flex flex-col justify-center">
                <div class="flex items-center gap-2">
                    <div class="w-5 h-5 border border-white/50 relative flex items-center justify-center">
                        <span class="text-[9px] text-white font-bold leading-none">L</span>
                        <div class="absolute inset-0 border-t border-b border-white/20 transform rotate-45"></div>
                    </div>
                    <span class="text-white font-extrabold text-lg tracking-tight leading-none">HLMS</span>
                </div>
                <span class="text-slate-400 text-[9px] font-semibold uppercase tracking-wider mt-0.5 leading-none">Housing Loan Management System</span>
            </div>
        </div>

        <!-- Custom Translucent Search Bar -->
        <div class="hidden md:flex items-center flex-1 max-w-md mx-8 relative">
            <span class="absolute left-3.5 text-slate-400">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
            </span>
            <input type="text" placeholder="Search anything..." 
                   class="w-full bg-white/10 border border-slate-700/50 rounded-lg pl-10 pr-4 py-2 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-brand-emerald transition">
        </div>

        <!-- Header Actions -->
        <div class="flex items-center gap-5">
            <button class="text-slate-300 hover:text-white transition">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
            </button>

            <!-- Alerts Badge with counter '3' -->
            <button class="text-slate-300 hover:text-white transition relative">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                </svg>
                <span class="absolute -top-1 -right-1 bg-red-500 text-[8px] font-bold text-white rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </button>

            <span class="text-slate-600">|</span>

            <!-- Profile Info Bubble -->
            <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-full bg-slate-700 text-white font-extrabold text-xs flex items-center justify-center border border-slate-600">
                    JD
                </div>
                <div class="hidden sm:flex items-center gap-1 text-slate-200">
                    <span class="text-xs font-semibold">John Doe</span>
                    <span class="text-[10px]">▼</span>
                </div>
            </div>
        </div>
    </header>

    <!-- MAIN APP WRAPPER -->
    <div class="flex-1 flex flex-col lg:flex-row">
        
        <!-- SIDE NAVIGATION BAR (Styled strictly with screenshot 2 sidebar theme) -->
        <aside class="w-full lg:w-64 bg-brand-sidebarBg border-r border-brand-border/45 p-3.5 space-y-5 flex-shrink-0 flex flex-col justify-between">
            
            <div class="space-y-1">
                <!-- Dashboard active link styled exactly in emerald theme -->
                <label id="sidebar-db" for="tab-db" class="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-600 rounded-lg hover:bg-slate-200/50 transition cursor-pointer">
                    <span class="text-sm">📊</span>
                    <span>Dashboard</span>
                </label>

                <label id="sidebar-guide" for="tab-guide" class="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-600 rounded-lg hover:bg-slate-200/50 transition cursor-pointer">
                    <span class="text-sm">📖</span>
                    <span>Loan Guidance</span>
                </label>

                <label id="sidebar-elig" for="tab-elig" class="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-600 rounded-lg hover:bg-slate-200/50 transition cursor-pointer">
                    <span class="text-sm">⚖️</span>
                    <span>Check Eligibility</span>
                </label>

                <label id="sidebar-appl" for="tab-appl" class="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-600 rounded-lg hover:bg-slate-200/50 transition cursor-pointer">
                    <span class="text-sm">✍️</span>
                    <span>Apply for Loan</span>
                </label>

                <label id="sidebar-track" for="tab-track" class="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-600 rounded-lg hover:bg-slate-200/50 transition cursor-pointer">
                    <span class="text-sm">🔍</span>
                    <span>Loan Status Tracking</span>
                </label>

                <label id="sidebar-repay" for="tab-repay" class="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-600 rounded-lg hover:bg-slate-200/50 transition cursor-pointer">
                    <span class="text-sm">💳</span>
                    <span>Repayment</span>
                </label>

                <!-- Post Disbursement link -->
                <label id="sidebar-post" for="tab-post" class="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-600 rounded-lg hover:bg-slate-200/50 transition cursor-pointer">
                    <span class="text-sm">🏠</span>
                    <span>Post Disbursement</span>
                </label>

                <label id="sidebar-auction" for="tab-auction" class="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-600 rounded-lg hover:bg-slate-200/50 transition cursor-pointer">
                    <span class="text-sm">🔨</span>
                    <span>Auction Management</span>
                </label>

                <!-- Documents with notification badge NEW -->
                <label id="sidebar-docs" for="tab-docs" class="flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-slate-600 rounded-lg hover:bg-slate-200/50 transition cursor-pointer">
                    <div class="flex items-center gap-3">
                        <span class="text-sm">📄</span>
                        <span>Documents</span>
                    </div>
                    <span class="bg-amber-500 text-[8px] font-bold text-white px-1.5 py-0.5 rounded uppercase tracking-wider">NEW</span>
                </label>

                <label id="sidebar-prof" for="tab-prof" class="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-600 rounded-lg hover:bg-slate-200/50 transition cursor-pointer">
                    <span class="text-sm">⚙️</span>
                    <span>Profile Settings</span>
                </label>

                <label id="sidebar-supp" for="tab-supp" class="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-600 rounded-lg hover:bg-slate-200/50 transition cursor-pointer">
                    <span class="text-sm">💬</span>
                    <span>Support / Help</span>
                </label>
            </div>

            <!-- NEED HELP BLOCK (Exactly matching original layout) -->
            <div class="bg-white rounded-xl border border-brand-border/40 p-4 text-center space-y-3">
                <h4 class="text-xs font-black tracking-wider text-slate-400 uppercase">Need Help?</h4>
                <div class="w-10 h-10 mx-auto border border-slate-300 relative flex items-center justify-center">
                    <div class="absolute inset-0 flex items-center justify-center text-slate-300">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                </div>
                <p class="text-[10px] text-slate-500 leading-tight">Our support team is here to assist you.</p>
                <label for="tab-supp" class="w-full py-2 border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg text-[10px] font-bold transition flex items-center justify-center gap-1.5 cursor-pointer">
                    <span>Contact Support</span>
                </label>
            </div>
        </aside>

        <!-- MAIN CENTRAL CONTENT CONTAINER (Warm beige backdrop) -->
        <main class="flex-1 bg-brand-bg p-6 lg:p-8 space-y-6">

            <!-- ==================== PANE 1: DASHBOARD ==================== -->
            <div id="pane-dashboard" class="tab-pane space-y-6">
                <!-- Welcome heading and CTA -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h2 class="text-2xl font-bold tracking-tight text-brand-charcoal">Welcome back, John Doe!</h2>
                        <p class="text-xs text-slate-500 mt-1">Here's an overview of your loan journey.</p>
                    </div>

                    <label id="cta-apply-btn" for="tab-appl" class="px-5 py-2.5 bg-brand-emerald hover:bg-emerald-700 text-white font-bold rounded-lg text-xs tracking-wide transition shadow-sm flex items-center gap-2 cursor-pointer">
                        <span>Apply for New Loan</span>
                    </label>
                </div>

                <!-- 5-COLUMN METRIC ROW -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    <!-- Metric Card 1 -->
                    <div class="bg-white rounded-xl border border-brand-border/40 p-4 shadow-sm flex flex-col justify-between min-h-[130px]">
                        <div class="flex items-center justify-between">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Active Loans</span>
                            <span class="text-sm">🏡</span>
                        </div>
                        <div class="text-3xl font-black text-brand-charcoal my-2">1</div>
                        <label for="tab-post" class="text-[10px] font-bold text-brand-emerald hover:underline cursor-pointer">View Details &rarr;</label>
                    </div>

                    <!-- Metric Card 2 -->
                    <div class="bg-white rounded-xl border border-brand-border/40 p-4 shadow-sm flex flex-col justify-between min-h-[130px]">
                        <div class="flex items-center justify-between">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Applications</span>
                            <span class="text-sm">📄</span>
                        </div>
                        <div class="text-3xl font-black text-brand-charcoal my-2">2</div>
                        <label for="tab-track" class="text-[10px] font-bold text-brand-emerald hover:underline cursor-pointer">View All &rarr;</label>
                    </div>

                    <!-- Metric Card 3 -->
                    <div class="bg-white rounded-xl border border-brand-border/40 p-4 shadow-sm flex flex-col justify-between min-h-[130px]">
                        <div class="flex items-center justify-between">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">EMI Paid</span>
                            <span class="text-sm">✅</span>
                        </div>
                        <div class="text-3xl font-black text-brand-charcoal my-2">12</div>
                        <span class="text-[9px] text-slate-400">This Year</span>
                    </div>

                    <!-- Metric Card 4 -->
                    <div class="bg-white rounded-xl border border-brand-border/40 p-4 shadow-sm flex flex-col justify-between min-h-[130px]">
                        <div class="flex items-center justify-between">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Next EMI Due</span>
                            <span class="text-sm">⏳</span>
                        </div>
                        <div class="text-lg font-black text-brand-charcoal my-2">₹ 18,750</div>
                        <span class="text-[9px] text-slate-400">On 05 Jun 2024</span>
                    </div>

                    <!-- Metric Card 5 -->
                    <div class="bg-white rounded-xl border border-brand-border/40 p-4 shadow-sm flex flex-col justify-between min-h-[130px]">
                        <div class="flex items-center justify-between">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Outstanding Amount</span>
                            <span class="text-sm">📈</span>
                        </div>
                        <div class="text-lg font-black text-brand-charcoal my-2">₹ 8,45,230</div>
                        <label for="tab-repay" class="text-[10px] font-bold text-brand-emerald hover:underline cursor-pointer">View Details &rarr;</label>
                    </div>
                </div>

                <!-- MIDDLE DECK GRID -->
                <div class="grid grid-cols-12 gap-6">
                    
                    <!-- Card A: Loan Overview -->
                    <div class="bg-white rounded-xl border border-brand-border/40 p-5 shadow-sm col-span-12 lg:col-span-5 flex flex-col justify-between gap-4">
                        <div>
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="text-sm font-black tracking-tight text-slate-800">Loan Overview</h3>
                                <span class="px-2 py-0.5 text-[9px] font-bold uppercase rounded bg-brand-emeraldLight text-brand-emerald border border-brand-emerald/10">Active</span>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                                <!-- Minimal Architectural House Vector -->
                                <div class="sm:col-span-5 bg-slate-50/50 rounded-xl p-3 border border-slate-200/60 h-32 flex items-center justify-center">
                                    <svg viewBox="0 0 100 100" class="w-20 h-24 text-brand-emerald" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M10 90 L10 50 L50 20 L90 50 L90 90 Z" />
                                        <path d="M40 90 L40 65 L60 65 L60 90" />
                                        <circle cx="28" cy="48" r="6" />
                                        <circle cx="72" cy="48" r="6" />
                                    </svg>
                                </div>

                                <!-- Metadata grid -->
                                <div class="sm:col-span-7 space-y-1 text-xs">
                                    <div class="flex justify-between border-b border-dashed border-slate-100 pb-1">
                                        <span class="text-slate-400">Home Loan</span> 
                                        <span class="font-bold">Active</span>
                                    </div>
                                    <div class="flex justify-between border-b border-dashed border-slate-100 pb-1">
                                        <span class="text-slate-400">Account No.</span> 
                                        <span class="font-bold">HL1234567890</span>
                                    </div>
                                    <div class="flex justify-between border-b border-dashed border-slate-100 pb-1">
                                        <span class="text-slate-400">Sanctioned Amount</span> 
                                        <span class="font-bold text-slate-800">₹ 20,00,000</span>
                                    </div>
                                    <div class="flex justify-between border-b border-dashed border-slate-100 pb-1">
                                        <span class="text-slate-400">Interest Rate</span> 
                                        <span class="font-bold text-slate-800">8.50% p.a.</span>
                                    </div>
                                    <div class="flex justify-between border-b border-dashed border-slate-100 pb-1">
                                        <span class="text-slate-400">Loan Tenure</span> 
                                        <span class="font-bold text-slate-800">20 Years</span>
                                    </div>
                                    <div class="flex justify-between border-b border-dashed border-slate-100 pb-1">
                                        <span class="text-slate-400">EMI Amount</span> 
                                        <span class="font-bold text-slate-800">₹ 18,750</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-slate-400">Disbursed Amount</span> 
                                        <span class="font-bold text-brand-emerald">₹ 11,54,770</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <label for="tab-post" class="w-full text-center py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer">
                            <span>View Loan Details</span>
                        </label>
                    </div>

                    <!-- Card B: EMI Payment Progress -->
                    <div class="bg-white rounded-xl border border-brand-border/40 p-5 shadow-sm col-span-12 lg:col-span-3 flex flex-col justify-between text-center">
                        <div>
                            <h3 class="text-xs font-black uppercase text-slate-400 tracking-wider text-left mb-4">EMI Payment Progress</h3>
                            
                            <div class="relative flex items-center justify-center py-2">
                                <svg class="w-28 h-28 transform -rotate-90">
                                    <circle cx="56" cy="56" r="44" class="stroke-slate-100" stroke-width="10" fill="transparent"/>
                                    <circle cx="56" cy="56" r="44" class="stroke-brand-emerald" stroke-width="10" fill="transparent"
                                            stroke-dasharray="276.46" stroke-dashoffset="110.58"/> <!-- 60% Paid -->
                                </svg>
                                <div class="absolute flex flex-col items-center justify-center text-center">
                                    <span class="text-2xl font-black text-slate-800 leading-none">60%</span>
                                    <span class="text-[9px] text-slate-400 uppercase tracking-widest font-semibold mt-1">Paid</span>
                                </div>
                            </div>

                            <div class="space-y-2 mt-4 text-xs text-left">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-2">
                                        <span class="text-brand-emerald font-bold">✔</span>
                                        <span class="text-slate-500">EMI Paid</span>
                                    </div>
                                    <span class="font-bold text-slate-700">12 (60%)</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-2">
                                        <span class="text-slate-300 font-bold">⚙</span>
                                        <span class="text-slate-500">EMI Remaining</span>
                                    </div>
                                    <span class="font-bold text-slate-700">8 (40%)</span>
                                </div>
                            </div>
                        </div>

                        <label class="w-full text-center mt-4 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer" for="tab-repay">
                            <span>View Repayment Schedule</span>
                        </label>
                    </div>

                    <!-- Card C: Quick Actions -->
                    <div class="bg-white rounded-xl border border-brand-border/40 p-5 shadow-sm col-span-12 lg:col-span-4 space-y-3 flex flex-col justify-between">
                        <h3 class="text-xs font-black uppercase text-slate-400 tracking-wider">Quick Actions</h3>
                        
                        <div class="space-y-2 flex-1 flex flex-col justify-around">
                            <label for="tab-elig" class="w-full flex items-center justify-between p-2.5 rounded-lg border border-slate-100 hover:border-brand-emerald/45 hover:bg-slate-50/50 transition text-xs cursor-pointer">
                                <span class="font-bold text-slate-700">Check Loan Eligibility</span>
                                <span class="text-slate-400">&rarr;</span>
                            </label>
                            <label for="tab-elig" class="w-full flex items-center justify-between p-2.5 rounded-lg border border-slate-100 hover:border-brand-emerald/45 hover:bg-slate-50/50 transition text-xs cursor-pointer">
                                <span class="font-bold text-slate-700">EMI Calculator</span>
                                <span class="text-slate-400">&rarr;</span>
                            </label>
                            <label for="tab-repay" class="w-full flex items-center justify-between p-2.5 rounded-lg border border-slate-100 hover:border-brand-emerald/45 hover:bg-slate-50/50 transition text-xs cursor-pointer">
                                <span class="font-bold text-slate-700">Download Statement</span>
                                <span class="text-slate-400">&rarr;</span>
                            </label>
                            <label for="tab-docs" class="w-full flex items-center justify-between p-2.5 rounded-lg border border-slate-100 hover:border-brand-emerald/45 hover:bg-slate-50/50 transition text-xs cursor-pointer">
                                <span class="font-bold text-slate-700">Upload Document</span>
                                <span class="text-slate-400">&rarr;</span>
                            </label>
                            <label for="tab-track" class="w-full flex items-center justify-between p-2.5 rounded-lg border border-slate-100 hover:border-brand-emerald/45 hover:bg-slate-50/50 transition text-xs cursor-pointer">
                                <span class="font-bold text-slate-700">Track Application</span>
                                <span class="text-slate-400">&rarr;</span>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- BOTTOM DECK CONTAINER -->
                <div class="grid grid-cols-12 gap-6">
                    <!-- Recent Applications Table -->
                    <div class="bg-white rounded-xl border border-brand-border/40 p-5 shadow-sm col-span-12 lg:col-span-8">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-sm font-black tracking-tight text-slate-800">Recent Applications</h3>
                            <label for="tab-track" class="text-xs font-bold text-brand-emerald hover:underline cursor-pointer">View All</label>
                        </div>

                        <div class="overflow-x-auto">
                            <table class="w-full text-left text-xs border-collapse">
                                <thead>
                                    <tr class="text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-100">
                                        <th class="py-3 px-4">Application ID</th>
                                        <th class="py-3 px-4">Loan Type</th>
                                        <th class="py-3 px-4">Status</th>
                                        <th class="py-3 px-4">Applied On</th>
                                        <th class="py-3 px-4 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-slate-100 text-slate-700">
                                    <tr>
                                        <td class="py-3 px-4 font-bold">HL1234</td>
                                        <td class="py-3 px-4">Home Loan</td>
                                        <td class="py-3 px-4">
                                            <span class="px-2 py-0.5 text-[10px] font-bold rounded bg-amber-50 text-amber-600 border border-amber-200">In Progress</span>
                                        </td>
                                        <td class="py-3 px-4">20 May 2024</td>
                                        <td class="py-3 px-4 text-right">
                                            <label for="tab-track" class="font-bold text-brand-emerald hover:underline cursor-pointer">View Details &rarr;</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="py-3 px-4 font-bold">HL1122</td>
                                        <td class="py-3 px-4">Home Loan</td>
                                        <td class="py-3 px-4">
                                            <span class="px-2 py-0.5 text-[10px] font-bold rounded bg-blue-50 text-blue-600 border border-blue-200">Under Review</span>
                                        </td>
                                        <td class="py-3 px-4">10 Apr 2024</td>
                                        <td class="py-3 px-4 text-right">
                                            <label for="tab-track" class="font-bold text-brand-emerald hover:underline cursor-pointer">View Details &rarr;</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="py-3 px-4 font-bold">HL0987</td>
                                        <td class="py-3 px-4">Home Loan Top-Up</td>
                                        <td class="py-3 px-4">
                                            <span class="px-2 py-0.5 text-[10px] font-bold rounded bg-brand-emeraldLight text-brand-emerald border border-brand-emerald/10">Approved</span>
                                        </td>
                                        <td class="py-3 px-4">15 Mar 2024</td>
                                        <td class="py-3 px-4 text-right">
                                            <label for="tab-track" class="font-bold text-brand-emerald hover:underline cursor-pointer">View Details &rarr;</label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Notifications Panel -->
                    <div class="bg-white rounded-xl border border-brand-border/40 p-5 shadow-sm col-span-12 lg:col-span-4 space-y-4">
                        <div class="flex items-center justify-between">
                            <h3 class="text-sm font-black tracking-tight text-slate-800">Notifications</h3>
                        </div>

                        <div class="space-y-4 text-xs">
                            <div class="flex items-start gap-3">
                                <span class="text-slate-400 text-sm mt-0.5">🔔</span>
                                <div>
                                    <p class="text-slate-700 leading-normal font-semibold">EMI of ₹ 18,750 is due on 05 Jun 2024.</p>
                                    <span class="text-[9px] text-slate-400 block mt-0.5">2 hours ago</span>
                                </div>
                            </div>

                            <div class="flex items-start gap-3">
                                <span class="text-slate-400 text-sm mt-0.5">🔔</span>
                                <div>
                                    <p class="text-slate-700 leading-normal">Your application HL1234 is under processing.</p>
                                    <span class="text-[9px] text-slate-400 block mt-0.5">1 day ago</span>
                                </div>
                            </div>

                            <div class="flex items-start gap-3">
                                <span class="text-slate-400 text-sm mt-0.5">🔔</span>
                                <div>
                                    <p class="text-slate-700 leading-normal font-semibold">Document verification completed successfully.</p>
                                    <span class="text-[9px] text-slate-400 block mt-0.5">3 days ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ==================== PANE 2: LOAN GUIDANCE ==================== -->
            <div id="pane-guidance" class="tab-pane bg-white rounded-2xl border border-slate-300/40 p-6 shadow-sm space-y-6">
                <div>
                    <h2 class="text-xl font-black text-brand-charcoal">📖 Housing Loan Guidance</h2>
                    <p class="text-xs text-slate-400 mt-1">Step-by-step housing documentation checklist and timeline benchmarks.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed">
                    <div class="p-4 border border-brand-border/40 rounded-xl space-y-2 bg-slate-50/50">
                        <span class="text-lg">📊 Step 1</span>
                        <h4 class="font-bold text-slate-800">Budget Assessment</h4>
                        <p class="text-slate-500">Calculate target borrowing power thresholds based on monthly obligations, FOIR ratios, and gross family income profiles.</p>
                    </div>
                    <div class="p-4 border border-brand-border/40 rounded-xl space-y-2 bg-slate-50/50">
                        <span class="text-lg">📄 Step 2</span>
                        <h4 class="font-bold text-slate-800">Documents Compilation</h4>
                        <p class="text-slate-500">Prepare identity verifications (PAN, Aadhaar), 3 months salary slips, 6 months transaction registers, and registry titles.</p>
                    </div>
                    <div class="p-4 border border-brand-border/40 rounded-xl space-y-2 bg-slate-50/50">
                        <span class="text-lg">🤝 Step 3</span>
                        <h4 class="font-bold text-slate-800">Legal Review</h4>
                        <p class="text-slate-500">Bank assessors examine physical properties. Following strict non-encumbrance validation, disbursals are triggered.</p>
                    </div>
                </div>
            </div>

            <!-- ==================== PANE 3: CHECK ELIGIBILITY ==================== -->
            <div id="pane-elig" class="tab-pane grid grid-cols-12 gap-6">
                <!-- Parameters card -->
                <div class="bg-white rounded-xl border border-brand-border/40 p-6 shadow-sm col-span-12 lg:col-span-7 space-y-6">
                    <div>
                        <h2 class="text-lg font-black text-slate-800">⚖️ Premium Income Eligibility & EMI Calculator</h2>
                        <p class="text-xs text-slate-400">Modify dynamic values to analyze standard mortgage options instantly.</p>
                    </div>
                    <div class="space-y-4 text-xs">
                        <div class="space-y-1">
                            <div class="flex justify-between font-bold text-slate-700">
                                <span>Monthly Net Income</span>
                                <span class="text-brand-emerald">₹ 75,000</span>
                            </div>
                            <input type="range" min="15000" max="500000" step="5000" value="75000" class="w-full accent-brand-emerald cursor-pointer">
                        </div>
                        <div class="space-y-1">
                            <div class="flex justify-between font-bold text-slate-700">
                                <span>Existing Debt Obligations</span>
                                <span class="text-red-500">₹ 10,000</span>
                            </div>
                            <input type="range" min="0" max="150000" step="2000" value="10000" class="w-full accent-brand-emerald cursor-pointer">
                        </div>
                        <div class="space-y-1">
                            <div class="flex justify-between font-bold text-slate-700">
                                <span>Tenure Range (Years)</span>
                                <span class="text-brand-emerald">20 Years</span>
                            </div>
                            <input type="range" min="5" max="30" step="1" value="20" class="w-full accent-brand-emerald cursor-pointer">
                        </div>
                    </div>
                </div>

                <!-- Calculations card -->
                <div class="bg-brand-navy text-white rounded-xl p-6 col-span-12 lg:col-span-5 flex flex-col justify-between">
                    <div class="space-y-4">
                        <span class="text-[9px] uppercase tracking-widest text-slate-400 font-bold block">Max Eligible Borrowing Cap</span>
                        <h3 class="text-3xl font-black text-brand-emeraldLight">₹ 34,50,000</h3>
                        
                        <div class="grid grid-cols-2 gap-4 text-xs pt-4 border-t border-slate-700 mt-4">
                            <div>
                                <span class="text-slate-400 block text-[9px] uppercase">Installment Limit</span>
                                <span class="font-bold">₹ 27,500 / mo</span>
                            </div>
                            <div>
                                <span class="text-slate-400 block text-[9px] uppercase">Probability Status</span>
                                <span class="text-emerald-400 font-bold">Highly Probable</span>
                            </div>
                        </div>
                    </div>

                    <label for="tab-appl" class="w-full text-center py-2.5 bg-brand-emerald hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition cursor-pointer mt-6 inline-block">
                        Apply with this Limit
                    </label>
                </div>
            </div>

            <!-- ==================== PANE 4: APPLY FOR LOAN ==================== -->
            <div id="pane-appl" class="tab-pane max-w-xl mx-auto bg-white rounded-2xl border border-brand-border/40 p-6 shadow-sm space-y-6">
                <div>
                    <h2 class="text-lg font-black text-slate-800">✍️ Register Loan Application</h2>
                    <p class="text-xs text-slate-400 mt-1">Complete this mock form to secure loan registration details.</p>
                </div>
                <form class="space-y-4 text-xs" onsubmit="return false;">
                    <div class="space-y-1">
                        <label class="block font-bold text-slate-600">Applicant Full Name</label>
                        <input type="text" value="John Doe" class="w-full p-2.5 rounded-lg border border-slate-200 outline-none focus:border-brand-emerald">
                    </div>
                    <div class="space-y-1">
                        <label class="block font-bold text-slate-600">Requested Principal Amount (₹)</label>
                        <input type="number" value="4500000" class="w-full p-2.5 rounded-lg border border-slate-200 outline-none focus:border-brand-emerald">
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="space-y-1">
                            <label class="block font-bold text-slate-600">Loan Category</label>
                            <select class="w-full p-2.5 rounded-lg border border-slate-200 bg-white">
                                <option>Home Loan</option>
                                <option>Plot Purchase</option>
                                <option>Home Renovation</option>
                            </select>
                        </div>
                        <div class="space-y-1">
                            <label class="block font-bold text-slate-600">Tenure Duration</label>
                            <select class="w-full p-2.5 rounded-lg border border-slate-200 bg-white">
                                <option>10 Years</option>
                                <option>15 Years</option>
                                <option selected>20 Years</option>
                                <option>30 Years</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" class="w-full py-3 bg-brand-emerald text-white rounded-lg font-bold hover:bg-emerald-700 transition">Submit Application</button>
                </form>
            </div>

            <!-- ==================== PANE 5: LOAN STATUS TRACKING ==================== -->
            <div id="pane-track" class="tab-pane bg-white rounded-2xl border border-brand-border/40 p-6 shadow-sm space-y-6">
                <div>
                    <h2 class="text-xl font-black text-brand-charcoal">🔍 Loan Status Tracker</h2>
                    <p class="text-xs text-slate-400 mt-1">Audit status cycles and milestones of active registers.</p>
                </div>
                <div class="space-y-4">
                    <div class="flex items-center justify-between text-xs font-bold border-b border-slate-100 pb-2">
                        <span>Application Status: <strong class="text-brand-emerald">Under Review</strong></span>
                        <span class="text-slate-400">ID: HL1122</span>
                    </div>
                    <div class="relative flex flex-col md:flex-row justify-between gap-4 py-4">
                        <div class="flex-1 p-3 border-l-4 border-brand-emerald bg-emerald-50 text-xs">
                            <h5 class="font-bold text-brand-emerald">1. Submission</h5>
                            <p class="text-[10px] text-slate-500 mt-0.5">Verified on 10 Apr 2024</p>
                        </div>
                        <div class="flex-1 p-3 border-l-4 border-brand-emerald bg-emerald-50 text-xs">
                            <h5 class="font-bold text-brand-emerald">2. Document Check</h5>
                            <p class="text-[10px] text-slate-500 mt-0.5">Verified on 18 Apr 2024</p>
                        </div>
                        <div class="flex-1 p-3 border-l-4 border-brand-emerald bg-emerald-50 text-xs">
                            <h5 class="font-bold text-brand-emerald">3. Legal Review</h5>
                            <p class="text-[10px] text-slate-500 mt-0.5">In Progress</p>
                        </div>
                        <div class="flex-1 p-3 border-l-4 border-slate-200 text-xs">
                            <h5 class="font-bold text-slate-400">4. Disbursement</h5>
                            <p class="text-[10px] text-slate-500 mt-0.5">Pending Step 3</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ==================== PANE 6: REPAYMENT ==================== -->
            <div id="pane-repay" class="tab-pane bg-white rounded-2xl border border-brand-border/40 p-6 shadow-sm space-y-6">
                <div>
                    <h2 class="text-xl font-black text-brand-charcoal">📅 Amortization Matrix</h2>
                    <p class="text-xs text-slate-400 mt-1">Review complete schedule details.</p>
                </div>
                <div class="overflow-x-auto text-xs">
                    <table class="w-full text-left">
                        <thead>
                            <tr class="text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-100">
                                <th class="py-3 px-4">Cycle</th>
                                <th class="py-3 px-4">EMI Installment</th>
                                <th class="py-3 px-4">Principal Part</th>
                                <th class="py-3 px-4">Interest Part</th>
                                <th class="py-3 px-4">Remaining Balance</th>
                                <th class="py-3 px-4 text-right">Receipt</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 text-slate-700">
                            <tr class="bg-emerald-50/10">
                                <td class="py-3 px-4 font-bold">Installment #1</td>
                                <td class="py-3 px-4">₹ 18,750</td>
                                <td class="py-3 px-4">₹ 4,583</td>
                                <td class="py-3 px-4">₹ 14,167</td>
                                <td class="py-3 px-4 font-bold">₹ 8,40,647</td>
                                <td class="py-3 px-4 text-right"><span class="px-2 py-0.5 rounded text-[10px] bg-brand-emeraldLight text-brand-emerald font-bold">Paid</span></td>
                            </tr>
                            <tr>
                                <td class="py-3 px-4 font-bold">Installment #2</td>
                                <td class="py-3 px-4">₹ 18,750</td>
                                <td class="py-3 px-4">₹ 4,616</td>
                                <td class="py-3 px-4">₹ 14,134</td>
                                <td class="py-3 px-4 font-bold">₹ 8,36,031</td>
                                <td class="py-3 px-4 text-right"><span class="px-2 py-0.5 rounded text-[10px] bg-slate-100 text-slate-500 font-bold">Scheduled</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- ==================== PANE 7: POST DISBURSEMENT (Exactly matching image 1000176651.jpg) ==================== -->
            <div id="pane-post" class="tab-pane space-y-6">
                <!-- HEADER INFO DECK (Title and Dropdown selectors) -->
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-brand-border/40 pb-4">
                    <div>
                        <h2 class="text-2xl font-bold tracking-tight text-brand-charcoal">Post Disbursement</h2>
                        <p class="text-xs text-slate-500 mt-1">Manage your loan after disbursement and track property & account details.</p>
                    </div>

                    <!-- SELECT LOAN DROPDOWN (Perfect mockup match) -->
                    <div class="relative text-left">
                        <span class="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest text-right">Select Loan Account</span>
                        <div class="mt-1 bg-white border border-slate-300 rounded-lg px-4 py-2 flex items-center gap-3 min-w-[240px] shadow-sm hover:border-slate-400 transition cursor-pointer">
                            <span class="text-slate-400 text-xs">🏡</span>
                            <div class="flex-1">
                                <span class="block text-xs font-bold text-slate-800">HL1234567890 - Home Loan</span>
                            </div>
                            <span class="text-slate-400 text-xs">▼</span>
                        </div>
                        <span class="block text-[10px] text-slate-500 text-right mt-1 font-medium">Disbursed on: <strong class="text-brand-charcoal">20 May 2024</strong></span>
                    </div>
                </div>

                <!-- Core Parameters block -->
                <div class="grid grid-cols-12 gap-6">
                    <!-- Main parameters overview card -->
                    <div class="bg-white rounded-2xl border border-slate-300/40 p-6 col-span-12 lg:col-span-8 shadow-sm flex flex-col md:flex-row items-center gap-8">
                        <div class="flex-shrink-0 bg-slate-50/50 rounded-2xl p-4 border border-slate-200/60 w-32 h-32 flex items-center justify-center">
                            <svg viewBox="0 0 100 100" class="w-20 h-20 text-brand-emerald" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M10 90 L10 50 L50 20 L90 50 L90 90 Z" />
                                <path d="M40 90 L40 65 L60 65 L60 90" />
                                <circle cx="28" cy="48" r="6" />
                                <circle cx="72" cy="48" r="6" />
                            </svg>
                        </div>

                        <div class="flex-1 w-full grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-4 text-xs">
                            <div class="space-y-3">
                                <div>
                                    <span class="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Loan Account No.</span>
                                    <span class="block text-sm font-black text-slate-800">HL1234567890</span>
                                </div>
                                <div>
                                    <span class="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Interest Rate (P.A.)</span>
                                    <span class="block text-sm font-black text-slate-800">8.50%</span>
                                </div>
                                <div>
                                    <span class="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Disbursed Amount</span>
                                    <span class="block text-sm font-black text-brand-emerald">₹ 42,50,000</span>
                                </div>
                            </div>
                            <div class="space-y-3">
                                <div>
                                    <span class="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Loan Tenure</span>
                                    <span class="block text-sm font-black text-slate-800">20 Years</span>
                                </div>
                                <div>
                                    <span class="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Loan Amount</span>
                                    <span class="block text-sm font-black text-slate-800">₹ 42,50,000</span>
                                </div>
                                <div>
                                    <span class="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Next EMI Due</span>
                                    <span class="block text-sm font-black text-slate-800">05 Jun 2024</span>
                                </div>
                            </div>
                            <div class="space-y-3">
                                <div>
                                    <span class="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Loan Type</span>
                                    <span class="block text-sm font-black text-slate-800">Home Loan</span>
                                </div>
                                <div>
                                    <span class="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">EMI Amount</span>
                                    <span class="block text-sm font-black text-slate-800">₹ 32,742</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Quick Links side panel -->
                    <div class="bg-white rounded-2xl border border-slate-300/40 p-6 col-span-12 lg:col-span-4 shadow-sm">
                        <h3 class="text-xs font-black uppercase text-slate-400 tracking-wider flex items-center gap-2 mb-3">
                            <span class="text-brand-emerald">✔</span>
                            <span>Quick Links</span>
                        </h3>
                        <div class="divide-y divide-slate-100 text-xs">
                            <label for="tab-repay" class="py-2.5 flex items-center justify-between text-slate-600 hover:text-brand-emerald transition cursor-pointer">
                                <span>View Repayment Schedule</span>
                                <span>&rarr;</span>
                            </label>
                            <label for="tab-repay" class="py-2.5 flex items-center justify-between text-slate-600 hover:text-brand-emerald transition cursor-pointer">
                                <span>View Amortization Schedule</span>
                                <span>&rarr;</span>
                            </label>
                            <label for="tab-repay" class="py-2.5 flex items-center justify-between text-slate-600 hover:text-brand-emerald transition cursor-pointer">
                                <span>Payment History</span>
                                <span>&rarr;</span>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Three Detailed Columns below -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <!-- Disbursement block -->
                    <div class="bg-white rounded-2xl border border-slate-300/40 p-5 shadow-sm space-y-4">
                        <h4 class="text-xs font-black uppercase text-slate-400 tracking-wider flex items-center gap-2 pb-2 border-b border-slate-100">
                            <span class="text-brand-emerald">$</span>
                            <span>Disbursement Details</span>
                        </h4>
                        <div class="space-y-3 text-xs leading-relaxed">
                            <div class="flex justify-between">
                                <span class="text-slate-400">Disbursement Date</span>
                                <span class="font-semibold text-slate-800">20 May 2024</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-slate-400">Reference No.</span>
                                <span class="font-mono font-semibold text-slate-800">DISB/2024/56789</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-slate-400">Disbursement Mode</span>
                                <span class="font-semibold text-slate-800">NEFT</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-slate-400">Disbursed To Bank</span>
                                <span class="font-semibold text-slate-800">HDFC Bank - 1234</span>
                            </div>
                        </div>
                    </div>

                    <!-- Property block -->
                    <div class="bg-white rounded-2xl border border-slate-300/40 p-5 shadow-sm space-y-4">
                        <h4 class="text-xs font-black uppercase text-slate-400 tracking-wider flex items-center gap-2 pb-2 border-b border-slate-100">
                            <span class="text-brand-emerald">🏠</span>
                            <span>Property Details</span>
                        </h4>
                        <div class="space-y-3 text-xs leading-relaxed">
                            <div class="flex justify-between gap-4">
                                <span class="text-slate-400 flex-shrink-0">Property Address</span>
                                <span class="font-semibold text-slate-800 text-right">123, Green Park, Bangalore - 560001, India</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-slate-400">Property Type</span>
                                <span class="font-semibold text-slate-800">Residential</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-slate-400">Property Value</span>
                                <span class="font-semibold text-slate-800">₹ 50,00,000</span>
                            </div>
                        </div>
                    </div>

                    <!-- Insurance block -->
                    <div class="bg-white rounded-2xl border border-slate-300/40 p-5 shadow-sm space-y-4">
                        <h4 class="text-xs font-black uppercase text-slate-400 tracking-wider flex items-center gap-2 pb-2 border-b border-slate-100">
                            <span class="text-brand-emerald">🛡️</span>
                            <span>Insurance Details</span>
                        </h4>
                        <div class="space-y-3 text-xs">
                            <div class="flex justify-between items-center pb-2 border-b border-slate-50">
                                <div>
                                    <span class="font-bold text-slate-700 block">Property Insurance</span>
                                    <span class="text-[9px] text-slate-400">Valid till: 19 May 2025</span>
                                </div>
                                <span class="text-brand-emerald font-bold">Active</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <div>
                                    <span class="font-bold text-slate-700 block">Life Insurance</span>
                                    <span class="text-[9px] text-slate-400">Valid till: 19 May 2044</span>
                                </div>
                                <span class="text-brand-emerald font-bold">Active</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ==================== PANE 8: AUCTION MANAGEMENT ==================== -->
            <div id="pane-auction" class="tab-pane bg-white rounded-2xl border border-slate-300/40 p-6 shadow-sm space-y-6">
                <div>
                    <h2 class="text-xl font-black text-brand-charcoal">🔨 Auction Management</h2>
                    <p class="text-xs text-slate-400 mt-1">Review active property auction and liquidations records in your zone.</p>
                </div>
                <div class="p-8 text-center text-xs text-slate-400 italic bg-slate-50 rounded-xl">
                    No active auctions registered in this portfolio.
                </div>
            </div>

            <!-- ==================== PANE 9: DOCUMENTS ==================== -->
            <div id="pane-docs" class="tab-pane grid grid-cols-12 gap-6">
                <div class="bg-white rounded-xl border border-brand-border/40 p-5 shadow-sm col-span-12 lg:col-span-4 space-y-4">
                    <h3 class="text-sm font-black text-slate-800">Add Documents</h3>
                    <p class="text-xs text-slate-400">Securely upload identity cards and property deeds.</p>
                    <div class="p-8 border-2 border-dashed border-slate-200 rounded-xl text-center cursor-pointer bg-slate-50 hover:bg-slate-100 transition">
                        <span class="text-2xl block mb-1">📤</span>
                        <span class="text-xs font-bold text-slate-700">Browse folders</span>
                    </div>
                </div>
                <div class="bg-white rounded-xl border border-brand-border/40 p-5 shadow-sm col-span-12 lg:col-span-8">
                    <h3 class="text-sm font-black text-slate-800 mb-4">Active Repository</h3>
                    <div class="overflow-x-auto text-xs">
                        <table class="w-full text-left">
                            <thead>
                                <tr class="text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-100">
                                    <th class="py-3 px-4">File Name</th>
                                    <th class="py-3 px-4">Category</th>
                                    <th class="py-3 px-4 text-right">Validation</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100">
                                <tr>
                                    <td class="py-3 px-4 font-bold">Aadhaar_Card_John.pdf</td>
                                    <td class="py-3 px-4">Identity Proof</td>
                                    <td class="py-3 px-4 text-right"><span class="px-2 py-0.5 rounded text-[10px] bg-brand-emeraldLight text-brand-emerald font-bold">Verified</span></td>
                                </tr>
                                <tr>
                                    <td class="py-3 px-4 font-bold">IncomeStatement_FY24.pdf</td>
                                    <td class="py-3 px-4">Income Verification</td>
                                    <td class="py-3 px-4 text-right"><span class="px-2 py-0.5 rounded text-[10px] bg-slate-100 text-slate-500 font-bold">Under Review</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- ==================== PANE 10: PROFILE SETTINGS ==================== -->
            <div id="pane-prof" class="tab-pane max-w-xl mx-auto bg-white rounded-2xl border border-slate-300/40 p-6 shadow-sm space-y-6">
                <div>
                    <h2 class="text-lg font-black text-slate-800">⚙️ Profile Settings</h2>
                    <p class="text-xs text-slate-400 mt-1">Configure your personal coordinate credentials.</p>
                </div>
                <div class="space-y-4 text-xs">
                    <div class="space-y-1">
                        <label class="block font-bold text-slate-600">Full Name</label>
                        <input type="text" value="John Doe" class="w-full p-2.5 rounded-lg border border-slate-200 outline-none focus:border-brand-emerald">
                    </div>
                    <div class="space-y-1">
                        <label class="block font-bold text-slate-600">Email Coordinates</label>
                        <input type="email" value="john.doe@gmail.com" class="w-full p-2.5 rounded-lg border border-slate-200 outline-none focus:border-brand-emerald">
                    </div>
                    <button class="w-full py-2.5 bg-brand-emerald hover:bg-emerald-700 text-white font-bold rounded-lg transition" onclick="return false;">Save settings</button>
                </div>
            </div>

            <!-- ==================== PANE 11: SUPPORT / HELP ==================== -->
            <div id="pane-supp" class="tab-pane grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="bg-white rounded-xl border border-slate-300/40 p-5 shadow-sm space-y-4">
                    <h3 class="font-bold text-slate-800 text-sm">Submit Support Ticket</h3>
                    <form class="space-y-4 text-xs" onsubmit="return false;">
                        <div class="space-y-1">
                            <label class="block font-bold text-slate-600">Subject Category</label>
                            <input type="text" placeholder="e.g. Disbursement delays" class="w-full p-2.5 rounded-lg border border-slate-200 outline-none">
                        </div>
                        <div class="space-y-1">
                            <label class="block font-bold text-slate-600">Inquiry Message</label>
                            <textarea rows="4" placeholder="Detail parameters here..." class="w-full p-2.5 rounded-lg border border-slate-200 outline-none resize-none"></textarea>
                        </div>
                        <button class="w-full py-2.5 bg-brand-emerald text-white font-bold rounded-lg hover:bg-emerald-700 transition">Dispatch Ticket</button>
                    </form>
                </div>
                <div class="bg-white rounded-xl border border-slate-300/40 p-5 shadow-sm space-y-4 text-xs leading-relaxed">
                    <h3 class="font-bold text-slate-800 text-sm">Support Desk Coordinates</h3>
                    <p class="text-slate-500">Contact our financial advisors directly:</p>
                    <div class="space-y-2 font-semibold text-slate-700">
                        <p>📞 Toll Free: 1800-123-4567</p>
                        <p>✉️ Email: support@hlms.com</p>
                        <p>⏰ Mon - Sat: 9:00 AM - 7:00 PM</p>
                    </div>
                </div>
            </div>

        </main>
    </div>

    <!-- FOOTER SECTION (Refined matching styling colors of screenshot) -->
    <footer class="bg-white border-t border-brand-border/60 py-8 text-xs text-slate-500 mt-auto">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            
            <!-- Brand Column -->
            <div class="lg:col-span-4 space-y-3">
                <div class="flex items-center gap-2">
                    <div class="w-5 h-5 border border-slate-300 relative flex items-center justify-center">
                        <span class="text-[9px] text-slate-800 font-bold leading-none">L</span>
                    </div>
                    <span class="font-extrabold text-sm text-slate-800">HLMS</span>
                </div>
                <p class="leading-relaxed">We help you achieve your dream home with the best loan solutions and personalized support.</p>
            </div>

            <!-- Quick Links -->
            <div class="lg:col-span-2 space-y-2">
                <h4 class="font-bold text-slate-800 uppercase tracking-wider">Quick Links</h4>
                <ul class="space-y-1">
                    <li><label for="tab-db" class="hover:underline cursor-pointer">— Dashboard</label></li>
                    <li><label for="tab-guide" class="hover:underline cursor-pointer">— Loan Guidance</label></li>
                    <li><label for="tab-elig" class="hover:underline cursor-pointer">— Check Eligibility</label></li>
                    <li><label for="tab-appl" class="hover:underline cursor-pointer">— Apply for Loan</label></li>
                </ul>
            </div>

            <!-- Important Links -->
            <div class="lg:col-span-2 space-y-2">
                <h4 class="font-bold text-slate-800 uppercase tracking-wider">Important Links</h4>
                <ul class="space-y-1">
                    <li><label for="tab-elig" class="hover:underline cursor-pointer">— EMI Calculator</label></li>
                    <li><label for="tab-repay" class="hover:underline cursor-pointer">— Interest Rates</label></li>
                    <li><label for="tab-supp" class="hover:underline cursor-pointer">— FAQs</label></li>
                    <li><a href="#" class="hover:underline">— Privacy Policy</a></li>
                </ul>
            </div>

            <!-- Support -->
            <div class="lg:col-span-2 space-y-2">
                <h4 class="font-bold text-slate-800 uppercase tracking-wider">Support</h4>
                <ul class="space-y-1">
                    <li class="font-bold text-slate-800">📞 1800-123-4567</li>
                    <li class="text-slate-400">✉️ support@hlms.com</li>
                </ul>
            </div>

            <!-- Mobile Apps -->
            <div class="lg:col-span-2 space-y-2">
                <h4 class="font-bold text-slate-800 uppercase tracking-wider">Download App</h4>
                <div class="space-y-1.5">
                    <a href="#" class="flex items-center gap-2 p-1.5 border border-slate-200 rounded hover:bg-slate-50 transition">
                        <span class="text-base">🤖</span>
                        <div class="text-[9px]">
                            <span class="block text-slate-400 leading-none">Get it on</span>
                            <span class="font-bold text-slate-700 leading-none">Google Play</span>
                        </div>
                    </a>
                </div>
            </div>

        </div>
        <div class="max-w-7xl mx-auto px-6 border-t border-slate-200 mt-6 pt-4 text-center text-[10px]">
            © 2024 HLMS Housing Loan System. All rights reserved.
        </div>
    </footer>

    <!-- FLOATING CUTE MASCOT ROBOT HELPER (CSS Animated floating assistant) -->
    <div class="fixed bottom-6 right-6 z-50 flex items-end gap-3.5 max-w-sm">
        <div class="bg-slate-900 text-white rounded-2xl p-4 shadow-xl border border-slate-800 text-xs leading-relaxed max-w-[220px]">
            <span class="block font-bold text-[10px] uppercase tracking-wider text-emerald-400 mb-1">HLMS Assistant</span>
            Hi John! Click any of the sidebar navigation options to explore different views—all powered by pure HTML and CSS!
        </div>

        <div class="w-16 h-16 rounded-full bg-white border border-slate-300 shadow-xl flex items-center justify-center mascot-assistant cursor-pointer hover:scale-110 transition-transform duration-300 relative">
            <svg viewBox="0 0 100 100" class="w-12 h-12">
                <rect x="18" y="22" width="64" height="56" rx="20" fill="#334155" />
                <rect x="23" y="27" width="54" height="42" rx="14" fill="#1e293b" />
                <circle cx="38" cy="48" r="7" fill="#60a5fa" />
                <circle cx="38" cy="48" r="3" fill="#ffffff" />
                <circle cx="62" cy="48" r="7" fill="#60a5fa" />
                <circle cx="62" cy="48" r="3" fill="#ffffff" />
                <path d="M 44 60 Q 50 64 56 60" stroke="#60a5fa" stroke-width="3" fill="none" stroke-linecap="round" />
                <circle cx="50" cy="15" r="4" fill="#a78bfa" />
                <line x1="50" y1="15" x2="50" y2="22" stroke="#a78bfa" stroke-width="3" />
                <rect x="12" y="38" width="6" height="24" rx="2" fill="#a78bfa" />
                <rect x="82" y="38" width="6" height="24" rx="2" fill="#a78bfa" />
            </svg>
            <span class="absolute top-0 right-1 bg-brand-emerald w-3 h-3 rounded-full border border-white"></span>
        </div>
    </div>

</body>
</html>

```
