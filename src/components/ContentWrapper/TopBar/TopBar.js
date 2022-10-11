
import './TopBar.css';
import logoIconic from '../../../assets/images/logo.png'


function TopBar() {
  return (
    <div  className='top-bar'>
        <img className='logo-iconic' src={logoIconic}/>
          <h1 className='dasboard-title'>
            Bienvenidos al Dashboard de Iconic
          </h1>
    </div>
  );
}

export default TopBar;