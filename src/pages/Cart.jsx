import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter' 
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
import { Mobile } from '../Responsive'

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 20px;
  ${Mobile({padding:"10px"})}

`
const Title = styled.h1`
font-weight: 300;
text-align: center;

`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;

`
const TopTexts = styled.div`
  ${Mobile({display:"none"})}


`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;

border: ${props=>props.type==="filled" && "none"};
background-color: ${props=>props.type==="filled"? "black" : "transparent"};
color: ${props=>props.type==="filled" && "white"};

`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
  ${Mobile({flexDirection:"column"})}
    
`

const Info = styled.div`
    flex:3;
`

const Product  = styled.div`
    display: flex;
    justify-content: space-between;
  ${Mobile({flexDirection:"column"})}

    `
const ProductDetails = styled.div`
    flex: 2;
    display: flex;
    `
const Image  = styled.img`
width: 200px;
padding: 20px;

`
const Details  = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;

`

const ProductName  = styled.span`

`
const ProductId  = styled.span`

`

const ProductColor  = styled.div`
    width: 20px;
    height: 20px;
    border-radius:50%;
    background-color: ${props=>props.color};
    `
const ProductSize  = styled.span`


`

const PriceDetail  = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${Mobile({margin:"5px 15px"})}

`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
${Mobile({marginBottom:"20px"})}


`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
    
`


const Summary = styled.div`
     flex:1;
     border: 0.5px solid lightgray;
     border-radius: 10px;
     padding: 20px;
     height: 50vh;

 `
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
margin: 30px 0;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type==="total" && "500"};
font-size: ${props=>props.type==="total" && "24px"};

`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;    
`

const Cart = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                    

                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>

                <Info>
                    <Product>
                        <ProductDetails>
                            <Image  src="https://www.fc-moto.de/WebRoot/FCMotoDB/Shops/10207048/59B1/0019/00AA/6BDE/9E93/4DEB/AE70/76F6/4749426_Y52_F_ml.jpg"/>
                            <Details>
                                
                                <ProductName><b>Product:</b> Ladies Jacket</ProductName>
                                <ProductId><b>ID:</b> 9673835232</ProductId>
                                <ProductColor color="darkcyan"/>
                                <ProductSize><b>Size:</b> M</ProductSize>
                            </Details>
                        </ProductDetails>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 40</ProductPrice>
                            </PriceDetail>

                    </Product>
                    
                    <Hr />

                    <Product>
                        <ProductDetails>
                            <Image  src="https://media.samyakk.com/catalog/product/h/a/ha3053.jpg"/>
                            <Details>
                                
                                <ProductName><b>Product:</b> Silk Bridal Lehenga</ProductName>
                                <ProductId><b>ID:</b> 9673835577</ProductId>
                                <ProductColor color="darkviolet"/>
                                <ProductSize><b>Size:</b> M</ProductSize>
                            </Details>
                        </ProductDetails>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>1</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 1000</ProductPrice>
                            </PriceDetail>

                    </Product>
                    
                </Info>
                <Summary>
                    <SummaryTitle>
                        ORDER SUMMARY
                    </SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>
                            Subtotal
                        </SummaryItemText>
                        <SummaryItemPrice>$ 1080</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>
                            Estimated Shipping
                        </SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>
                            Shipping Discount
                        </SummaryItemText>
                        <SummaryItemPrice>- $ 5.90 </SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >
                            Total
                        </SummaryItemText>
                        <SummaryItemPrice>$ 1080</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
         
        <Newsletter/>
        <Footer/>

    </Container>
  )
}

export default Cart;
