import styled from 'styled-components';
import Logo from './Logo';

export default function Navbar() {
  return (
    <>
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </>
  );
}

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
`;
