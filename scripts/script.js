$(document).ready(function(){
    var currentId = 1

    function Note(subject, text, date, checked){
        this.id = currentId;
        currentId++;
        this.subject = subject;
        this.text =text;
        this.date = date;
        this.checked = checked;
    }

    function newForm(){
        
    }

    d1= new Date();

    /* Test Data */

    var n1 = new Note('Card Title1', 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',d1, false);

    var n2 = new Note('Card Title2', 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',d1, true);

    var n3 = new Note('Card Title3', 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',d1, true);

    var n4 = new Note('Card Title4', 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',d1, true);

    console.log(arr);

    var arr = []
    arr.push(n1);
    arr.push(n2, n3, n4);

    arr.forEach(element => {
        let el = `<div class="col s12 m6 l4">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">`+ element.subject +`</span>
                    <p>`+ element.text +`</p>
                </div>
                <div class="card-action">
                    <a href="`+ element.id +`">Edit!</a>
                    <a href="#">Exclude!</a>
                </div>
            </div>
        </div>`
        $('#main-content').append(el);
    });

    



    $('.fixed-action-btn').click(()=>{
        newForm()
    })
  });