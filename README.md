# Book Management System

A modern and responsive web application for managing a book library. Users can browse, add, edit, and delete books, as well as manage borrowing records. This project is built with React, Redux Toolkit, RTK Query, and TypeScript, and it interacts with a RESTful API.

## Live Demo

[https://assignment4frontend.vercel.app/]() https://assignment4frontend.vercel.app/

## Features

- **Book Management:**
  - **View All Books:** A comprehensive table displays all books with columns for Title, Author, Genre, ISBN, Copies, and Availability.
  - **Add New Book:** A modal form allows users to add new books with fields for Title, Author, Genre, ISBN, Description, and Copies.
  - **Edit Book:** Edit existing book information through a modal form, with changes reflected instantly.
  - **Delete Book:** A confirmation dialog ensures that books are not accidentally deleted.
  - **Book Details:** Clicking on a book row in the table opens a modal with detailed information about the book.
- **Borrowing System:**
  - **Borrow Book:** A modal form allows users to borrow a book by specifying the quantity and due date.
  - **Borrow Summary:** A dedicated page displays a summary of all borrowed books, including the book title, ISBN, and total quantity borrowed.
- **User Experience:**
  - **Responsive Design:** The application is fully responsive and works seamlessly on mobile, tablet, and desktop devices.
  - **Dark/Light Mode:** A theme toggle allows users to switch between dark and light modes for comfortable viewing.
  - **Toast Notifications:** Users receive toast notifications for actions like successful book creation, updates, deletion, and borrowing.
  - **Type-Safe Forms:** Forms are built with React Hook Form and Zod for type safety and validation.

## Tech Stack

- **Frontend:**
  - [React](https://reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Vite](https://vitejs.dev/)
- **State Management:**
  - [Redux Toolkit](https://redux-toolkit.js.org/)
  - [RTK Query](https://redux-toolkit.js.org/rtk-query/)
- **Routing:**
  - [React Router](https://reactrouter.com/)
- **Styling:**
  - [Tailwind CSS](https://tailwindcss.com/)
  - [shadcn/ui](https://ui.shadcn.com/)
- **Forms:**
  - [React Hook Form](https://react-hook-form.com/)
  - [Zod](https://zod.dev/)
- **Linting:**
  - [ESLint](https://eslint.org/)
- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express.js](https://expressjs.com/)
  - [MongoDB](https://www.mongodb.com/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/assignment_4_frontend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd assignment_4_frontend
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

To run the application in development mode, use the following command:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Building for Production

To create a production build, run:

```bash
npm run build
```

This will create a `dist` folder with the optimized and minified files.

## Project Structure

```
/src
├── assets/         # Static assets
├── components/     # Reusable UI components
│   ├── layout/     # Layout components (Navbar, Footer)
│   ├── module/     # Components specific to features (books, borrow)
│   └── ui/         # Base UI components from shadcn/ui
├── lib/            # Utility functions
├── pages/          # Application pages
├── redux/          # Redux store, slices, and API configuration
├── routes/         # Routing configuration
└── types.ts        # TypeScript type definitions
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
