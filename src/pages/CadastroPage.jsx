import styled from "styled-components";
import Colors from "../assets/Colors";
import Comps from "../comps";


export default function CadastroPage(props) {
    
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
            background-color: ${Colors.black4};
            border-radius: 25px 0 0 25px;

        }
        .left{

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

                input:hover {
                    background-color: ${Colors.white2};
                }
                input:active{
                    background-color: ${Colors.secondary};
                }
            }
        }
    
    `
    
    return(
    <CustomLoginPage>
        <div className="left">
        <p className="logo">
            Busque seu imóvel 
            </p>
            <p className="title">
                Sistema de controle
            </p>
            <p className="title">Cadastre-se</p>

            <div className="forms">
               <input type="text" name="name " id="name" placeholder="Nome" />
                    <div className="formss">
                            
                        <input type="text" name="tel "  id="tel"placeholder="Telefone" />
                        <input type="date" name="date "  id="date"placeholder="Aniversario" />

                    </div>
                <input    type="text" name="email"  id="email" placeholder="Email" />
                    <div className="formss">
                    <input type="password"  name="pass"  id="pass" placeholder="Senha" />
                    <input type="password"  name="pass-comfirm"  id="passConfim" placeholder="Confirmar enha" />

                    </div>
{/*                     <input type="file"  name="profileImg placeholder"  id="profileImage" placeholder="Foto de perfil" />
 */}
                <div className="btn">Enviar dados para análise</div>
            </div>



            <p className="text">
                Algum problema? <br/> Entre em contato com o suporte
            </p>
        </div>
        <div className="right">
           
        </div>

    </CustomLoginPage>
)}