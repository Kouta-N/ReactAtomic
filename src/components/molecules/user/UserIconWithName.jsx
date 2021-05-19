import styled from 'styled-components';

export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <div>
      <SContainer>
        <SImage height={160} width={160} src={image} alt='プロフィール' />
        <SName>{name}</SName>
      </SContainer>
    </div>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
const SImage = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: #40514e;
  margin: 0;
`;
