let formbox = document.getElementById("form-cont");
let btn = document.querySelector("#butn");
let displayAmt = document.querySelector(".show");
let displayAmtConverted = document.querySelector(".converted");
const currencySymbols = {
  "USD": "\u0024", 
  "NGN": "\u20A6",   
  "GHS" : "\u20B5",
  "ALL" : "\u004c",
  "DZD" : "دج",
  "AOA" :  "\u004B",
  "ARS" :  "\u0024" ,
  "AMD" : "\u058F",
  "AWG" : "\u0402",
  "AUD" : "\u0024",
  "AZN" : "\u020B",
  "BSD": "\u0024", // $
  "BHD": "\u062F.\u0628", // د.ب
  "BDT": "\u09F3", // ৳
  "BBD": "\u0024", // $
  "BYN": "\u0440.", // р.
  "BZD": "\u0042\u005A\u0024", // BZ$
  "BMD": "\u0042\u0024", // B$
  "BTN": "\u004E\u0055", // NU
  "BOB": "\u0042\u0053\u0042", // BSB
  "BAM": "\u004B\u004D", // KM
  "BWP": "\u0050", // P
  "BRL": "\u0052\u0024", // R$
  "BND": "\u0042\u0024", // B$
  "BGN": "\u043B\u0432", // лв
  "BIF": "\u0046\u0042\u0075", // FBu
  "KHR": "\u17DB", // ៛
  "CAD": "\u0024", // $
  "CVE": "\u0043\u0076", // CV
  "KYD": "\u004B\u0044\u0024", // KY$
  "CLP": "\u0024", // $
  "CNY": "\u00A5", // ¥
  "COP": "\u0024", // $
  "XOF": "\u0046\u0043\u0046\u0041", // FCFA
  "XAF": "\u0046", // F
  "KMF": "\u0043\u0046", // CF
  "XPF": "\u0046", // F
  "CDF": "\u0046\u0043", // FC
  "CRC": "\u20A1", // ₡
  "HRK": "\u006B\u006E", // kn
  "CUP": "\u20B1", // ₱
  "CZK": "\u004B\u010D", // Kč
  "DKK": "\u006B\u0072", // kr
  "DJF": "\u0046\u0064\u006A", // Fdj
  "DOP": "\u0052\u0044\u0024", // RD$
  "XCD": "\u0045\u0043\u0024", // EC$
  "EGP": "\u00A3", // £
  "SVC": "\u0024", // $
  "ETB": "\u0042\u0072", // Br
  "EUR": "\u20AC", // €
  "FJD": "\u0024", // $
  "GMD": "\u0044", // D
  "GEL": "\u20BE", // ₾
  "GTQ": "\u0051", // Q
  "GNF": "\u0046", // F
  "GYD": "\u0024", // $
  "HTG": "\u0047", // G
  "HNL": "\u004C", // L
  "HKD": "\u0048\u004B\u0024", // HK$
  "HUF": "\u0046\u0074", // Ft
  "ISK": "\u006B\u0072", // kr
  "INR": "\u20B9", // ₹
  "IDR": "\u0052\u0070", // Rp
  "IRR": "\u0631\u064A\u0627\u0644", // ریال
  "IQD": "\u062F.\u0639", // د.ع
  "ILS": "\u20AA", // ₪
  "JMD": "\u004A\u0024", // J$
  "JPY": "\u00A5", // ¥
  "JOD": "\u062F.\u0627", // د.ا
  "KZT": "\u0422", // ₸
  "KES": "\u004B\u0053\u0068", // KSh
  "KRW": "\u20A9", // ₩
  "KWD": "\u062F.\u0643", // د.ك
  "KGS": "\u043B\u0432", // лв
  "LAK": "\u20AD", // ₭
  "LBP": "\u0644.\u0644", // ل.ل
  "LSL": "\u004C\u0053\u004C", // LSL
  "LRD": "\u0024", // $
  "LYD": "\u062F.\u0644", // د.ل
  "MOP": "\u004D\u004F\u0050\u0024", // MOP$
  "MKD": "\u0434\u0435\u043D", // ден
  "MGA": "\u0041\u0041\u0042", // AAB
  "MWK": "\u004D\u004B", // MK
  "MYR": "\u0052\u004D", // RM
  "MVR": "\u0783", // ރ
  "MUR": "\u20A8", // ₨
  "MXN": "\u0024", // $
  "MDL": "\u006C", // l
  "MAD": "\u062F.\u0645.", // د.م.
  "MZN": "\u004D\u0054", // MT
  "MMK": "\u004B", // K
  "NAD": "\u0024", // $
  "NPR": "\u20A8", // ₨
  "ANG": "\u0192", // ƒ
  "NZD": "\u0024", // $
  "NIO": "\u0043\u0024", // C$
  "NOK": "\u006B\u0072", // kr
  "OMR": "\u0631.\u0639.", // ر.ع.
  "PKR": "\u20A8", // ₨
  "PAB": "\u0042\u002F\u002E", // B/.
  "PGK": "\u004B", // K
  "PYG": "\u0047\u0073", // Gs
  "PEN": "\u0053\u002F\u002E", // S/.
  "PHP": "\u20B1", // ₱
  "PLN": "\u007A\u0142", // zł
  "QAR": "\u0631.\u0642", // ر.ق
  "RON": "\u006C\u0065\u0069", // lei
  "RUB": "\u20BD", // ₽
  "RWF": "\u20A3", // ₣
  "SAR": "\u0631.\u0633", // ر.س
  "RSD": "\u0414\u0438\u043D.", // Дин.
  "SCR": "\u20A8", // ₨
  "SLL": "\u004C\u0065", // Le
  "SGD": "\u0024", // $
  "SBD": "\u0024", // $
  "SOS": "\u0053", // S
  "ZAR": "\u0052", // R
  "LKR": "\u20A8", // ₨
  "SDG": "\u062C.\u0633", // ج.س
  "SRD": "\u0024", // $
  "SZL": "\u004C", // L
  "SEK": "\u006B\u0072", // kr
  "CHF": "\u0043\u0048\u0046", // CHF
  "TWD": "\u004E\u0054\u0024", // NT$
  "TJS": "\u0405", // ЅМ
  "TZS": "\u0054\u0053\u0048", // TSh
  "THB": "\u0E3F", // ฿
  "TOP": "\u0054\u0024", // T$
  "TTD": "\u0054\u0054\u0024", // TT$
  "TND": "\u062F.\u062A", // د.ت
  "TRY": "\u20BA", // ₺
  "TMT": "\u043C\u0430\u043D", // ман
  "UGX": "\u0053\u0068", // Sh
  "UAH": "\u20B4", // ₴
  "AED": "\u062F.\u0625", // د.إ
  "GBP": "\u00A3", // £
  "UYU": "\u0024\u0055", // $U
  "UZS": "\u043B\u0432", // лв
  "VND": "\u20AB", // ₫
  "YER": "\u0631.\u064A", // ر.ي
  "ZMW": "\u005A\u004B", // ZK
  "AFN": "\u060B", // ؋
  "CLF": "\u0043\u004C\u0046", // CLF
  "CNH": "\u20E5", // ₥
  "ETH": "\u039E", // Ξ
  "LTC": "\u0141", // Ł
  "BYR": "\u0042\u0072", // Br
  "CUC": "\u0053\u0024", // S$
  "EEK": "\u0045\u0045\u004B", // EEK
  "ERN": "\u004E\u004B\u0046", // NKF
  "FKP": "\u00A3", // £
  "GGP": "\u00A3", // £
  "GIP": "\u00A3", // £
  "IMP": "\u00A3", // £
  "JEP": "\u00A3", // £
  "LTL": "\u004C\u0054", // LT
  "MTL": "\u004C\u0049\u0052\u0041", // LIRA
  "SHP": "\u00A3", // £
  

};


let pop = document.querySelector(".popOut");
let parent = document.querySelector(".parent");
let error = document.querySelector(".err");
let shp = document.querySelector(".shape");
let txt = document.querySelector(".txt");



const cancelSymbol = "\u00D7"; 



function createCancelButton() {
    const cancelButton = document.createElement('button');
    cancelButton.innerHTML =`<span style="font-size: 40px;">${cancelSymbol}</span>`;;
    cancelButton.classList.add('cancel-button');
    cancelButton.style.width = "20px";
   
    
    return cancelButton;
}


pop.addEventListener("click", (event) => {
    if (event.target.classList.contains('cancel-button')) {
       
        pop.style.display = "none";
        
        formbox.style.filter = "none";
        shp.style.filter = "none";
        txt.style.filter = "none";
    }
});





btn.addEventListener("click", async (e) => {
    e.preventDefault();

    let value = formbox.querySelector("input[type=number]").value;
    let fromCurrency = formbox.querySelector(".from").value;
    let toCurrency = formbox.querySelector(".to").value;
    // let fromSymbol = currencySymbols[fromCurrency];
    let toSymbol = currencySymbols[toCurrency];
  
    if(value === ""){
      error.style.display = "block";
    }

    else{
      // displayAmt.textContent =  fromSymbol + value;  

      pop.style.display = "block";
      error.style.display = "none";
    //   formbox.style.filter = "blur(3px)";
    
    //   shp.style.filter = "blur(3px)";
    //   txt.style.filter = "blur(3px)";
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
            
          
            const convertedAmount = response.data.result.convertedAmount;
          
         
            
            
              
            
            if (typeof convertedAmount === "number" && /\./.test(convertedAmount.toString())) {
                
            let roundedAmount = convertedAmount.toFixed(3);
             pop.textContent = `${toSymbol}${roundedAmount}`;
            
            }
             else{
              pop.textContent = `${toSymbol}${convertedAmount}`;
              
             }
            
           
            
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





   