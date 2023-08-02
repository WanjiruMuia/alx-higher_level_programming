<!DOCTYPE html>
<html lang="en">
<head>
    <title>Holberton School</title>
    <link rel="stylesheet" href="styles/global.css" />
    <!-- Include jQuery from a CDN -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <div id="update_header">
        Click me to update the header text
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
        // Use the jQuery API to handle the click event on the DIV#update_header
        $(document).ready(function () {
            $('#update_header').click(function () {
                // Update the text of the <header> element to "New Header!!!"
                $('header').text('New Header!!!');
            });
        });
    </script>
</body>
</html>

