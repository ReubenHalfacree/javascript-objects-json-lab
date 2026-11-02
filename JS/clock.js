(function(){ 
const myNode = document.createElement("div");
const digitalClock = document.getElementById("digitalClock");
digitalClock.appendChild(myNode);
const myDate = new Date();
myNode.innerHTML = myDate.toLocaleTimeString("en-GB", { timeStyle: "medium" });

const updateTime = () => {
    console.info("tick tock");
    const myDate = new Date();
    myNode.innerHTML = myDate.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    
};
setInterval(updateTime, 1000);
updateTime();

})();



