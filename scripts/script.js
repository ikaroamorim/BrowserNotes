$(document).ready(function () {
    var currentId = 0;
    var editForm = false;
    var editItem = 0;

    function Note(subject, text, date, checked) {
        this.id = currentId;
        currentId++;
        this.subject = subject;
        this.text = text;
        this.date = date;
        this.checked = checked;
    }

    function newForm() {
        $('#add-btn').fadeOut(500);
        /* $('.form').removeClass("hide");*/
        $('.form').show(500);
        editForm = false
    }

    function closeForm() {
        /* $('.form').addClass("hide");*/
        $('.form').hide(500);
        $('#add-btn').fadeIn(500);
    }

    function save() {
        let titulo = $('#titulo').val();
        let texto = $('#textarea').val();
        let data = $('#datepicker').val();
        if (editForm == false) {
            let note = new Note(titulo, texto, data, false)
            arr.push(note);

        } else {
            arr[editItem].subject = titulo;
            console.log(editItem);
            arr[editItem].text = texto;
            arr[editItem].date = data;
        }
        $('#titulo').val('');
        $('#textarea').val('');
        $('#datepicker').val('');

        renderNotes();
        saveToLocal();
    }


    function deleteNote(e) {
        let item = parseInt(e.id.substring(12), 10);
        arr.splice(item, 1);
        renderNotes();
        saveToLocal();

        /*
        *
        for some reason the event listener is not reset
        *

        $('.exclude-btn').on('click', function () {
            console.log(this);
            let el = this;
            deleteNote(el);
        });
        */
    }

    function editNote(e) {
        editItem = parseInt(e.id.substring(9), 10);
        $('#add-btn').fadeOut(500);
        $('.form').show(500);

        $('#titulo').val(arr[editItem].subject);
        $('#textarea').val(arr[editItem].text);
        $('#datepicker').val(arr[editItem].date);
        editForm = true;
    }


    function renderNotes() {
        $('#main-content').html('');

        if (arr != null) {
            for (let i = 0; i < arr.length; i++) {
                let el = `<div class="col s12 m6 l4 card-line">
                                <div class="card blue-grey darken-1">
                                    <div class="card-content white-text">
                                        <span class="card-title">`+ arr[i].subject + `</span>
                                        <p>`+ arr[i].date + `</p>
                                        <p>`+ arr[i].text + `</p>
                                    </div>
                                    <div class="card-action">
                                        <a class="edit-btn" id="edit-btn-`+ i + `">Edit</a>
                                        <a class="exclude-btn" id="exclude-btn-`+ i + `">Exclude</a>
                                    </div>
                                </div>
                            </div>
                            `
                $('#main-content').append(el);
            }
        }

    }

    function saveToLocal() {
        console.log(JSON.stringify(arr));
        localStorage.setItem('browserNotesCards', JSON.stringify(arr))
    }



    /* Inicialização do contador do textfield*/
    $('#textarea').characterCounter();

    /*Inicialização do DatePicker*/
    $('.datepicker').datepicker();


    d1 = new Date();

    /* 
    Test Data 
    */
    var n1 = new Note('Card Exemplo', 'Este é um card de exemplo, caso no seu primeiro acesso ele será exibido.', d1, false);
    var n2 = new Note('Card Title2', 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.', d1, true);
    var n3 = new Note('Card Title3', 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.', d1, true);
    var n4 = new Note('Card Title4', 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.', d1, true);
    var n5 = new Note('Card Title5', 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.', d1, true);
    var n6 = new Note('Card Title6', 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.', d1, true);



    var arr = []

    if (JSON.parse(localStorage.getItem('browserNotesCards')) == null) {
        arr.push(n1);
    } else if (JSON.parse(localStorage.getItem('browserNotesCards')).legnth != 0){
        arr = JSON.parse(localStorage.getItem('browserNotesCards'));
    }

/*
if (JSON.parse(localStorage.getItem('browserNotesCards')) > 0) {
    arr = JSON.parse(localStorage.getItem('browserNotesCards'));
}
*/


renderNotes();
console.log(arr)



$('#add-btn').on('click', function () {
    newForm();

})

$('#form-close').click(() => {
    closeForm();
})

$('form').submit(function () {
    save();
    closeForm();
    return false;
});


$('.exclude-btn').on('click', function () {
    let el = this;
    deleteNote(el);
});

$('.edit-btn').on('click', function () {
    let el = this;
    editNote(el);
});




});