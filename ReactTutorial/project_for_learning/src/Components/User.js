import React, { Component } from 'react'
import PropTypes from 'prop-types'

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


  render() {
    //Destructing
    const {name,surname,state} = this.props;
    const {isVisible} = this.state;
    // Boylece this.props.name seklinde name ozelligine ulasmak yerine
    // sadece name seklinde ulasabiliyoruz...
    return (
      <div className="col-md-8 mb-4">
          <div className="card">
              <div className="card-header d-flex justify-content-between">
                  <h4 className="d-inline" onClick={this.onClickEvent.bind(this,34,"ali")}>{name} {surname}</h4>
                  <i className="far fa-trash-alt" style = {{cursor:"pointer"}}></i>
              </div>
              <div className = "card-body">
              {
                isVisible ?
                <p className = "card-text"> Ünvan : {state}</p>
                : null               
              }
              </div>  
          </div>  
      </div>
    )
  }
}
User.defaultProps = {
  name : "Bilgi Yok",
  surname : "Bilgi Yok",
  state : "Bilgi Yok"
}
User.propTypes = {
  name : PropTypes.string.isRequired,
  surname : PropTypes.string.isRequired,
  state : PropTypes.string.isRequired
}
export default User;