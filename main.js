(function () {
    // select options
    const services = [
        {
            value: 1,
            title: 'Great - 20%'
        },
        {
            value: 2,
            title: 'Ok - 10%'
        },
        {
            value: 3,
            title: 'Bad - 2%'
        }
    ];
    // add select options to the select element
    services.forEach(function (service) {
        const option = document.createElement('option');
        option.textContent = service.title;
        option.value = service.value;

        document.getElementById('input-service').appendChild(option);
    })
    // get all the vlaues
    const form = document.getElementById('tip-form');
    const amount = document.getElementById('input-bill');
    const users = document.getElementById('input-users');
    const service = document.getElementById('input-service');
    // customer feedback
    const feedback = document.querySelector('.feedback');
    const loader = document.querySelector('.loader');
    const results = document.querySelector('.results');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let bill = amount.value;
        let people = users.value;
        let quality = services.value;

        if (bill === '' || bill <= "0" || (people === '' || people <= "0") || quality === "0") {
            feedback.classList.add('showItem', 'alert-danger');
            feedback.innerHTML = `
                <p>Please check the values</p>
                <p>Bill amount cannot be less than 0</p>
                <p>People sharing the bill cannot be less than 0</p>
                <p>Service has to be selected</p>
            `;
            setTimeout(function () {
                feedback.classList.remove('showItem', 'alert-danger');
            }, 3000);
        } else {
            feedback.classList.add('showItem', 'alert-success');
            feedback.innerHTML=    `
                <p>Calculating...</p>
            `;
            loader.classList.add('showItem');
            setTimeout(function () {
                feedback.classList.remove('showItem');
                loader.classList.remove('showItem');
            }, 3000);
        }
    })

})();