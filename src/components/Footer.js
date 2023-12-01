const Footer = () => {
  return (
    <>
      {/* <div className="spacer" style={{ height: 80 }}>
      </div> */}
      <footer className="footer flex items-center justify-center w-full bg-orange-400 text-violet-50 text-center font-semibold"
        style={{ position: "absolute", bottom: 0, height: 80 }}>
        &copy; {new Date().getFullYear()}-{new Date().getFullYear() + 1} GO LAPTOPS
      </footer>
    </>
  );
};

export default Footer;
