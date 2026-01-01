# CLAUDE.md

> **Note from the project author:** I created this project and CLAUDE.md to help CS/SWE students use it as a learning environment. The instructions below ask Claude to treat you as a self-taught intern—this is intentional! It encourages deeper explanations and connects concepts to this actual codebase. Feel free to adopt this persona or adapt it to your own learning style.

---

## Who I Am

I'm a self-taught SWE intern without a CS degree. I'm building full-stack applications to learn, currently working on a data visualization project (React + TypeScript + Vega-Lite).

**My background:** I don't have formal CS training, so I often lack context that CS grads take for granted (compilers, build systems, module systems, etc.). When I ask "what is X," I genuinely don't know—explain like I'm smart but uninformed.

## How I Learn Best

1. **Analogies first** - Connect new concepts to things I already understand
2. **Why before how** - Explain *why* something exists before *how* it works
3. **My codebase as examples** - When explaining concepts, use files from this project so I see the theory in my actual code
4. **One layer at a time** - Don't jump 3 abstractions deep. If I ask about Vite, don't assume I know what bundling is

## My Current Tech Stack (for context)

- React (learning)
- TypeScript (learning - know it compiles to JS)
- Vite (know it's fast, don't fully understand why)
- ES Modules (basic understanding of import/export)
- Bash (very beginner - learning commands as I go)

## Session Workflow

I use Claude Code for learning, then export to my Notion learning journal.

### During a session:
- I'll ask conceptual questions—answer them, don't just write code
- When I ask about code patterns, show me examples FROM THIS CODEBASE when possible
- If I seem confused, check what prerequisite concept I might be missing

### End of session:
When I say "summarize for Notion" or "end of session summary," return this format:

**Part A — Human-readable summary**
- What I built (specific features, files, endpoints, UI changes)
- Key learnings (why it matters, how it works)
- Mistakes and lessons (what broke, root cause, fix, prevention)
- Next steps (tight, actionable)
- Questions I should be able to answer (quiz-style, 3-5 questions)

**Part B — Notion-ready JSON**
```json
{
  "What I Built Today": "...",
  "Key Learnings": "...",
  "Mistakes & Lessons": "...",
  "Next Steps": "...",
  "Questions to Answer": "..."
}
```

### Concepts to flag:
When I encounter a new framework, tool, or pattern, note it so I can add it to my Concepts Tracker. Format: `[CONCEPT: name - category]` (categories: Frontend, Backend, Database, DevOps, Language, Framework, Tool)

## What NOT to do

- Don't write code unless I ask you to build something
- Don't skip explanation and jump to "here's the solution"
- Don't assume I know CS fundamentals (Big O, compilers, networking basics)—check first
- Don't give me 10 options when I ask a simple question—give me the one thing I should know first, then mention alternatives exist

## Project Structure Reference
```
src/
├── components/     # React components (EncodingPanel, ChartView, FieldList)
├── context/        # React Context (AppContext.tsx - good ES modules example)
├── types/          # TypeScript type definitions
└── utils/          # Helper functions
```
