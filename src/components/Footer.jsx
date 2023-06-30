import {  Business, Email, Facebook, Instagram, LinkedIn, LocalPhone, Twitter } from "@mui/icons-material";
import styled from "styled-components";
import { Mobile} from "../Responsive";

const Container = styled.div`
  display: flex;
  ${Mobile({flexDirection:"column"})}

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`

`
const Desc = styled.p`
    margin: 20px 0;
`

const SocialContainer = styled.div`
    display: flex;
    align-items: center;
`
const SocialIcon = styled.div`
width: 37px;
height: 37px;
border-radius: 50%;
color: white;
background-color:#${(props) => (props.color)};;
display: flex;
align-items: center;
justify-content:center;
margin: 10px;

    
`




const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${Mobile({display:"none"})}

`;

const Title = styled.h3`
margin-bottom: 20px;
`
const List = styled.ul`
margin:0;
padding:0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

`

const ListItem = styled.li`
width: 50%;
`




const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${Mobile({backgroundColor:"#f0f3f3"})}

`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    height: 30px;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Abhishek.</Logo>
                <Desc>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam magnam, maiores nesciunt deserunt dolorem nisi rerum laudantium, voluptatibus natus rem nostrum ipsa architecto alias necessitatibus vitae quos adipisci distinctio repellendus?
                </Desc>
                <SocialContainer>
                    <SocialIcon color="1877f2">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="e62155">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="4c88ea">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="0a66c2">
                        <LinkedIn />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>


            </List>
            </Center>
            <Right>
                <Title>Contact </Title>
                <ContactItem>
                <Business style={{marginRight:"10px"}}/>302C Rajendra Nagar, Indore
            </ContactItem>
            <ContactItem >
                <LocalPhone style={{marginRight:"10px"}}/>
                +91 12345 67890
            </ContactItem>
            <ContactItem>
                <Email style={{marginRight:"10px"}}/>contact@abhishek.dev
            </ContactItem>
            <Payment src="https://www.pngmart.com/files/7/Payment-Background-PNG.png"/>
            </Right>
        </Container>
    );
};

export default Footer;
