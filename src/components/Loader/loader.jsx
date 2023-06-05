import { InfinitySpin  } from 'react-loader-spinner';
import { Container } from './loader.styled';

export const Loader = () =>
<Container>
     <InfinitySpin 
      width='200'
      color="#3f51b5"
    />
</Container>