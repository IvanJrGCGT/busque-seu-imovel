import styled from "styled-components";
import Colors from "../../assets/Colors";

export default function Atividades(props) {
    const CustomAtividades = styled.div`
        width: 20vw;
        height: 100vh;
        display: flex;
        align-items: center;
        text-align: center;
        .div{
            background-color: ${Colors.black};
            width: 20vw;
            height: 90vh;
            border-radius: 9px;
            border: solid 1px #ffffff1a;
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;
            justify-content:  center;
                .title{
                    color: ${Colors.white};
                    font-size: 15pt;
                    margin: 10px 0;
                }
                .divisor{
                    border: solid 1px #ffffff99;
                    border-radius: 100%;
                    width: 14vw;
                    margin-bottom: 50px;
                }
                .item{
                    width: 18vw;
                    height: 6vh;
                    margin-top: 10px;
                    background-color: ${Colors.black3};
                    border-radius: 9px;
                    border: solid 1px #ffffff1a;
                    text-align: center;
                    align-items: center;
                    justify-content: center;
                    display: flex;
                }
                .item:hover{
                    background-color: ${Colors.black4};
                    border: solid 1px ${Colors.red};
                    cursor: pointer;
                    color: ${Colors.white};
                }
                /* .btn{
                    background-color: #ffffff99;
                    color: ${Colors.bg};
                    width: 20%;
                    border-radius:10%;
                    margin: 4px 0;
                    transition: all .2s;
                    
                }
                .btn:hover{
                    background-color: ${Colors.bg};
                    color: ${Colors.white};
                    cursor: pointer;

                    transition: all .2s;
                    
                } */
        }
    
    `

    return(<CustomAtividades>
        <div className="div">
            <div className="one">
                <p className="title">
                    Atividades
                </p>
                <p id="hidden" className="title btn">
                <box-icon name='bell-minus' color={Colors.red} type='solid' ></box-icon>
                </p>
                <div className="divisor" />
            </div>
            {/* <div className="two">
                <div className="categorias">
                    <div className="item">Financeiro</div>
                    <div className="item">Imoveis</div>
                    <div className="item">Vendas</div>
                    <div className="item">Visitas</div>                
                </div>
            </div> */}
        </div>


    </CustomAtividades>)
}