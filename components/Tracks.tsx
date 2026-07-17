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

  const trackData = [
    {
      id: 'ai',
      tag: 'AI',
      name: 'AI for Humanitarian Tech',
      shortDesc: 'AI-driven solutions for social good, health, disaster relief and inclusivity.',
      problems: [
        { id: 'AI-01', title: 'Hyperlocal Al Disaster Early-Warning & Multilingual Alert System ', desc: 'Develop an Al-based Early Warning System that uses IMD APIs, satellite data, NDMA datasets, social media signals, and simulated loT sensor data to predict floods, cyclones, and landslides 12-72 hours in advance. The system displays risk levels and confidence scores on a Streamlit/React dashboard and sends multilingual voice and SMS alerts through Twilio/WhatsApp to communities with limited internet access, providing localized, timely disaster warnings using simulated sensor feeds without requiring physical IoT hardware. ' },
        { id: 'AI-02', title: 'Al Health Screener for Rural Primary Health Centre Workers ', desc: 'Develop an Al-based Health Screening Assistant for PHC workers (ASHA/ANMs) that collects patient symptoms (via voice or form), vital signs, and medical history to generate low/medium/high risk stratification, referral guidance, and chronic disease alerts using an ML classifier trained on ICMR/NHP datasets. The mobile-first web app supports English and one Indian regional language (Kannada/Hindi), includes a basic patient tracker, integrates Google TTS/IndicTTS for voice assistance, and is designed for future compatibility with ABDM sandbox APIs. ' },
        { id: 'AI-03', title: 'Affordable Al-Powered AAC Tool for Non-Verbal Differently-Abled Individuals ', desc: 'Develop an Al-powered Augmentative and Alternative Communication (AAC) tool for non-verbal individuals that enables communication through webcam-based eye-gaze tracking (MediaPipe Iris), facial gestures, or a symbol board with text-to-speech. The system adapts to user behavior by learning frequently used patterns, supports Hindi and one regional language, and provides offline, affordable communication assistance using technologies like MediaPipe, OpenCV, Coqui TTS, and SQLite. ' },
        { id: 'AI-04', title: 'WhatsApp/IVR Crop Disease & Soil Advisory for Marginal Farmers ', desc: 'Develop an Al-powered Crop Advisory System accessible via WhatsApp or IVR that accepts crop photos or voice descriptions to detect diseases and pests using a CNN (PlantVillage dataset), provides farmer-language advisory (Hindi + Kannada), offers soil health recommendations based on NPK/pH values, and suggests relevant government schemes such as PM-KISAN and the Soil Health Card, ensuring easy access for small and marginal farmers with basic phones. ' },
        { id: 'AI-05', title: 'Real-Time Indian Sign Language Recognition & Translation System ', desc: 'Develop a real-time Indian Sign Language (ISL) Recognition System that uses a webcam and MediaPipe Holistic to detect hand and facial landmarks, recognizes 50+ ISL signs using LSTM/Transformer models, and converts them into text and optional speech (TTS). The system also includes few-shot learning to add new signs without full retraining, achieving 80%+ accuracy for use in education, healthcare, and government services. ' },
        { id: 'AI-06', title: 'Federated Al Platform for Privacy-Preserving Disease Surveillance Across PHCS ', desc: 'Develop a Federated Learning-Based Disease Outbreak Detection System where simulated PHC nodes train local models on symptom data without sharing raw patient records. A FedAvg aggregator combines these models to detect disease outbreaks and anomalous symptom clusters, with optional differential privacy for enhanced data security. The system displays a district-level disease risk heatmap, ensuring DPDP Act 2023 compliance while enabling real-time, privacy-preserving outbreak monitoring. ' }
      ]
    },
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
      id: 'uit',
      tag: 'UIT',
      name: 'Urban Intelligence Tech',
      shortDesc: 'Urban planning algorithms, IoT networks, and sustainable infrastructure.',
      problems: [
        { id: 'UIT-01', title: 'Al-Powered Pothole Detection with Automated Municipal Ward Routing ', desc: 'Develop an Al-powered Crowdsourced Pothole Detection and Civic Complaint System that uses smartphone accelerometer/GPS or dashcam images to detect and classify pothole severity, automatically geotags locations, routes complaints to the correct municipal ward using geofenced boundaries, provides a heatmap dashboard with SLA tracking, and predicts future pothole formation using weather, traffic, and maintenance data. ' },
        { id: 'UIT-02', title: 'Predictive Water Network Leak Detection for AMRUT Urban Distribution Systems ', desc: 'Develop an Al-based Water Leak Detection System that analyzes pressure and flow sensor data (EPANET/BATADAL) using LSTM Autoencoder or Isolation Forest to detect and locate water leaks through pressure gradient analysis. The system provides an operator dashboard with network topology, alert history, and leakage location, estimates daily Non-Revenue Water (NRW) loss, and reports model performance metrics (Precision, Recall, F1-score). ' },
        { id: 'UIT-03', title: 'Adaptive Smart Street Lighting Network with Predictive Failure Intelligence ', desc: 'Develop a Smart Street Lighting System with PIR and LDR-based adaptive dimming, luminaire health monitoring (current sensing and lifespan estimation), and LoRa/NB-IoT communication to a central dashboard. The system uses ML (LSTM/time-series clustering) to predict light failures up to 7 days in advance, optimizes city-wide energy consumption, and includes a hardware prototype, predictive analytics, and an energy savings dashboard. ' },
        { id: 'UIT-04', title: 'Waterlogging Prediction & Citizen Navigation System ', desc: 'Develop a Hyperlocal Urban Hyperlocal Urban Waterlogging Prediction and Navigation System that uses IMD rainfall forecasts, drain capacity, and road elevation data to predict ward-level waterlogging risk 2-6 hours in advance using Random Forest/LSTM models. The system provides a risk heatmap, safe route navigation avoiding flooded areas, and sends WhatsApp/push alerts to subscribed users through a citizen-facing web/mobile app. ' },
        { id: 'UIT-05', title: 'Lightweight Digital Twin Dashboard for Smart City Zone Infrastructure Monitoring ', desc: 'Develop a Smart City Digital Twin Dashboard for a 1-2 sq km urban area that integrates at least three real or simulated data streams (e.g., traffic, AQI, energy, streetlights, water pressure) into a 2D/3D real-time geospatial visualization. The system provides rule-based alerts, what-if scenario simulations (e.g., road closure impact), and exportable incident reports for improved urban decision-making. ' },
        { id: 'UIT-06', title: 'Multi-Asset Urban Infrastructure Failure Prediction Engine with 30-Day Advance Warning ', desc: 'Develop an Al-based Multi-Asset Predictive Maintenance Platform that analyzes heterogeneous infrastructure data (roads, transformers, streetlights, drains) using LSTM/Isolation Forest models to predict 30-day asset failure probabilities with confidence intervals. The system provides a city-wide asset risk map, automatically generates prioritized maintenance work orders, and optimizes crew routing for efficient infrastructure management. ' }
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
      id: 'mob',
      tag: 'MOB',
      name: 'Mobility',
      shortDesc: 'EVs, autonomous vehicles, transportation and logistics solutions.',
      problems: [
        { id: 'MOB-01', title: 'Predictive Battery State-of-Health System for Indian EV Two-Wheelers ', desc: 'Develop an Al-based Battery State of Health (SoH) and Remaining Useful Life (RUL) Prediction System that uses NASA/CALCE battery datasets to train an LSTM/Gaussian Process model, applies Indian 2-wheeler duty cycle corrections (city traffic, monsoon charging, heat stress), and provides an interactive fleet dashboard with SoH/RUL predictions, configurable alerts, and model performance metrics (MAE/RMSE). ' },
        { id: 'MOB-02', title: 'Reinforcement Learning-Based Adaptive Traffic Signal Control for Indian Intersections ', desc: 'Develop an Al-based Adaptive Traffic Signal Control System using SUMO and DQN/Q-learning to optimize signal timings at a 4-way Indian mixed-traffic intersection based on real-time queue lengths. The system compares performance with fixed-timing and Webster\'s method under peak and off-peak traffic, evaluates wait time, throughput, and emissions, and optionally uses YOLO-based vehicle counting from real traffic video. ' },
        { id: 'MOB-03', title: 'Accessibility-First Multi-Modal Journey Planner Using Indian GTFS Data ', desc: 'Develop an accessible multi-modal journey planner that uses GTFS data (BMTC/BEST/DTC) and OpenStreetMap to provide cost-optimized, accessibility-aware routes with elevators, ramps, and accessible stops. The app features a screen-reader (ARIA) compatible interface, voice guidance, real-time disruption alerts, and supports multi-modal routing using Dijkstra/A* algorithms. ' },
        { id: 'MOB-04', title: 'Vehicle-to-Grid (V2G) Energy Management System Simulator for Indian EV Fleets ', desc: 'Develop an Al-based Vehicle-to-Grid (V2G) Energy Management System that simulates an EV fleet and a local grid with solar generation and demand variability using POSOCO data. The system uses LP or RL optimization to schedule charging/discharging cycles, minimizing electricity costs while maintaining vehicle availability, and provides a dashboard comparing cost savings and grid stress reduction with and without V2G. ' },
        { id: 'MOB-05', title: 'Autonomous Last-Mile Delivery Robot Simulation for Indian Urban Environments ', desc: 'Develop a ROS2-based Autonomous Delivery Robot Simulation that navigates a simulated Indian urban environment using LiDAR, camera, and SLAM (GMapping/Cartographer) for mapping and localization. The system performs dynamic obstacle avoidance, multi-stop route optimization, and monsoon visibility simulation, while evaluating delivery success rate, travel time, and collision metrics in Gazebo/AirSim. ' }
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
          title: 'AI-Based Phishing URL Detection and Browser Extension for Indian Users', 
          desc: 'Develop an AI-powered phishing URL detection system and browser extension that extracts lexical features and trains an ML classifier on India-specific datasets. The system must classify URLs in real-time as safe, suspicious, or phishing with a confidence score, alerting users via a Chrome/Firefox extension to protect against local threats like spoofed banking or government portals.' 
        },
        { 
          id: 'CYBR-02', 
          title: 'Network Intrusion Detection System Using Federated Learning for Privacy-Preserving Threat Intelligence', 
          desc: 'Build a federated learning-based Network Intrusion Detection System (NIDS) where simulated network nodes train local anomaly detection models on their own traffic data without sharing raw records. A central aggregator combines these models using FedAvg to produce a global model, ensuring privacy-preserving threat intelligence that complies with data protection regulations.' 
        },
        { 
          id: 'CYBR-03', 
          title: 'Deepfake Detection System for Indian Regional Language Audio-Visual Content', 
          desc: 'Develop a multimodal deepfake detection system for Indian regional language content that analyzes short video clips for facial landmark inconsistencies, lip-sync errors, and audio spectral anomalies. The system should use CNNs/Vision Transformers and audio classifiers to fuse scores for a combined confidence output, providing a web-based upload-and-detect interface to combat localized misinformation.' 
        }
      ]
    }
  ];

  const activeDomainData = trackData.find(d => d.id === activeDomain);

  return (
    <>
      <section id="tracks" className="py-12 sm:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 font-heading text-white">
              Hackathon <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan">Tracks</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
              Select a domain below to explore its official problem statements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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
                
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
                  {domain.shortDesc}
                </p>

                {/* FOOTER WITH DYNAMIC LINK */}
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

      {activeDomain && activeDomainData && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 opacity-100 transition-opacity duration-300">
          
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-xl" 
            onClick={closeModal}
          ></div>
          
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto scrollbar-hide bg-[#030811]/95 border-2 border-cyan/50 shadow-[0_0_50px_rgba(6,182,212,0.3)] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 transform scale-100 transition-transform duration-300">
            
            <button 
              onClick={closeModal}
              className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 p-1.5 sm:p-2 rounded-full border border-transparent hover:border-red-500/50 transition-all z-[110]"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="text-center mb-6 sm:mb-8 relative z-10 mt-3 sm:mt-0">
              <span className="inline-block px-3 py-1 text-cyan border border-cyan/40 rounded-full text-[10px] sm:text-xs font-bold tracking-widest bg-cyan/5 mb-3">
                [{activeDomainData.tag}]
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {activeDomainData.name}
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-5 relative z-10">
              {activeDomainData.problems.map((problem) => {
                const isProblemActive = activeProblem === problem.id;
                return (
                  <div 
                    key={problem.id}
                    onClick={() => toggleProblem(problem.id)}
                    className={`cursor-pointer rounded-xl sm:rounded-2xl border transition-all duration-300 flex flex-col bg-[#030811] overflow-hidden
                      ${isProblemActive 
                        ? 'border-electric shadow-[0_0_20px_rgba(14,124,196,0.4)]' 
                        : 'border-white/10 hover:border-cyan/40 hover:bg-white/5'
                      }`}
                  >
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
