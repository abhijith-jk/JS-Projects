let myLeads = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("Leads") );
const tabBtn = document.getElementById("tab-btn");

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);    
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("Leads",JSON.stringify(myLeads));
        render(myLeads);
    })
})

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
                    <li>
                        <a href="${leads[i]}" target="_blank">  ${leads[i]}
                        </a>
                    </li>`;
    }
    ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("Leads",JSON.stringify(myLeads));    
    render(myLeads);
})

inputEl.addEventListener("keypress", function(e) {
    if (e.key == "Enter") {
        myLeads.push(inputEl.value);
        inputEl.value = "";
        localStorage.setItem("Leads",JSON.stringify(myLeads));    
        render(myLeads);
    }
})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

// localStorage.clear();
console.log(leadsFromLocalStorage);