/* ============================================================
   TMD AI PROJECT CONSULTANT CHATBOT v9 (Static Top-Arc Caption)
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
'/* Trigger Wrapper & Static Curved Top-Arc Caption */',
'.tmd-chat-trigger-wrap {',
'    position: fixed;',
'    bottom: 145px;',
'    right: 14px;',
'    z-index: 9998;',
'    width: 86px;',
'    height: 86px;',
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
'/* Center Glowing Robot Orb */',
'.tmd-chat-trigger {',
'    width: 50px;',
'    height: 50px;',
'    border-radius: 50%;',
'    background: linear-gradient(135deg, #0284c7 0%, #2563eb 50%, #7c3aed 100%);',
'    background-size: 200% 200%;',
'    animation: tmd-gradientShift 4s ease infinite, tmd-pulseGlow 2.5s infinite;',
'    border: 2px solid rgba(255, 255, 255, 0.35);',
'    cursor: pointer;',
'    display: flex;',
'    align-items: center;',
'    justify-content: center;',
'    box-shadow: 0 8px 25px rgba(2, 132, 199, 0.5), inset 0 0 12px rgba(255,255,255,0.3);',
'    color: #fff;',
'    font-size: 1.35rem;',
'    position: relative;',
'    z-index: 2;',
'    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);',
'    padding: 0;',
'}',
'.tmd-chat-trigger i { animation: tmd-iconBlink 1.8s ease-in-out infinite; }',
'',
'@keyframes tmd-gradientShift {',
'    0% { background-position: 0% 50%; }',
'    50% { background-position: 100% 50%; }',
'    100% { background-position: 0% 50%; }',
'}',
'@keyframes tmd-pulseGlow {',
'    0%, 100% { box-shadow: 0 8px 25px rgba(2,132,199,0.45), 0 0 0 0 rgba(56,189,248,0.4); }',
'    50% { box-shadow: 0 8px 30px rgba(2,132,199,0.65), 0 0 0 10px rgba(56,189,248,0); }',
'}',
'@keyframes tmd-iconBlink {',
'    0%, 100% { opacity: 1; transform: scale(1); }',
'    50% { opacity: 0.75; transform: scale(0.92); }',
'}',
'',
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
'',
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
'',
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
'',
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
'',
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
'',
'.tmd-msg.bot {',
'    align-self: flex-start;',
'    background: rgba(30, 41, 59, 0.8);',
'    color: #e2e8f0;',
'    border: 1px solid rgba(255, 255, 255, 0.08);',
'    border-bottom-left-radius: 4px;',
'    box-shadow: 0 4px 15px rgba(0,0,0,0.2);',
'}',
'[data-theme="light"] .tmd-msg.bot {',
'    background: #f1f5f9;',
'    color: #1e293b;',
'    border-color: rgba(0,0,0,0.06);',
'}',
'',
'.tmd-msg.user {',
'    align-self: flex-end;',
'    background: linear-gradient(135deg, #2563eb, #3b82f6);',
'    color: #ffffff;',
'    border-bottom-right-radius: 4px;',
'    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.35);',
'}',
'',
'/* Service Option Pills */',
'.tmd-services-grid {',
'    display: flex;',
'    flex-direction: column;',
'    gap: 8px;',
'    width: 100%;',
'    margin-top: 4px;',
'}',
'.tmd-service-pill {',
'    background: rgba(30, 41, 59, 0.65);',
'    border: 1px solid rgba(59, 130, 246, 0.25);',
'    color: #e2e8f0;',
'    padding: 10px 14px;',
'    border-radius: 12px;',
'    font-size: 0.84rem;',
'    font-weight: 600;',
'    cursor: pointer;',
'    display: flex;',
'    align-items: center;',
'    justify-content: space-between;',
'    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);',
'    text-align: left;',
'}',
'[data-theme="light"] .tmd-service-pill {',
'    background: #ffffff;',
'    color: #334155;',
'    border-color: #cbd5e1;',
'    box-shadow: 0 2px 6px rgba(0,0,0,0.04);',
'}',
'.tmd-service-pill:hover {',
'    background: linear-gradient(135deg, rgba(37, 99, 235, 0.25), rgba(99, 102, 241, 0.25));',
'    border-color: #3b82f6;',
'    color: #38bdf8;',
'    transform: translateX(4px);',
'}',
'',
'/* Input Footer */',
'.tmd-chat-footer {',
'    padding: 12px 16px;',
'    background: rgba(15, 23, 42, 0.95);',
'    border-top: 1px solid rgba(255, 255, 255, 0.08);',
'    display: flex;',
'    gap: 8px;',
'    align-items: center;',
'    flex-shrink: 0;',
'}',
'[data-theme="light"] .tmd-chat-footer {',
'    background: #f8fafc;',
'    border-color: rgba(0,0,0,0.08);',
'}',
'.tmd-chat-input {',
'    flex: 1;',
'    background: rgba(30, 41, 59, 0.7);',
'    border: 1px solid rgba(255, 255, 255, 0.12);',
'    padding: 10px 14px;',
'    border-radius: 12px;',
'    color: #fff;',
'    font-size: 0.88rem;',
'    outline: none;',
'    transition: border 0.2s;',
'}',
'[data-theme="light"] .tmd-chat-input {',
'    background: #ffffff;',
'    color: #0f172a;',
'    border-color: #cbd5e1;',
'}',
'.tmd-chat-input:focus { border-color: #3b82f6; }',
'.tmd-chat-send {',
'    width: 40px;',
'    height: 40px;',
'    border-radius: 12px;',
'    background: linear-gradient(135deg, #2563eb, #3b82f6);',
'    border: none;',
'    color: #fff;',
'    cursor: pointer;',
'    display: flex;',
'    align-items: center;',
'    justify-content: center;',
'    transition: all 0.2s;',
'    flex-shrink: 0;',
'}',
'.tmd-chat-send:hover { transform: scale(1.05); }',
'',
'/* Typing Indicator */',
'.tmd-typing {',
'    align-self: flex-start;',
'    display: flex;',
'    gap: 4px;',
'    padding: 10px 14px;',
'    background: rgba(30, 41, 59, 0.6);',
'    border-radius: 14px;',
'    width: fit-content;',
'}',
'.tmd-dot {',
'    width: 6px;',
'    height: 6px;',
'    background: #94a3b8;',
'    border-radius: 50%;',
'    animation: tmd-b 1.2s infinite ease-in-out;',
'}',
'.tmd-dot:nth-child(2) { animation-delay: 0.2s; }',
'.tmd-dot:nth-child(3) { animation-delay: 0.4s; }',
'@keyframes tmd-b { 0%,80%,100%{transform:scale(0)} 40%{transform:scale(1)} }',
'',
'/* Final Card */',
'.tmd-final-card {',
'    background: linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(99,102,241,0.1) 100%);',
'    border: 1px solid rgba(59,130,246,0.3);',
'    border-radius: 16px;',
'    padding: 16px;',
'    margin-top: 6px;',
'    text-align: center;',
'}',
'.tmd-final-card h4 { color: #38bdf8; font-size: 1rem; margin-bottom: 6px; }',
'.tmd-final-card p { font-size: 0.82rem; color: #cbd5e1; margin-bottom: 12px; }',
'.tmd-final-actions { display: flex; gap: 8px; justify-content: center; }',
'.tmd-action-btn {',
'    padding: 8px 14px;',
'    border-radius: 10px;',
'    font-size: 0.8rem;',
'    font-weight: 700;',
'    text-decoration: none;',
'    display: inline-flex;',
'    align-items: center;',
'    gap: 6px;',
'    transition: all 0.2s;',
'}',
'.tmd-action-wa { background: #25d366; color: #fff; }',
'.tmd-action-call { background: #0284c7; color: #fff; }',
'',
'@media (max-width: 680px) {',
'    .tmd-chat-trigger-wrap { bottom: 125px; right: 10px; width: 76px; height: 76px; }',
'    .tmd-chat-trigger { width: 46px; height: 46px; font-size: 1.2rem; }',
'    .tmd-chat-window { width: calc(100vw - 24px); right: 12px; bottom: 12px; height: calc(100dvh - 24px); }',
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
            '<div class="tmd-chat-footer">' +
                '<input type="text" class="tmd-chat-input" id="tmdChatInput" placeholder="Type your answer here..." autocomplete="off">' +
                '<button class="tmd-chat-send" id="tmdChatSend" aria-label="Send Message"><i class="fas fa-paper-plane"></i></button>' +
            '</div>';
        document.body.appendChild(w);
    }

    function scrollToBottom() {
        var body = document.getElementById('tmdChatBody');
        if (body) {
            setTimeout(function() {
                body.scrollTop = body.scrollHeight;
            }, 60);
        }
    }

    function showTyping() {
        var body = document.getElementById('tmdChatBody');
        var t = document.createElement('div');
        t.className = 'tmd-typing';
        t.id = 'tmdTypingIndicator';
        t.innerHTML = '<span class="tmd-dot"></span><span class="tmd-dot"></span><span class="tmd-dot"></span>';
        body.appendChild(t);
        scrollToBottom();
    }

    function removeTyping() {
        var t = document.getElementById('tmdTypingIndicator');
        if (t) t.remove();
    }

    function botReply(text, callback) {
        showTyping();
        setTimeout(function() {
            removeTyping();
            var body = document.getElementById('tmdChatBody');
            var msg = document.createElement('div');
            msg.className = 'tmd-msg bot';
            msg.innerHTML = text;
            body.appendChild(msg);
            scrollToBottom();
            if (callback) callback();
        }, CONFIG.typingDelay);
    }

    function addUserMsg(text) {
        var body = document.getElementById('tmdChatBody');
        var msg = document.createElement('div');
        msg.className = 'tmd-msg user';
        msg.textContent = text;
        body.appendChild(msg);
        scrollToBottom();
    }

    function startConversation() {
        botReply("Hello! Welcome to <strong>Tech Mind Developers</strong>. 👋<br><br>Which solution are you looking to build?", function() {
            renderServiceOptions();
        });
    }

    function renderServiceOptions() {
        var body = document.getElementById('tmdChatBody');
        var grid = document.createElement('div');
        grid.className = 'tmd-services-grid';
        grid.id = 'tmdServicesGrid';

        Object.keys(SERVICES).forEach(function(key) {
            var item = SERVICES[key];
            var btn = document.createElement('button');
            btn.className = 'tmd-service-pill';
            btn.innerHTML = '<span>' + item.label + '</span> <i class="fas fa-chevron-right" style="font-size:0.75rem;opacity:0.6"></i>';
            btn.addEventListener('click', function() {
                selectService(key, item.label);
            });
            grid.appendChild(btn);
        });

        body.appendChild(grid);
        scrollToBottom();
    }

    function selectService(key, label) {
        state.selectedService = key;
        var grid = document.getElementById('tmdServicesGrid');
        if (grid) grid.remove();

        addUserMsg(label);
        state.step = 'goal';

        botReply("Tell us a bit about what you want to build or achieve with this project.", function() {
            var input = document.getElementById('tmdChatInput');
            if (input) input.placeholder = "e.g. Custom manufacturing ERP, WhatsApp AI chatbot...";
        });
    }

    function handleGoal(text) {
        if (!text || text.trim().length < 2) return;
        state.userGoal = text.trim();
        addUserMsg(state.userGoal);

        state.step = 'name';
        botReply("What is your name?", function() {
            var input = document.getElementById('tmdChatInput');
            if (input) input.placeholder = "Your full name...";
        });
    }

    function handleName(text) {
        if (!text || text.trim().length < 2) return;
        state.userName = text.trim();
        addUserMsg(state.userName);

        state.step = 'phone';
        botReply("Nice to meet you, " + state.userName + "! What is your mobile or WhatsApp number?", function() {
            var input = document.getElementById('tmdChatInput');
            if (input) input.placeholder = "Your mobile / WhatsApp number...";
        });
    }

    function handlePhone(text) {
        if (!text) return;
        var clean = text.trim();
        var digitsOnly = clean.replace(/[^0-9]/g, '');

        if (/[a-zA-Z]/.test(clean) || digitsOnly.length < 7) {
            botReply("Please enter a valid phone number with digits only (e.g. 9876543210 or +91-9876543210).");
            return;
        }

        state.userPhone = clean;
        addUserMsg(state.userPhone);

        state.step = 'done';
        dispatchLead();
    }

    function dispatchLead() {
        showTyping();
        var leadData = {
            name: state.userName || 'Chatbot Lead',
            phone: state.userPhone || 'Not provided',
            service: state.selectedService || 'General Inquiry',
            goal: state.userGoal || 'Not specified',
            _subject: '🚨 New Lead from Tech Mind Developers AI Assistant',
            _template: 'table',
            _captcha: 'false'
        };

        fetch('https://formsubmit.co/ajax/' + encodeURIComponent(CONFIG.leadEmail), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(leadData)
        })
        .then(function(res) { return res.json(); })
        .then(function() {
            finishChat();
        })
        .catch(function() {
            finishChat();
        });
    }

    function finishChat() {
        removeTyping();
        var body = document.getElementById('tmdChatBody');
        
        var card = document.createElement('div');
        card.className = 'tmd-final-card';
        card.innerHTML =
            '<h4><i class="fas fa-check-circle" style="color:#22c55e"></i> Inquiry Received!</h4>' +
            '<p>Thank you, <strong>' + (state.userName || 'there') + '</strong>. Our software architects will connect with you shortly.</p>' +
            '<div class="tmd-final-actions">' +
                '<a href="' + CONFIG.whatsappUrl + '?text=Hi%20Tech%20Mind%20Developers,%20I%20just%20submitted%20an%20inquiry%20for%20' + encodeURIComponent(state.userGoal || 'software development') + '." target="_blank" rel="noopener noreferrer" class="tmd-action-btn tmd-action-wa"><i class="fab fa-whatsapp"></i> Chat on WhatsApp</a>' +
                '<a href="tel:+' + CONFIG.phone + '" class="tmd-action-btn tmd-action-call"><i class="fas fa-phone"></i> Call Direct</a>' +
            '</div>';

        body.appendChild(card);
        scrollToBottom();

        var input = document.getElementById('tmdChatInput');
        if (input) {
            input.disabled = true;
            input.placeholder = "Inquiry submitted successfully! ✓";
        }
        var send = document.getElementById('tmdChatSend');
        if (send) send.disabled = true;
    }

    function handleUserInput(text) {
        if (!text || !text.trim()) return;

        switch(state.step) {
            case 'goal':  handleGoal(text);  break;
            case 'name':  handleName(text);  break;
            case 'phone': handlePhone(text); break;
            default:
                addUserMsg(text);
                botReply("Thank you! Your message has been noted. Our team will get back to you shortly. 😊");
                break;
        }
    }

    // ===== EVENTS =====
    function initEvents() {
        var wrap = document.getElementById('tmdChatTriggerWrap');
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

        if (closeBtn) {
            closeBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                closeChat();
            });
        }

        if (sendBtn) {
            sendBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                handleUserInput(input.value);
                input.value = '';
            });
        }

        if (input) {
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    e.stopPropagation();
                    handleUserInput(input.value);
                    input.value = '';
                }
            });
        }

        if (win) {
            win.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }

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
