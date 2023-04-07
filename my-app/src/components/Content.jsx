import React from "react";

const Content = ({isDark}) => {
    return <div
    className="content"
    style={{
        backgroundColor : isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black',
    }}>
        <h1>chyoo. 좋은 하루 되세요.</h1>
    </div>
};

export default Content;