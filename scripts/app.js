(function() {
    const buttons = document.querySelectorAll('.counterBtn')
    let count = 0


    //Add event listeners and functionailty to each button  
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            if (button.classList.contains('prevBtn')) {
                count--
            } else if (button.classList.contains('nextBtn')) {
                count++
            }

            //Select the counter text
            const counter = document.querySelector('#counter')
            counter.textContent = count

            if (count < 0) {
                counter.style.color = '#CD5C5C'
            } else if (count > 0) {
                counter.style.color = '#FFA07A'
            } else {
                counter.style.color = '#333333'
            }
        })
    })
})()