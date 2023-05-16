import mysql.connector

# Connect to the MySQL server
cnx = mysql.connector.connect(
    host='localhost',
    user='your_username',
    password='your_password',
    database='hbtn_0c_0'
)

# Create a cursor object to execute queries
cursor = cnx.cursor()

# Convert the database to UTF8
cursor.execute("ALTER DATABASE hbtn_0c_0 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci")

# Convert the table to UTF8
cursor.execute("ALTER TABLE first_table CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci")

# Convert the field to UTF8
cursor.execute("ALTER TABLE first_table MODIFY COLUMN name VARCHAR(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci")

# Commit the changes
cnx.commit()

# Close the cursor and connection
cursor.close()
cnx.close()

