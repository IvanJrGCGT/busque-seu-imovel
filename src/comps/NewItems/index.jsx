import styled from "styled-components";
import Colors from "../../assets/Colors";


export default function NewItems(props) {

    var Tela = styled.div`
    width:100vw;
    height: 130vh;
    background-color: ${Colors.black};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    color: #FFF;

    `
    var CustomNewItems = styled.div`
    width:100vw;
    height: 130vh;
    background-color: ${Colors.black};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    
    `
    var CustomCard = styled.div`
        width: 20vw;
        height: 55vh;
        border-radius: 9px;
        background-color: ${Colors.grey};
        margin: 10px;
        border: solid 1px #ffffff36;
        transition: all .2s;
        :hover{
            border: solid 1px #ffffff92;

        }

    `

    return(
        <Tela>                
        <h2 className="title">Items recentes:</h2>
            <CustomNewItems>
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
 

            </CustomNewItems>
        </Tela>
    )
}           