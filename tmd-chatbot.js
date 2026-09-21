/* ============================================================
   TMD AI PROJECT CONSULTANT CHATBOT v7 (Direct & Clean)
   Tech Mind Developers | techminddevelopers.in
   ============================================================ */

(function() {
    'use strict';

    var CONFIG = {
        phone: '917835019421',
        displayPhone: '+91-7835019421',
        whatsappUrl: 'https://wa.me/917835019421',
        leadEmail: 'contact@techminddevelopers.in',
        companyName: 'Tech Mind Developers',
        botName: 'Tech Mind Developers',
        typingDelay: 450,
        messageDelay: 350
    };

    var SERVICES = {
        'website':   { label: 'Website',                icon: 'fas fa-globe' },
        'ecommerce': { label: 'Online Store / E-Commerce', icon: 'fas fa-shopping-cart' },
        'mobile':    { label: 'Mobile App',              icon: 'fas fa-mobile-alt' },
        'erp':       { label: 'Business Software / ERP', icon: 'fas fa-building' },
        'ai':        { label: 'AI & Automation',         icon: 'fas fa-robot' },
        'seo':       { label: 'Google Ranking & SEO',    icon: 'fas fa-chart-line' },
        'other':     { label: 'Other / Custom Project',  icon: 'fas fa-pen' }
    };

    var SERVICE_QUESTIONS = {
        'website': {
            q: "What kind of website are you looking for?",
            placeholder: "E.g. Real estate portal, Hospital, Custom site...",
            options: [
                { label: 'Business Profile / Company Website' },
                { label: 'Single Page / Landing Page' },
                { label: 'Product / Portfolio Showcase' },
                { label: 'Blog / News Portal' }
            ]
        },
        'ecommerce': {
            q: "What would you like to sell in your online store?",
            placeholder: "E.g. Jewellery, Furniture, Books, Cosmetics...",
            options: [
                { label: 'Clothing & Fashion' },
                { label: 'Grocery & Daily Needs' },
                { label: 'Electronics & General Products' },
                { label: 'Multi-category Store' }
            ]
        },
        'mobile': {
            q: "Which platform is your Mobile App for?",
            placeholder: "E.g. Tablet app, Custom App requirement...",
            options: [
                { label: 'Both Android & iPhone (Both)' },
                { label: 'Only Android' },
                { label: 'Only iPhone' }
            ]
        },
        'erp': {
            q: "What type of business do you need software for?",
            placeholder: "E.g. Hospital ERP, Hotel Management, Real Estate CRM...",
            options: [
                { label: 'Pathology Lab / Diagnostic Center' },
                { label: 'Factory / Inventory & Stock' },
                { label: 'Billing, GST & Accounts' },
                { label: 'School / Institute Management' },
                { label: 'Office / Custom Business' }
            ]
        },
        'ai': {
            q: "How would you like AI or Automation to help you?",
            placeholder: "E.g. Document parsing, Voice AI, Custom Automation...",
            options: [
                { label: 'WhatsApp Customer Auto-Reply' },
                { label: 'Website Chatbot for Inquiries' },
                { label: 'Work & Data Automation' }
            ]
        },
        'seo': {
            q: "What is your main digital marketing goal?",
            placeholder: "E.g. YouTube marketing, Lead generation ads...",
            options: [
                { label: 'Rank #1 on Google Maps (Local)' },
                { label: 'Get More Clients from Google Search' },
                { label: 'Social Media & Online Ads' }
            ]
        }
    };

    var state = {
        step: 'welcome',
        selectedService: null,
        userGoal: '',
        userFeatures: '',
        userWebsiteUrl: '',
        userName: '',
        userPhone: '',
        userEmail: '',
        isOpen: false,
        started: false
    };

    function injectStyles() {
        var style = document.createElement('style');
        style.id = 'tmd-chatbot-css';
        style.textContent = [
'/* Trigger Wrapper & Static Curved Top-Arc Caption */',
'.tmd-chat-trigger-wrap {',
'    position: fixed;',
'    bottom: 202px;',
'    right: 10px;',
'    z-index: 9998;',
'    width: 94px;',
'    height: 94px;',
'    display: flex;',
'    align-items: center;',
'    justify-content: center;',
'    cursor: pointer;',
'    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);',
'}',
'.tmd-chat-trigger-wrap:hover { transform: scale(1.08); }',
'.tmd-chat-trigger-wrap.active { display: none; }',
'',
'.tmd-static-arc-text {',
'    position: absolute;',
'    inset: 0;',
'    width: 100%;',
'    height: 100%;',
'    pointer-events: none;',
'}',
'',
'.tmd-static-arc-text text {',
'    fill: #38bdf8;',
'    font-size: 8.5px;',
'    font-weight: 800;',
'    letter-spacing: 1.2px;',
'    text-transform: uppercase;',
'    font-family: "Plus Jakarta Sans", -apple-system, sans-serif;',
'    filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.85));',
'}',
'[data-theme="light"] .tmd-static-arc-text text {',
'    fill: #0284c7;',
'    filter: drop-shadow(0 0 4px rgba(2, 132, 199, 0.4));',
'}',
'',
'.tmd-chat-trigger {',
'    width: 58px;',
'    height: 58px;',
'    border-radius: 50%;',
'    background: linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #06b6d4 100%);',
'    background-size: 200% 200%;',
'    animation: tmd-gradientShift 4s ease infinite, tmd-pulseGlow 2.5s infinite;',
'    border: 2px solid rgba(255, 255, 255, 0.28);',
'    cursor: pointer;',
'    display: flex;',
'    align-items: center;',
'    justify-content: center;',
'    box-shadow: 0 10px 30px rgba(37, 99, 235, 0.5), inset 0 0 15px rgba(255,255,255,0.3);',
'    color: #fff;',
'    font-size: 1.5rem;',
'    position: relative;',
'    z-index: 2;',
'    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);',
'    padding: 0;',
'    outline: none;',
'}',
'.tmd-chat-trigger i { animation: tmd-iconBlink 1.8s ease-in-out infinite; }',

'@keyframes tmd-gradientShift {',
'    0% { background-position: 0% 50%; }',
'    50% { background-position: 100% 50%; }',
'    100% { background-position: 0% 50%; }',
'}',
'@keyframes tmd-pulseGlow {',
'    0%, 100% { box-shadow: 0 8px 30px rgba(37,99,235,0.45), 0 0 0 0 rgba(59,130,246,0.4); }',
'    50% { box-shadow: 0 8px 35px rgba(37,99,235,0.6), 0 0 0 12px rgba(59,130,246,0); }',
'}',
'@keyframes tmd-iconBlink {',
'    0%, 100% { opacity: 1; transform: scale(1); }',
'    50% { opacity: 0.65; transform: scale(0.9); }',
'}',

'/* Chat Window */',
'.tmd-chat-window {',
'    position: fixed;',
'    bottom: 24px;',
'    right: 24px;',
'    width: 390px;',
'    height: 575px;',
'    max-height: calc(100vh - 48px);',
'    max-height: calc(100dvh - 48px);',
'    z-index: 9999;',
'    border-radius: 24px;',
'    overflow: hidden;',
'    display: none;',
'    flex-direction: column;',
'    background: rgba(10, 14, 23, 0.94);',
'    backdrop-filter: blur(25px);',
'    -webkit-backdrop-filter: blur(25px);',
'    border: 1px solid rgba(59, 130, 246, 0.28);',
'    box-shadow: 0 25px 70px -10px rgba(0, 0, 0, 0.85), 0 0 40px -5px rgba(37, 99, 235, 0.22);',
'    transform: translateY(25px) scale(0.94);',
'    opacity: 0;',
'    transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease;',
'}',
'.tmd-chat-window.open {',
'    display: flex;',
'    transform: translateY(0) scale(1);',
'    opacity: 1;',
'}',
'[data-theme="light"] .tmd-chat-window {',
'    background: rgba(255, 255, 255, 0.96);',
'    border-color: rgba(59, 130, 246, 0.25);',
'    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.2), 0 0 30px rgba(59, 130, 246, 0.15);',
'}',

'/* Gradient Header */',
'.tmd-chat-header {',
'    background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #6366f1 100%);',
'    padding: 16px 20px;',
'    display: flex;',
'    align-items: center;',
'    gap: 12px;',
'    border-bottom: 1px solid rgba(255, 255, 255, 0.12);',
'    position: relative;',
'    flex-shrink: 0;',
'    box-shadow: 0 4px 20px rgba(0,0,0,0.25);',
'}',
'.tmd-chat-header-avatar {',
'    width: 42px;',
'    height: 42px;',
'    border-radius: 12px;',
'    background: rgba(255, 255, 255, 0.18);',
'    backdrop-filter: blur(10px);',
'    border: 1px solid rgba(255, 255, 255, 0.3);',
'    display: flex;',
'    align-items: center;',
'    justify-content: center;',
'    font-size: 1.25rem;',
'    color: #fff;',
'    flex-shrink: 0;',
'}',
'.tmd-chat-header-info h4 {',
'    font-size: 0.98rem;',
'    font-weight: 800;',
'    color: #ffffff;',
'    margin: 0;',
'    letter-spacing: 0.3px;',
'}',
'.tmd-chat-header-info p {',
'    font-size: 0.76rem;',
'    color: rgba(255, 255, 255, 0.9);',
'    margin: 3px 0 0;',
'    display: flex;',
'    align-items: center;',
'    gap: 6px;',
'    font-weight: 600;',
'}',
'.tmd-online-dot {',
'    width: 8px;',
'    height: 8px;',
'    background: #22c55e;',
'    border-radius: 50%;',
'    display: inline-block;',
'    box-shadow: 0 0 8px #22c55e;',
'    animation: tmd-op 2s infinite;',
'}',
'@keyframes tmd-op { 0%,100%{opacity:1; transform:scale(1)} 50%{opacity:0.4; transform:scale(0.85)} }',

'.tmd-chat-close {',
'    position: absolute;',
'    top: 14px;',
'    right: 14px;',
'    background: rgba(255, 255, 255, 0.12);',
'    backdrop-filter: blur(12px);',
'    -webkit-backdrop-filter: blur(12px);',
'    border: 1px solid rgba(255, 255, 255, 0.28);',
'    color: #ffffff;',
'    width: 32px;',
'    height: 32px;',
'    border-radius: 10px;',
'    cursor: pointer;',
'    display: flex;',
'    align-items: center;',
'    justify-content: center;',
'    font-size: 0.88rem;',
'    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.3);',
'    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);',
'}',
'.tmd-chat-close:hover {',
'    background: linear-gradient(135deg, rgba(239, 68, 68, 0.9) 0%, rgba(220, 38, 38, 0.95) 100%);',
'    border-color: rgba(255, 255, 255, 0.5);',
'    transform: rotate(90deg) scale(1.1);',
'    box-shadow: 0 6px 20px rgba(239, 68, 68, 0.45), 0 0 12px rgba(255, 255, 255, 0.3);',
'}',
'.tmd-chat-close:active {',
'    transform: rotate(90deg) scale(0.92);',
'}',

'/* Chat Body */',
'.tmd-chat-body {',
'    flex: 1 1 auto;',
'    min-height: 0;',
'    overflow-y: auto;',
'    padding: 18px 16px 28px;',
'    display: flex;',
'    flex-direction: column;',
'    gap: 14px;',
'    scroll-behavior: smooth;',
'    background: radial-gradient(circle at top right, rgba(37, 99, 235, 0.08), transparent 60%);',
'}',
'.tmd-chat-body::-webkit-scrollbar { width: 5px; }',
'.tmd-chat-body::-webkit-scrollbar-thumb { background: rgba(59, 130, 246, 0.25); border-radius: 4px; }',
'[data-theme="light"] .tmd-chat-body::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); }',

'/* Message Bubbles */',
'.tmd-msg {',
'    max-width: 88%;',
'    padding: 12px 16px;',
'    border-radius: 18px;',
'    font-size: 0.88rem;',
'    line-height: 1.55;',
'    animation: tmd-msgIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);',
'    word-wrap: break-word;',
'    flex-shrink: 0;',
'}',
'@keyframes tmd-msgIn {',
'    from { opacity: 0; transform: translateY(12px) scale(0.95); }',
'    to { opacity: 1; transform: translateY(0) scale(1); }',
'}',

'.tmd-msg.bot {',
'    align-self: flex-start;',
'    background: rgba(30, 41, 59, 0.8);',
'    border: 1px solid rgba(59, 130, 246, 0.28);',
'    color: #f1f5f9;',
'    border-bottom-left-radius: 4px;',
'    box-shadow: 0 4px 15px rgba(0,0,0,0.25);',
'}',
'[data-theme="light"] .tmd-msg.bot {',
'    background: #f8fafc;',
'    border-color: rgba(59, 130, 246, 0.2);',
'    color: #0f172a;',
'    box-shadow: 0 4px 15px rgba(0,0,0,0.05);',
'}',

'.tmd-msg.user {',
'    align-self: flex-end;',
'    background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);',
'    color: #ffffff;',
'    border-bottom-right-radius: 4px;',
'    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.35);',
'    font-weight: 500;',
'}',

'.tmd-msg-name {',
'    font-size: 0.68rem;',
'    font-weight: 800;',
'    color: #38bdf8;',
'    margin-bottom: 4px;',
'    text-transform: uppercase;',
'    letter-spacing: 0.8px;',
'    display: flex;',
'    align-items: center;',
'    gap: 4px;',
'}',
'[data-theme="light"] .tmd-msg-name { color: #2563eb; }',

'/* Typing Animation */',
'.tmd-typing {',
'    display: flex;',
'    align-items: center;',
'    gap: 6px;',
'    padding: 12px 18px;',
'    align-self: flex-start;',
'    background: rgba(30, 41, 59, 0.7);',
'    border: 1px solid rgba(59, 130, 246, 0.2);',
'    border-radius: 18px;',
'    border-bottom-left-radius: 4px;',
'    flex-shrink: 0;',
'}',
'.tmd-typing span {',
'    width: 7px;',
'    height: 7px;',
'    background: #38bdf8;',
'    border-radius: 50%;',
'    animation: tmd-td 1.4s ease-in-out infinite;',
'}',
'.tmd-typing span:nth-child(2) { animation-delay: 0.2s; }',
'.tmd-typing span:nth-child(3) { animation-delay: 0.4s; }',
'@keyframes tmd-td { 0%,100%{opacity:0.3; transform:scale(0.8)} 50%{opacity:1; transform:scale(1.2)} }',

'/* Quick Replies Buttons */',
'.tmd-quick-replies {',
'    display: flex;',
'    flex-wrap: wrap;',
'    gap: 8px;',
'    animation: tmd-msgIn 0.35s ease-out;',
'    flex-shrink: 0;',
'}',
'.tmd-qr-btn {',
'    padding: 10px 14px;',
'    border-radius: 12px;',
'    border: 1px solid rgba(56, 189, 248, 0.3);',
'    background: linear-gradient(135deg, rgba(37, 99, 235, 0.12), rgba(124, 58, 237, 0.08));',
'    color: #7dd3fc;',
'    font-size: 0.83rem;',
'    font-weight: 600;',
'    cursor: pointer;',
'    transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);',
'    display: inline-flex;',
'    align-items: center;',
'    gap: 7px;',
'    white-space: nowrap;',
'    font-family: inherit;',
'    box-shadow: 0 4px 12px rgba(0,0,0,0.15);',
'}',
'.tmd-qr-btn:hover {',
'    background: linear-gradient(135deg, rgba(37, 99, 235, 0.35), rgba(124, 58, 237, 0.3));',
'    border-color: #38bdf8;',
'    color: #ffffff;',
'    transform: translateY(-2px) scale(1.02);',
'    box-shadow: 0 6px 20px rgba(56, 189, 248, 0.3);',
'}',
'[data-theme="light"] .tmd-qr-btn {',
'    background: #f0fdf4;',
'    border-color: rgba(37, 99, 235, 0.25);',
'    color: #1d4ed8;',
'}',
'[data-theme="light"] .tmd-qr-btn:hover {',
'    background: #dbeafe;',
'    color: #1e40af;',
'}',

'/* Input Bar */',
'.tmd-chat-input-wrap {',
'    padding: 12px 16px;',
'    border-top: 1px solid rgba(59, 130, 246, 0.18);',
'    display: flex;',
'    align-items: center;',
'    gap: 10px;',
'    background: rgba(15, 23, 42, 0.95);',
'    backdrop-filter: blur(15px);',
'    flex-shrink: 0;',
'}',
'[data-theme="light"] .tmd-chat-input-wrap {',
'    border-top-color: rgba(0,0,0,0.08);',
'    background: #f8fafc;',
'}',
'.tmd-chat-input {',
'    flex: 1;',
'    background: rgba(30, 41, 59, 0.7);',
'    border: 1px solid rgba(59, 130, 246, 0.25);',
'    border-radius: 12px;',
'    padding: 11px 16px;',
'    color: #f8fafc;',
'    font-size: 0.88rem;',
'    outline: none;',
'    transition: all 0.25s ease;',
'    font-family: inherit;',
'}',
'.tmd-chat-input::placeholder { color: #64748b; }',
'.tmd-chat-input:focus {',
'    border-color: #38bdf8;',
'    box-shadow: 0 0 15px rgba(56, 189, 248, 0.25);',
'    background: rgba(30, 41, 59, 0.95);',
'}',
'[data-theme="light"] .tmd-chat-input {',
'    background: #ffffff;',
'    border-color: rgba(0,0,0,0.15);',
'    color: #0f172a;',
'}',
'[data-theme="light"] .tmd-chat-input:focus {',
'    border-color: #2563eb;',
'    box-shadow: 0 0 15px rgba(37, 99, 235, 0.2);',
'}',
'.tmd-chat-send {',
'    width: 42px;',
'    height: 42px;',
'    border-radius: 12px;',
'    border: none;',
'    background: linear-gradient(135deg, #2563eb, #7c3aed);',
'    color: #fff;',
'    font-size: 0.95rem;',
'    cursor: pointer;',
'    display: flex;',
'    align-items: center;',
'    justify-content: center;',
'    transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);',
'    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.4);',
'    flex-shrink: 0;',
'}',
'.tmd-chat-send:hover {',
'    transform: scale(1.1) rotate(-5deg);',
'    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.6);',
'}',

'/* Thank You Card */',
'.tmd-thankyou-card {',
'    background: linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(56, 189, 248, 0.1));',
'    border: 1px solid rgba(34, 197, 94, 0.4);',
'    border-radius: 18px;',
'    padding: 18px;',
'    text-align: left;',
'    align-self: flex-start;',
'    width: 94%;',
'    animation: tmd-msgIn 0.35s ease-out;',
'    box-shadow: 0 10px 30px rgba(0,0,0,0.3);',
'    flex-shrink: 0;',
'}',
'.tmd-thankyou-card .tmd-ty-head {',
'    display: flex;',
'    align-items: center;',
'    gap: 10px;',
'    margin-bottom: 12px;',
'}',
'.tmd-thankyou-card .tmd-ty-icon {',
'    font-size: 1.8rem;',
'    color: #22c55e;',
'    filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.5));',
'}',
'.tmd-thankyou-card h5 {',
'    font-size: 1rem;',
'    font-weight: 800;',
'    color: #ffffff;',
'    margin: 0;',
'}',
'[data-theme="light"] .tmd-thankyou-card h5 { color: #0f172a; }',
'.tmd-thankyou-card p {',
'    font-size: 0.85rem;',
'    color: #cbd5e1;',
'    margin: 0 0 12px;',
'    line-height: 1.5;',
'}',
'[data-theme="light"] .tmd-thankyou-card p { color: #334155; }',
'.tmd-lead-summary {',
'    background: rgba(0, 0, 0, 0.35);',
'    border-radius: 12px;',
'    padding: 12px 14px;',
'    font-size: 0.82rem;',
'    margin-bottom: 14px;',
'    border: 1px solid rgba(255, 255, 255, 0.08);',
'}',
'[data-theme="light"] .tmd-lead-summary {',
'    background: #ffffff;',
'    border-color: rgba(0,0,0,0.08);',
'}',
'.tmd-lead-row {',
'    display: flex;',
'    margin-bottom: 5px;',
'    gap: 8px;',
'    color: #e2e8f0;',
'}',
'[data-theme="light"] .tmd-lead-row { color: #1e293b; }',
'.tmd-lead-row strong {',
'    color: #38bdf8;',
'    min-width: 60px;',
'    font-weight: 700;',
'}',
'[data-theme="light"] .tmd-lead-row strong { color: #2563eb; }',

'/* CTA Buttons */',
'.tmd-optional-cta { display: flex; gap: 8px; margin-top: 8px; }',
'.tmd-opt-btn {',
'    flex: 1;',
'    padding: 10px;',
'    border-radius: 10px;',
'    font-size: 0.82rem;',
'    font-weight: 700;',
'    text-decoration: none;',
'    text-align: center;',
'    display: inline-flex;',
'    align-items: center;',
'    justify-content: center;',
'    gap: 6px;',
'    transition: all 0.25s;',
'    font-family: inherit;',
'    color: #fff;',
'    box-shadow: 0 4px 15px rgba(0,0,0,0.2);',
'}',
'.tmd-opt-wa { background: linear-gradient(135deg, #25D366, #128C7E); }',
'.tmd-opt-wa:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(37,211,102,0.45); color: #fff; }',
'.tmd-opt-call { background: linear-gradient(135deg, #2563eb, #1d4ed8); }',
'.tmd-opt-call:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(37,99,235,0.45); color: #fff; }',

'/* Powered By Badge */',
'.tmd-powered {',
'    text-align: center;',
'    padding: 7px;',
'    font-size: 0.68rem;',
'    color: #64748b;',
'    background: rgba(10, 14, 23, 0.98);',
'    border-top: 1px solid rgba(255,255,255,0.05);',
'    flex-shrink: 0;',
'}',
'[data-theme="light"] .tmd-powered { background: #f1f5f9; border-top-color: rgba(0,0,0,0.05); }',
'.tmd-powered a { color: #38bdf8; text-decoration: none; font-weight: 700; }',

'/* Mobile Screens */',
'@media (max-width: 480px) {',
'    .tmd-chat-window { right: 0; bottom: 0; left: 0; width: 100%; height: 100vh; height: 100dvh; max-height: 100dvh; border-radius: 0; }',
'    .tmd-chat-trigger-wrap { bottom: 185px; right: 10px; width: 76px; height: 76px; }',
'    .tmd-chat-trigger { width: 46px; height: 46px; font-size: 1.2rem; }',
'}'
        ].join('\n');
        document.head.appendChild(style);
    }

    function buildHTML() {
        // Trigger Wrapper with Static Top-Arc Caption
        var wrap = document.createElement('div');
        wrap.className = 'tmd-chat-trigger-wrap';
        wrap.id = 'tmdChatTriggerWrap';
        wrap.setAttribute('aria-label', 'Ask AI Assistant');
        wrap.innerHTML =
            '<svg class="tmd-static-arc-text" viewBox="0 0 100 100">' +
                '<path id="tmdTopArc" d="M 11, 50 A 39,39 0 0,1 89, 50" fill="none" />' +
                '<text>' +
                    '<textPath href="#tmdTopArc" startOffset="50%" text-anchor="middle">ASK AI ASSISTANT</textPath>' +
                '</text>' +
            '</svg>' +
            '<button class="tmd-chat-trigger" id="tmdChatTrigger" aria-label="Open AI Assistant">' +
                '<i class="fas fa-robot"></i>' +
            '</button>';
        document.body.appendChild(wrap);

        // Chat Window
        var w = document.createElement('div');
        w.className = 'tmd-chat-window';
        w.id = 'tmdChatWindow';
        w.innerHTML =
            '<div class="tmd-chat-header">' +
                '<div class="tmd-chat-header-avatar"><i class="fas fa-robot"></i></div>' +
                '<div class="tmd-chat-header-info">' +
                    '<h4>Tech Mind Developers</h4>' +
                    '<p><span class="tmd-online-dot"></span> Your AI Assistant</p>' +
                '</div>' +
                '<button class="tmd-chat-close" id="tmdChatClose" aria-label="Close Chat"><i class="fas fa-times"></i></button>' +
            '</div>' +
            '<div class="tmd-chat-body" id="tmdChatBody"></div>' +
            '<div class="tmd-chat-input-wrap" id="tmdInputWrap" style="display:none;">' +
                '<input type="text" class="tmd-chat-input" id="tmdChatInput" placeholder="Type here..." autocomplete="off">' +
                '<button class="tmd-chat-send" id="tmdChatSend" aria-label="Send"><i class="fas fa-paper-plane"></i></button>' +
            '</div>' +
            '<div class="tmd-powered">⚡ Powered by <a href="https://techminddevelopers.in/" target="_blank">' + CONFIG.companyName + '</a> AI Architecture</div>';
        document.body.appendChild(w);
    }

    function scrollToBottom() {
        var b = document.getElementById('tmdChatBody');
        if (!b) return;
        b.scrollTop = b.scrollHeight;
        setTimeout(function() { b.scrollTop = b.scrollHeight; }, 60);
        setTimeout(function() { b.scrollTop = b.scrollHeight; }, 250);
    }

    function addBotMsg(html) {
        var b = document.getElementById('tmdChatBody');
        var m = document.createElement('div');
        m.className = 'tmd-msg bot';
        m.innerHTML = '<div class="tmd-msg-name"><i class="fas fa-robot"></i> Tech Mind Developers</div>' + html;
        b.appendChild(m);
        scrollToBottom();
    }

    function addUserMsg(text) {
        var b = document.getElementById('tmdChatBody');
        var m = document.createElement('div');
        m.className = 'tmd-msg user';
        m.textContent = text;
        b.appendChild(m);
        scrollToBottom();
    }

    function showTyping() {
        var b = document.getElementById('tmdChatBody');
        var t = document.createElement('div');
        t.className = 'tmd-typing'; t.id = 'tmdTyping';
        t.innerHTML = '<span></span><span></span><span></span>';
        b.appendChild(t);
        scrollToBottom();
    }

    function hideTyping() { var e = document.getElementById('tmdTyping'); if (e) e.remove(); }

    function botReply(html, cb) {
        showTyping();
        setTimeout(function() {
            hideTyping();
            addBotMsg(html);
            scrollToBottom();
            if (cb) setTimeout(cb, CONFIG.messageDelay);
        }, CONFIG.typingDelay);
    }

    function addQuickReplies(options) {
        var b = document.getElementById('tmdChatBody');
        var old = b.querySelectorAll('.tmd-quick-replies');
        old.forEach(function(el) { el.remove(); });

        var w = document.createElement('div');
        w.className = 'tmd-quick-replies';
        options.forEach(function(opt) {
            var btn = document.createElement('button');
            btn.className = 'tmd-qr-btn';
            btn.innerHTML = opt.icon ? '<i class="' + opt.icon + '"></i> ' + opt.label : opt.label;
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                if (w.parentNode) w.parentNode.removeChild(w);
                opt.action();
            });
            w.appendChild(btn);
        });
        b.appendChild(w);
        scrollToBottom();
    }

    function showInput(placeholder) {
        var w = document.getElementById('tmdInputWrap');
        var i = document.getElementById('tmdChatInput');
        w.style.display = 'flex';
        i.placeholder = placeholder || 'Type here...';
        i.value = '';
        setTimeout(function() { i.focus(); scrollToBottom(); }, 150);
    }

    function hideInput() { document.getElementById('tmdInputWrap').style.display = 'none'; }

    // Instant Background Dispatch to Serverless Email API
    function dispatchLeadDataSilently() {
        var svc = SERVICES[state.selectedService] ? SERVICES[state.selectedService].label : 'General Inquiry';
        var currentUrl = (state.userWebsiteUrl && state.userWebsiteUrl !== 'Not provided') ? state.userWebsiteUrl : 'N/A';

        var fields = {
            _subject: '🚀 New Client Lead from AI Chatbot: ' + state.userName + ' (' + state.userPhone + ')',
            _template: 'table',
            _captcha: 'false',
            _autoresponse: 'Thank you ' + state.userName + ' for contacting Tech Mind Developers! We have received your inquiry for ' + svc + '. Our technical team will reach out to you on ' + state.userPhone + ' shortly. For urgent assistance, reach us on WhatsApp: ' + CONFIG.whatsappUrl,
            name: state.userName,
            email: state.userEmail,
            _replyto: state.userEmail,
            phone: state.userPhone,
            service_needed: svc,
            current_website_url: currentUrl,
            project_requirement: state.userGoal,
            reference_website: state.userFeatures,
            submitted_at: new Date().toLocaleString('en-IN')
        };

        // 1. Primary Dispatch: FormData via AJAX (No preflight CORS issues)
        var fd = new FormData();
        for (var key in fields) {
            if (fields.hasOwnProperty(key)) {
                fd.append(key, fields[key]);
            }
        }

        fetch('https://formsubmit.co/ajax/' + CONFIG.leadEmail, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: fd
        }).then(function(res) {
            return res.json();
        }).then(function(data) {
            console.log('[TMD Lead Dispatch Success]', data);
        }).catch(function(err) {
            console.log('[TMD Lead Dispatch AJAX fallback triggered]', err);
            // 2. Guaranteed Fallback: Hidden iframe submission (Bypasses ad-blockers / CORS completely)
            try {
                var iframeName = 'tmd_lead_frame_' + Date.now();
                var iframe = document.createElement('iframe');
                iframe.name = iframeName;
                iframe.style.display = 'none';
                document.body.appendChild(iframe);

                var form = document.createElement('form');
                form.method = 'POST';
                form.action = 'https://formsubmit.co/' + CONFIG.leadEmail;
                form.target = iframeName;
                form.style.display = 'none';

                for (var f in fields) {
                    if (fields.hasOwnProperty(f)) {
                        var inp = document.createElement('input');
                        inp.type = 'hidden';
                        inp.name = f;
                        inp.value = fields[f];
                        form.appendChild(inp);
                    }
                }
                document.body.appendChild(form);
                form.submit();

                setTimeout(function() {
                    if (form.parentNode) form.parentNode.removeChild(form);
                    if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
                }, 4000);
            } catch(e) {
                console.error('[TMD Fallback Dispatch Error]', e);
            }
        });
    }

    function addThankYouCard() {
        var b = document.getElementById('tmdChatBody');
        var svc = SERVICES[state.selectedService] ? SERVICES[state.selectedService].label.replace(/^[^ ]+ /, '') : 'Custom Software';
        var goalSnippet = state.userGoal.length > 35 ? state.userGoal.substring(0,32) + '...' : state.userGoal;

        var prefilledWa = encodeURIComponent(
            'Hi Tech Mind Developers! I am ' + state.userName + '.\n\n' +
            '*Service:* ' + svc + '\n' +
            (state.userWebsiteUrl && state.userWebsiteUrl !== 'Not provided' ? '*Current Website:* ' + state.userWebsiteUrl + '\n' : '') +
            '*Details:* ' + state.userGoal + '\n' +
            '*Phone:* ' + state.userPhone + '\n' +
            '*Email:* ' + state.userEmail + '\n\n' +
            'Let\'s connect!'
        );

        var c = document.createElement('div');
        c.className = 'tmd-thankyou-card';
        c.innerHTML =
            '<div class="tmd-ty-head">' +
                '<i class="fas fa-check-circle tmd-ty-icon"></i>' +
                '<div><h5>Sent Successfully!</h5><span style="font-size:0.75rem;color:#22c55e;">Status: Delivered to Team</span></div>' +
            '</div>' +
            '<p>Thank you <strong>' + state.userName + '</strong>! We have received your details. Our team will call you on <strong>' + state.userPhone + '</strong> very soon.</p>' +
            '<div class="tmd-lead-summary">' +
                '<div class="tmd-lead-row"><strong>Service:</strong> <span>' + svc + '</span></div>' +
                (state.userWebsiteUrl && state.userWebsiteUrl !== 'Not provided' ? '<div class="tmd-lead-row"><strong>Current Site:</strong> <span>' + state.userWebsiteUrl + '</span></div>' : '') +
                '<div class="tmd-lead-row"><strong>Details:</strong> <span>' + goalSnippet + '</span></div>' +
                '<div class="tmd-lead-row"><strong>Email:</strong> <span>' + state.userEmail + '</span></div>' +
            '</div>' +
            '<div class="tmd-optional-cta">' +
                '<a href="' + CONFIG.whatsappUrl + '?text=' + prefilledWa + '" target="_blank" rel="noopener noreferrer" class="tmd-opt-btn tmd-opt-wa"><i class="fab fa-whatsapp"></i> WhatsApp Us</a>' +
                '<a href="tel:+' + CONFIG.phone + '" class="tmd-opt-btn tmd-opt-call"><i class="fas fa-phone"></i> Call Now</a>' +
            '</div>';
        b.appendChild(c);
        scrollToBottom();
    }

    // ===== CONVERSATION FLOW =====
    function startConversation() {
        document.getElementById('tmdChatBody').innerHTML = '';
        state.step = 'welcome';

        botReply("Hi there! 👋 Welcome to <strong>Tech Mind Developers</strong>.", function() {
            botReply("I am your AI Assistant. 🤖 Tell me what you need, and our expert team will make it happen!", function() {
                botReply("To start, what kind of service are you looking for?", function() {
                    state.step = 'service';
                    showServiceOptions();
                });
            });
        });
    }

    function showServiceOptions() {
        var options = [
            { label: 'Website', icon: 'fas fa-globe', action: function() { selectService('website'); } },
            { label: 'Online Store / E-Commerce', icon: 'fas fa-shopping-cart', action: function() { selectService('ecommerce'); } },
            { label: 'Mobile App', icon: 'fas fa-mobile-alt', action: function() { selectService('mobile'); } },
            { label: 'Business Software / ERP', icon: 'fas fa-building', action: function() { selectService('erp'); } },
            { label: 'AI & Automation', icon: 'fas fa-robot', action: function() { selectService('ai'); } },
            { label: 'Google Ranking & SEO', icon: 'fas fa-chart-line', action: function() { selectService('seo'); } },
            { label: 'Other / Custom Project', icon: 'fas fa-pen', action: function() { selectService('other'); } },
            { label: 'Talk on WhatsApp', icon: 'fab fa-whatsapp', action: function() { openWhatsAppDirect(); } }
        ];
        addQuickReplies(options);
        showInput('Choose a service above or type here...');
    }

    function selectService(key) {
        state.selectedService = key;
        state.userGoal = '';
        state.userFeatures = '';
        state.userWebsiteUrl = '';
        addUserMsg(SERVICES[key] ? SERVICES[key].label : key);

        if (key === 'website') {
            state.step = 'website_choice';
            botReply("Are you looking to build a <strong>Brand New Website</strong> or <strong>Redesign / Upgrade an Existing Website</strong>?", function() {
                var options = [
                    { label: 'Brand New Website', icon: 'fas fa-rocket', action: function() { startNewWebsiteFlow(); } },
                    { label: 'Redesign / Upgrade Existing', icon: 'fas fa-sync-alt', action: function() { startUpgradeWebsiteFlow(); } },
                    { label: 'Other (Type your own)', icon: 'fas fa-pen', action: function() { handleQuestionOther('E.g. Web portal, Custom web application...', 'website_choice'); } }
                ];
                addQuickReplies(options);
                showInput('Choose an option above or type here...');
            });
            return;
        }

        if (SERVICE_QUESTIONS[key]) {
            state.step = 'question';
            var qData = SERVICE_QUESTIONS[key];
            botReply("<strong>" + qData.q + "</strong>", function() {
                var options = qData.options.map(function(opt) {
                    return {
                        label: opt.label,
                        icon: '',
                        action: function() {
                            handleQuestionAnswer(opt.label);
                        }
                    };
                });
                options.push({
                    label: 'Other (Type your own)',
                    icon: 'fas fa-pen',
                    action: function() {
                        handleQuestionOther(qData.placeholder);
                    }
                });
                addQuickReplies(options);
                showInput(qData.placeholder || 'Choose an option above or type here...');
            });
        } else {
            botReply("Can you tell me a little bit about your project or business idea?", function() {
                state.step = 'question';
                showInput('Type your idea or requirement here...');
            });
        }
    }

    function handleQuestionOther(placeholder, step) {
        addUserMsg("Other");
        botReply("Please type your requirement below: ✍️", function() {
            if (step) state.step = step;
            showInput(placeholder || 'Type your requirement here...');
        });
    }

    function startNewWebsiteFlow(userText) {
        if (!userText) {
            addUserMsg("Brand New Website");
        }
        state.step = 'question';
        var qData = SERVICE_QUESTIONS['website'];
        botReply("<strong>" + qData.q + "</strong>", function() {
            var options = qData.options.map(function(opt) {
                return {
                    label: opt.label,
                    icon: '',
                    action: function() {
                        handleQuestionAnswer(opt.label);
                    }
                };
            });
            options.push({
                label: 'Other (Type your own)',
                icon: 'fas fa-pen',
                action: function() {
                    handleQuestionOther(qData.placeholder);
                }
            });
            addQuickReplies(options);
            showInput(qData.placeholder || 'Choose an option above or type here...');
        });
    }

    function startUpgradeWebsiteFlow(userText) {
        if (!userText) {
            addUserMsg("Redesign / Upgrade Existing");
        }
        state.step = 'upgrade_url';
        botReply("Please share your <strong>current website link (URL)</strong> so our technical team can review it:", function() {
            var options = [
                { label: "Don't have link / Skip", icon: 'fas fa-forward', action: function() { skipUpgradeUrl(); } }
            ];
            addQuickReplies(options);
            showInput('E.g. www.yourcompany.com...');
        });
    }

    function skipUpgradeUrl() {
        state.userWebsiteUrl = 'Not provided';
        addUserMsg("Don't have link / Skip");
        askUpgradeReason();
    }

    function handleUpgradeUrl(urlText) {
        state.userWebsiteUrl = urlText;
        addUserMsg(urlText);
        hideInput();
        askUpgradeReason();
    }

    function askUpgradeReason() {
        state.step = 'upgrade_reason';
        botReply("What is the <strong>main reason</strong> you want to upgrade or redesign it?", function() {
            var options = [
                { label: 'Modern Design & Mobile Friendly', icon: 'fas fa-mobile-alt', action: function() { handleUpgradeReason('Modern Design & Mobile Friendly'); } },
                { label: 'Faster Speed & Performance', icon: 'fas fa-bolt', action: function() { handleUpgradeReason('Faster Speed & Performance'); } },
                { label: 'Add New Features & Pages', icon: 'fas fa-plus-circle', action: function() { handleUpgradeReason('Add New Features & Pages'); } },
                { label: 'Get More Leads & Google Ranking', icon: 'fas fa-chart-line', action: function() { handleUpgradeReason('Get More Leads & Google Ranking'); } },
                { label: 'Other (Type your reason)', icon: 'fas fa-pen', action: function() { handleQuestionOther('E.g. Slow speed, Outdated design, Not mobile friendly...', 'upgrade_reason'); } }
            ];
            addQuickReplies(options);
            showInput('Choose a reason above or type here...');
        });
    }

    function handleUpgradeReason(reason) {
        state.userGoal = 'Upgrade: ' + reason + (state.userWebsiteUrl && state.userWebsiteUrl !== 'Not provided' ? ' (Current URL: ' + state.userWebsiteUrl + ')' : '');
        state.userFeatures = 'Website Redesign / Upgrade. Current URL: ' + state.userWebsiteUrl + '. Reason: ' + reason;
        addUserMsg(reason);
        hideInput();

        botReply("To share the complete details and proposal, <strong>may I know your name?</strong>", function() {
            state.step = 'name';
            showInput('Enter your name...');
        });
    }

    function handleQuestionAnswer(answerLabel) {
        state.userGoal = answerLabel;
        state.userFeatures = 'Requirement: ' + answerLabel;
        addUserMsg(answerLabel);

        botReply("To share the complete details and proposal, <strong>may I know your name?</strong>", function() {
            state.step = 'name';
            showInput('Enter your name...');
        });
    }

    function openWhatsAppDirect(customText) {
        var text = encodeURIComponent(customText || "Hi Tech Mind Developers! I was chatting with your AI Assistant on techminddevelopers.in and would like to discuss my project.");
        window.open(CONFIG.whatsappUrl + '?text=' + text, '_blank');
        addUserMsg("Chat on WhatsApp");
        botReply("Opened WhatsApp for you! Our team is ready to discuss your project. 😊");
    }

    function handleGoal(text) {
        state.userGoal = text;
        addUserMsg(text);
        hideInput();

        botReply("To share the complete details and proposal, <strong>may I know your name?</strong>", function() {
            state.step = 'name';
            showInput('Enter your name...');
        });
    }

    function handleFeatures(text) {
        state.userFeatures = text;
        addUserMsg(text);
        hideInput();

        botReply("To share the complete details and proposal, <strong>may I know your name?</strong>", function() {
            state.step = 'name';
            showInput('Enter your name...');
        });
    }

    function handleName(text) {
        state.userName = text;
        addUserMsg(text);
        hideInput();
        botReply("What is your <strong>Mobile or WhatsApp number</strong> so our technical team can reach out to you?", function() {
            state.step = 'phone';
            showInput('E.g. +91 9876543210...');
        });
    }

    function handlePhone(text) {
        state.userPhone = text;
        addUserMsg(text);
        hideInput();
        botReply("And your <strong>Email ID</strong> so we can send you the detailed proposal?", function() {
            state.step = 'email';
            showInput('Enter your email address...');
        });
    }

    function handleEmail(text) {
        state.userEmail = text;
        addUserMsg(text);
        hideInput();

        dispatchLeadDataSilently();

        botReply("Thank you! Saving your details... ⚙️", function() {
            addThankYouCard();
            setTimeout(function() {
                botReply("Is there anything else I can help you with?", function() {
                    state.step = 'done';
                    addQuickReplies([
                        { label: '🔄 I have another query', icon: '', action: function() {
                            addUserMsg('I have another query');
                            state.step = 'service';
                            state.userGoal = '';
                            state.userFeatures = '';
                            botReply("Sure! What other service or query do you have?", showServiceOptions);
                        }},
                        { label: '✅ That\'s all, thank you!', icon: '', action: function() {
                            addUserMsg("That's all, thank you!");
                            botReply("Thank you for contacting <strong>Tech Mind Developers</strong>! We will talk to you soon. Have a great day! 😊✨");
                        }}
                    ]);
                });
            }, CONFIG.messageDelay + 300);
        });
    }

    // Input Validation logic
    function handleUserInput(text) {
        if (!text.trim()) return;
        text = text.trim();

        if ((state.step === 'goal' || state.step === 'features' || state.step === 'question' || state.step === 'service' || state.step === 'website_choice' || state.step === 'upgrade_reason') && text.length < 2) {
            addUserMsg(text);
            hideInput();
            botReply("Could you please provide a few more details so our team can understand better? 😊", function() {
                showInput('Type your requirement here...');
            });
            return;
        }

        if (state.step === 'name' && text.length < 2) {
            addUserMsg(text);
            hideInput();
            botReply("Please enter a valid name.", function() { showInput('Enter your name...'); });
            return;
        }

        if (state.step === 'phone') {
            var phoneRegex = /^[0-9+\-\s()]+$/;
            var digitCount = (text.match(/\d/g) || []).length;
            if (!phoneRegex.test(text) || digitCount < 7) {
                addUserMsg(text);
                hideInput();
                botReply("Please enter a valid mobile number containing only numbers (e.g. +91 9876543210).", function() {
                    showInput('E.g. +91 9876543210...');
                });
                return;
            }
        }

        if (state.step === 'email') {
            if (text.indexOf('@') === -1 || text.indexOf('.') === -1) {
                addUserMsg(text);
                hideInput();
                botReply("Please enter a valid email address.", function() {
                    showInput('Enter your email address...');
                });
                return;
            }
        }

        // Natural Keyword Intent Detection
        var priceKeywords = /(price|pricing|cost|kharcha|rate|budget|charges|fees|kitna|kitne|paisa|rupaye|estimate|calculator)/i;
        if (priceKeywords.test(text) && state.step !== 'name' && state.step !== 'phone' && state.step !== 'email') {
            addUserMsg(text);
            hideInput();
            botReply("Every business project has unique needs. Tell us what you need and our expert team will prepare the best, fair proposal for you! 💡", function() {
                botReply("Which service are you looking for?", showServiceOptions);
            });
            return;
        }

        var contactKeywords = /(whatsapp|call|phone|contact|number|talk|milna|baat)/i;
        if (contactKeywords.test(text) && state.step !== 'name' && state.step !== 'phone' && state.step !== 'email') {
            addUserMsg(text);
            hideInput();
            botReply("You can connect directly with our founder & senior technical team right away! 🚀", function() {
                addQuickReplies([
                    { label: '🟢 WhatsApp Us (+91-7835019421)', icon: 'fab fa-whatsapp', action: function() { openWhatsAppDirect("Hi Tech Mind Developers! I would like to discuss my project with you."); } },
                    { label: '📞 Call Now (+91-7835019421)', icon: 'fas fa-phone', action: function() { window.location.href = 'tel:+' + CONFIG.phone; } },
                    { label: '📝 Share Details Here', icon: 'fas fa-pen', action: function() {
                        state.step = 'service';
                        showServiceOptions();
                    }}
                ]);
            });
            return;
        }

        var greetingKeywords = /^(hi|hello|hey|namaste|salam|hola|good morning|good evening|kaise ho)/i;
        if (greetingKeywords.test(text) && state.step !== 'name' && state.step !== 'phone' && state.step !== 'email') {
            addUserMsg(text);
            hideInput();
            botReply("Hello! 👋 Great to connect with you. How can Tech Mind Developers help your business today?", function() {
                showServiceOptions();
            });
            return;
        }

        switch(state.step) {
            case 'service':
                state.selectedService = 'other';
                state.userGoal = text;
                state.userFeatures = 'Requirement: ' + text;
                addUserMsg(text);
                hideInput();
                botReply("To share the complete details and proposal, <strong>may I know your name?</strong>", function() {
                    state.step = 'name';
                    showInput('Enter your name...');
                });
                break;
            case 'website_choice':
                var lower = text.toLowerCase();
                if (/new|fresh|create|build/i.test(lower) && !/upgrade|redesign|old|existing|update/i.test(lower)) {
                    addUserMsg(text);
                    hideInput();
                    startNewWebsiteFlow(text);
                } else if (/upgrade|redesign|old|existing|update/i.test(lower)) {
                    addUserMsg(text);
                    hideInput();
                    startUpgradeWebsiteFlow(text);
                } else {
                    handleQuestionAnswer(text);
                }
                break;
            case 'upgrade_url':
                if (/^(no|none|skip|na|n\/a|nahi|don't have|dont have)/i.test(text.trim())) {
                    skipUpgradeUrl();
                } else {
                    handleUpgradeUrl(text);
                }
                break;
            case 'upgrade_reason':
                handleUpgradeReason(text);
                break;
            case 'question':
            case 'goal':
            case 'features':
                state.userGoal = text;
                state.userFeatures = 'Requirement: ' + text;
                addUserMsg(text);
                hideInput();
                botReply("To share the complete details and proposal, <strong>may I know your name?</strong>", function() {
                    state.step = 'name';
                    showInput('Enter your name...');
                });
                break;
            case 'name':            handleName(text);       break;
            case 'phone':           handlePhone(text);      break;
            case 'email':           handleEmail(text);      break;
            default:
                addUserMsg(text);
                botReply("Thank you! Your message has been noted. Our team will get back to you shortly. 😊");
                break;
        }
    }

    // ===== EVENTS =====
    function initEvents() {
        var wrap = document.getElementById('tmdChatTriggerWrap');
        var trigger = document.getElementById('tmdChatTrigger');
        var win = document.getElementById('tmdChatWindow');
        var closeBtn = document.getElementById('tmdChatClose');
        var sendBtn = document.getElementById('tmdChatSend');
        var input = document.getElementById('tmdChatInput');

        function openChat() {
            state.isOpen = true;
            win.classList.add('open');
            if (wrap) wrap.classList.add('active');
            win.offsetHeight;
            if (!state.started) { state.started = true; startConversation(); }
            scrollToBottom();
        }

        function closeChat() {
            state.isOpen = false;
            win.classList.remove('open');
            if (wrap) wrap.classList.remove('active');
        }

        if (wrap) {
            wrap.addEventListener('click', function(e) {
                e.stopPropagation();
                if (state.isOpen) { closeChat(); } else { openChat(); }
            });
        }

        closeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeChat();
        });

        sendBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            handleUserInput(input.value);
            input.value = '';
        });

        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                e.stopPropagation();
                handleUserInput(input.value);
                input.value = '';
            }
        });

        win.addEventListener('click', function(e) {
            e.stopPropagation();
        });

        document.addEventListener('click', function(e) {
            if (state.isOpen && win && !win.contains(e.target) && wrap && !wrap.contains(e.target)) {
                closeChat();
            }
        });
    }

    function init() { injectStyles(); buildHTML(); initEvents(); }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
