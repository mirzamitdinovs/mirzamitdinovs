# Phase 2 — System Design Checklist (Structure First)

**Period:** April → June  
**Purpose:** Learn to answer system design interviews with a clear structure (not deep mastery yet)  
**Rule:** Structure > details. One system per week is enough.

---

## 🎯 Success Criteria (By End of Phase 2)

- [ ] You can confidently follow the system design interview flow:
  1. Clarify requirements
  2. Define constraints
  3. High-level architecture
  4. Data model
  5. API design
  6. Scaling strategy
  7. Bottlenecks & tradeoffs
- [ ] You can outline common systems without freezing
- [ ] You can explain tradeoffs calmly

Phase 2 is about **readiness**, not perfection.

---

## 🧩 Allowed Resources (Phase 2)

- **DDIA** (Designing Data-Intensive Applications): depth for concepts
- **Refactoring.Guru**: patterns reference (only when relevant)
- Light videos or notes on “system design interview structure”

**Do NOT** try to cover everything.

---

## 🟦 Week 1 — April 1–7

### Focus: Interview Framework + Baseline Concepts

- [ ] Learn the standard interview flow (7-step structure above)
- [ ] Understand:
  - Latency vs throughput
  - Availability vs consistency (high level)
- [ ] Write your personal “system design template” (1 page)

Deliverable:

- [ ] `template-notes.md` (or a short note) with your 7-step flow

---

## 🟦 Week 2 — April 8–14

### Focus: APIs + Data Modeling Basics

- [ ] Practice defining APIs (endpoints, request/response)
- [ ] Practice data modeling:
  - Entities
  - IDs
  - Relationships
- [ ] Learn basic pagination approaches

Mini exercise:

- [ ] Design API + data model for a simple “Notes App” or “Todo App”

---

## 🟨 Week 3 — April 15–21

### Focus: Caching + Performance Basics

- [ ] Understand caching goals:
  - Reduce latency
  - Reduce DB load
- [ ] Learn cache patterns:
  - Cache-aside (high level)
  - TTL basics
- [ ] Identify cache invalidation as a tradeoff (not a rabbit hole)

Mini deliverable:

- [ ] Explain when to cache and what NOT to cache

---

## 🟨 Week 4 — April 22–30

### Focus: Storage Choices + Indexing (High Level)

- [ ] SQL vs NoSQL: when and why (basic)
- [ ] Indexing basics:
  - Why indexes help reads
  - Write cost tradeoff
- [ ] Understand partitioning/sharding conceptually (no deep implementation)

Mini exercise:

- [ ] Pick DB choice for a “Feed” use case and justify

---

## 🟧 Week 5 — May 1–7

### Focus: System 1 — URL Shortener (Full Outline)

- [ ] Run full 7-step system design flow
- [ ] Decide:
  - Key generation strategy (high level)
  - DB choice
  - Basic caching plan
- [ ] State clear tradeoffs

Deliverable:

- [ ] 1-page design outline for URL shortener

---

## 🟧 Week 6 — May 8–14

### Focus: System 2 — Rate Limiter (Full Outline)

- [ ] Run full 7-step flow
- [ ] Understand:
  - Token bucket vs leaky bucket (high level)
  - Where rate limiting lives (edge, gateway, service)
- [ ] Identify storage choice for counters (high level)

Deliverable:

- [ ] 1-page design outline for rate limiter

---

## 🟥 Week 7 — May 15–21

### Focus: System 3 — Notification System (Full Outline)

- [ ] Run full 7-step flow
- [ ] Understand:
  - Queues / async processing conceptually
  - Retries + idempotency (high level)
- [ ] Identify bottlenecks and failure modes

Deliverable:

- [ ] 1-page design outline for notifications

---

## 🟥 Week 8 — May 22–31

### Focus: System 4 — Chat (Simplified Outline)

- [ ] Run full 7-step flow (simplified)
- [ ] Understand:
  - Real-time needs (WebSocket concept)
  - Message storage (append-only concept)
- [ ] Keep it simple and explain tradeoffs

Deliverable:

- [ ] 1-page simplified design outline for chat

---

## 🟩 June — Maintenance & Confidence

- [ ] Repeat 1 system/week (choose from above)
- [ ] Practice speaking your outline out loud (10–15 minutes)
- [ ] Improve clarity and tradeoff articulation

---

## 🔑 Phase 2 Rules

1. One system per week is enough
2. Always follow the 7-step structure
3. Don’t optimize prematurely
4. If tired → only outline requirements + high-level architecture
5. DDIA is for understanding, not memorization

---

## ✅ End of Phase 2

Phase 2 system design success is:

- You can **structure answers clearly**
- You can **talk tradeoffs confidently**
- You don’t freeze when given a design prompt
