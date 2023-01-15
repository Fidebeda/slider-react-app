import "./OneMovieSlider.css"
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import {useState, useEffect} from 'react'
import data from "../data"

const OneMovieSlider = ()=>{

    const basicValue = 0

    const [index,setIndex] = useState(basicValue)

    useEffect(()=>{
        if(index<0){
            setIndex(data.length-1)
        }
        else if(index>data.length-1){
            setIndex(basicValue)
        }

    },[index])


    useEffect(()=>{
        let setIntervalNum = setInterval(()=>{
            setIndex(index-1)
        },3300)
        return ()=> clearInterval(setIntervalNum)

        
    },[index])




    return(
        <section className="all-movies">
            <div className="all-movies-content">
                {
                    data.map((one,oneIndex)=>{
                        const {id,image,title,tags,description,cathegory} = one

                        let mainClass = "next"

                        if(oneIndex===index){
                            mainClass = "active"
                        }

                        if(oneIndex===index - 1 || (index===0 && oneIndex===data.length-1)){
                            mainClass = "last"
                        }



                        return <article className={mainClass} key={id}>
                            <img src={image} alt="" />
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <p>{tags}</p>
                            <p>{cathegory}</p>
                        </article>
                    })
                }

            </div>

            <div className="buttons">
            <button onClick={()=>setIndex(index - 1)}><FaArrowCircleLeft/></button>
            <button onClick={()=>setIndex(index + 1)}><FaArrowCircleRight/></button>

            </div>
            
            
            
        </section>
    )
}

export default OneMovieSlider

