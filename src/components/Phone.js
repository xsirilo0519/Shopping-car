import React, { Component } from 'react'


class Phone extends Component{
    render(){
        const { name } = this.props;
         return(
            <div className="ui card phone">
                <div className="image"><img src="/images/phone.jpg" />
                </div>
                <div className="content">
                    <div className="phone-name">{ name }</div>
                    <div className="meta">8G RAM, 16G memory</div>
                </div>
                <div className="extra content">
                    <a>
                    <i aria-hidden="true" className="money icon"></i>
                    $ 80
                    </a>
                </div>
            </div>
        )
    }
}

export default Phone