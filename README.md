# Faulty Calculator

A fun JavaScript calculator that intentionally performs incorrect operations when calculating expressions. Instead of following normal mathematical rules, the calculator swaps operators to produce unexpected results.

## Features

* Basic calculator interface
* Supports addition (+), subtraction (-), multiplication (*), division (/), and exponent (^)
* Faulty calculation logic that changes operators before evaluation
* AC (All Clear) button to reset calculations
* Simple and responsive user interface

## Faulty Logic

The calculator intentionally modifies operators before evaluation:

| Original Operator | Faulty Operator     |
| ----------------- | ------------------- |
| +                 | -                   |
| -                 | /                   |
| *                 | +                   |
| /                 | ** (Exponentiation) |

### Examples

| Input  | Normal Result | Faulty Result |
| ------ | ------------- | ------------- |
| 5 + 3  | 8             | 2             |
| 10 - 2 | 8             | 5             |
| 5 * 3  | 15            | 8             |
| 10 / 2 | 5             | 100           |

## Technologies Used

* HTML
* CSS
* JavaScript

## How to Run

1. Clone or download the project.
2. Open the project folder.
3. Launch `index.html` in your browser.
4. Start calculating and enjoy the intentionally wrong results!

## Learning Objectives

This project was created to practice:

* DOM Manipulation
* Event Handling
* JavaScript String Methods
* Calculator Logic
* Conditional Statements
* User Interface Development

## Author

Mariyam Imran
