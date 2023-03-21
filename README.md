#  Angular + NestJS refresh

## 🎯 Objective
Project made to review some concepts studied in one of my previous jobs, before applying to a tech interview.

## ⚙️ Tech Stack
- Docker 23.0.1
- MySQL 8.0
- NestJS 9.3.0
- Angular 15.2.4

## 🗒️ Description
Basic generic marketplace application with stock management.

### Users
- Admin
- Logged user
- Anonymous user

### Use cases
An admin can:
- Create a new product
- Edit an existing product
- Make a product unavailable to the public
- Search product by name or id
- List all products
- List all products unavailable to the public
- List product history
- List product sales

A Logged user can:
- Search product by name or id
- List all products, excluding ones unavailable to the public
- Buy products


## 🖥️ Requirements
### Software
You must have the following programs in your system:
- Bash
- Docker with Compose V2 support

### Running the project
Open bash and run:

```sh
./build.sh && ./run.sh
```