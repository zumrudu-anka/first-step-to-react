import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from "../context";
//import { color } from 'style-value-types';

class User extends Component {
  state = {
    isVisible : false
  }
  
  //Default Propslar asagidaki gibi tanimlanacagi gibi bu sekilde de tanimlanabilir.
  /*
  static defaultProps = {
    name : PropTypes.string.isRequired,
    surname : PropTypes.string.isRequired,
    state : PropTypes.string.isRequired
  }
  */
// Stateler bu sekilde componentın constructor yapısı icinde belirlenebildigi gibi
// yukarıdaki gibi Componentın hemen altında da setlenebilir.
//  constructor(props){
//    super(props);
//    this.state={
//      isVisible : false
//    }

    //Yine asagida html etiketi icinde cagirilan onclick eventi
    // Etiket icinde de nesneye baglanacagi gibi burada constructor icinde
    // asagidaki sekilde baglanabilir...
    
    //this.onClickEvent = this.onClickEvent.bind(this);

//  }


  // Baglama islemini constructor icinde ya da etiket icinde yapabildigimiz gibi
  // asagidaki sekilde fonksiyonumuzu arrow function seklinde olusturdugumuzda da 
  // otomatik olarak baglama (bind) islemini de yapmis oluyoruz..

  /*
  onClickEvent = (e) => {
    //console.log(e.target); // e(event) hangi etiketten geldi
    console.log(this);
  }
  */
  // Fonksiyonumuz bu sekilde olusturulursa etiket icinde veya constructor icinde baglama
  // islemini yapmaliyiz..

  // Eger cagrilan fonksiyona deger gonderilmek istenirse, cagrildigi yerde yine bind fonksiyonu
  // ile baglama islemi yapilmali this parametresinden sonra gonderilmek istenen degerler virgulle
  // sirasiyla gonderilmeli.. Yani cagrildigi yerde ilk parametre this olmali...
  // Fakat burada fonksiyon icinde gelen parametreler e(event) olayindan once gelir.
  // Yani ilk once gonderilen parametreleri yazariz fonksiyonu olustururken(sirasi bu sekilde olacak yani).
  
  onClickEvent(number,isim,e){
    //console.log(isim);
    //console.log(number);
    this.setState(
      {
        isVisible : !this.state.isVisible
      }
    )
  }

  ondeleteUser = (dispatch,e) => {
    const{id}=this.props;
    // Consumer dispatch
    dispatch({ type: "DELETE_USER", payload:id});
  }


  render() {
    //Destructing
    const {name,surname,degree} = this.props;
    const {isVisible} = this.state;
    // Boylece this.props.name seklinde name ozelligine ulasmak yerine
    // sadece name seklinde ulasabiliyoruz...

    return (
      <UserConsumer>
        {
          value => {
            const {dispatch} = value;
            return (
              <div className="col-md-8 mb-4" >
                  <div className="card" >
                      <div className="card-header d-flex justify-content-between" style={isVisible ? { backgroundColor:"#2F4F4F", color:"white"} : {backgroundColor:"gray"}}>
                          <h4 className="d-inline" onClick={this.onClickEvent.bind(this,34,"ali")}>{name} {surname}</h4>
                          <i onClick={this.ondeleteUser.bind(this,dispatch)} className="far fa-trash-alt" style = {{cursor:"pointer"}}></i>
                      </div>
                      <div className = "card-body">
                      {
                        isVisible ?
                        <p className = "card-text" style={{backgroundColor:"gray",color:"2F4F4F",fontWeight:"bold"}}> Ünvan : {degree}</p>
                        : null               
                      }
                      </div>  
                  </div>  
              </div>
            )
          }
        }
      </UserConsumer>
    )

    
  }
}
User.defaultProps = {
  name : "Bilgi Yok",
  surname : "Bilgi Yok",
  degree : "Bilgi Yok"
}
User.propTypes = {
  name : PropTypes.string.isRequired,
  surname : PropTypes.string.isRequired,
  degree : PropTypes.string.isRequired,
}
export default User;