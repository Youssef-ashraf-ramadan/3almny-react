import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <>
      <ContactPageBanner />
      <ContactPageDetails />
    </>
  );
}
function ContactPageBanner() {
  return (
    <section className="breadcrumb py-120 bg-main-25 position-relative z-1 overflow-hidden mb-0">
      <img
        src="assets/images/shapes/shape1.png"
        alt=""
        className="shape one animation-rotation d-md-block d-none"
      />
      <img
        src="assets/images/shapes/shape2.png"
        alt=""
        className="shape two animation-scalation d-md-block d-none"
      />
      <img
        src="assets/images/shapes/shape3.png"
        alt=""
        className="shape eight animation-walking d-md-block d-none"
      />
      <img
        src="assets/images/shapes/shape5.png"
        alt=""
        className="shape six animation-walking d-md-block d-none"
      />
      <img
        src="assets/images/shapes/shape4.png"
        alt=""
        className="shape four animation-scalation"
      />
      <img
        src="assets/images/shapes/shape4.png"
        alt=""
        className="shape nine animation-scalation"
      />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="breadcrumb__wrapper">
              <h1 className="breadcrumb__title display-4 fw-semibold text-center">
                تواصل معنا
              </h1>
              <ul className="breadcrumb__list d-flex align-items-center justify-content-center gap-4">
                <li className="breadcrumb__item">
                  <Link
                    to="/"
                    className="breadcrumb__link text-neutral-500 hover-text-main-600 fw-medium"
                  >
                    <i className="text-lg d-inline-flex ph-bold ph-house"></i>{" "}
                    الرئيسيه
                  </Link>
                </li>
                <li className="breadcrumb__item">
                  <i className="text-neutral-500 d-flex ph-bold ph-caret-left"></i>
                </li>
                <li className="breadcrumb__item">
                  <Link
                    to="#"
                    className="breadcrumb__link text-neutral-500 hover-text-main-600 fw-medium"
                  ></Link>
                </li>
                <li className="breadcrumb__item d-none">
                  <i className="text-neutral-500 d-flex ph-bold ph-caret-right"></i>
                </li>
                <li className="breadcrumb__item">
                  <span className="text-main-two-600">تواصل معنا</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactPageDetails(){
 return (
    <section className="contact py-120">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="mb-24">دعنا نساعدك</h2>
          <p className="">
            تم بناء منصتنا على مبادئ الابتكار والجودة والشمول، بهدف توفير تجربة تعليمية سلسة
          </p>
        </div>
        <div className="row gy-4">
          <div className="col-xl-4 col-md-6">
            <div className="contact-item bg-main-25 border border-neutral-30 rounded-12 px-32 py-40 d-flex align-items-start gap-24 hover-bg-main-600 transition-2 hover-border-main-600">
              <span className="contact-item__icon w-60 h-60 text-32 flex-center rounded-circle bg-main-600 text-white flex-shrink-0">
                <i className="ph ph-map-pin-line"></i>
              </span>
              <div className="flex-grow-1">
                <h4 className="mb-12">العنوان</h4>
                <p className="text-neutral-500">شارع فيصل الجيـــــــــــــــــزة, مصر</p>
                <Link to="#" className="text-main-600 fw-semibold text-decoration-underline mt-16">
                  الموقع
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="contact-item bg-main-25 border border-neutral-30 rounded-12 px-32 py-40 d-flex align-items-start gap-24 hover-bg-main-600 transition-2 hover-border-main-600">
              <span className="contact-item__icon w-60 h-60 text-32 flex-center rounded-circle bg-main-600 text-white flex-shrink-0">
                <i className="ph ph-envelope-open"></i>
              </span>
              <div className="flex-grow-1">
                <h4 className="mb-12">البريد الالكتروني</h4>
                <p className="text-neutral-500">infoexample@gmail.com</p>
                <p className="text-neutral-500">example@gmail.com</p>
                <a
                  href="mailto:infoexample@gmail.com"
                  className="text-main-600 fw-semibold text-decoration-underline mt-16"
                >
                  ارسال ايميل
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="contact-item bg-main-25 border border-neutral-30 rounded-12 px-32 py-40 d-flex align-items-start gap-24 hover-bg-main-600 transition-2 hover-border-main-600">
              <span className="contact-item__icon w-60 h-60 text-32 flex-center rounded-circle bg-main-600 text-white flex-shrink-0">
                <i className="ph ph-phone-call"></i>
              </span>
              <div className="flex-grow-1">
                <h4 className="mb-12">ارقام التواصل</h4>
                <p className="text-neutral-500">(505) 555-0125</p>
                <p className="text-neutral-500">(406) 555-0120</p>
                <a
                  href="tel:(406)555-0120"
                  className="text-main-600 fw-semibold text-decoration-underline mt-16"
                >
                  اتصل بنا!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactPage;