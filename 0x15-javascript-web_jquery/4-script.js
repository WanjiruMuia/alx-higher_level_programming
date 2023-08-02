<!DOCTYPE html>
<html lang="en">
<head>
    <title>Holberton School</title>
    <link rel="stylesheet" href="styles/global.css" />
    <!-- Include jQuery from a CDN -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        /* Define the CSS classes for red and green text color */
        .red {
            color: #FF0000;
        }
        .green {
            color: #00FF00;
        }
    </style>
</head>
<body>
    <div id="toggle_header">
        Click me to toggle the header text color between red and green
    </div>
    <header class="red"> 
        First HTML page
    </header>
    <section>
        <img src="logo.jpg" alt="" />
        <br />
        <ul>
            <li>Home</li>
            <li>Admission</li>
            <li>Login</li>
        </ul>
    </section>
    <footer>
        Holberton School - 2017
    </footer>

    <script>
        // Use the jQuery API to handle the click event on the DIV#toggle_header
        $(document).ready(function () {
            $('#toggle_header').click(function () {
                $('header').toggleClass('red green');
            });
        });
    </script>
</body>
</html>

