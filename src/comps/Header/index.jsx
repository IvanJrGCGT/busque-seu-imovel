import styled from "styled-components";
import Colors from "../../assets/Colors";
import img from "../../assets/img";


export default function Header(props) {
    var CustomHeader = styled.div`
        width: 100vw;
        height: 13vh;
        display: flex;
        flex-direction: row;
        background-color: ${Colors.black};
        text-align: center;
        align-items: center;
        justify-content: space-around;
        .logo{
            width: 20%;
            height: 100%;
            background: url(${img.logo});
            background-size: contain;
            background-repeat: no-repeat;
            transition: all .2s;
            background-position: 60px;
        }
        .logo:hover{
                cursor: pointer;

        }
        .src{
            width: 40%; 
            height: 45% ;
            input{
                width: 100%;
                height: 100%;
                border-radius: 9px;
                border: #888888 solid 1px;
                background-color: ${Colors.grey};
                transition: all .2s;
                color: white;
                text-align: center;

            }
            input:hover{
                width: 105%;
                color: white;
                border-radius: 9px;
                border: #ffffff solid 1px;
                text-align: center;


            }
        }    
        .menu{
            width:  40% ;
            height: 80% ;
            display: flex;
            flex-direction: row;
            text-align: center;
            align-content: center;
            justify-content: space-around;
            .subMenu{
            width:  80% ;
            height: 80% ;
            display: flex;
            flex-direction: row;
            text-align: center;
            align-content: center;
            justify-content:center;
            }
            .item{
                list-style: none;
                color: white;
                margin-right: 10px;
                transition: all .2s ;
                border-radius: 9px;
                width:60% ;
                height: min-content;


            }
            .item:hover{
                color: ${Colors.red};
                cursor: pointer;
                background-color: ${Colors.grey};

                height: min-content;
                margin-right: 15px;
                padding: 5px;
                border-radius: 9px;

            }
        }
    
    `;
    
    return(
        <>
        <CustomHeader>
            <div className="logo" />
            <div className="src">
                <input type="text" name="Buscar" id="src" />
            </div>
            <div className="menu">
                <ul className="subMenu">
                    <li className="item">
                        Inicio
                    </li>
                    <li className="item">
                        Apartamentos
                    </li>
                    <li className="item">
                        Casas
                    </li>
                    <li className="item">
                        Lotes
                    </li>
                </ul>
            </div>
        </CustomHeader>
        </>
    )
}