import styled from 'styled-components';
import { SearchInput } from '../molecules/user/SearchInput';
import { UserCard } from '../organism/user/UserCard';

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `じゃけえ-${val}`,
    image: 'https://source.unsplash.com/gxyfJQg7Lno',
    email: '1234@example.com',
    phone: '000-000-000',
    company: {
      name: 'test-company',
    },
    website: 'htttps://test.com',
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea />
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: colum;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1ft));
  grid-gap: 20px;
`;
