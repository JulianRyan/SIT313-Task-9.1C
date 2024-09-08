import 'semantic-ui-css/semantic.min.css'
import './Header.css';
import { Input, Button } from 'semantic-ui-react'
import { Outlet } from 'react-router-dom';

function Header(props) {
    return (
        <div id="search-section">
            <div id="search-components" width="100%">
                DEV@Deakin
                <Input type="search" class="form-control" id="searchInput" placeholder="Search" />
                <Button primary href="/post">Post</Button>
                <Button primary href="/login">Login</Button>
            </div>
            <Outlet />
        </div>
    );
}
export default Header;
