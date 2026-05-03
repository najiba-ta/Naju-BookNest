# Online Book Borrowing Platform

## About the Project
This is a modern web application designed to digitize the traditional library system. Users can explore a collection of books, search by title, filter by category, and borrow books online. The project focuses on clean UI, smooth user experience, and secure authentication.

---

## Live Links
Live Site: https://naju-book-nest.vercel.app
---
GitHub Repository: https://github.com/najiba-ta/Naju-BookNest
---

## Features

### Authentication
- Login with email and password
- Google sign-in available
- Error handling with toast messages
- Redirect after successful login/logout

### User Registration
- Register using name, email, photo URL, and password
- Redirect to login page after successful registration

### Home Page
- Banner with call-to-action
- “Browse Now” button to navigate to All Books page
- Marquee section
- Featured books section
- Additional custom sections

### All Books Page
- Search books by title
- Filter books by category (Story, Tech, Science)
- Book cards with image, title, and details button

### Book Details Page (Private Route)
- Accessible only for logged-in users
- Displays book image, title, author, description, and available quantity
- “Borrow This Book” button
- Redirects to login page if not authenticated

### My Profile (Private Route)
- Displays user information (name, email, image)
- Update feature for name and profile image

### Navbar
- Logo redirects to Home
- Navigation links (Home, All Books, My Profile)
- Conditional rendering:
  - Logged out → Login button
  - Logged in → User name and Logout button

### Footer
- Social media links
- Contact section

---

## Technologies Used
- Next.js
- Tailwind CSS
- DaisyUI
- BetterAuth
- React Hook Form
- React Toastify

---

## Data Structure
```json
{
  "id": "number",
  "title": "string",
  "author": "string",
  "description": "string",
  "category": "Story | Tech | Science",
  "available_quantity": "number",
  "image_url": "string"
}