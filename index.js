let formbox = document.getElementById("form-cont");
let btn = document.querySelector("#butn");
let displayAmt = document.querySelector(".show");

btn.addEventListener("click", async (e) => {
    e.preventDefault();

    let value = formbox.querySelector("input[type=number]").value;
    let fromCurrency = formbox.querySelector(".from").value;
    let toCurrency = formbox.querySelector(".to").value;
    if (value != "") {
        if (fromCurrency === "USD") {
            displayAmt.textContent = "$" + value;
        } else if (fromCurrency === "NGN") {
            displayAmt.textContent = "#" + value;
        }
    }

    const d = async () => {
        const options = {
            method: 'GET',
            url: 'https://currency-converter18.p.rapidapi.com/api/v1/convert',
            params: {
                from: fromCurrency,
                to: toCurrency,
                amount: value
            },
            headers: {
                'X-RapidAPI-Key': 'c4325f15e6mshaadc37080244238p16b1a2jsn7d5751d6996c',
                'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data.result.convertedAmount);
        } catch (error) {
            console.error(error);
        }
    }
    d();
});

// var arrow = document.querySelector('.to-wrapper::after');
// var select = document.getElementById('mySelect');

// arrow.addEventListener("click",(e) =>{
//     console.log("hello")
//     arrow.classList.toggle('show-dropdown');
// })





   