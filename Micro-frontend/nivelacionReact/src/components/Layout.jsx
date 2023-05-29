import React from "react";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <header>
        <h3>Nivelacion React</h3>
      </header>
      <main>{children}</main>
      <footer style={{ margin: "15px" }}>
        &copy; Mariel Gutierrez Zapien - 2023
      </footer>
    </div>
  );
};

export default Layout;
