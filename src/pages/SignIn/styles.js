import styled from 'styled-components';
import bgimg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1 {
    font-size: 48px;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > p {
    font-size: 14px;
    font-weight: normal;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: 48px;
  }

  > h2 {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 48px;
  }

  a {
    margin-top: 124px;
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.ORANGE};   
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${bgimg}) no-repeat center center;
  background-size: cover;

`;
