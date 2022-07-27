import { NavLink } from "react-router-dom";
import { TiWeatherSunny } from "react-icons/ti";
import { HeaderContainer, Logo, Navigation } from "./Header.styled";

const setActive = ({ isActive }) => ({
  borderBottom: isActive ? "2px solid #264061" : "",
});

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <TiWeatherSunny size={40} />
        <p>Wheather</p>
      </Logo>
      <Navigation>
        <NavLink to="/" style={setActive}>
          On Today
        </NavLink>
        <NavLink to="/week" style={setActive}>
          On Week
        </NavLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
