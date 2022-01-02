
const zoomBtn = document.querySelectorAll('.zoom-text');
const imageView = document.querySelector('.image-view');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const imageBox = document.querySelector('.image-box');
let currentImageIdx = 0;

//
const imagesLength = 4;
//

imageView.addEventListener('click', function(){
  this.style.display = "none";
  imageBox.style.display = "none";
})
zoomBtn.forEach(function(btn, index){
  btn.addEventListener('click', function(){
      imageView.style.display = "block";
      imageBox.style.display = "block";
      currentImageIdx = index + 1;
      currentImageDisplay(currentImageIdx);
  })
})
function currentImageDisplay(position){
  imageBox.style.background = `url(../images/twitto/project${currentImageIdx}.png) center/cover no-repeat`;
}
prevBtn.addEventListener('click', function(){
  currentImageIdx--;
  if(currentImageIdx === 0){
      currentImageIdx = imagesLength;
  }
  currentImageDisplay(currentImageIdx);
})
nextBtn.addEventListener('click', function(){
  currentImageIdx++;
  if(currentImageIdx === imagesLength+1){
      currentImageIdx = 1;
  }
  currentImageDisplay(currentImageIdx);
})
