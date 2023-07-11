const data = [
    {"baseCurrency":"UAH","currency":"AUD","saleRateNB":12.8319250,"purchaseRateNB":12.8319250},{"baseCurrency":"UAH","currency":"CAD","saleRateNB":13.2107400,"purchaseRateNB":13.2107400,"saleRate":15.0000000,"purchaseRate":13.0000000},{"baseCurrency":"UAH","currency":"CZK","saleRateNB":0.6796950,"purchaseRateNB":0.6796950,"saleRate":0.8000000,"purchaseRate":0.6000000},{"baseCurrency":"UAH","currency":"DKK","saleRateNB":2.5258930,"purchaseRateNB":2.5258930},{"baseCurrency":"UAH","currency":"HUF","saleRateNB":0.0612592,"purchaseRateNB":0.0612592},{"baseCurrency":"UAH","currency":"ILS","saleRateNB":3.8627380,"purchaseRateNB":3.8627380,"saleRate":4.5000000,"purchaseRate":3.7000000},{"baseCurrency":"UAH","currency":"JPY","saleRateNB":0.1272593,"purchaseRateNB":0.1272593,"saleRate":0.1500000,"purchaseRate":0.1200000},{"baseCurrency":"UAH","currency":"LVL","saleRateNB":0.1272593,"purchaseRateNB":0.1272593},{"baseCurrency":"UAH","currency":"LTL","saleRateNB":5.4433850,"purchaseRateNB":5.4433850},{"baseCurrency":"UAH","currency":"NOK","saleRateNB":2.1609570,"purchaseRateNB":2.1609570,"saleRate":2.6000000,"purchaseRate":2.1000000},{"baseCurrency":"UAH","currency":"SKK","saleRateNB":2.1609570,"purchaseRateNB":2.1609570},{"baseCurrency":"UAH","currency":"SEK","saleRateNB":2.0283750,"purchaseRateNB":2.0283750},{"baseCurrency":"UAH","currency":"CHF","saleRateNB":15.6389750,"purchaseRateNB":15.6389750,"saleRate":17.0000000,"purchaseRate":15.5000000},{"baseCurrency":"UAH","currency":"RUB","saleRateNB":0.3052700,"purchaseRateNB":0.3052700,"saleRate":0.3200000,"purchaseRate":0.2800000},{"baseCurrency":"UAH","currency":"GBP","saleRateNB":23.6324910,"purchaseRateNB":23.6324910,"saleRate":25.8000000,"purchaseRate":24.0000000},{"baseCurrency":"UAH","currency":"USD","saleRateNB":15.0564130,"purchaseRateNB":15.0564130,"saleRate":15.7000000,"purchaseRate":15.3500000},{"baseCurrency":"UAH","currency":"BYR","saleRateNB":0.0013900,"purchaseRateNB":0.0013900},{"baseCurrency":"UAH","currency":"EUR","saleRateNB":18.7949200,"purchaseRateNB":18.7949200,"saleRate":20.0000000,"purchaseRate":19.2000000},{"baseCurrency":"UAH","currency":"GEL","saleRateNB":8.1500890,"purchaseRateNB":8.1500890},{"baseCurrency":"UAH","currency":"PLZ","saleRateNB":4.4922010,"purchaseRateNB":4.4922010,"saleRate":5.0000000,"purchaseRate":4.2000000}]

const root = document.getElementById("root");
const table = document.createElement("table");
table.style.border = "1px solid green";
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
root.append(table);
table.append(thead);
thead.after(tbody);

const th = [];
    for (i=0; i<6; i++) {
        th[i] = document.createElement("th");
        thead.append(th[i]);
        th[i].style.border = "1px solid green";
        th[i].style.minWidth = "100px";
        th[i].style.height = "30px";
    } 

for (j=0; j<data.length; j++) {
    tr = document.createElement("tr");
    tbody.append(tr);
    for (i=0; i<6; i++) {
        td = document.createElement("td");
        tr.append(td);
        td.style.border = "1px solid green";
        td.style.minWidth = "100px";
        td.style.height = "30px";
        // switch (i) {
        //     case 0: td.textContent = data[j].baseCurrency; break;
        //     case 1: td.textContent = data[j].currency; break;
        //     case 2: td.textContent = data[j].saleRateNB; break;
        //     case 3: td.textContent = data[j].purchaseRateNB; break;
        //     case 4: td.textContent = data[j].saleRate; break;
        //     case 5: td.textContent = data[j].purchaseRate; break;
        // }
    }
}


th[0].textContent = "baseCurrency";
th[1].textContent = "currency";
th[2].textContent = "saleRateNB";
th[3].textContent = "purchaseRateNB";
th[4].textContent = "saleRate";
th[5].textContent = "purchaseRate";

data.forEach( (el, o) => {
    tbody.children[o].cells[0].textContent = el.baseCurrency
    tbody.children[o].cells[1].textContent = el.currency
    tbody.children[o].cells[2].textContent = el.saleRateNB
    tbody.children[o].cells[3].textContent = el.purchaseRateNB
    tbody.children[o].cells[4].textContent = el.saleRate
    tbody.children[o].cells[5].textContent = el.purchaseRate
});