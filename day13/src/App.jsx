import "./App.css";
import ClipBoard from "./assets/components/ClipBoardComponent";
import CounterComponent from "./assets/components/CounterComponent";
import SearchComponent from "./assets/components/Debounce";
import Form from "./assets/components/Form";
import HoverComponent from "./assets/components/HoverComponent";
import LocalStorage from "./assets/components/LocalStorageComponent";
import MediaQuery from "./assets/components/MediaQuery";
import TitleComponent from "./assets/components/TitleComponent";
import ToggleComponent from "./assets/components/ToggleComponent";
import UseGeolocation from "./assets/components/UseGeolocation";
import UseOnlineStatus from "./assets/components/UseOnlineStatus";
import UsePrev from "./assets/components/usePrevCom";
import UsersList from "./assets/components/UsersList";
import UseTheme from "./assets/components/UseTheme";
import UseTimeOutComp from "./assets/components/UseTimeout";




function App() {
  return (
    <>
      <h2> 1. Create a useCounter Hook </h2>
      <CounterComponent />
      <hr />
      <h2>2. Create a useToggle Hook </h2>
      <ToggleComponent />
      <hr />
      <h2>3. Create a useLocalStorage Hook </h2>
      <LocalStorage />
      <hr />
      <h2>4. Create a useFetch Hook </h2>
      <UsersList />
      <hr />
      <h2>5. Create a useInput Hook </h2>
      <Form />
      <hr />
      <h2>6. Create a useDebounce Hook </h2>
      <SearchComponent />
      <h2>7. Create a usePrevious Hook </h2>
   <UsePrev/><hr/>
   <h2>8. Create a useHover Hook </h2>
   <HoverComponent/><hr/>
   <h2>9. Create a useTitle Hook </h2>
   <TitleComponent/><hr/>
   <h2>10. Create a useTimeout Hook </h2>
   <UseTimeOutComp/>
   <h2>11.  Create a useClipboard Hook </h2>
  <ClipBoard/><hr/>
  <h2>12. Create a useMediaQuery Hook </h2>
  <MediaQuery/><hr/>
  <h2>13. Create a useOnlineStatus Hook </h2>
  <UseOnlineStatus/>
  <h2>14. Create a useGeolocation Hook </h2>
  <UseGeolocation/><hr/>

  <h2>15. Create a useTheme Hook </h2>
  <UseTheme/>



    </>
  );
}

export default App;
