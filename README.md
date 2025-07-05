# Book Management System

A modern and responsive web application for managing a book library. Users can browse, add, edit, and delete books, as well as manage borrowing records.

## Live Demo

[Link to live demo]() <!-- Add your live demo link here -->

## Features

- **Book Management:**
  - View a list of all books with details in a table format (Title, Author, Genre, ISBN, Copies, Availability, and Actions).
  - Add new books to the library with a dedicated form.
  - Edit existing book information.
  - Delete books from the library with a confirmation dialog.
- **Borrowing System:**
  - Borrow books and view a summary of borrowed items.
  - The borrow quantity cannot exceed the available copies.
- **Responsive Design:**
  - A clean and user-friendly interface that works on all devices.
- **Dark/Light Mode:**
  - Switch between dark and light themes for comfortable viewing.

## Bonus Features

- **Optimistic UI Updates:** The UI updates instantly after performing actions like adding, editing, or deleting books.
- **Toast Notifications:** Users receive toast notifications for actions like successful book creation or borrowing.
- **Responsive Layout:** The application is fully responsive and works seamlessly on mobile, tablet, and desktop devices.
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