import { Search, SearchBtn, Form, Field, FormLabel } from "./searchbar.styled";
import { Component } from 'react';


export class SearchBar extends Component {
state = {
    searchQuery: '',
    };

handleChangeSearchQuery = e => {
    const searchQuery = e.currentTarget.value.toLowerCase();

    this.setState({ searchQuery });
};

handleSubmit = e => {
    e.preventDefault();

    const { searchQuery } = this.state;
    const { onSubmit } = this.props;

    if (searchQuery.trim() === '') {
        return;
    }

    onSubmit(searchQuery);
    this.setState({ searchQuery: '' });
};

render() {
    const { searchQuery } = this.state;

      return (
        <Search>
        <Form onSubmit={this.handleSubmit}>
            <Field name="query"
                type="text"
                autoComplete="off"
                autoFocus
                value={searchQuery}
                onChange={this.handleChangeSearchQuery}
                placeholder="Search images and photos" />
            <SearchBtn type="submit"><FormLabel>Search</FormLabel></SearchBtn>
        </Form>
    </Search>

    );
  }
}



