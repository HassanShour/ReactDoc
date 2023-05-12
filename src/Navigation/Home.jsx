import React , {Component} from 'react';
import MapList from '../Components/ListAndKeys';
import Props from '../Components/PropsAndStates';
import { LoginForm } from '../Hooks/StateAndEffect';
import { Provider } from '../Components/BackgroundColor';
import '../index.css'
import { Toggle } from '../Components/HandlingEvent';
import { Forms } from '../Components/Forms';
import { Weather } from '../Components/WeatherAPI';
import Products from '../Components/Items';
import FRParent from '../Components/ForwaredRefs';
import Modal from '../Components/Portal';

export default class Home extends Component {
  render() {
    return (
        <>
    <Props/>
    <MapList/>
    <LoginForm/>
    <Provider/>
    <Toggle/>
    <Weather/>
    <Forms/>
    <Products/>
    <FRParent/>
    <Modal/>
    </>
    )
  }
}