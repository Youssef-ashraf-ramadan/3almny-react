import { useEffect, useState } from "react";
import { NavLink, useLocation,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


function Navbar() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("");
const navigate = useNavigate();
const token = localStorage.getItem("token"); 
console.log(token);


const handleLogout = () => {
  localStorage.removeItem("token"); // مسح التوكن من التخزين المحلي
  window.location.href="/"
  // navigate("/auth/login"); // إعادة توجيه المستخدم لصفحة تسجيل الدخول
};
  useEffect(() => {
    // Normalize the pathname (remove trailing slash if needed)
    let path = location.pathname;
    if (path !== "/" && path.endsWith("/")) {
      path = path.slice(0, -1);
    }
    setCurrentPath(path);
  }, [location.pathname]);

  return (
    <>
      <MobileNav handleLogout = {handleLogout} token={token} />
      <DesktopNav handleLogout = {handleLogout} token ={token} currentPath = {currentPath} />
    </>
  );
}
function MobileNav({handleLogout, token}) {
  return (
    <div className="mobile-menu scroll-sm d-lg-none">
      <button type="button" className="close-button">
        <i className="ph ph-x"></i>
      </button>
      <div className="mobile-menu__inner">
        <NavLink to="index.html" className="mobile-menu__logo">
          <img src="/assets/images/logo/3lmny.png" alt="Logo" />
        </NavLink>
        <div className="mobile-menu__menu">
          <ul className="nav-menu flex-align nav-menu--mobile">
            <li className="nav-menu__item activePage">
              <NavLink to="/" className="nav-menu__link">
                الرئيسيه
              </NavLink>
            </li>
            <li className="nav-menu__item">
              <NavLink to="/lessons" className="nav-menu__link">
                الحصص
              </NavLink>
            </li>
            <li className="nav-menu__item">
              <NavLink to="/teachers" className="nav-menu__link">
                المدرسين
              </NavLink>
            </li>
            <li className="nav-menu__item">
              <NavLink to="/subjects" className="nav-menu__link">
                المواد
              </NavLink>
            </li>
            <li className="nav-menu__item">
              <NavLink to="/exam" className="nav-menu__link">
                الاختبارات
              </NavLink>
            </li>
            <li className="nav-menu__item">
              <NavLink to="/faq" className="nav-menu__link">
                سؤال وجواب
              </NavLink>
            </li>
            <li className="nav-menu__item">
              <NavLink to="/contact" className="nav-menu__link">
                تواصل معنا
              </NavLink>
            </li>
          </ul>
        </div>

        {
            !token ? (
              <div className="header-right d-block d-lg-none flex-align header-mobile-right">
              <NavLink to="/login" className="login-nav-btn">
                تسجيل الدخول
              </NavLink>
            </div>
            ):(
              <div className="header-right d-block d-lg-none header-mobile-right  flex-align ">
              <div className="dropdown">
                <NavLink
                  className="dropdown-toggle login-nav-btn"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  حسابي
                </NavLink>
                <ul
                  className="dropdown-menu mt-12 w-100"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <NavLink
                      className="dropdown-item"
                      style={{ textAlign: "right" }}
                      to="/profile"
                    >
                      الملف الشخصي
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      style={{ textAlign: "right" }}
                      to="/notification"
                    >
                      الاشعارات
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      style={{ textAlign: "right" }}
                      to="/"
                      onClick={handleLogout}
                    >
                      تسجيل الخروج
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            )

          }
        
      </div>
    </div>
  );
}


function DesktopNav({handleLogout, token, currentPath}) {

  return (
    <header className="header">
      <div className="container">
        <nav className="header-inner flex-between gap-8">
          <div className="header-content-wrapper flex-align">
            <div className="logo">
              <NavLink to="/" className="link">
                <img src="/assets/images/logo/3lmny.png" alt="Logo" />
              </NavLink>
            </div>
          </div>
          <div className="header-menu d-lg-block d-none">
            <ul className="nav-menu flex-align">
              <li className={`nav-menu__item ${currentPath === "/" ? "activePage" : ""}`}>
                <NavLink to="/" className="nav-menu__link">
                  الرئيسيه
                </NavLink>
              </li>
              <li className={`nav-menu__item ${currentPath === "/lessons" ? "activePage" : ""}`}>
                <NavLink to="/lessons" className="nav-menu__link">
                  الحصص
                </NavLink>
              </li>
              <li className={`nav-menu__item ${currentPath === "/teachers" ? "activePage" : ""}`}>
                <NavLink to="/teachers" className="nav-menu__link">
                  المدرسين
                </NavLink>
              </li>
              <li className={`nav-menu__item ${currentPath === "/subjects" ? "activePage" : ""}`}>
                <NavLink to="/subjects" className="nav-menu__link">
                  المواد
                </NavLink>
              </li>
              <li className={`nav-menu__item ${currentPath === "/exam" ? "activePage" : ""}`}>
                <NavLink to="/exam" className="nav-menu__link">
                  الاختبارات
                </NavLink>
              </li>
              <li className={`nav-menu__item ${currentPath === "/faq" ? "activePage" : ""}`}>
                <NavLink to="/faq" className="nav-menu__link">
                  سؤال وجواب
                </NavLink>
              </li>
              <li className={`nav-menu__item ${currentPath === "/contact" ? "activePage" : ""}`}>
                <NavLink to="/contact" className="nav-menu__link">
                  تواصل معنا
                </NavLink>
              </li>
            </ul>
          </div>
          {
            !token ? (
              <div className="header-right d-lg-block d-none flex-align">
              <NavLink to="/login" className="login-nav-btn">
                تسجيل الدخول
              </NavLink>
            </div>
            ):(
              <div className="header-right d-none d-lg-block  flex-align ">
              <div className="dropdown">
                <NavLink
                  className="dropdown-toggle login-nav-btn"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  حسابي
                </NavLink>
                <ul
                  className="dropdown-menu mt-12 w-100"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <NavLink
                      className="dropdown-item"
                      style={{ textAlign: "right" }}
                      to="/profile"
                    >
                      الملف الشخصي
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      style={{ textAlign: "right" }}
                      to="/notification"
                    >
                      الاشعارات
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      style={{ textAlign: "right" }}
                      to="/"
                      onClick={handleLogout}
                    >
                      تسجيل الخروج
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            )

          }
         

          <div className="header-right d-lg-none d-block flex-align">
            <button type="button" className="toggle-mobileMenu d-lg-none text-neutral-200 flex-center">
              <i className="ph ph-list"></i>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
