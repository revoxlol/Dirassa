import Slider from "../Slider/Slider";


 export const MainDashboard = () => {
 
    return (
        <div>
        
        <Slider />
        <div className="threecol">  
           <div className="box box1">  
                <div className="content">  
                     <img src="img/hat.png " alt="" width="70px"/>  
                       
                     <p>We believe that a rigorous academic program combined with a supportive social-emotional curriculum leads to scholar success. </p>  
                     <button class="btn btn1">Learn More</button>  
                </div>  
           </div>  
           <div className="=box box2">  
                <div className="content">  
                     <img src="img/book-stack.png" alt=""  width="70px"/>  
                      
                     <p>We are committed to supporting our families and take much pride in providing wrap-around services to the entire family.  </p>  
                     <button class="btn btn2">Learn More</button>  
                </div>  
           </div>  
           <div className="box box3">  
                <div className="content">  
                     <img src="img/studying.png" alt=""  width="70px"/>  
                     
                     <p>We provide rigorous high school curriculum with an emphasis in science and mathematics in a supportive environment  </p>  
                     <button className="btn btn3">Learn More</button>  
                </div>  
           </div>  
      </div>  
        </div>
    );
}

export default MainDashboard;



























