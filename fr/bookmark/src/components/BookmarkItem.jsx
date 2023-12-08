import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom.css';

function BookmarkItem({ title, url }) {
    const faviconUrl = `https://s2.googleusercontent.com/s2/favicons?domain_url=${url}`;

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img className='mt-2' src={faviconUrl} alt="description" style={{ width: '24px', height: '24px' }} />
                <div className='mt-2 mb-1'>
                    &nbsp;&nbsp;{title}&nbsp;&nbsp;
                    {/* TODO: margin padding koy nbspler yerine bak bakam bi */}
                </div>
            </div>
        </div>
    );
}

export default BookmarkItem;