import { Container } from './styles';
import ReactSwitch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';

export interface Props {
  toggleTheme(): void;
}

const Header = ({ toggleTheme }: Props) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      NavBar
      <ReactSwitch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={40}
        handleDiameter={10}
        offColor={colors.background}
        onColor={colors.tertiary}
      />
    </Container>
  );
};

export default Header;
