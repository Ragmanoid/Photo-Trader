import React from 'react';

import PhotoElement from './PhotoElement';

class Content extends  React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <PhotoElement user={this.props.user} url="https://lh3.googleusercontent.com/proxy/2bildWPkczhmE3dUfbigivdstRFKTai5ku28zGLoE0BKwhZNPmX4CL7nBvkNT8pKf8jPdGvDXIVmNIuua3mbvcY13pi_QN8O5ntR-3a7VfQIxoJMEeyUwdPR-wddf_21"/>
                <PhotoElement user={this.props.user} url="https://i.pinimg.com/736x/2d/dc/25/2ddc25914e2ae0db5311ffa41781dda1.jpg"/>
                <PhotoElement user={this.props.user} url="https://klike.net/uploads/posts/2019-06/1560664221_1.jpg"/>
            </div>
        );
    }
}

export default Content;