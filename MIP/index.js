
function getVal() {

    $(document).on('click', '.user-submit', function(event){
        event.preventDefault();
        var userInput = $('input').val();
        $('.results').html("Hi, My name is " + userInput + ".");
        console.log(userInput);
    })
};


$(getVal());

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}