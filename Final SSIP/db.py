import psycopg2

def db_connection():
    conn = psycopg2.connect(
        host='localhost',
        port=5432,
        dbname='flask_final',
        user='postgres',
        password='kangdra'
    )
    return conn