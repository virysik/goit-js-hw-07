const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryItemsCreator = (obj) => obj.map(({url,alt}) => {
    let imageEl = `<li><img class = "item-img" src = '${url}' alt = '${alt}'></img></li>`;
    return imageEl;
} );

const galleryElements = galleryItemsCreator(images).join(' ');
//console.log(galleryElements);

const galleryListEl = document.querySelector("#gallery");
galleryListEl.insertAdjacentHTML("afterbegin", galleryElements);
//console.log(galleryListEl);

galleryListEl.style.display = "flex";
galleryListEl.style.alignItems = 'center';
galleryListEl.style.flexDirection = "column";
galleryListEl.style.listStyle = "none";



const imgEl = document.querySelectorAll(".item-img");
[...imgEl].forEach(el => {
    el.style.width = '400px';
    el.style.marginBottom = "15px";
});