let myLeads = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el");

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("Leads") );

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads();    
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("Leads",JSON.stringify(myLeads));    
    renderLeads();
})

inputEl.addEventListener("keypress", function(e) {
    if (e.key == "Enter") {
        myLeads.push(inputEl.value);
        inputEl.value = "";
        localStorage.setItem("Leads",JSON.stringify(myLeads));    
        renderLeads();
    }
})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads = [];
    renderLeads();
})

function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
                    <li>
                        <a href="${myLeads[i]}" target="_blank">  ${myLeads[i]}
                        </a>
                    </li>`;
    }
    ulEl.innerHTML = listItems;
}
// localStorage.clear();
console.log(leadsFromLocalStorage);