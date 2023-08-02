CTYPE html>
<html lang="en">
<head>
    <title>Holberton School</title>
    <link rel="stylesheet" href="styles/global.css" />
    <!-- Include jQuery from a CDN -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <div id="add_item">
        Click me to add a new item to the list
    </div>
    <ul class="my_list">
        <li>Existing Item 1</li>
        <li>Existing Item 2</li>
    </ul>
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
        // Use the jQuery API to handle the click event on the DIV#add_item
        $(document).ready(function () {
            $('#add_item').click(function () {
                // Create a new <li> element with the content "Item"
                const newItem = $('<li>Item</li>');
                
                // Append the new <li> element to UL.my_list
                $('ul.my_list').append(newItem);
            });
        });
    </script>
</body>
</html>


