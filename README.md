# Getting Started with Create React App

- The app is a Task system .
- It consists of two components: FormInput and TaskList.
- The FormInput component renders a form with input fields .
- Users can enter a new task and status
- Upon clicking the Add button, the addNewItem function is triggered.
- The input fields are validated to ensure they are not empty.
  If the fields are valid, a new item object with a unique ID, task desc and status is created.
  The new item is added to the task array, and the form inputs are cleared.
  The TaskList component renders a list of existing tasks
  The FormInput component communicates with the TaskList component through function props.
  When a new item is added, the onAdd function is called to update the parent component's state.
  The updated list of task and status is displayed in the TaskList component.
  The FormInput component also receives a notify function prop to display notifications or error messages to the user.
