

// quando clica em cada numero:

    for (let i = 0; i< document.querySelectorAll('.btn').length; i++){
    document.querySelectorAll('.btn')[i].addEventListener('click', function() {
        var rate = this.innerHTML; //1 2 3 4 5
        console.log(rate);
        //insertRate(chosenRate);
        sessionStorage.setItem('rate', rate);
        this.classList.toggle('selected');
        });
    }
