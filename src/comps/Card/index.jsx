import styled from "styled-components";
import Colors from "../../assets/Colors";
import img from "../../assets/img";





export default function Card(props) {
   
    var CustomCard = styled.div`

        width: 25vw;
        height: 40vh;
        background: linear-gradient( to left, ${Colors.bg} 0%, ${Colors.black} 50%, ${Colors.bg}  100%);
        border-radius: 9px;
        transition: all 1s;
        margin: 10px 5px;
        .title{
            color: ${Colors.white};
            font-size: 18pt;
        }
        .btn{

        }
       
    ` 
    return(

        <>
 

        <CustomCard >
           <p className="title">
            Dashboard
           </p>
           <div className="btn">
           <box-icon type='solid' name='right-arrow' />
           </div>
        </CustomCard>  

 
        </>

    )
}