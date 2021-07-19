// add notes into local storage
showNotes();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj)
    showNotes();
})


// show notes
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html = html + `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
     <div class="card-body">
       <h5 class="card-title">Note ${index+1}</h5>
       <p class="card-text">${element}</p>
       <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
   </div>
 </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `nothing to show click on add note`
    }

}
//delete button

function deleteNote(index){
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));

    showNotes();

}


//search button

let search= document.getElementById("searchtxt");
search.addEventListener('input',function(){
    let inputval=search.value.toLowerCase();
    let noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt=element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputval)){
            element.style.display='block';
        }
        else{
            element.style.display='none';

        }

    })
})

// 1. add title
// 2.mark a note as important
// separate notes by user 