import React from 'react'
import {Header} from 'semantic-ui-react';
function MainHeader({ title, fontType = 'h1' }) {
    return (
        <div>
               <Header as={fontType} style={{marginBottom: 10 }}>{title}</Header>
        </div>
    )
}

export default MainHeader
