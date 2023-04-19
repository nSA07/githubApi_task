import { Container } from '@mui/material';

//*Components
import SearchForm from "./components/SearchForm/SearchForm";
import RepoList from "./components/RepoItems/RepoList";

function App() {

  return (
    <div className="App">
      <Container maxWidth="xl">
        <SearchForm />
        <RepoList/>
      </Container>
    </div>
  );
}

export default App;
