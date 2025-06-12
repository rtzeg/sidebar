import { useState } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];



const SidebarContainer = styled.div`
  background-color: ${({ theme }) => theme.sidebarBgDefault};
  width: ${({ $isOpened }) => ($isOpened ? '250px' : '80px')};
  transition: width 0.3s ease;
  height: 100dvh;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`;
const SidebarTop = styled.div`
    position: relative;
    overflow: ${({ $isOpened }) => ($isOpened ? 'hidden' : 'none')};;
    background-color: ${({ theme }) => theme.sidebarTopBg};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 50px;
    padding-left: 10px;
`;
const SpanLogo = styled.span`
    color: ${({ theme }) => theme.logoText};
    margin-right: auto;
    font-size: 30px;
    transition: 500ms color ease;
    &:hover {
        color: ${({ theme }) => theme.textHover};
    }
`;
const Img = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 30px;
    `;
const SidebarMiddle = styled.div`
padding-left: 10px;
padding-top: 50px;
margin-bottom: auto;
width: 100%;
`;
const SidebarDivItem = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'active',
})`
    position: relative; 
    width: 70%;
    height: 48px;
    display: flex;
    align-items: center;
    padding: 0 12px;
    font-size: 24px;
    border-radius: 10px;
    background-color: ${({ active, theme }) =>
        active ? theme.sidebarBgActive : theme.sidebarBgDefault};
    transition: 300ms all ease;
    cursor: pointer;
  
    span, svg {
      color: ${({ active, theme }) =>
        active ? theme.textActive : theme.textDefault};
      transition: color 300ms ease;
    }
  
    &:hover {
      background-color: ${({ theme }) => theme.sidebarBgHover};
  
      span, svg {
        color: ${({ theme }) => theme.textHover};
      }
  
      .hover-bubble {
        opacity: 1;
      }
    }
  `;
const HoverBubble = styled.span`
  position: absolute;
  left: 100%;
  justify-content: center;
  display: flex;
  opacity: 1;
  font-size: 24px;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${({ theme }) => theme.logoText};
  color: ${({ theme }) => theme.buttonBgDefault} !important;
  padding: 6px 12px;
  border-radius: 20px;
  white-space: nowrap;
  font-size: 24px;
  margin-left: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 10;
`;
const Title = styled.span`
    color: ${({ theme }) => theme.textDefault};
    margin-left: 8px;
    font-size: 24px;
    transition: 500ms color ease;
`;
const StyledIcon = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.textDefault};
  transition: color 300ms ease;
`;
const SidebarBottom = styled.div`
padding-left: 10px;
width: 100%;
`
const ToggleButton = styled.div`
  width: 36px;
  height: 36px;
  background-color: ${({ theme, $isOpened }) =>
        $isOpened ? theme.buttonBgDefault : theme.buttonBgActive};
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: absolute;
  right: -20%;
  &:hover {
    background-color: ${({ theme }) => theme.buttonBgActive || '#c0c0c0'};
  }
`;
const ToggleArrow = styled(FontAwesomeIcon)`
  font-size: 20px;
  transition: transform 0.3s ease;
  transform: ${({ $isOpened }) => ($isOpened ? 'rotate(180deg)' : 'rotate(0deg)')};
  color: ${({ theme }) => theme.textDefault};
`;
const Sidebar = (props) => {
    const [isOpened, setIsOpened] = useState(false);
    const containerClassnames = classnames('sidebar', { opened: isOpened });
    const [activeRoute, setActiveRoute] = useState('/');
    const goToRoute = (path) => {
        setActiveRoute(path);
        console.log(`going to "${path}"`);
    };

    const toggleSidebar = () => {
        setIsOpened(v => !v);
    };

    return (
        <SidebarContainer className={containerClassnames} $isOpened={isOpened}>
            <SidebarTop>
                <Img src={logo} alt="TensorFlow logo" />
                {isOpened && <SpanLogo>TensorFlow</SpanLogo>}
                <ToggleButton $isOpened={isOpened} onClick={toggleSidebar}>
                    <ToggleArrow icon="angle-left" $isOpened={isOpened} />
                </ToggleButton>
            </SidebarTop>
            <SidebarMiddle>
                {
                    routes.map(route => (
                        <SidebarDivItem
                            key={route.title}
                            onClick={() => goToRoute(route.path)}
                            active={activeRoute === route.path}
                        >
                            <StyledIcon icon={route.icon} />
                            {isOpened
                                ? <Title>{route.title}</Title>
                                : <HoverBubble className="hover-bubble">{route.title}</HoverBubble>}
                        </SidebarDivItem>
                    ))
                }
            </SidebarMiddle>
            <SidebarBottom>
                {
                    bottomRoutes.map(route => (
                        <SidebarDivItem
                            key={route.title}
                            onClick={() => goToRoute(route.path)}
                            active={activeRoute === route.path}
                        >
                            <StyledIcon icon={route.icon} />
                            {isOpened
                                ? <Title>{route.title}</Title>
                                : <HoverBubble className="hover-bubble">{route.title}</HoverBubble>}
                        </SidebarDivItem>
                    ))
                }
            </SidebarBottom>
        </SidebarContainer>
    );
};

Sidebar.propTypes = {
    // color: PropTypes.string,
};

export default Sidebar;
