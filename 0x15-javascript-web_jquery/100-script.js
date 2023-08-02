<!DOCTYPE html>
<html lang="en">
<head>
    <title>Holberton School</title>
    <link rel="stylesheet" href="styles/global.css" />
    <script>
        // Define the function to update the header text color to red
        function updateHeaderColor() {
            var headerElement = document.querySelector('header');
            if (headerElement) {
                headerElement.style.color = '#FF0000';
            }
        }
    </script>
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
</body>
</html>
