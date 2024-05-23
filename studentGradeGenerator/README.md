# Student Grading System

This program is designed to take a student's marks as input and calculate the corresponding grade based on a predefined grading system. It uses a JavaScript function to determine the grade and provides user input validation to ensure proper functionality.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Function Description](#function-description)
- [Grading System](#grading-system)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

These instructions will help you set up and run the student grading system on your local machine for development and testing purposes.

## Prerequisites

You need a web browser and a basic text editor (like VS Code, Sublime Text, or Notepad++) to edit and view the JavaScript code.

## Installation

No installation is required. Simply copy the code into an HTML file and open it in your web browser.

## Usage

1. Open your text editor.
2. Copy the provided JavaScript code into an HTML file.
3. Ensure the script is correctly placed within the `<script>` tags.
4. Open the HTML file in your web browser.
5. A prompt will appear asking you to enter the student's marks.
6. Enter a number between 0 and 100.
7. The corresponding grade will be displayed in the browser console.

## Function Description

`calculateGrade(marks)`

This function takes a single parameter `marks` (the student's marks) and returns a grade based on the following conditions:

- `A` for marks greater than 79
- `B` for marks between 60 and 79 (inclusive)
- `C` for marks between 49 and 59 (inclusive)
- `D` for marks between 40 and 49 (inclusive)
- `E` for marks below 40

## Error Handling

The program includes user input validation to ensure proper functionality. If the input is not a number between 0 and 100, the user will be prompted to enter a valid number.

## Contributing

If you want to contribute to this project, feel free to fork the repository and submit a pull request. Please ensure your code adheres to the existing coding style and includes appropriate comments and documentation.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
