# Tech Mind Developers - Service Page & Website Standards

This file contains strict guidelines for creating, updating, and maintaining service landing pages and blog integrations for Tech Mind Developers.

---

## 1. Core Moto of Service Pages
All service pages must strictly balance two primary goals:
1. **Google Ranking (SEO Authority):** Target high-intent commercial keywords in metadata, headings, URLs, and Schema.org structured data.
2. **User Retention & Dwell Time (High Engagement):** Keep the user on the page and prevent bounce with punchy, scannable, point-to-point copy without boring walls of text.

---

## 2. Language Rules
- **100% Clean English for Visible UI:** Headings, body copy, problem cards, solution cards, roadmaps, FAQ questions/answers, and form labels must be written in natural, professional, human-written English.
- **Zero Visible Hinglish:** Never write visible Hindi or Hinglish sentences in FAQs, cards, or body text.
- **Hinglish for SEO Only:** Hinglish search queries (e.g. *kaise banaye*, *kharcha*, *software company near me*) belong strictly in `<meta name="keywords">` and Schema.org `"keywords"` array for search engine indexing.

---

## 3. Pacing & Length (Point-to-Point Standard)
Do not bloat service pages with excessive paragraphs or redundant grids. Follow this exact 7-section structure:
1. **Hero Section:**
   - Sharp H1 (problem + solution).
   - 2-sentence value proposition.
   - Interactive Live Activity Preview Box (`.preview-card-box`) showing 3 real-time metrics and live activity items.
2. **Daily Business Problems We Solve (`#problems`):**
   - Exactly 4 high-impact cards with customer quotes, accent category badges, 1-sentence problem explanation, and a "How we fix this" block.
3. **What We Build (`#modules`):**
   - Exactly 6 tailored capability cards.
   - Each card contains an icon, title, 1 crisp sentence, and 4 scannable bullet points.
4. **How It Works (`#delivery`):**
   - 4-step delivery roadmap (Step 01 to 04 with day-ranges).
5. **Clear Answers / FAQ (`#faq`):**
   - Exactly 6 numbered accordion items with category pills.
   - 2-3 sentence direct, honest answers addressing cost/timeline, language, safety, complex edge cases, zero SaaS rent, and integrations.
6. **CTA Banner (`.cta-section`):**
   - Focused CTA heading, 1-sentence value pitch, dual buttons (Quote + WhatsApp).
7. **Inquiry Form & Standard Contact Card (`#contact`):**
   - Clean AJAX form with instant feedback message.

---

## 4. Strict "Free" Word Prohibition
- **Never use the word "Free"** anywhere on service pages or conversion buttons.
- Prohibited: *"Free Consultation"*, *"Free Estimate"*, *"Free Demo"*, *"Free Setup"*.
- Allowed: *"Send Me an Estimate"*, *"Get an AI Strategy Call"*, *"Tell Us What You Need"*, *"Explore Modules"*.

---

## 5. Contact Side Card Standard (Identical Across All Service Pages)
The `.contact-info` container must contain these exact 5 items across all service pages:
1. **Email Us:** `contact@techminddevelopers.in`
2. **Call Us Directly:** `+91-7835019421`
3. **Our Locations:** `Delhi NCR (Okhla) • Aligarh, UP`
4. **WhatsApp Chat:** `+91-7835019421` (Link: `https://wa.me/917835019421`)
5. **Our Promise:** `100% code ownership • Zero monthly software rent`

---

## 6. Typography & Formatting Rules
- **No Unicode Em/En Dashes:** Never use `—` (`—`) or `–` (`–`). Always use standard ASCII hyphens `-` or `&bull;` (`•`).
- **Terminology:** Always use **"Inquiry / Inquiries"** (with "I"). Never switch to "Enquiry".
- **Theme Toggle Sun Icon:** In `updateIcon(theme)`, always use the clean geometric SVG sun with `<circle cx="12" cy="12" r="4.5">`, never the FontAwesome cog-like `fas fa-sun`.

---

## 7. Blog Clustering & Linking Protocol
Every service page must be paired with:
1. **Primary Pillar Blog:** Contextual in-article link, callout box (`👉 Explore our ... Services & Modules`), and dual CTA buttons at the bottom.
2. **Supporting Cluster Blogs:** Niche high-intent blogs linking directly to the service page.
3. **Sitemap:** Add new service page to `sitemap.xml` with priority `0.95`, and update `<lastmod>` date for all modified pages.

---

## 8. Development & Deployment Protocol
- **Local First:** Always build, verify, and run audits on local before committing.
- **Audit Checks:** Verify 0 "free" occurrences, 0 em/en dashes, 0 visible Hinglish words, and contact card consistency prior to push.
