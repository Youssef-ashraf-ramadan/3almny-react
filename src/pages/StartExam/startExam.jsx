import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { changeTestStatus, getTestById, submitTestAnswers } from "../../redux/features/actions/testActions";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function StartExamPage(){
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const token = localStorage.getItem('token');
if (!token) {
    return <Navigate to="/login" />;
    
}

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
  const dispatch = useDispatch();
  const { join, test, answer,isLoading, error } = useSelector((state) => state.tests);
  const { id } = useParams();
  
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleSelectAnswer = (questionId, answerId) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answerId,
    }));
  };
console.log(answer);

  // Handle form submission
  const handleSubmitAnswers = () => {
    const answersArray = Object.entries(selectedAnswers).map(([question_id, answer_id]) => ({
      question_id: Number(question_id),
      answer_id,
    }));

    dispatch(submitTestAnswers({ testId: id, answers: answersArray }));
  };

  useEffect(() => {
    if (id) {
      dispatch(getTestById(id));
      dispatch(changeTestStatus(id));
    }
  }, [dispatch, id]);

  useEffect(()=>{
    if (answer.status == true) {
      window.location.href="/exam"
    }
  },[answer])

  // حساب مدة الامتحان بشكل آمن
  const [timeLeft, setTimeLeft] = useState(null); // تعيين القيمة الأولية إلى null

  // تحديث timeLeft عند تحميل test
  useEffect(() => {
    if (test?.data?.deadline) {
      setTimeLeft(parseInt(test.data.deadline, 10) * 60);
    }
  }, [test]);
  
  useEffect(() => {
    if (timeLeft === null) return; // لا تبدأ العداد قبل تحميل test
    if (timeLeft <= 0) {
      alert("انتهى الوقت!");
      window.location.href = "/exam"; 
      return;
    }
  
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
  
    return () => clearInterval(timer);
  }, [timeLeft]);
  
  
  useEffect(() => {
    if (error === "تم البدأ من قبل") {
      alert("انت بالفعل انضممت من قبل");
      // toast.success("انت بالفعل انضممت من قبل");
      window.location.href = "/exam";
    }
  }, [error]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // alert("لا يمكنك مغادرة الصفحة أثناء الاختبار!");
        window.location.href = "/exam";
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);



    return    (
        <section className="startexam-section py-40">
          <div className="container">
            <div className="row gy-5">
              {/* Exam Header with Name and Timer */}
              <div className="col-12">
                <div className="d-flex justify-content-between flex-wrap align-items-center">
                  <h4>{test?.data?.name}</h4>
                  <span className="badge bg-primary d-flex align-items-center gap-4 fs-5">
                    {timeLeft || test?.data?.duration } <i className="ph-bold ph-clock"></i>
                  </span>
                </div>
              </div>

              {test?.data?.questions?.map((question, index) => (
        <div className="col-12" key={index}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">السؤال {index + 1}</h5>
              <p className="card-text">{question?.title}</p>
              <div className="mt-12">
                {question?.answers?.map((answer) => (
                  <div className="form-check mb-16" key={answer.id}>
                    <input
                      className="form-check-input"
                      style={{ width: "25px", height: "25px" }}
                      type="radio"
                      name={`question${index}`}
                      id={answer.id}
                      value={answer.id}
                      checked={selectedAnswers[question.id] === answer.id}
                      onChange={() => handleSelectAnswer(question.id, answer.id)}
                    />
                    <label className="form-check-label fs-5" htmlFor={answer.id}>
                      {answer.content}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

              {/* Submit Button */}
              <div className="col-12">
              <button
          onClick={handleSubmitAnswers}
          className="btn btn-primary mx-auto text-center d-block"
          style={{ width: "160px", maxWidth: "100%" }}
        >
          ارسال الاجوبه
        </button>
              </div>
            </div>
          </div>
          <ToastContainer />

        </section>
      );

}
export default StartExamPage;