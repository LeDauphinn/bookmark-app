import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import BookmarkItem from './BookmarkItem';

function Bookmark() {
  const [bookmarks, setBookmarks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const addBookmark = () => {
    if (title.trim() !== '' && url.trim() !== '') {
      setBookmarks([...bookmarks, <BookmarkItem key={bookmarks.length} title={title} url={url}/>]);
      setTitle('');
      setUrl('');
      setShowModal(false);
    } else {
      alert('Title and URL cannot be empty');
    }
  }

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <div className="d-grid">
        <Card style={{ backgroundColor: "#f1f2ed" }}>
          <Form className='d-flex align-items-center'>
            <br /><br /><br /><br />
            <Button className='clickable-card btn-teal ms-5' onClick={openModal}>Add New Bookmark</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/* TODO: margin padding koy nbspler yerine bak bakam bi  */}
            {bookmarks.map(bookmark => (
              <Form.Group className="mb-3">
                {bookmark}
              </Form.Group>
            ))}
          </Form>
        </Card>
      </div>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Bookmark</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>URL</Form.Label>
              <Form.Control type="text" placeholder="Enter URL" value={url} onChange={e => setUrl(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>Cancel</Button>
          <Button variant="primary" onClick={addBookmark}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Bookmark;