import { Link } from "react-router-dom";

function Register(){
    return  (
        <section className="login-page register-page">
          <div className="container">
            <div className="card shadow-lg mx-auto" style={{ maxWidth: "900px" }}>
              <div className="row g-0 align-items-center">
                <div className="col-lg-6 form-box-container">
                  <div className="login-header text-center mx-auto">
                    <div className="login-logo">
                      <img
                        src="/assets/images/logo/3lmny2.png"
                        className="mb-5"
                        width="200"
                        height="200"
                        alt="Logo"
                      />
                    </div>
                    <h2 className="fs-2">إنشاء حساب جديد</h2>
                    <p className="text-muted fs-6">استخدم بريدك الإلكتروني لمواصلة التعامل معنا</p>
                  </div>
                  <div className="form-container">
                    <form>
                      <div className="mb-3 form-group">
                        <label htmlFor="userName" className="form-label">
                          الاسم بالكامل
                        </label>
                        <input
                          type="text"
                          id="userName"
                          className="form-control"
                          placeholder="ادخل اسمك"
                          required
                        />
                      </div>
                      <div className="mb-3 form-group">
                        <label htmlFor="email" className="form-label">
                          البريد الإلكتروني
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="ادخل البريد الإلكتروني"
                          required
                        />
                      </div>
                      <div className="mb-3 form-group">
                        <label htmlFor="password" className="form-label">
                          كلمة المرور
                        </label>
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          placeholder="*******"
                          required
                        />
                      </div>
                      <div className="mb-3 form-group">
                        <label htmlFor="confirm-password" className="form-label">
                          تأكيد كلمة المرور
                        </label>
                        <input
                          type="password"
                          id="confirm-password"
                          className="form-control"
                          placeholder="*******"
                          required
                        />
                      </div>
                      <Link
                        to="/auth/register-data"
                        className="btn btn-primary w-100"
                        style={{ margin: "10px 0" }}
                      >
                        إنشاء حساب
                      </Link>
                    </form>
                    <div className="mt-3 text-center">
                      <p className="fw-light" style={{ margin: "10px 0" }}>
                        هل لديك حساب بالفعل؟{" "}
                        <Link to="/auth/login" className="text-link fw-normal">
                          تسجيل الدخول
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 image-container">
                  <img
                    src="/assets/images/bg/login-bg.png"
                    className="login-background"
                    alt="sign-up logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}
export default Register;