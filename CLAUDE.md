# portfolio — Project Brief

> Save this file as `CLAUDE.md` in the root of `CarlosJ09/portfolio`. It is the source of truth
> for this rework. Carlos may talk to you in Spanish; **all site copy is in English.**

---

## 1. What this is and why it's being reworked

Personal portfolio of **Carlos Jiménez**, a Full-Stack Engineer from Santo Domingo, Dominican
Republic. Live at https://portfolio-carlosj09.netlify.app/ (Netlify). Stack: Astro 4.4.5,
Tailwind 3.4, TypeScript, `@fontsource-variable/onest`.

The current site works but it says nothing specific about him:

- It is built on a widely used Astro portfolio template, and it looks like it. Recruiters in LATAM
  recognize it instantly.
- The headline ("Systems Engineer and Software Developer… Specialized in Web Development") could be
  anyone's.
- The projects are tutorial- or university-grade (Rapidtest, Object Classification). His strongest
  work isn't on the site at all.
- The skills list has 30+ technologies, which reads as "no depth in any".
- The copy says he builds Thryv's UI with **React**. His actual day-to-day stack at Thryv and at
  SIGEF is **Vue 3 + TypeScript**. The site is mis-selling him.

**Goal:** a portfolio that positions him for **remote Senior Full-Stack roles with an AI/LLM
component** — the kind of role where a hiring manager wants evidence of engineering judgment with
LLM systems, not a list of logos.

## 2. Positioning

**Full-Stack Engineer who builds AI features with LLMs.**

What Carlos has said about himself, which the copy must be built from:

- 4+ years of professional experience (career start: 2022 — `src/consts.ts`)
- Has built several AI features in production, including RAG tools
- Uses AWS AI services, including **Amazon Bedrock**
- Is currently studying for the **AWS Certified Developer – Associate**, then Solutions Architect –
  Associate. **He is not certified yet. Never write or imply that he is.** **Do not mention the
  certification on the site at all** (not even "preparing for") until he has it; he'll add it then.
- Works across several languages for full-stack: TypeScript/JavaScript (Vue, React, Node, NestJS),
  Python (FastAPI, Django), Java (Spring Boot — rusty, over a year since he used it; do not feature
  it prominently)

Tone: direct, specific, first person, no buzzwords. Personality comes from **concrete decisions and
opinions in his own voice**, not from animations or emoji. Things like "I'd rather a system say
*needs review* than guess" are what make it his.

Banned in copy: "passionate", "rockstar", "ninja", "cutting-edge", "leveraging", "seamless",
"robust and scalable", "thousands of users" (unless Carlos gives the number), any percentage he
didn't give you.

## 3. Rules that override everything else

1. **Never fabricate.** No invented metrics, dates, job titles, team sizes, user counts, or
   certifications. If copy needs a fact you don't have, write `TODO(carlos): <question>` in the
   source and **ask him** in the chat. Do not paper over it with vague filler.
2. **Confidentiality.** The only client/product names allowed are **Thryv** (employer, already
   public), **Dominicana Compañía de Seguros** (already public), **BotPro S.R.L**, and **SIGEF /
   Ministerio de Hacienda y Economía**. Internal Thryv product names must **not** appear anywhere —
   describe the work generically ("a partner-facing platform", "a lead-generation product").
3. Ask before adding any dependency.
4. Show Carlos the copy for a section before polishing its styling.
5. One phase at a time (§8). Commit at the end of each phase; don't start the next one without his
   OK.

## 4. Experience — source material

Carry over dates and companies from `src/components/Experience.astro` as they are. Each job shows
its city and country (Thryv: Dallas, Texas, USA; the work there is in English). Rewrite every
description around **what he decided and what changed**, not around the stack.

### Thryv — August 2025 – present
Current site title: "Frontend Developer". `TODO(carlos)`: confirm the title to show; his work
there is full-stack.

What he has said he did (describe generically, no internal product names):
- Built an **AI-powered insights feature end to end**: recommendations for partners based on their
  customer data. New **NestJS/TypeScript microservice**, **AWS** infrastructure, **Vue 3 + Pinia**
  frontend. `TODO(carlos)`: which AWS services; whether this is where Bedrock is used; any result
  he can state.
- Works on a lead-generation product whose architecture is a frontend, a BFF, an alerts service and
  an analytics service with a semantic layer (Cube) over Snowflake and BigQuery.
- **Led the decision to keep Vue** (not migrate to React) when extracting an app from the monolith
  into its own project, and reused the existing Auth0 tenant by creating only a new application.
- **Onboards and mentors new engineers** on his project: architecture, business domain,
  methodology, pairing, code review.
- The insights feature was built **with his team**, on **Amazon Bedrock**. No result to state.
- He works with **both Vue and React** in this role.
- (The RAG work was at BotPro, not Thryv. See below.)

### SIGEF — Ministerio de Hacienda y Economía (consulting) — November 2025 – November 2026
Title: **Frontend Consultant (Contract)**.
This entry is **new**: it isn't on the current site. It's a national government financial
management system.
- Codebase: **Nuxt 3, Vue 3, TypeScript, PrimeVue, Keycloak**.
- Wrote the pre-refactoring analysis of the frontend service layer: **27 service files, ~222 uses
  of `any`, zero test files**.
- Designed and rolled out a shared composable pattern (`useSigefResource`) to replace the
  per-module web-service classes, keeping backward compatibility.
- Consolidated unused backend classes under a single service (approved with POs and architects).
- Stabilized modules after a major branch integration (restored pre-integration behavior across
  the classifiers module; took on a module that was fully non-functional).
- Currently on the team that maintains the system in production (finds and fixes bugs). Don't
  call it "sustainability team" in English copy.

Do **not** mention contract value, the financing program, or any person's name.

### Dominicana Compañía de Seguros — Oct 2023 – Aug 2025 (frontend, then full-stack)
- The current copy claims "enhancing user engagement by 30%". `TODO(carlos)`: is that a measured
  number he can defend in an interview? If not, remove it.
- Built the company's main public website from scratch (Next.js, Tailwind) —
  https://dominicanadeseguros.com/site
- Java/Spring Boot backend services, React/Redux UI, Vitest/Jest, React Native + Expo.

### BotPro S.R.L — Oct 2022 – Oct 2023
Chatbot automation in Node.js; Express + Prisma backends; React/TypeScript; MySQL and MongoDB.
Built a **RAG bot workflow** in Python: FastAPI, LangChain, Pinecone, ChatGPT (OpenAI) API.
Keep short.

## 5. Projects

### Featured: vendor-vetting (the centerpiece — gets its own case-study page)
- Repo: https://github.com/CarlosJ09/vendor-vetting
- Live demo: https://vendor-vetting.vercel.app/
- **Read the repo's README before writing anything.** Every number on the portfolio must come from
  it or from `eval-results/`, verbatim.

What it is: an LLM pipeline that vets supplier document packets against the Dominican Republic's
public procurement registry requirements. It classifies unlabeled files, extracts fields, validates
them with deterministic rules, cross-checks documents against each other, and produces a dossier
where every finding links to the page and region that supports it.

Lead with the parts that show judgment, not the 100% scores (100% on a self-generated corpus reads
as naive to an experienced reader, and the README itself says so):
- **"The model extracts. The code validates."**, enforced by a test that fails the build if
  decision words appear in a prompt.
- **0 of 16 defective dossiers reported as pass**: the metric that matters.
- **Self-reported confidence was 1.00 on all 761 fields**, including the one wrong extraction. The
  most uncomfortable result, and the one worth publishing.
- The extraction "model error" that turned out to be his own text-reconstruction bug.
- Runs fully local (qwen2.5 7B on an 8 GB laptop GPU); deployed as Next.js on Vercel + Supabase
  with TLS that fails closed.

Do **not** call it "agentic". It's a staged pipeline.

Page structure: problem → the one principle → architecture (reuse the README diagram, restyled) →
results → failure modes (pick 3–4) → what he'd do next → links. It should be skimmable in 60
seconds and readable in 5 minutes.

### Keep, rewritten
- **Dominicana insurance website**: a real production site he built from scratch. Rewrite around
  what he owned.

### Demote or remove
- **Object Classification**: at most a one-line mention in an "Other" list.
- **Rapidtest**: remove.

## 6. Skills

Replace the logo wall with a short, honest list grouped by how he actually uses things. Roughly:
- **Daily:** TypeScript, Vue 3 / Nuxt, Node.js / NestJS, PostgreSQL, AWS
- **AI/LLM:** Amazon Bedrock, RAG, LLM evaluation, local inference (Ollama)
- **Also shipped with:** React / Next.js, Python (FastAPI, Django), Java / Spring Boot

Show this list to Carlos before committing to it. It's a draft, not facts.

## 7. Design direction

Keep Astro + Tailwind. Remove the template's fingerprints:
- Drop the typing effect in the hero. The `<h1>` currently renders without his name until JS runs,
  so crawlers and LinkedIn previews see "Hey, I'm." — **the name must be in static HTML.**
- Drop the radial-gradient background and the generic pill/badge look.
- Aim for something editorial and text-forward: strong typography, one accent color, a monospace
  face for numbers and code-ish details, generous whitespace. Case studies should read like a good
  engineering blog post.
- Keep light/dark/system themes.

**Before restyling, describe 2 visual directions in a few sentences each and let Carlos pick.**

## 8. Phases

1. **Content and structure.** Rewrite hero, about, experience (including the new SIGEF entry),
   projects and skills, with `TODO(carlos)` wherever facts are missing. Resolve the TODOs with him.
   Remove Rapidtest. Delete `src/pages/components.astro` (the template's design-system demo page, live
   at `/components` with the title "Design System portfolio.dev").
2. **Visual identity.** After he picks a direction (§7).
3. **vendor-vetting case study page** at `/projects/vendor-vetting`.
4. **Polish.** `<html lang="en">` (it's currently `es`), per-page titles and meta descriptions,
   Open Graph/Twitter image, sitemap, favicon, accessible contrast in both themes, Lighthouse pass,
   rewrite the repo README (it's currently a placeholder).

## 9. Non-goals

Don't build or suggest: a CMS, i18n/Spanish version, a contact-form backend, analytics, 3D or
heavy animation libraries, an Astro major-version upgrade (unless a needed feature requires it —
ask first), or a blog engine before there's a post to put in it.

## 10. Coming later (not this session; leave room in the structure, don't create placeholders)

So the information architecture can absorb them without a redesign:
- **vendor-vetting v2**: the same eval against a hosted model (Claude / Bedrock) vs. local qwen,
  plus a logprob-based confidence calibration experiment.
- **An async ingestion service for vendor-vetting** in Node/NestJS: queue, retries, idempotency,
  dead-letter, timeouts, circuit breaker, with a load test and a "kill the dependency" test,
  reported with numbers.
- **Writing**: "Self-reported confidence was 1.00 on 761 fields", and a case study on refactoring
  the SIGEF frontend service layer (anonymized where needed).

Only add a Writing section once a post exists. Never list unbuilt work.