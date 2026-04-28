### TL;DR
**SQL** (Structured Query Language) is the standard domain-specific language used to communicate with **Relational Database Management Systems (RDBMS)**. It allows you to create, retrieve, update, and delete data (CRUD) from structured tables that are linked together by defined relationships.

## The Language of Data
SQL is unique because it is a **declarative** language. You don't tell the computer *how* to find the data (like in a loop); you tell it *what* data you want, and the database engine handles the optimization.

### Key Operations
* **Data Definition (DDL):** Used to define the structure (schema), such as `CREATE TABLE` or `ALTER TABLE`.
* **Data Manipulation (DML):** Used for managing the data itself, such as `SELECT`, `INSERT`, `UPDATE`, and `DELETE`.
* **Relationships:** Linking tables using **Primary Keys** (unique identifiers) and **Foreign Keys** (references to other tables).
* **Joins:** The "superpower" of SQL that allows you to combine data from multiple tables based on a related column.

> Think of a database like a **massive library**. 
> * **SQL** is the **Librarian**. 
> * The **Tables** are the **Bookshelves**, organized by category (e.g., "Users", "Orders").
> * A **Row** is a specific **Book** on that shelf.
> * A **Column** is a specific **Detail** about that book (Title, Author, ISBN).
> If you want to find every book written by a specific author in 2024, you don't walk through the aisles yourself; you give the Librarian a specific request (a `SELECT` query), and they bring the books to your desk.

---

### Snippet

```sql
-- Create a simple table
CREATE TABLE artists (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    specialty VARCHAR(50)
);

-- Query with a JOIN to see artist names and their artwork titles
SELECT artists.name, artworks.title
FROM artists
JOIN artworks ON artists.id = artworks.artist_id
WHERE artists.specialty = 'Digital Art'
ORDER BY artworks.created_at DESC;
```
