const Navigation = (props) => {
  const navLinks = ['Home', 'About', 'Products'];

  const mappedNavLinks = navLinks.map((navLink, index) => {
    return (
      <button
        key={index}
        onClick={() => props.setView(navLink.toLowerCase())}
      >{navLink}</button>
    );
  });

  return (
    <nav>
      {mappedNavLinks}
    </nav>
  );
};

export default Navigation;
