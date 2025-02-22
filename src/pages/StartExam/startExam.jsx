import { Link } from "react-router-dom";

function StartExamPage(){
    return <>
    <StartExamPageBanner />
    <StartExamPageDetails />
    </>
}
function StartExamPageBanner(){
    return  (
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
                  <h1 className="breadcrumb__title display-4 fw-semibold text-center">الاختبارات</h1>
                  <ul className="breadcrumb__list d-flex align-items-center justify-content-center gap-4">
                    <li className="breadcrumb__item">
                      <Link
                        to="/"
                        className="breadcrumb__link text-neutral-500 hover-text-main-600 fw-medium"
                      >
                        <i className="text-lg d-inline-flex ph-bold ph-house"></i> الرئيسيه
                      </Link>
                    </li>
                    <li className="breadcrumb__item">
                      <i className="text-neutral-500 d-flex ph-bold ph-caret-right"></i>
                    </li>
                    <li className="breadcrumb__item">
                      <Link
                        to="/course"
                        className="breadcrumb__link text-neutral-500 hover-text-main-600 fw-medium"
                      ></Link>
                    </li>
                    <li className="breadcrumb__item d-none">
                      <i className="text-neutral-500 d-flex ph-bold ph-caret-right"></i>
                    </li>
                    <li className="breadcrumb__item">
                      <span className="text-main-two-600">اختبار الرياضيات</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}
function StartExamPageDetails(){
    return    (
        <section className="startexam-section py-40">
          <div className="container">
            <div className="row gy-5">
              {/* Exam Header with Name and Timer */}
              <div className="col-12">
                <div className="d-flex justify-content-between flex-wrap align-items-center">
                  <h4>اختبار الرياضيات دور مايو</h4>
                  <span className="badge bg-primary d-flex align-items-center gap-4 fs-5">
                    01:30:00 <i className="ph-bold ph-clock"></i>
                  </span>
                </div>
              </div>
    
              {/* Question Card 1 - Multiple Choice */}
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">السؤال الاول</h5>
                    <p className="card-text">ماهو ناتج ضرب ٢ * ٢؟</p>
                    <div className="mt-12">
                      <div className="form-check mb-16">
                        <input
                          className="form-check-input"
                          style={{ width: "25px", height: "25px" }}
                          type="radio"
                          name="question1"
                          id="q1a1"
                        />
                        <label className="form-check-label fs-5" htmlFor="q1a1">
                          4
                        </label>
                      </div>
                      <div className="form-check mb-16">
                        <input
                          className="form-check-input"
                          style={{ width: "25px", height: "25px" }}
                          type="radio"
                          name="question1"
                          id="q1a2"
                        />
                        <label className="form-check-label fs-5" htmlFor="q1a2">
                          6
                        </label>
                      </div>
                      <div className="form-check mb-16">
                        <input
                          className="form-check-input"
                          style={{ width: "25px", height: "25px" }}
                          type="radio"
                          name="question1"
                          id="q1a3"
                        />
                        <label className="form-check-label fs-5" htmlFor="q1a3">
                          8
                        </label>
                      </div>
                      <div className="form-check mb-16">
                        <input
                          className="form-check-input"
                          style={{ width: "25px", height: "25px" }}
                          type="radio"
                          name="question1"
                          id="q1a4"
                        />
                        <label className="form-check-label fs-5" htmlFor="q1a4">
                          10
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              {/* Question Card 2 - Text Input */}
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">السؤال الثاني</h5>
                    <p className="card-text">ماهو ناتج مجموع ٣ + ٣؟</p>
                    <input
                      type="text"
                      className="form-control mt-12"
                      placeholder="اجابتك"
                    />
                  </div>
                </div>
              </div>
    
              {/* Question Card 3 - True or False */}
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">السؤال الثالث</h5>
                    <p className="card-text">٥ + ٥ يساوي ١٠ ؟</p>
                    <div className="mt-12">
                      <div className="form-check mb-16">
                        <input
                          className="form-check-input"
                          style={{ width: "25px", height: "25px" }}
                          type="radio"
                          name="question3"
                          id="q3true"
                        />
                        <label className="form-check-label fs-5" htmlFor="q3true">
                          صح
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          style={{ width: "25px", height: "25px" }}
                          type="radio"
                          name="question3"
                          id="q3false"
                        />
                        <label className="form-check-label fs-5" htmlFor="q3false">
                          غلط
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              {/* Submit Button */}
              <div className="col-12">
                <Link
                  to="#"
                  className="btn btn-primary mx-auto text-center d-block"
                  style={{ width: "160px", maxWidth: "100%" }}
                  data-bs-toggle="modal"
                  data-bs-target="#addQuestionModal"
                >
                  ارسال الاجوبه
                </Link>
              </div>
            </div>
          </div>
        </section>
      );

}
export default StartExamPage;