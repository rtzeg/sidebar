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
    width: 30%;
    height: 100dvh;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
`;
const SidebarTop = styled.div`
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
    margin-right: 10px;
    `;
const SidebarMiddle = styled.div`
padding-left: 10px;
padding-top: 50px;
margin-bottom: auto;
width: 100%;
`;
const SidebarDivItem = styled.div`
  width: 90%;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ active, theme }) =>
        active ? theme.sidebarBgActive : theme.sidebarBgDefault};
  transition: 500ms all ease;
  cursor: pointer;

  span {
    color: ${({ active, theme }) =>
        active ? theme.textActive : theme.textDefault};
    transition: 500ms color ease;
  }

  svg {
    color: ${({ active, theme }) =>
        active ? theme.textActive : theme.textDefault};
    transition: 500ms color ease;
  }

  &:hover {
    background-color: ${({ theme }) => theme.sidebarBgHover};

    span, svg {
      color: ${({ theme }) => theme.textHover};
    }
  }
`;
const Title = styled.span`
    color: ${({ theme }) => theme.textDefault};
    margin-left: 8px;
    font-size: 24px;
    transition: 500ms color ease;
`;
const StyledIcon = styled(FontAwesomeIcon)`
    width: 40px;
    height: 40px;
    color: ${({ theme }) => theme.textDefault};
`
const SidebarBottom = styled.div`
padding-left: 10px;
width: 100%;
`

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
        <SidebarContainer className={containerClassnames}>
            <SidebarTop>
                <Img src={logo} alt="TensorFlow logo" />
                <SpanLogo>TensorFlow</SpanLogo>
                <div onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
                </div>
            </SidebarTop>
            <SidebarMiddle>
                {
                    routes.map(route => (
                        <SidebarDivItem
                            key={route.title}
                            onClick={() => {
                                goToRoute(route.path);
                                setActiveRoute(route.path);
                            }}
                            active={activeRoute === route.path}
                        >
                            <StyledIcon icon={route.icon} />
                            <Title>{route.title}</Title>
                        </SidebarDivItem>
                    ))
                }
            </SidebarMiddle>
            <SidebarBottom>
                {
                    bottomRoutes.map(route => (
                        <SidebarDivItem
                            key={route.title}
                            onClick={() => {
                                goToRoute(route.path);
                                setActiveRoute(route.path);
                            }}
                            active={activeRoute === route.path}
                        >
                            <StyledIcon icon={route.icon} />
                            <Title>{route.title}</Title>
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
