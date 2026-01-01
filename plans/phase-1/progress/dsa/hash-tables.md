# Hash Tables — Deep Interview Guide (CTCI-Oriented)

## 0. Why Hash Tables Are an Interview Superpower

Hash tables are one of the **highest ROI topics** in interviews.

They allow you to:

- Reduce time complexity drastically (O(n²) → O(n))
- Trade space for speed (intentionally)
- Solve problems that look impossible with brute force

Many CTCI problems become trivial **once you recognize hashing**.

---

## 1. What a Hash Table Really Is (Interview View)

A hash table:

- Maps keys → values
- Uses a hash function to compute an index
- Provides **average O(1)** insert, lookup, delete

Under the hood:

- Backed by an array
- Handles collisions (chaining or open addressing)

👉 Interviewers care about **usage**, not implementation details.

---

## 2. When a Problem Is a Hash Table Problem

You should immediately think “hash table” if:

- You need to **check existence quickly**
- You need to **count frequency**
- You see:
  - duplicates
  - pairs
  - complements
  - seen-before logic
- Brute force uses nested loops

### Keywords That Scream HASH TABLE

- unique
- duplicate
- frequency
- count
- lookup
- map
- index by value

If brute force is O(n²), hashing often gives O(n).

---

## 3. Core Hash Table Patterns (CTCI Must-Know)

### 3.1 Existence / Seen-Before Pattern

**Use when:**

- Detect duplicates
- Check if something appeared earlier

**Mental model:**

```
if seen[x] → done
else seen[x] = true
```

Examples:

- Contains Duplicate
- First recurring character

---

### 3.2 Frequency Counting Pattern

**Use when:**

- Counting occurrences
- Comparing distributions

Examples:

- Anagrams
- Majority element
- Character counts

**Key insight:**
If order does NOT matter → count frequencies.

---

### 3.3 Complement Lookup Pattern

**Use when:**

- Pair problems (Two Sum)
- Difference / target matching

**Mental model:**

```
for x in array:
  if target - x exists → answer
  store x
```

Time complexity drops from O(n²) to O(n).

---

### 3.4 Index Mapping Pattern

**Use when:**

- You need original indices
- Value → position mapping

Examples:

- Two Sum (index return)
- First unique element

---

## 4. Hash Tables + Arrays / Strings (CTCI Core)

Hash tables almost always appear **with arrays or strings**.

Examples:

- Array + hash map → Two Sum
- String + hash map → Anagram
- Sliding window + hash map → Substring problems

If array/string feels hard → add hashing.

---

## 5. Space-Time Tradeoff (You MUST Explain This)

Every hash table solution:

- Uses extra memory
- Gains speed

Interviewers expect you to say:

> “I’m trading O(n) space to get O(n) time.”

This shows maturity.

---

## 6. Common Hash Table Pitfalls

❌ Forgetting to initialize counts  
❌ Off-by-one frequency errors  
❌ Using hash table when sorting is simpler  
❌ Not handling collisions conceptually  
❌ Ignoring worst-case O(n)

Worst-case exists, but average-case matters.

---

## 7. Classic CTCI Hash Table Problems

### Easy (Must Solve)

- Two Sum
- Contains Duplicate
- Valid Anagram
- First Unique Character

### Medium (High Value)

- Group Anagrams
- Longest Substring Without Repeating Characters
- Subarray Sum Equals K
- Top K Frequent Elements

---

## 8. How to Practice Hash Tables Properly

For each problem:

1. Write brute force
2. Identify repeated checks
3. Replace checks with map lookup
4. Explain space-time tradeoff

Practice saying it **out loud**.

---

## 9. How to Explain Hash Table Solutions in Interviews

Use this structure:

1. Brute force approach
2. Why it’s slow
3. Introduce hash table
4. Explain what keys/values store
5. Walk through example
6. State time & space complexity

Clear explanation > fancy code.

---

## 10. Mental Checklist Before Coding

- What should be the key?
- What should be the value?
- Do I need counts or just existence?
- Do I need original indices?
- Can I exit early?

---

## 11. Hash Table Variants to Know

- Hash Set → only existence
- Hash Map → key-value
- Counter / Frequency Map

Use the simplest one possible.

---

## 12. Final Rule (CTCI Gold)

If a problem asks:

- “Have I seen this before?”
- “How many times?”
- “Does a complement exist?”

👉 You almost certainly need a hash table.

Master this, and interviews feel **much easier**.
