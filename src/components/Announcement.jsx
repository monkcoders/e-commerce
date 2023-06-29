import Styled  from "styled-components";

const Container = Styled.div`
    height:30px;
    background-color:teal;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:500;
`
 

const Announcement = () =>{
    return (
        <Container>
            Super Deal! free shipping on orddrs over Rs. 500 
        </Container>
    );
}

export default Announcement;