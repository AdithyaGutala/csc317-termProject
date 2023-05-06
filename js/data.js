function validateForm() {
    let name = document.forms["Registration"]["uname"].value
    if(name == "") {
        alert("This field is required")
        return false;
    }
    else if(name.length < 3 || name.charAt(0) != name.charAt(0).toUpperCase()) {
        alert("Username must be 3 or more characters and start with a capital letter")
        return false;
    }
    let password = document.forms["Registration"]["pword"].value
    const pattern = /^(?=.*\d)(?=.*[!@#$%^&*+-])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(password == "") {
        alert("This field is required")
        return false;
    }
    else if(!pattern.test(password)) {
        alert("Password does not meet requirements: Must contain at LEAST one upper and lower case letter, as well as a special character.")
        return false;
    }

    let confirm = document.forms["Registration"]["confirm"].value;
    if (confirm != password) {
        alert("Does not mirror original password")
        return false;
    }
    return true;
    }

    


let container = document.querySelector('.gallery');

function showPhotos(photos) {
  for (let i = 0; i < photos.length; i++) {
    const item = document.createElement('div');
    item.classList.add('gallery-item');
    item.innerHTML = `
      <img src="${photos[i].url}" alt="${photos[i].title}" class="gallery-image">
      <div class="gallery-title">${photos[i].title}</div>`;
    container.appendChild(item);
  }
  
  const images = document.querySelectorAll('.gallery-image');
  images.forEach(image => {
    image.addEventListener('click', () => {
      image.style.opacity = '0';
      setTimeout(() => {
        container.removeChild(image.parentNode);
      }, 1000); 
    });
  });

  let count = document.getElementById('photo-count');
  count.textContent = `Photos displayed: ${photos.length}`;
  gallery.appendChild(item);

}


fetch('https://jsonplaceholder.typicode.com/albums/2/photos')
  .then(response => response.json())
  .then(data => {
    const photos = data.slice(0, 12);
    showPhotos(photos);
  })
  .catch(error => console.error(error));




