import 'bootstrap/dist/css/bootstrap.min.css';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';

function DocSidebar() {
  return (
    <div className='sidebar'>
    <ProSidebar>
    <Menu iconShape="square">
        <MenuItem><Link to="/docs">Quickstart</Link></MenuItem>
        <SubMenu title="SnapAlgoSDK">
          <MenuItem><Link to="enable">enable</Link></MenuItem>
          <MenuItem><Link to="algod">getAlgorandV2Client</Link></MenuItem>
          <MenuItem><Link to="indexer">getIndexerClient</Link></MenuItem>
          <MenuItem><Link to="post">postTxns</Link></MenuItem>
          <MenuItem><Link to="signandpost">signAndPostTxns</Link></MenuItem>
          <MenuItem><Link to="sign">signTxns</Link></MenuItem>
        </SubMenu>
    </Menu>
    </ProSidebar>
    </div>
  );
}

export default DocSidebar;
