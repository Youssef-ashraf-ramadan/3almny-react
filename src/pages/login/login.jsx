import React from "react";
import { Link } from "react-router-dom";


function Login () {


    return (
        <section className="login-page">
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
                    <h2 className="fs-2">تسجيل الدخول</h2>
                    <p className="text-muted fs-6">
                      تسجيل الدخول يتيح لك الوصول إلى حسابك الشخصي
                    </p>
                  </div>
                  <div className="form-container">
                    <form>
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
                      <button
                        type="submit"
                        className="btn btn-primary w-100"
                        style={{ margin: "10px 0" }}
                      >
                        إنشاء حساب
                      </button>
                    </form>
                    <div className="mt-3 text-center">
                      <p className="fw-light" style={{ margin: "10px 0" }}>
                        ليس لدي حساب{" "}
                        <Link to="/auth/register" className="text-link fw-normal">
                          انشاء حساب
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 image-container">
                  <img
                    src="/assets/images/bg/sign-up.png"
                    className="login-background"
                    alt="Login Background"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };


export default Login;
