# Speed Checker

This JavaScript program checks the speed of a car and assigns demerit points based on how much the speed exceeds the limit. If the demerit points exceed 12, it suspends the license.

## How It Works

- The program prompts the user to enter the speed in kilometers per hour (km/h).
- It checks if the entered speed is a valid number.
- If the speed is within the legal limit (70 km/h), it alerts the user that the speed is within the limit.
- If the speed exceeds the limit, it calculates demerit points based on the excess speed (1 point for every 5 km/h over the limit).
- If the demerit points exceed 12, it alerts the user that their license is suspended due to excessive speeding.
- Otherwise, it alerts the user of the number of demerit points accumulated.

## Tools Used

- JavaScript: Programming language used to create the functionality.
- HTML: Used to embed the JavaScript code and run it in a web browser.
- Prompt and Alert: Used for user input and providing feedback in the browser environment.

## Usage

1. Save the JavaScript code in a file named `checkSpeed.js`.
2. Create an HTML file (e.g., `index.html`) and include the JavaScript file with the `script` tag.
3. Open the HTML file using a live server.
4. The browser will display an alert box prompting you to enter the speed. Enter the speed and see the feedback.

## Author

- [Yussuf Hussein](https://github.com/yussufhh/code-challenge/blob/main/speedDetector/README.md)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
