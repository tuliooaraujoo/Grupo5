interface MenuProps {
    setActiveComponent: (component: string) => void;
  }
  
  const Menu = ({ setActiveComponent }: MenuProps) => {
    return (
      <div className="menu">
        <button onClick={() => setActiveComponent('Initial')} className="menu-item">Initial</button>
        <button onClick={() => setActiveComponent('Investments')} className="menu-item">Investments</button>
        <button onClick={() => setActiveComponent('AccountSettings')} className="menu-item">Account Settings</button>
        <button onClick={() => setActiveComponent('Services')} className="menu-item">Services</button>
      </div>
    );
  };
  
  export default Menu;
  