import React from 'react';

import Aux from '../../hoc/Auxilarity';
import '../../components/Layout/Layout.css';

const layout = (props) => (
    <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main class="Content">
        {props.children}
    </main>
    </Aux>
);

export default layout;
