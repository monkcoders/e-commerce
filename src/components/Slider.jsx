import { useState } from "react";
import { sliderItems } from "../data";
import { Mobile } from "../Responsive";

const {
  ArrowLeftOutlined,
  ArrowRightOutlined,
} = require("@mui/icons-material");
const { styled } = require("styled-components");

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${Mobile({display:"none"})}

`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  z-index:2;
`;
//translatex is used to translate or move an html element -100vw means moves the element twards left that is 
//                  elementHereAtFirst
//          elemeyHereAfterwards -100vw

//it is when negative value are passed 
//vw means viewport width and hence translate 100% of the viewport width
//if positive values are passed 
//            elementFiesthere
//                      elementaftertranslate100vw      
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform:translateX(${props=>props.index*-100}vw);
  
`;

//vh/wh/% are all similar but the main difference is that % talks with respect to parent div where as vh/wh talks with respect to the viewport i.e 100vh means 100% of the height of the viewpot and not of the div

const Slides = styled.div`
  background-color: #${(props)=>props.bg};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`

const Image = styled.img`
  height: 80%;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  text-align: center;
`;

const InfoContaiiner = styled.div`
  flex: 1.5;
  padding: 50px;
  
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;




const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0);
    
    function handleClick(direction){
        if(direction==="left"){
            setSlideIndex(slideIndex>0?slideIndex-1:2)
        }else{
            setSlideIndex(slideIndex>=2? 0:slideIndex+1)
        }

    }
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper index={slideIndex}>
        {sliderItems.map(item=>(
            <Slides bg={item.bg} key={item.id}>
          <ImgContainer>
            <Image src={item.img} />
          </ImgContainer>
          <InfoContaiiner>
            <Title>{item.title}</Title>
            <Desc>
              {item.desc}
            </Desc>
            <Button>SHOW NOW</Button>
          </InfoContaiiner>
        </Slides>
        ))}
        


        
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
