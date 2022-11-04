import styled from "styled-components";
import Colors from "../../assets/Colors";
import img from "../../assets/img";





export default function Card(props) {
   
   /* var CustomCard = styled.div`
   width: 100vw;
   height: 80vh;
    display: flex;
   flex-direction: row;
   align-items: center;
   text-align: center;
   justify-content: space-around;
    ` */
   var CardCard = styled.div`
   
        width: 30%;
        height: 80%;
        background: linear-gradient( #00000080 0%,  #00000080 1000%) ,
         url(  ${props.image } ) ;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 9px;
        transition: all 1s;
        :hover{        transition: all 1s;

            background: linear-gradient( #00000060 0%,  #00000060 1000%) ,
         url(  ${props.image2 }  ) ;
         width: 30%;
        height: 80%;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 9px;
        }
        .text{
            display: flex;
            flex-direction: column;
            margin: 0;
            width: 100%;
            height: 25%;
            text-align: left;       
            margin-top: 40px;

               .title, .place{
                color: ${Colors.red};
                font-size: 24pt;
                margin: 0;
                margin-left: 25px;

            }
            .place{
                color: #ffffff;

                font-size: 18pt;  text-align: center;
                margin-right: 200px;


            }
        }
   
   `
    return(

        <>
 

        <CardCard img={img.PqMusique[3]}>
            <div className="img" />
            <div className="text">
                <p className="title">
                    {img.PqMusique[0]}
                    </p>
                <p className="place">
                {img.PqMusique[1]}
                </p>
               </div>
        </CardCard>  

 
        </>

    )
}