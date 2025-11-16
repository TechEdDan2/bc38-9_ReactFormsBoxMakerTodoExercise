# React Forms Box Maker & Todo Exercise

### Table of Contents
- [Overview](#overview)
- [Part 1: Color Box Maker](#part-1-color-box-maker)
- [Part 2: Todo App](#part-2-todo-app)
- [Notes](#notes)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Overview

This project consists of two parts: a **Color Box Maker** and a **Todo App**. Each part demonstrates React fundamentals, including state management, component composition, and form handling.

---

## Part 1: Color Box Maker

### Components:

1. **App**  
   - Renders the `BoxList` component.

2. **BoxList**  
   - Manages the state for all boxes.
   - Renders all `Box` components and the `NewBoxForm` component.

3. **Box**  
   - Displays a `div` with a background color, width, and height based on the props passed to it.
   - Includes a button with the text "X" to remove the box.

4. **NewBoxForm**  
   - Renders a form that allows users to create a new `Box`.
   - Users can specify the `Box`'s width, height, and background color.
   - Clears the input values after the form is submitted.

### Features:
- Users can add new boxes with custom dimensions and background colors.
- Each `Box` has a button to remove it.

---

## Part 2: Todo App

### Components:

1. **App**  
   - Renders the `TodoList` component.

2. **TodoList**  
   - Manages the state for all todos.
   - Renders the `NewTodoForm` component and the list of `Todo` components.

3. **NewTodoForm**  
   - Renders a form with a text input for creating a new todo.
   - Clears the input value after the form is submitted.

4. **Todo**  
   - Displays a `div` with the task of the todo.
   - Includes a button with the text "X" to remove the todo.

### Features:
- Users can add new todos.
- Each `Todo` has a button to remove it.

---

## Notes:
- Both parts of the project demonstrate passing functions as props to manage state updates.
- The "X" button for removing items is included within the `Box` and `Todo` components, as required.

## Author
- Github - [TechEdDan2](https://github.com/TechEdDan2)
- Frontend Mentor - [@TechEdDan2](https://www.frontendmentor.io/profile/TechEdDan2)

## Acknowledgments
The YouTubers and other educational resources I have been learning from include: Coder Coder (Jessica Chan), BringYourOwnLaptop (Daniel Walter Scott), Kevin Powell, Pedro Tech (Vitest tutorial), vairous Udemy courses, Geeks for Geeks, Stack Overflow, and Stony Brook University's Software Engineering Bootcamp (curriculum developed by Colt Steele) 

## License
This project is licensed under the ISC license