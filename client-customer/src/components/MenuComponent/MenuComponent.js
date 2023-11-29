import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../../utils/withRouter';
import { toast } from 'react-toastify';
import style from './Menu.module.css'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      notifications: [],
      txtKeyword: '',
    };
    this.blinkInterval = null;
  }

  render() {
    const cates = this.state.categories.map((item) => (
      <li key={item._id} className="menu">
        <Link to={'/product/category/' + item._id}>{item.name}</Link>
      </li>
    ));
    return (
      <div className={style.borderBottom}>
        <div className={style.floatLeft}>
          <ul className={style.ulMenu}>
            <li className={style.liMenu}>
             <span>Danh Mục Sản Phẩm</span>
            </li >
           <li className={style.liMenu} >
           {cates}
           </li>
           
          </ul>
        </div>
        <div className={style.floatRight}>
        <ul className={style.ulMenu}>
          <li className={style.liMenu}>
            <input
              type="search"
              placeholder="Từ khóa Sản Phẩm"
              className={style.keyword}
              value={this.state.txtKeyword}
              onChange={(e) => { this.setState({ txtKeyword: e.target.value }) }}
            />
          </li>
          <li className={style.liMenu}>
            <input
              type="submit"
              value="Tìm Kiếm"
              className={style.searchButton}
              onClick={(e) => this.btnSearchClick(e)}
            />
          </li>
        </ul>
      </div>
      
      <div className="float-clear" />
      </div>
    );
  }

  btnSearchClick = (e) => {
    e.preventDefault();
    if(this.state.txtKeyword){
      this.props.navigate('/product/search/' + this.state.txtKeyword);
    }
    else{
      toast.info("Vui Lòng Nhập Thông Tin Tìm Kiếm");

    }
    
  };

  componentDidMount() {
    this.apiGetCategories();
    
  }



  apiGetCategories = () => {
    axios.get('/api/customer/categories').then((res) => {
      const result = res.data;
      this.setState({ categories: result });
    });
  };


}

export default withRouter(Menu);
