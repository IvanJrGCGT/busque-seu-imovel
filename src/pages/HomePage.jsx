import styled from "styled-components";
import Colors from "../assets/Colors";
import img from "../assets/img";
import Comps from "../comps";
import Header from '../comps/Header' 

    
var CustomHome = styled.div`



background-color: ${Colors.black} ;
width: 100vw;
height: 100vh;


`
;
var CustomCard = styled.div`
   width: 100vw;
   height: 80vh;
    display: flex;
   flex-direction: row;
   align-items: center;
   text-align: center;
   justify-content: space-around;
    `

export default function HomePage(props) {

    
    return(
        <CustomHome>
            <Comps.Header />
                <CustomCard>
                    <Comps.Card image={img.PqMusique[3]} image2={img.PqMusique[4]} />
                    <Comps.Card image={img.PqSaoJoao[3]} image2={img.PqSaoJoao[4]} />
                    <Comps.Card image={img.ResMarajo[2]} image2={img.ResMarajo[3]} />
                        
                    
                </CustomCard>
                <Comps.NewItems>
                    
                </Comps.NewItems>
        </CustomHome>
    )
}