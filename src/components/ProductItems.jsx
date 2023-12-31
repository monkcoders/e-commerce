import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import styled  from "styled-components"
import { Mobile } from "../Responsive";

const Info=styled.div`
opacity:0;
width:100%;
height:100%;
position :absolute;
top:0;
left:0;
  background-color: rgba(0,0,0,0.2);
  z-index: 3;
  display:flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  cursor:pointer;
  
`

const Container = styled.div`
  flex:1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #faf7f7;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }

  

`

const Circle=styled.div`
  width:200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position:absolute;
  `
const Image=styled.img`
z-index: 2;
height: 75%;

`

const Icon=styled.div`
  width:40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:10px;
  transition: all 0.5s ease ;

  &:hover{
    background-color: #f4f7f8;
    transform: scale(1.1);


  }
`

 const ProductItems = ({item}) => {
  return (
    <Container>
        <Circle/>
        
        <Image src={item.img}/>
        <Info>
          <Icon>
            <ShoppingCartOutlined/>
          </Icon>
          <Icon>
            <SearchOutlined/>
          </Icon>
          <Icon>
            <FavoriteBorderOutlined/>
          </Icon>
        </Info>
    </Container>
  )
}

export default ProductItems;
