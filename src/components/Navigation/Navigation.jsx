import { Item } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Item to="/">Home</Item>
        </li>
        <li>
          <Item to="events">Events</Item>
        </li>
        <li>
          <Item to="search">Search</Item>
        </li>
      </ul>
    </nav>
  );
};
