export default function loadBackgroudImages() {
    let backgroudImages = document.querySelectorAll("[data-background]");

    if (backgroudImages.length > 0) {
      backgroudImages.forEach(element => {
        let image = element.dataset.background;
        // Sanitize: only allow relative paths and https URLs, block javascript: and data: URIs
        if (image && /^(\/|https:\/\/)/.test(image) && !/[;'"()\\]/.test(image)) {
          element.style.backgroundImage = `url('${image}')`;
        }
      })
    }
  }