import React, {useState} from 'react'; 
import { IoIosArrowDropupCircle } from "react-icons/io";
import { Button } from './Styles'; 
  
const ScrollButton = () =>{ 
  
  const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 150){ 
      setVisible(true) 
    }  
    else if (scrolled <= 150){ 
      setVisible(false) 
    } 
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 
  
  return ( 
    <Button> 
     <IoIosArrowDropupCircle onClick={scrollToTop}  
     style={{display: visible ? 'inline' : 'none'}} /> 
    </Button> 
  ); 
} 
  
export default ScrollButton; 