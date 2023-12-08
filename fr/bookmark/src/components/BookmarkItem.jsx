import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom.css';

function BookmarkItem() {
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <br /><br /><br /><br /><br />
                <img src="https://placehold.co/50x50" alt="description" style={{ width: '4vw', height: '4vh' }} />
                <div className='mb-1'>
                    Bookmark item name
                </div>
            </div>
        </div>
    );
}

export default BookmarkItem;
