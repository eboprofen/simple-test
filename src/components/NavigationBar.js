// import React, { useState } from "react";
// import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
// import logo from "../assets/logo.png";
// import Divider from "@material-ui/core/Divider";
// import { LoanButtonMobile, LoanButton } from "./LoanButton";
// import { Link, useLocation } from "react-router-dom";
// import { LocationButton } from "./LocationButton";
// import { LoanModal } from "./LoanModal";

// export const NavigationBar = () => {
//   const [open, setOpen] = useState(false);
//   const location = useLocation();
//   return (
//     <div className="navbar-background">
//       <div className="nav-white-b">
//         <Navbar fixed="top" expand="lg" className="navbar">
//           <NavbarBrand>
//             <a href={`${process.env.PUBLIC_URL}/`}>
//               <img className="navbar-logo" src={logo} alt="Simple" />
//             </a>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           </NavbarBrand>
//           <LoanButtonMobile
//             onClick={() => {
//               setOpen(true);
//             }}
//           />
//           <Link to={`${process.env.PUBLIC_URL}/business-loan`}>
//             <div
//               onClick={() => {
//                 setOpen(true);
//               }}
//               className={
//                 location.pathname === `${process.env.PUBLIC_URL}/business`
//                   ? "navbar-mobile-loan-button"
//                   : "loan-hidden"
//               }
//             >
//               <p className="navbar-mobile-loan-text">Зээл хүсэх</p>
//             </div>
//           </Link>
//           <Divider
//             className="navbar-divider"
//             style={{
//               marginLeft: 30,
//               marginRight: 15,
//             }}
//             orientation="vertical"
//           />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav activeKey={location.pathname} className="mr-auto">
//               <div
//                 className={
//                   location.pathname === `${process.env.PUBLIC_URL}/`
//                     ? "nav-box"
//                     : "nav-box-1"
//                 }
//               >
//                 <Nav.Link
//                   style={{ marginTop: 15 }}
//                   href={`${process.env.PUBLIC_URL}/`}
//                 >
//                   Иргэд
//                 </Nav.Link>
//               </div>
//               <div
//                 className={
//                   location.pathname === `${process.env.PUBLIC_URL}/business`
//                     ? "nav-box"
//                     : null
//                 }
//               >
//                 <Nav.Link
//                   style={{ marginTop: 15 }}
//                   href={`${process.env.PUBLIC_URL}/business`}
//                 >
//                   Бизнес
//                 </Nav.Link>
//               </div>
//               <div
//                 className={
//                   location.pathname === `${process.env.PUBLIC_URL}/news`
//                     ? "nav-box"
//                     : null
//                 }
//               >
//                 <Nav.Link
//                   style={{ marginTop: 15 }}
//                   href={`${process.env.PUBLIC_URL}/news`}
//                 >
//                   Мэдээлэл
//                 </Nav.Link>
//               </div>
//             </Nav>
//             {location.pathname !== `${process.env.PUBLIC_URL}/business` ? (
//               <Link
//                 style={{ textDecoration: "none" }}
//                 to={`${process.env.PUBLIC_URL}/location`}
//               >
//                 <LocationButton />
//               </Link>
//             ) : null}
//             {location.pathname === `${process.env.PUBLIC_URL}/business` ? (
//               // <Link
//               //   style={{ textDecoration: "none" }}
//               //   to={`${process.env.PUBLIC_URL}/business-loan`}
//               // >
//               <LoanButton
//                 onClick={() => {
//                   setOpen(true);
//                 }}
//               />
//             ) : // </Link>
//             null}
//             <Divider
//               className="navbar-divider"
//               style={{ marginLeft: 15, marginRight: 15 }}
//               orientation="vertical"
//             />
//             <Nav.Link
//               style={{ marginRight: 30 }}
//               href={`${process.env.PUBLIC_URL}/help`}
//             >
//               Тусламж
//             </Nav.Link>
//           </Navbar.Collapse>
//         </Navbar>
//       </div>
//       <LoanModal
//         open={open}
//         onClick={() => {
//           setOpen(false);
//         }}
//       />
//     </div>
//   );
// };

import React, { useState } from "react";
import { Nav, Navbar, NavbarBrand, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.png";
import Divider from "@material-ui/core/Divider";
// import { LoanButtonMobile, LoanButton } from "./LoanButton";
import { Link, useLocation } from "react-router-dom";
import { LocationButton } from "./LocationButton";
import { LoanModal } from "./LoanModal";

export const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <div className="navbar-background">
      <div className="nav-white-b">
        <Navbar fixed="top" expand="lg" className="navbar">
          <NavbarBrand>
            <a href={`${process.env.PUBLIC_URL}/`}>
              <img className="navbar-logo" src={logo} alt="Simple" />
            </a>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </NavbarBrand>
          {/* <LoanButtonMobile
            onClick={() => {
              setOpen(true);
            }}
          /> */}
          {/* <a
            href={`${process.env.PUBLIC_URL}/business-loan`}
            style={{ textDecoration: "none" }}
          > */}

          {/* <div
            onClick={() => {
              setOpen(true);
            }}
            className={
              location.pathname === `${process.env.PUBLIC_URL}/business`
                ? "navbar-mobile-loan-button"
                : "loan-hidden"
            }
          >
            <p className="navbar-mobile-loan-text">Зээл хүсэх</p>
          </div> */}
          {/* </a> */}
          <Divider
            className="navbar-divider"
            style={{
              marginLeft: 30,
              marginRight: 15,
            }}
            orientation="vertical"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey={location.pathname}>
              <NavDropdown title="Бүтээгдэхүүн" id="basic-nav-dropdown">
                <NavDropdown.Item href="/digital">
                  Дижитал зээл
                </NavDropdown.Item>
                <NavDropdown.Item href="/business">
                  Бизнесийн зээл
                </NavDropdown.Item>
                <NavDropdown.Item href="/car-loan">
                  Автомашины зээл
                </NavDropdown.Item>
                <NavDropdown.Item href="/simple-buy">
                  Simple Buy
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav.Link href={`${process.env.PUBLIC_URL}/news`}>
              Блог
            </Nav.Link>
            <Nav.Link
              className="mr-auto"
              href={`${process.env.PUBLIC_URL}/location`}
            >
              Байршил
            </Nav.Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`${process.env.PUBLIC_URL}/business-loan`}
            >
              <LocationButton />
            </Link>
            <Divider
              className="navbar-divider"
              style={{ marginLeft: 15, marginRight: 15 }}
              orientation="vertical"
            />

            <Nav.Link
              style={{ marginRight: 30 }}
              href={`${process.env.PUBLIC_URL}/help`}
            >
              Тусламж
            </Nav.Link>
            <Nav.Link
              style={{ display: "none" }}
              href={`${process.env.PUBLIC_URL}/unitel-leasing`}
            >
              Unitel
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <LoanModal
        open={open}
        onClick={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};
