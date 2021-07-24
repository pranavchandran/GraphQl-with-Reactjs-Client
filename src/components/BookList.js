import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {BookListQuery} from '../queries/queries';
// components
import BookDetails from './BookDetails';


class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }
    displayBooks() {
        let data = this.props;
        if (data.books) {
            return data.books.map((book) => {
                return (<div key={book.id}
                        onClick={() => this.setState({selected: book.id})}
                        >{book.name}</div>);
            });
        } else {
            return (<div>Loading</div>);
        }
    }
  render() {
    return (
      <div id="book-list">
        {this.displayBooks()}
        {/* make a line empty */}
        <br />
        <BookDetails bookId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(BookListQuery, {
    props: ({ data }) => ({
        books: data.books
    })
})(BookList);
  