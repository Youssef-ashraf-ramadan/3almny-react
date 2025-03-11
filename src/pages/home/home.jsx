import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";

import { fetchUserProfile } from "../../redux/features/actions/profileActions";
import { fetchFreeLessons } from "../../redux/features/actions/lessonActions";
import { fetchSubjects } from "../../redux/features/actions/subjectActions";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import { toast } from "react-toastify";

function Home() {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <AdsSection />
      <CategorySection />
      <FeaturesSection />
      <ExploreCourses />
      <AboutTwo />
      <PlanSection />
    </>
  );
}
function HeroSection() {
  return (
    <section className="banner-two pt-80 position-relative overflow-hidden">
      <img
        src="assets/images/shapes/banner-two-shape-1.png"
        className="position-absolute inset-block-end-0 inset-inline-end-0 w-100 h-100 d-lg-block d-none z-n1"
        alt=""
        data-tilt
        data-tilt-speed="500"
        data-tilt-max="6"
        data-tilt-perspective="5000"
        data-tilt-full-page-listening
        data-tilt-scale="1.03"
      />

      <img
        src="assets/images/shapes/shape8.png"
        alt=""
        className="shape three"
      />
      <img
        src="assets/images/shapes/shape8.png"
        alt=""
        className="shape five"
      />

      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-6 col-12">
            <div className="banner-content pe-md-4" data-aos="fade-right">
              <div className="flex-align gap-8 mb-16" data-aos="fade-down">
                <span className="text-main-600 text-2xl d-flex">
                  <i className="ph-bold ph-book"></i>
                </span>
                <h5 className="text-main-600 mb-0">ارفع مستوى تعلمك</h5>
              </div>

              <h1 className="display2 mb-24">
                تعلم،{" "}
                <span
                  className="text-main-two-600"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-delay="500"
                >
                  تنمو،{" "}
                </span>
                <br />
                <span
                  className="text-main-three-600"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  تحقق،
                </span>{" "}
                و تنجح
              </h1>
              <p className="text-neutral-500 text-line-2" data-aos="fade-up">
                أكاديميتنا العملية تهدف إلى تزويد المتعلمين بالمهارات العملية
                والتطبيقية التي تؤهلهم لسوق العمل من خلال برامج تدريبية متطورة
                وتجربة تعليمية تفاعلية.
              </p>
              <div
                className="buttons-wrapper flex-align flex-wrap gap-24 mt-40"
                style={{ marginBottom: "40px" }}
              >
                <Link
                  to="/contact"
                  className="btn btn-outline-main rounded-pill flex-align gap-8"
                  data-aos="fade-left"
                >
                  تواصل معنا
                  <i className="ph-bold ph-arrow-up-left d-flex text-lg"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="banner-thumb position-relative">
              <img
                src="assets/images/bg/hero-bg.png"
                alt=""
                className="banner-thumb__img rounded-12"
                data-aos="fade-up"
              />

              <img
                src="assets/images/shapes/shape9.png"
                className="position-absolute inset-block-end-0 start-0 z-n1"
                alt=""
                data-tilt
                data-tilt-max="16"
                data-tilt-speed="500"
              />
              <img
                src="assets/images/shapes/shape10.png"
                className="position-absolute inset-block-start-0 start-0 z-n1"
                alt=""
                data-tilt
                data-tilt-max="16"
                data-tilt-speed="500"
                data-tilt-perspective="5000"
                data-tilt-startX="100"
                data-tilt-full-page-listening
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoSection() {
  return (
    <section className="info py-40 bg-main-600">
      <div className="container">
        <div className="row gy-4">
          <div
            className="col-xl-3 col-sm-6 wow bounceInUp"
            data-aos="fade-up"
            data-aos-duration="200"
          >
            <div className="info-item animation-item flex-align gap-20">
              <span className="w-60 h-60 flex-center bg-white text-main-600 text-28 rounded-circle flex-shrink-0">
                <i className="animate__heartBeat ph-bold ph-video-camera"></i>
              </span>
              <div className="flex-grow-1">
                <h5 className="mb-8 text-white fw-medium">
                  500 دورة عبر الإنترنت
                </h5>
                <span className="text-sm text-white">
                  استمتع بمجموعة الموضوعات الجديدة
                </span>
              </div>
            </div>
          </div>

          <div
            className="col-xl-3 col-sm-6 wow bounceInDown"
            data-aos="fade-up"
            data-aos-duration="400"
          >
            <div className="info-item animation-item flex-align gap-20">
              <span className="w-60 h-60 flex-center bg-white text-main-600 text-28 rounded-circle flex-shrink-0">
                <i className="animate__heartBeat ph-bold ph-users"></i>
              </span>
              <div className="flex-grow-1">
                <h5 className="mb-8 text-white fw-medium">تعليمات الخبراء</h5>
                <span className="text-sm text-white">
                  اعثر على المدرب المناسب لك
                </span>
              </div>
            </div>
          </div>

          <div
            className="col-xl-3 col-sm-6 wow bounceInLeft"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <div className="info-item animation-item flex-align gap-20">
              <span className="w-60 h-60 flex-center bg-white text-main-600 text-28 rounded-circle flex-shrink-0">
                <i className="animate__heartBeat ph-bold ph-clock"></i>
              </span>
              <div className="flex-grow-1">
                <h5 className="mb-8 text-white fw-medium">الوصول مدى الحياة</h5>
                <span className="text-sm text-white">
                  تعلم وفقًا لجدولك الزمني
                </span>
              </div>
            </div>
          </div>

          <div
            className="col-xl-3 col-sm-6 wow bounceInRight"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="info-item animation-item flex-align gap-20">
              <span className="w-60 h-60 flex-center bg-white text-main-600 text-28 rounded-circle flex-shrink-0">
                <i className="animate__heartBeat ph-bold ph-certificate"></i>
              </span>
              <div className="flex-grow-1">
                <h5 className="mb-8 text-white fw-medium">احصل على شهادة</h5>
                <span className="text-sm text-white">
                  عند اكتمال الدورات التدريبية
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function AdsSection() {
  return (
    <section className="ads-section banner-two position-relative bg-main-50">
      <img
        src="assets/images/shapes/shape8.png"
        alt=""
        className="shape three animation-rotation z-n1"
      />
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="wow bounceIn">حمل الابلكيشن الان</h2>
          <p className="wow bounceInUp">
            حمل التطبيق الآن واستمتع بتجربة فريدة تتيح لك الوصول إلى جميع
            خدماتنا بسهولة وسرعة
          </p>
        </div>
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <div
              className="ads-photo"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <img src="assets/images/bg/ads-2.png" alt="ابلكيشن علمني" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div
              className="ads-content"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h2>دروســـك علــى</h2>
              <span>موبايــــــــلك</span>
              <p className="fs-2">حمـــــل تطبيقـــــك الان</p>
            </div>
            <div
              className="ads-social-logos"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Link to="https://www.facebook.com">
                <img
                  src="assets/images/logo/google-play-badge-AR.png"
                  alt="google play store"
                />
              </Link>
              <Link to="https://www.facebook.com">
                <img
                  src="assets/images/logo/applestore-badge-AR.png"
                  alt="app logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function CategoryItem({ icon, title, description, link }) {
  return (
    <div className="h-100 text-center px-16 py-32 rounded-12 bg-main-25 border border-neutral-30 hover-border-main-600 transition-2">
      <span className="w-96 h-96 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md mb-24">
        <img
          src={"/assets/images/icons/about-img2.png"}
          alt={""}
          className="animate__flipInY"
        />
      </span>
      <h4 className="display-four mb-16 text-neutral-700">{title}</h4>
      <p className="text-neutral-500 text-lg text-line-2">{description}</p>
      <Link
        to={`lessons/${link}`}
        className="py-12 px-24 bg-white rounded-8 border border-neutral-30 mt-28 fw-semibold text-main-two-600 hover-bg-main-two-600 hover-text-white hover-border-main-two-600"
      >
        عرض الحصص
      </Link>
    </div>
  );
}

function CategorySection() {
  const dispatch = useDispatch();
  const { subjects, isLoading, error } = useSelector((state) => state.subjects);
const token = localStorage.getItem("token")
  useEffect(() => {
   if(token){
    dispatch(fetchSubjects());
   }
  }, [dispatch]);
  const categories = [
    {
      title: "الرياضيات",
      description: "تعلم كيفية التعامل مع الأرقام.",
      icon: "assets/images/icons/category-icon4.png",
      link: "/lessons",
    },
    {
      title: "الدراسات الاجتماعية",
      description: "تعرف على التاريخ والجغرافيا والثقافات.",
      icon: "assets/images/icons/category-icon3.png",
      link: "/lessons",
    },
    {
      title: "اللغة العربية",
      description: "تحسن مهاراتك في القراءة والكتابة بالعربية.",
      icon: "assets/images/icons/category-icon2.png",
      link: "/lessons",
    },
    {
      title: "اللغة الإنجليزية",
      description: "تتعلم اللغة الإنجليزية للتواصل بسهولة.",
      icon: "assets/images/icons/category-icon1.png",
      link: "/lessons",
    },
    {
      title: "الرسم",
      description: "تعلم الرسم.",
      icon: "assets/images/icons/category-icon1.png",
      link: "/lessons",
    },
  ];
  const dataToShow =
    subjects?.data?.length > 0
      ? subjects.data.map((item) => ({
          id: item.id,
          title: item.name,
          description: item.description,
          link: `/lessons/${item.id}`,
        }))
      : categories;
  const settings = {
    dots: true,
    infinite: false, // لا تجعل الـ Slider غير محدود إذا كان عدد العناصر قليلًا
    arrows: false,
    speed: 500,
    slidesToShow: Math.min(dataToShow.length, 4), // لا يعرض أكثر من عدد العناصر المتاحة
    slidesToScroll: 1,
    autoplay: dataToShow.length > 1, // لا تفعل الـ autoplay إذا كان عنصر واحد فقط
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(dataToShow.length, 3),
          slidesToScroll: 1,
        },
      },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  // 📌 تحديد البيانات التي سيتم عرضها في الـ Slider
  // 📌 التحقق مما إذا كانت بيانات الـ API متاحة، وإذا لم تكن تحتوي على عناصر، استخدم البيانات الافتراضية

  return (
    <section className="category py-120 position-relative z-1 mash-bg-main mash-bg-main-two mash-reverse">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="wow bounceIn">ارتقِ بتجربة التعلم الخاصة بك</h2>
          <p className="wow bounceInUp">
            تم بناء منصتنا على مبادئ الابتكار والجودة والشمول، بهدف توفير تجربة
            تعليمية سلسة.
          </p>
        </div>

        {isLoading ? (
          <SkeletonTheme baseColor="lightgray">
            <Skeleton count={5} />
          </SkeletonTheme>
        ) : error ? (
          <>
             <p className="text-red-500">حدث خطأ أثناء تحميل البيانات: {error.message}</p>
          </>
        ) : (
          <>
            {token && (
              <Slider {...settings} className="category-item-slider">
                {dataToShow.map((item) => (
                  <CategoryItem
                    key={item.id} // استخدم `title` كـ key لأن البيانات الافتراضية لا تملك `id`
                    title={item.title}
                    description={item.description}
                    link={item.id}
                  />
                ))}
              </Slider>
            )}
          </>
        )}
        {!token &&               <Slider {...settings} className="category-item-slider">
                {categories.map((item) => (
                  <CategoryItem
                    key={item.id} // استخدم `title` كـ key لأن البيانات الافتراضية لا تملك `id`
                    title={item.title}
                    description={item.description}
                    link={item.id}
                  />
                ))}
              </Slider>}
      </div>
    </section>
  );
}
function FeaturesSection() {
  return (
    <section className="features-two half-bg py-120 position-relative overflow-hidden wow bounceInDown">
      <img
        src="assets/images/shapes/shape2.png"
        alt=""
        className="shape two animation-scalation"
      />
      <img
        src="assets/images/shapes/shape4.png"
        alt=""
        className="shape six animation-walking"
      />

      <div className="container">
        <div className="section-heading style-flex">
          <div className="section-heading__inner">
            <h2 className="mb-24 wow bounceInLeft">
              قم ببناء مهارات نمو أفضل وأسرع. أشعل شرارة رحلة التعلم الخاصة بك
            </h2>
          </div>
        </div>
        <div className="row gy-4">
          <div
            className="col-lg-4 col-sm-6 col-xs-6"
            data-aos="fade-up"
            data-aos-duration="200"
          >
            <div className="text-center features-item item-hover animation-item bg-white border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600">
              <span className="mb-32 w-110 h-110 flex-center d-inline-flex bg-main-25 rounded-circle">
                <img
                  src="assets/images/icons/features-two-icon1.png"
                  className="animate__bounce"
                  alt=""
                />
              </span>
              <h4 className="mb-16 transition-1 item-hover__text">
                تعلم أحدث المهارات
              </h4>
              <p className="transition-1 item-hover__text text-line-2">
                لا ينبغي أن يكلف التعليم الجيد الكثير من المال. نقدم أسعارًا
                ومدفوعات تنافسية...
              </p>
              <span className="item-hover__bg w-48 h-1 bg-neutral-500 mt-32"></span>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 col-xs-6"
            data-aos="fade-up"
            data-aos-duration="400"
          >
            <div className="text-center features-item item-hover animation-item bg-white border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600">
              <span className="mb-32 w-110 h-110 flex-center d-inline-flex bg-main-25 rounded-circle">
                <img
                  src="assets/images/icons/features-two-icon2.png"
                  className="animate__bounce"
                  alt=""
                />
              </span>
              <h4 className="mb-16 transition-1 item-hover__text">
                استعد لمهنة جديدة
              </h4>
              <p className="transition-1 item-hover__text text-line-2">
                شارك في تجارب تعليمية ديناميكية وتفاعلية. تم تصميم دوراتنا ,
                والحصول علي مهنه جديده
              </p>
              <span className="item-hover__bg w-48 h-1 bg-neutral-500 mt-32"></span>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 col-xs-6"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <div className="text-center features-item item-hover animation-item bg-white border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600">
              <span className="mb-32 w-110 h-110 flex-center d-inline-flex bg-main-25 rounded-circle">
                <img
                  src="assets/images/icons/features-two-icon3.png"
                  className="animate__bounce"
                  alt=""
                />
              </span>
              <h4 className="mb-16 transition-1 item-hover__text">
                احصل على شهادة
              </h4>
              <p className="transition-1 item-hover__text text-line-2">
                انضم إلى مجتمع تعليمي نابض بالحياة وداعم. تواصل مع زملائك
                المتعلمين
              </p>
              <span className="item-hover__bg w-48 h-1 bg-neutral-500 mt-32"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseItem({ course, profile = "", token = "" }) {
  return (
    <div
      className="course-item bg-white rounded-16 p-12 position-relative box-shadow-md"
      dir="rtl"
    >
      <div className="course-top-header">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
          >
            <path
              d="M12 3.25C13.3438 3.25 14.6094 3.50781 15.7969 4.02344C16.9844 4.52344 18.0195 5.21484 18.9023 6.09766C19.7852 6.98047 20.4766 8.01562 20.9766 9.20312C21.4922 10.3906 21.75 11.6562 21.75 13C21.75 14.3438 21.4922 15.6094 20.9766 16.7969C20.4766 17.9844 19.7852 19.0195 18.9023 19.9023C18.0195 20.7852 16.9844 21.4766 15.7969 21.9766C14.6094 22.4922 13.3438 22.75 12 22.75C10.6562 22.75 9.39062 22.4922 8.20312 21.9766C7.01562 21.4766 5.98047 20.7852 5.09766 19.9023C4.21484 19.0195 3.52344 17.9844 3.02344 16.7969C2.50781 15.6094 2.25 14.3438 2.25 13C2.25 11.6562 2.50781 10.3906 3.02344 9.20312C3.53906 8.01562 4.23438 6.98438 5.10938 6.10938C5.98438 5.23438 7.01562 4.53906 8.20312 4.02344C9.39062 3.50781 10.6562 3.25 12 3.25ZM12 21.25C13.1406 21.25 14.2109 21.0312 15.2109 20.5938C16.2109 20.1719 17.0859 19.5859 17.8359 18.8359C18.5859 18.0859 19.1719 17.2109 19.5938 16.2109C20.0312 15.2109 20.25 14.1406 20.25 13C20.25 11.8594 20.0312 10.7891 19.5938 9.78906C19.1719 8.78906 18.5859 7.91406 17.8359 7.16406C17.0859 6.41406 16.2109 5.82812 15.2109 5.40625C14.2109 4.96875 13.1406 4.75 12 4.75C10.8594 4.75 9.78906 4.96875 8.78906 5.40625C7.78906 5.82812 6.91406 6.41406 6.16406 7.16406C5.41406 7.91406 4.82812 8.78906 4.40625 9.78906C3.96875 10.7891 3.75 11.8594 3.75 13C3.75 14.1406 3.96875 15.2109 4.40625 16.2109C4.82812 17.2109 5.41406 18.0859 6.16406 18.8359C6.91406 19.5859 7.78906 20.1719 8.78906 20.5938C9.78906 21.0312 10.8594 21.25 12 21.25ZM6 13C6 13.2031 6.07422 13.3789 6.22266 13.5273C6.37109 13.6758 6.54688 13.75 6.75 13.75H12C12.2031 13.75 12.3789 13.6758 12.5273 13.5273C12.6758 13.3789 12.75 13.2031 12.75 13V7.75C12.75 7.54688 12.6758 7.37109 12.5273 7.22266C12.3789 7.07422 12.2031 7 12 7C11.7969 7 11.6211 7.07422 11.4727 7.22266C11.3242 7.37109 11.25 7.54688 11.25 7.75V12.25H6.75C6.54688 12.25 6.37109 12.3242 6.22266 12.4727C6.07422 12.6211 6 12.7969 6 13Z"
              fill="#066CCB"
            />
          </svg>
          {course.start_time}
        </span>
      </div>
      <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
        <Link to={`/course-details/${course.id}`} className="w-100 h-100">
          <img
            src={course.image}
            alt="Course Image"
            className="course-item__img rounded-12 cover-img transition-2"
          />
        </Link>
      </div>
      <div className="course-item__content position-relative">
        <div className="d-flex align-items-center justify-content-between flex-wrap">
          <Link
            to={`/lessons/teacher/${course?.teacher?.id}`}
            className="flex-align fs-5 fw-medium text-black"
          >
            {course.teacher?.name ?? ""}
          </Link>
          <div className="flex-align">
            <span className="text-lg text-neutral-700 fw-medium">
              {Number(course?.teacher?.max_rating).toFixed(2) ?? 0}
              {/* {course.rating} */}
            </span>
            <span className="text-2xl fw-medium text-warning-600 d-flex">
              <i className="ph-fill ph-star"></i>
            </span>
          </div>
        </div>
        <hr />
        <ul className="courses-learn-list">
          <li>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
            >
              <path
                d="M7.125 22.48C7.125 22.7925 7.23438 23.0581 7.45312 23.2769C7.67188 23.4956 7.9375 23.605 8.25 23.605H15.75C16.0625 23.605 16.3281 23.4956 16.5469 23.2769C16.7656 23.0581 16.875 22.7925 16.875 22.48C16.875 22.1675 16.7656 21.9019 16.5469 21.6831C16.3281 21.4644 16.0625 21.355 15.75 21.355H8.25C7.9375 21.355 7.67188 21.4644 7.45312 21.6831C7.23438 21.9019 7.125 22.1675 7.125 22.48ZM3.375 10.48C3.375 10.48 3.375 10.4839 3.375 10.4917C3.375 10.4995 3.375 10.5034 3.375 10.5034C3.375 11.1909 3.45312 11.855 3.60938 12.4956C3.76562 13.1362 3.98438 13.7417 4.26562 14.312C4.54688 14.8823 4.89062 15.4175 5.29688 15.9175C5.70312 16.4175 6.15625 16.8628 6.65625 17.2534H6.67969C6.80469 17.3628 6.91016 17.4956 6.99609 17.6519C7.08203 17.8081 7.125 17.98 7.125 18.1675V18.355C7.125 18.8706 7.30859 19.312 7.67578 19.6792C8.04297 20.0464 8.48438 20.23 9 20.23H15C15.5156 20.23 15.957 20.0464 16.3242 19.6792C16.6914 19.312 16.875 18.8706 16.875 18.355V18.1675C16.875 17.98 16.9141 17.812 16.9922 17.6636C17.0703 17.5151 17.1797 17.3862 17.3203 17.2769C17.8203 16.8862 18.2734 16.4409 18.6797 15.9409C19.0859 15.4409 19.4336 14.9058 19.7227 14.3354C20.0117 13.7651 20.2344 13.1597 20.3906 12.519C20.5469 11.8784 20.625 11.2144 20.625 10.5269C20.625 9.35498 20.4062 8.25342 19.9688 7.22217C19.5312 6.17529 18.9336 5.26123 18.1758 4.47998C17.418 3.69873 16.5234 3.07373 15.4922 2.60498C14.4766 2.13623 13.3828 1.88623 12.2109 1.85498C12.1797 1.85498 12.1445 1.85498 12.1055 1.85498C12.0664 1.85498 12.0312 1.85498 12 1.85498C10.8125 1.85498 9.69531 2.08154 8.64844 2.53467C7.60156 2.98779 6.6875 3.60498 5.90625 4.38623C5.125 5.16748 4.50781 6.08154 4.05469 7.12842C3.60156 8.17529 3.375 9.29248 3.375 10.48ZM5.625 10.48C5.625 9.60498 5.78906 8.77686 6.11719 7.99561C6.46094 7.22998 6.92188 6.55811 7.5 5.97998C8.07812 5.40186 8.75 4.94092 9.51562 4.59717C10.2969 4.26904 11.125 4.10498 12 4.10498C12.0312 4.10498 12.0586 4.10498 12.082 4.10498C12.1055 4.10498 12.1328 4.10498 12.1641 4.10498C13.0234 4.12061 13.8281 4.30811 14.5781 4.66748C15.3438 5.01123 16.0078 5.47217 16.5703 6.05029C17.1328 6.62842 17.5781 7.30029 17.9062 8.06592C18.2188 8.83154 18.375 9.65186 18.375 10.5269C18.375 11.5269 18.1523 12.4604 17.707 13.3276C17.2617 14.1948 16.6719 14.9175 15.9375 15.4956C15.5625 15.7925 15.2578 16.1558 15.0234 16.5854C14.7891 17.0151 14.6562 17.48 14.625 17.98H9.375C9.34375 17.48 9.21094 17.0151 8.97656 16.5854C8.74219 16.1558 8.4375 15.7925 8.0625 15.4956C7.3125 14.9019 6.71875 14.1714 6.28125 13.3042C5.84375 12.437 5.625 11.5034 5.625 10.5034C5.625 10.4878 5.625 10.48 5.625 10.48ZM7.5 9.98779C7.60938 9.11279 7.93359 8.34326 8.47266 7.6792C9.01172 7.01514 9.67969 6.53467 10.4766 6.23779H10.5C10.5469 6.22217 10.6016 6.20654 10.6641 6.19092C10.7266 6.17529 10.7891 6.16748 10.8516 6.16748C11.1641 6.16748 11.4297 6.27686 11.6484 6.49561C11.8672 6.71436 11.9766 6.97998 11.9766 7.29248C11.9766 7.54248 11.9102 7.76123 11.7773 7.94873C11.6445 8.13623 11.4688 8.26904 11.25 8.34717C10.8438 8.48779 10.5039 8.72607 10.2305 9.06201C9.95703 9.39795 9.79688 9.78467 9.75 10.2222C9.70312 10.5034 9.57422 10.7417 9.36328 10.937C9.15234 11.1323 8.90625 11.23 8.625 11.23C8.3125 11.23 8.04688 11.1206 7.82812 10.9019C7.60938 10.6831 7.5 10.4175 7.5 10.105C7.5 10.0894 7.5 10.0698 7.5 10.0464C7.5 10.0229 7.5 9.99561 7.5 9.96436V9.98779Z"
                fill="#222E48"
              />
            </svg>{" "}
            {/* {course.subject}{" "} */}
            {course.subject?.description ?? ""}
          </li>
          <li>
            {" "}
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
            </svg>{" "}
            {profile?.user?.class.name || ""}
            {!token && "الصف الاول الاعدادي"}
          </li>
          <li>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 8.35693V11.9998L14.1429 14.1426"
                stroke="#222E48"
                stroke-width="1.71429"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9999 19.7142C13.013 19.7142 14.0161 19.5147 14.9521 19.127C15.888 18.7393 16.7384 18.1711 17.4548 17.4548C18.1711 16.7384 18.7393 15.888 19.127 14.9521C19.5147 14.0161 19.7142 13.013 19.7142 11.9999C19.7142 10.9869 19.5147 9.98374 19.127 9.0478C18.7393 8.11186 18.1711 7.26144 17.4548 6.54511C16.7384 5.82877 15.888 5.26054 14.9521 4.87286C14.0161 4.48518 13.013 4.28564 11.9999 4.28564C9.95397 4.28564 7.99182 5.0984 6.54511 6.54511C5.0984 7.99182 4.28564 9.95397 4.28564 11.9999C4.28564 14.0459 5.0984 16.008 6.54511 17.4548C7.99182 18.9015 9.95397 19.7142 11.9999 19.7142Z"
                stroke="#222E48"
                stroke-width="1.71429"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.2858 5.57122V2.57122C16.2858 2.11656 16.1052 1.68053 15.7837 1.35904C15.4622 1.03755 15.0262 0.856934 14.5715 0.856934H9.42864C8.97398 0.856934 8.53795 1.03755 8.21646 1.35904C7.89497 1.68053 7.71436 2.11656 7.71436 2.57122V5.57122M16.2858 18.4009V21.4284C16.2858 21.883 16.1052 22.3191 15.7837 22.6405C15.4622 22.962 15.0262 23.1426 14.5715 23.1426H9.42864C8.97398 23.1426 8.53795 22.962 8.21646 22.6405C7.89497 22.3191 7.71436 21.883 7.71436 21.4284V18.4009"
                stroke="#222E48"
                stroke-width="1.71429"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{" "}
            {course.time}{" "}
          </li>
          <li>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M2.25 5H21.75V18H2.25V5ZM12 8.25C12.862 8.25 13.6886 8.59241 14.2981 9.2019C14.9076 9.8114 15.25 10.638 15.25 11.5C15.25 12.362 14.9076 13.1886 14.2981 13.7981C13.6886 14.4076 12.862 14.75 12 14.75C11.138 14.75 10.3114 14.4076 9.7019 13.7981C9.09241 13.1886 8.75 12.362 8.75 11.5C8.75 10.638 9.09241 9.8114 9.7019 9.2019C10.3114 8.59241 11.138 8.25 12 8.25ZM6.58333 7.16667C6.58333 7.7413 6.35506 8.2924 5.94873 8.69873C5.5424 9.10506 4.9913 9.33333 4.41667 9.33333V13.6667C4.9913 13.6667 5.5424 13.8949 5.94873 14.3013C6.35506 14.7076 6.58333 15.2587 6.58333 15.8333H17.4167C17.4167 15.2587 17.6449 14.7076 18.0513 14.3013C18.4576 13.8949 19.0087 13.6667 19.5833 13.6667V9.33333C19.0087 9.33333 18.4576 9.10506 18.0513 8.69873C17.6449 8.2924 17.4167 7.7413 17.4167 7.16667H6.58333Z"
                fill="#222E48"
              />
            </svg>{" "}
            {course.price} جنيه{" "}
          </li>
        </ul>
        <Link
          to={`/course-details/${course.id}`}
          className="text-center text-light fw-light bg-primary hover-bg-neutral-500 d-block w-100 join-done-btn"
        >
          انضم
        </Link>
      </div>
    </div>
  );
}

export function ExploreCourses() {
  const dispatch = useDispatch();
  const { lessons, isLoading, error } = useSelector(
    (state) => state.lessons || { lessons: {} }
  );
  const token = localStorage.getItem("token");

  const [profile, setProfile] = useState(null);
  const [allLessons, setAllLessons] = useState([]);
  const courses = [
    {
      start_time: "السبت - 26/01/2025 - 10:00Am",
      time: "10:00Am",
      image: "/assets/images/bg/bg-course-1.png",
      teacher: {
        name: "احمد عثمان",
        max_rating: 4.9,
      },
      subject: {
        description: "العلوم",
      },

      price: 150,
      class: "الصف الاول الاعدادي",
    },
    {
      start_time: "السبت - 26/01/2025 - 10:00Am",
      time: "10:00Am",
      image: "/assets/images/bg/bg-course-1.png",
      teacher: {
        name: "احمد عثمان",
        max_rating: 4.9,
      },
      subject: {
        description: "العلوم",
      },

      price: 150,
      class: "الصف الاول الاعدادي",
    },
    {
      start_time: "السبت - 26/01/2025 - 10:00Am",
      time: "10:00Am",
      image: "/assets/images/bg/bg-course-1.png",
      teacher: {
        name: "احمد عثمان",
        max_rating: 4.9,
      },
      subject: {
        description: "العلوم",
      },

      price: 150,
      class: "الصف الاول الاعدادي",
    },
    {
      start_time: "السبت - 26/01/2025 - 10:00Am",
      time: "10:00Am",
      image: "/assets/images/bg/bg-course-1.png",
      teacher: {
        name: "احمد عثمان",
        max_rating: 4.9,
      },
      subject: {
        description: "العلوم",
      },

      price: 150,
      class: "الصف الاول الاعدادي",
    },
  ];
  useEffect(() => {
    if (token) {
      const fetchUserProfile = async () => {
        try {
          const token = localStorage.getItem("token"); // Adjust if token is stored differently
          const response = await axios.get(
            "https://trust-eg.academy/api/user/profile",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setProfile(response.data);
        } catch (err) {
          console.error("Error fetching user profile:", err);
        }
      };

      fetchUserProfile();
      dispatch(fetchFreeLessons());
    }
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      const fetchPaidLessons = async () => {
        try {
          const token = localStorage.getItem("token"); // Adjust if token is stored differently
          const response = await axios.get(
            "https://trust-eg.academy/api/lessons",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setAllLessons(response.data.data || []);
        } catch (err) {
          console.error("Error fetching paid lessons:", err);
        }
      };

      if (profile?.user?.purchased_packages?.length > 0) {
        fetchPaidLessons();
      }
    }
  }, [profile]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };
  return (
    <section className="explore-course py-120 position-relative z-1 mash-bg-main mash-bg-main-two mash-reverse">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="wow bounceIn">مواعيد حصصك</h2>
          <p className="wow bounceInUp">
            استعد للتعلم في الأوقات التي اخترتها، وكن جاهزًا للاستفادة القصوى من
            كل حصة!
          </p>
        </div>
        {isLoading ? (
          <SkeletonTheme baseColor="lightgray">
            <Skeleton count={5} />
          </SkeletonTheme>
        ) : error ? (
          <p className="text-red-500">
            حدث خطأ أثناء تحميل البيانات: {error.message}
          </p>
        ) : (
          <>
            {token && (
              <Slider {...settings} className="explore-item-slider">
                {/* Default free lessons */}
                {lessons?.data?.map((lesson, index) => {
                  return (
                    lesson?.class?.id === profile?.user?.class?.id && (
                      <CourseItem
                        key={index}
                        course={lesson}
                        profile={profile}
                      />
                    )
                  );
                })}

                {/* Paid lessons */}
                {profile?.user?.purchased_packages?.length > 0 &&
                  allLessons?.map((lesson, index) => {
                    // Check if at least one package is valid (not expired)
                    const hasValidPackage =
                      profile.user.purchased_packages.some(
                        (pkg) => new Date(pkg.expires_at) > new Date()
                      );

                    // Render the lesson only if there is a valid package
                    if (
                      hasValidPackage &&
                      lesson?.lessons?.class?.id === profile?.user?.class?.id
                    ) {
                      return (
                        <PaidLessons
                          lessons={lesson}
                          key={index}
                          profile={profile}
                        />
                      );
                    }

                    return null; // Skip rendering if no valid package exists
                  })}

                {!token && <CourseItem course={courses} />}
              </Slider>
            )}
          </>
        )}

        <Slider {...settings} className="explore-item-slider">
          {!token &&
            courses.map((course) => (
              <CourseItem course={course} token={token} />
            ))}
        </Slider>
      </div>
    </section>
  );
}

function PaidLessons(lesson, profile) {
  return (
    <div
      className="course-item bg-white rounded-16 p-12 position-relative box-shadow-md"
      dir="rtl"
    >
      <div className="course-top-header">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
          >
            <path
              d="M12 3.25C13.3438 3.25 14.6094 3.50781 15.7969 4.02344C16.9844 4.52344 18.0195 5.21484 18.9023 6.09766C19.7852 6.98047 20.4766 8.01562 20.9766 9.20312C21.4922 10.3906 21.75 11.6562 21.75 13C21.75 14.3438 21.4922 15.6094 20.9766 16.7969C20.4766 17.9844 19.7852 19.0195 18.9023 19.9023C18.0195 20.7852 16.9844 21.4766 15.7969 21.9766C14.6094 22.4922 13.3438 22.75 12 22.75C10.6562 22.75 9.39062 22.4922 8.20312 21.9766C7.01562 21.4766 5.98047 20.7852 5.09766 19.9023C4.21484 19.0195 3.52344 17.9844 3.02344 16.7969C2.50781 15.6094 2.25 14.3438 2.25 13C2.25 11.6562 2.50781 10.3906 3.02344 9.20312C3.53906 8.01562 4.23438 6.98438 5.10938 6.10938C5.98438 5.23438 7.01562 4.53906 8.20312 4.02344C9.39062 3.50781 10.6562 3.25 12 3.25ZM12 21.25C13.1406 21.25 14.2109 21.0312 15.2109 20.5938C16.2109 20.1719 17.0859 19.5859 17.8359 18.8359C18.5859 18.0859 19.1719 17.2109 19.5938 16.2109C20.0312 15.2109 20.25 14.1406 20.25 13C20.25 11.8594 20.0312 10.7891 19.5938 9.78906C19.1719 8.78906 18.5859 7.91406 17.8359 7.16406C17.0859 6.41406 16.2109 5.82812 15.2109 5.40625C14.2109 4.96875 13.1406 4.75 12 4.75C10.8594 4.75 9.78906 4.96875 8.78906 5.40625C7.78906 5.82812 6.91406 6.41406 6.16406 7.16406C5.41406 7.91406 4.82812 8.78906 4.40625 9.78906C3.96875 10.7891 3.75 11.8594 3.75 13C3.75 14.1406 3.96875 15.2109 4.40625 16.2109C4.82812 17.2109 5.41406 18.0859 6.16406 18.8359C6.91406 19.5859 7.78906 20.1719 8.78906 20.5938C9.78906 21.0312 10.8594 21.25 12 21.25ZM6 13C6 13.2031 6.07422 13.3789 6.22266 13.5273C6.37109 13.6758 6.54688 13.75 6.75 13.75H12C12.2031 13.75 12.3789 13.6758 12.5273 13.5273C12.6758 13.3789 12.75 13.2031 12.75 13V7.75C12.75 7.54688 12.6758 7.37109 12.5273 7.22266C12.3789 7.07422 12.2031 7 12 7C11.7969 7 11.6211 7.07422 11.4727 7.22266C11.3242 7.37109 11.25 7.54688 11.25 7.75V12.25H6.75C6.54688 12.25 6.37109 12.3242 6.22266 12.4727C6.07422 12.6211 6 12.7969 6 13Z"
              fill="#066CCB"
            />
          </svg>
          {lesson.lessons.time}
        </span>
      </div>
      <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
        <Link
          to={`/course-details/${lesson.lessons.id}`}
          className="w-100 h-100"
        >
          <img
            src={lesson.lessons.image}
            alt="Course Image"
            className="course-item__img rounded-12 cover-img transition-2"
          />
        </Link>
      </div>
      <div className="course-item__content position-relative">
        <div className="d-flex align-items-center justify-content-between flex-wrap">
          <Link
            to={`/lessons/teacher/${lesson?.teacher?.id}`}
            className="flex-align fs-5 fw-medium text-black"
          >
            {lesson.lessons.teacher?.name ?? ""}
          </Link>
          <div className="flex-align">
            <span className="text-lg text-neutral-700 fw-medium">
              {Number(lesson?.lessons.teacher?.max_rating).toFixed(2) ?? 0}
              {/* {course.rating} */}
            </span>
            <span className="text-2xl fw-medium text-warning-600 d-flex">
              <i className="ph-fill ph-star"></i>
            </span>
          </div>
        </div>
        <hr />
        <ul className="courses-learn-list">
          <li>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
            >
              <path
                d="M7.125 22.48C7.125 22.7925 7.23438 23.0581 7.45312 23.2769C7.67188 23.4956 7.9375 23.605 8.25 23.605H15.75C16.0625 23.605 16.3281 23.4956 16.5469 23.2769C16.7656 23.0581 16.875 22.7925 16.875 22.48C16.875 22.1675 16.7656 21.9019 16.5469 21.6831C16.3281 21.4644 16.0625 21.355 15.75 21.355H8.25C7.9375 21.355 7.67188 21.4644 7.45312 21.6831C7.23438 21.9019 7.125 22.1675 7.125 22.48ZM3.375 10.48C3.375 10.48 3.375 10.4839 3.375 10.4917C3.375 10.4995 3.375 10.5034 3.375 10.5034C3.375 11.1909 3.45312 11.855 3.60938 12.4956C3.76562 13.1362 3.98438 13.7417 4.26562 14.312C4.54688 14.8823 4.89062 15.4175 5.29688 15.9175C5.70312 16.4175 6.15625 16.8628 6.65625 17.2534H6.67969C6.80469 17.3628 6.91016 17.4956 6.99609 17.6519C7.08203 17.8081 7.125 17.98 7.125 18.1675V18.355C7.125 18.8706 7.30859 19.312 7.67578 19.6792C8.04297 20.0464 8.48438 20.23 9 20.23H15C15.5156 20.23 15.957 20.0464 16.3242 19.6792C16.6914 19.312 16.875 18.8706 16.875 18.355V18.1675C16.875 17.98 16.9141 17.812 16.9922 17.6636C17.0703 17.5151 17.1797 17.3862 17.3203 17.2769C17.8203 16.8862 18.2734 16.4409 18.6797 15.9409C19.0859 15.4409 19.4336 14.9058 19.7227 14.3354C20.0117 13.7651 20.2344 13.1597 20.3906 12.519C20.5469 11.8784 20.625 11.2144 20.625 10.5269C20.625 9.35498 20.4062 8.25342 19.9688 7.22217C19.5312 6.17529 18.9336 5.26123 18.1758 4.47998C17.418 3.69873 16.5234 3.07373 15.4922 2.60498C14.4766 2.13623 13.3828 1.88623 12.2109 1.85498C12.1797 1.85498 12.1445 1.85498 12.1055 1.85498C12.0664 1.85498 12.0312 1.85498 12 1.85498C10.8125 1.85498 9.69531 2.08154 8.64844 2.53467C7.60156 2.98779 6.6875 3.60498 5.90625 4.38623C5.125 5.16748 4.50781 6.08154 4.05469 7.12842C3.60156 8.17529 3.375 9.29248 3.375 10.48ZM5.625 10.48C5.625 9.60498 5.78906 8.77686 6.11719 7.99561C6.46094 7.22998 6.92188 6.55811 7.5 5.97998C8.07812 5.40186 8.75 4.94092 9.51562 4.59717C10.2969 4.26904 11.125 4.10498 12 4.10498C12.0312 4.10498 12.0586 4.10498 12.082 4.10498C12.1055 4.10498 12.1328 4.10498 12.1641 4.10498C13.0234 4.12061 13.8281 4.30811 14.5781 4.66748C15.3438 5.01123 16.0078 5.47217 16.5703 6.05029C17.1328 6.62842 17.5781 7.30029 17.9062 8.06592C18.2188 8.83154 18.375 9.65186 18.375 10.5269C18.375 11.5269 18.1523 12.4604 17.707 13.3276C17.2617 14.1948 16.6719 14.9175 15.9375 15.4956C15.5625 15.7925 15.2578 16.1558 15.0234 16.5854C14.7891 17.0151 14.6562 17.48 14.625 17.98H9.375C9.34375 17.48 9.21094 17.0151 8.97656 16.5854C8.74219 16.1558 8.4375 15.7925 8.0625 15.4956C7.3125 14.9019 6.71875 14.1714 6.28125 13.3042C5.84375 12.437 5.625 11.5034 5.625 10.5034C5.625 10.4878 5.625 10.48 5.625 10.48ZM7.5 9.98779C7.60938 9.11279 7.93359 8.34326 8.47266 7.6792C9.01172 7.01514 9.67969 6.53467 10.4766 6.23779H10.5C10.5469 6.22217 10.6016 6.20654 10.6641 6.19092C10.7266 6.17529 10.7891 6.16748 10.8516 6.16748C11.1641 6.16748 11.4297 6.27686 11.6484 6.49561C11.8672 6.71436 11.9766 6.97998 11.9766 7.29248C11.9766 7.54248 11.9102 7.76123 11.7773 7.94873C11.6445 8.13623 11.4688 8.26904 11.25 8.34717C10.8438 8.48779 10.5039 8.72607 10.2305 9.06201C9.95703 9.39795 9.79688 9.78467 9.75 10.2222C9.70312 10.5034 9.57422 10.7417 9.36328 10.937C9.15234 11.1323 8.90625 11.23 8.625 11.23C8.3125 11.23 8.04688 11.1206 7.82812 10.9019C7.60938 10.6831 7.5 10.4175 7.5 10.105C7.5 10.0894 7.5 10.0698 7.5 10.0464C7.5 10.0229 7.5 9.99561 7.5 9.96436V9.98779Z"
                fill="#222E48"
              />
            </svg>{" "}
            {/* {course.subject}{" "} */}
            {lesson.lessons.subject?.description ?? ""}
          </li>
          <li>
            {" "}
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
            </svg>{" "}
            {profile.user.class.name || ""}{" "}
          </li>
          <li>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 8.35693V11.9998L14.1429 14.1426"
                stroke="#222E48"
                stroke-width="1.71429"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9999 19.7142C13.013 19.7142 14.0161 19.5147 14.9521 19.127C15.888 18.7393 16.7384 18.1711 17.4548 17.4548C18.1711 16.7384 18.7393 15.888 19.127 14.9521C19.5147 14.0161 19.7142 13.013 19.7142 11.9999C19.7142 10.9869 19.5147 9.98374 19.127 9.0478C18.7393 8.11186 18.1711 7.26144 17.4548 6.54511C16.7384 5.82877 15.888 5.26054 14.9521 4.87286C14.0161 4.48518 13.013 4.28564 11.9999 4.28564C9.95397 4.28564 7.99182 5.0984 6.54511 6.54511C5.0984 7.99182 4.28564 9.95397 4.28564 11.9999C4.28564 14.0459 5.0984 16.008 6.54511 17.4548C7.99182 18.9015 9.95397 19.7142 11.9999 19.7142Z"
                stroke="#222E48"
                stroke-width="1.71429"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.2858 5.57122V2.57122C16.2858 2.11656 16.1052 1.68053 15.7837 1.35904C15.4622 1.03755 15.0262 0.856934 14.5715 0.856934H9.42864C8.97398 0.856934 8.53795 1.03755 8.21646 1.35904C7.89497 1.68053 7.71436 2.11656 7.71436 2.57122V5.57122M16.2858 18.4009V21.4284C16.2858 21.883 16.1052 22.3191 15.7837 22.6405C15.4622 22.962 15.0262 23.1426 14.5715 23.1426H9.42864C8.97398 23.1426 8.53795 22.962 8.21646 22.6405C7.89497 22.3191 7.71436 21.883 7.71436 21.4284V18.4009"
                stroke="#222E48"
                stroke-width="1.71429"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{" "}
            {lesson.lessons.time}{" "}
          </li>
          <li>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M2.25 5H21.75V18H2.25V5ZM12 8.25C12.862 8.25 13.6886 8.59241 14.2981 9.2019C14.9076 9.8114 15.25 10.638 15.25 11.5C15.25 12.362 14.9076 13.1886 14.2981 13.7981C13.6886 14.4076 12.862 14.75 12 14.75C11.138 14.75 10.3114 14.4076 9.7019 13.7981C9.09241 13.1886 8.75 12.362 8.75 11.5C8.75 10.638 9.09241 9.8114 9.7019 9.2019C10.3114 8.59241 11.138 8.25 12 8.25ZM6.58333 7.16667C6.58333 7.7413 6.35506 8.2924 5.94873 8.69873C5.5424 9.10506 4.9913 9.33333 4.41667 9.33333V13.6667C4.9913 13.6667 5.5424 13.8949 5.94873 14.3013C6.35506 14.7076 6.58333 15.2587 6.58333 15.8333H17.4167C17.4167 15.2587 17.6449 14.7076 18.0513 14.3013C18.4576 13.8949 19.0087 13.6667 19.5833 13.6667V9.33333C19.0087 9.33333 18.4576 9.10506 18.0513 8.69873C17.6449 8.2924 17.4167 7.7413 17.4167 7.16667H6.58333Z"
                fill="#222E48"
              />
            </svg>{" "}
            {lesson.lessons.price} جنيه{" "}
          </li>
        </ul>
        <Link
          to={`/course-details/${lesson.lessons.id}`}
          className="text-center text-light fw-light bg-primary hover-bg-neutral-500 d-block w-100 join-done-btn"
        >
          تم الانضمام
        </Link>
      </div>
    </div>
  );
}

function AboutTwo() {
  return (
    <section className="about-two py-120 position-relative z-1 bg-main-25">
      <div className="position-relative">
        <div className="container">
          <div className="row gy-xl-0 gy-5 flex-wrap-reverse align-items-center">
            <div className="col-xl-6 pe-xl-5">
              <div className="about-two__thumb position-relative">
                <img
                  src="assets/images/bg/strudy-bg.png"
                  className="rounded-16 cover-img wow bounceIn"
                  alt=""
                  data-tilt
                  data-tilt-max="10"
                  data-tilt-speed="500"
                  data-tilt-perspective="5000"
                  data-tilt-full-page-listening
                />
                <span className="shadow-main-three w-80 h-80 flex-center bg-main-three-600 rounded-circle position-absolute inset-block-start-0 inset-inline-start-0 mt-40 ms--40 animation-upDown">
                  <img src="assets/images/icons/bulb-icon.png" alt="" />
                </span>
                <div className="offer-message two px-24 py-12 rounded-12 bg-white fw-medium box-shadow-lg flex-align d-inline-flex gap-16 animation-upDown">
                  <span className="flex-shrink-0 w-48 h-48 bg-purple-400 text-white text-2xl flex-center rounded-circle">
                    <i className="ph ph-watch"></i>
                  </span>
                  <div>
                    <h6 className="mb-4">20% خصم</h6>
                    <span>علي جميع الدورات</span>
                  </div>
                </div>
                <div className="offer-message style-two me-lg-0 me-24 px-24 py-12 rounded-12 bg-white fw-medium flex-align d-inline-flex gap-16 box-shadow-lg animation-upDown">
                  <span className="flex-shrink-0 w-48 h-48 bg-main-two-600 text-white text-2xl flex-center rounded-circle">
                    <img src="assets/images/icons/stars-white.png" alt="" />
                  </span>
                  <div>
                    <span className="text-lg text-neutral-700 d-block">
                      4.6
                      <span className="text-neutral-100">(2.4k)</span>
                    </span>
                    <span className="text-neutral-500">متوسط المراجعات</span>
                  </div>
                </div>
                <div className="position-absolute inset-block-end-0 inset-inline-end-0 me-lg-0 me-24 px-24 py-12 rounded-12 bg-white fw-medium flex-align d-inline-flex gap-16 box-shadow-lg animation-upDown">
                  <div className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="130"
                      height="130"
                      viewBox="0 0 130 130"
                      fill="none"
                    >
                      <path
                        d="M65 59.5833C67.9792 59.5833 70.5304 58.5235 72.6538 56.4037C74.7771 54.284 75.8369 51.7328 75.8333 48.75C75.8297 45.7672 74.7699 43.2178 72.6538 41.1017C70.5376 38.9856 67.9864 37.9239 65 37.9167C62.0136 37.9094 59.4642 38.9711 57.3517 41.1017C55.2392 43.2322 54.1775 45.7817 54.1667 48.75C54.1558 51.7183 55.2175 54.2696 57.3517 56.4037C59.4858 58.5379 62.0353 59.5978 65 59.5833ZM37.9167 113.75V102.917H59.5833V86.125C55.1597 85.1319 51.211 83.2596 47.7371 80.5079C44.2632 77.7562 41.7119 74.3022 40.0833 70.1458C33.3125 69.3333 27.6485 66.3776 23.0913 61.2787C18.534 56.1799 16.2536 50.1981 16.25 43.3333V37.9167C16.25 34.9375 17.3117 32.3881 19.435 30.2683C21.5583 28.1486 24.1078 27.0869 27.0833 27.0833H37.9167V16.25H92.0833V27.0833H102.917C105.896 27.0833 108.447 28.145 110.57 30.2683C112.694 32.3917 113.754 34.9411 113.75 37.9167V43.3333C113.75 50.1944 111.47 56.1762 106.909 61.2787C102.348 66.3812 96.6839 69.3369 89.9167 70.1458C88.2917 74.2986 85.7422 77.7526 82.2683 80.5079C78.7944 83.2632 74.8439 85.1356 70.4167 86.125V102.917H92.0833V113.75H37.9167ZM37.9167 58.5V37.9167H27.0833V43.3333C27.0833 46.7639 28.0764 49.8568 30.0625 52.6121C32.0486 55.3674 34.6667 57.33 37.9167 58.5ZM92.0833 58.5C95.3333 57.3264 97.9514 55.3619 99.9375 52.6067C101.924 49.8514 102.917 46.7603 102.917 43.3333V37.9167H92.0833V58.5Z"
                        fill="url(#paint0_linear_789_6327)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_789_6327"
                          x1="65"
                          y1="16.25"
                          x2="65"
                          y2="113.75"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FFA900" />
                          <stop offset="1" stop-color="#AF6D0F" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <h6 className="mb-4 text-neutral-700 text-2xl">ممتاز</h6>
                    <span className="text-sm text-neutral-500">
                      90% من العملاء راضون
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-two-content">
                <div className="mb-40">
                  <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown">
                    <span className="text-main-600 text-2xl d-flex">
                      <i className="ph-bold ph-book"></i>
                    </span>
                    <h5 className="text-main-600 mb-0">لماذا نحن</h5>
                  </div>
                  <h2 className="mb-24 wow bounceIn">
                    لأننا نجمع بين المعلمين والطلاب في بيئة تعليمية مبتكرة
                    وفعّالة.
                  </h2>
                  <p className="text-neutral-500 text-line-2 wow bounceInUp">
                    نحن شغوفون بتحويل حياة الناس من خلال التعليم. تأسست مؤسستنا
                    برؤية تهدف إلى جعل التعلم متاحًا للجميع، ونؤمن بقوة المعرفة
                    في...
                  </p>
                </div>
                <div className="grid-cols-2">
                  <div
                    className="flex-align align-items-start gap-20 animation-item"
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                    <span className="flex-shrink-0 w-60 h-60 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md">
                      <img
                        src="assets/images/icons/choose-us-icon1.png"
                        className="animate__swing"
                        alt=""
                      />
                    </span>
                    <div className="flex-grow-1">
                      <h6 className="text-neutral-800 text-xl fw-medium mb-8">
                        تعليم تفاعلي
                      </h6>
                      <p className="text-neutral-500 text-line-2">
                        نوفر طرقًا حديثة تجعل التواصل بين المعلمين والطلاب أكثر
                        فعالية وإلهامًا
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex-align align-items-start gap-20 animation-item"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    <span className="flex-shrink-0 w-60 h-60 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md">
                      <img
                        src="assets/images/icons/choose-us-icon2.png"
                        className="animate__swing"
                        alt=""
                      />
                    </span>
                    <div className="flex-grow-1">
                      <h6 className="text-neutral-800 text-xl fw-medium mb-8">
                        معلمون خبراء
                      </h6>
                      <p className="text-neutral-500 text-line-2">
                        فريقنا من المعلمين المؤهلين يضمن تقديم أفضل مستوى من
                        التعليم.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex-align align-items-start gap-20 animation-item"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <span className="flex-shrink-0 w-60 h-60 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md">
                      <img
                        src="assets/images/icons/choose-us-icon3.png"
                        className="animate__swing"
                        alt=""
                      />
                    </span>
                    <div className="flex-grow-1">
                      <h6 className="text-neutral-800 text-xl fw-medium mb-8">
                        تعليم مخصص للجميع
                      </h6>
                      <p className="text-neutral-500 text-line-2">
                        نوفر تجربة تعليمية تناسب احتياجات كل طالب لتحقيق النجاح.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex-align align-items-start gap-20 animation-item"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <span className="flex-shrink-0 w-60 h-60 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md">
                      <img
                        src="assets/images/icons/choose-us-icon4.png"
                        className="animate__swing"
                        alt=""
                      />
                    </span>
                    <div className="flex-grow-1">
                      <h6 className="text-neutral-800 text-xl fw-medium mb-8">
                        تواصل مباشر
                      </h6>
                      <p className="text-neutral-500 text-line-2">
                        تمكين المعلمين من التفاعل السلس مع الطلاب لتحقيق فهم
                        أعمق
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-40 border-top border-neutral-50 mt-40 border-dashed border-0">
                  <Link
                    to="#"
                    className="btn btn-main rounded-pill flex-align d-inline-flex gap-8"
                  >
                    المزيد
                    <i className="ph-bold ph-arrow-up-left d-flex text-lg"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlanSection() {
  const dispatch = useDispatch();
  const { profile, isLoading, error } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);
  const token = localStorage.getItem("token");

  const [plans, setPlans] = useState([]);
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const handleSubscribe = async (packageId, storedUser) => {
    if (!token) window.location.href = "/login";
    try {
      const payload = {
        package_id: packageId,
        user_id: storedUser.id,
        first_name: storedUser.name,
        last_name: storedUser.name,
        phone: storedUser.phone,
      };

      const response = await axios.post(
        "https://trust-eg.academy/api/purchase",
        payload
      );

      // Redirect to the URL from the response
      if (response.data.redirect_url) {
        window.location.href = response.data.redirect_url;
      } else {
        toast.error("No redirect URL provided.");
      }
    } catch (error) {
      // Show error message
      toast.error("No redirect URL provided.");
    }
  };

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get(
          "https://trust-eg.academy/api/packages"
        );

        setPlans(response.data.data);
      } catch (error) {
        if (error.response) {
          const status = error.response.status;
          if (status === 400) {
            toast.error("Invalid request. Please check your input.");
          } else if (status === 401) {
            toast.error("Unauthorized access. Please log in again.");
          } else if (status === 403) {
            toast.error("You do not have permission to perform this action.");
          } else if (status === 404) {
            toast.error("The requested resource was not found.");
          } else if (status === 500) {
            toast.error("Server error. Please try again later.");
          } else {
            toast.error("An unexpected error occurred. Please try again.");
          }
        } else if (error.request) {
          toast.error("Network error. Please check your internet connection.");
        } else {
          toast.error("Failed to process your request. Please try again.");
        }
      }
    };

    fetchPlans();
  }, []);
  return (
    <section className="explore-course py-120 position-relative z-1 mash-bg-main mash-bg-main-two mash-reverse">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="wow bounceIn">الاشتراكات</h2>
          <p className="wow bounceInUp">
            تتوفر بعض الدورات مجانًا، بينما تحتاج بعض الدورات الأخرى إلى رسوم
            تسجيل. يمكنك الاطلاع على تفاصيل كل دورة لمعرفة التكلفة.
          </p>
        </div>
        <div className="plan-container">
          <div className="row justify-content-center">
            {plans?.map((plan, index) => {
              if (plan.grade_id !== storedUser?.grade_id) return null;

              // Check if the current plan is already purchased and not expired
              const isPurchased = profile?.user?.purchased_packages?.some(
                (pkg) =>
                  pkg.package_name === plan.name &&
                  new Date(pkg.expires_at) > new Date()
              );

              return (
                <div
                  key={index}
                  className="col-12 col-lg-4 col-md-6 wow fadeInUp"
                  data-aos="fade-up"
                  data-aos-duration="400"
                  style={{ marginBottom: "30px" }}
                >
                  <div
                    className={`course-item bg-white rounded-16 py-12 box-shadow-md`}
                  >
                    <div
                      className="course-item__thumb w-100 overflow-hidden position-relative"
                      style={{ marginTop: "20px" }}
                    >
                      <div className="course-item bg-white rounded-16 py-12 plan-one box-shadow-md">
                        <div className="course-item__thumb w-100 overflow-hidden position-relative plan-one-header">
                          <h1
                            className="fs-4 text-center"
                            style={{ marginBottom: "30px" }}
                          >
                            {plan.name}
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="course-item__content position-relative">
                      <p className="mb-4">ابتداء من</p>
                      <h2
                        className="fs-2 text-black"
                        style={{ marginTop: "20px" }}
                      >
                        {plan.price} جنية مصري
                      </h2>
                      <ul
                        className="courses-learn-list px-3"
                        style={{ marginBottom: "50px" }}
                      >
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M10.5 19C15.7467 19 20 14.7467 20 9.5C20 4.25329 15.7467 0 10.5 0C5.25329 0 1 4.25329 1 9.5C1 14.7467 5.25329 19 10.5 19Z"
                              fill="#4CAF50"
                            />
                            <path
                              d="M15.2952 5.24756L9.14277 11.3999L6.60944 8.86661L5.34277 10.1333L9.14277 13.9333L16.5618 6.51422L15.2952 5.24756Z"
                              fill="white"
                            />
                          </svg>{" "}
                          {plan.line1 || "عدد غير محدود من المدرسين"}
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M10.5 19C15.7467 19 20 14.7467 20 9.5C20 4.25329 15.7467 0 10.5 0C5.25329 0 1 4.25329 1 9.5C1 14.7467 5.25329 19 10.5 19Z"
                              fill="#4CAF50"
                            />
                            <path
                              d="M15.2952 5.24756L9.14277 11.3999L6.60944 8.86661L5.34277 10.1333L9.14277 13.9333L16.5618 6.51422L15.2952 5.24756Z"
                              fill="white"
                            />
                          </svg>{" "}
                          {plan.line2 || "جميع المواد بشكل تفاعلي"}
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M10.5 19C15.7467 19 20 14.7467 20 9.5C20 4.25329 15.7467 0 10.5 0C5.25329 0 1 4.25329 1 9.5C1 14.7467 5.25329 19 10.5 19Z"
                              fill="#4CAF50"
                            />
                            <path
                              d="M15.2952 5.24756L9.14277 11.3999L6.60944 8.86661L5.34277 10.1333L9.14277 13.9333L16.5618 6.51422L15.2952 5.24756Z"
                              fill="white"
                            />
                          </svg>{" "}
                          {plan.line3 || "مذكرات واختبارات "}
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M10.5 19C15.7467 19 20 14.7467 20 9.5C20 4.25329 15.7467 0 10.5 0C5.25329 0 1 4.25329 1 9.5C1 14.7467 5.25329 19 10.5 19Z"
                              fill="#4CAF50"
                            />
                            <path
                              d="M15.2952 5.24756L9.14277 11.3999L6.60944 8.86661L5.34277 10.1333L9.14277 13.9333L16.5618 6.51422L15.2952 5.24756Z"
                              fill="white"
                            />
                          </svg>{" "}
                          {plan.line4 || "حصص تفاعليه "}
                        </li>
                      </ul>
                      <hr className="border-dashed" />
                      <a
                        style={{ cursor: "pointer" }}
                        className={`text-center text-light fw-light d-block w-100 ${
                          isPurchased
                            ? "bg-secondary hover-bg-neutral-500"
                            : "bg-primary hover-bg-neutral-500"
                        } join-done-btn`}
                        disabled={isPurchased}
                        onClick={(e) => {
                          e.preventDefault();
                          if (!isPurchased) {
                            handleSubscribe(plan.id, storedUser);
                          }
                        }}
                      >
                        {isPurchased ? "مشترك بالفعل" : "اشترك"}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
