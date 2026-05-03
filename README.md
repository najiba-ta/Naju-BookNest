Online Book Borrowing Platform
About the Project

This is a modern web application built to digitize the traditional library system. Users can browse books, search by title, filter by category, and borrow books online. The goal of this project is to provide a clean user experience along with secure authentication and smooth performance.

Live Links

Live Site: (Add your live link here)
GitHub Repository: (Add your repository link here)

Features
Authentication
Users can log in using email and password
Google sign-in is available
Proper error handling is implemented
Users are redirected after successful login or logout
User Registration
Users can register using name, email, photo URL, and password
After successful registration, users are redirected to the login page
Home Page
A banner section with a clear call to action
A “Browse Now” button that navigates to the All Books page
A marquee section for announcements
A featured books section showing top books
Additional custom sections for better design
All Books Page
Search functionality based on book title
Category filtering (Story, Tech, Science)
Book cards with image, title, and details button
Book Details Page (Private Route)
Accessible only to logged-in users
Displays book image, title, author, description, and available quantity
Includes a “Borrow This Book” button
Redirects to login page if the user is not authenticated
My Profile (Private Route)
Displays user information such as name, email, and profile image
Users can update their name and profile image
Navbar
Logo that redirects to the home page
Navigation links (Home, All Books, My Profile)
Conditional rendering:
Shows Login button when logged out
Shows user name and Logout button when logged in
Footer
Social media links
Contact section
Technologies Used
Next.js
Tailwind CSS
DaisyUI
BetterAuth
React Hook Form
React Toastify
Data Structure
{
  "id": "number",
  "title": "string",
  "author": "string",
  "description": "string",
  "category": "Story | Tech | Science",
  "available_quantity": "number",
  "image_url": "string"
}
Setup Instructions
Clone the repository
git clone your-repo-link
Install dependencies
npm install
Create a .env.local file and add your environment variables
Run the development server
npm run dev
Notes
The application is fully responsive across devices
Protected routes are implemented
Environment variables are used for secure configuration
No issues occur on page reload
Conclusion

This project demonstrates a complete online book borrowing system with authentication, private routes, and a clean user interface. It focuses on usability, responsiveness, and modern development practices.