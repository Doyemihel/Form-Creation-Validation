<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Registration Form</title>
    <!-- Link to the stylesheet for form styling -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- The main registration form -->
    <form id="registration-form">
        <h2>Register</h2>

        <!-- Username input field -->
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>

        <!-- Email input field -->
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <!-- Password input field -->
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>

        <!-- Submit button for the form -->
        <button type="submit">Register</button>

        <!-- Division to display feedback messages (success or error) -->
        <div id="form-feedback"></div>
    </form>

    <!-- Link to the JavaScript file for form validation logic -->
    <script src="script.js"></script>
</body>
</html>
