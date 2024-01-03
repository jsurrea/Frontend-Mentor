# Eco Store Website

This is an educational project showcasing a responsive website for an eco-friendly store. The project is built using HTML and SCSS (Sass). Below is a detailed README to understand the structure, styling, and features of the code.

## Demo

### Mobile

### Tablet

### Desktop

## Project Structure

The project is organized into three main files:

- **index.html:** Contains the HTML structure of the website.
- **main.scss:** Holds the SCSS code for styling the website.
- **assets:** Directory containing images and SVG icons.

## SCSS Features

### Variables

Variables are used for color and font values. For example:

```scss
$dark-green: #7C6A0A;
```

### Mixins

Mixins are used for defining reusable blocks of styles for different screen sizes.

```scss
@mixin desktop {
    @media screen and (min-width: 900px) {
        @content;
    }
}
```

### Responsive Design

Media queries are used to apply different styles for various screen sizes. Three main breakpoints are defined for mobile, tablet, and desktop devices.

```scss
@include mobile() {
    // Mobile styles
}

@include tablet() {
    // Tablet styles
}

@include desktop() {
    // Desktop styles
}
```

### Nesting

SCSS allows nesting of styles for better organization and readability.

```scss
nav {
    display: flex;
    // Other styles

    p {
        // Styles for paragraphs inside nav
    }

    .icons {
        // Styles for icons container
    }
}
```

## Usage

To use or contribute to this project:

1. Clone the repository.
2. Open `index.html` in a web browser to view the website.

Feel free to modify and extend the code as needed.

## Credits

Icons and images used in the project are credited to their respective sources.

## License

This project is licensed under the MIT License.

---

Feel free to explore the code and use it as a learning resource for HTML, SCSS, and responsive web design. If you have any questions or suggestions, please feel free to reach out. Happy coding!
