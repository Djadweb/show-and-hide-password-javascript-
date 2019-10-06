var myButton = document.getElementById('myButton'),
    myInput = document.getElementById('myInput');


    myButton.onclick = function () {

        if(this.textContent === 'Show Password') {

            myInput.setAttribute('type', 'text');
            
            this.textContent = 'Hide Password';

        } else {
            
            myInput.setAttribute('type', 'password');
            
            this.textContent = 'Show Password';
        }

    };

        

    