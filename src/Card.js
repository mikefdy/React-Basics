import React from "react";

//creation of one card Component dynamically
const card = ({name, email, id}) => {
   
    return(
        
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow5">     
            <img alt='Robot'src={`https://robohash.org/${id}`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
            
        </div>
    );
}
 //components styling and animation as classname coming from the tachyon import
//When using formatted strings with variables use `` instead of "" or ''

export default card;