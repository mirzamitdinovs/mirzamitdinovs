# Strings — Deep Interview Guide (CTCI-Oriented)

## 0. Why String Problems Are Tricky

Strings look simple, but they test:

- Precision
- Constraint awareness
- Memory management
- Edge-case discipline

Most string failures happen due to **carelessness**, not lack of knowledge.

---

## 1. Strings = Arrays + Constraints

Conceptually:

- A string is an array of characters

Practically:

- Often immutable
- Encoding matters (ASCII vs Unicode)
- Repeated concatenation is expensive

Interview implication:
Treat strings like arrays, but plan memory carefully.

---

## 2. How to Identify a String Problem

You are dealing with a string problem if:

- Input is text / characters
- Order or pattern matters
- Transformations are required

### Common Keywords

- palindrome
- anagram
- permutation
- substring
- replace
- compress
- encode / decode

---

## 3. Core String Patterns

### 3.1 Frequency Counting (CTCI #1 Pattern)

Used for:

- Anagrams
- Permutations
- Uniqueness checks

**Insight:**
If order does not matter → count characters.

ASCII shortcut:

- Lowercase letters → array of size 26

---

### 3.2 Two Pointers

Used for:

- Palindromes
- Reverse string
- Valid string checks

**Key rule:**
Move pointers only when condition is satisfied.

---

### 3.3 Sliding Window on Strings

Used for:

- Longest substring problems
- Substring without repeats

Maintain:

- Window start
- Window end
- Frequency map

---

### 3.4 String Builder / Buffer

Used for:

- Compression
- Transformation
- Building results

Avoid repeated `+` concatenation — it causes O(n²).

---

### 3.5 Sorting Trick

Used for:

- Anagram grouping
- Canonical comparison

Tradeoff:

- Simpler logic
- O(n log n) time

Always mention tradeoff in interview.

---

## 4. CTCI-Specific String Lifehacks

### Early Exit

Return false immediately when condition fails.

### Normalize Input

- Lowercase
- Remove spaces if irrelevant

### Clarify Constraints

Always ask:

- Case sensitive?
- Unicode?
- Whitespace important?

---

## 5. Classic CTCI String Problems

### Easy

- Is Unique
- Check Permutation
- URLify
- Valid Palindrome

### Medium

- One Away
- String Compression
- Longest Substring Without Repeating Characters
- Group Anagrams

---

## 6. Common Pitfalls

- Ignoring empty strings
- Off-by-one errors
- Forgetting immutability
- Wrong character indexing
- Not clarifying assumptions

---

## 7. How to Think Before Coding

Ask yourself:

1. Does order matter?
2. Can counting solve it?
3. Can I scan once?
4. What is the worst-case input?
5. Can I exit early?

---

## 8. Pattern Mapping Cheat Sheet

| Problem       | Pattern           |
| ------------- | ----------------- |
| Anagram       | Frequency count   |
| Palindrome    | Two pointers      |
| Compression   | Builder           |
| Substring     | Sliding window    |
| Replace chars | In-place / buffer |

---

## 9. How to Practice Strings Effectively

- Speak logic aloud
- Walk through examples
- Manually trace indices
- Focus on correctness first

Speed comes later.

---

## 10. Final Rule (CTCI Gold)

If your string solution:

- feels long
- feels messy
- has many conditionals

You missed a simpler pattern.

Step back. Simplify.
