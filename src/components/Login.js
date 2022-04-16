import styled from 'styled-components';

const Login= (props)=>{
return (
    <Container>
        <Nav>
            <a href='/'>
                <img src='/images/login-logo.svg' alt=''/>
             </a>
             <div>
                 <Join>Join Now</Join>
                 <Signin>Sign in</Signin>
             </div>
        </Nav>
        <Section>
            <Hero>
                <h1>Welcome to your professional community</h1>
                <img src="/images/login-hero.svg"/>
            </Hero> 
            <Form>
                <Google>
                    <img src='/images/google.svg'/>
                    <h1>Sign in With Google</h1>
                </Google>
            </Form>
        </Section>
    </Container>

);
}

export default Login;

const Container=styled.div`
padding:0px;
`
const Nav=styled.div`
max-width:1128px;
padding:12px 0px 16px;
display:flex;
align-items:center;
justify-content:space-between;
flex-wrap:nowrap;
margin:0px;
postion:relative;

&>a{
    width:135px;
    height:34px;
    @media(max-width:768px){
        padding:0 5px;
    }

}
`


const Join=styled.a`
    font-size:16px;
    padding:10px 12px;
    text-decoration:none;
    color:rgba(0,0,0,0.6);
    margin-right:12px;
    border-radius:4px;
    &:hover{
        background-color: rgba(0,0,0,0.08);
        color:rgba(0,0,0,0.9);
        text-decoration:none;
    }
`
const Signin=styled.a`
    box-shadow:inset 0 0 0 1px #0a66c2;
    color:#0a66c2;
    border-radius:24px;
    margin-height:4px;
    transaction-duration:167ms;
    font-size:16px;
    font-weight:600;
    line-hight:40px;
    padding:10px 24px;
    text-align:center;
    background-color:rgba(0,0,0,0);
    &:hover{
        background-color:rgba(112,181,249,0.15);
        color:#0a66c2;
        text-decoration:none;
    }

`
const Section=styled.section`
display:flex;
align-content:start;
min-height:700px;
padding-bottom:138px;
padding-top:40px;
padding:60px 0;
position:relative;
flex-wrap:wrap;
max-width:1128px;
width:100%;
align-items:center;
margin:auto;

@media(max-width:768px){
    margin:auto;
    min-height:0px;
}
`
const Hero=styled.div`
width:100%;
h1{
    padding-bottom:0;
    width:55%;
    font-size:56px;
    color:#2977c9;
    line-height:70px;
    @media(max-width:768px){
        font-size:20px;
        text-align:center;
        width:100%;
        line-height:2;
    }
}

img{
    z-index:-1;
    width:700px;
    height:680px;
    position:absolute;
    bottom:-2px;
    right:-150px;
    @media (max-width:768px){
        top:290px;
        width:initial;
        position:initial;
        height:initial;
    }

}
`
const Form=styled.div`
    margin-top:100px;
    width:488px;
    @media(max-width:768px){
        margin-top:20px;
    }
`

const Google=styled.button`
    display:flex;
    justify-content:center;
    width:100%;
    align-items:center;
    height:56px;
    background-color:#fff;
    border-radius:28px;
    box-shadow:inset 0 0 0 1px rgb(0 0 0/60%) 
    inset 0 0 0 2px rgb(0 0 0/0) inset 0 0 0 1px rgb(0 0 0/0%);

    vertical-align:center;
    z-index:0;
    transition-duration:167ms;
    font-size:20px;
    color:rgba(0,0,0,0.6);
    &:hover{
        background-color:rgba(207,207,207, 0.25);
        color:rgba(0,0,0,0.75);
    }
`