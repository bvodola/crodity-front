import React from 'react';

import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const CustomMenu = (props) => (
  <Popover
    open={props.open}
    anchorEl={props.anchor}
    onRequestClose={props.handleRequestClose}
  >
    <Menu>
      <MenuItem primaryText="Refresh" />
      <MenuItem primaryText="Help &amp; feedback" />
      <MenuItem primaryText="Settings" />
      <MenuItem primaryText="Sign out" />
    </Menu>
  </Popover>
);

export default CustomMenu;
