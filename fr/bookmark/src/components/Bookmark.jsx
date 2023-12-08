import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import BookmarkItem from './BookmarkItem';


function Bookmark() {
  return (
    <>
      <div className="d-grid">
        <Card style={{ backgroundColor: "#f1f2ed" }}>
          <Form className='text-center'>
            <BookmarkItem></BookmarkItem>
            <Form.Group className="ms-5 me-5 mb-3" controlId="loginEmail">
              <br />
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email"
                placeholder="Enter email" />
              <Form.Text className="text-muted">
                Login via your e-mail
              </Form.Text>
            </Form.Group>

            <Form.Group className="ms-5 me-5 mb-3" controlId="loginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"
                placeholder="Password" />
            </Form.Group>
            <br />
            <Button className="btn-teal" type="submit">
              Login
            </Button>
            <br /><br />
            <href class="link-primary">Forgot Your
              Password?
            </href>
            <br />---<br />
            <href class="link-secondary">Sign Up</href>
            <br /><br />
          </Form>
        </Card>
      </div>
    </>
    // <div className='bg-rain'>
    //   <div className='container'>
    //     <div className='row'>
    //       <div className='d-grid'>

    //         <Card className="d-grid" style={{ backgroundColor: "#f1f2ed" }}>
    //           <Form className='text-center'>
    //             <BookmarkItem></BookmarkItem>
    //             <Form.Group className="ms-5 me-5 mb-3" controlId="loginEmail">
    //               <br />
    //               <Form.Label>Email address</Form.Label>
    //               <Form.Control type="email"
    //                 placeholder="Enter email" />
    //               <Form.Text className="text-muted">
    //                 Login via your e-mail
    //               </Form.Text>
    //             </Form.Group>

    //             <Form.Group className="ms-5 me-5 mb-3" controlId="loginPassword">
    //               <Form.Label>Password</Form.Label>
    //               <Form.Control type="password"
    //                 placeholder="Password" />
    //             </Form.Group>
    //             <br />
    //             <Button className="btn-teal" type="submit">
    //               Login
    //             </Button>
    //             <br /><br />
    //             <href class="link-primary">Forgot Your
    //               Password?
    //             </href>
    //             <br />---<br />
    //             <href class="link-secondary">Sign Up</href>
    //             <br /><br />
    //           </Form>
    //         </Card>
    //         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Bookmark;
