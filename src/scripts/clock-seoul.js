const getCurrentTime = () => {
  
    const options = {
        timezone: 'Asia.Seoul',
        hour12: true,
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    };
    
    //Get the current time
    const currentTime = new Date().toLocaleString("fr-FR", options);
    
    // render
    document.querySelector(".clock").innerHTML = currentTime;
   
    setTimeout(getCurrentTime, 100);

}
