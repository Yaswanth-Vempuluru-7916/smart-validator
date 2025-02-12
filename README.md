# Smart Validator

Smart Validator is a reusable and customizable Form Validator Widget built with React and TypeScript. This widget provides comprehensive form validation, error handling, micro-animations, and customizable styles using Tailwind CSS. It is designed to be easy to import into other React applications.

## Table of Contents

- [Smart Validator](#smart-validator)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Components](#components)
    - [Input](#input)
    - [Email](#email)
    - [Password](#password)
    - [Select](#select)
    - [TextArea](#textarea)
    - [Checkbox](#checkbox)
    - [Radio](#radio)
    - [Range](#range)
    - [Button](#button)
    - [Form](#form)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Example](#example)
  - [Customization](#customization)
    - [Example of Custom Styles](#example-of-custom-styles)
  - [Contributing](#contributing)

## Features

- **Comprehensive Form Validation**: Each input component performs its own validation, providing real-time feedback to users.
- **Error Handling**: Displays meaningful error messages based on user input, ensuring a smooth user experience.
- **Micro-Animations**: Subtle animations enhance the user experience during interactions.
- **Customizable Styles**: Built with Tailwind CSS, allowing easy customization to fit your application's theme.
- **Dark Theme Support**: All components are styled with dark-themed colors, providing a modern look and feel.
- **Debouncing and Throttling**: Implements debouncing for input validation to improve performance and user experience.
- **Reusable Components**: Each form component is designed to be reusable across different forms, promoting code reusability and maintainability.

## Components

### Input

- A basic text input component with customizable validation.
- Supports real-time error display.

### Email

- Extends the Input component with email-specific validation.
- Validates email format in real-time, ensuring:
  - Contains `@` symbol.
  - Has a username before `@`.
  - Has a domain after `@`.
  - Domain contains a `.` (dot).
  - Domain extension is at least 2 characters long.

### Password

- A password input component with visibility toggle.
- Validates password strength based on custom rules, such as length and character variety.

### Select

- A dropdown select component for choosing options.
- Supports error handling and customizable options.

### TextArea

- A multi-line text input component for longer text inputs.
- Supports validation and error handling.

### Checkbox

- A checkbox component for boolean inputs.
- Displays error messages if required.

### Radio

- A radio button group for selecting one option from multiple choices.
- Supports error handling and customizable options.

### Range

- A range input component for selecting numeric values.
- Displays the current value and supports error handling.

### Button

- A customizable button component with different styles (primary, secondary, danger).
- Supports loading states and click events.

### Form

- A wrapper component that handles form submission and validation.
- Displays error messages for invalid inputs and manages form state.

## Installation

To install the Smart Validator package, use npm or yarn:

```bash
npm install smart-validator
```

or

```bash
yarn add smart-validator
```

## Usage

To use the Smart Validator in your React application, follow these steps:

1. Import the desired components into your form.
2. Use the components to create your form and handle validation as needed.

## Example

Here’s a simple example of how to use the Smart Validator components in a form:

```tsx
import React from 'react';
import { Form, Input, Email, Password, Button } from 'smart-validator';

const MyForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(Object.fromEntries(formData));
    // Handle form submission logic here
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6 text-white">Sample Form</h2>
      <Input label="Name" name="name" id="name" required />
      <Email label="Email" name="email" id="email" required />
      <Password label="Password" name="password" id="password" required />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default MyForm;
```

## Customization

You can easily customize the styles of the components using Tailwind CSS classes. Each component accepts standard HTML attributes, allowing you to apply additional styles as needed.

### Example of Custom Styles

```tsx
<Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
  Submit
</Button>
```

## Contributing

Contributions are welcome! If you would like to contribute to the Smart Validator, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.


