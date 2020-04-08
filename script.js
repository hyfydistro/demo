let promise = fetch('https://unsplash.com/photos/qdzMLzvgHXs')

let promise2 = promise.then(response => response.blob());

let promise3 = promise2.then(myBlob => {
  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
})
