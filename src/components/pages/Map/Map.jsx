import React, {useCallback, useEffect, useState} from 'react'
import {Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material"
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import './Map.css'
import Header from "../../Header/Header"
import MapBox from "../../MapBox/MapBox"
import {fetchAddressList, fetchRoute} from "../../../redux/actions"
import {selectAddressList, selectCardIsCorrect} from "../../../redux/selectors"


export default function MapPage() {
    const navigate = useNavigate()
    const [addressFrom, setAddressFrom] = useState("")
    const [addressTo, setAddressTo] = useState("")
    const addressList = useSelector(selectAddressList)
    const cardIsCorrect = useSelector(selectCardIsCorrect)
    const [addressListFrom, setAddressListFrom] = useState([])
    const [addressListTo, setAddressListTo] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        setAddressListTo(addressList)
        setAddressListFrom(addressList)
        args = {handleSubmit, handleChange, addressFrom, addressListFrom, addressTo, addressListTo}
    }, [addressList])

    useEffect(() => {
        dispatch(fetchAddressList())
    }, [dispatch])

    const handleSubmit = useCallback((event) => {
        event.preventDefault()
        dispatch(fetchRoute({addressFrom, addressTo}))
    }, [dispatch, addressFrom, addressTo])

    const handleChange = useCallback((event: SelectChangeEvent) => {
        const name = event.target.name
        const value = event.target.value
        const fullList = addressList
        switch (name) {
            case 'inputFrom':
                setAddressFrom(value)
                setAddressListTo(fullList.filter((n) => n !== value))
                break
            case 'inputTo':
                setAddressTo(value)
                setAddressListFrom(fullList.filter((n) => n !== value))
                break
        }
    }, [addressListTo, addressListFrom, addressFrom, addressTo])

    let args = {handleSubmit, handleChange, addressFrom, addressListFrom, addressTo, addressListTo}

    return (
        <div>
            <Header/>
            <MapBox/>
            {selectPopup(cardIsCorrect, args)}
        </div>
    )
}

const selectPopup = (cardIsCorrect, args) => {
    switch (cardIsCorrect) {
        case true:
            return callTaxiForm(args)
        case false:
            return cardIsNotCorrect()
        default:
            return <></>
    }
}
const goToProfile = () => navigate('/profile')

const cardIsNotCorrect = () => {
    return (
        <div id="callTaxiForm">
            <div>
                <InputLabel>Данные карты не заполнены</InputLabel>
                <InputLabel>Для корректной работы необходимо добавить карту</InputLabel>
            </div>
            <Button
                variant="contained"
                className="buttonSubmit"
                type="button"
                onClick={goToProfile}
            >
                Перейти в профиль
            </Button>
        </div>
    )
}


const callTaxiForm = (args) => {
    const {handleSubmit, handleChange, addressFrom, addressListFrom, addressTo, addressListTo} = args
    return (
        <form id="callTaxiForm" onSubmit={handleSubmit}>
            <div>
                <AddressSelect
                    address={addressFrom}
                    addressList={addressListFrom}
                    handleChange={handleChange}
                    label="Откуда"
                    name="inputFrom"
                />
                <AddressSelect
                    address={addressTo}
                    addressList={addressListTo}
                    handleChange={handleChange}
                    label="Куда"
                    name="inputTo"
                />
            </div>
            <Button variant="contained" className="buttonSubmit" type="submit">Заказать</Button>
        </form>
    )
}


function AddressSelect({address, addressList, handleChange, label, name}) {
    return (
        <FormControl sx={{m: 1, minWidth: 420}}>
            <InputLabel id={name + "-label"}>{label}</InputLabel>
            <Select
                labelId={name + "-label"}
                variant="standard"
                value={address}
                onChange={handleChange}
                inputProps={{'aria-label': 'Without label'}}
                className="input"
                name={name}
            >
                {addressList && addressList.map((address, index) => (
                    <MenuItem key={index} value={address}>{address}</MenuItem>
                ))}
            </Select>
        </FormControl>)
}
