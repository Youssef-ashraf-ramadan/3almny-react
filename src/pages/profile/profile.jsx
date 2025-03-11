import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import {
  fetchUserProfile,
  updateUserPassword,
  updateUserProfile,
} from "../../redux/features/actions/profileActions";
import { ToastContainer, toast } from "react-toastify";

function ProfilePage() {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <ProfilePageBanner />
      <ProfileDetails />
    </>
  );
}
function ProfilePageBanner() {
  return (
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
              <h1 className="breadcrumb__title display-4 fw-semibold text-center">
                الملف الشخصي
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

                <li className="breadcrumb__item d-none">
                  <i className="text-neutral-500 d-flex ph-bold ph-caret-right"></i>
                </li>
                <li className="breadcrumb__item">
                  <span className="text-main-two-600"> الملف الشخصي </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function ProfileDetails() {
  const dispatch = useDispatch();
  const { profile, isLoading, error } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchUserProfile());
    
  }, [dispatch]);

  const [passwordData, setPasswordData] = useState({
    current_password: "",
    new_password: "",
    new_password_confirmation: "",
  });

  const handlePasswordInputChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (passwordData.new_password !== passwordData.new_password_confirmation) {
      alert("كلمة المرور الجديدة وتأكيدها غير متطابقين");
      return;
    }
    const result = await dispatch(updateUserPassword(passwordData));

    if (updateUserPassword.fulfilled.match(result)) {
      setPasswordData({
        current_password: "",
        new_password: "",
        new_password_confirmation: "",
      });
    }
  };

  const [userData, setUserData] = useState({
    name: profile?.user?.name || "",
    email: profile?.user?.email || "",
    phone: profile?.user?.phone || "",
    age: profile?.user?.age || "",
    gender: profile?.user?.gender || "",
    avatar:
      typeof profile?.user?.avatar === "string" ? profile.user.avatar : "", // تأكد أن avatar ليس كائنًا
  });

  useEffect(() => {
    setUserData({
      name: profile?.user?.name || "",
      email: profile?.user?.email || "",
      phone: profile?.user?.phone || "",
      age: profile?.user?.age || "",
      gender: profile?.user?.gender || "",
      // avatar: typeof profile?.user?.avatar === "string" ? profile.user.avatar : "", // تأكد أن avatar ليس كائنًا
    });
  }, [profile]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };
  const avatarUrl = typeof userData.avatar === "string" ? userData.avatar : "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userData.name || !userData.email || !userData.phone) {
      alert("يرجى ملء جميع الحقول المطلوبة.");
      return;
    }
    const formData = new FormData();
    for (const key in userData) {
      formData.append(key, userData[key]);
    }
    dispatch(updateUserProfile({ userData: formData }));
  };

  return (
    <section className="tutor-details py-120">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="border border-neutral-30 rounded-12 bg-white p-8">
              <div className="border border-neutral-30 rounded-12 bg-main-25 p-32 bg-main-25">
                <div className="p-16 border border-neutral-50 rounded-circle aspect-ratio-1 max-w-150 max-h-150 mx-auto">
                  <div className="position-relative">
                    <img
                      src={`${profile?.user?.avatar}`}
                      alt=""
                      className="rounded-circle bg-dark-yellow aspect-ratio-1 cover-img"
                    />
                    <div className="position-relative">
                      <input type="file" id="fileInput" className="d-none" />
                      <label
                        htmlFor="fileInput"
                        style={{ cursor: "pointer" }}
                        className="w-32 h-32 bg-success-600 rounded-circle border border-main-25 border-3 flex-center text-white position-absolute inset-block-end-0 inset-inline-end-0 me-4 cursor-pointer"
                      >
                        <i className="ph-bold ph-upload"></i>
                      </label>
                    </div>
                  </div>
                </div>
                <h4 className="mb-16 text-center mt-40">
                  {profile?.user?.name}
                </h4>
                <div className="flex-center gap-10 flex-wrap my-20">
                  <span className="w-4 h-4 bg-main-600 rounded-circle"></span>
                  <span className="text-neutral-500 text-md">
                    الصف:{" "}
                    <span className="text-main-600 fw-medium">
                      {profile?.user?.class?.name}
                    </span>
                  </span>
                  <span className="w-4 h-4 bg-main-600 rounded-circle"></span>
                  <div className="flex-align gap-4">
                    <span className="text-lg fw-medium text-warning-600 d-flex">
                      <i className="ph-fill ph-star"></i>
                    </span>
                    <span className="text-md text-neutral-700">
                      الفئة
                      <span className="text-neutral-100">
                        {" "}
                        {profile?.user?.category?.name}
                      </span>
                    </span>
                  </div>
                </div>

                <span className="d-block border border-neutral-30 my-20 border-dashed"></span>
                <div className="d-flex flex-column gap-16">
                  <div className="flex-align gap-16">
                    <span className="text-2xl text-main-600">
                      <i className="ph-bold ph-phone-call"></i>
                    </span>
                    <Link
                      to={`tel:${profile?.user?.phone}`}
                      className="text-neutral-700 hover-text-main-600"
                    >
                      {profile?.user?.phone}
                    </Link>
                  </div>
                  <div className="flex-align gap-16">
                    <span className="text-2xl text-success-600">
                      <i className="ph-bold ph-envelope-simple"></i>
                    </span>
                    <Link
                      to={`mailto:${profile?.user?.email}`}
                      className="text-neutral-700 hover-text-main-600"
                    >
                      {profile?.user?.email}
                    </Link>
                  </div>
                  {/* <div className="flex-align gap-16">
                        <span className="text-2xl text-warning-600">
                          <i className="ph-bold ph-map-pin-line"></i>
                        </span>
                        <span className="text-neutral-700">مصر</span>
                      </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <ul
              className="nav nav-pills common-tab d-inline-flex gap-16 bg-white p-12 border border-neutral-30 rounded-pill"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8 active"
                  id="editProfile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-tutionInfo"
                  type="button"
                  role="tab"
                  aria-controls="pills-tutionInfo"
                  aria-selected="true"
                >
                  <i className="text-xl text-main-600 d-flex ph-bold ph-user"></i>
                  تعديل الملف الشخصي
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8"
                  id="changePassword-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#changePassword"
                  type="button"
                  role="tab"
                  aria-controls="changePassword"
                  aria-selected="false"
                >
                  تغيير كلمة المرور
                </button>
              </li>
            </ul>

            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-tutionInfo"
                role="tabpanel"
                aria-labelledby="pills-tutionInfo-tab"
                tabIndex="0"
              >
                <div className="tutor-details__content">
                  <div className="border border-neutral-30 rounded-12 bg-white p-8 mt-24">
                    <div className="border border-neutral-30 rounded-12 bg-main-25 p-32 bg-main-25">
                      <span className="d-block border border-neutral-30 my-24 border-dashed"></span>
                      <form className="p-4" onSubmit={handleSubmit}>
                        <div className="mb-3 position-relative">
                          <label htmlFor="username" className="form-label">
                            اسم المستخدم
                          </label>
                          <div className="input-group">
                            <input
                              type="text"
                              id="username"
                              className="form-control py-12 mb-16"
                              placeholder="اسم المستخدم"
                              name="name"
                              value={userData.name}
                              // value={profile?.user?.name}

                              onChange={handleChange}
                              defaultValue={profile?.user?.name}
                              required
                            />
                          </div>
                        </div>
                        <div className="mb-3 position-relative">
                          <label htmlFor="phone" className="form-label">
                            رقم الهاتف
                          </label>
                          <div className="input-group">
                            <input
                              id="phone"
                              className="form-control py-12 mb-16"
                              placeholder="رقم الهاتف"
                              name="phone"
                              value={userData.phone}
                              // value={profile?.user?.phone}

                              onChange={handleChange}
                              defaultValue={profile?.user?.phone}
                              required
                            />
                          </div>
                        </div>
                        <div className="mb-3 position-relative">
                          <label htmlFor="email" className="form-label">
                            البريد الإلكتروني
                          </label>
                          <div className="input-group">
                            <input
                              type="email"
                              id="email"
                              className="form-control py-12 mb-16"
                              placeholder="البريد الإلكتروني"
                              name="email"
                              value={userData.email}
                              // value={profile?.user?.email}

                              onChange={handleChange}
                              defaultValue={profile?.user?.email}
                              required
                            />
                          </div>
                        </div>
                        <div className="mb-3 position-relative">
                          <label htmlFor="age" className="form-label">
                            العمر
                          </label>
                          <input
                            type="number"
                            name="age"
                            className="form-control py-2 mb-3"
                            placeholder="العمر"
                            value={userData.age}
                            // value={profile?.user?.age}

                            onChange={handleChange}
                            defaultValue={profile?.user?.age}
                          />
                        </div>

                        <div className="mb-3 position-relative">
                          <label htmlFor="gender" className="form-label">
                            الجنس
                          </label>
                          <select
                            name="gender"
                            className="form-control py-2 mb-3"
                            value={userData.gender}
                            // value={profile?.user?.gender}

                            onChange={handleChange}
                            defaultValue={profile?.user?.gender}
                          >
                            <option value="">اختر الجنس</option>
                            <option value="male">ذكر</option>
                            <option value="female">أنثى</option>
                          </select>
                        </div>
                        <div className="mb-3 position-relative">
                          <label htmlFor="avatar" className="form-label">
                            الصورة الشخصية
                          </label>
                          {avatarUrl && (
                            <img
                              src={avatarUrl}
                              alt="الصورة الشخصية"
                              className="img-thumbnail mb-3"
                            />
                          )}

                          <input
                            type="file"
                            name="avatar"
                            className="form-control py-2 mb-3"
                            onChange={handleChange}
                            accept="image/*"
                          />
                        </div>
                        {/* <div className="mb-3 position-relative">
                              <label htmlFor="password" className="form-label">
                                كلمة المرور
                              </label>
                              <div className="input-group">
                                <input
                                  type="password"
                                  id="password"
                                  className="form-control py-12 mb-16"
                                  placeholder="كلمة المرور"
                                  required
                                />
                              </div>
                            </div> */}
                        {/* <div className="mb-3 position-relative">
                              <label
                                htmlFor="confirm-password"
                                className="form-label"
                              >
                                تأكيد كلمة المرور
                              </label>
                              <div className="input-group">
                                <input
                                  type="password"
                                  id="confirm-password"
                                  className="form-control py-12 mb-16"
                                  placeholder="تأكيد كلمة المرور"
                                  required
                                />
                              </div>
                            </div> */}
                        <button
                          type="submit"
                          className="btn btn-primary mt-3 w-100 rounded-12"
                          disabled={isLoading}
                        >
                          {isLoading ? "جاري الحفظ..." : "حفظ"}
                        </button>

                        {error && <p className="text-danger mt-2">{error}</p>}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-content my-3" id="pills-tabContent">
          <div
            className="tab-pane fade change-password-tab show my-3 "
            id="changePassword"
            role="changePassword"
            aria-labelledby="changePassword-tab"
            tabIndex="0"
          >
            <form className="p-4 my-3" onSubmit={handlePasswordChange}>
              <div className="mb-3 position-relative">
                <label htmlFor="current_password" className="form-label">
                  كلمة المرور الحالية
                </label>
                <input
                  type="password"
                  id="current_password"
                  className="form-control py-12 mb-16"
                  placeholder="أدخل كلمة المرور الحالية"
                  name="current_password"
                  value={passwordData.current_password}
                  onChange={handlePasswordInputChange}
                  required
                />
              </div>
              <div className="mb-3 position-relative">
                <label htmlFor="new_password" className="form-label">
                  كلمة المرور الجديدة
                </label>
                <input
                  type="password"
                  id="new_password"
                  className="form-control py-12 mb-16"
                  placeholder="أدخل كلمة المرور الجديدة"
                  name="new_password"
                  value={passwordData.new_password}
                  onChange={handlePasswordInputChange}
                  required
                />
              </div>
              <div className="mb-3 position-relative">
                <label
                  htmlFor="new_password_confirmation"
                  className="form-label"
                >
                  تأكيد كلمة المرور الجديدة
                </label>
                <input
                  type="password"
                  id="new_password_confirmation"
                  className="form-control py-12 mb-16"
                  placeholder="أعد إدخال كلمة المرور الجديدة"
                  name="new_password_confirmation"
                  value={passwordData.new_password_confirmation}
                  onChange={handlePasswordInputChange}
                  required
                />
              </div>
              {error && (
                <div className="alert alert-danger">
                  {Array.isArray(error) ? (
                    error.map((err, index) => <p key={index}>⚠️ {err}</p>)
                  ) : (
                    <p>
                      ⚠️{" "}
                      {typeof error === "string"
                        ? error
                        : JSON.stringify(error)}
                    </p>
                  )}
                </div>
              )}

              <button type="submit" className="btn btn-main w-100">
                تحديث كلمة المرور
              </button>
            </form>
          </div>
        </div>
          </div>
        </div>

      </div>
      <ToastContainer />
    </section>
  );
}

export default ProfilePage;
