# Eco Store Website

This is an educational project showcasing a responsive website for an eco-friendly store. The project is built using HTML and SCSS (Sass). Below is a detailed README to understand the structure, styling, and features of the code.

## Design

### Mobile

![image](https://github.com/jsurrea/Frontend-Mentor/assets/68788933/d3aea796-aedc-49cf-82a5-68f598cde7e2)
![image](https://github.com/jsurrea/Frontend-Mentor/assets/68788933/bab71bbd-e6c1-49d4-9bd1-790f3ac33194)
![image](https://github.com/jsurrea/Frontend-Mentor/assets/68788933/81f6956e-b23b-414a-86f9-b613226d5150)
![image](https://github.com/jsurrea/Frontend-Mentor/assets/68788933/e5004be4-190c-424a-a26b-1e3bb5058e45)

### Tablet

![image](https://github.com/jsurrea/Frontend-Mentor/assets/68788933/5ddb7bb9-0165-45af-951b-b02ef9fab708)
![image](https://github.com/jsurrea/Frontend-Mentor/assets/68788933/cb5d6881-b131-4e05-b551-b5780c8f0f88)
![image](https://github.com/jsurrea/Frontend-Mentor/assets/68788933/b55563e0-a826-486e-a9ea-cc927eb4f663)
![image](https://github.com/jsurrea/Frontend-Mentor/assets/68788933/1590e86a-1331-4ccd-ae23-7cdb921aa65d)

### Desktop

![image](https://github.com/jsurrea/Frontend-Mentor/assets/68788933/5aff5d07-43a8-4d12-b2a4-db9183482974)
![image](https://github.com/jsurrea/Frontend-Mentor/assets/68788933/da39f64d-2610-4c04-9dfd-9d0110fd0b34)
![image](https://github.com/jsurrea/Frontend-Mentor/assets/68788933/bc747fd0-e4cd-43ed-9c95-4c055b65c6d2)
![image](https://github.com/jsurrea/Frontend-Mentor/assets/68788933/af8dfed6-f96f-4227-bf4c-bc6feac24dc6)

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
