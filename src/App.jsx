import React from "react";
import ReactDOM from "react-dom";
import {Splitter,SplitterSide,SplitterContent,Page,Button} from "react-onsenui";
import Page1 from "Page1.jsx";
import Page2 from "Page2.jsx";
import Page3 from "Page3.jsx";
import Page4 from "Page4.jsx";
import "./style.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      isOpen: false,
      selectMenu: 1,
      };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.onClickMenu1 = this.onClickMenu1.bind(this);
    this.onClickMenu2 = this.onClickMenu2.bind(this);
    this.onClickMenu3 = this.onClickMenu3.bind(this);
    this.onClickMenu4 = this.onClickMenu4.bind(this);
  }

  show() {
    this.setState({
      isOpen: true,
      selectMenu: this.state.selectMenu
    });
  }

  hide() {
    this.setState({
      isOpen: false,
      selectMenu: this.state.selectMenu
    });
  }
  
  onClickMenu1() {
  // isOpenをfalseにしてメニューを閉じる。メニュー１を選択状態にする
    this.setState({ isOpen: false, selectMenu: 1 });
  }

  onClickMenu2() {
  // isOpenをfalseにしてメニューを閉じる。メニュー2を選択状態にする
    this.setState({ isOpen: false, selectMenu: 2 });
  }

  onClickMenu3() {
  // isOpenをfalseにしてメニューを閉じる。メニュー3を選択状態にする
    this.setState({ isOpen: false, selectMenu: 3 });
  }

  onClickMenu4() {
  // isOpenをfalseにしてメニューを閉じる。メニュー4を選択状態にする
    this.setState({ isOpen: false, selectMenu: 4 });
  }

  render() {
    var PageContent;
    var menuItemClass = ["item","item","item","item"];
    if (this.state.selectMenu == 1) {
      menuItemClass[this.state.selectMenu-1] = "item1";
      PageContent = <Page1 show={this.show} />;
    }
    if (this.state.selectMenu == 2) {
      menuItemClass[this.state.selectMenu-1] = "item1";
      PageContent = <Page2 show={this.show} />;
    }
    if (this.state.selectMenu == 3) {
      menuItemClass[this.state.selectMenu-1] = "item1";
      PageContent = <Page3 show={this.show} />;
    }
    if (this.state.selectMenu == 4) {
      menuItemClass[this.state.selectMenu-1] = "item1";
      PageContent = <Page4 show={this.show} />;
    }
    return (
     <Splitter>
     <SplitterSide
       side="left"
       collapse={true}
       isOpen={this.state.isOpen}
       onClose={this.hide.bind(this)}
       swipeable={true}
     >
     <Page>
       <ul className="menu">
         <li className={menuItemClass[0]} onClick={this.onClickMenu1}>メニュー１</li>
        <li className={menuItemClass[1]} onClick={this.onClickMenu2}>メニュー２</li>
        <li className={menuItemClass[2]} onClick={this.onClickMenu3}>メニュー３</li>
        <li className={menuItemClass[3]} onClick={this.onClickMenu4}>メニュー４</li>
      </ul>
    </Page>
    </SplitterSide>
      <SplitterContent>
       {PageContent}
      </SplitterContent>
    </Splitter>
    );
   }
}