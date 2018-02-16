import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class Genres extends Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: 'Breaking news' };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, item){
    this.setState({activeItem: item.name});
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing secondary vertical>
        <Menu.Item name="Breaking news" active={activeItem === "Breaking news"} onClick={this.handleItemClick} />
        <Menu.Item name="messages" active={activeItem === "messages"} onClick={this.handleItemClick} />
        <Menu.Item name="friends" active={activeItem === "friends"} onClick={this.handleItemClick} />
      </Menu>
    );
  }
}
