import React, { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLessonId } from "../../redux/features/actions/lessonActions";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function CourseDetailsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <CourseDetailsBanner />
      <CoursesDetails />
    </>
  );
}
function CourseDetailsBanner() {
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
                تفاصيل الحصه
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
                    to="/lessons"
                    className="breadcrumb__link text-neutral-500 hover-text-main-600 fw-medium"
                  >
                    الحصص
                  </Link>
                </li>
                <li className="breadcrumb__item">
                  <i className="text-neutral-500 d-flex ph-bold ph-caret-left"></i>
                </li>
                <li className="breadcrumb__item">
                  <span className="text-main-two-600">تفاصيل الحصه</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function CoursesDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { oneLesson, isLoading, error } = useSelector((state) => state.lessons);
  console.log(oneLesson);

  useEffect(() => {
    dispatch(fetchLessonId(id));
  }, [dispatch, id]);

  return (
    <section className="course-details py-120">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          {isLoading ? (
            <SkeletonTheme baseColor="lightgray">
              <Skeleton count={9} />
            </SkeletonTheme>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            <div className="col-lg-8 col-12">
              <div className="course-details__content   rounded-12  ">

              <Link target="_blank" to={oneLesson?.data?.join_link}>                 <img
                  src="/assets/images/bg/zoom.png"
                  alt=""
                  className="rounded-8 cover-img"
                /></Link>

                <div>
                  <h2 className="mt-24 mb-24">حصه رقم {oneLesson?.data?.id}</h2>
                </div>
              </div>
              <p>الملفات</p>
              <hr />
              <div className="  rounded-12" style={{ marginBottom: "100px" }}>
                <div
                  className="accordion common-accordion style-three"
                  id="accordionExampleTwo"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOneTwo"
                        aria-expanded="true"
                        aria-controls="collapseOneTwo"
                      >
                        حصه رقم {oneLesson?.data?.id}
                      </button>
                    </h2>
                    <div
                      id="collapseOneTwo"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExampleTwo"
                    >
                      <div className="accordion-body p-0">
                        {oneLesson?.data?.attachments?.map((file) => {
                          return (
                            <React.Fragment key={file.id}>
                              <a className="curriculam-item flex-between gap-16 text-neutral-500 fw-medium hover-text-main-600">
                                <span className="flex-align gap-12">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="24"
                                    viewBox="0 0 25 24"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M2.83334 0C1.54467 0 0.5 1.04467 0.5 2.33334V21.6667C0.5 22.9553 1.54467 24 2.83334 24H22.1667C23.4553 24 24.5 22.9553 24.5 21.6667V0H2.83334ZM15.4999 8.85248e-05L24.4999 8.7738e-05V9.00009L15.4999 8.85248e-05Z"
                                      fill="#F2F2F2"
                                    />
                                    <path
                                      d="M15.5 9L24.5 9L15.5 0L15.5 9Z"
                                      fill="#BDBDBD"
                                    />
                                    <rect
                                      x="2"
                                      y="12"
                                      width="21"
                                      height="9.75"
                                      rx="1.28336"
                                      fill="#EF4444"
                                    />
                                    <path
                                      d="M5.53662 19.6875V14.0625H7.60754C8.03179 14.0625 8.38773 14.1431 8.67536 14.3042C8.96479 14.4653 9.1832 14.6869 9.33061 14.9689C9.47982 15.249 9.55442 15.5676 9.55442 15.9247C9.55442 16.2854 9.47982 16.6058 9.33061 16.886C9.18141 17.1661 8.96119 17.3868 8.66997 17.5479C8.37875 17.7072 8.02011 17.7869 7.59406 17.7869H6.22154V16.9492H7.45923C7.70731 16.9492 7.91045 16.9052 8.06865 16.8173C8.22684 16.7294 8.34369 16.6086 8.41919 16.4548C8.49649 16.301 8.53514 16.1243 8.53514 15.9247C8.53514 15.7251 8.49649 15.5493 8.41919 15.3973C8.34369 15.2454 8.22594 15.1273 8.06595 15.043C7.90775 14.957 7.70372 14.9139 7.45384 14.9139H6.53703V19.6875H5.53662Z"
                                      fill="white"
                                    />
                                    <path
                                      d="M12.2948 19.6875H10.4234V14.0625H12.3325C12.8808 14.0625 13.3518 14.1751 13.7455 14.4003C14.141 14.6237 14.4448 14.9451 14.6569 15.3644C14.869 15.7837 14.9751 16.2854 14.9751 16.8695C14.9751 17.4554 14.8681 17.959 14.6542 18.3801C14.4421 18.8013 14.1356 19.1245 13.7347 19.3497C13.3356 19.5749 12.8556 19.6875 12.2948 19.6875ZM11.4238 18.8058H12.2462C12.6309 18.8058 12.9518 18.7344 13.2089 18.5916C13.4659 18.447 13.6592 18.2318 13.7886 17.9462C13.9181 17.6587 13.9828 17.2998 13.9828 16.8695C13.9828 16.4392 13.9181 16.0822 13.7886 15.7983C13.6592 15.5127 13.4677 15.2994 13.2143 15.1584C12.9626 15.0156 12.6498 14.9442 12.2759 14.9442H11.4238V18.8058Z"
                                      fill="white"
                                    />
                                    <path
                                      d="M15.9256 19.6875V14.0625H19.4634V14.9167H16.926V16.4438H19.2207V17.298H16.926V19.6875H15.9256Z"
                                      fill="white"
                                    />
                                    <path
                                      d="M5.53662 19.6875V14.0625H7.60754C8.03179 14.0625 8.38773 14.1431 8.67536 14.3042C8.96479 14.4653 9.1832 14.6869 9.33061 14.9689C9.47982 15.249 9.55442 15.5676 9.55442 15.9247C9.55442 16.2854 9.47982 16.6058 9.33061 16.886C9.18141 17.1661 8.96119 17.3868 8.66997 17.5479C8.37875 17.7072 8.02011 17.7869 7.59406 17.7869H6.22154V16.9492H7.45923C7.70731 16.9492 7.91045 16.9052 8.06865 16.8173C8.22684 16.7294 8.34369 16.6086 8.41919 16.4548C8.49649 16.301 8.53514 16.1243 8.53514 15.9247C8.53514 15.7251 8.49649 15.5493 8.41919 15.3973C8.34369 15.2454 8.22594 15.1273 8.06595 15.043C7.90775 14.957 7.70372 14.9139 7.45384 14.9139H6.53703V19.6875H5.53662Z"
                                      stroke="white"
                                      stroke-width="0.583334"
                                    />
                                    <path
                                      d="M12.2948 19.6875H10.4234V14.0625H12.3325C12.8808 14.0625 13.3518 14.1751 13.7455 14.4003C14.141 14.6237 14.4448 14.9451 14.6569 15.3644C14.869 15.7837 14.9751 16.2854 14.9751 16.8695C14.9751 17.4554 14.8681 17.959 14.6542 18.3801C14.4421 18.8013 14.1356 19.1245 13.7347 19.3497C13.3356 19.5749 12.8556 19.6875 12.2948 19.6875ZM11.4238 18.8058H12.2462C12.6309 18.8058 12.9518 18.7344 13.2089 18.5916C13.4659 18.447 13.6592 18.2318 13.7886 17.9462C13.9181 17.6587 13.9828 17.2998 13.9828 16.8695C13.9828 16.4392 13.9181 16.0822 13.7886 15.7983C13.6592 15.5127 13.4677 15.2994 13.2143 15.1584C12.9626 15.0156 12.6498 14.9442 12.2759 14.9442H11.4238V18.8058Z"
                                      stroke="white"
                                      stroke-width="0.583334"
                                    />
                                    <path
                                      d="M15.9256 19.6875V14.0625H19.4634V14.9167H16.926V16.4438H19.2207V17.298H16.926V19.6875H15.9256Z"
                                      stroke="white"
                                      stroke-width="0.583334"
                                    />
                                  </svg>
                                  <span className="text-line-1">
                                    {file?.file_name}
                                  </span>
                                </span>
                                <a
                                  href={file?.file_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  download
                                  className="flex-align gap-12 flex-shrink-0 mega-footer"
                                >
                                  تحميل الملف 📥
                                </a>
                              </a>
                            </React.Fragment>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                {!oneLesson?.file_path ? (
                  <iframe
                    className="mt-5"
                    width="100%"
                    height="400"
                    src={oneLesson?.file_path}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <p></p>
                )}
              </div>
              <div className="border border-neutral-30 rounded-12 bg-main-25 p-32 mt-24">
                <div className="d-flex align-items-start  flex-wrap flex-md-nowrap gap-32">
                  <img
                    src="assets/images/bg/user.png"
                    alt=""
                    className="user-course-details"
                  />
                  <div className="flex-grow-1">
                    <div className=" d-flex justify-content-between">
                      <h4 className="mb-0">
                        {oneLesson?.data?.teacher?.name ?? ""}
                      </h4>
                      <div className="dropdown flex-shrink-0">
                        <button
                          className="text-gray-600 text-xl d-flex rounded-4"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="ph-fill ph-dots-three-outline"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu--md border-0 bg-transparent p-0">
                          <div className="card border border-gray-100 rounded-12 box-shadow-custom">
                            <div className="card-body p-12">
                              <div className="max-h-200 overflow-y-auto scroll-sm pe-8">
                                <ul>
                                  <li className="mb-0">
                                    <button
                                      type="button"
                                      className="delete-item-btn py-6 text-15 px-8 hover-bg-gray-50 text-gray-300 w-100 rounded-8 fw-normal text-xs d-block text-start"
                                    >
                                      <span className="text">عرض</span>
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="d-block border border-neutral-30 my-20 border-dashed"></span>
                    <div className="d-flex justify-content-between flex-wrap">
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <i className="ph-bold ph-lightbulb"></i>
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          {oneLesson?.data?.subject?.name ?? ""}
                        </span>
                      </div>
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-lg fw-medium">
                          {oneLesson?.data?.teacher?.max_rating ?? 0}
                        </span>{" "}
                        <span className="text-neutral-700 text-2xl d-flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M21.9612 11.2578L17.7424 14.9141L19.0315 20.3516C19.0471 20.3984 19.0588 20.4531 19.0667 20.5156C19.0745 20.5781 19.0784 20.6406 19.0784 20.7031C19.0784 21.125 18.926 21.4883 18.6213 21.793C18.3167 22.0977 17.9534 22.25 17.5315 22.25C17.3909 22.25 17.2502 22.2305 17.1096 22.1914C16.969 22.1523 16.844 22.0938 16.7346 22.0156L12.0002 19.1094L7.26587 22.0156C7.15649 22.0938 7.03149 22.1523 6.89087 22.1914C6.75024 22.2305 6.60962 22.25 6.46899 22.25C6.04712 22.25 5.68384 22.0977 5.37915 21.793C5.07446 21.4883 4.92212 21.125 4.92212 20.7031C4.92212 20.6406 4.92603 20.5781 4.93384 20.5156C4.94165 20.4531 4.95337 20.3984 4.96899 20.3516L6.25806 14.9141L2.03931 11.2578C1.88306 11.1172 1.75415 10.9453 1.65259 10.7422C1.55103 10.5391 1.50024 10.3281 1.50024 10.1094C1.50024 9.70312 1.63696 9.35156 1.9104 9.05469C2.18384 8.75781 2.51587 8.59375 2.90649 8.5625L8.43774 8.11719L10.5706 2.96094C10.6956 2.67969 10.887 2.44922 11.1448 2.26953C11.4026 2.08984 11.6877 2 12.0002 2C12.3127 2 12.5979 2.08984 12.8557 2.26953C13.1135 2.44922 13.2971 2.67188 13.4065 2.9375V2.96094L15.5393 8.11719L21.0706 8.5625C21.4768 8.59375 21.8167 8.75781 22.0901 9.05469C22.3635 9.35156 22.5002 9.70312 22.5002 10.1094C22.5002 10.3438 22.4495 10.5586 22.3479 10.7539C22.2463 10.9492 22.1174 11.1172 21.9612 11.2578Z"
                              fill="#FF9F29"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-between flex-wrap"
                      style={{ marginTop: "20px" }}
                    >
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="26"
                            viewBox="0 0 24 26"
                            fill="none"
                          >
                            <path
                              d="M12.2578 15.4487C11.6016 14.8862 11.082 14.2104 10.6992 13.4214C10.3164 12.6323 10.125 11.7769 10.125 10.855C10.125 10.0269 10.2812 9.24561 10.5938 8.51123C10.9062 7.79248 11.3359 7.15967 11.8828 6.61279C12.4297 6.06592 13.0625 5.63623 13.7812 5.32373C14.5156 5.01123 15.2969 4.85498 16.125 4.85498C16.9531 4.85498 17.7344 5.01123 18.4688 5.32373C19.1875 5.63623 19.8203 6.06592 20.3672 6.61279C20.9141 7.15967 21.3438 7.79248 21.6562 8.51123C21.9688 9.24561 22.125 10.0269 22.125 10.855C22.125 11.7769 21.9336 12.6323 21.5508 13.4214C21.168 14.2104 20.6484 14.8784 19.9922 15.4253V15.4487C20.7422 15.7925 21.4258 16.2144 22.043 16.7144C22.6602 17.2144 23.2031 17.7847 23.6719 18.4253L23.6953 18.4487C23.7578 18.5425 23.8086 18.644 23.8477 18.7534C23.8867 18.8628 23.9062 18.98 23.9062 19.105C23.9062 19.4175 23.7969 19.6831 23.5781 19.9019C23.3594 20.1206 23.0938 20.23 22.7812 20.23C22.5938 20.23 22.4219 20.1909 22.2656 20.1128C22.1094 20.0347 21.9766 19.9253 21.8672 19.7847C21.2109 18.894 20.3828 18.1831 19.3828 17.6519C18.3828 17.1206 17.2969 16.855 16.125 16.855C14.9531 16.855 13.8672 17.1206 12.8672 17.6519C11.8672 18.1831 11.0391 18.8862 10.3828 19.7612V19.7847C10.2734 19.9253 10.1406 20.0347 9.98438 20.1128C9.82812 20.1909 9.65625 20.23 9.46875 20.23C9.15625 20.23 8.89062 20.1206 8.67188 19.9019C8.45312 19.6831 8.34375 19.4175 8.34375 19.105C8.34375 18.98 8.36328 18.8628 8.40234 18.7534C8.44141 18.644 8.49219 18.5425 8.55469 18.4487C9.03906 17.8081 9.58984 17.2339 10.207 16.7261C10.8242 16.2183 11.4922 15.8003 12.2109 15.4722L12.2578 15.4487ZM19.875 10.855C19.875 9.82373 19.5078 8.94092 18.7734 8.20654C18.0391 7.47217 17.1562 7.10498 16.125 7.10498C15.0938 7.10498 14.2109 7.47217 13.4766 8.20654C12.7422 8.94092 12.375 9.82373 12.375 10.855C12.375 11.8862 12.7422 12.769 13.4766 13.5034C14.2109 14.2378 15.0938 14.605 16.125 14.605C17.1562 14.605 18.0391 14.2378 18.7734 13.5034C19.5078 12.769 19.875 11.8862 19.875 10.855ZM0.5625 20.019C0.640625 20.0815 0.738281 20.1323 0.855469 20.1714C0.972656 20.2104 1.09375 20.23 1.21875 20.23C1.40625 20.23 1.57812 20.187 1.73438 20.1011C1.89062 20.0151 2.02344 19.9097 2.13281 19.7847V19.7612C2.78906 18.8862 3.61719 18.1831 4.61719 17.6519C5.61719 17.1206 6.70312 16.855 7.875 16.855C8.1875 16.855 8.45312 16.7456 8.67188 16.5269C8.89062 16.3081 9 16.0425 9 15.73C9 15.4175 8.89062 15.1519 8.67188 14.9331C8.45312 14.7144 8.1875 14.605 7.875 14.605C6.84375 14.605 5.96094 14.2378 5.22656 13.5034C4.49219 12.769 4.125 11.8862 4.125 10.855C4.125 9.82373 4.49219 8.94092 5.22656 8.20654C5.96094 7.47217 6.84375 7.10498 7.875 7.10498C8.04688 7.10498 8.21484 7.1167 8.37891 7.14014C8.54297 7.16357 8.70312 7.19873 8.85938 7.24561L8.83594 7.22217C8.88281 7.23779 8.93359 7.24951 8.98828 7.25732C9.04297 7.26514 9.10156 7.26904 9.16406 7.26904C9.46094 7.26904 9.72266 7.15967 9.94922 6.94092C10.1758 6.72217 10.2891 6.45654 10.2891 6.14404C10.2891 5.87842 10.207 5.64795 10.043 5.45264C9.87891 5.25732 9.67188 5.12842 9.42188 5.06592C9.1875 4.98779 8.94141 4.93311 8.68359 4.90186C8.42578 4.87061 8.15625 4.85498 7.875 4.85498C7.04688 4.85498 6.27344 5.01123 5.55469 5.32373C4.82031 5.63623 4.18359 6.06592 3.64453 6.61279C3.10547 7.15967 2.67188 7.79248 2.34375 8.51123C2.03125 9.24561 1.875 10.0269 1.875 10.855C1.875 11.7769 2.06641 12.6323 2.44922 13.4214C2.83203 14.2104 3.35156 14.8784 4.00781 15.4253V15.4487C3.25781 15.7925 2.57422 16.2144 1.95703 16.7144C1.33984 17.2144 0.796875 17.7847 0.328125 18.4253L0.304688 18.4487C0.242188 18.5425 0.191406 18.644 0.152344 18.7534C0.113281 18.8628 0.09375 18.98 0.09375 19.105C0.09375 19.2925 0.136719 19.4644 0.222656 19.6206C0.308594 19.7769 0.414062 19.9097 0.539062 20.019H0.5625Z"
                              fill="#222E48"
                            />
                          </svg>
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          {oneLesson?.data?.subject?.description ?? ""}
                        </span>
                      </div>
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-lg fw-medium">
                          {oneLesson?.data?.teacher?.love_count ?? 0}
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
                              d="M17.2725 2C15.2679 2 13.502 3.16667 12.4998 5C11.4975 3.16667 9.73157 2 7.72703 2C4.57703 2 1.99976 5 1.99976 8.66667C1.99976 15.2778 12.4998 22 12.4998 22C12.4998 22 22.9998 15.3333 22.9998 8.66667C22.9998 5 20.4225 2 17.2725 2Z"
                              fill="#F44336"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
export default CourseDetailsPage;
