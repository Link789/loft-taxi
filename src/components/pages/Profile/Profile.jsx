import React, {useCallback} from 'react'
import {useDispatch, useSelector} from "react-redux"
import MCIcon from "loft-taxi-mui-theme/src/MCIcon/mc_symbol.svg"

import Header from "../../Header/Header"
import MapImg from "../../../img/map_loginPage.svg"
import ChipImg from "../../../img/Vectorchip.svg"
import LogoCardImg from "../../../img/logoCard.svg"
import './Profile.css';
import {saveDataCard} from "../../../redux/actions"


export default function ProfilePage() {
    const card = useSelector(state => state.profileContext)
    const dispatch = useDispatch()
    const [dataCard, setDataCard] = React.useState({
        cardNumber: card.cardNumber,
        cardOwner: card.cardOwner,
        cardMonthYear: card.cardMonthYear,
        cardCVC: card.cardCVC
    })

    const handleSubmit = useCallback((event) => {
        event.preventDefault()
        dispatch(saveDataCard(dataCard))
    }, [dataCard])

    const handleChange = useCallback((event) => {
        let onlyDigital
        let formatStr
        const name = event.target.name
        const value = event.target.value
        switch (name) {
            case 'cardNumber':
                onlyDigital = value.replace(/[^0-9]/g, "")
                onlyDigital = onlyDigital.length >= 16 ? onlyDigital.slice(0, 16) : onlyDigital
                formatStr = onlyDigital.replace(/\B(?=(\d{4})+(?!\d))/g, " ")
                setDataCard({...dataCard, cardNumber: formatStr})
                break
            case 'cardOwner':
                setDataCard({...dataCard, cardOwner: value})
                break
            case 'cardMonthYear':
                onlyDigital = value.replace(/[^0-9]/g, "")
                onlyDigital = onlyDigital.length >= 4 ? onlyDigital.slice(0, 4) : onlyDigital
                formatStr = onlyDigital.replace(/\B(?=(\d{2})+(?!\d))/g, "/")
                setDataCard({...dataCard, cardMonthYear: formatStr})
                break
            case 'cardCVC':
                onlyDigital = value.replace(/[^0-9]/g, "")
                onlyDigital = onlyDigital.length >= 3 ? onlyDigital.slice(0, 3) : onlyDigital
                setDataCard({...dataCard, cardCVC: onlyDigital})
                break
        }
    }, [dataCard])

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
                                        <div><b>{card.cardMonthYear}</b></div>
                                    </div>
                                    <div className="center font-size-x-large">
                                        <b>{card.cardNumber}</b>
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



