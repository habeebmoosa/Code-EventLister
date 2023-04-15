const heading = document.getElementsByClassName("contestHeading")[0];
const card = document.getElementsByClassName("container")[0];
let data = fetch("https://kontests.net/api/v1/all")
data.then((value)=>{
    return value.json()
}).then((value1)=>{
    console.log(value1)
    innerhtml = "";
    for(item in value1){
        innerhtml += `<div class="eventCard">
        <div class="contestHeading">
            <h3>${value1[item].name}</h3>
        </div>
        <div class="contestBody">
            <p>Organization: ${value1[item].site}</p>
            <p>Start Date: ${value1[item].start_time}</p>
            <p>End Date: ${value1[item].end_time}</p>
            <p>In 24 hours: ${value1[item].in_24_hours}</p>
            <p>Status: ${value1[item].status}</p>
        </div>
        <div class="contestLink">
            <button>
                <a href="${value1[item].url}">Register</a>
            </button>
        </div>
    </div>`
    }
    card.innerHTML = innerhtml;
})