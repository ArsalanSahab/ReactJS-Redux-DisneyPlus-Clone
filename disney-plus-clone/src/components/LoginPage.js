import React from 'react'
import styled from 'styled-components'


function LoginPage() {
    return (
        <Container>

                <CTA>

                        <CTALogoPrimary src="/images/cta-logo-one.svg"/>
                        <SignUp>GET ALL THREE!</SignUp>
                        <Description>

                            Get Premier Access to Disney+, ESPN+ and Hulu. Binge your favorite Shows!
                            The Bundle Price will Increase by $1.

                        </Description>


                        <CTALogoSecondary src="/images/cta-logo-two.png"/>


                </CTA>

        </Container>
    )
}

export default LoginPage


const Container = styled.div 

`
        position: relative;
        height: calc(100vh - 70px);
        display: flex;
        align-items: top;
        justify-content: center;
        

        &:before {

            background-image: url("/images/login-background.jpg");
            background-position: top;
            background-size: cover;
            background-repeat: no-repeat;
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0.8;
            z-index: -1;

        }

`


const CTA = styled.div

`
            max-witdth: 650px;
            padding: 80px 40px;
            width: 80%;
            display: flex;
            flex-direction: column;
            margin-top: 100px;
            align-items: center;



`


const CTALogoPrimary = styled.img

`


`

const CTALogoSecondary = styled.img 

`
            width: 90%;


`

const SignUp = styled.a

`
            width: 100%;
            background-color: #0063e5;
            font-weight: bold;
            padding: 17px 0px;
            color: #f9f9f9;
            border-radius: 4px;
            text-align: center;
            font-size: 18px;
            cursor: pointer;
            transition: all 250ms;
            letter-spacing: 1.5px;
            margin-top: 8px;
            margin-bottom: 12px;


            &:hover {

                background: #0483ee;
            }
`

const Description = styled.p

`

            font-size: 11px;
            letter-spacing: 1.5px;
            text-align: center;
            line-height: 1.5;

`