# services-authorization

Authorization service -- in charge of managing user sessions and managing user roles (RBAC all ready to go!).

The service uses a key-value store like Redis to quickly do its work, much better than read/write operations on the database.

One top-level key determines if user is authenticated or not, another determines ROLE. We can use these top level keys in any combination of ways.

Needs auth at all: session key.
Needs specific role to access: session key and role key.
