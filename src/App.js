import { Container } from '@mui/material';

//*Components
import SearchForm from "./components/SearchForm/SearchForm";
import RepoList from "./components/RepoItems/RepoList";
import OwnerName from './components/OwnerName/OwnerName';

function App() {

  return (
    <div className="App">
      <Container maxWidth="xl">
        <SearchForm />
        <OwnerName />
        <RepoList/>
      </Container>
    </div>
  );
}

export default App;
