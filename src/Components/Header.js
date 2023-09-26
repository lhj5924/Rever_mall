import Category from "./Category";
import Sort from "./Sort";

const Header = () => {
  return (
    <>
      <header className='header__container'>
        <div className='upperContainer'>
          <div className='list__container'>
            <div>HOME</div>
            <div>SHOP</div>
            <div>ABOUT</div>
          </div>
          <div className='btn__container'>
            <div>Q</div>
            <div>SINGN IN/LOGIN</div>
            <div>CART</div>
          </div>
        </div>
        <div className='underContainer'>
          <div className='logo__container'>
            <p>River</p>
            <p>'s</p>
            <p>Stationary Shop</p>
          </div>
        </div>
      </header>
      <Category />
      <Sort />
    </>
  );
};
export default Header;
