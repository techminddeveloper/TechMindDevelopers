// Interactive Code Switcher for Hero Section
(function() {
    var codeSnippets = {
        dotnet: {
            filename: "Program.cs",
            lines: [
                { num: 1, html: '<span class="code-comment">// ASP.NET Core Web API</span>' },
                { num: 2, html: '<span class="code-keyword">var</span> b = WebApplication.<span class="code-func">CreateBuilder</span>(args);' },
                { num: 3, html: 'b.Services.<span class="code-func">AddTechMind</span>(o =&gt; <span class="code-bracket">{</span>' },
                { num: 4, html: '&nbsp;&nbsp;o.<span class="code-prop">Company</span> = <span class="code-string">"Tech Mind Developers"</span>;' },
                { num: 5, html: '&nbsp;&nbsp;o.<span class="code-prop">Since</span> = <span class="code-func">2014</span>;' },
                { num: 6, html: '&nbsp;&nbsp;o.<span class="code-prop">Stack</span> = <span class="code-string">"C# + Azure"</span>;' },
                { num: 7, html: '&nbsp;&nbsp;o.<span class="code-prop">Status</span> = <span class="code-string">"Enterprise &#128640;"</span>;' },
                { num: 8, html: '<span class="code-bracket">}</span>);' },
                { num: 9, html: '<span class="code-keyword">var</span> app = b.<span class="code-func">Build</span>();' },
                { num: 10, html: 'app.<span class="code-func">MapGet</span>(<span class="code-string">"/"</span>, () =&gt; <span class="code-string">"Live"</span>);' }
            ]
        },
        react: {
            filename: "App.tsx",
            lines: [
                { num: 1, html: '<span class="code-comment">// React + TypeScript Modern Dashboard</span>' },
                { num: 2, html: '<span class="code-keyword">import</span> React, <span class="code-bracket">{</span> useState <span class="code-bracket">}</span> <span class="code-keyword">from</span> <span class="code-string">"react"</span>;' },
                { num: 3, html: '<span class="code-keyword">export const</span> <span class="code-func">TechMindApp</span> = () =&gt; <span class="code-bracket">{</span>' },
                { num: 4, html: '&nbsp;&nbsp;<span class="code-keyword">const</span> [partner] = <span class="code-func">useState</span>(<span class="code-bracket">{</span>' },
                { num: 5, html: '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-prop">company</span>: <span class="code-string">"Tech Mind Developers"</span>,' },
                { num: 6, html: '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-prop">frontend</span>: <span class="code-string">"React 19 + TypeScript"</span>,' },
                { num: 7, html: '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-prop">design</span>: <span class="code-string">"Responsive UI / UX"</span>,' },
                { num: 8, html: '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-prop">outcome</span>: <span class="code-string">"High Conversion SaaS &#128640;"</span>' },
                { num: 9, html: '&nbsp;&nbsp;<span class="code-bracket">}</span>);' },
                { num: 10, html: '&nbsp;&nbsp;<span class="code-keyword">return</span> &lt;<span class="code-func">DashboardView</span> partner={partner} /&gt;;' },
                { num: 11, html: '<span class="code-bracket">}</span>;' }
            ]
        },
        python: {
            filename: "main.py",
            lines: [
                { num: 1, html: '<span class="code-comment"># Python / FastAPI Automation Toolkit</span>' },
                { num: 2, html: '<span class="code-keyword">from</span> fastapi <span class="code-keyword">import</span> FastAPI' },
                { num: 3, html: '<span class="code-keyword">from</span> techmind <span class="code-keyword">import</span> AIWorkflowEngine' },
                { num: 4, html: 'app = <span class="code-func">FastAPI</span>(title=<span class="code-string">"Tech Mind Automation"</span>)' },
                { num: 5, html: '@app.<span class="code-func">post</span>(<span class="code-string">"/run-pipeline"</span>)' },
                { num: 6, html: '<span class="code-keyword">async def</span> <span class="code-func">execute</span>(data: dict):' },
                { num: 7, html: '&nbsp;&nbsp;&nbsp;&nbsp;bot = <span class="code-func">AIWorkflowEngine</span>(since=<span class="code-func">2014</span>)' },
                { num: 8, html: '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return await</span> bot.<span class="code-func">process</span>(' },
                { num: 9, html: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tasks=data[<span class="code-string">"tasks"</span>],' },
                { num: 10, html: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result=<span class="code-string">"10x Faster Workflow &#128640;"</span>' },
                { num: 11, html: '&nbsp;&nbsp;&nbsp;&nbsp;)' }
            ]
        },
        ai: {
            filename: "agent.ts",
            lines: [
                { num: 1, html: '<span class="code-comment">// Autonomous AI Agent</span>' },
                { num: 2, html: '<span class="code-keyword">import</span> <span class="code-bracket">{</span> Agent <span class="code-bracket">}</span> <span class="code-keyword">from</span> <span class="code-string">"ai-core"</span>;' },
                { num: 3, html: '<span class="code-keyword">const</span> bot = <span class="code-keyword">new</span> <span class="code-func">Agent</span>(<span class="code-bracket">{</span>' },
                { num: 4, html: '&nbsp;&nbsp;<span class="code-prop">models</span>: [<span class="code-string">"Claude 3.5"</span>, <span class="code-string">"GPT-4o"</span>],' },
                { num: 5, html: '&nbsp;&nbsp;<span class="code-prop">skills</span>: [<span class="code-string">"Code"</span>, <span class="code-string">"Deploy"</span>],' },
                { num: 6, html: '&nbsp;&nbsp;<span class="code-prop">client</span>: <span class="code-string">"Tech Mind Developers"</span>,' },
                { num: 7, html: '&nbsp;&nbsp;<span class="code-prop">goal</span>: <span class="code-string">"Zero Manual Tasks &#128640;"</span>' },
                { num: 8, html: '<span class="code-bracket">}</span>);' },
                { num: 9, html: '<span class="code-keyword">await</span> bot.<span class="code-func">deploy</span>();' }
            ]
        },
        sql: {
            filename: "schema.sql",
            lines: [
                { num: 1, html: '<span class="code-comment">-- SQL Server High-Performance Procedure</span>' },
                { num: 2, html: '<span class="code-keyword">CREATE PROCEDURE</span> <span class="code-func">sp_DeploySystem</span>' },
                { num: 3, html: '&nbsp;&nbsp;&nbsp;&nbsp;@Company <span class="code-keyword">NVARCHAR</span>(100),' },
                { num: 4, html: '&nbsp;&nbsp;&nbsp;&nbsp;@Founded <span class="code-keyword">INT</span> = <span class="code-func">2014</span>' },
                { num: 5, html: '<span class="code-keyword">AS</span>' },
                { num: 6, html: '<span class="code-keyword">BEGIN</span>' },
                { num: 7, html: '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">SELECT</span> Status = <span class="code-string">&#39;Optimized&#39;</span>,' },
                { num: 8, html: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Arch = <span class="code-string">&#39;HA Cluster&#39;</span>,' },
                { num: 9, html: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result = <span class="code-string">&#39;Sub-ms &#128640;&#39;</span>;' },
                { num: 10, html: '<span class="code-keyword">END</span>;' }
            ]
        },
        azure: {
            filename: "pipeline.yml",
            lines: [
                { num: 1, html: '<span class="code-comment"># Azure DevOps CI/CD Pipeline</span>' },
                { num: 2, html: '<span class="code-prop">trigger</span>: [ <span class="code-string">main</span> ]' },
                { num: 3, html: '<span class="code-prop">stages</span>:' },
                { num: 4, html: '&nbsp;&nbsp;- <span class="code-prop">stage</span>: <span class="code-string">DeployToAzure</span>' },
                { num: 5, html: '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-prop">jobs</span>:' },
                { num: 6, html: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <span class="code-prop">deployment</span>: <span class="code-string">TechMindCloud</span>' },
                { num: 7, html: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-prop">environment</span>: <span class="code-string">"Production"</span>' },
                { num: 8, html: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-prop">strategy</span>:' },
                { num: 9, html: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-prop">runOnce</span>:' },
                { num: 10, html: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-prop">deploy</span>: [ <span class="code-func">ZeroDowntime</span> ]' }
            ]
        },
        node: {
            filename: "server.js",
            lines: [
                { num: 1, html: '<span class="code-comment">// Node.js Microservices Architecture</span>' },
                { num: 2, html: '<span class="code-keyword">import</span> express <span class="code-keyword">from</span> <span class="code-string">"express"</span>;' },
                { num: 3, html: '<span class="code-keyword">const</span> app = <span class="code-func">express</span>();' },
                { num: 4, html: 'app.<span class="code-func">get</span>(<span class="code-string">"/api/grow"</span>, (req, res) =&gt; <span class="code-bracket">{</span>' },
                { num: 5, html: '&nbsp;&nbsp;res.<span class="code-func">json</span>(<span class="code-bracket">{</span>' },
                { num: 6, html: '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-prop">partner</span>: <span class="code-string">"Tech Mind Developers"</span>,' },
                { num: 7, html: '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-prop">experience</span>: <span class="code-string">"Since 2014"</span>,' },
                { num: 8, html: '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-prop">backend</span>: <span class="code-string">"REST + GraphQL APIs"</span>,' },
                { num: 9, html: '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-prop">performance</span>: <span class="code-string">"Ultra Fast &#128640;"</span>' },
                { num: 10, html: '&nbsp;&nbsp;<span class="code-bracket">}</span>);' },
                { num: 11, html: '<span class="code-bracket">}</span>);' },
                { num: 12, html: 'app.<span class="code-func">listen</span>(<span class="code-func">8080</span>);' }
            ]
        },
        mobile: {
            filename: "App.dart",
            lines: [
                { num: 1, html: '<span class="code-comment">// Flutter Cross-Platform App</span>' },
                { num: 2, html: '<span class="code-keyword">class</span> <span class="code-func">TechMindApp</span> <span class="code-keyword">extends</span> <span class="code-func">StatelessWidget</span> <span class="code-bracket">{</span>' },
                { num: 3, html: '&nbsp;&nbsp;@override' },
                { num: 4, html: '&nbsp;&nbsp;<span class="code-keyword">Widget</span> <span class="code-func">build</span>(BuildContext ctx) <span class="code-bracket">{</span>' },
                { num: 5, html: '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-func">MaterialApp</span>(' },
                { num: 6, html: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: <span class="code-string">"iOS &amp; Android"</span>,' },
                { num: 7, html: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;theme: TechMind.<span class="code-prop">DarkAI</span>,' },
                { num: 8, html: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;home: <span class="code-func">DeployScreen</span>(),' },
                { num: 9, html: '&nbsp;&nbsp;&nbsp;&nbsp;);' },
                { num: 10, html: '&nbsp;&nbsp;<span class="code-bracket">}</span>' },
                { num: 11, html: '<span class="code-bracket">}</span>' }
            ]
        }
    };

    function renderCodeSnippet(langKey) {
        var snippet = codeSnippets[langKey] || codeSnippets.dotnet;
        var codeDisplay = document.getElementById("codeDisplay");
        var fileNameEl = document.getElementById("codeFileName");

        if (fileNameEl) {
            fileNameEl.innerHTML = "<i class=\"fas fa-file-code\"></i> " + snippet.filename;
        }

        if (codeDisplay) {
            var h = "";
            for (var i = 0; i < snippet.lines.length; i++) {
                h += "<div class=\"code-line\"><span class=\"code-num\">" + snippet.lines[i].num + "</span>" + snippet.lines[i].html + "</div>";
            }
            codeDisplay.innerHTML = h;
        }
    }

    // Tab click listeners
    var techTabs = document.querySelectorAll(".tech-tab");
    for (var i = 0; i < techTabs.length; i++) {
        techTabs[i].addEventListener("click", function() {
            for (var j = 0; j < techTabs.length; j++) {
                techTabs[j].classList.remove("active");
                techTabs[j].style.background = "rgba(99,102,241,0.08)";
                techTabs[j].style.borderColor = "rgba(255,255,255,0.1)";
                techTabs[j].style.color = "rgba(255,255,255,0.6)";
            }
            this.classList.add("active");
            this.style.background = "rgba(99,102,241,0.15)";
            this.style.borderColor = "rgba(99,102,241,0.4)";
            this.style.color = "#a5b4fc";
            var lang = this.getAttribute("data-lang");
            renderCodeSnippet(lang);
        });
    }

    // Copy Code Button
    var copyBtn = document.getElementById("copyCodeBtn");
    if (copyBtn) {
        copyBtn.addEventListener("click", function() {
            var activeTab = document.querySelector(".tech-tab.active");
            var langKey = activeTab ? activeTab.getAttribute("data-lang") : "dotnet";
            var snippet = codeSnippets[langKey];
            if (!snippet) return;

            var tempDiv = document.createElement("div");
            var lines = [];
            for (var k = 0; k < snippet.lines.length; k++) {
                tempDiv.innerHTML = snippet.lines[k].html;
                lines.push(tempDiv.innerText || tempDiv.textContent || "");
            }
            var rawText = lines.join("\n");

            navigator.clipboard.writeText(rawText).then(function() {
                copyBtn.innerHTML = "<i class=\"fas fa-check\" style=\"color:#10b981\"></i>";
                setTimeout(function() {
                    copyBtn.innerHTML = "<i class=\"fas fa-copy\"></i>";
                }, 2000);
            });
        });
    }
})();
