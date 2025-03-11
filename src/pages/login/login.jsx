import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // استيراد useNavigate
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/features/actions/authAction";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // استخدام useNavigate للتوجيه
  const { user, isLoading, error } = useSelector((state) => state.auth);
  
  const [credentials, setCredentials] = useState({ email: "", password: "", fcm_token: "f4F8yOzDTxatoT7ebB72yD:APA91bGywZ30cn6wt6oRZMVAexw3Pb1Q57zV09872bfj7UkuS4B7W7yPZW2_9tU11Nz6qBz1m4hqdqbxka-yUp1B2AjtmRa1ckd6qXUurdarDXepxsaQodg" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validate = () => {
    let valid = true;
    let newErrors = { email: "", password: "" };
    
    if (!credentials.email) {
      newErrors.email = "البريد الإلكتروني مطلوب";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credentials.email)) {
      newErrors.email = "البريد الإلكتروني غير صالح";
      valid = false;
    }
    
    if (!credentials.password) {
      newErrors.password = "كلمة المرور مطلوبة";
      valid = false;
    } else if (credentials.password.length < 6) {
      newErrors.password = "كلمة المرور يجب أن تكون 6 أحرف على الأقل";
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };
  
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(loginUser(credentials));
    }
  };

  // إعادة التوجيه عند نجاح تسجيل الدخول
  useEffect(() => {
    if (user) {
      navigate("/"); // إعادة التوجيه للصفحة الرئيسية
      localStorage.setItem( "user",JSON.stringify(user))
    }
  }, [user, navigate]); // يتم التحديث عند تغيير user

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
                <form onSubmit={handleSubmit}>
                  <div className="mb-3 form-group">
                    <label htmlFor="email" className="form-label">البريد الإلكتروني</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="ادخل البريد الإلكتروني"
                      value={credentials.email}
                      onChange={handleChange}
                      required
                    />
                    {errors.email && <p className="text-danger">{errors.email}</p>}
                  </div>
                  <div className="mb-3 form-group">
                    <label htmlFor="password" className="form-label">كلمة المرور</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="*******"
                      value={credentials.password}
                      onChange={handleChange}
                      required
                    />
                    {errors.password && <p className="text-danger">{errors.password}</p>}
                  </div>
                  {error && (
                    <ul className="text-danger">
                      {Array.isArray(error)
                        ? error.map((err, index) => <li key={index}>{err}</li>)
                        : <li>{typeof error === "string" ? error : JSON.stringify(error)}</li>}
                    </ul>
                  )}
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    style={{ margin: "10px 0" }}
                    disabled={isLoading}
                  >
                    {isLoading ? "جارٍ تسجيل الدخول..." : "تسجيل الدخول"}
                  </button>
                </form>
                <div className="mt-3 text-center">
                  <p className="fw-light" style={{ margin: "10px 0" }}>
                    ليس لدي حساب{" "}
                    <Link to="/auth/register" className="text-link fw-normal">إنشاء حساب</Link>
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
}

export default Login;
