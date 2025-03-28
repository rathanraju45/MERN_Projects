const iteminput = document.getElementById("item-input");
const quantityinput = document.getElementById("quantity-input");
const unitinput = document.getElementById("unit-price-input");

const add = document.getElementById("add-button");
const tablebody = document.getElementById("table-body");
const billspan = document.getElementById("bill-value");

let bill = 0;
billspan.textContent = bill;

function addrow(){
    const name = iteminput.value;
    const quantity = quantityinput.value;
    const unit = unitinput.value;
    const producttotal = quantity * unit;

    const row = document.createElement("tr");
    row.classList.add("row");

    const nametd = document.createElement("td");
    nametd.classList.add("name");
    nametd.textContent = name;

    const unittd = document.createElement("td");
    unittd.classList.add("unit-price");
    unittd.textContent = unit;

    const quantitytd = document.createElement("td");
    quantitytd.classList.add("quantity");
    quantitytd.textContent = quantity;

    const totaltd = document.createElement("td");
    totaltd.classList.add("total");
    totaltd.textContent = producttotal;

    bill = bill + producttotal;
    billspan.textContent = bill;

    row.appendChild(nametd);
    row.appendChild(unittd);
    row.appendChild(quantitytd);
    row.appendChild(totaltd);

    tablebody.appendChild(row);

}