import React, { Component } from 'react';
import {DropDownWrapper, DropDownLabel, DropDownList} from '../../styles/dropdown';
import {ChevronIcon} from '../../styles/icons';
import {InputLabel} from '../../styles/form';

class DropDown extends Component {
  constructor (props) {
    super(props);
    this.state = {
      inputIsFocused: false,
      focusedItem: 0,
      inputValue: '',
      isHovering: false
    };
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleLiClick = this.handleLiClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.getListItems = this.getListItems.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.focusedElem = React.createRef();
  }
  handleInputFocus (e) {
    this.setState({inputIsFocused: true});
  }
  handleInputBlur (e) {
    this.setState({inputIsFocused: false, focusedItem: 0});
  }
  setValue (e) {
    let _val = '';
    if (this.props.data.optionsType === 'numberLoop') {
      _val = this.refs.focusedElem.innerText;
    } else {
      _val = this.props.data.options[this.state.focusedItem].label;
    }
    this.props.data.placeholder = _val;
    this.setState({
      focusedItem: 0,
      inputValue: _val,
      inputIsFocused: false
    });
  }
  componentDidUpdate (e) {
    if (!this.state.isHovering) {
      let _len = this.props.data.options.length - 1;
      if (this.props.data.optionsType === 'numberLoop') {
        _len = this.props.data.options[1] - this.props.data.options[0] + 1;
      }
      this.refs.focusedElem.parentNode.scrollTop = this.refs.focusedElem.offsetTop > 0 && this.refs.focusedElem.offsetTop < _len * 48 ? this.refs.focusedElem.offsetTop - 75 : 0;
    }
  }
  handleKeyDown (e) {
    if (!this.state.isHovering) {
      let _len = this.props.data.options.length - 1;
      if (this.props.data.optionsType === 'numberLoop') {
        _len = this.props.data.options[1] - this.props.data.options[0];
      }
      if (e.keyCode === 40) {
        this.setState({focusedItem: (this.state.focusedItem < _len) ? this.state.focusedItem + 1 : 0});
        this.refs.focusedElem.parentNode.scrollTop = this.refs.focusedElem.offsetTop > 0 && this.refs.focusedElem.offsetTop < _len * 48 ? this.refs.focusedElem.offsetTop - 48 : 0;
      } else if (e.keyCode === 38) {
        this.setState({focusedItem: (this.state.focusedItem > 0) ? this.state.focusedItem - 1 : _len});
      } else if (e.keyCode === 13) {
        this.setValue(e);
      } else if (e.keyCode === 27) {
        this.setState({
          focusedItem: 0,
          inputIsFocused: false
        });
      }
    }
  }
  handleLiClick (e) {
    let valueRow = [{}];
    this.props.data.placeholder = e.target.innerText;
    if (this.props.data.optionsType === 'numberLoop') {
      valueRow[0].val = e.target.innerText;
    } else {
      valueRow = this.props.data.options.filter((option) => option.label === e.target.innerText || option === e.target.innerText);
    }
    this.setState({
      focusedItem: 0,
      inputValue: valueRow[0].val,
      inputIsFocused: false
    });
  }
  handleHover (e) {
    this.setState({isHovering: true});
  }
  handleMouseLeave (e) {
    this.setState({isHovering: false});
  }
  getListItems () {
    let elem = '';
    if (this.props.data.optionsType === 'numberLoop') {
      let _from = this.props.data.options[0];
      let _to = this.props.data.options[1];
      let _arr = Array.apply(null, { length: (_to - _from + 1) });
      elem = (_arr.map((val, ind) => (
        <li onClick={this.handleLiClick} key={ind} ref={(ind === this.state.focusedItem) ? 'focusedElem' : null} className={ind === this.state.focusedItem ? 'active' : ''}>{_from + ind}</li>
      )));
    } else {
      elem = (this.props.data.options.map((item, ind) => (
        <li onClick={this.handleLiClick} key={ind} ref={ind === this.state.focusedItem ? 'focusedElem' : null} className={ind === this.state.focusedItem ? 'active' : ''}>{item.label}</li>
      )));
    }

    return elem;
  }
  render () {
    return (
      <DropDownWrapper
        noPadding={this.props.noPadding}
        onKeyDown={this.handleKeyDown}
        onFocus={this.handleInputFocus}
        onBlur={this.handleInputBlur}
        onClick={this.handleClick}
        tabIndex={this.props.tabKey}
        leftBordered={this.props.leftBordered}
        hasLabel={this.props.hasLabel}
        >
        <InputLabel>{this.props.data.label}</InputLabel>
        <input type='hidden' />
        <ChevronIcon direction={this.state.inputIsFocused ? 'up' : 'down'} className='stick-right' />
        <DropDownLabel readOnly value={this.props.data.placeholder} />
        <DropDownList
          onMouseMove={this.handleHover}
          onMouseLeave={this.handleMouseLeave}
          hasLabel={this.props.hasLabel}
          noPadding={this.props.noPadding}
          isOpen={this.state.inputIsFocused}>

          {this.getListItems()}
        </DropDownList>
      </DropDownWrapper>
    );
  }
}

export default DropDown;
