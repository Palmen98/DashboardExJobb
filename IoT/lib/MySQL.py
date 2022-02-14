import mysql.connector
import Keys as keys

db=mysql.connector.connect(host = 'localhost',
    user = keys.MYSQL_USER,
    passwd = keys.MYSQL_PASSWORD,
    database = keys.MYSQL_DATABASE_NAME
)


mycursor = db.cursor()
# mycursor.execute("CREATE TABLE Person (name VARCHAR(50), age smallint UNSIGNED, personID INT PRIMARY KEY AUTO_INCREMENT)")

# mycursor.execute('INSERT INTO Person (name,age) VALUES (%s,%s)', ('Simon', 23))
# db.commit()

mycursor.execute('SELECT * FROM Person')


for x in mycursor:
    print(x)
