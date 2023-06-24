import React from "react";
import styled from 'styled-components';

//styled div is used to give css styles itself in the js file we simply have to import styled-components packages and then wherever we want to style we simply write 
//style.htmlTagToStyle`all css styles inside the backtics its similar to add container class to a div `

//if the same css class is applied with changing the bg color in normal css styling then the background of the parent will be given to children too and there wont be any effect of the new styling given to the childrens hence it is better to use styled components as it removes this issue

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
`
//when all are set to flex=1 then all will be of same width 
const Left = styled.div`
    flex:1;
`
const Language = styled.span`
    font-size:14px;
    cursor:pointer;
`



const Center = styled.div`
flex:1;

`
const Right = styled.div`
flex:1;

`

const Navbar = ()=>{
    return(
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                </Left>
                <Center>center</Center>
                <Right>right</Right>
            </Wrapper>
        </Container>
    );

}
export default Navbar;