import React from 'react'
import styled from 'styled-components'

function Info() {
    return (
        <Container>
            
            <Background>

                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDWGy8PjSNnh49xx04U1ylc5KW9xQA9qV8wiqgV9NQAyicvGjlGHTMgNZXY5wi2tc049I&usqp=CAU" />

            </Background>

            <ImageTitle>

                    <img src="" />

            </ImageTitle>

            <Controls>

                    <PlayButton>

                            <img src="/images/play-icon-black.png" />
                            <span>PLAY</span>

                    </PlayButton>

                    <TrailerButton>

                            <img src="/images/play-icon-white.png" />
                            <span>TRAILER</span>

                    </TrailerButton>

                    <AddToPlaylistButton>

                    </AddToPlaylistButton>

                    <GroupWatchButton>

                    </GroupWatchButton>


            </Controls>

        </Container>
    )
}

export default Info



const Container = styled.div 

`
        min-height: calc(100vh - 70px);
        padding: 0 calc(3.5vw + 5px);
        position: relative;

`

const Background = styled.div 

`
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        opacity: 0.8;

        img {

            width: 100%;
            height: 100%;
            object-fit: cover;
        }




`

const ImageTitle = styled.div

`
        height: 30vh;
        width: 35vw;
        min-height: 170px;
        min-width: 200px;

        img {

            width: 100%;
            height: 100%;
            object-fit: contain;
        }

`

const Controls = styled.div

`



`

const PlayButton = styled.button

`

                padding: 0px 24px;
                margin-right: 22px;
                display: flex;
                align-items: center;
                height: 56px;
                background: rgb(249, 249, 249);
                border: none;
                letter-spacing: 1.8px;
                cursor: pointer;


                &:hover {

                        background: rgb(198, 198, 198);
                }

`


const TrailerButton = styled(PlayButton)

`

                background: rgba(0, 0, 0, 0.3);
                border: 1px solid rgb(249, 249, 249);
                color: rgb(249, 249, 249);

`


const AddToPlaylistButton = styled.button

`

`


const GroupWatchButton = styled.button

`


`