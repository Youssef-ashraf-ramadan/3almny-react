import { Link, Navigate } from "react-router-dom";
import { fetchTeachers, fetchTeachersBySubject } from "../../redux/features/actions/teacherActions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
function Teachers() {
  const token = localStorage.getItem('token');
if (!token) {
    return <Navigate to="/login" />;

    
}
  return (
    <>
      <TeacherBanner />
      <TeachersLists />
    </>
  );
}
function TeacherBanner() {
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
                المدرسين
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
                  >
                    {" "}
                  </Link>
                </li>
                <li className="breadcrumb__item d-none">
                  <i className="text-neutral-500 d-flex ph-bold ph-caret-right"></i>
                </li>
                <li className="breadcrumb__item">
                  <span className="text-main-two-600"> المدرسين </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function TeachersLists() {



  const dispatch = useDispatch();
  const { teachers, isLoading, error } = useSelector((state) => state.teachers);

        const [currentPage, setCurrentPage] = useState(1);
          const [totalPages, setTotalPages] = useState(1);


  console.log(teachers)
  useEffect(() => {
    dispatch(fetchTeachers(currentPage));
  }, [dispatch,currentPage]);

  return (
    <section className="instructor py-40 position-relative z-1">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="mb-24">المدرسين</h2>
          <p className="">
            لا تفوت فرصة تعلم شيء جديد! احجز حصتك الآن مع أفضل المدرسين لتحقيق
            أهدافك التعليمية بكل ثقة.
          </p>
        </div>
        {/* <div className="text-center">
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
        </div> */}

        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-categories"
            role="tabpanel"
            aria-labelledby="pills-categories-tab"
            tabindex="0"
          >
            <div className="row justify-content-center gy-4">
  {isLoading ? (
    <SkeletonTheme baseColor="lightgray" >
    
      <Skeleton count={9} />
    
  </SkeletonTheme>
) : error ? (
    <p>Error: {error.message}</p>
) : (
  teachers?.data?.map((teacher) => (


              <div key={teacher.id} className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <Link to={`/teacher/${teacher.id}`}
                    className="w-100 h-100 d-flex align-items-end">
                      <img
                        src={ teacher.avatar }
                        alt="Course Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </Link>
                  </div>
                  <div className="p-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <Link to={`/teacher/${teacher.id}`} className="link text-line-2">
                        { teacher.name }
                        </Link>
                      </h4>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-lightbulb"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                          {teacher.subject[0]?.name ?? ''} 
                          
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          {/* <span className="text-neutral-700 text-lg fw-medium">
                            150
                          </span>{" "} */}

                          {teacher.user_has_loved ? (
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
                          ):(
                            <span className="text-neutral-700 text-2xl d-flex">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    stroke="currentColor" 
    strokeWidth="2" 
  >
    <path
      d="M17.2727 2C15.2682 2 13.5023 3.16667 12.5 5C11.4977 3.16667 9.73182 2 7.72727 2C4.57727 2 2 5 2 8.66667C2 15.2778 12.5 22 12.5 22C12.5 22 23 15.3333 23 8.66667C23 5 20.4227 2 17.2727 2Z"
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
    />
  </svg>
</span>

                          )}
                          



                          
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <i className="ph-bold ph-users"></i>
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">
                          { teacher.class?.name ?? '' } 
                          </span>
                        </div>
                        <div className="flex-align gap-4">
                          <span className="text-lg text-neutral-700">{Number(teacher.max_rating).toFixed(2)}
                          </span>{" "}
                          <span className="text-2xl fw-medium text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
<Link
  to={`/lessons/teacher/${teacher.id}`}
  className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
  tabIndex="0"
>
  عرض الحصص
</Link>

                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                      <a
                        href="#"
                        className="flex-align gap-8 justify-content-center text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                        tabindex="0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
  ))
)}



              {/* <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <Link to="" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/user2.png"
                        alt="Course Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </Link>
                  </div>
                  <div className="p-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          احمد ابراهيم عثمان
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
                      <div className="flex-between gap-8 flex-wrap">
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
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
<Link
  to="/lessons"
  className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
  tabIndex="0"
>
  عرض الحصص
</Link>

                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                      <a
                        href="#"
                        className="flex-align gap-8 justify-content-center text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                        tabindex="0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <Link to="" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/user2.png"
                        alt="Course Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </Link>
                  </div>
                  <div className="p-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          احمد ابراهيم عثمان
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
                      <div className="flex-between gap-8 flex-wrap">
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
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
<Link
  to="/lessons"
  className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
  tabIndex="0"
>
  عرض الحصص
</Link>

                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                      <a
                        href="#"
                        className="flex-align gap-8 justify-content-center text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                        tabindex="0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
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
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <Link to="" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/user2.png"
                        alt="Course Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </Link>
                  </div>
                  <div className="p-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          احمد ابراهيم عثمان
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
                      <div className="flex-between gap-8 flex-wrap">
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
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
<Link
  to="/lessons"
  className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
  tabIndex="0"
>
  عرض الحصص
</Link>

                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                      <a
                        href="#"
                        className="flex-align gap-8 justify-content-center text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                        tabindex="0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <Link to="" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/user2.png"
                        alt="Course Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </Link>
                  </div>
                  <div className="p-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          احمد ابراهيم عثمان
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
                      <div className="flex-between gap-8 flex-wrap">
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
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
<Link
  to="/lessons"
  className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
  tabIndex="0"
>
  عرض الحصص
</Link>

                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                      <a
                        href="#"
                        className="flex-align gap-8 justify-content-center text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                        tabindex="0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <Link to="" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/user2.png"
                        alt="Course Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </Link>
                  </div>
                  <div className="p-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          احمد ابراهيم عثمان
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
                      <div className="flex-between gap-8 flex-wrap">
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
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
<Link
  to="/lessons"
  className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
  tabIndex="0"
>
  عرض الحصص
</Link>

                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                      <a
                        href="#"
                        className="flex-align gap-8 justify-content-center text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                        tabindex="0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                      </a>
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
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <Link to="" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/user2.png"
                        alt="Course Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </Link>
                  </div>
                  <div className="p-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          احمد ابراهيم عثمان
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
                      <div className="flex-between gap-8 flex-wrap">
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
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
<Link
  to="/lessons"
  className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
  tabIndex="0"
>
  عرض الحصص
</Link>

                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                      <a
                        href="#"
                        className="flex-align gap-8 justify-content-center text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                        tabindex="0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <Link to="" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/user2.png"
                        alt="Course Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </Link>
                  </div>
                  <div className="p-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          احمد ابراهيم عثمان
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
                      <div className="flex-between gap-8 flex-wrap">
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
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
<Link
  to="/lessons"
  className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
  tabIndex="0"
>
  عرض الحصص
</Link>

                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                      <a
                        href="#"
                        className="flex-align gap-8 justify-content-center text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                        tabindex="0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <Link to="" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/user2.png"
                        alt="Course Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </Link>
                  </div>
                  <div className="p-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          احمد ابراهيم عثمان
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
                      <div className="flex-between gap-8 flex-wrap">
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
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
<Link
  to="/lessons"
  className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
  tabIndex="0"
>
  عرض الحصص
</Link>

                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                      <a
                        href="#"
                        className="flex-align gap-8 justify-content-center text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                        tabindex="0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                      </a>
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
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <Link to="" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/user2.png"
                        alt="Course Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </Link>
                  </div>
                  <div className="p-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          احمد ابراهيم عثمان
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
                      <div className="flex-between gap-8 flex-wrap">
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
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
<Link
  to="/lessons"
  className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
  tabIndex="0"
>
  عرض الحصص
</Link>

                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                      <a
                        href="#"
                        className="flex-align gap-8 justify-content-center text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                        tabindex="0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <Link to="" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/user2.png"
                        alt="Course Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </Link>
                  </div>
                  <div className="p-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          احمد ابراهيم عثمان
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
                      <div className="flex-between gap-8 flex-wrap">
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
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
<Link
  to="/lessons"
  className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
  tabIndex="0"
>
  عرض الحصص
</Link>

                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                      <a
                        href="#"
                        className="flex-align gap-8 justify-content-center text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                        tabindex="0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <Link to="" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/user2.png"
                        alt="Course Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </Link>
                  </div>
                  <div className="p-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          احمد ابراهيم عثمان
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
                      <div className="flex-between gap-8 flex-wrap">
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
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
<Link
  to="/lessons"
  className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
  tabIndex="0"
>
  عرض الحصص
</Link>

                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                      <a
                        href="#"
                        className="flex-align gap-8 justify-content-center text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                        tabindex="0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                      </a>
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
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <Link to="" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/user2.png"
                        alt="Course Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </Link>
                  </div>
                  <div className="p-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          احمد ابراهيم عثمان
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
                      <div className="flex-between gap-8 flex-wrap">
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
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
<Link
  to="/lessons"
  className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
  tabIndex="0"
>
  عرض الحصص
</Link>

                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                      <a
                        href="#"
                        className="flex-align gap-8 justify-content-center text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                        tabindex="0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <Link to="" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/user2.png"
                        alt="Course Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </Link>
                  </div>
                  <div className="p-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          احمد ابراهيم عثمان
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
                      <div className="flex-between gap-8 flex-wrap">
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
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
<Link
  to="/lessons"
  className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
  tabIndex="0"
>
  عرض الحصص
</Link>

                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                      <a
                        href="#"
                        className="flex-align gap-8 justify-content-center text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                        tabindex="0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <Link to="" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/user2.png"
                        alt="Course Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </Link>
                  </div>
                  <div className="p-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          احمد ابراهيم عثمان
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
                      <div className="flex-between gap-8 flex-wrap">
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
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
<Link
  to="/lessons"
  className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
  tabIndex="0"
>
  عرض الحصص
</Link>

                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                      <a
                        href="#"
                        className="flex-align gap-8 justify-content-center text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                        tabindex="0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                      </a>
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
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <Link to="" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/user2.png"
                        alt="Course Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </Link>
                  </div>
                  <div className="p-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          احمد ابراهيم عثمان
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
                      <div className="flex-between gap-8 flex-wrap">
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
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
<Link
  to="/lessons"
  className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
  tabIndex="0"
>
  عرض الحصص
</Link>

                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                      <a
                        href="#"
                        className="flex-align gap-8 justify-content-center text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                        tabindex="0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <Link to="" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/user2.png"
                        alt="Course Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </Link>
                  </div>
                  <div className="p-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          احمد ابراهيم عثمان
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
                      <div className="flex-between gap-8 flex-wrap">
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
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
<Link
  to="/lessons"
  className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
  tabIndex="0"
>
  عرض الحصص
</Link>

                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                      <a
                        href="#"
                        className="flex-align gap-8 justify-content-center text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                        tabindex="0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="instructor-item scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                  <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                    <Link to="" className="w-100 h-100 d-flex align-items-end">
                      <img
                        src="assets/images/bg/user2.png"
                        alt="Course Image"
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                      />
                    </Link>
                  </div>
                  <div className="p-24 position-relative">
                    <div className="">
                      <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                        <a href="#" className="link text-line-2">
                          احمد ابراهيم عثمان
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
                      <div className="flex-between gap-8 flex-wrap">
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
                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
<Link
  to="/lessons"
  className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
  tabIndex="0"
>
  عرض الحصص
</Link>

                    </div>
                    <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                      <a
                        href="#"
                        className="flex-align gap-8 justify-content-center text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                        tabindex="0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M10.7533 0.724074C10.8817 0.503761 11.0656 0.320961 11.2867 0.19391C11.5078 0.06686 11.7583 0 12.0133 0C12.2683 0 12.5188 0.06686 12.7399 0.19391C12.961 0.320961 13.1449 0.503761 13.2733 0.724074L16.5341 6.32174L22.8668 7.69374C23.1159 7.74787 23.3464 7.86635 23.5355 8.03736C23.7245 8.20838 23.8654 8.42595 23.9441 8.6684C24.0229 8.91085 24.0367 9.1697 23.9842 9.41915C23.9317 9.66859 23.8147 9.89992 23.645 10.0901L19.3283 14.9212L19.9816 21.3671C20.0074 21.6209 19.9661 21.877 19.862 22.1099C19.7578 22.3428 19.5943 22.5443 19.3879 22.6942C19.1815 22.8442 18.9394 22.9374 18.6857 22.9645C18.4321 22.9916 18.1757 22.9517 17.9423 22.8487L12.0133 20.2354L6.08429 22.8487C5.85086 22.9517 5.59451 22.9916 5.34083 22.9645C5.08716 22.9374 4.84504 22.8442 4.63864 22.6942C4.43224 22.5443 4.2688 22.3428 4.16462 22.1099C4.06044 21.877 4.01918 21.6209 4.04496 21.3671L4.69829 14.9212L0.381622 10.0912C0.211554 9.9011 0.0943363 9.66968 0.041671 9.42008C-0.0109943 9.17048 0.00273536 8.91143 0.0814892 8.66879C0.160243 8.42615 0.301266 8.20842 0.490479 8.03732C0.679692 7.86623 0.910475 7.74776 1.15979 7.69374L7.49246 6.32174L10.7533 0.724074Z"
                            fill="#FFC300"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <nav>
                <ul className="pagination justify-content-center mt-5">
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

      </div>
    </section>
  );
}
export default Teachers;
