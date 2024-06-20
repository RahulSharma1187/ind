import "./functionalMedicineSlider.css";

export const FunctionalMedicineSlider = () => {
    const functionalSlide = [
        {
            imgName:"test",
            title:"Concept", 
            description: "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet vulputate augue, vel maximus ligula auctor a. Integer ultrices semper nisl."
        },
        {
            imgName:"test",
            title:"Journey", 
            description: "2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet vulputate augue, vel maximus ligula auctor a. Integer ultrices semper nisl."
        },
        {
            imgName:"test",
            title:"Goals", 
            description: "3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet vulputate augue, vel maximus ligula auctor a. Integer ultrices semper nisl."
        }
    ]
  return (
    <div className="functionalMedicineSlider">
        {
            functionalSlide.map((slide, index) => {
                return (
                    <div className="functionalSlide" key={index}>
                        <div className="functionalSlideImg">
                        </div>
                        <div className="functionalSlideCont">
                            <h2>{slide.title}</h2>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                )                
            })
        }
        
    </div>
  )
}