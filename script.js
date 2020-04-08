// let promise = fetch('boo1.png')
//
// let promise2 = promise.then(response => response.blob());
//
// let promise3 = promise2.then(myBlob => {
//   let objectURL = URL.createObjectURL(myBlob);
//   let image = document.createElement('img');
//   image.src = objectURL;
//   document.body.appendChild(image);
// })
//
// let errorCase = promise3.catch(e => {
//   console.log('There has been a problem with your fetch operation: ' + e.message);
// })
//
//
// fetch('boo1.png')
// .then(response => response.blob())
// .then(myBlob => {
//   let objectURL = URL.createObjectURL(myBlob);
//   let image = document.createElement('img');
//   image.src = objectURL;
//   document.body.appendChild(image);
// })
// .catch(e => {
//   console.log('There has been a problem with your fetch operation: ' + e.message);
// });

// let a = fetch(url1);
// let b = fetch(url2);
// let c = fetch(url3);

// Promise.all([a, b, c]).then(values => {
//   // ...
// });

function fetchAndDecode(url, type) {
  return fetch(url).then(response => {
    if (type === 'blob') {
      return response.blob();
    } else if (type === 'text') {
      return response.text();
    }
  })
  .catch(e => {
    console.log('There has been a problem with your fetch operation: ' + e.message);
  })
}

let booOriginal = fetchAndDecode('boo.png', 'blob');
let booPixel = fetchAndDecode('boo-pixel.png', 'blob');
let text = fetchAndDecode('news.txt', 'text');

Promise.all([booOriginal, booPixel, text]).then(values => {
  console.log(values);
  // Store each value returned from the promises in separate variables; create object URLs from the blobs
  let objectURL1 = URL.createObjectURL(values[0]);
  let objectURL2 = URL.createObjectURL(values[1]);
  let descText = values[2];

  // Display the images in <img> elements
  let image1 = document.createElement('img');
  let image2 = document.createElement('img');
  image1.src = objectURL1;
  image2.src = objectURL2;
  document.body.appendChild(image1);
  document.body.appendChild(image2);

  // Display the text in a paragraph
  let para = document.createElement('p');
  para.textContent = descText;
  document.body.appendChild(para);

});
