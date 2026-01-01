# Arrays — Deep Interview Guide (CTCI-Oriented)

## 0. Why Arrays Matter So Much in Interviews

Arrays are the **foundation of almost every other data structure**:

- Strings → arrays of characters
- Matrices → 2D arrays
- Heaps → array-backed
- Hash tables → array + hashing

Interviewers use arrays to test:

- Logical thinking
- Boundary control
- Time/space tradeoffs
- Ability to optimize brute force

If you master arrays, **most other topics become easier**.

---

## 1. Core Properties of Arrays

### Characteristics

- Contiguous memory
- O(1) random access
- O(n) insertion/deletion (except at end)
- Fixed size (conceptually, even if abstracted)

### Interview Implication

Arrays are great when:

- Index-based access is required
- Order matters
- Memory locality helps performance

Arrays are weak when:

- Frequent insertions/deletions in the middle
- Size is highly dynamic

---

## 2. How to Identify an Array Problem

You are dealing with an array problem if:

- Input is a list of values
- Index positions are important
- You are asked to:
  - find pairs, triplets
  - remove or rearrange elements
  - compute ranges
  - scan left-to-right or right-to-left

### Red-Flag Keywords

- subarray
- window
- consecutive
- rotate
- shift
- sorted
- prefix / suffix

---

## 3. Fundamental Array Patterns (CTCI Must-Know)

### 3.1 Brute Force → Optimize Path

Most array problems follow this path:

1. Write a nested-loop solution
2. Identify repeated work
3. Replace loops with pointers / memory

If brute force is O(n²), interviewer expects O(n).

---

### 3.2 Two Pointers

**Use when:**

- Array is sorted
- Comparing elements from both ends
- Searching for pairs

**Examples:**

- Two Sum (sorted)
- Reverse array
- Remove duplicates

**Mental Model:**

```
left ->           <- right
```

Move pointers based on condition, not blindly.

---

### 3.3 Sliding Window

**Use when:**

- Subarray problems
- Longest / shortest / max / min
- Continuous range

**Two Types:**

- Fixed-size window
- Variable-size window

**Key Insight:**
Never recompute the whole window — update incrementally.

---

### 3.4 Prefix / Suffix Computation

Used when:

- Repeated range queries
- Avoid nested loops

**Examples:**

- Product of array except self
- Range sum queries

Compute once, reuse everywhere.

---

### 3.5 Hashing with Arrays

Use auxiliary memory to:

- Track seen values
- Count frequencies
- Eliminate duplicates

Time ↓, Space ↑ — tradeoff is intentional.

---

## 4. In-Place Modification (Interview Favorite)

**Goal:** O(1) extra space

### Typical Strategy

- Maintain a write pointer
- Scan with read pointer
- Overwrite unwanted elements

**Used in:**

- Remove duplicates
- Move zeroes
- Partition arrays

---

## 5. Sorting as a Preprocessing Step

Sorting:

- Simplifies logic
- Enables two pointers
- Costs O(n log n)

Always ask:

> Am I allowed to sort?

---

## 6. Edge Cases You MUST Check

- Empty array
- Single element
- All elements same
- Already sorted / reverse sorted
- Negative numbers

Many candidates fail here, not in logic.

---

## 7. Classic CTCI Array Problems

### Easy

- Two Sum
- Best Time to Buy and Sell Stock
- Move Zeroes
- Remove Duplicates from Sorted Array

### Medium

- Maximum Subarray
- Product of Array Except Self
- Subarray Sum Equals K
- Rotate Array

---

## 8. How to Practice Arrays Correctly

For each problem:

1. Write brute force
2. State time & space complexity
3. Optimize
4. Explain pointer movement verbally

If you can explain it, you understand it.

---

## 9. Interview Checklist (Arrays)

Before coding, ask:

- Is array sorted?
- Can I use two pointers?
- Is sliding window applicable?
- Do I need extra space?
- Can I do this in-place?

---

## 10. Final Rule

Arrays are about **controlled movement and memory awareness**.

If your solution:

- scans once
- uses minimal memory
- handles edges

You’re doing it right.
