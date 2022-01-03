import React, { Component } from 'react';
import { connect } from 'react-redux';


class MyCart extends Component {
    render() {
        const {phones, inCart_phones } = this.props


        return (
            <div>
                <div class="ui cards">
                     {inCart_phones
                    .map((phone) => (
                        <div class="ui card centered">
                                <div class="content">
                                    <img
                                        src="/images/phone.jpg"
                                        class="ui mini right floated image"
                                    />
                                    <div class="header">{phones[phone].brand}</div>
                                    <div class="meta">$ 80</div>
                                    <div class="meta">12 minutes</div>
                                    <div class="description">
                                        8G RAM, 16G memory
                                    </div>
                                </div>
                                <div class="extra content">
                                    <div class="ui two buttons">
                    
                                        <button class="ui green basic button">Buy</button>
                                        <button class="ui red basic button">Decline</button>
                                    </div>
                                </div>
                            </div>

                    ))}
                          
                </div>
            </div>
        )
    }
}
function mapStateToProps({ phones }) {
    return {
        phones,
    }
}

export default connect(mapStateToProps)(MyCart);