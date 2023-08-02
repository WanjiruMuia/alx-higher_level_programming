<!DOCTYPE html>
<html lang="en">
<head>
    <title>Holberton School</title>
    <link rel="stylesheet" href="styles/global.css" />
    <!-- Include jQuery from a CDN -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
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
        // Use the jQuery API to update the text color of the <header> element to red
        $(document).ready(function () {
            $('header').css('color', '#FF0000');
        });
    </script>
</body>
</html>

