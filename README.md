# 🎓 GRADE CONVERTER

## 🧭 Overview

A lightweight, customizable **JavaScript tool** that converts numerical scores (e.g., 10, 60) into letter grades (e.g., A, B) based on a predefined grading scale. Perfect for students, educators, and developers who need a fast and flexible way to map scores to academic grades.

Includes the core grading **algorithm** along with the **thought process** behind its logic and structure.

---

## 🎯 Project Goals

- **Score-to-Grade Mapping**: Translate numeric scores into standard letter grades (A–F).  
- **Custom Grading Scales**: Easily tweak ranges for grade boundaries.  
- **Clear Logic**: Provide a readable, maintainable implementation.  
- **Educational Value**: Include explanation of the algorithm for learning/reference.  
- **Lightweight Utility**: No dependencies, runs in any browser or Node.js environment.

---

## 🛠️ Tech Stack & Languages

![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge)

---

## 🚀 Usage

You can run the script in a browser or with Node.js:

### Option A: Run in Browser

```html
<script src="gradeConverter.js"></script>
<script>
  const grade = convertToGrade(85);
  console.log(`Grade: ${grade}`);
</script>
