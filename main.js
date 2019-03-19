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

})();