import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // استيراد useNavigate
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/features/actions/categoryActions";
import { fetchGrades } from "../../redux/features/actions/gradeActions";
import { fetchClasses } from "../../redux/features/actions/classActions";
import { registerUser } from "../../redux/features/actions/authAction";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Using useNavigate for navigation

  const { user, isLoading, error } = useSelector((state) => state.auth);

  const { categories, isLoading: categoriesLoading, error: categoriesError } = useSelector((state) => state.categories);
  const { grades, isLoading: gradesLoading, error: gradesError } = useSelector((state) => state.grades);
  const { classes, isLoading: classesLoading, error: classesError } = useSelector((state) => state.classes);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "student",
    category_id: "",
    grade_id: "",
    class_id: "",
  });

  useEffect(() => {
    dispatch(fetchCategories()); // Fetch categories on component mount
  }, [dispatch]);

  useEffect(() => {
    if (formData.category_id) {
      dispatch(fetchGrades(formData.category_id)); // Fetch grades when category changes
    }
  }, [dispatch, formData.category_id]);

  useEffect(() => {
    if (formData.grade_id) {
      dispatch(fetchClasses(formData.grade_id)); // Fetch classes when grade changes
    }
  }, [dispatch, formData.grade_id]);

  useEffect(() => {
    if (user) {
      window.location.href = "/login";
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("كلمة المرور وتأكيدها غير متطابقين!");
      return;
    }
    dispatch(registerUser(formData));
  };

  return (
    <section className="login-page register-page">
      <div className="container">
        <div className="card shadow-lg mx-auto" style={{ maxWidth: "900px", paddingTop :"30px" }}>
          <div className="row g-0 align-items-center">
            <div className="col-lg-12 form-box-container">
              <div className="login-header text-center mx-auto">
                <img src="/assets/images/logo/3lmny2.png" className="mb-5" width="200" height="200" alt="Logo" />
                <h2 className="fs-2">إنشاء حساب جديد</h2>
                <p className="text-muted fs-6">استخدم بريدك الإلكتروني لمواصلة التعامل معنا</p>
              </div>
              <div className="form-container">
                <form onSubmit={handleSubmit}>
                  {/* الاسم */}
                  <div className="mb-3">
                    <label className="form-label">الاسم بالكامل</label>
                    <input type="text" name="name" className="form-control" placeholder="ادخل اسمك" value={formData.name} onChange={handleChange} required />
                  </div>
                  
                  {/* البريد الإلكتروني */}
                  <div className="mb-3">
                    <label className="form-label">البريد الإلكتروني</label>
                    <input type="email" name="email" className="form-control" placeholder="ادخل البريد الإلكتروني" value={formData.email} onChange={handleChange} required />
                  </div>

                  {/* الهاتف */}
                  <div className="mb-3">
                    <label className="form-label">رقم الهاتف</label>
                    <input type="text" name="phone" className="form-control" placeholder="ادخل رقم الهاتف" value={formData.phone} onChange={handleChange} required />
                  </div>

                  {/* كلمة المرور */}
                  <div className="mb-3">
                    <label className="form-label">كلمة المرور</label>
                    <input type="password" name="password" className="form-control" placeholder="*******" value={formData.password} onChange={handleChange} required />
                  </div>

                  {/* تأكيد كلمة المرور */}
                  <div className="mb-3">
                    <label className="form-label">تأكيد كلمة المرور</label>
                    <input type="password" name="confirmPassword" className="form-control" placeholder="*******" value={formData.confirmPassword} onChange={handleChange} required />
                  </div>

                  {/* اختيار الدور */}
                  <div className="mb-3">
                    <label className="form-label">الدور</label>
                    <select name="role" className="form-control" value={formData.role} onChange={handleChange}>
                      <option value="student">طالب</option>
                      {/* <option value="parent">ولي أمر</option>
                      <option value="teacher">معلم</option> */}
                    </select>
                  </div>

                  {/* اختيار الفئة */}
                  <div className="mb-3">
                    <label className="form-label">الفئة</label>
                    {categoriesLoading ? <p>جاري التحميل...</p> : categoriesError ? <p className="text-danger">{categoriesError}</p> : (
                      <select name="category_id" className="form-control" value={formData.category_id} onChange={handleChange} required>
                        <option value="">اختر الفئة</option>
                        {categories?.data?.map((cat) => (
                          <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                      </select>
                    )}
                  </div>

                  {/* اختيار المرحلة بناءً على الفئة */}
                  {formData.category_id && (
                    <div className="mb-3">
                      <label className="form-label">المرحلة الدراسية</label>
                      {gradesLoading ? <p>جاري التحميل...</p> : gradesError ? <p className="text-danger">{gradesError}</p> : (
                        <select name="grade_id" className="form-control" value={formData.grade_id} onChange={handleChange} required>
                          <option value="">اختر المرحلة</option>
                          {grades?.data?.map((grade) => (
                            <option key={grade.id} value={grade.id}>{grade.name}</option>
                          ))}
                        </select>
                      )}
                    </div>
                  )}
                  {/* اختيار الفصل بناءً على المرحلة */}
                  {formData.grade_id && (
                    <div className="mb-3">
                      <label className="form-label">الفصل الدراسي</label>
                      {classesLoading ? <p>جاري التحميل...</p> : classesError ? <p className="text-danger">{classesError}</p> : (
                        <select name="class_id" className="form-control" value={formData.class_id} onChange={handleChange} required>
                          <option value="">اختر الفصل</option>
                          {classes?.data?.map((cls) => (
                            <option key={cls.id} value={cls.id}>{cls.name}</option>
                          ))}
                        </select>
                      )}
                    </div>
                  )}
 {error && (
  <ul className="text-danger">
    {Array.isArray(error)
      ? error.map((err, index) => <li key={index}>{err}</li>)
      : <li>{typeof error === "string" ? error : JSON.stringify(error)}</li>}
  </ul>
)}
                  {/* زر التسجيل */}
                  <button type="submit" className="btn btn-primary w-100" style={{ margin: "10px 0" }} disabled={isLoading}>
                    
                    {isLoading ? "جارٍ إنشاء حساب..." : "إنشاء حساب"}

                  </button>
                </form>

                <div className="mt-3 text-center">
                  <p className="fw-light" style={{ margin: "20px 0" }}>
                    هل لديك حساب بالفعل؟{" "}
                    <Link to="/login" className="text-link fw-normal">
                      تسجيل الدخول
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6">
              <img src="/assets/images/bg/login-bg.png" className="login-background" alt="sign-up logo" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
