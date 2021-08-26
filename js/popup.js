var tab_create_account = document.getElementById("tab_create_account");
var tab_report_account = document.getElementById('tab_report_account');


async function open_create_account() {
    document.getElementById("tab_create_account").style.borderColor = "green";
    document.getElementById("tab_report_account").style.borderColor = "white";
    document.getElementById("create_account").style.display    = "block";
    document.getElementById("report_account").style.display    = "none";
    await set_status(1);
}
async function open_report_account() {
    document.getElementById("tab_report_account").style.borderColor = "green";
    document.getElementById("tab_create_account").style.borderColor = "white";
    document.getElementById("report_account").style.display    = "block";
    document.getElementById("create_account").style.display    = "none";
    await set_status(2);

}
async function set_status(tab1){
    await browser.storage.local.set({tab:tab1});
}
function init(){
    let {tab} = await browser.storage.local.get("tab");
    alert(tab);
    if (parseInt(tab) == 1)
        tab_create_account.click();
    else if (parseInt(tab) == 2)
        tab_report_account.click();

}
init();



tab_create_account.onclick = open_create_account;
tab_report_account.onclick = open_report_account;