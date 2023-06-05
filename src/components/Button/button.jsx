import { Button, Container } from '../Button/button.styled';

export const LoadMore = ({ onLoadMore }) => {
  return (
    <Container>
        <Button type="button" onClick={onLoadMore()}>
          Load More
        </Button>
    </Container>
  );
};