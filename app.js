console.log("This is my notes project")

// var impArr = ["asasas",'fdfed','dfefdfvb']
// localStorage.setItem('notes',JSON.stringify(impArr))
showNOtes();

var notes = []

var delbtn = document.getElementById('delBtn')
var btn = document.getElementById('addBtn')
btn.addEventListener('click', function () {
    if (document.getElementById('addTxt').value != "") {
        var a = document.getElementById('addTxt').value

        notes = JSON.parse(localStorage.getItem('notes'))
        notes.push(a)
        localStorage.setItem('notes', JSON.stringify(notes))
        console.log(notes);

        if (localStorage.getItem('notes') == null) {
            var notesObj = []
        } else {
            notesObj = JSON.parse(localStorage.getItem('notes'))
        }

        console.log(notesObj)
        document.getElementById('addTxt').value = ""

        showNOtes();
    }
})

function showNOtes() {
    var html = "";
    if (localStorage.getItem('notes') == null) {
        var notesObj = []
    } else {
        notesObj = JSON.parse(localStorage.getItem('notes'))
    }
    notesObj.forEach(function (element, index) {
        html += `
        <div class="mx-3 my-3 card" style="width: 18rem;">

        <div class="noteCard card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id = "${index}" onclick = "deletenote(this.id)" class="btn btn-primary">Delete note</button>
        </div>
    </div> 
        `


        document.getElementById('notes').innerHTML = html

    });


}

function deletenote(index) {
    console.log(`the id is ${index}`)
    notes = []
    notes = JSON.parse(localStorage.getItem('notes'))
    notes.splice(index, 1)
    console.log(notes)
    localStorage.setItem('notes', JSON.stringify(notes))
    showNOtes()
}


function searchFun() {
    var newNotes = []
    var newNotesObj = []
    console.log("clicked");
    var searchElem = document.getElementById('searchTxt').value

    newNotes = JSON.parse(localStorage.getItem('notes'))
    console.log(newNotes);
    newNotes.forEach(function (element) {
        if (element.includes(searchElem)) {

            newNotesObj.push(element)
        }
    });

    var htm = "";

    newNotesObj.forEach(function (element, index) {
        htm += `
    <div class="mx-3 my-3 card" style="width: 18rem;">

    <div class="noteCard card-body">
        <h5 class="card-title">Note ${index + 1}</h5>
        <p class="card-text">${element}</p>
        <button id = "${index}" onclick = "deletenote(this.id)" class="btn btn-primary">Delete note</button>
    </div>
</div> 
    `


        document.getElementById('notes').innerHTML = htm

    });
}