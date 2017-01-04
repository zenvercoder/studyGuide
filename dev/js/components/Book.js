import React, {Component} from 'react';
import '../styles/Book.css'; // Tell Webpack that Book.js uses these styles

class Book extends Component {
    render() {
        // You can use them as regular CSS styles
        return <div>
            {/*<img src={'../images/book.png'} alt="book"/>*/}
            <img src={'https://www.ucc.ie/en/media/academic/appliedsocialstudies/iconsandlogo/119542307725783745open_book_john_olsen_01.svg.hi.png'} alt="book" className="Book sepia"/>
        </div>
    }
}

export default Book;