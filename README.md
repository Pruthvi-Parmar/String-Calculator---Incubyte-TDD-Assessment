
# 📦 String Calculator - Incubyte TDD Assessment

This project implements the classic **String Calculator Kata** using **Test-Driven Development (TDD)** in JavaScript. It was developed as part of the Incubyte recruitment process to demonstrate clean, readable, and testable code following software craftsmanship principles.

---

## ⚠️ Important: ES6 Modules & Jest

> 🟢 This project uses **ES6 Modules** (`type: "module"` in `package.json`).  
> 🔧 Therefore, Jest runs with **experimental flags internally** to support ES6 modules.  
>  
> **You don't need to manually configure these flags if you're using the provided setup**, but keep this in mind if you see experimental warnings from Node during test runs.  
>  
> 🟠 If you rewrite the project using **CommonJS** syntax (`require`, `module.exports`) and remove `"type": "module"` from `package.json`, you can run Jest directly without any experimental flag requirements.  

---

## 🚀 Features

✅ Returns 0 for an empty string  
✅ Handles single and multiple numbers separated by commas or newlines  
✅ Supports custom delimiters defined in the format: `//<delimiter>\n`  
✅ Supports delimiters of any length using square brackets: `//[***]\n`  
✅ Supports multiple delimiters, including those with different lengths: `//[*][%%]\n`  
✅ Ignores numbers greater than 1000  
✅ Throws an exception for negative numbers, listing all negative numbers in the error message  

---

## 🛠️ Tech Stack

- **Language:** JavaScript (ES Module syntax)  
- **Testing Framework:** Jest  

---

## 🗂️ Project Structure

```
├── calculator.js          // String Calculator implementation
├── calculator.test.js     // Jest test cases for all features
├── package.json           // Project configuration
└── README.md              // Project documentation
```

---

## 🧑‍💻 How to Run

1. **Install Dependencies**

```bash
npm install
```

2. **Run Tests**

```bash
npm test
```

---


## ✅ Example Usages

```js
import { add } from './calculator.js';

add("");                       // returns 0
add("1");                      // returns 1
add("1,2");                    // returns 3
add("1\n2,3");                // returns 6
add("//;\n1;2");              // returns 3
add("//[***]\n1***2***3");    // returns 6
add("//[*][%]\n1*2%3");       // returns 6
add("//[***][%%]\n1***2%%3"); // returns 6
```

If the string contains negative numbers, an error will be thrown listing all negative numbers:

```js
add("1,-2,3,-4");  
// Throws: Error: negative numbers not allowed -2,-4
```

Numbers greater than 1000 are ignored:

```js
add("2,1001");  
// returns 2
```

---

## 📋 Testing Coverage

The project contains comprehensive unit tests covering:

✔ Empty string  
✔ Single number  
✔ Multiple numbers  
✔ Newline as delimiter  
✔ Custom delimiters  
✔ Delimiters of any length  
✔ Multiple delimiters (including multi-character ones)  
✔ Ignoring numbers > 1000  
✔ Negative number handling with detailed error message  

---

## 🏗️ Development Approach

This project strictly followed the **TDD (Test-Driven Development)** process:

1. Write failing test  
2. Write minimum code to pass the test  
3. Refactor while keeping all tests green  
4. Commit after every small, meaningful change  

The commit history clearly reflects the incremental evolution of the solution.

---

## 🤝 Acknowledgements

This project was developed as part of the [Incubyte](https://www.incubyte.co/) Software Craftsmanship recruitment assessment.

---

## 📬 Contact

For any queries, feel free to reach out.
