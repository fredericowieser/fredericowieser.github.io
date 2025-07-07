# Data Structures and Algorithms


For the sake of this guide to the knowledge of data structures and algortihms (DSA) needed to do well in interview scenarios or genearally for having strong fundementats in this core Computer Science subject we will be using a mix of C++ and Python throughout this interview. The idea is to convey the deeper workings of some of these topics with C++ and then present a compressed version in Python.

Generally this guide preassumes a knowledge of Calculus and some Maths.

Here are some example outlines of a Python and C++ projects:

```python

```

```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {
    // solution comes here
}
```

Generally the main idea behind being good at DSA is to have practical knowedge and good abilities to implement a program practically and efficiently as well as knowing the solution theoretically and from an abstract place.

I want to also note that alot of this post has been inspired and taken some parts from the following sources:

- Competitive Programmer’s Handbook, Antti Laaksonen, Draft July 3, 2018:
  - https://cses.fi/book/book.pdf
- [Data structures playlist - YouTube](https://www.youtube.com/playlist?list=PLDV1Zeh2NRsB6SWUrDFW2RmDotAfPbeHu)
- 

The way this post adds to that body of my knowledge is try and make an all encompassing post, building on the sources, that explains a lot of the concepts people need to know for interviews for jobs where you are expected to program.

Cracking The Coding Interview Key Sections

- Introduction Parts I-VI should be revisisted before interviews.

- VII: Technical Questions gives a rough outline of how to generally solve all the prolems that you come across

- Interview Questions
  
  - Ch 1-4, on DS is important
  
  - Ch 5-6, not really as imporant
  
  - Ch 8, Recusion & DP important
  
  - Ch 7 & 9 & 11, skim
  
  - Ch 10, sorting important

- Knowledge Based, just skim

- Ch 16-17, Additional Review Problems v. good

- Advanced Topics, all the following are fairly important
  
  - Useful Math
  
  - Topological Sort
  
  - Dijkstra's Algorithm

## Fundementals

### Process of Problem Solving

**Process for problem solving I use in Leetcode**

* Read the problem twice to understand it – (ask clarifying questions)
* Try think basically of different ways to solve problem
* Think end-to-end (E2E) of the best solutions based on complexity
* Write the Algorithm from patterns in drawing
* Code it out
* Try and Improve it once you think you’re finished
* Go through other solutions (even if you answered correctly).













## Programming Basics

### Python

### C++

**Basics**

Compile:

```bash
g++ -std=c++11 -O2 -Wall test.cpp -o test
```

Creating a 64-Bit Integer:

```cpp
long long x = 123456789123456789LL;
```

Creating a 64-Bit Floating Point:

```cpp
double
```

Creating a ???-Bit Floating Point:

```cpp
long double
```

Comparing Floating Numbers:

```cpp
if (abs(a-b) < 1e-9) {
    // a and b are equal
}
```

Give a shorter name to a datatype:

```cpp
typedef long long ll;
typedef vector<int> vi;
typedef pair<int,int> pi;
```

**Macros**

P9 COMPETITIVE PORGRRAMMING HANDBOOK

## Time Complexity and BigO

Big O notation gives an upper bound of the complexity in the worst case scenario, helping us to quantify performance as the input size becomes arbitrarily large.

| Name              | Symbol          |
| ----------------- | --------------- |
| Constant Time     | $O(1)$          |
| Logarithmic Time  | $O(log(n))$     |
| Linear Time       | $O(n)$          |
| Linearithmic Time | $O(n log(n))$   |
| Quadratic Time    | $O(n^2)$        |
| Cubic Time        | $O(n^3)$        |
| Exponential Time  | $O(x^n), x > 1$ |
| Factorial Time    | $O(n!)$         |

BINARY SEARCH BIG O SOLUTION EXAMPLE AND OTHERS

P20 COMPETITIVE PORGRRAMMING HANDBOOK
P21 COMPETITIVE PORGRRAMMING HANDBOOK

## Data Structures (DS)

A data strucutre is a way of organising data so that it can be used effectively.

Some reasons why we should use them:

- Essential ingredients in powerful algorithms

- Help to manage and organise data

- Can make your code "cleaner"

<u>***Abstract data types (ADT)***</u>

An ADT is an abstraction of a DS which provides only the interface to which a DS must adhere to. Their is nothing to specify which language and how it should be implemented.

Examples:

| ADT   | DS                                                            |
| ----- | ------------------------------------------------------------- |
| List  | Dynamic Array, Linked List                                    |
| Queue | Linked List based Queue, Array based Queue, Stack Based Queue |
| Map   | Tree Map, Hash Map / Hash Table                               |

### Strings

### Static and Dynamic Arrays

A static array is a fixed sized container with n elements indexable from the range $i = [0, n-1]$, where the index is some integer.

A dynamic array builds on the idea of a static arry by allowing the array to grow and shrink in size. Dynamic arrays are implemented ussualy by usssing static arrays.

IMPLEMENT DYNAMIC ARRAY WITH C++

| Function  | Static Array | Dynamic Array | Notes                                                                             |
| --------- | ------------ | ------------- | --------------------------------------------------------------------------------- |
| Access    | $O(1)$       | $O(1)$        | Due to arrays being indexable.                                                    |
| Search    | $O(n)$       | $O(n)$        | Potentially have to traverse all the elements in the array.                       |
| Insertion | N/A          | $O(n)$        | We potentially to shift all the elements over and potentially copy over the data. |
| Appending | N/A          | $O(1)$        | NOT SURE?                                                                         |
| Deletion  | N/A          | $O(n)$        | Same as Insertion.                                                                |

### Linked Lists

A linked list is a sequential list of nodes that holds data which point to the other nodes also contatining data.

MERMAID DIAGRAM

Uses of Linked Lists:

- Implementation of a List / Queue / Stack / Hash Map ...

- Making Circular Lists

- Modelling Real World Objects (Trains)

Terminology:

- **Head**: The first node in a linked list

- **Tail**: The last node in a linked list

- **Pointer**: Reference to another node

- **Node**: An object containing data and pointer(s)

Singly linked lists only hold a reference to the next node.

Doubly linked lists at any node hold a reference to the next and previous node.

In implementations we ussually in all linked lists also maintain a reference to the head and tail of the linked list.

MERMAID DIAGRAM

### Sets

### Hash Maps

### Bitset

### Deque

### Stack

### Queue

## Algorithms

> **The basic problem of sorting** : "Given an array that contains $n$ elements, your task is to sort the elements in increasing order."

### Maximum Subarray Sum

### Bubble Sort

### Counting Sort

### Binary Search

### 

## Classic Problems in DSA

P21 COMPETITIVE PORGRRAMMING HANDBOOK

### Solution 1 $O(n^3)$

