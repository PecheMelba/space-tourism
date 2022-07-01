import myJson from './data.json' assert {type: 'json'};
//console.log(myJson);

/*Media querry changed state*/
const mediaQueryDesktop = window.matchMedia('(min-width: 900px)');
let isDesktop = false;
function handleDesktopChange(e)// Check if the media query changed
{
    if (e.matches) //if viewports at least 900px wide
    {
        isDesktop = true;
        if(document.querySelector(".tech-img"))
        {
            let tempSrc = document.querySelector(".tech-img").src;
            tempSrc = tempSrc.substring(tempSrc.indexOf("assets"));
            document.querySelector(".tech-img").src = tempSrc.replace('landscape','portrait');
        }
    }   
    else 
    {
        isDesktop = false
        if(document.querySelector(".tech-img"))
        {
            let tempSrc = document.querySelector(".tech-img").src;
            tempSrc = tempSrc.substring(tempSrc.indexOf("assets"));
            document.querySelector(".tech-img").src = tempSrc.replace('portrait','landscape');
        }
    }
}
mediaQueryDesktop.addListener(handleDesktopChange);
handleDesktopChange(mediaQueryDesktop)

//MOBILE MENU
document.getElementById("btn-menu").addEventListener('click', ()=>
{
    document.getElementById("menu").style.display = "block";
});
document.getElementById("btn-close-menu").addEventListener('click', ()=>
{
    document.getElementById("menu").style.display = "none";
});

//DESTINATION PAGE
let destination = document.getElementById("destination");
if( destination != null )
{
    let destinationBtnList = document.querySelectorAll("#star-list .nav-text");
    destinationBtnList.forEach(elem => 
    {        
        elem.addEventListener("click", ()=> 
        {
            myJson.destinations.forEach(currentDestination => 
            {
                if(currentDestination.name == elem.innerHTML)
                {
                    destination.querySelector(".star-title").innerHTML = currentDestination.name;
                    destination.querySelector(".star-img").src = currentDestination.images.png;                    
                    destination.querySelector(".description-txt").innerHTML = currentDestination.description;
                    destination.querySelector(".distance-content").innerHTML = currentDestination.distance;
                    destination.querySelector(".trv-time-content").innerHTML = currentDestination.travel;
                }
            });                        
        });
    });
}
//CREW
let crew = document.getElementById("crew");
if( crew != null )
{
    let crewBtnList = document.querySelectorAll("#crew-list .slider-element");
    crewBtnList.forEach((elem, index) => 
    {        
        elem.addEventListener("click", ()=> 
        {                       
            crew.querySelector(".crew-img").src = myJson.crew[index].images.png;
            crew.querySelector("#crew-img-desktop").src = myJson.crew[index].images.png;
            crew.querySelector(".description-txt").innerHTML = myJson.crew[index].bio;
            crew.querySelector(".crew-job").innerHTML = myJson.crew[index].role;
            crew.querySelector(".crew-title").innerHTML = myJson.crew[index].name;
        });
    });
}
//TECH
let tech = document.getElementById("technology");
if( tech != null )
{
    let techBtnList = document.querySelectorAll("#tech-list .tech-element");
    techBtnList.forEach((elem, index) => 
    {        
        elem.addEventListener("click", ()=> 
        {                       
            if(isDesktop)
                tech.querySelector(".tech-img").src = myJson.technology[index].images.portrait;
            else tech.querySelector(".tech-img").src = myJson.technology[index].images.landscape;
            tech.querySelector(".description-txt").innerHTML = myJson.technology[index].description;
            tech.querySelector(".info-title").innerHTML = myJson.technology[index].name;
        });
    });
}