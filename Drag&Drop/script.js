// Drag&Drop default //
let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for(list of lists){
    list.addEventListener("dragstart", function(e){
        let selected = e.target;
        rightBox.addEventListener("dragover", function(e){
            e.preventDefault();

        });
        rightBox.addEventListener("drop",function(e){
            rightBox.appendChild(selected);
            selected = null;
        });

        leftBox.addEventListener("dragover", function(e){
            e.preventDefault();

        });
        leftBox.addEventListener("drop",function(e){
            leftBox.appendChild(selected);
            selected = null;
        });
})};
// Drag&Drop image //
const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imgView = document.getElementById("img-view");

inputFile.addEventListener("change", uploadImage);

function uploadImage(){
    inputFile.files[0]
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imgView.style.backgroundImage  = `url(${imgLink})`;
    imgView.textContent = "";
    imgView.style.border = 0;
}

dropArea.addEventListener("dragover", function(e){
    e.preventDefault();

});

dropArea.addEventListener("drop", function(e){
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage();
});