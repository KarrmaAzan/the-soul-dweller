import  { useEffect, useState } from 'react'
import styled from 'styled-components'
import img from "/cover.jpg"
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons  from '../subComponents/SocialIcons'
import PowerButton  from '../subComponents/PowerButton'

// import {Blogs} from '../data/BlogData';
// import BlogComponent from './BlogComponent'
import AnchorComponent from '../subComponents/Anchor'
import BigTitle from "../subComponents/BigTitlte"
import { motion } from 'framer-motion'


const MainContainer = styled(motion.div)`
  position: relative;
  min-height: 300vh;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.5;
    z-index: -1;
  }

  @media screen and (max-width: 320px) {
    &:before {
      background-size: cover; /* Set to cover for screens with max-width: 320px */
      margin-top: -50px;
    }
  }
`;

// const Container = styled.div`
// background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
// width: 100%;
// height:auto;

// position: relative;
// padding-bottom: 5rem;
// `

// const Center = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// padding-top: 10rem;
// `

// const Grid = styled.div`
// display: grid;
// grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
// grid-gap: calc(1rem + 2vw);
// `

// // Framer-motion config
// const container = {

//     hidden: {opacity:0},
//     show: {
//       opacity:1,
  
//       transition:{
//         staggerChildren: 0.5,
//         duration: 0.5,
//       }
//     }
  
//   }

const BlogPage = () => {

    const [numbers, setNumbers] = useState(0);

    useEffect(() => {
        let num = (window.innerHeight - 70)/30;
        setNumbers(parseInt(num));
    }, [])


    // return (
        // <MainContainer
        // variants={container}
        // initial='hidden'
        // animate='show'
        // exit={{
        //     opacity:0, transition:{duration: 0.5}
        // }}
        // >
            {/* <Container> */}
                // <LogoComponent />
                // <PowerButton />
                // <SocialIcons />
                // <AnchorComponent number={numbers}/>
{/* <Center> */}
{/* <Grid> */}

{/* {
    Blogs.map(blog => {
        return <BlogComponent key={blog.id} blog={blog} />
    })
} */}
{/* </Grid> */}
{/* 
</Center> */}
{/* <BigTitle text="Books" top="5rem" left="5rem" />
            {/* </Container> */}
        // </MainContainer> */}
        return (
            <MainContainer>
              <LogoComponent />
              <PowerButton />
              <SocialIcons />
              <AnchorComponent number={numbers} />
          
              {/* Commented out the mapping of blogs */}
              {/* <Grid>
                {Blogs.map(blog => (
                  <BlogComponent key={blog.id} blog={blog} />
                ))}
              </Grid> */}
          
              <BigTitle text="Books" top="5rem" left="1rem" />
            </MainContainer>
          );
}

export default BlogPage
