import styled from "styled-components";
import Colors from "../../assets/Colors";
import img from "../../assets/img";



export default function Menu(props) {
    
    var CustomMenu = styled.div`

width:7vw;
height: 100vh;
/* background-color: ${Colors.black4};
 */display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
margin-left: 3px;
transition: all .2s;


    .logo{
        width: 100%;
        height: 15%;
        img{
            width: 100%;
            margin: 0 auto;     
            transition:all .2s;                                                
        }


    }
    .logo:hover{
            cursor: pointer;
            img{
            width: 90%;
            margin: 0 auto;  
            transition:all .2s;                                                   
        }
        }
    li{
        margin: 10px;
        padding: 3px;

        text-align: center;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        cursor: pointer;
       p{
        font-size: 14pt;
        visibility:hidden;
       }
       box-icons{
        color:${Colors.secondary};
       }

    
    }
    li:hover{
        transition: all .2s;
        background-color: white;
        border-radius: 9px;

       p{
        color: ${Colors.black2};
        font-size: 12pt;
        visibility:visible;
       }
    }
 
 
`
;
    return(
        <CustomMenu>
                    <div className="logo">
                        <img src={img.logo} alt="" />
                    </div>
                    <ul>
                        <li>
                            <box-icon type='solid' name='dashboard' color={Colors.red} />
                            <p>Dashboard</p>
                        </li>
                        <li>
                            <box-icon type='solid' name='home' color={Colors.red} />
                            <p>Imoveis</p>
                        </li>
                        <li>
                            <box-icon type='solid' name='user' color={Colors.red} />
                            <p>Clientes</p>
                        </li>
                        <li>
                            <box-icon type='solid' name='bank' color={Colors.red} />
                            <p>Financeiro</p>
                        </li>
                        <li>
                            <box-icon type='solid' name='cog' color={Colors.red} />
                            <p>Config.</p>
                        </li>
                        <li>
                            <box-icon type='solid' name='exit' color={Colors.red} />
                           
                            <p>Sair</p>
                        </li>

                    </ul>
                </CustomMenu>
    )
}