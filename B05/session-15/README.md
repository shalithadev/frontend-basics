# React.js and Next.js Mastering Course

## Session 15

### 1. Update Movie Dialog & Form (UI)

- Display the update dialog using `requestAnimationFrame` to ensure it opens after state changes.
- Use controlled input fields for form data.
- Pre-fill the form with the selected movie's existing data.
- Manage form state with the `useState` hook.
- Implement a `toggleDialog` function to open and close the dialog.

### 2. Update Movie in MongoDB with Server Actions

- Use Next.js server actions to securely update movie records in MongoDB when the user saves changes.
- Pass the MongoDB `ObjectId` as the record identifier.

### 3. Delete Movie Confirmation Dialog (UI)

- Integrate the shadcn UI library's dialog component for delete confirmation.

### 4. Delete Movie from MongoDB with Server Actions

- Use server actions to securely delete movie records from MongoDB.
- Refresh the UI after deletion using `router.refresh()`.

### 5. Passing Props to Child Components

- Pass an `onClose` prop to the `<UpdateMovieForm />` component, e.g., `<UpdateMovieForm onClose={setShowAddMovie} />`.
- This enables the child component to notify the parent when to close the dialog, improving component communication and state management.

### 6. Movie Table: Status Badge

- Use the shadcn badge component to display movie status.
- Create a function that returns badge color classes based on the status (`published`, `draft`, `archived`) using a `switch` statement.
- Apply the badge to each movie row in the table.
