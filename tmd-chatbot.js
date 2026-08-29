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
        'website':   { label: '🌐 Website / Web App',      icon: 'fas fa-globe' },
        'ecommerce': { label: '🛒 E-Commerce Store',       icon: 'fas fa-shopping-cart' },
        'mobile':    { label: '📱 Mobile App',              icon: 'fas fa-mobile-alt' },
        'erp':       { label: '🏢 ERP / CRM Software',     icon: 'fas fa-building' },
        'ai':        { label: '🤖 AI / Automation',         icon: 'fas fa-robot' },
        'seo':       { label: '📈 SEO / Digital Marketing', icon: 'fas fa-chart-line' },
        'other':     { label: '💡 Something Else',          icon: 'fas fa-lightbulb' }
    };

    var state = {
        step: 'welcome',
        selectedService: null,
        userGoal: '',
        userFeatures: '',
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
'/* Trigger Button */',
'.tmd-chat-trigger {',
'    position: fixed;',
'    bottom: 155px;',
'    right: 24px;',
'    z-index: 9998;',
'    width: 58px;',
'    height: 58px;',
'    border-radius: 50%;',
'    background: linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #06b6d4 100%);',
'    background-size: 200% 200%;',
'    animation: tmd-gradientShift 4s ease infinite, tmd-pulseGlow 2.5s infinite;',
'    border: 2px solid rgba(255, 255, 255, 0.25);',
'    cursor: pointer;',
'    display: flex;',
'    align-items: center;',
'    justify-content: center;',
'    box-shadow: 0 10px 30px rgba(37, 99, 235, 0.5), inset 0 0 15px rgba(255,255,255,0.3);',
'    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);',
'    color: #fff;',
'    font-size: 1.5rem;',
'}',
'.tmd-chat-trigger:hover { transform: scale(1.12); box-shadow: 0 14px 40px rgba(37, 99, 235, 0.7); }',
'.tmd-chat-trigger.active { display: none; }',
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
'    top: 15px;',
'    right: 16px;',
'    background: rgba(255,255,255,0.15);',
'    border: 1px solid rgba(255,255,255,0.2);',
'    color: #ffffff;',
'    width: 30px;',
'    height: 30px;',
'    border-radius: 50%;',
'    cursor: pointer;',
'    display: flex;',
'    align-items: center;',
'    justify-content: center;',
'    font-size: 0.85rem;',
'    transition: all 0.2s;',
'}',
'.tmd-chat-close:hover {',
'    background: rgba(239, 68, 68, 0.8);',
'    border-color: #ef4444;',
'    transform: rotate(90deg) scale(1.05);',
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
'    .tmd-chat-trigger { bottom: 135px; right: 16px; width: 54px; height: 54px; font-size: 1.35rem; }',
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
                '<path id="tmdTopArc" d="M 12, 50 A 38,38 0 0,1 88, 50" fill="none" />' +
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

    // Silent Background Dispatch to Serverless Email API
    function dispatchLeadDataSilently() {
        var svc = SERVICES[state.selectedService] ? SERVICES[state.selectedService].label : 'General Inquiry';
        var payload = {
            _subject: '🚀 New Client Lead from AI Chatbot: ' + state.userName + ' (' + state.userPhone + ')',
            _template: 'table',
            _captcha: 'false',
            client_name: state.userName,
            phone_whatsapp: state.userPhone,
            email_address: state.userEmail, 
            service_needed: svc,
            project_idea: state.userGoal,
            reference_website: state.userFeatures,
            submitted_at: new Date().toLocaleString('en-IN')
        };

        fetch('https://formsubmit.co/ajax/' + CONFIG.leadEmail, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        }).catch(function(err) {
            console.log('[TMD Lead Dispatch Cached]', err);
        });
    }

    function addThankYouCard() {
        var b = document.getElementById('tmdChatBody');
        var svc = SERVICES[state.selectedService] ? SERVICES[state.selectedService].label.replace(/^[^ ]+ /, '') : 'Custom Software';
        var goalSnippet = state.userGoal.length > 35 ? state.userGoal.substring(0,32) + '...' : state.userGoal;

        var prefilledWa = encodeURIComponent(
            'Hi Tech Mind Developers! I am ' + state.userName + '.\n\n' +
            '*Service:* ' + svc + '\n' +
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
        addQuickReplies(Object.keys(SERVICES).map(function(key) {
            return { label: SERVICES[key].label, icon: SERVICES[key].icon, action: function() { selectService(key); } };
        }));
    }

    function selectService(key) {
        state.selectedService = key;
        addUserMsg(SERVICES[key].label);

        if (key === 'seo' || key === 'other') {
            botReply("Can you tell me a little bit about your current business goals or challenges?", function() {
                state.step = 'goal';
                showInput('Type your goals here...');
            });
        } else {
            botReply("Can you tell me a little bit about your project or business idea?", function() {
                state.step = 'goal';
                showInput('Type your idea here...');
            });
        }
    }

    function handleGoal(text) {
        state.userGoal = text;
        addUserMsg(text);
        hideInput();

        if (state.selectedService === 'seo' || state.selectedService === 'other') {
            botReply("To help us prepare the best strategy, do you have any target audience or specific requirements in mind?", function() {
                state.step = 'features';
                showInput('Type requirements or target audience...');
            });
        } else {
            botReply("What features do you want to include? (If you have any reference website, please paste the link here).", function() {
                state.step = 'features';
                showInput('Type features or paste link...');
            });
        }
    }

    function handleFeatures(text) {
        state.userFeatures = text;
        addUserMsg(text);
        hideInput();

        botReply("Our team can definitely help you with this. To share the complete details and timeline, <strong>may I know your name?</strong>", function() {
            state.step = 'name';
            showInput('Enter your name...');
        });
    }

    function handleName(text) {
        state.userName = text;
        addUserMsg(text);
        hideInput();
        botReply("Nice to meet you, <strong>" + text + "</strong>! 🙌", function() {
            botReply("What is your <strong>Mobile or WhatsApp number</strong> (with country code) so our expert can contact you?", function() {
                state.step = 'phone';
                showInput('E.g. +91 9876543210...');
            });
        });
    }

    function handlePhone(text) {
        state.userPhone = text;
        addUserMsg(text);
        hideInput();
        botReply("Got it! And your <strong>Email ID</strong> so we can send you the project details?", function() {
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
                        { label: '🔄 I have another project', icon: '', action: function() {
                            addUserMsg('I have another project');
                            state.step = 'service';
                            state.userGoal = '';
                            state.userFeatures = '';
                            botReply("Sure! What other service do you need?", showServiceOptions);
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

        if ((state.step === 'goal' || state.step === 'features') && text.length < 4) {
            addUserMsg(text);
            hideInput();
            botReply("Could you please provide a few more details so our team can understand better? 😊", function() {
                if (state.step === 'goal') showInput('Type your idea here...');
                else showInput('Type features or paste link...');
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

        switch(state.step) {
            case 'goal':            handleGoal(text);       break;
            case 'features':        handleFeatures(text);   break;
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
