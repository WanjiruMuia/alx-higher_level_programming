<!DOCTYPE html>
<html lang="en">
<head>
    <title>Holberton School</title>
    <link rel="stylesheet" href="styles/global.css" />
    <!-- Include jQuery from a CDN -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        /* Define the CSS class for red text color */
        .red {
            color: #FF0000;
        }
    </style>
</head>
<body>
    <div id="red_header">
        Click me to change the header text color to red
    </div>
    <header> 
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
        // Use the jQuery API to handle the click event on the DIV#red_header
        $(document).ready(function () {
            $('#red_header').click(function () {
                $('header').addClass('red');
            });
        });
    </script>
</body>
</html>

