# React.js and Next.js Mastering Course

## Session 14

### 1. Movies Table - UI

- Use the `table` component from `shadcn/ui` to display movie data in a structured format.
- Add interactive dropdown menus to each row using the `dropdown-menu` component from `shadcn/ui` for actions like edit or delete.

### 2. Fetch Movies Data from MongoDB with Server Actions

- Implement server actions to securely retrieve movie data from MongoDB and display it in the table.
- Ensure efficient data fetching and error handling for a seamless user experience.

### 3. Enhance the "Create Movie" Form: Years Dropdown

- Build a reusable utility function to generate an array of the last 100 years.
- Use `Array.from` in combination with `new Date().getFullYear()` to dynamically create the years array.
- Integrate this array into the dropdown menu for selecting the movie's release year.

### 4. Reset the "Create Movie" Form on Cancel or Success

- Implement state management to reset the year and genres selections when the form is cancelled or successfully submitted.
- Convert the year and genres inputs into controlled components using the `onValueChange` handler for better state synchronization.

### 5. Passing Props to Child Components

- Pass the `onClose` prop to the `<AddMovieForm />` component, for example: `<AddMovieForm onClose={setShowAddMovie} />`.
- This allows the child component to notify the parent when it should be closed, enabling better component communication and state management.
