import styled from "styled-components";
import Colors from "../assets/Colors";
import img from "../assets/img";
import Comps from "../comps";
import Header from '../comps/Header' 
import 'boxicons'

const User = "Glauber Ricardin"


    
var CustomHome = styled.div`
background-color: ${Colors.bg} ;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: row;
text-align: center;
align-content: center;
justify-content: space-around;
`
var CustomContent = styled.div`
width: 60vw;
height: 100vh;
display: flex;
text-align: center;
align-items: center;
justify-content: center;
    .div{
        background-color: ${Colors.black} ;
        height: 90vh;
        width: 60vw;
        border-radius: 9px;
        border: solid 1px #ffffff1a;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
        align-items: center;
            .one{
                width: 60vw;

                display: flex;
                flex-direction: row;
                justify-content: space-around;
                text-align: center;
                align-items: center;
            }

            .boasVindas{

                width: 18vw;
                height: 20vh;
                margin-top: 10px;
                border-radius: 9px;
                border: solid 1px #ffffff1a;
                .bemVindo{
                    color: ${Colors.white};
                    font-size: 18pt;
                }
                img{
                    width: 20%;
                }
                
            }
            input{
                    border-radius: 9px;
                    border: none;
                    margin-top: 25px;
                    width: 38vw;
                    height: 40px;
                    color: ${Colors.bg};
                    text-align: center;
                    background-color: ${Colors.grey};
                    transition: all .2s;

                }

            .rowCard{
                display: flex;
                flex-direction: row;
                justify-content: center;
                width: 95%;

            }
    }
`



export default function HomePage(props) {

    
    return(
        <CustomHome>
           {/*  <Comps.Header />
                <CustomCard>
                    <Comps.Card image={img.PqMusique[3]} image2={img.PqMusique[4]} />
                    <Comps.Card image={img.PqSaoJoao[3]} image2={img.PqSaoJoao[4]} />
                    <Comps.Card image={img.ResMarajo[2]} image2={img.ResMarajo[3]} />
                        
                    
                </CustomCard>
                <Comps.NewItems>
                    
                </Comps.NewItems> */}


                
                <Comps.Menu />
                <Comps.Atividades />
                <CustomContent>
                    <div className="div">
                        <div className="one">
                        <input type="text" name="src" id="src" placeholder="O que está procurando ?" />

                            <div className="boasVindas">
                                <p className="bemVindo">
                                    Saaalve,
                                </p>
                                <p className="bemVindo">
                                    {User}
                                </p>
                                <img src={img.user} alt="" className="imgProfile" />
                            </div>
                        </div>
{/*                         <div className="rowCard">
                        <Comps.Card />
                        <Comps.Card />
                        <Comps.Card />
 
                        </div> */}
                    </div>
                 
                </CustomContent>
        </CustomHome>
    )
}