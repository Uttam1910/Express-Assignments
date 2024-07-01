# Express Assignments

This project contains multiple assignments implemented using Node.js and Express.

## Assignment 1: HTTP Server using Node.js http module

1. `GET /`: Respond with a welcome message.
2. `GET /men`: Respond with a JSON array containing 10 products for men.
3. `GET /women`: Respond with a JSON array containing 10 products for women.
4. Any other request should respond with a "Page not found" message.

## Assignment 2: Counter Web App using Express

1. `GET /counter`: Respond with the current counter value in JSON format.
2. `POST /increment`: Increment the counter by 1 and respond with the updated counter value in JSON format.
3. `POST /decrement`: Decrement the counter by 1 and respond with the updated counter value in JSON format.

## Assignment 3: Basic Server with Different Routes using Express

1. `GET /`: Respond with a JSON object `{msg: 'I am homepage'}`.
2. `GET /about`: Respond with a JSON object `{msg: 'I am about page'}`.
3. `GET /contact`: Respond with a JSON object `{email: 'support@pwskills.com'}`.

## Assignment 4: Random Number Generator using Express

1. `GET /random`: Respond with a JSON object containing a random number, e.g., `{ random: 8 }`.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Uttam1910/express-assignments.git
    cd express-assignments
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the servers:
    ```bash
    node server.js
    ```

2. Access the endpoints as described above.

## License

This project is licensed under the MIT License.

