import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import { Add, Remove } from '@mui/icons-material'
import { Mobile } from '../Responsive'




const Container = styled.div`

`

const Wrapper =styled.div`
    display: flex;
    padding: 50px;
  ${Mobile({padding:"10px", flexDirection:"column"})}


`
const ImgContainer = styled.div`
flex:1;
` 

const Image =styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${Mobile({height:"40vh"})}


`

const InfoContainer =styled.div`
flex: 1;
padding: 0px 50px;
${Mobile({padding:"10px"})}



`
const Title =styled.h1`
  
    font-weight: 200;
   
`
const Desc =styled.p`
margin: 20px 0;

`
const Price = styled.span`
    font-size: 40px; 
    font-weight: 100;
`

const FilterContainer = styled.div`

width: 50%;
margin: 30px 0px;
display: flex;
align-items: center;
justify-content: space-between;
${Mobile({width:"100%"})}

`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor =styled.div`
    width: 20px;
    height: 20px;
    border-radius:50%;
    background-color: ${props=>props.color};
    margin: 0 5px;
    cursor: pointer;
`
    
const FilterSize = styled.select`
padding: 5px;
margin-left: 10px; 
`;
const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
width:50%;
display: flex;
justify-content: space-between;
align-items: center;
${Mobile({width:"100% "})}

`

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
` 
const Amount = styled.span`
height: 30px;
width: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`





const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    font-weight: 500;
    cursor: pointer ;

    &:hover{
        background-color: #f8f4f4;
    }

`

const Product = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>

        <Wrapper>
            <ImgContainer>
            <Image src="https://th.bing.com/th/id/OIP.N-48HOu0DhNpU5MZSicGDwHaKk?w=186&h=265&c=7&r=0&o=5&pid=1.7"/>
            </ImgContainer>
            <InfoContainer>
                <Title>
                    Denim Jeans
                </Title>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ea enim, totam tempora tempore aliquam molestiae officia deserunt consectetur dignissimos voluptatibus voluptas maxime adipisci quas error harum voluptate! Labore, eligendi.
                </Desc>
                <Price>$ 40</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                 
                <FilterColor color="black"/>
                <FilterColor color="white"/>
                <FilterColor color="blue"/>
                <FilterColor color="gray"/>
</Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                <FilterSize>
                    <FilterSizeOption selected>XS</FilterSizeOption>
                    <FilterSizeOption selected>S</FilterSizeOption>
                    <FilterSizeOption selected>M</FilterSizeOption>
                    <FilterSizeOption selected>L</FilterSizeOption>
                    <FilterSizeOption selected>XL</FilterSizeOption>
                    
                </FilterSize>
                </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                   <Remove /> 
                   <Amount>1</Amount>
                   <Add />
                   </AmountContainer>

                <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
            
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )

}

export default Product;