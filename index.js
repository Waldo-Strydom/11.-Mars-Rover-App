// let hasData = false
const clear = ()=>{
   
    console.log(outPutDiv.children.length)


    document.querySelectorAll('.fig').forEach(el => el.remove()); 


}    
const display = (res)=>{
    clear()

    res.photos.forEach((e)=>{
        // console.log(e.camera.full_name)
        let fig = document.createElement("figure")
        fig.classList.add("fig")
        let img = document.createElement("img")
        img.setAttribute("src", e.img_src )
        fig.appendChild(img)

        let cap = document.createElement("figcaption")
        cap.innerHTML= `Curiosity (${e.camera.full_name}) ${e.earth_date}`
        fig.appendChild(cap)

        outPutDiv.appendChild(fig)
        
    })

 

}

// const store = (result)=>{
//     let res = result
//     hasData = true
// }



const build = ( camera)=>{


    camera = camera.toLowerCase();

    const link = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera="+camera+"&api_key=DEMO_KEY"


    // const link= "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"

    getInfo(link)
}

const getInfo = async(link)=>{
   
    try{
        const response = await fetch(link)
        const result = await response.json()

        display(result)
    }catch(error){
        console.log(error)
    }
}





let radioValue = ""
const radio = document.getElementsByName("camera")

    radio.forEach((e)=>{
        e.addEventListener("change", ()=>{
            radioValue = e.id
    })

})


const getBtn = document.getElementById("getBtn")
getBtn.addEventListener("click",()=>{
    build( radioValue)
} )


const outPutDiv = document.querySelector("#outPutDiv");





