import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { ansQuestion, fetchAnswers, fetchOneFaq } from "../../redux/features/actions/faqAction";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
function AnswersPages(){
  const token = localStorage.getItem('token');
if (!token) {
    return <Navigate to="/login" />;
    
}
    return <>
    <AnswersPagesBanner />
    <AnswersPagesDetails />
    </>
}
function AnswersPagesBanner(){
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
                  <h1 className="breadcrumb__title display-4 fw-semibold text-center">الاجابات</h1>
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
                      <span className="text-main-two-600">الاجابات</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}
function AnswersPagesDetails(){
const {id}=useParams()

const dispatch = useDispatch();
const { answers,answer,faq, isLoading, error } = useSelector((state) => state.faq);


useEffect(() => {
  if (id) {
    dispatch(fetchAnswers(id));
    dispatch(fetchOneFaq(id))
  }
}, [dispatch, id,answer]);

const [formData, setFormData] = useState({
  content: "",
});

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.content.trim()) {
    alert("يرجى إدخال الإجابة.");
    return;
  }

  dispatch(ansQuestion({ content: formData.content, post_id: id }));
  setFormData({ ...formData, content: "" });
};


    return   <section className="tutor-details py-40">
    <div className="container">
      <div className="row gy-4">
        <div className="row gy-4">
          <div className="col-lg-12">
            <div className="bg-main-25 rounded-16 p-12 border border-neutral-30">
              <div className="rounded-12 overflow-hidden position-relative">
                <div className="position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium">
                  <h3 className="mb-0 text-white fw-medium">21</h3>
                  ديسمبر
                </div>
              </div>
              <div className="pt-32 pb-24 px-16 position-relative">
                <div className="flex-align gap-14 flex-wrap mb-20">
                  <div className="flex-align gap-8">
                    <span className="text-neutral-500 text-2xl d-flex">
                      <i className="ph ph-user-circle"></i>
                    </span>
                    <span className="text-neutral-500 text-lg">{faq?.data?.user?.name}</span>
                  </div>
                  {/* <span className="w-8 h-8 bg-neutral-100 rounded-circle"></span>
                  <div className="flex-align gap-8">
                    <span className="text-neutral-500 text-2xl d-flex">
                      <i className="ph-bold ph-eye"></i>
                    </span>
                    <span className="text-neutral-500 text-lg">1.6k</span>
                  </div> */}
                  {/* <span className="w-8 h-8 bg-neutral-100 rounded-circle"></span>
                  <div className="flex-align gap-8">
                    <span className="text-neutral-500 text-2xl d-flex">
                      <i className="ph ph-chat-dots"></i>
                    </span>
                    <span className="text-neutral-500 text-lg">24</span>
                  </div> */}
                </div>
                <h2 className="mb-24 fs-2">{faq?.data?.title}</h2>
              </div>
            </div>

            {/* Review Section Start */}
            <div className="border border-neutral-30 rounded-12 bg-main-25 p-32 mt-24">
              <div className="flex-between gap-16 flex-wrap mb-24">
                <h4 className="mb-0">الاجابات</h4>
              </div>
              {isLoading ? (
  <SkeletonTheme baseColor="lightgray">
    <Skeleton count={9} />
  </SkeletonTheme>
) : error ? (
  <p>Error: {error}</p> // لا تحتاج إلى `error.message` هنا لأنه `error` هو string في `rejected`
) : (
  answers?.data?.map((answer) => (
    <div
      className="border border-neutral-30 mt-16 rounded-12 bg-white p-32"
      key={answer.id}
    >
      <p className="text-neutral-700 fs-4">"الناتج هو {answer.content}"</p>
      <span className="d-block border border-neutral-30 my-24 border-dashed"></span>
      <div className="flex-align flex-wrap gap-24">
        <img
          src="/assets/images/bg/user2.png"
          alt=""
          className="w-60 h-60 rounded-circle cover-img"
        />
        <div>
          <h6 className="text-xl mb-8 fw-medium">{answer?.user?.name}</h6>
          {/* <span className="text-neutral-700 text-sm">طالب</span> */}
        </div>
      </div>
      {/* <span className="d-block border border-neutral-30 my-24 border-dashed"></span> */}

      {/* <div className="flex-align flex-wrap gap-40">
        <Link
          to="#commentForm"
          className="flex-align gap-8 text-neutral-500 hover-text-main-600"
        >
          <i className="text-xl d-flex ph-bold ph-chat-centered-text"></i>
          رد
        </Link>
      </div> */}
      {/* <div className="flex-align gap-20 flex-wrap mt-24">
        <img
          src="assets/images/bg/user.png"
          alt=""
          className="w-60 h-60 rounded-circle cover-img"
        />
        <input
          type="text"
          className="common-input rounded-pill bg-main-25 border-neutral-30 py-16"
          placeholder="اكتب اجابتك"
        />
      </div> */}
    </div>
  ))
)}

            </div>
            {/* Review Section End */}

            {/* Review Form Start */}
            <div className="border border-neutral-30 rounded-12 bg-main-25 p-32 mt-24">
            <form id="commentForm" onSubmit={handleSubmit}>
            <h5 className="mb-0">اكتب اجابتك</h5>
                <span className="d-block border border-neutral-30 my-32 border-dashed"></span>
                {/* <div className="mb-24">
                  <label
                    htmlFor="name"
                    className="text-neutral-700 text-lg fw-medium mb-12"
                  >
                    الاسم
                  </label>
                  <input
                    type="text"
                    className="common-input rounded-pill"
                    id="name"
                    placeholder="اكتب اسمك"
                    value={formData.name}
          onChange={handleChange}

                  />
                </div> */}
                <div className="mb-24">
                  <label
                    htmlFor="desc"
                    className="text-neutral-700 text-lg fw-medium mb-12"
                  >
                    اجابتك
                  </label>
                  <textarea
                    id="desc"
                    name="content"

                    className="common-input rounded-24"
                    placeholder="اكتب اجابتك..."
                    value={formData.content}
          onChange={handleChange}
                  ></textarea>
                </div>
                <div className="mb-0">
                <button
          type="submit"
          className="btn btn-main rounded-pill flex-center gap-8 mt-40"
          disabled={isLoading}
        >
          {isLoading ? "جاري الإرسال..." : "ارسال"}
          <i className="ph-bold ph-arrow-up-left d-flex text-lg"></i>
        </button>
                </div>
                {error && <p className="text-red-500 mt-2">{error}</p>}

              </form>
            </div>
            {/* Review Form End */}
          </div>
        </div>
      </div>
    </div>
  </section>

}
export default AnswersPages;