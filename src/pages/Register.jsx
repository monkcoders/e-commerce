
import styled from 'styled-components'
import { Mobile } from '../Responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:no-repeat  linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.2)), url("https://i.pinimg.com/originals/f5/43/d7/f543d74332fae1e0fe2cd64f9c0ea2fb.jpg") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

`

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
  ${Mobile({width:"80%"})}

    
`
const Title = styled.h1`
font: 24px;
font-weight: 300;
text-align: center;

`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

`

const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;


`
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;


`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    text-align: center;

`

const Register = () => {
  return (
    <Container>
        <Wrapper>
           <Title>CREATE AN ACCOUNT</Title>
           <Form>
                <Input placeholder='name'/>
                <Input placeholder='last name'/>
                <Input placeholder='username'/>
                <Input placeholder='email'/>
                <Input placeholder='password'/>
                <Input placeholder='confirm password'/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form> 
        </Wrapper>
    </Container>
  )
}

export default Register;