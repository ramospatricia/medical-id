## Medical ID (Proposet API)

### `GET`

- `/api/user/:id`: Retrieve user's personal information by `id`

### `POST`

- `/api/user`: Register new user
  - Body:
    - `email: String` (required): The user's email address
    - `firstName: String` (required): The user's first name
    - `lastName: String` (required): The user's last name
    - `genderId: String` (required): The user's gender
    - `address: String` (required): The user's address
    - `insuranceId: String` (required): The user's insurance name
    - `insuranceNumber: Number` (required): The user's insurance number

### `PUT`

- `/api/user/:id`: Update user's information by `id`
  - Body:
    - `email: String` (optional): The user's email address
    - `address: String` (optional): The user's address

### `DELETE`
  
- `/api/user/:id`: Delete user's account by `id`