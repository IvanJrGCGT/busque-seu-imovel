import styled from "styled-components";
import Colors from "../assets/Colors";
import Comps from "../comps";


export default function LoginPage(props) {
    
    const CustomLoginPage = styled.div`
    
        width: 100vw;
        height: 100vh;
        display: flex;
        background-color: ${Colors.bg};


        .left, .right{
            width: 50vw;
            height: 100vh;
        }
        .right{


            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;
            justify-content: center;
            

            color: #fff;
            .logo{
                font-size: 40pt;
                margin: 0;
                padding: 0;
            }
            .title{
                margin: 0;
                padding: 0;
                font-size: 18pt;
                margin: 10px 0 0 0;

            }
            .text{
                margin: 0;
                padding: 0;
                font-size: 12pt;
                color:  ${Colors.white2};
                margin: 10px 0;
            }
            .forms{
                display: flex;
                flex-direction: column;
                width: 60%;
                text-align: center;
                align-items: center;
                justify-content: center;
                .formss{
                    width: 100%;
                    display: flex;
                    text-align: center;
                    align-items: center;
                    justify-content: space-between;
                        input{
                            width: 45%;
                          
                        }
                }

                input{
                    border-radius: 9px;
                    border: none;
                    margin-top: 25px;
                    width: 100%;
                    height: 38px;
                    color: ${Colors.bg};
                    text-align: center;
                    background-color: ${Colors.grey};
                    transition: all .2s;

                }
                .btn{
                    background-color: ${Colors.secondary};
                    width:80%;
                    height: 40px;
                    display: flex;
                    text-align: center;
                    align-items: center;
                    justify-content: center;
                    margin-top: 25px;

                    border-radius: 9px;
                                        transition: all .2s;

                }
                .btn:hover{
                    cursor: pointer;
                    background-color: ${Colors.primary}
                }

                input:hover {
                    background-color: ${Colors.white2};
                }
                input:active{
                    background-color: ${Colors.secondary};
                }
            }

        }
        .left{
            background-color: ${Colors.black4};
            border-radius: 25px 0 0 25px;


            
        }
    
    `
    
    return(
        <CustomLoginPage>
        <div className="left">
        
        </div>
        <div className="right">
        <p className="logo">
            Busque seu imóvel 
            </p>
            <p className="title">
                Sistema de controle
            </p>
            <p className="title">Login</p>

            <div className="forms">
                      
                <input    type="text" name="email"  id="email" placeholder="Email" />

                    <input type="password"  name="pass"  id="pass" placeholder="Senha" />
 
{/*                     <input type="file"  name="profileImg placeholder"  id="profileImage" placeholder="Foto de perfil" />
 */}
                <div className="btn">Entrar</div>
            </div>



            <p className="text">
                Algum problema? <br/> Entre em contato com o suporte
            </p>
        </div>

    </CustomLoginPage>
)}