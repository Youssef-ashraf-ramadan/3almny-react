import { Link } from "react-router-dom";

function ExamPage() {
  return (
    <>
      <ExamBanner />
      <ExamLists />
    </>
  );
}
function ExamBanner() {
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
                الاختبارات
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
                  <i className="text-neutral-500 d-flex ph-bold ph-caret-right"></i>
                </li>
                <li className="breadcrumb__item">
                  <Link
                    to="/course.html"
                    className="breadcrumb__link text-neutral-500 hover-text-main-600 fw-medium"
                  >
                    {" "}
                  </Link>
                </li>
                <li className="breadcrumb__item d-none">
                  <i className="text-neutral-500 d-flex ph-bold ph-caret-right"></i>
                </li>
                <li className="breadcrumb__item">
                  <span className="text-main-two-600">الاختبارات</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function ExamLists() {
  return (
    <section className="tutor-details py-40">
      <div className="container">
        <div className="text-center">
          <div
            className="nav-tab-wrapper bg-white p-16 mb-40 d-inline-block"
            data-aos="zoom-out"
          >
            <ul
              className="nav nav-pills common-tab gap-16"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8 active"
                  id="pills-categories-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-categories"
                  type="button"
                  role="tab"
                  aria-controls="pills-categories"
                  aria-selected="true"
                >
                  كل المواد
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8"
                  id="pills-design-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-design"
                  type="button"
                  role="tab"
                  aria-controls="pills-design"
                  aria-selected="false"
                >
                  عربي
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8"
                  id="pills-programming-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-programming"
                  type="button"
                  role="tab"
                  aria-controls="pills-programming"
                  aria-selected="false"
                >
                  الإنجليزي
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8"
                  id="pills-webDesign-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-webDesign"
                  type="button"
                  role="tab"
                  aria-controls="pills-webDesign"
                  aria-selected="false"
                >
                  الدراسات الاجتماعيه
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8"
                  id="pills-Academic-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Academic"
                  type="button"
                  role="tab"
                  aria-controls="pills-Academic"
                  aria-selected="false"
                >
                  العلوم
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8"
                  id="pills-marketing-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-marketing"
                  type="button"
                  role="tab"
                  aria-controls="pills-marketing"
                  aria-selected="false"
                >
                  الرياضيات
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-categories"
            role="tabpanel"
            aria-labelledby="pills-categories-tab"
            tabindex="0"
          >
            <div className="row justify-content-center gy-4">
              <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12  border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <a href="#" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/bg-course-2.png"
                        alt="exam Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </a>
                  </div>
                  <div className="pt-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          اختبار الرياضيات
                        </a>
                      </h4>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-lightbulb"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الرياضيات
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            150
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                            >
                              <path
                                d="M17.2727 2C15.2682 2 13.5023 3.16667 12.5 5C11.4977 3.16667 9.73182 2 7.72727 2C4.57727 2 2 5 2 8.66667C2 15.2778 12.5 22 12.5 22C12.5 22 23 15.3333 23 8.66667C23 5 20.4227 2 17.2727 2Z"
                                fill="#F44336"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-users"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الصف الاول الاعدادي
                          </span>
                        </div>
                        <div className="flex-align gap-4">
                          <span className="text-lg text-neutral-700">4.6</span>{" "}
                          <span className="text-2xl fw-medium text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-clock"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            مده الاختبار
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            ساعه
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex"></span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 mb-24   border-dashed border-0">
                      <Link
                        to="/start-exam"
                        className="flex-align gap-8 text-main-600 justify-content-center hover-text-decoration-underline transition-1 fw-semibold"
                      >
                        بدآ الاختبار
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12  border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <a href="#" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/bg-course-2.png"
                        alt="exam Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </a>
                  </div>
                  <div className="pt-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          اختبار الرياضيات
                        </a>
                      </h4>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-lightbulb"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الرياضيات
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            150
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                            >
                              <path
                                d="M17.2727 2C15.2682 2 13.5023 3.16667 12.5 5C11.4977 3.16667 9.73182 2 7.72727 2C4.57727 2 2 5 2 8.66667C2 15.2778 12.5 22 12.5 22C12.5 22 23 15.3333 23 8.66667C23 5 20.4227 2 17.2727 2Z"
                                fill="#F44336"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-users"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الصف الاول الاعدادي
                          </span>
                        </div>
                        <div className="flex-align gap-4">
                          <span className="text-lg text-neutral-700">4.6</span>{" "}
                          <span className="text-2xl fw-medium text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-clock"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            مده الاختبار
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            ساعه
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex"></span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 mb-24   border-dashed border-0">
                      <Link
                        to="/start-exam"
                        className="flex-align gap-8 text-main-600 justify-content-center hover-text-decoration-underline transition-1 fw-semibold"
                      >
                        بدآ الاختبار
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12  border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <a href="#" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/bg-course-2.png"
                        alt="exam Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </a>
                  </div>
                  <div className="pt-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          اختبار الرياضيات
                        </a>
                      </h4>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-lightbulb"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الرياضيات
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            150
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                            >
                              <path
                                d="M17.2727 2C15.2682 2 13.5023 3.16667 12.5 5C11.4977 3.16667 9.73182 2 7.72727 2C4.57727 2 2 5 2 8.66667C2 15.2778 12.5 22 12.5 22C12.5 22 23 15.3333 23 8.66667C23 5 20.4227 2 17.2727 2Z"
                                fill="#F44336"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-users"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الصف الاول الاعدادي
                          </span>
                        </div>
                        <div className="flex-align gap-4">
                          <span className="text-lg text-neutral-700">4.6</span>{" "}
                          <span className="text-2xl fw-medium text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-clock"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            مده الاختبار
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            ساعه
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex"></span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 mb-24   border-dashed border-0">
                      <Link
                        to="/start-exam"
                        className="flex-align gap-8 text-main-600 justify-content-center hover-text-decoration-underline transition-1 fw-semibold"
                      >
                        بدآ الاختبار
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-design"
            role="tabpanel"
            aria-labelledby="pills-design-tab"
            tabindex="0"
          >
            <div className="row justify-content-center gy-4">
              <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12  border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <a href="#" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/bg-course-2.png"
                        alt="exam Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </a>
                  </div>
                  <div className="pt-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          اختبار الرياضيات
                        </a>
                      </h4>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-lightbulb"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الرياضيات
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            150
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                            >
                              <path
                                d="M17.2727 2C15.2682 2 13.5023 3.16667 12.5 5C11.4977 3.16667 9.73182 2 7.72727 2C4.57727 2 2 5 2 8.66667C2 15.2778 12.5 22 12.5 22C12.5 22 23 15.3333 23 8.66667C23 5 20.4227 2 17.2727 2Z"
                                fill="#F44336"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-users"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الصف الاول الاعدادي
                          </span>
                        </div>
                        <div className="flex-align gap-4">
                          <span className="text-lg text-neutral-700">4.6</span>{" "}
                          <span className="text-2xl fw-medium text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-clock"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            مده الاختبار
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            ساعه
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex"></span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 mb-24   border-dashed border-0">
                      <Link
                        to="/start-exam"
                        className="flex-align gap-8 text-main-600 justify-content-center hover-text-decoration-underline transition-1 fw-semibold"
                      >
                        بدآ الاختبار
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12  border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <a href="#" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/bg-course-2.png"
                        alt="exam Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </a>
                  </div>
                  <div className="pt-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          اختبار الرياضيات
                        </a>
                      </h4>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-lightbulb"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الرياضيات
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            150
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                            >
                              <path
                                d="M17.2727 2C15.2682 2 13.5023 3.16667 12.5 5C11.4977 3.16667 9.73182 2 7.72727 2C4.57727 2 2 5 2 8.66667C2 15.2778 12.5 22 12.5 22C12.5 22 23 15.3333 23 8.66667C23 5 20.4227 2 17.2727 2Z"
                                fill="#F44336"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-users"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الصف الاول الاعدادي
                          </span>
                        </div>
                        <div className="flex-align gap-4">
                          <span className="text-lg text-neutral-700">4.6</span>{" "}
                          <span className="text-2xl fw-medium text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-clock"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            مده الاختبار
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            ساعه
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex"></span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 mb-24   border-dashed border-0">
                      <Link
                        to="/start-exam"
                        className="flex-align gap-8 text-main-600 justify-content-center hover-text-decoration-underline transition-1 fw-semibold"
                      >
                        بدآ الاختبار
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12  border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <a href="#" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/bg-course-2.png"
                        alt="exam Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </a>
                  </div>
                  <div className="pt-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          اختبار الرياضيات
                        </a>
                      </h4>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-lightbulb"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الرياضيات
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            150
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                            >
                              <path
                                d="M17.2727 2C15.2682 2 13.5023 3.16667 12.5 5C11.4977 3.16667 9.73182 2 7.72727 2C4.57727 2 2 5 2 8.66667C2 15.2778 12.5 22 12.5 22C12.5 22 23 15.3333 23 8.66667C23 5 20.4227 2 17.2727 2Z"
                                fill="#F44336"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-users"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الصف الاول الاعدادي
                          </span>
                        </div>
                        <div className="flex-align gap-4">
                          <span className="text-lg text-neutral-700">4.6</span>{" "}
                          <span className="text-2xl fw-medium text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-clock"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            مده الاختبار
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            ساعه
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex"></span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 mb-24   border-dashed border-0">
                      <Link
                        to="/start-exam"
                        className="flex-align gap-8 text-main-600 justify-content-center hover-text-decoration-underline transition-1 fw-semibold"
                      >
                        بدآ الاختبار
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-programming"
            role="tabpanel"
            aria-labelledby="pills-programming-tab"
            tabindex="0"
          >
            <div className="row justify-content-center gy-4">
              <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12  border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <a href="#" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/bg-course-2.png"
                        alt="exam Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </a>
                  </div>
                  <div className="pt-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          اختبار الرياضيات
                        </a>
                      </h4>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-lightbulb"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الرياضيات
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            150
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                            >
                              <path
                                d="M17.2727 2C15.2682 2 13.5023 3.16667 12.5 5C11.4977 3.16667 9.73182 2 7.72727 2C4.57727 2 2 5 2 8.66667C2 15.2778 12.5 22 12.5 22C12.5 22 23 15.3333 23 8.66667C23 5 20.4227 2 17.2727 2Z"
                                fill="#F44336"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-users"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الصف الاول الاعدادي
                          </span>
                        </div>
                        <div className="flex-align gap-4">
                          <span className="text-lg text-neutral-700">4.6</span>{" "}
                          <span className="text-2xl fw-medium text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-clock"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            مده الاختبار
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            ساعه
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex"></span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 mb-24   border-dashed border-0">
                      <Link
                        to="/start-exam"
                        className="flex-align gap-8 text-main-600 justify-content-center hover-text-decoration-underline transition-1 fw-semibold"
                      >
                        بدآ الاختبار
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12  border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <a href="#" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/bg-course-2.png"
                        alt="exam Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </a>
                  </div>
                  <div className="pt-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          اختبار الرياضيات
                        </a>
                      </h4>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-lightbulb"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الرياضيات
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            150
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                            >
                              <path
                                d="M17.2727 2C15.2682 2 13.5023 3.16667 12.5 5C11.4977 3.16667 9.73182 2 7.72727 2C4.57727 2 2 5 2 8.66667C2 15.2778 12.5 22 12.5 22C12.5 22 23 15.3333 23 8.66667C23 5 20.4227 2 17.2727 2Z"
                                fill="#F44336"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-users"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الصف الاول الاعدادي
                          </span>
                        </div>
                        <div className="flex-align gap-4">
                          <span className="text-lg text-neutral-700">4.6</span>{" "}
                          <span className="text-2xl fw-medium text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-clock"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            مده الاختبار
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            ساعه
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex"></span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 mb-24   border-dashed border-0">
                      <Link
                        to="/start-exam"
                        className="flex-align gap-8 text-main-600 justify-content-center hover-text-decoration-underline transition-1 fw-semibold"
                      >
                        بدآ الاختبار
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12  border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <a href="#" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/bg-course-2.png"
                        alt="exam Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </a>
                  </div>
                  <div className="pt-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          اختبار الرياضيات
                        </a>
                      </h4>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-lightbulb"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الرياضيات
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            150
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                            >
                              <path
                                d="M17.2727 2C15.2682 2 13.5023 3.16667 12.5 5C11.4977 3.16667 9.73182 2 7.72727 2C4.57727 2 2 5 2 8.66667C2 15.2778 12.5 22 12.5 22C12.5 22 23 15.3333 23 8.66667C23 5 20.4227 2 17.2727 2Z"
                                fill="#F44336"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-users"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الصف الاول الاعدادي
                          </span>
                        </div>
                        <div className="flex-align gap-4">
                          <span className="text-lg text-neutral-700">4.6</span>{" "}
                          <span className="text-2xl fw-medium text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-clock"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            مده الاختبار
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            ساعه
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex"></span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 mb-24   border-dashed border-0">
                      <Link
                        to="/start-exam"
                        className="flex-align gap-8 text-main-600 justify-content-center hover-text-decoration-underline transition-1 fw-semibold"
                      >
                        بدآ الاختبار
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-webDesign"
            role="tabpanel"
            aria-labelledby="pills-webDesign-tab"
            tabindex="0"
          >
            <div className="row justify-content-center gy-4">
              <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12  border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <a href="#" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/bg-course-2.png"
                        alt="exam Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </a>
                  </div>
                  <div className="pt-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          اختبار الرياضيات
                        </a>
                      </h4>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-lightbulb"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الرياضيات
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            150
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                            >
                              <path
                                d="M17.2727 2C15.2682 2 13.5023 3.16667 12.5 5C11.4977 3.16667 9.73182 2 7.72727 2C4.57727 2 2 5 2 8.66667C2 15.2778 12.5 22 12.5 22C12.5 22 23 15.3333 23 8.66667C23 5 20.4227 2 17.2727 2Z"
                                fill="#F44336"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-users"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الصف الاول الاعدادي
                          </span>
                        </div>
                        <div className="flex-align gap-4">
                          <span className="text-lg text-neutral-700">4.6</span>{" "}
                          <span className="text-2xl fw-medium text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-clock"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            مده الاختبار
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            ساعه
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex"></span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 mb-24   border-dashed border-0">
                      <Link
                        to="/start-exam"
                        className="flex-align gap-8 text-main-600 justify-content-center hover-text-decoration-underline transition-1 fw-semibold"
                      >
                        بدآ الاختبار
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12  border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <a href="#" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/bg-course-2.png"
                        alt="exam Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </a>
                  </div>
                  <div className="pt-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          اختبار الرياضيات
                        </a>
                      </h4>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-lightbulb"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الرياضيات
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            150
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                            >
                              <path
                                d="M17.2727 2C15.2682 2 13.5023 3.16667 12.5 5C11.4977 3.16667 9.73182 2 7.72727 2C4.57727 2 2 5 2 8.66667C2 15.2778 12.5 22 12.5 22C12.5 22 23 15.3333 23 8.66667C23 5 20.4227 2 17.2727 2Z"
                                fill="#F44336"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-users"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الصف الاول الاعدادي
                          </span>
                        </div>
                        <div className="flex-align gap-4">
                          <span className="text-lg text-neutral-700">4.6</span>{" "}
                          <span className="text-2xl fw-medium text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-clock"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            مده الاختبار
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            ساعه
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex"></span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 mb-24   border-dashed border-0">
                      <Link
                        to="/start-exam"
                        className="flex-align gap-8 text-main-600 justify-content-center hover-text-decoration-underline transition-1 fw-semibold"
                      >
                        بدآ الاختبار
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12  border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <a href="#" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/bg-course-2.png"
                        alt="exam Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </a>
                  </div>
                  <div className="pt-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          اختبار الرياضيات
                        </a>
                      </h4>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-lightbulb"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الرياضيات
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            150
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                            >
                              <path
                                d="M17.2727 2C15.2682 2 13.5023 3.16667 12.5 5C11.4977 3.16667 9.73182 2 7.72727 2C4.57727 2 2 5 2 8.66667C2 15.2778 12.5 22 12.5 22C12.5 22 23 15.3333 23 8.66667C23 5 20.4227 2 17.2727 2Z"
                                fill="#F44336"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-users"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الصف الاول الاعدادي
                          </span>
                        </div>
                        <div className="flex-align gap-4">
                          <span className="text-lg text-neutral-700">4.6</span>{" "}
                          <span className="text-2xl fw-medium text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-clock"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            مده الاختبار
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            ساعه
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex"></span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 mb-24   border-dashed border-0">
                      <Link
                        to="/start-exam"
                        className="flex-align gap-8 text-main-600 justify-content-center hover-text-decoration-underline transition-1 fw-semibold"
                      >
                        بدآ الاختبار
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-Academic"
            role="tabpanel"
            aria-labelledby="pills-Academic-tab"
            tabindex="0"
          >
            <div className="row justify-content-center gy-4">
              <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12  border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <a href="#" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/bg-course-2.png"
                        alt="exam Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </a>
                  </div>
                  <div className="pt-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          اختبار الرياضيات
                        </a>
                      </h4>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-lightbulb"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الرياضيات
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            150
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                            >
                              <path
                                d="M17.2727 2C15.2682 2 13.5023 3.16667 12.5 5C11.4977 3.16667 9.73182 2 7.72727 2C4.57727 2 2 5 2 8.66667C2 15.2778 12.5 22 12.5 22C12.5 22 23 15.3333 23 8.66667C23 5 20.4227 2 17.2727 2Z"
                                fill="#F44336"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-users"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الصف الاول الاعدادي
                          </span>
                        </div>
                        <div className="flex-align gap-4">
                          <span className="text-lg text-neutral-700">4.6</span>{" "}
                          <span className="text-2xl fw-medium text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-clock"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            مده الاختبار
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            ساعه
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex"></span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 mb-24   border-dashed border-0">
                      <Link
                        to="/start-exam"
                        className="flex-align gap-8 text-main-600 justify-content-center hover-text-decoration-underline transition-1 fw-semibold"
                      >
                        بدآ الاختبار
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12  border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <a href="#" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/bg-course-2.png"
                        alt="exam Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </a>
                  </div>
                  <div className="pt-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          اختبار الرياضيات
                        </a>
                      </h4>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-lightbulb"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الرياضيات
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            150
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                            >
                              <path
                                d="M17.2727 2C15.2682 2 13.5023 3.16667 12.5 5C11.4977 3.16667 9.73182 2 7.72727 2C4.57727 2 2 5 2 8.66667C2 15.2778 12.5 22 12.5 22C12.5 22 23 15.3333 23 8.66667C23 5 20.4227 2 17.2727 2Z"
                                fill="#F44336"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-users"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الصف الاول الاعدادي
                          </span>
                        </div>
                        <div className="flex-align gap-4">
                          <span className="text-lg text-neutral-700">4.6</span>{" "}
                          <span className="text-2xl fw-medium text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-clock"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            مده الاختبار
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            ساعه
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex"></span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 mb-24   border-dashed border-0">
                      <Link
                        to="/start-exam"
                        className="flex-align gap-8 text-main-600 justify-content-center hover-text-decoration-underline transition-1 fw-semibold"
                      >
                        بدآ الاختبار
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12  border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <a href="#" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/bg-course-2.png"
                        alt="exam Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </a>
                  </div>
                  <div className="pt-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          اختبار الرياضيات
                        </a>
                      </h4>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-lightbulb"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الرياضيات
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            150
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                            >
                              <path
                                d="M17.2727 2C15.2682 2 13.5023 3.16667 12.5 5C11.4977 3.16667 9.73182 2 7.72727 2C4.57727 2 2 5 2 8.66667C2 15.2778 12.5 22 12.5 22C12.5 22 23 15.3333 23 8.66667C23 5 20.4227 2 17.2727 2Z"
                                fill="#F44336"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-users"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الصف الاول الاعدادي
                          </span>
                        </div>
                        <div className="flex-align gap-4">
                          <span className="text-lg text-neutral-700">4.6</span>{" "}
                          <span className="text-2xl fw-medium text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-clock"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            مده الاختبار
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            ساعه
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex"></span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 mb-24   border-dashed border-0">
                      <Link
                        to="/start-exam"
                        className="flex-align gap-8 text-main-600 justify-content-center hover-text-decoration-underline transition-1 fw-semibold"
                      >
                        بدآ الاختبار
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-marketing"
            role="tabpanel"
            aria-labelledby="pills-marketing-tab"
            tabindex="0"
          >
            <div className="row justify-content-center gy-4">
              <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12  border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <a href="#" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/bg-course-2.png"
                        alt="exam Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </a>
                  </div>
                  <div className="pt-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          اختبار الرياضيات
                        </a>
                      </h4>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-lightbulb"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الرياضيات
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            150
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                            >
                              <path
                                d="M17.2727 2C15.2682 2 13.5023 3.16667 12.5 5C11.4977 3.16667 9.73182 2 7.72727 2C4.57727 2 2 5 2 8.66667C2 15.2778 12.5 22 12.5 22C12.5 22 23 15.3333 23 8.66667C23 5 20.4227 2 17.2727 2Z"
                                fill="#F44336"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-users"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الصف الاول الاعدادي
                          </span>
                        </div>
                        <div className="flex-align gap-4">
                          <span className="text-lg text-neutral-700">4.6</span>{" "}
                          <span className="text-2xl fw-medium text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-clock"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            مده الاختبار
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            ساعه
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex"></span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 mb-24   border-dashed border-0">
                      <Link
                        to="/start-exam"
                        className="flex-align gap-8 text-main-600 justify-content-center hover-text-decoration-underline transition-1 fw-semibold"
                      >
                        بدآ الاختبار
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12  border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <a href="#" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/bg-course-2.png"
                        alt="exam Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </a>
                  </div>
                  <div className="pt-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          اختبار الرياضيات
                        </a>
                      </h4>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-lightbulb"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الرياضيات
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            150
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                            >
                              <path
                                d="M17.2727 2C15.2682 2 13.5023 3.16667 12.5 5C11.4977 3.16667 9.73182 2 7.72727 2C4.57727 2 2 5 2 8.66667C2 15.2778 12.5 22 12.5 22C12.5 22 23 15.3333 23 8.66667C23 5 20.4227 2 17.2727 2Z"
                                fill="#F44336"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-users"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الصف الاول الاعدادي
                          </span>
                        </div>
                        <div className="flex-align gap-4">
                          <span className="text-lg text-neutral-700">4.6</span>{" "}
                          <span className="text-2xl fw-medium text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-clock"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            مده الاختبار
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            ساعه
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex"></span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 mb-24   border-dashed border-0">
                      <Link
                        to="/start-exam"
                        className="flex-align gap-8 text-main-600 justify-content-center hover-text-decoration-underline transition-1 fw-semibold"
                      >
                        بدآ الاختبار
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12  border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <a href="#" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/bg-course-2.png"
                        alt="exam Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </a>
                  </div>
                  <div className="pt-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          اختبار الرياضيات
                        </a>
                      </h4>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-lightbulb"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الرياضيات
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            150
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                            >
                              <path
                                d="M17.2727 2C15.2682 2 13.5023 3.16667 12.5 5C11.4977 3.16667 9.73182 2 7.72727 2C4.57727 2 2 5 2 8.66667C2 15.2778 12.5 22 12.5 22C12.5 22 23 15.3333 23 8.66667C23 5 20.4227 2 17.2727 2Z"
                                fill="#F44336"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-users"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            الصف الاول الاعدادي
                          </span>
                        </div>
                        <div className="flex-align gap-4">
                          <span className="text-lg text-neutral-700">4.6</span>{" "}
                          <span className="text-2xl fw-medium text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-clock"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                            مده الاختبار
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-lg fw-medium">
                            ساعه
                          </span>{" "}
                          <span className="text-neutral-700 text-2xl d-flex"></span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 mb-24   border-dashed border-0">
                      <Link
                        to="/start-exam"
                        className="flex-align gap-8 text-main-600 justify-content-center hover-text-decoration-underline transition-1 fw-semibold"
                      >
                        بدآ الاختبار
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ExamPage;
