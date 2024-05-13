# Interactive Image Gallery

In this project, you'll create an awesome image gallery website where you can view different pictures in a cool way. You'll be able to click on small preview images (called thumbnails) to see the full-size image in a viewer. You can also move between different images and even see some info about each image.

## Instructions

1. **Make the Thumbnail Images**
   - Open the `app.js` file in your code editor.
   - At the top of the file, you'll see an array called `images`. This array contains information about each image you want to show in your gallery.
   - Scroll down and find the `renderThumbnails` function.
   - Inside this function, you need to create an `<img>` element for each image in the `images` array.
     - First, you'll need to clear the `.gallery-container` element by setting its `innerHTML` to an empty string.
     - Then, use a loop to go through each image object in the `images` array.
     - For each image object, create a new `<img>` element using `document.createElement('img')`.
     - Set the `src` attribute of the `<img>` element to the `src` property of the image object.
     - Set the `alt` attribute of the `<img>` element to the `title` property of the image object.
     - Add the `thumbnail` class to the `<img>` element using `classList.add('thumbnail')`.
     - Add a click event listener to the `<img>` element that calls the `openImageViewer` function and passes in the index (position) of that image in the `images` array.
     - Finally, add the `<img>` element to the `.gallery-container` element using `appendChild()`.

2. **Open the Image Viewer**
   - Find the `openImageViewer` function in `app.js`.
   - Inside this function, you need to update the `src` attribute of the `.viewer-image` element with the `src` property of the clicked image.
     - First, update the `currentIndex` variable to the index (position) of the clicked image.
     - Then, use `document.querySelector('.viewer-image')` to select the `.viewer-image` element.
     - Set the `src` attribute of the `.viewer-image` element to the `src` property of the image object at the `currentIndex` position in the `images` array.
   - Update the `.image-info` element with the `title` and `description` properties of the clicked image.
     - Use `document.querySelector('.image-info')` to select the `.image-info` element.
     - Set the `textContent` of the `.image-info` element to a string that combines the `title` and `description` properties of the image object at the `currentIndex` position in the `images` array.
   - Remove the `hidden` class from the `.image-viewer` element to show the image viewer.
     - Use `document.querySelector('.image-viewer')` to select the `.image-viewer` element.
     - Call the `classList.remove('hidden')` method on the `.image-viewer` element to remove the `hidden` class and make it visible.

3. **Navigate Between Images**
   - Find the `prevImage` and `nextImage` functions in `app.js`.
   - In the `prevImage` function:
     - Update the `currentIndex` variable to the index of the previous image in the `images` array.
     - To handle wrapping around to the last image if you're at the beginning, use this code: `currentIndex = (currentIndex - 1 + images.length) % images.length;`
     - Call the `updateImageViewer` function to update the `.viewer-image` and `.image-info` elements with the new current image data.
   - In the `nextImage` function:
     - Update the `currentIndex` variable to the index of the next image in the `images` array.
     - To handle wrapping around to the first image if you're at the end, use this code: `currentIndex = (currentIndex + 1) % images.length;`
     - Call the `updateImageViewer` function to update the `.viewer-image` and `.image-info` elements with the new current image data.
   - Find the `updateImageViewer` function in `app.js`.
     - This function updates the `.viewer-image` and `.image-info` elements with the current image data based on the `currentIndex`.
     - Inside this function, you'll see code that is similar to the code in the `openImageViewer` function for updating the `.viewer-image` and `.image-info` elements.
   - Add click event listeners to the `.prev-btn` and `.next-btn` elements.
     - Use `document.querySelector('.prev-btn')` to select the `.prev-btn` element.
     - Call the `addEventListener` method on the `.prev-btn` element and pass in the string `'click'` as the first argument and the `prevImage` function as the second argument.
     - Use `document.querySelector('.next-btn')` to select the `.next-btn` element.
     - Call the `addEventListener` method on the `.next-btn` element and pass in the string `'click'` as the first argument and the `nextImage` function as the second argument.

4. **Close the Image Viewer**
   - Find the `closeImageViewer` function in `app.js`.
   - Inside this function, add the `hidden` class to the `.image-viewer` element to hide the image viewer.
     - Use `document.querySelector('.image-viewer')` to select the `.image-viewer` element.
     - Call the `classList.add('hidden')` method on the `.image-viewer` element to add the `hidden` class and make it invisible.
   - Add a click event listener to the `.close-btn` element that calls the `closeImageViewer` function.
     - Use `document.querySelector('.close-btn')` to select the `.close-btn` element.
     - Call the `addEventListener` method on the `.close-btn` element and pass in the string `'click'` as the first argument and the `closeImageViewer` function as the second argument.

5. **Bonus Features**
   - Add keyboard navigation so you can use the left and right arrow keys to move between images, and the escape key to close the viewer.
   - Add cool animations or transitions when switching between images.
   - Implement lazy loading to only load images when they're needed, making your website faster.
   - Connect your gallery to an external image API to fetch and display images dynamically.

This is just the beginning! You can keep adding more awesome features to make your image gallery even more amazing!