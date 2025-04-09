import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from '../components/AllSvgs';

const Container = styled.div`
  position: relative;
`;

const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-100%);
`;

const PreDisplay = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
`;

const RotatedImage = styled.img`
  width: 70px;
  height: 70px;
  transform: rotate(-95deg) scaleY(-1); /* Adjust the angle as needed */
  margin-right: 2rem; 
`;

const AnchorComponent = (props) => {
  const ref = useRef(null);
  const hiddenRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.pageYOffset;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;

      let diff = Math.max(bodyHeight - (scrollPosition + windowSize));
      let diffP = (diff * 100) / (bodyHeight - windowSize);

      ref.current.style.transform = `translateY(${-diffP}%)`;

      if (window.pageYOffset > 5) {
        hiddenRef.current.style.display = 'none';
      } else {
        hiddenRef.current.style.display = 'block';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container>
      <PreDisplay ref={hiddenRef} className='hidden'>
        {/* Use the RotatedImage component instead of the img tag */}
        <RotatedImage src="/blade-removebg-preview.png" alt="Your Image" />
      </PreDisplay>
      <Slider ref={ref}>
        {[...Array(props.number)].map((x, id) => {
          return <Link key={id} width={25} height={25} fill='currentColor' className="chain" />;
        })}
        {/* Use the RotatedImage component instead of the img tag */}
        <RotatedImage src="/blade-removebg-preview.png" alt="Your Image" />
      </Slider>
    </Container>
  );
}

export default AnchorComponent;
