$(document).ready(function(){
    var currentId = 0;

function Note(subject, text, date, checked){
    this.id = currentId;
    currentId++;
    this.subject = subject;
    this.text =text;
    this.date = date;
    this.checked = checked;
}

function newForm(){
    $('#add-btn').fadeOut(500);
    /* $('.form').removeClass("hide");*/
    $('.form').show(500);

}

function closeForm(){
    /* $('.form').addClass("hide");*/
    $('.form').hide(500);
    $('#add-btn').fadeIn(500);
}

function save(){
    let titulo = $('#titulo').val();
    let texto = $('#textarea').val();
    let data = $('#datepicker').val();
    let note = new Note(titulo, texto, data, false)
    arr.push(note);
    $('#titulo').val('');
    $('#textarea').val('');
    $('#datepicker').val('');
    console.log(arr)
    renderNotes();
}

function save(){
    let titulo = $('#titulo').val();
    let texto = $('#textarea').val();
    let data = $('#datepicker').val();
    let note = new Note(titulo, texto, data, false)
    arr.push(note);
    $('#titulo').val('');
    $('#textarea').val('');
    $('#datepicker').val('');
    console.log(arr)
    renderNotes();
}

function deleteNote(e){
    console.log(arr);
}


    function renderNotes(){
        $('#main-content').html('');
        arr.forEach(element => {
            let el = `<div class="col s12 m6 l4">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">`+ element.subject +`</span>
                    <p>`+ element.date +`</p>
                    <p>`+ element.text +`</p>
                </div>
                <div class="card-action">
                    <a href="#"`+ element.id +`">Edit</a>
                    <a id="exclude-btn-`+ element.id +`">Exclude</a>
                </div>
            </div>
        </div>
        `
            $('#main-content').append(el);
        });
    }

    

    /* Inicialização do contador do textfield*/
    $('#textarea').characterCounter();

    /*Inicialização do DatePicker*/
    $('.datepicker').datepicker();


    d1= new Date();



    /* Test Data */

    var n1 = new Note('Card Title1', 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',d1, false);

    var n2 = new Note('Card Title2', 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',d1, true);

    var n3 = new Note('Card Title3', 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',d1, true);

    var n4 = new Note('Card Title4', 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',d1, true);

    

    var arr = []
    arr.push(n1, n2, n3, n4);

    console.log(arr);

    

    renderNotes();
    


    $('#add-btn').on('click',function(){
        newForm();

    })
    
    $('#form-close').click(()=>{
        closeForm();
    })

    /*$('#btn-save').click(()=>{
        console.log( "1");
        save();
        console.log( "2");
        closeForm();
        console.log( "3");
    })*/

    $('form').submit(function (e) {
        save();
        closeForm();
        return false;       
    });

  });