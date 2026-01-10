> **📍 Latest Version:** This is a static export. For the up-to-date, interactive version of this learning journal that you can use with Notion Agent, visit: **[ntn.so/sweinternjournal](https://ntn.so/sweinternjournal)**
>
> *This file exists as a reference for Claude Code to understand the Notion structure and session summary format.*

---

# SWE Intern Learning Journal by zero2sudo :)

**Loop:** build in your AI assisted coding environment → capture a structured session summary → paste it here → extract reusable concepts → repeat.

---

### Start here

This page is a learning system for SWE interns or anyone building coding projects with AI.

**New here?** Jump to the bottom to see setup + copy/paste prompts.

---

## 📝 Daily Learning Logs

Track what you built each day, key learnings, and mistakes to avoid.

<!--
NOTION DATABASE: Daily Logs
This is an embedded Notion database. When using Notion Agent, entries should be created with these columns:

| Column Name           | Type   | Description                                                    |
|-----------------------|--------|----------------------------------------------------------------|
| Date                  | Title  | The date of the session (e.g., "2025-01-10")                   |
| What I Built Today    | Text   | Specific features, files, endpoints, or UI changes completed   |
| Key Learnings         | Text   | Why it matters, how it works, concepts understood              |
| Mistakes & Lessons    | Text   | What broke, root cause, fix applied, how to prevent next time  |
| Next Steps            | Text   | Tight, actionable items for the next session                   |
| Questions to Answer   | Text   | Quiz-style questions to test understanding (3-5 questions)     |

Note: The JSON output from Claude Code session summaries maps 1:1 to these columns.
-->

---

## 🧠 Concepts & Technologies

Keep track of new concepts, frameworks, and technologies you're learning.

<!--
NOTION DATABASE: Concepts Tracker
This is an embedded Notion database. When using Notion Agent, entries should be created with these columns:

| Column Name           | Type     | Description                                                              |
|-----------------------|----------|--------------------------------------------------------------------------|
| Concept/Technology    | Title    | Short name of the concept (e.g., "React Hooks", "TypeScript Generics")   |
| Category              | Select   | One of: Frontend, Backend, Database, DevOps, Language, Framework, Tool, Other |
| What It Is            | Text     | 1-3 sentence definition explaining the concept                           |
| When I Used It        | Text     | Context of when/where this concept appeared in your work                 |
| Status                | Select   | Learning → Comfortable → Mastered (tracks proficiency progression)       |
| Resources             | URL      | Optional link to documentation, tutorial, or reference material          |

Note: Claude Code flags new concepts in format [CONCEPT: name - category] for easy extraction.
-->

---

## 💭 Quick Notes

Use this space for any quick thoughts or ideas:

### Full Stack Mental Model

**React** = presentation + interaction

**API** = communication

**Engine** = truth (rules/math)

**DB** = memory

---

---

### Setup + instructions (jump section)

### 1) How this journal has been used (examples)

**What “good” looks like**

- **Daily Logs** capture what you built, what you learned, mistakes to avoid, next steps, and questions you should be able to answer.
- **Concepts Tracker** stores reusable concepts you want to remember, with a short definition and when you used it.

---

### 2) Copy/paste into your AI Coding Environment

- **COPY/PASTE PROMPT — High-signal session summary (designed for this journal)**
    
    Please summarize everything I've done in this window so I can copy and paste it into my Notion Agent. Here is a bit more context about my Notion Agent and learning workspace:
    
    **My SWE Intern Learning Journal** is a structured learning workspace designed to document my journey building full stack applications. It's organized around two core tracking systems:
    
    **📅 Daily Logs** captures my day-to-day progress with a focus on actionable reflection—what I built, what I learned, mistakes to avoid repeating, what's next, and conceptual questions I should be able to answer after what I completed that day. It's set up to help me build momentum and pattern-match my own growth over time.
    
    **💡 Concepts Tracker** serves as my technical knowledge base, cataloging every framework, tool, and concept I encountered. With categories (ex. Frontend, Backend, Database, etc.) and status tracking (Learning → Comfortable → Mastered), it's essentially my personal tech stack proficiency map.
    
    The **Quick Notes** section shows my mental model philosophy—breaking complex systems into simple, memorable chunks (like "React = presentation + interaction").
    
    **How we work together in it**
    
    **You use me to:**
    
    - Quickly log entries when you want to capture learnings without typing everything manually ("add today's log: built user auth, learned about JWT tokens...")
    - Explain concepts you're encountering ("what is middleware in Express?")
    - Query your progress ("show me all the backend concepts I've marked as comfortable")
    - Reflect and synthesize ("summarize my key mistakes from the past week")
    - Fill knowledge gaps ("I'm learning React hooks, add useful resources to the concepts tracker")
    
    **I help by:**
    
    - Creating and updating database entries based on your natural language requests
    - Searching across your logs to surface patterns or past learnings
    - Explaining technical concepts in context of what you're building
    - Suggesting next steps or connections between concepts you've logged
    
    **Output requirements**
    
    Return your answer in two parts:
    
    **Part A — Human-readable summary**
    
    - What I built (specific features, files, endpoints, UI changes)
    - Key learnings (why it matters, how it works)
    - Mistakes and lessons (what broke, root cause, fix, prevention)
    - Next steps (tight, actionable)
    - Questions I should be able to answer (quiz-style)
    
    **Part B — Notion-ready JSON**
    
    Return valid JSON with exactly these keys (no extra keys):
    
    - "What I Built Today"
    - "Key Learnings"
    - "Mistakes & Lessons"
    - "Next Steps"
    - "Questions to Answer"
    
    Here are my rough notes / transcript from this window:
    
    [PASTE NOTES HERE]
    

---

### 3) Copy/paste into Notion Agent (to create entries)

- **Step 1: Paste this into Notion Agent — Create today’s Daily Log from JSON**
    
    Create a new entry in the **Daily Logs** database on this page.
    
    Set the **Date** title to: [PASTE TODAY’S DATE]
    
    Then set the properties using the JSON below. Each JSON key maps 1:1 to a property in the Daily Logs database:
    
    - What I Built Today
    - Key Learnings
    - Mistakes & Lessons
    - Next Steps
    - Questions to Answer
    
       JSON: [PASTE JSON HERE]
    
- **Step 2: Paste this into Notion Agent — Extract Concepts into the Concepts Tracker**
    
    From the Daily Log JSON above, extract reusable concepts (frameworks, tools, patterns, gotchas) and add them to the **Concepts Tracker** database.
    
    For each concept:
    
    - Create a new concept if it doesn’t exist.
    - If it already exists, update **When I Used It** with today’s context.
    
    Set these fields:
    
    - Concept/Technology (short title)
    - Category (Frontend, Backend, Database, DevOps, Language, Framework, Tool, Other)
    - What It Is (1–3 sentence definition)
    - When I Used It (today + where it appeared)
    - Resources (optional link)

---

### 4) IMPORTANT — Reset this template before you start (so it becomes *your* journal)

If you start using this template without resetting it, you’ll be mixing your learning history with the example entries.

**Before your first real log, tell your Notion Agent to complete the reset below.**

- **COPY/PASTE PROMPT — Reset this template (run in Notion Agent)**
    
    Reset this learning journal so it is ready for a new user.
    
    **Do this:**
    
    1) Delete **all existing entries/pages** inside the **Daily Logs** database embedded on this page.
    
    2) Delete **all existing entries/pages** inside the **Concepts Tracker** database embedded on this page.
    
    (These databases are template-owned and will duplicate with this page — they are not linked to any other journal.)
    
    **Do NOT do this:**
    
    - Do **not** delete or edit the instructions on this page.
    - Do **not** delete the embedded database blocks.
    - Do **not** change the database schemas.
    
    When you’re done, confirm that both databases are empty but still visible on this page.
    
- Manual reset (if you prefer)
    - Open **Daily Logs** → select all rows → delete (template-owned)
    - Open **Concepts Tracker** → select all rows → delete (template-owned)

<!--
Note for Claude Code: The Daily Logs and Concepts Tracker databases are embedded in the live Notion page.
Their schemas are documented above in the HTML comments under each section header.
-->

---

## 🧑‍💻 Real SWE Intern Project (follow along)

Want to work on a real SWE intern–level codebase and ship resume-worthy work?

- Follow **@zero2sudo** on Instagram for weekly SWE intern assignments + progress updates: [https://instagram.com/zero2sudo](https://instagram.com/zero2sudo)
- Codebase: [https://github.com/zero2sudo/datavisualization](https://github.com/zero2sudo/datavisualization)
- Live demo: [https://zero2sudo.github.io/datavisualization/](https://zero2sudo.github.io/datavisualization/)

**DataViz Studio** is a drag-and-drop data visualization tool built with **React**, **TypeScript**, and **Vega-Lite**.

> This repo is a demonstration of [Claude Code](https://clau.de/zero2sudo) and Claude Opus 4.5, created by [zero2sudo](https://instagram.com/zero2sudo) in partnership with Anthropic.
> 

---

## Intern Assignments

### SWE Intern

### Day 1 — Get Oriented

**Goal**: Get the app running and understand what it does. No code changes today.

**Checklist**

- [ ]  Read the [README.md](https://github.com/zero2sudo/datavisualization) file
- [ ]  Fork the repo and clone it locally
- [ ]  Run `npm install && npm run dev`
- [ ]  Play with the app for 15 minutes — try creating 3 different charts by dragging fields around
- [ ]  Read through these files to see how the code works:
    - `src/components/FieldList/FieldPill.tsx` (how drag-and-drop starts)
    - `src/components/EncodingPanel/EncodingShelf.tsx` (how drops are handled)
    - `src/context/AppContext.tsx` (how state is managed)
- [ ]  Write down 1 question you have about the code or architecture
- [ ]  Ask your mentor (me) that question by commenting on my latest reel
- [ ]  Comment a 2-sentence summary: what did you learn, and what surprised you?

**Time estimate**: 1–2 hours

**Success looks like**: You can explain to someone else what this app does and roughly how the drag-and-drop flow works.

### Day 2 — Understanding the Codebase with AI

**Goal**: Before writing any code, understand what you're working with. Use AI to explore this codebase file-by-file.

### Option A — [Claude](https://clau.de/zero2sudo) chat (beginner-friendly)

Open each file in `src/` and paste it into [Claude](https://clau.de/zero2sudo) with this prompt:

```jsx
I'm a freshman CS major learning React and TypeScript. I just cloned a data visualization project and I'm trying to understand how it works.

Here's a file from the project called [FILENAME]:
[PASTE CODE HERE]

Please explain:
1. What is this file's job in one sentence?
2. What are the main "pieces" in this file? (functions, components, variables)
3. How does this file talk to other parts of the app? (what does it import/export?)
4. What's one concept in here I should Google to understand better?

Use analogies where possible — I learn best when you compare code concepts to real-world things.
```

**Start with these files (in order):**

1. `src/App.tsx` — the entry point
2. `src/context/AppContext.tsx` — where data lives
3. `src/components/ChartView.tsx` — where charts render

### Option B — [Claude Code](https://clau.de/zero2sudo) (more advanced)

If you have [Claude Code](https://clau.de/zero2sudo) installed, run it in your cloned repo and use this prompt:

```jsx
I'm a freshman CS major and this is my first time exploring a real React codebase. I need you to help me understand how this app works.

Walk me through the application architecture:
1. Start with App.tsx — what components does it render and why?
2. How does data flow through the app? (trace it from AppContext to the components)
3. What happens when a user drags a field onto an encoding drop zone?
4. Which files would I need to modify if I wanted to add a new chart type?

Explain like I'm smart but have never seen a production React app before. Use files from THIS codebase as examples, not generic code.
```

**Assignment**

After exploring, write **3–5 sentences** in your learning journal answering:

> “If I had to explain this app to a friend who’s never coded, what would I say?”
> 

### Day 3 — Your First Feature: Modify the “Clear All” Button

**Goal**: Make your first real code change. You’ll add a button that clears all encoding channels at once.

### The task

Add a **“Clear All”** button to the Encoding Panel that resets all channel assignments (**X, Y, Color, Size**) with one click.

**Good news**: The logic already exists — you just need to find it and wire it up to a button.

### Step 1 — Discover what already exists

Use [Claude Code](https://clau.de/zero2sudo) or [Claude](https://clau.de/zero2sudo) to help you explore:

```jsx
I need to add a "Clear All" button to clear all encoding channels in this data viz app.

Before I write any code, help me find:
1. Is there already a clearAll function somewhere in the codebase?
2. How do other components access shared functions? (hint: look at how EncodingShelf.tsx works)
3. What file should I add my button to?

Search the codebase and show me what you find.
```

### Step 2 — Implement the button

Once you’ve found the existing `clearAll` function, add a button to `EncodingPanel.tsx`:

1. Import the `useApp` hook (look at how `EncodingShelf.tsx` does it)
2. Get `clearAll` from the hook
3. Add a button that calls `clearAll()` when clicked
4. Style it to match the existing UI

**Hint for styling**: Look at how other buttons in the app are styled. Keep it simple — a subtle text button like “Clear All” works great.

### Step 3 — Test it

1. Run `npm run dev` if your app isn’t already running
2. Drag some fields onto **X**, **Y**, **Color** channels
3. Click your **Clear All** button
4. All channels should reset to empty

### Step 4 — Commit your work

```bash
git add .
git commit -m "Add Clear All button to encoding panel"
git push origin main
```

### Update (assignment clarification)

- The **Clear All** button already exists in the codebase.
- **Your task for Part 3** is to make sure the **Clear All** button is **always visible**.
- This should be a simple change (likely deleting conditional rendering / "show only when assigned" logic).

### Stretch goal (optional)

- Add a confirmation tooltip or animation when cleared

### What you learned (journal prompts)

After completing this, write in your journal:

1. What is a “hook” in React, and why did you use `useApp()`?
2. What is the pattern called where multiple components share the same data? (hint: it starts with “C”)
3. Why was this feature easy to add? What would have made it harder?

**Concepts to track**

- [CONCEPT: React Hooks - Frontend]
- [CONCEPT: React Context - Frontend]
- [CONCEPT: State Management - Frontend]

### PM Intern

### Day 1 — Starter Task

**Task: Create a “First 5 Minutes” User Testing Script**

On Day 1, you will get hands-on with the product and produce something the team can reuse immediately.

**What you are creating**

- A short user testing script for *first-time* users.
- It should include **5 tasks**, each with:
    - A clear prompt you will read to the user (goal-based)
    - **Success criteria** (what “done” looks like)
    - What to **observe** (explicit checklist of what to look for)
    - **Moderator hints** (what to say if they get stuck)
- A short **pre-test checklist**, **post-test questions**, and a **reflection section**.

**Why this is a great Day 1 task**

- Forces you to actually use the product deeply.
- Produces a real artifact the team can run with.
- No code risk.
- Builds user empathy and task-based product thinking.
- Should take **2–4 hours**.

**Deliverable (paste your work into a doc with this exact structure)**

```jsx
# DataViz Studio - User Testing Script (v1)

## Pre-test (read this aloud)
"Thanks for helping today. This session is a test of the product, not a test of you. If something is confusing or hard to find, that’s useful feedback."

"As you go, please think out loud—say what you’re trying to do and what you expect to happen. If you get stuck, that’s okay. I might ask what you’re thinking, but I won’t teach you how to use the product unless you’re totally blocked."

"We’ll do 5 short tasks. There are no right answers. Ready?"

## Pre-test checklist (moderator)
- [ ] Confirm user has never seen the app before
- [ ] Confirm screen + audio recording are on
- [ ] Confirm the app is loaded and the cars dataset is visible
- [ ] Ask: "Have you used any chart tools before (Excel, Tableau, Looker, etc.)?" (note 1 sentence)

## Notes format (use this during the session)
For each task capture:
- Time to first meaningful action:
- Time to completion:
- Where they hesitated (what + how long):
- Quotes (1–2 short):
- Severity (Low / Med / High):

---

## Task 1: Create your first chart (5 min)
**Scenario**: You’re trying to understand whether fuel efficiency changes as horsepower increases.

**Prompt (read aloud)**: "Using the cars dataset, build a chart that helps you understand the relationship between horsepower and miles per gallon."

**Success criteria**:
- [ ] A chart renders (scatter plot or equivalent)
- [ ] Horsepower and Miles_per_Gallon are both encoded on axes (either orientation is fine)

**Observe (be specific)**:
- [ ] Do they start by dragging fields, clicking, or scanning?
- [ ] Do they immediately understand where to put X and Y?
- [ ] Do they hesitate when choosing fields? Why?
- [ ] Do they notice the drop zones and what they do?
- [ ] If they make a mistake, can they recover without help?

**If stuck (only after ~20 seconds)**:
- Hint 1: "What parts of the UI look like places you can drop something?"
- Hint 2: "Try dragging a field name onto one of the axis areas."

---

## Task 2: Compare groups with color (3 min)
**Scenario**: You want to know whether cars from different regions perform differently.

**Prompt (read aloud)**: "Update your chart so you can compare cars by where they’re from. Make it easy to see differences by region."

**Success criteria**:
- [ ] Points are visually grouped by region (Origin / Country)
- [ ] Color encoding (or equivalent grouping) is applied

**Observe (be specific)**:
- [ ] Do they look for “color” as a concept or do they look for “group by”?
- [ ] Do they understand what the current encodings represent?
- [ ] Do they confuse legend vs. axis?
- [ ] Do they notice the legend and interpret it correctly?

**If stuck (only after ~20 seconds)**:
- Hint 1: "If you wanted to split points into categories, what visual property could help?"
- Hint 2: "Try dragging a category-like field onto a place that changes color."

---

## Task 3: Find extremes (filter or narrow focus) (4 min)
**Scenario**: You’re only interested in higher-horsepower cars, and you want to focus your analysis.

**Prompt (read aloud)**: "Adjust the chart so you’re only looking at higher-horsepower cars. Do whatever you think is the most natural way to narrow the data."

**Success criteria** (choose what the product supports):
- [ ] User attempts to narrow the data (filter, selection, or other supported method)
- [ ] The resulting chart reflects a narrower subset (or user clearly explains why they can’t)

**Observe (be specific)**:
- [ ] Do they search for a filter control? Where?
- [ ] Do they expect to click the chart to select?
- [ ] Do they look for settings menus or right-click interactions?
- [ ] If filtering isn’t supported, how quickly do they conclude that?
- [ ] What workaround do they try?

**If stuck (only after ~20 seconds)**:
- Hint 1: "Where would you expect filtering controls to live in a chart builder?"
- Hint 2: "If you can’t find filtering, tell me what you would want the product to let you do."

---

## Task 4: Change the question (swap variables) (3 min)
**Scenario**: Now you suspect weight might be a better predictor of fuel efficiency than horsepower.

**Prompt (read aloud)**: "Update the chart to explore whether a car’s weight relates to miles per gallon, instead of horsepower."

**Success criteria**:
- [ ] One axis is updated from Horsepower → Weight (or equivalent)
- [ ] Miles_per_Gallon remains encoded
- [ ] Chart updates successfully

**Observe (be specific)**:
- [ ] Do they understand how to replace an encoding vs. adding a new one?
- [ ] Do they try to remove the old field first?
- [ ] Do they discover an obvious “clear/remove” affordance?
- [ ] Do they accidentally break the chart, and can they recover?

**If stuck (only after ~20 seconds)**:
- Hint 1: "Try replacing what’s on the axis with a different field."
- Hint 2: "If you needed to remove something from an axis, what would you try first?"

---

## Task 5: Communicate insight (title or interpretation) (4 min)
**Scenario**: You’re going to share this chart with a teammate who has not seen the tool.

**Prompt (read aloud)**: "Make the chart easier for someone else to understand, then tell me what you think the chart shows."

**Success criteria**:
- [ ] User attempts to improve interpretability (title, labels, legend clarity, or other supported approach)
- [ ] User explains at least one takeaway from the visualization

**Observe (be specific)**:
- [ ] Do they look for titles/labels?
- [ ] Do they interpret correlation vs. causation correctly?
- [ ] Do they rely on the legend correctly when color is applied?
- [ ] Do they express confusion about what the chart is showing?

**If stuck (only after ~20 seconds)**:
- Hint 1: "Imagine a teammate sees only a screenshot—what would they need?"
- Hint 2: "If the tool can’t add a title/labels, what’s missing and where would you expect it?"

---

## Post-test Questions
1. What did you think this product was for, in your own words?
2. What was the easiest part of using it?
3. What was the most confusing part?
4. If you could change one thing to make this easier for first-time users, what would it be?
5. On a scale of 1–5, how confident would you feel using this on your own?

## Reflection (for the PM intern running the test)
**What did you learn about the user’s mental model?**
- (1–3 bullets)

**Top breakdown points (with evidence)**
- Breakdown #1:
	- Evidence (what happened / quote):
	- Severity (Low / Med / High):
	- Hypothesis for why:
- Breakdown #2:
- Breakdown #3:

**So what should we change first (and why)?**
- Priority #1:
	- Rationale (frequency × impact × confidence):

**One-sentence product insight**
- "Users expected ___, but the product did ___."
```

**What you will learn**

- How real users actually interact with the product.
- What is intuitive versus confusing.
- How to write testable success criteria.
- Where the product gaps are, so you can propose solutions later.

### Day 2 — Understanding the Product with AI

**Goal**: Before proposing any features, understand what the product does and who it’s for. Use AI to analyze this application from a product perspective.

### Option A — [Claude](https://clau.de/zero2sudo) chat (beginner-friendly)

1. Spend 10 minutes using the live demo: [https://zero2sudo.github.io/datavisualization/](https://zero2sudo.github.io/datavisualization/)
2. Then use this prompt in [Claude](https://clau.de/zero2sudo):

```jsx
I'm a freshman interning as a PM. I'm analyzing a data visualization tool that lets users drag and drop fields onto chart encodings (X, Y, Color, Size) to build Vega-Lite charts.

Help me think through this product:
1. Who is the target user? What problem does this solve for them?
2. What's the core user flow? (from opening the app to getting value)
3. What are 3 "jobs to be done" this product helps users accomplish?
4. What's the competitive landscape? Name 2-3 similar tools and how this one might differentiate.
5. What's one obvious feature gap a user might notice in the first 5 minutes?

Explain like I'm learning PM fundamentals — define any PM jargon you use.
```

### Option B — [Claude Code](https://clau.de/zero2sudo) (more advanced)

If you have [Claude Code](https://clau.de/zero2sudo) installed, run it in the cloned repo and use this prompt:

```jsx
I'm a PM intern analyzing this data visualization product. I've used the demo, now I want to understand it deeper by looking at what's actually built.

Help me with product discovery:
1. Based on the components in src/components/, what features currently exist? List them.
2. Look at the TypeScript types in src/types/ — what do they tell us about the data model and what the product supports?
3. What encoding options are available? (check EncodingPanel or similar)
4. Based on what's built vs. what's NOT built, what does this tell us about the product's current scope and priorities?
5. If I were writing a PRD for "v2" of this product, what are 3 features the codebase seems ready to support with minimal changes?

Think like a PM who wants to understand technical feasibility without being an engineer.
```

**Assignment**

Write a 1-paragraph product summary in your learning journal:

> “What this product does, who it’s for, and the single most important improvement I’d prioritize.”
>