#_*_ encoding: utf-8 _*_

import getpass 
import psycopg2 
import sys
#DB server as first argument
dbhost = sys.argv[1]
#Connection string
conn_string = """ 
	         host='{}'
 	         dbname='db_sql_injection'
	         user='u_sql_injection'
	         password='secret' 
	         port='5432' 
             """.format (dbhost) 
try:
#Connection
    conn = psycopg2.connect (conn_string)
#Cursor creation to execute SQL commands
    cursor = conn.cursor ()
#User input
    user = input ('User: ')
#Password input
    password = getpass.getpass ('Password: ')
#SQL string
    sql = """ 
	SELECT TRUE FROM tb_user WHERE username = '{}'
	 AND password = '{}'; 
	""".format (user, password)
#Print the sql string after user and password input
    print ('{}n'.format (sql))
#Execute the SQL string in database
    cursor.execute (sql)
#The result of the string SQL execution
    res = cursor.fetchone ()
#User login validation
    if res:
             print ('nAcessed!')
    else  :
             print ('nError: Invalid user and password combination!') 
             sys.exit (1) 
except psycopg2.Error as e:
                            print ('nAn error has occurred!n{}'.format (e))
#Close the database connection
                            conn.close ()
