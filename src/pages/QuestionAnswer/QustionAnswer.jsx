import { Link } from "react-router-dom";

function QuestionAnswerPage(){
    return <>
    <QuestionAnswerBanner />
    <QuestionAnswerDetails />
    </>
}
function QuestionAnswerBanner(){
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
                  <h1 className="breadcrumb__title display-4 fw-semibold text-center">سؤال وجواب</h1>
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
                      <span className="text-main-two-600">سؤال وجواب</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}
function QuestionAnswerDetails(){
    return  <section className="tutor-details py-40">
    <div className="container">
      <div className="row gy-4 justify-content-center">
        {[...Array(3)].map((_, index) => (
          <div className="col-lg-4 col-12" key={index}>
            <div
              className="faq-card"
              style={{ backgroundColor: "#F5F5F5", padding: "20px" }}
            >
              <h1 className="fs-4 text-center">علي مازن</h1>
              <p className="fs-5" style={{ lineHeight: "2.0" }}>
                كم حاصل ضرب 5 * 5 ؟
              </p>
              <div
                className="faq-answer my-24 p-8"
                style={{ backgroundColor: "#6886d2" }}
              >
                <Link
                  to="/answer"
                  className="text-white d-flex align-items-center gap-10"
                >
                  عرض الاجابه <i className="ph-bold ph-arrow-left"></i>
                </Link>
              </div>
              <div className="faq-footer d-flex justify-content-end mt-24">
                <span>
                  5:00 <i className="ph-bold ph-clock"></i>
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Button to Open Modal */}
        <div className="col-12">
          <button
            className="btn btn-primary mx-auto text-center d-block"
            style={{ width: "160px", maxWidth: "100%" }}
            data-bs-toggle="modal"
            data-bs-target="#addQuestionModal"
          >
            اضافه سؤال
          </button>
        </div>

        {/* Modal */}
        <div
          className="modal fade"
          id="addQuestionModal"
          tabIndex="-1"
          aria-labelledby="addQuestionModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-between">
                <h5 className="modal-title" id="addQuestionModalLabel">
                  اضافة سؤال
                </h5>
                <button
                  type="button"
                  className="btn-close mx-3"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  {/* Question Input */}
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      السؤال
                    </label>
                    <input
                      type="text"
                      id="question-name"
                      className="form-control"
                      placeholder="أدخل اسمك"
                      required
                    />
                  </div>
                  {/* Answer Input */}
                  <div className="mb-3">
                    <label htmlFor="question" className="form-label">
                      الإجابة
                    </label>
                    <input
                      type="text"
                      id="question"
                      className="form-control"
                      placeholder="أدخل السؤال"
                      required
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary w-100">
                  حفظ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
export default QuestionAnswerPage;