const getCurrentTime = () => {
    // get new date
    const today = new Date();

    // convert
    let day = today.getDay();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let millisecond = today.getMilliseconds();
    
    // Day Array
     const dayArray = [
        "sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"

     ];
     
    //Assemble
    let currentTime = `${dayArray[day]} ${hour} : ${minute} : ${second} : ${millisecond}`;
    
    // check Leading Zero
    hour = checkLeadingZero(hour);
    minute = checkLeadingZero(minute);
    second = checkLeadingZero(second);

    // render
    document.querySelector(".clock").innerHTML = currentTime;
   
    setTimeout(getCurrentTime, 1000);

}
const checkLeadingZero = (paramTime) => {
    paramTime < 10
    ? paramTime = `0${paramTime}`
    : null
  
    return paramTime;

}