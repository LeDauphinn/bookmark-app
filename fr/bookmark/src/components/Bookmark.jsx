import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function BookmarkItem({ title, url }) {
  const faviconUrl = `https://s2.googleusercontent.com/s2/favicons?domain_url=${url}`;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img className='mt-2' src={faviconUrl} alt="description" style={{ width: '24px', height: '24px' }} />
        <div className='mt-2 mb-1'>
          &nbsp;&nbsp;{title}&nbsp;&nbsp;
        </div>
      </div>
    </div>
  );
}

function Bookmark() {
  const [bookmarks, setBookmarks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');


  const addBookmark = () => {
    if (title.trim() !== '' && url.trim() !== '') {
      setBookmarks([...bookmarks, { title, url }]);
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

  const openOffcanvas = () => {
    setShowOffcanvas(true);
  };

  const closeOffcanvas = () => {
    setShowOffcanvas(false);
  };


  return (
    <>
      <div className="d-grid">
        <Card style={{ backgroundColor: "#f1f2ed" }}>
          <Form className='d-flex align-items-center'>
            <br /><br />
            <Button className='clickable-card btn-teal ms-5' onClick={openModal}>Add New Bookmark</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {bookmarks.map((bookmark, index) => {
              const shortTitle = bookmarks.length > 5 ? bookmark.title.slice(0, 10) + '...' : bookmark.title;
              return (
                <Form.Group className="mb-2" key={index}>
                  <BookmarkItem title={shortTitle} url={bookmark.url} />
                </Form.Group>
              );
            })}
            <div className='d-flex justify-content-end'>
              <Button className="clickable-card btn-fav ms-5 mb-3" onClick={openOffcanvas}>+</Button>
            </div>
          </Form>
          <Form className='d-flex align-items-center'>
            <Offcanvas show={showOffcanvas} onHide={closeOffcanvas} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Bookmarks</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {bookmarks.map((bookmark, index) => (
                  <li key={index}>{bookmark}</li>
                ))}
              </Offcanvas.Body>
            </Offcanvas>
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
/* Dizayn için aklıma gelen ama yetişmeyen şeyler:
1. En üstte mesela sınırlı sayıda bookmark tutulup, en eski olan yeni bookmark eklendiğinde
otomatik olarak silinebilir ve offcanvasa koyulabilir. Mesela yukarda 8 tane bookmark varsa
9. eklenince en eski olan bookmark otomatik olarak silinip offcanvasa koyulabilir. Offcanvas dediğim şey
tam olarak şu: https://react-bootstrap.netlify.app/docs/components/offcanvas. Mesela add item gibi bi buton
ya da icon olabilir en sol üstte. Ona tıklayınca offcanvas açılır mesela, orda bi tane switch olur eski bookmarklar
ve bütün bookmarklar arasında geçiş yapmak için. Ayrıca offcanvasın içinde de bi search bar olabilir. Onunla da arama 
yapılabilir.
2. Bookmarklar orderlanabilir filter component konabilir yukarı. Mesela en çok ziyaret edilenler, en son ziyaret edilenler,
3. Direkt ilk dizayn şu şekilde alternatif olarak değiştirilebilir, add bookmark default offcanvasta olup, top navda bi tane
offcanvası açan buton olabilir. Offcanvastaki bookmarkitem listesinden işte atıyorum ilk 8 sonuç çıkar falan topnavbarda gözükecek
şekilde.

Biliyorum bunları yetiştirmesi aşırı zor ama en azından fikir olarak yazdım, vaktimiz elverse gerçekten çok eğlenceli olurmuş
proje. 

Not: yazdığım bu commenti bile hızlandıran github copilot ile çok hızlı ve temiz yazabildim bu scriptleri, dediğim dizayn önerilerini direkt
copilota girebilirsiniz hiç kasmadan, copilot yoksa işte yine salıya atabilrsiniz o işleri rapordan iş kısabilirsiniz onun yerine. Tercih sizin,
taşşanıza kurban <3.
*/

export default Bookmark;