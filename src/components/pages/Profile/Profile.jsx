import React from 'react';
import MCIcon from "loft-taxi-mui-theme/src/MCIcon/mc_symbol.svg";

import Header from "../../Header/Header";
import MapImg from "../../../img/map_loginPage.svg";
import ChipImg from "../../../img/Vectorchip.svg";
import LogoCardImg from "../../../img/logoCard.svg";
import './Profile.css';
import {SaveDataCard} from "../../../redux/actions";
import {connect} from "react-redux";

function ProfilePage(props) {
    const [dataCard, setDataCard] = React.useState({
        cardNumber: props.card.cardNumber,
        cardOwner: props.card.cardOwner,
        cardMonthYear: props.card.cardMonthYear,
        cardCVC: props.card.cardCVC
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        props.SaveDataCard(dataCard);
    }

    const handleChange = (event) => {
        let onlyDigitals;
        let formatStr;
        const name = event.target.name
        const value = event.target.value
        switch (name) {
            case 'cardNumber':
                onlyDigitals = value.replace(/[^0-9]/g, "")
                onlyDigitals = onlyDigitals.length >= 16 ? onlyDigitals.slice(0, 16) : onlyDigitals
                formatStr = onlyDigitals.replace(/\B(?=(\d{4})+(?!\d))/g, " ")
                return setDataCard({...dataCard, cardNumber: formatStr})
            case 'cardOwner':
                return setDataCard({...dataCard, cardOwner: value})
            case 'cardMonthYear':
                onlyDigitals = value.replace(/[^0-9]/g, "")
                onlyDigitals = onlyDigitals.length >= 4 ? onlyDigitals.slice(0, 4) : onlyDigitals
                formatStr = onlyDigitals.replace(/\B(?=(\d{2})+(?!\d))/g, "/")
                return setDataCard({...dataCard, cardMonthYear: formatStr})
            case 'cardCVC':
                onlyDigitals = value.replace(/[^0-9]/g, "")
                onlyDigitals = onlyDigitals.length >= 3 ? onlyDigitals.slice(0, 3) : onlyDigitals
                return setDataCard({...dataCard, cardCVC: onlyDigitals})
            default:
                return
        }
    }

    return (
        <div>
            <Header/>
            <div id="mainContainer" style={{backgroundImage: `url(${MapImg})`}}>
                <div>
                    <form id='profileForm'>
                        <div className='formHeader'>Профиль</div>
                        <div className='subHeaderMessage'>Введите платежные данные</div>
                        <div className="container">
                            <div className="leftColumn">
                                <label htmlFor="cardOwner"><b>Имя владельца</b></label>
                                <input type="text"
                                       placeholder=""
                                       name="cardOwner"
                                       required
                                       onChange={handleChange}
                                       value={dataCard.cardOwner}
                                />
                                <label htmlFor="cardNumber"><b>Номер карты</b></label>
                                <input type="text"
                                       placeholder=""
                                       name="cardNumber"
                                       required
                                       onChange={handleChange}
                                       value={dataCard.cardNumber}

                                />
                                <div className="blockMonthYearCVC">
                                    <div className="leftIndent">
                                        <label htmlFor="cardMonthYear"><b>MM/YY</b></label>
                                        <input type="text"
                                               placeholder=""
                                               name="cardMonthYear"
                                               required
                                               onChange={handleChange}
                                               value={dataCard.cardMonthYear}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="cardCVC"><b>CVC</b></label>
                                        <input type="text"
                                               placeholder=""
                                               name="cardCVC"
                                               onChange={handleChange}
                                               value={dataCard.cardCVC}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="rightColumn">
                                <div className="visualCardContainer">
                                    <div className="space-between">
                                        <div><img className="icon" src={LogoCardImg} alt=""/></div>
                                        <div><b>{props.card.cardMonthYear}</b></div>
                                    </div>
                                    <div className="center font-size-x-large">
                                        <b>{props.card.cardNumber}</b>
                                    </div>
                                    <div className="space-between">
                                        <div>
                                            <img className="icon" src={ChipImg} alt=""/>
                                        </div>
                                        <div>
                                            <img className="icon" src={MCIcon} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="psw">
                            <button id='save' type="submit" onClick={handleSubmit}
                            >Сохранить
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
const mapDispatchToProps = {
    SaveDataCard
}
const mapStateToProps = state => {
    return {card: state.profileContext}
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
