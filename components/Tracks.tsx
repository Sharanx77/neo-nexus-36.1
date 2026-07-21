'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Tracks() {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);
  const [activeProblem, setActiveProblem] = useState<string | null>(null);

  useEffect(() => {
    if (activeDomain) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [activeDomain]);

  const openDomain = (domainId: string) => {
    setActiveDomain(domainId);
    setActiveProblem(null);
  };

  const closeModal = () => {
    setActiveDomain(null);
    setActiveProblem(null);
  };

  const toggleProblem = (problemId: string) => {
    setActiveProblem(activeProblem === problemId ? null : problemId);
  };

  // Standard Tracks (AI for Humanitarian Tech and Mobility are hidden)
  const trackData = [
    {
      id: 'circuit',
      tag: 'CKTD',
      name: 'Circuit Design',
      shortDesc: 'Embedded systems, PCB design, VLSI and hardware engineering.',
      problems: [
        { id: 'CKTD-01', title: 'Ultra-Low-Power IoT Edge Sensor Node for Rural Environmental Monitoring ', desc: 'Develop a low-power IoT environmental monitoring system using ESP32/STM32 to measure PM2.5, temperature, and humidity, achieving 30+ days of battery life through deep-sleep mode. The device performs edge-based threshold alerts, transmits data via LoRa/GSM (MQTT) without cloud dependency, and includes a low-cost (<2,000) BOM, circuit prototype/simulation, and power consumption analysis. ' },
        { id: 'CKTD-02', title: 'Smart Battery Protection & Active Cell Balancing Module for EV Applications ', desc: 'Develop an Intelligent Battery Management System (BMS) for a 4-cell lithium-ion battery pack with cell balancing, SoC estimation, and protection against overvoltage, undervoltage, overcurrent, and over-temperature using NTC thermal monitoring and relay cutoff. The system provides CAN/UART data output, includes a working hardware prototype, SoC display, and validated charge/discharge test results with circuit schematics. ' },
        { id: 'CKTD-03', title: 'FPGA-Based Real-Time Signal Processing Accelerator ', desc: 'Develop an FPGA-based real-time Signal Processing Accelerator featuring a configurable FIR filter bank, FFT module, and lightweight neural network (e.g., LeNet-5) for classification. The project includes VHDL/Verilog implementation, simulation and resource utilization reports (LUTs, DSPs, BRAMS), accuracy evaluation (e.g., MNIST), architecture diagram, and demonstrates lower latency and higher throughput than an equivalent MCU-based software implementation. ' },
        { id: 'CKTD-04', title: 'Al-Assisted Configurable Analog Front-End for Multi-Modal Biomedical Sensing ', desc: 'Develop a configurable low-noise Analog Front-End (AFE) for ECG, SpO2/PPG, and temperature sensors with a programmable gain amplifier, configurable filters, MCU-based auto-calibration (offset/gain), and a 12-bit+ ADC interface. The system includes a hardware prototype, firmware for mode switching, a PC/web app displaying live biosignal waveforms, and complete circuit schematics. ' },
        { id: 'CKTD-05', title: 'Hardware-Secured Tamper-Resistant Data Logger for Critical Infrastructure ', desc: 'Develop a tamper-resistant secure data logger with AES-256 encrypted storage, secure boot, physical tamper detection, RTC-based timestamped logging, and HMAC-authenticated UART/USB data export. The project includes a hardware prototype, encrypted SD card storage, tamper detection circuit, secure boot demonstration, and a PC log viewer with integrity verification. ' },
        { id: 'CKTD-06', title: 'Wireless Inductive Power Transfer System with Al-Based Foreign Object Detection ', desc: 'Develop a wireless inductive power transfer system (100-200 kHz) delivering 5W at 85%+ efficiency over a 5 mm air gap with Foreign Object Detection (FOD) using Q-factor/resonance shift and an ML classifier to distinguish metallic objects from valid receivers. The system includes overvoltage/overcurrent protection, automatic shutdown on FOD detection, and a hardware prototype with transmitter/receiver coils, efficiency testing, and circuit schematics. ' },
        { id: 'CKTD-07', title: 'Reconfigurable Software-Defined Instrumentation Platform on FPGA ', desc: 'Develop an FPGA-based Reconfigurable Software-Defined Instrumentation Platform that functions as at least three instruments-such as a 2-channel digital oscilloscope (≥1 MSPS), 8-channel logic analyzer (≥10 MHz), arbitrary waveform generator (up to 100 kHz), frequency counter, or SPI/I2C/UART protocol analyzer-with runtime mode switching without reprogramming the FPGA. The project includes HDL implementation, a Python/Qt host PC application, performance evaluation, resource utilization report, and architecture documentation. ' }
      ]
    },
    {
      id: 'aero',
      tag: 'AERO',
      name: 'Aerospace',
      shortDesc: 'Drones, satellite technology, navigation systems and aerospace innovation.',
      problems: [
        { id: 'AERO-01', title: 'Orbital Debris Conjunction Alert System Using Open TLE Data', desc: 'Develop a Space Debris Tracking and Conjunction Alert System that uses live TLE data to propagate satellite orbits (SGP4), detect potential collisions within a user-defined threshold over 72 hours, estimate collision probability, and recommend minimum delta-v avoidance maneuvers. The system includes 2D/3D orbit visualization and provides real-time conjunction alerts for affordable space traffic management.' },
        { id: 'AERO-02', title: 'Terrain-Aware Autonomous UAV Path Planner for Agricultural Surveys ', desc: 'Develop an Al-based UAV Path Planning System that uses GeoTIFF terrain maps and field boundaries to generate obstacle-aware, energy-optimized drone survey paths using A/RRT** algorithms. The system adapts to wind conditions, estimates energy consumption, and exports MAVLink-compatible waypoint files with 2D path visualization, enabling efficient agricultural drone operations in hilly terrain. ' },
        { id: 'AERO-03', title: 'Satellite Change Detection System for Airport OLS Zone Encroachment Monitoring ', desc: 'Develop an Al-based Satellite Change Detection System that compares multi-temporal Sentinel-2/Bhuvan satellite images to detect new built-up areas using U-Net or image differencing. The system identifies change polygons with coordinates and severity, checks them against AAI Obstacle Limitation Surface (OLS) boundaries, and generates a downloadable alert report with map visualization for monitoring unauthorized construction near airports. ' },
        { id: 'AERO-04', title: 'Drone Swarm Coordination Simulator for Disaster Search & Rescue ', desc: 'Develop an Albased -Multi-Drone Swarm Simulation for disaster search and rescue that simulates multiple drones using a decentralized coordination algorithm (e.g., stigmergy, auction-based, or MARL) to maximize area coverage and victim detection under battery constraints. The system provides swarm path visualization, evaluates coverage and detection metrics, and compares performance against a single-drone baseline. ' },
        { id: 'AERO-05', title: 'Al Space Weather Impact Predictor for LEO Satellite Operations ', desc: 'Develop an Al-based Space Weather Impact Prediction System for LEO satellites that uses NOAA SWPC alerts and Kp index data to predict atmospheric drag and orbit decay using LSTM/Gaussian Process models. The system estimates re-entry timeline changes for user-defined satellite TLEs, displays a risk dashboard, and sends configurable alerts when space weather conditions exceed specified Kp thresholds. ' }
      ]
    },
    {
      id: 'cybr',
      tag: 'CYBR',
      name: 'Cyber Security',
      shortDesc: 'Threat detection, secure systems, ethical hacking and data privacy.',
      problems: [
        { 
          id: 'CYBR-01', 
          title: 'Detection and Prevention of Exam Paper Leaks Across Digital Platforms', 
          desc: 'Design and develop an intelligent system capable of detecting, verifying, and alerting authorities about potential exam paper leaks at the earliest possible stage. The solution should help examination authorities identify suspicious content, prioritize credible reports, preserve digital evidence, and respond rapidly before the leaked material spreads extensively. Develop a digital forensics platform that enables authorized investigators to analyze leaked documents, correlate evidence, reconstruct the leak\'s spread, and identify the most probable source based on available digital evidence. The solution should strengthen investigation capabilities while respecting legal processes, privacy, and encryption rather than attempting to defeat them.' 
        },
        { 
          id: 'CYBR-02', 
          title: 'Third-Party Vendor Risk Detection and Supply Chain Attack Prevention', 
          desc: 'Design an AI-powered platform that continuously assesses vendor security posture, detects suspicious activities originating from third-party access, identifies compromised vendor accounts, and provides real-time risk assessment and incident response recommendations. The solution should help organizations reduce supply chain risks before attackers can compromise critical systems. Develop an AI-powered vendor security platform that helps organizations identify risky third-party access, detect compromised vendor accounts, monitor anomalous behavior, and support rapid incident response. The solution should strengthen supply chain security by enabling continuous risk assessment and timely intervention before an attack can escalate.' 
        },
        { 
          id: 'CYBR-03', 
          title: 'Securing Autonomous AI Agents Against Sensitive Data Exposure', 
          desc: 'Design an AI Agent Security Platform that continuously monitors autonomous AI agents, detects unauthorized access to sensitive information, enforces least-privilege access, identifies prompt injection and data leakage attempts, and alerts security teams before confidential data is exposed. Develop an AI security platform that enables organizations to monitor autonomous AI agents, prevent sensitive data exposure, detect prompt injection attacks, enforce secure access controls, and provide transparent auditing of AI actions. The solution should help enterprises adopt AI safely by reducing the risks associated with autonomous agent behavior while maintaining compliance and trust.' 
        },
        { 
          id: 'CYBR-04', 
          title: 'Intelligent Healthcare Data Leak Prevention and Patient Privacy Protection Platform', 
          desc: 'Design an AI-powered Healthcare Data Protection Platform that continuously monitors access to electronic health records (EHRs), detects abnormal user behavior, prevents unauthorized disclosure of patient data, and provides real-time alerts to hospital security teams. The system should help healthcare organizations protect patient privacy while ensuring authorized medical staff can access the information they need. Build an AI-powered healthcare cybersecurity platform that protects electronic health records, detects unauthorized access and insider threats, prevents sensitive data leaks, and helps healthcare providers maintain patient privacy and regulatory compliance. The solution should enable healthcare organizations to respond rapidly to potential breaches while ensuring secure and efficient access to patient information.' 
        },
        { 
          id: 'CYBR-05', 
          title: 'Intelligent Multi-Channel Phishing Detection and Prevention System', 
          desc: 'Design and develop a Multi-Channel Phishing Detection and Prevention Platform that helps organizations identify, analyze, and block phishing attempts across email, SMS, messaging platforms, QR codes, and websites. The system should detect suspicious content using rule-based analysis, domain validation, URL reputation, and security policies, provide real-time alerts, and assist users in reporting phishing attempts while preserving evidence for investigation. Build a phishing defense platform that enables organizations to detect phishing campaigns, verify suspicious domains and URLs, protect users from credential theft, streamline phishing reporting, and support rapid incident response. The system should reduce successful phishing attacks through layered detection, user awareness, and centralized security management without relying on AI as its primary detection.' 
        }
      ]
    }
  ];

  const gemmaTracks = [
    {
      id: 'gemma-cities',
      tag: 'GEMMA',
      name: 'AI for Sustainable Cities',
      shortDesc: 'Build AI solutions that create smarter, safer, greener, and more connected cities using Gemma models.',
      problems: [
        { id: 'FOCUS-01', title: 'Smart Mobility & Traffic Management' },
        { id: 'FOCUS-02', title: 'Public Services & Citizen Engagement' },
        { id: 'FOCUS-03', title: 'Urban Planning & Infrastructure' },
        { id: 'FOCUS-04', title: 'Waste & Water Management' },
        { id: 'FOCUS-05', title: 'Energy & Environmental Sustainability' },
        { id: 'FOCUS-06', title: 'Disaster Management & Emergency Response' },
        { id: 'FOCUS-07', title: 'Smart Governance & Civic Tech' },
        { id: 'FOCUS-08', title: 'Open Innovation: Formulate and solve your own unique problem statement within this domain.' }
      ]
    },
    {
      id: 'gemma-cyber',
      tag: 'GEMMA',
      name: 'AI for Cyber Security',
      shortDesc: 'Develop AI-powered solutions that enhance digital security, privacy, and cyber resilience.',
      problems: [
        { id: 'FOCUS-01', title: 'Threat Detection & Incident Response' },
        { id: 'FOCUS-02', title: 'Phishing & Fraud Detection' },
        { id: 'FOCUS-03', title: 'Malware Analysis' },
        { id: 'FOCUS-04', title: 'Security Operations (SOC) Automation' },
        { id: 'FOCUS-05', title: 'Identity & Access Management' },
        { id: 'FOCUS-06', title: 'Privacy & Data Protection' },
        { id: 'FOCUS-07', title: 'Secure Coding & Developer Security Tools' },
        { id: 'FOCUS-08', title: 'Open Innovation: Formulate and solve your own unique problem statement within this domain.' }
      ]
    },
    {
      id: 'gemma-edu',
      tag: 'GEMMA',
      name: 'AI for Education',
      shortDesc: 'Create AI applications that make learning more personalized, accessible, and engaging.',
      problems: [
        { id: 'FOCUS-01', title: 'AI Tutors & Personalized Learning' },
        { id: 'FOCUS-02', title: 'Student Assessment & Feedback' },
        { id: 'FOCUS-03', title: 'Language Learning' },
        { id: 'FOCUS-04', title: 'Accessibility & Inclusive Education' },
        { id: 'FOCUS-05', title: 'Teacher Productivity Tools' },
        { id: 'FOCUS-06', title: 'Career Guidance & Skill Development' },
        { id: 'FOCUS-07', title: 'Lifelong Learning' },
        { id: 'FOCUS-08', title: 'Open Innovation: Formulate and solve your own unique problem statement within this domain.' }
      ]
    },
    {
      id: 'gemma-human',
      tag: 'GEMMA',
      name: 'AI for Humanitarian Tech',
      shortDesc: 'Develop AI solutions that improve lives and address pressing societal challenges.',
      problems: [
        { id: 'FOCUS-01', title: 'Healthcare & Public Health' },
        { id: 'FOCUS-02', title: 'Disaster Relief & Crisis Response' },
        { id: 'FOCUS-03', title: 'Accessibility & Assistive Technology' },
        { id: 'FOCUS-04', title: 'Mental Health & Well-being' },
        { id: 'FOCUS-05', title: 'Agriculture & Food Security' },
        { id: 'FOCUS-06', title: 'Financial Inclusion' },
        { id: 'FOCUS-07', title: 'Climate Action & Social Impact' },
        { id: 'FOCUS-08', title: 'Open Innovation: Formulate and solve your own unique problem statement within this domain.' }
      ]
    }
  ];

  const activeDomainData = [...trackData, ...gemmaTracks].find(d => d.id === activeDomain);

  return (
    <>
      <section id="tracks" className="py-12 sm:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* SECTION 1: Build with Gemma Tracks */}
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 font-heading text-white">
              Build with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3186FF] to-[#4FA0FF]">Gemma</span> Tracks
            </h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-2">
              Build innovative AI solutions powered by Gemma 4, Google's family of open models.
            </p>
            <p className="text-gray-500 text-xs font-medium">
              Gemma is a trademark of Google LLC.
            </p>
          </div>

          {/* Gemma Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
            {gemmaTracks.map((domain) => (
              <div 
                key={domain.id}
                onClick={() => openDomain(domain.id)}
                className="cursor-pointer bg-[#030811]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col text-left transition-all duration-300 hover:border-[#3186FF]/50 hover:shadow-[0_0_25px_rgba(49,134,255,0.15)] group h-full relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#3186FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="mb-4 flex justify-between items-start">
                  <span className="inline-block px-3 py-1 text-[#3186FF] border border-[#3186FF]/40 rounded-full text-[10px] sm:text-xs font-bold tracking-widest bg-[#3186FF]/5 shadow-[0_0_10px_rgba(49,134,255,0.1)]">
                    [{domain.tag}]
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#4FA0FF] transition-colors duration-300">
                  {domain.name}
                </h3>
                
                <div className="flex-grow flex flex-col items-start mb-6">
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {domain.shortDesc}
                  </p>
                  
                  {/* The prize badge rendering has been safely kept in the JSX logic, but will remain hidden as the prize data is removed. */}
                  {'prize' in domain && domain.prize && (
                    <span className="mt-4 inline-block px-3 py-1.5 text-yellow-400 border border-yellow-400/40 rounded-lg text-[10px] sm:text-xs font-bold tracking-widest bg-yellow-400/10 shadow-[0_0_10px_rgba(250,204,21,0.2)]">
                      🏆 PRIZE: {domain.prize}
                    </span>
                  )}
                </div>

                <div className="mt-auto border-t border-white/10 pt-5 flex flex-col gap-4">
                  <span className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide text-[#3186FF] group-hover:text-white transition-colors flex items-center justify-between">
                    View Focus Areas
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  
                  <Link 
                    href="https://www.evynte.com/event/checkout/neo-nexus-361" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} 
                    className="w-full text-center bg-[#3186FF]/20 hover:bg-[#3186FF] text-white border border-[#3186FF]/50 px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-colors shadow-[0_0_10px_rgba(49,134,255,0.2)] hover:shadow-[0_0_20px_rgba(49,134,255,0.5)] z-10 relative"
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* GUIDELINES & REQUIREMENT BLOCK */}
          <div className="max-w-5xl mx-auto bg-[#030811]/60 backdrop-blur-md border border-[#3186FF]/30 p-5 sm:p-6 rounded-2xl shadow-[0_0_20px_rgba(49,134,255,0.05)] mb-24">
            <h3 className="text-white text-sm sm:text-base font-bold uppercase tracking-wider mb-4 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
              <span className="text-[#3186FF]">⚡</span> Gemma Track Requirements & Guidelines
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
              <div className="bg-white/5 p-3 sm:p-4 rounded-xl border border-white/5">
                <h4 className="text-[#4FA0FF] font-bold text-xs sm:text-sm mb-1">1. Model Integration</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Must actively deploy Gemma models via prompting, RAG, or fine-tuning pipelines.</p>
              </div>
              <div className="bg-white/5 p-3 sm:p-4 rounded-xl border border-white/5">
                <h4 className="text-[#4FA0FF] font-bold text-xs sm:text-sm mb-1">2. Target Impact</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Solutions must present creative and structurally effective approaches to problem solving.</p>
              </div>
              <div className="bg-white/5 p-3 sm:p-4 rounded-xl border border-white/5">
                <h4 className="text-[#4FA0FF] font-bold text-xs sm:text-sm mb-1">3. Working Prototype</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Evaluations depend entirely on live runtime stability and production repository checks.</p>
              </div>
              <div className="bg-white/5 p-3 sm:p-4 rounded-xl border border-white/5">
                <h4 className="text-[#4FA0FF] font-bold text-xs sm:text-sm mb-1">4. Deliverables</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Requires a concise Kaggle write-up submission along with an architectural walk-through video.</p>
              </div>
            </div>
          </div>

          {/* SECTION 2: Standard Hackathon Tracks */}
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 font-heading text-white">
              Hackathon <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan">Tracks</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
              Select a domain below to explore its official problem statements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 justify-center">
            {trackData.map((domain) => (
              <div 
                key={domain.id}
                onClick={() => openDomain(domain.id)}
                className="cursor-pointer bg-[#030811]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col text-left transition-all duration-300 hover:border-cyan/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] group h-full relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-cyan border border-cyan/40 rounded-full text-[10px] sm:text-xs font-bold tracking-widest bg-cyan/5 shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                    [{domain.tag}]
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan transition-colors duration-300">
                  {domain.name}
                </h3>
                
                <div className="flex-grow flex flex-col items-start mb-6">
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {domain.shortDesc}
                  </p>
                </div>

                <div className="mt-auto border-t border-white/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide text-cyan group-hover:text-white transition-colors flex items-center gap-2">
                    View Problem Statements
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  
                  <Link 
                    href="https://www.evynte.com/event/checkout/neo-nexus-361" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} 
                    className="w-full sm:w-auto text-center bg-electric/20 hover:bg-electric text-white border border-electric/50 px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-colors shadow-[0_0_10px_rgba(14,124,196,0.2)] hover:shadow-[0_0_20px_rgba(14,124,196,0.5)] z-10 relative"
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MODAL FOR TRACK DETAILS */}
      {activeDomain && activeDomainData && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 opacity-100 transition-opacity duration-300">
          
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-xl" 
            onClick={closeModal}
          ></div>
          
          <div className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto scrollbar-hide bg-[#030811]/95 border-2 shadow-[0_0_50px_rgba(6,182,212,0.3)] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 transform scale-100 transition-transform duration-300 ${activeDomainData.tag === 'GEMMA' ? 'border-[#3186FF]/50 shadow-[0_0_50px_rgba(49,134,255,0.3)]' : 'border-cyan/50 shadow-[0_0_50px_rgba(6,182,212,0.3)]'}`}>
            
            <button 
              onClick={closeModal}
              className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 p-1.5 sm:p-2 rounded-full border border-transparent hover:border-red-500/50 transition-all z-[110]"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="text-center mb-6 sm:mb-8 relative z-10 mt-3 sm:mt-0">
              <span className={`inline-block px-3 py-1 border rounded-full text-[10px] sm:text-xs font-bold tracking-widest mb-3 ${activeDomainData.tag === 'GEMMA' ? 'text-[#3186FF] border-[#3186FF]/40 bg-[#3186FF]/5' : 'text-cyan border-cyan/40 bg-cyan/5'}`}>
                [{activeDomainData.tag}]
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {activeDomainData.name}
              </h3>
              {activeDomainData.tag === 'GEMMA' && (
                <p className="text-gray-400 mt-2 text-sm">Review the focus areas below to guide your Gemma 4 powered solution.</p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-5 relative z-10">
              {activeDomainData.problems.map((problem: any) => {
                const hasDesc = !!problem.desc;
                const isProblemActive = activeProblem === problem.id;
                const isGemma = activeDomainData.tag === 'GEMMA';
                const isOpenInnovation = problem.id === 'FOCUS-08';
                
                return (
                  <div 
                    key={problem.id}
                    onClick={() => hasDesc && toggleProblem(problem.id)}
                    className={`${hasDesc ? 'cursor-pointer' : 'cursor-default'} rounded-xl sm:rounded-2xl border transition-all duration-300 flex flex-col bg-[#030811] overflow-hidden
                      ${(isProblemActive && hasDesc) 
                        ? (isGemma ? 'border-[#3186FF] shadow-[0_0_20px_rgba(49,134,255,0.4)]' : 'border-electric shadow-[0_0_20px_rgba(14,124,196,0.4)]') 
                        : (isGemma 
                            ? (isOpenInnovation ? 'border-yellow-400/50 shadow-[0_0_15px_rgba(250,204,21,0.15)] bg-yellow-400/5' : 'border-white/10 hover:border-[#3186FF]/40 hover:bg-white/5') 
                            : 'border-white/10 hover:border-cyan/40 hover:bg-white/5')
                      }`}
                  >
                    {hasDesc ? (
                      // STANDARD TRACK: Interactive Accordion
                      <div className="p-4 sm:p-5 flex flex-col justify-center">
                        <div className="flex justify-between items-start mb-2">
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-electric/20 text-cyan text-[10px] sm:text-xs font-mono font-bold border border-electric/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                            {problem.id}
                          </span>
                          <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors ${isProblemActive ? 'bg-electric text-white shadow-[0_0_10px_rgba(14,124,196,0.8)]' : 'bg-white/5 text-gray-400'}`}>
                            <svg className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${isProblemActive ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                        
                        <h4 className={`font-bold text-base sm:text-lg transition-colors pr-8 ${isProblemActive ? 'text-white' : 'text-gray-200'}`}>
                          {problem.title}
                        </h4>

                        <div className={`transition-all duration-500 ease-in-out ${isProblemActive ? 'max-h-[500px] mt-3 opacity-100' : 'max-h-0 mt-0 opacity-0'}`}>
                          <div className="pt-3 border-t border-white/10">
                            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
                              {problem.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // GEMMA TRACK: Simple Point Focus Area
                      <div className="p-3 sm:p-4 flex items-center gap-3 sm:gap-4">
                        <span className={`shrink-0 inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-bold border 
                          ${isOpenInnovation 
                            ? 'bg-yellow-400/20 text-yellow-400 border-yellow-400/40 shadow-[0_0_10px_rgba(250,204,21,0.2)]' 
                            : 'bg-[#3186FF]/20 text-[#4FA0FF] border-[#3186FF]/30 shadow-[0_0_10px_rgba(49,134,255,0.2)]'
                          }`}
                        >
                          {problem.id}
                        </span>
                        <h4 className={`font-bold text-sm sm:text-base ${isOpenInnovation ? 'text-yellow-100' : 'text-gray-200'}`}>
                          {problem.title}
                        </h4>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}
