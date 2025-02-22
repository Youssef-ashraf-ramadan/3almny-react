import { Link } from "react-router-dom";

function NotificationPage() {
  return (
    <>
      <NotificationBanner />
      <NotificationDetails />
    </>
  );
}
function NotificationBanner() {
    return  (
        <section className="breadcrumb py-120 bg-main-25 position-relative z-1 overflow-hidden mb-0">
          <img
            src="/assets/images/shapes/shape1.png"
            alt=""
            className="shape one animation-rotation d-md-block d-none"
          />
          <img
            src="/assets/images/shapes/shape2.png"
            alt=""
            className="shape two animation-scalation d-md-block d-none"
          />
          <img
            src="/assets/images/shapes/shape3.png"
            alt=""
            className="shape eight animation-walking d-md-block d-none"
          />
          <img
            src="/assets/images/shapes/shape5.png"
            alt=""
            className="shape six animation-walking d-md-block d-none"
          />
          <img
            src="/assets/images/shapes/shape4.png"
            alt=""
            className="shape four animation-scalation"
          />
          <img
            src="/assets/images/shapes/shape4.png"
            alt=""
            className="shape nine animation-scalation"
          />
    
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="breadcrumb__wrapper">
                  <h1 className="breadcrumb__title display-4 fw-semibold text-center">
                    الاشعارات
                  </h1>
                  <ul className="breadcrumb__list d-flex align-items-center justify-content-center gap-4">
                    <li className="breadcrumb__item">
                      <Link
                        to="/index.html"
                        className="breadcrumb__link text-neutral-500 hover-text-main-600 fw-medium"
                      >
                        <i className="text-lg d-inline-flex ph-bold ph-house"></i>{" "}
                        الرئيسيه
                      </Link>
                    </li>
                    <li className="breadcrumb__item">
                      <i className="text-neutral-500 d-flex ph-bold ph-caret-right"></i>
                    </li>
                    <li className="breadcrumb__item">
                      <Link
                        to="/"
                        className="breadcrumb__link text-neutral-500 hover-text-main-600 fw-medium"
                      >
                        {" "}
                      </Link>
                    </li>
                    <li className="breadcrumb__item d-none">
                      <i className="text-neutral-500 d-flex ph-bold ph-caret-right"></i>
                    </li>
                    <li className="breadcrumb__item">
                      <span className="text-main-two-600">  الاشعارات </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}
function NotificationDetails(){
    return  <section className="tutor-details py-40">
    <div className="container">
      <div className="row gy-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="col-lg-4 col-12">
            <div
              className="notification-card"
              style={{ backgroundColor: "#F5F5F5", padding: "20px" }}
            >
              <h1 className="fs-4">اشعار من استاذ محمد</h1>
              <p style={{ lineHeight: "2.0" }}>
                مرحبًا! هل أنت مستعد لاستكشاف عالم الأرقام؟ 🧮 لا تفوّت درس
                الرياضيات الأول للصف الأول الإعدادي: 'مقدمة إلى الأعداد والجمع'.
                انضم الآن وابدأ رحلتك نحو التفوق! 🚀
              </p>
              <div className="notification-footer d-flex justify-content-end mt-24">
                <span>
                  5:00 <i className="ph-bold ph-clock"></i>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

}
export default NotificationPage;
