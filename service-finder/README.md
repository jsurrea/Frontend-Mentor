# ServiceFinder

ServiceFinder is a web application designed to simplify the process of finding the services you need. Whether you're looking for a plumber, electrician, or any other service provider, ServiceFinder is here to help.

![Captura de Pantalla 2023-11-21 a la(s) 9 52 30 p m](https://github.com/jsurrea/Frontend-Mentor/assets/68788933/d0d21396-7cbb-4c44-93ef-6a75d575c075)

## Getting Started

To get started with ServiceFinder, simply open the `index.html` file in your web browser. The application provides a user-friendly interface where you can search for the services you need.

## Features

- **Search Bar:** Use the search bar to enter keywords related to the service you're looking for.

- **Interactive Interface:** The interface is designed to be intuitive, making it easy for users to navigate and find the information they need.

- **Voice Search:** Click on the microphone icon to start voice search. ServiceFinder will listen to your needs and provide relevant results.

## Styling

ServiceFinder uses a clean and responsive design, making it accessible on various devices. The styles are defined in the `styles.css` file, allowing for easy customization.

### CSS Animations

- **Rotate Animation:**

```css
@keyframes rotate {
    0%, 60% {
        transform: rotate(0deg);
    }
    15% {
        transform: rotate(15deg);
    }
    45% {
        transform: rotate(-15deg);
    }
}

#startRecording:not(.recording) {
    animation: rotate 2s infinite ease-in-out;
}
```

- **Pulse Animation:**

```css
@keyframes pulse {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

#startRecording.recording > div > div:nth-child(2) {
    animation: pulse 1.5s infinite ease-in-out;
}
```


## Technologies Used

- HTML5
- CSS3
- JavaScript

## License

This project is licensed under the MIT License - see the LICENSE file for details.
