const slices = document.getElementsByClassName("container-project");
const currentSlices=document.getElementById('container-project')
let  slicesWidth=slices[0].offsetWidth;
let currentIndex=0;
let positionX=0
function nextSlice() {
    console.log(slicesWidth,1111)

    if (currentIndex < slices.length) {
        positionX = positionX -slicesWidth;
        currentSlices.style.transition = 'transform 0.3s ease-in-out';
        currentSlices.style.transform = `translateX(${positionX}px)`;

        currentIndex++;


    }
    if (currentIndex === slices.length || currentIndex === 0) {
        setTimeout(() => {
            currentSlices.style.transition = 'none';
            currentSlices.style.transform = 'translateX(0)';
            positionX = 0;
            currentIndex = 0;
        }, 300);
    }
}
function previousSlice() {
    if (currentIndex > 0) {
        positionX = positionX + slicesWidth;

        currentSlices.style.transition = 'transform 0.3s ease-in-out';
        currentSlices.style.transform = `translateX(${positionX}px)`;
        currentIndex--;

    }
    if (currentIndex === 0) {
        setTimeout(() => {
            currentSlices.style.transition = 'transform 0.3s ease-in-out';
            currentSlices.style.transform = `translateX(${slicesWidth*(1- slices.length)}px)`;
            positionX = slicesWidth*(1- slices.length);
            currentIndex = slices.length ;
        }, 300);
    }
}
