import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { addQuestion, fetchFaq } from "../../redux/features/actions/faqAction";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
function QuestionAnswerPage(){
  const token = localStorage.getItem('token');
  if (!token) {
      return <Navigate to="/login" />;
      
  }
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

    const dispatch = useDispatch();

  const { faqs,ans, isLoading, error } = useSelector((state) => state.faq);


  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  useEffect(() => {
    dispatch(fetchFaq(currentPage));
  }, [dispatch,currentPage,ans]);





  const [formData, setFormData] = useState({
    title: "",
    body:""
  });

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.title.trim()) {
    alert("يرجى إدخال السؤال.");
    return;
  }


  if (!formData.body.trim()) {
    alert("يرجى إدخال الإجابة.");
    return;
  }

  dispatch(addQuestion({ title: formData.title, body: formData.body,   }));
  setFormData({ ...formData, title: "",body:"" });
};
  



    return  <section className="tutor-details py-40">
    <div className="container">
      <div className="row gy-4 justify-content-center">

      {isLoading ? (
  <SkeletonTheme baseColor="lightgray">
    <Skeleton count={9} />
  </SkeletonTheme>
) : error ? (
  <p>Error: {error.message}</p>
) : (
  faqs?.data?.map((faq, index) => (
    <div className="col-lg-4 col-12" key={index}>
      <div
        className="faq-card"
        style={{ backgroundColor: "#F5F5F5", padding: "20px" }}
      >
        <h1 className="fs-4 text-center">{faq?.user?.name}</h1>
        <p className="fs-5" style={{ lineHeight: "2.0" }}>
          {faq.title}
        </p>
        <div
          className="faq-answer my-24 p-8"
          style={{ backgroundColor: "#6886d2" }}
        >
          <Link
            to={`/faq/${faq.id}`}
            className="text-white d-flex align-items-center gap-10"
          >
            عرض الاجابه <i className="ph-bold ph-arrow-left"></i>
          </Link>
        </div>
        {/* <div className="faq-footer d-flex justify-content-end mt-24">
          <span>
            5:00 <i className="ph-bold ph-clock"></i>
          </span>
        </div> */}
      </div>
    </div>
  ))
)}

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
        <nav>
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <button 
                            className="page-link"
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                    </li>

                    <li className="page-item active">
                        <span className="page-link">Page {currentPage} of {totalPages}</span>
                    </li>

                    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                        <button 
                            className="page-link"
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
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
                <form onSubmit={handleSubmit}>
                  {/* Question Input */}
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      السؤال
                    </label>
                    <input
                      type="text"
                      id="question-name"
                      className="form-control"
                      placeholder="أدخل السؤال"
                      value={formData.title}
                      onChange={handleChange}
                      name="title"

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
                      value={formData.body}
                      onChange={handleChange}
                      name="body"
                      className="form-control"
                      placeholder="أدخل الأجابة"
                      required
                    />
                  </div>
                  <div className="modal-footer">
              {error && <p className="text-red-500 mt-2">{error}</p>}

              <button
          type="submit"
          className="btn btn-main rounded-pill flex-center gap-8 mt-40"
          disabled={isLoading}
        >
          {isLoading ? "جاري الإرسال..." : "ارسال"}
          <i className="ph-bold ph-arrow-up-left d-flex text-lg"></i>
        </button>
              </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
export default QuestionAnswerPage;