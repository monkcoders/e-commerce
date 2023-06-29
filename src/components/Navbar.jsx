import React from "react";
import styled from 'styled-components';

import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import { ShoppingCartOutlined } from "@mui/icons-material";

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
    align-items:center;

`
//when all are set to flex=1 then all will be of same width 
const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;

`
const Language = styled.span`
    font-size:14px;
    cursor:pointer;
`
//to align items veritically use align-items:center
//to bring items in a single row use  flex display property in the parent display:flex
//to specify the horizontal alignment use justify-content:space-between; 
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    // border-radius:px;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;

`

const Input= styled.input`
    border:none;

`
//for aligning text we use text-align property of css
const Center = styled.div`
    flex:1;
    text-align:center;

`

const Logo = styled.h1`
    font-weight:bold;
`

const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;


`

const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
`

const Navbar = ()=>{
    return(
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer style={{ color:"gray", fontSize:16  }}>
                        <Input/>
                        <SearchIcon/>
                    </SearchContainer>
                </Left>
                <Center><Logo>Abhishek</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                    <Badge badgeContent={6} color="primary">
                    <ShoppingCartOutlined
 color="action" />
                    </Badge>
                    </MenuItem>
                    
                </Right>
            </Wrapper>
        </Container>
    );

}
export default Navbar;