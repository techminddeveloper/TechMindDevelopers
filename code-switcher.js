// Interactive Typewriter Code Switcher for Hero Section - Tech Mind Developers
(function() {
    var codeSnippets = {
        dotnet: {
            filename: "Program.cs",
            lines: [
                { num: 1, tokens: [{ c: "code-comment", t: "// ASP.NET Core Web API" }] },
                { num: 2, tokens: [{ c: "code-keyword", t: "var" }, { c: "", t: " b = WebApplication." }, { c: "code-func", t: "CreateBuilder" }, { c: "", t: "(args);" }] },
                { num: 3, tokens: [{ c: "", t: "b.Services." }, { c: "code-func", t: "AddTechMind" }, { c: "", t: "(o => " }, { c: "code-bracket", t: "{" }] },
                { num: 4, tokens: [{ c: "", t: "  o." }, { c: "code-prop", t: "Company" }, { c: "", t: " = " }, { c: "code-string", t: '"Tech Mind Developers"' }, { c: "", t: ";" }] },
                { num: 5, tokens: [{ c: "", t: "  o." }, { c: "code-prop", t: "Since" }, { c: "", t: " = " }, { c: "code-func", t: "2014" }, { c: "", t: ";" }] },
                { num: 6, tokens: [{ c: "", t: "  o." }, { c: "code-prop", t: "Stack" }, { c: "", t: " = " }, { c: "code-string", t: '"C# + Azure"' }, { c: "", t: ";" }] },
                { num: 7, tokens: [{ c: "", t: "  o." }, { c: "code-prop", t: "Status" }, { c: "", t: " = " }, { c: "code-string", t: '"Enterprise \uD83D\uDE80"' }, { c: "", t: ";" }] },
                { num: 8, tokens: [{ c: "code-bracket", t: "}" }, { c: "", t: ");" }] },
                { num: 9, tokens: [{ c: "code-keyword", t: "var" }, { c: "", t: " app = b." }, { c: "code-func", t: "Build" }, { c: "", t: "();" }] },
                { num: 10, tokens: [{ c: "", t: "app." }, { c: "code-func", t: "MapGet" }, { c: "", t: "(" }, { c: "code-string", t: '"/"' }, { c: "", t: ", () => " }, { c: "code-string", t: '"Live"' }, { c: "", t: ");" }] }
            ]
        },
        react: {
            filename: "App.tsx",
            lines: [
                { num: 1, tokens: [{ c: "code-comment", t: "// React 19 + TypeScript Dashboard" }] },
                { num: 2, tokens: [{ c: "code-keyword", t: "import" }, { c: "", t: " React, " }, { c: "code-bracket", t: "{" }, { c: "", t: " useState " }, { c: "code-bracket", t: "}" }, { c: "code-keyword", t: " from" }, { c: "code-string", t: ' "react"' }, { c: "", t: ";" }] },
                { num: 3, tokens: [{ c: "code-keyword", t: "export const" }, { c: "code-func", t: " TechMindApp" }, { c: "", t: " = () => " }, { c: "code-bracket", t: "{" }] },
                { num: 4, tokens: [{ c: "", t: "  " }, { c: "code-keyword", t: "const" }, { c: "", t: " [partner] = " }, { c: "code-func", t: "useState" }, { c: "", t: "(" }, { c: "code-bracket", t: "{" }] },
                { num: 5, tokens: [{ c: "", t: "    " }, { c: "code-prop", t: "company" }, { c: "", t: ": " }, { c: "code-string", t: '"Tech Mind Developers"' }, { c: "", t: "," }] },
                { num: 6, tokens: [{ c: "", t: "    " }, { c: "code-prop", t: "frontend" }, { c: "", t: ": " }, { c: "code-string", t: '"React 19 + Next.js"' }, { c: "", t: "," }] },
                { num: 7, tokens: [{ c: "", t: "    " }, { c: "code-prop", t: "design" }, { c: "", t: ": " }, { c: "code-string", t: '"Glassmorphic UI / UX"' }, { c: "", t: "," }] },
                { num: 8, tokens: [{ c: "", t: "    " }, { c: "code-prop", t: "outcome" }, { c: "", t: ": " }, { c: "code-string", t: '"High Conversion SaaS \uD83D\uDE80"' }] },
                { num: 9, tokens: [{ c: "", t: "  " }, { c: "code-bracket", t: "}" }, { c: "", t: ");" }] },
                { num: 10, tokens: [{ c: "", t: "  " }, { c: "code-keyword", t: "return" }, { c: "", t: " <" }, { c: "code-func", t: "DashView" }, { c: "", t: " partner={partner} />;" }] },
                { num: 11, tokens: [{ c: "code-bracket", t: "}" }, { c: "", t: ";" }] }
            ]
        },
        python: {
            filename: "main.py",
            lines: [
                { num: 1, tokens: [{ c: "code-comment", t: "# Python / FastAPI Workflow Engine" }] },
                { num: 2, tokens: [{ c: "code-keyword", t: "from" }, { c: "", t: " fastapi " }, { c: "code-keyword", t: "import" }, { c: "", t: " FastAPI" }] },
                { num: 3, tokens: [{ c: "code-keyword", t: "from" }, { c: "", t: " techmind " }, { c: "code-keyword", t: "import" }, { c: "", t: " AIWorkflowEngine" }] },
                { num: 4, tokens: [{ c: "", t: "app = " }, { c: "code-func", t: "FastAPI" }, { c: "", t: "(title=" }, { c: "code-string", t: '"Tech Mind Automation"' }, { c: "", t: ")" }] },
                { num: 5, tokens: [{ c: "", t: "@app." }, { c: "code-func", t: "post" }, { c: "", t: "(" }, { c: "code-string", t: '"/run-pipeline"' }, { c: "", t: ")" }] },
                { num: 6, tokens: [{ c: "code-keyword", t: "async def" }, { c: "code-func", t: " execute" }, { c: "", t: "(data: dict):" }] },
                { num: 7, tokens: [{ c: "", t: "    bot = " }, { c: "code-func", t: "AIWorkflowEngine" }, { c: "", t: "(since=" }, { c: "code-func", t: "2014" }, { c: "", t: ")" }] },
                { num: 8, tokens: [{ c: "", t: "    " }, { c: "code-keyword", t: "return await" }, { c: "", t: " bot." }, { c: "code-func", t: "process" }, { c: "", t: "(" }] },
                { num: 9, tokens: [{ c: "", t: '        tasks=data["tasks"],' }] },
                { num: 10, tokens: [{ c: "", t: "        result=" }, { c: "code-string", t: '"10x Faster Workflow \uD83D\uDE80"' }] },
                { num: 11, tokens: [{ c: "", t: "    )" }] }
            ]
        },
        ai: {
            filename: "agent.ts",
            lines: [
                { num: 1, tokens: [{ c: "code-comment", t: "// Autonomous 24x7 AI Assistant" }] },
                { num: 2, tokens: [{ c: "code-keyword", t: "import" }, { c: "code-bracket", t: " {" }, { c: "", t: " Agent " }, { c: "code-bracket", t: "}" }, { c: "code-keyword", t: " from" }, { c: "code-string", t: ' "ai-core"' }, { c: "", t: ";" }] },
                { num: 3, tokens: [{ c: "code-keyword", t: "const" }, { c: "", t: " bot = " }, { c: "code-keyword", t: "new" }, { c: "code-func", t: " Agent" }, { c: "", t: "(" }, { c: "code-bracket", t: "{" }] },
                { num: 4, tokens: [{ c: "", t: "  " }, { c: "code-prop", t: "models" }, { c: "", t: ': ["Claude 3.5", "GPT-4o"],' }] },
                { num: 5, tokens: [{ c: "", t: "  " }, { c: "code-prop", t: "channels" }, { c: "", t: ': ["WhatsApp", "Web", "CRM"],' }] },
                { num: 6, tokens: [{ c: "", t: "  " }, { c: "code-prop", t: "client" }, { c: "", t: ": " }, { c: "code-string", t: '"Tech Mind Developers"' }, { c: "", t: "," }] },
                { num: 7, tokens: [{ c: "", t: "  " }, { c: "code-prop", t: "goal" }, { c: "", t: ": " }, { c: "code-string", t: '"Zero Manual Effort \uD83D\uDE80"' }] },
                { num: 8, tokens: [{ c: "code-bracket", t: "}" }, { c: "", t: ");" }] },
                { num: 9, tokens: [{ c: "code-keyword", t: "await" }, { c: "", t: " bot." }, { c: "code-func", t: "deploy" }, { c: "", t: "();" }] }
            ]
        },
        sql: {
            filename: "schema.sql",
            lines: [
                { num: 1, tokens: [{ c: "code-comment", t: "-- SQL Server High-Performance DB" }] },
                { num: 2, tokens: [{ c: "code-keyword", t: "CREATE PROCEDURE" }, { c: "code-func", t: " sp_DeploySystem" }] },
                { num: 3, tokens: [{ c: "", t: "    @Company " }, { c: "code-keyword", t: "NVARCHAR" }, { c: "", t: "(100)," }] },
                { num: 4, tokens: [{ c: "", t: "    @Founded " }, { c: "code-keyword", t: "INT" }, { c: "", t: " = " }, { c: "code-func", t: "2014" }] },
                { num: 5, tokens: [{ c: "code-keyword", t: "AS" }] },
                { num: 6, tokens: [{ c: "code-keyword", t: "BEGIN" }] },
                { num: 7, tokens: [{ c: "", t: "    " }, { c: "code-keyword", t: "SELECT" }, { c: "", t: " Status = " }, { c: "code-string", t: "'Optimized'" }, { c: "", t: "," }] },
                { num: 8, tokens: [{ c: "", t: "           Arch = " }, { c: "code-string", t: "'HA Cluster'" }, { c: "", t: "," }] },
                { num: 9, tokens: [{ c: "", t: "           Result = " }, { c: "code-string", t: "'Sub-ms Latency \uD83D\uDE80'" }, { c: "", t: ";" }] },
                { num: 10, tokens: [{ c: "code-keyword", t: "END" }, { c: "", t: ";" }] }
            ]
        },
        azure: {
            filename: "pipeline.yml",
            lines: [
                { num: 1, tokens: [{ c: "code-comment", t: "# Azure Cloud CI/CD Automation" }] },
                { num: 2, tokens: [{ c: "code-prop", t: "trigger" }, { c: "", t: ": [ " }, { c: "code-string", t: "main" }, { c: "", t: " ]" }] },
                { num: 3, tokens: [{ c: "code-prop", t: "stages" }, { c: "", t: ":" }] },
                { num: 4, tokens: [{ c: "", t: "  - " }, { c: "code-prop", t: "stage" }, { c: "", t: ": " }, { c: "code-string", t: "DeployToCloud" }] },
                { num: 5, tokens: [{ c: "", t: "    " }, { c: "code-prop", t: "jobs" }, { c: "", t: ":" }] },
                { num: 6, tokens: [{ c: "", t: "      - " }, { c: "code-prop", t: "deployment" }, { c: "", t: ": " }, { c: "code-string", t: "TechMindProduction" }] },
                { num: 7, tokens: [{ c: "", t: "        " }, { c: "code-prop", t: "environment" }, { c: "", t: ': "Production"' }] },
                { num: 8, tokens: [{ c: "", t: "        " }, { c: "code-prop", t: "strategy" }, { c: "", t: ":" }] },
                { num: 9, tokens: [{ c: "", t: "          " }, { c: "code-prop", t: "runOnce" }, { c: "", t: ":" }] },
                { num: 10, tokens: [{ c: "", t: "            " }, { c: "code-prop", t: "deploy" }, { c: "", t: ": [ " }, { c: "code-func", t: "ZeroDowntime \uD83D\uDE80" }, { c: "", t: " ]" }] }
            ]
        },
        node: {
            filename: "server.js",
            lines: [
                { num: 1, tokens: [{ c: "code-comment", t: "// Node.js Microservices Server" }] },
                { num: 2, tokens: [{ c: "code-keyword", t: "import" }, { c: "", t: " express " }, { c: "code-keyword", t: "from" }, { c: "code-string", t: ' "express"' }, { c: "", t: ";" }] },
                { num: 3, tokens: [{ c: "code-keyword", t: "const" }, { c: "", t: " app = " }, { c: "code-func", t: "express" }, { c: "", t: "();" }] },
                { num: 4, tokens: [{ c: "", t: 'app.' }, { c: "code-func", t: "get" }, { c: "", t: '("/api/grow", (req, res) => ' }, { c: "code-bracket", t: "{" }] },
                { num: 5, tokens: [{ c: "", t: "  res." }, { c: "code-func", t: "json" }, { c: "", t: "(" }, { c: "code-bracket", t: "{" }] },
                { num: 6, tokens: [{ c: "", t: "    " }, { c: "code-prop", t: "partner" }, { c: "", t: ": " }, { c: "code-string", t: '"Tech Mind Developers"' }, { c: "", t: "," }] },
                { num: 7, tokens: [{ c: "", t: "    " }, { c: "code-prop", t: "backend" }, { c: "", t: ": " }, { c: "code-string", t: '"REST + GraphQL APIs"' }, { c: "", t: "," }] },
                { num: 8, tokens: [{ c: "", t: "    " }, { c: "code-prop", t: "performance" }, { c: "", t: ": " }, { c: "code-string", t: '"Sub-second Speed \uD83D\uDE80"' }] },
                { num: 9, tokens: [{ c: "", t: "  " }, { c: "code-bracket", t: "}" }, { c: "", t: ");" }] },
                { num: 10, tokens: [{ c: "code-bracket", t: "}" }, { c: "", t: ");" }] },
                { num: 11, tokens: [{ c: "", t: "app." }, { c: "code-func", t: "listen" }, { c: "", t: "(" }, { c: "code-func", t: "8080" }, { c: "", t: ");" }] }
            ]
        },
        mobile: {
            filename: "App.dart",
            lines: [
                { num: 1, tokens: [{ c: "code-comment", t: "// Flutter Native iOS & Android App" }] },
                { num: 2, tokens: [{ c: "code-keyword", t: "class" }, { c: "code-func", t: " TechMindApp" }, { c: "code-keyword", t: " extends" }, { c: "code-func", t: " StatelessWidget" }, { c: "code-bracket", t: " {" }] },
                { num: 3, tokens: [{ c: "", t: "  @override" }] },
                { num: 4, tokens: [{ c: "", t: "  " }, { c: "code-keyword", t: "Widget" }, { c: "code-func", t: " build" }, { c: "", t: "(BuildContext ctx) " }, { c: "code-bracket", t: "{" }] },
                { num: 5, tokens: [{ c: "", t: "    " }, { c: "code-keyword", t: "return" }, { c: "code-func", t: " MaterialApp" }, { c: "", t: "(" }] },
                { num: 6, tokens: [{ c: "", t: "      title: " }, { c: "code-string", t: '"iOS & Android Native"' }, { c: "", t: "," }] },
                { num: 7, tokens: [{ c: "", t: "      theme: TechMind." }, { c: "code-prop", t: "DarkAI" }, { c: "", t: "," }] },
                { num: 8, tokens: [{ c: "", t: "      home: " }, { c: "code-func", t: "DeployScreen" }, { c: "", t: "()," }] },
                { num: 9, tokens: [{ c: "", t: "    );" }] },
                { num: 10, tokens: [{ c: "", t: "  " }, { c: "code-bracket", t: "}" }] },
                { num: 11, tokens: [{ c: "code-bracket", t: "}" }] }
            ]
        }
    };

    var langKeys = Object.keys(codeSnippets);
    var currentLangIdx = 0;
    var typeTimer = null;
    var autoCycleTimer = null;
    var isTyping = false;

    // Inject cursor styles if not present
    if (!document.getElementById("typewriter-cursor-style")) {
        var styleEl = document.createElement("style");
        styleEl.id = "typewriter-cursor-style";
        styleEl.textContent = `
            .type-cursor {
                display: inline-block;
                width: 7px;
                height: 15px;
                background: #38bdf8;
                margin-left: 3px;
                vertical-align: middle;
                border-radius: 1px;
                box-shadow: 0 0 8px #38bdf8;
                animation: cursorBlink 0.8s infinite;
            }
            @keyframes cursorBlink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
            }
            .code-line {
                min-height: 22px;
                line-height: 1.5;
            }
        `;
        document.head.appendChild(styleEl);
    }

    function typeCodeSnippet(langKey, onComplete) {
        if (typeTimer) clearTimeout(typeTimer);
        isTyping = true;

        var snippet = codeSnippets[langKey] || codeSnippets.dotnet;
        var codeDisplay = document.getElementById("codeDisplay");
        var fileNameEl = document.getElementById("codeFileName");

        if (fileNameEl) {
            fileNameEl.innerHTML = '<i class="fas fa-file-code"></i> ' + snippet.filename;
        }

        if (!codeDisplay) return;

        // Flatten all characters to stream
        var stream = [];
        for (var l = 0; l < snippet.lines.length; l++) {
            var lineObj = snippet.lines[l];
            for (var t = 0; t < lineObj.tokens.length; t++) {
                var token = lineObj.tokens[t];
                for (var c = 0; c < token.t.length; c++) {
                    stream.push({
                        lineIdx: l,
                        lineNum: lineObj.num,
                        tokenIdx: t,
                        charIdx: c,
                        char: token.t[c],
                        className: token.c
                    });
                }
            }
            // End of line mark
            stream.push({ lineIdx: l, lineNum: lineObj.num, isEol: true });
        }

        // Build container with empty lines
        var linesHtml = "";
        for (var i = 0; i < snippet.lines.length; i++) {
            linesHtml += '<div class="code-line" id="tline-' + i + '"><span class="code-num">' + snippet.lines[i].num + '</span><span class="line-text"></span></div>';
        }
        codeDisplay.innerHTML = linesHtml;

        var streamIdx = 0;

        function step() {
            if (streamIdx >= stream.length) {
                // Done typing snippet
                isTyping = false;
                var cursors = codeDisplay.querySelectorAll(".type-cursor");
                cursors.forEach(function(c) { c.remove(); });
                
                if (onComplete) onComplete();
                return;
            }

            var item = stream[streamIdx];
            var lineTextSpan = document.querySelector('#tline-' + item.lineIdx + ' .line-text');
            
            if (!lineTextSpan) {
                streamIdx++;
                step();
                return;
            }

            if (item.isEol) {
                var cur = lineTextSpan.querySelector('.type-cursor');
                if (cur) cur.remove();
                streamIdx++;
                typeTimer = setTimeout(step, 18);
                return;
            }

            var oldCursor = codeDisplay.querySelector('.type-cursor');
            if (oldCursor) oldCursor.remove();

            var charHtml = item.char === ' ' ? '&nbsp;' : (item.char === '<' ? '&lt;' : (item.char === '>' ? '&gt;' : item.char));
            
            if (item.className) {
                var lastChild = lineTextSpan.lastElementChild;
                if (lastChild && lastChild.classList.contains(item.className) && !lastChild.classList.contains('type-cursor')) {
                    lastChild.innerHTML += charHtml;
                } else {
                    var newSpan = document.createElement('span');
                    newSpan.className = item.className;
                    newSpan.innerHTML = charHtml;
                    lineTextSpan.appendChild(newSpan);
                }
            } else {
                var textNode = document.createElement('span');
                textNode.innerHTML = charHtml;
                lineTextSpan.appendChild(textNode);
            }

            var cursorNode = document.createElement('span');
            cursorNode.className = 'type-cursor';
            lineTextSpan.appendChild(cursorNode);

            streamIdx++;

            var delay = Math.floor(Math.random() * 6) + 6; // 6-12ms ultra-fast pro IDE typing
            if (item.char === ' ' || item.char === '(' || item.char === '{') {
                delay += 6;
            }

            typeTimer = setTimeout(step, delay);
        }

        step();
    }

    function switchTab(langKey, isManual) {
        var techTabs = document.querySelectorAll(".tech-tab");
        techTabs.forEach(function(tab) {
            if (tab.getAttribute("data-lang") === langKey) {
                tab.classList.add("active");
            } else {
                tab.classList.remove("active");
            }
        });

        if (autoCycleTimer) clearTimeout(autoCycleTimer);

        typeCodeSnippet(langKey, function() {
            autoCycleTimer = setTimeout(function() {
                currentLangIdx = (currentLangIdx + 1) % langKeys.length;
                switchTab(langKeys[currentLangIdx], false);
            }, 2000);
        });
    }

    // Tab Click Listeners
    var techTabs = document.querySelectorAll(".tech-tab");
    techTabs.forEach(function(tab) {
        tab.addEventListener("click", function() {
            var lang = this.getAttribute("data-lang");
            currentLangIdx = langKeys.indexOf(lang);
            switchTab(lang, true);
        });
    });

    // Copy Code Button
    var copyBtn = document.getElementById("copyCodeBtn");
    if (copyBtn) {
        copyBtn.addEventListener("click", function() {
            var activeTab = document.querySelector(".tech-tab.active");
            var langKey = activeTab ? activeTab.getAttribute("data-lang") : "dotnet";
            var snippet = codeSnippets[langKey];
            if (!snippet) return;

            var rawLines = snippet.lines.map(function(l) {
                return l.tokens.map(function(t) { return t.t; }).join("");
            });
            var rawText = rawLines.join("\n");

            navigator.clipboard.writeText(rawText).then(function() {
                copyBtn.innerHTML = '<i class="fas fa-check" style="color:#10b981"></i>';
                setTimeout(function() {
                    copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
                }, 2000);
            });
        });
    }

    // Start Typewriter on page load
    setTimeout(function() {
        switchTab("dotnet", false);
    }, 600);

})();
