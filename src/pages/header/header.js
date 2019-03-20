import style from  './header.less';
import { Component } from 'react';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className={style.header}>
                头部
                <a href="">退出</a>
            </div>
        );
    }
}
export default Header;