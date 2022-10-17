
import './App.css';
import TopBar from '../ContentWrapper/TopBar/TopBar'
//import Content from '../ContentWrapper/Content/Content'
import LastProduct from '../ContentWrapper/LastProduct/LastProduct';
import Categories from '../ContentWrapper/Categories/Categories';
import DBInfo from '../ContentWrapper/Content/DBInfo';
import ProductList from '../ContentWrapper/ProductList/ProductList';


function App() {

  return (

    <div className='content-father'>
      <div className='top-bar'>
        <TopBar />
      </div>

          <DBInfo />

      <div className='last-product'>
        <LastProduct />
      </div>
      <div className='categories-count'>
        <Categories />
      </div>
      <div className='products-list'>
        <div className='productlist-item'>
        <ProductList />
        </div>
      </div>
    </div>
  );
}

export default App;
