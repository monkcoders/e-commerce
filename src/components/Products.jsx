import styled from 'styled-components'
import { popularProduct } from '../data';
import ProductItems from './ProductItems';

const Container = styled.div`
    padding:20px;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;

`;

const Product =()=>{
    return (
        <Container>

            {popularProduct.map((item)=>(
                
                <ProductItems item={item} key={item.id}/>
            

            ))} 
                
        </Container>
    );
}

export default Product;