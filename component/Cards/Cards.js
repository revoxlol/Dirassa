import './Carding.scss'
import { useNavigate } from "react-router-dom";



 export const Cards = () => {
 
  let navigate = useNavigate(); 
  
  const routeChange = () =>{ 
    let path = `primaryfirst`; 
    navigate(path);
      }

      const SecondRouteChange = () =>
      { 
        let path = `primarysecond`; 
        navigate(path);

          }

          const ThirdRouteChange = () =>
          { 
            let path = `primarythird`; 
            navigate(path);

              }

      
      

    function CardBody(props)
    {
        return (
            
            <div className="card">
            <div className="cardBody">
            <img src={props.img} className="cardImg" onClick={routeChange}/>
            <h2 className="cardTitle"> {props.title} </h2>
            <button className="cardButton" onClick={routeChange}> الطور الأبتدائي</button>
            </div>
    
            </div>
        )
    
    }
    return (
        <div className='wrapperscss'>
        
        <CardBody
                img= "https://bestcheapreviews.com/wp-content/uploads/2017/01/Study-Tables-For-Kids.jpg"
                />
                
        <CardBody
                img="https://www.ldaminnesota.org/wp-content/uploads/teen-studying-book.jpg"
                 />
        <CardBody
                 img="https://ylopsychologyclinic.com.au/wp-content/uploads/teenager-studying.jpg"
                />
        
            
        </div>
    );
    
}


export default Cards;



























