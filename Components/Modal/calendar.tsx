import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { Theme } from "../../styles/theme";

type CalendarProps = {
  active:Boolean,
}
type KeyPress = {
  code:String,
}

/**
 * @description get the diameter of the circle
 * @param {Boolean} active is the modal active?
 */
const diameter = (active: Boolean) => active? `300vmax`: "132px"


const CalendarButton = styled.button<CalendarProps>`
  position: fixed;
  overflow: hidden;
  right: 0px; 
  top: 0px; 
  transform: translate(50%, -50%);
  bottom: 0%;  
  border-radius: 50%;
  width: ${(props) => diameter(props.active)}; 
  height: ${(props) => diameter(props.active)}; 
  background: ${Theme.colors.purpleBase};
  cursor:${(props) => props.active? 'default': 'pointer'};
  transition: 2s;
  border-color: #fff;
  border: 0;
  & :focus {
    outline: 0px;
    border: 3px;
    border-color: #CCC;
    border-style: solid;
  }
  
`

/** @description Style for the close button (it is a div because buttons have to many styles) */
const StyledClose = styled.button<CalendarProps>`
  position: fixed;
  opacity: ${(props) => props.active? '1': '0'};
  background: rgba(0,0,0,0) ;
  width: 25px;
  height: 25px;
  right: 10px;
  top: 10px;
  border: 2px solid;
  border-color: #fff;
  cursor: pointer;
  border-radius: 50%;
  transition: 2s;
  display:flex;
  vertical-align: middle;
  & :focus {
    outline:0px;
    border-color: #CCC;
  }
  & span { 
    transition: 2s;
    font-size: 1em;
    color: #FFF;
    margin: auto;
    text-align: center;
  }
`

/**@description this is the style for the container of the content in the modal have some delay in transitions  */
const Content = styled.div<CalendarProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${(props) => props.active? '1;': '0'};
  transition:${(props) => props.active? '2s 1.5s': '0.5s'}; 
`

/** @description style for de icon this section have some delay in transitions */
const IconContainer = styled.div<CalendarProps>`
  position: fixed;
  width: ${(props) => props.active? '25vmin;': '30px'};
  top: ${(props) => props.active? '50%;': '25px'};
  right: ${(props) => props.active? '50%;': '25px'};
  transform: translate(50%, -50%);
  opacity: ${(props) => props.active? '0': '1'};
  transition-delay: 5s;
  cursor: pointer;
  transition:${(props) => props.active? '2s': '1.5s 0.5s'}; 
  & svg {
    fill: ${(props) => props.active? '#CCC': '#FFF'};
  }
`
/* content and iconContainer have delay in layout 

active = true => content have delay
active = false => icon have delay and content fade out faster
*/

// this is for test only
// const Line = styled.div`
// width:400px;
// height: 30px;
// background: #fff;
// margin-bottom: 20px;
// `

/** @description this is the modal to display the calendar button, the children's are displayed inside a div centered in the screen */
const ModalCalendar: React.FC = ({ children }) => {
  const [active, setActive] = useState(false);
  const close = () => setActive(false);
  const open = () => setActive(true);
  const log = (e:KeyPress) => {
    /* support close on Escape press */
    if(e.code === "Escape") close()
  }
  useEffect(()=>{
    if (process.browser) {
      // client-side-only code
      document.addEventListener("keydown",(e) =>log(e), false);
      return document.removeEventListener("keydown", (e) =>log(e), false);
    }
  },[])
  return (
  <> 
  <CalendarButton onClick={() => {if(!active) open()}} active={active} />
  <StyledClose onClick={() => close()} active={active} >
    <span>X</span>
  </StyledClose>
  <IconContainer active={active} onClick={() => {if(!active) open()}}>
    {/* this is the svg of the calendar */}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"/></svg>
  </IconContainer>
  <Content active={active} > 
    { children }
    {/* {[1,2,3,4].map((i) => <Line key={i}> hola </Line>)} */}
  </Content>
  </>)
};
export default ModalCalendar