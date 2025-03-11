import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSettings } from "../../redux/features/actions/settingAction";


function Footer() {
  const dispatch = useDispatch();

  const { settings, isLoading, error } = useSelector((state) => state.settings);


      useEffect(() => {
        dispatch(fetchSettings());
      }, [dispatch]);
      console.log(settings);
      


  return (
    <footer className="footer position-relative z-1">
      <img src="assets/images/shapes/shape2.png" alt="" className="shape five animation-scalation" />
      <img src="assets/images/shapes/shape6.png" alt="" className="shape one animation-scalation" />

      <div className="py-120">
        <div className="container container-two">
          <div className="row gy-5 justify-content-between">
            <div className="col-lg-5 col-12 col-md-5" data-aos="fade-up" data-aos-duration="400">
              <div className="footer-item">
                <img src="/assets/images/logo/3lmny.png" alt="علمني لوجو" />
                <p className="footer-para">
                  أكاديميتنا العملية تهدف إلى تزويد المتعلمين بالمهارات العملية والتطبيقية التي تؤهلهم لسوق العمل من
                  خلال برامج تدريبية متطورة وتجربة تعليمية تفاعلية.
                </p>
                <div className="footer-social-logo">
                  <Link to="https://facebook.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <path
                        d="M12 2.375C10.6094 2.375 9.29688 2.64062..."
                        fill="#066CCB"
                      />
                    </svg>
                  </Link>
                  <Link to="https://facebook.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <path
                        d="M12 8C10.75 8 9.6875 8.4375 8.8125..."
                        fill="#066CCB"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 col-md-4" data-aos="fade-up" data-aos-duration="400">
              <div className="footer-item">
                <h4 className="footer-item__title fw-medium mb-32">الصفحات</h4>
                <ul className="footer-menu">
                  <li className="mb-16">
                    <Link to="/" className="hover-text-main-600 hover-text-decoration-underline">
                      الرئيسيه
                    </Link>
                  </li>
                  <li className="mb-16">
                    <Link to="/lessons" className="hover-text-main-600 hover-text-decoration-underline">
                      الحصص
                    </Link>
                  </li>
                  <li className="mb-16">
                    <Link to="/teachers" className="hover-text-main-600 hover-text-decoration-underline">
                      المدرسين
                    </Link>
                  </li>
                  <li className="mb-16">
                    <Link to="/subjects" className="hover-text-main-600 hover-text-decoration-underline">
                      المواد
                    </Link>
                  </li>
                  <li className="mb-16">
                    <Link to="/faq" className="hover-text-main-600 hover-text-decoration-underline">
                      سؤال وجواب
                    </Link>
                  </li>
                  <li className="mb-0">
                    <Link to="/contact" className="hover-text-main-600 hover-text-decoration-underline">
                      تواصل معنا
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-12 col-md-4" data-aos="fade-up" data-aos-duration="800">
              <div className="footer-item">
                <h4 className="footer-item__title fw-medium mb-32">التواصل</h4>
                <div className="flex-align gap-20 mb-24">
                  <span className="icon d-flex text-32 text-main-600">
                    <i className="ph ph-phone"></i>
                  </span>
                  <div>
                  {!isLoading? (
                    <Link to={`https://wa.me/${settings?.data?.support_phone}`} className="d-block hover-text-main-600 mb-4">
                   
                    {settings?.data?.support_phone}

                    </Link>
                    ):null}
                    {/* <Link to="https://wa.me/01028372837" className="d-block hover-text-main-600 mb-0">
                      (704) 555-0127
                    </Link> */}
                  </div>
                </div>
                <div className="flex-align gap-20 mb-24">
                  <span className="icon d-flex text-32 text-main-600">
                    <i className="ph ph-envelope-open"></i>
                  </span>
                  <div>
                    <Link to="mailto:dwallo@gmail.com" className="d-block hover-text-main-600 mb-4">
                      dwallo@gmail.com
                    </Link>
                    <Link to="mailto:eduAll@gmail.com" className="d-block hover-text-main-600 mb-0">
                      eduAll@gmail.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bottom-footer border-top border-0 py-32">
          <div className="container container-two">
            <div className="bottom-footer__inner flex-center gap-16 flex-wrap">
              <p className="text-line-1 fw-normal text-center" data-aos="zoom-in">
                تمت التصميم والتطوير بواسطه{" "}
                <Link className="fw-semibold" to="https://brmja.tech/">
                  برمجة تك
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
