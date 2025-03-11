import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from "react-router-dom";
import { fetchSubjects } from './../../redux/features/actions/subjectActions';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
function SubjectsPage (){
  const token = localStorage.getItem('token');
if (!token) {
    return <Navigate to="/login" />;
    
}
    return <>
    <SubjectsBanner />
    <SubjectsLists />
    </>
}
function SubjectsBanner (){
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
                    المواد
                  </h1>
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
                      <span className="text-main-two-600"> المواد </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}

function SubjectsLists() {


  const dispatch = useDispatch();
  const { subjects, isLoading, error } = useSelector((state) => state.subjects);
  console.log(subjects);
          const [currentPage, setCurrentPage] = useState(1);
          const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    dispatch(fetchSubjects(currentPage));
  }, [dispatch,currentPage]);



    return (
      <section className="instructor py-40 position-relative z-1">
        <div className="container">
          <div className="section-heading text-center">
            <h2 className="mb-24">المواد</h2>
            <p>يمكنك الان الاطلاع علي كل المواد وعرض الحصص الخاصه بكل ماده</p>
          </div>
          <div className="row gy-4">

 {isLoading ? (
    <SkeletonTheme baseColor="lightgray" >
    
      <Skeleton count={9} />
    
  </SkeletonTheme>
) : error ? (
    <p>Error: {error.message}</p>
) : (
  subjects?.data?.map((subject) => (



            <div className="col-lg-4 col-sm-6">
              <div className="instructor-item scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                  <Link to="#" className="w-100 h-100 d-flex align-items-end">
                    <img
                      src={subject.image }
                      alt="Course Image"
                      className="scale-hover-item__img rounded-12 cover-img transition-2"
                    />
                  </Link>
                </div>
                <div className="p-24 position-relative">
                  <div>
                    <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                      <Link to={`/subject/${subject.id}`} className="link text-line-2">
                      { subject.name }
                      </Link>
                    </h4>
                    <div className="flex-between gap-8 flex-wrap">
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <i className="ph-bold ph-users"></i>
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                        { subject.description }
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <Link
                        to={`/lessons/${subject.id}`}
                      className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                      tabIndex="0"
                    >
                      عرض الحصص
                    </Link>
                  </div>
                </div>
              </div>
            </div>
  ))
)}



            {/* <div className="col-lg-4 col-sm-6">
              <div className="instructor-item scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                  <Link to="#" className="w-100 h-100 d-flex align-items-end">
                    <img
                      src="assets/images/bg/subject.png"
                      alt="Course Image"
                      className="scale-hover-item__img rounded-12 cover-img transition-2"
                    />
                  </Link>
                </div>
                <div className="p-24 position-relative">
                  <div>
                    <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                      <Link to="#" className="link text-line-2">
                        الرياضيات
                      </Link>
                    </h4>
                    <div className="flex-between gap-8 flex-wrap">
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <i className="ph-bold ph-users"></i>
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          الصف الاول الاعدادي
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <Link
                          to="/courses"
                      className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                      tabIndex="0"
                    >
                      عرض الحصص
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="instructor-item scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                  <Link to="#" className="w-100 h-100 d-flex align-items-end">
                    <img
                      src="assets/images/bg/subject.png"
                      alt="Course Image"
                      className="scale-hover-item__img rounded-12 cover-img transition-2"
                    />
                  </Link>
                </div>
                <div className="p-24 position-relative">
                  <div>
                    <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                      <Link to="#" className="link text-line-2">
                        الرياضيات
                      </Link>
                    </h4>
                    <div className="flex-between gap-8 flex-wrap">
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <i className="ph-bold ph-users"></i>
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          الصف الاول الاعدادي
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <Link
                      to="/courses"
                      className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                      tabIndex="0"
                    >
                      عرض الحصص
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
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
export default SubjectsPage