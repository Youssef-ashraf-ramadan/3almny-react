import { Link } from "react-router-dom";

function RegisterData(){
    return  (
        <section className="login-page" style={{ height: "initial", padding: "60px 0" }}>
          <div className="container">
            <div className="card shadow-lg mx-auto register-form-card" style={{ maxWidth: "990px" }}>
              <div className="row g-0 align-items-center">
                <div className="col-lg-12 p-50 form-register-container">
                  <div className="login-header text-center mx-auto">
                    <div className="login-logo">
                      <img
                        src="assets/images/logo/3lmny2.png"
                        className="mb-5"
                        width="200"
                        height="200"
                        alt="Logo"
                      />
                    </div>
                    <h2 className="fs-2">سجل بياناتك الان!</h2>
                    <p className="text-muted fs-6">
                      قم بتسجيل بياناتك الآن لتتمكن من الوصول إلى جميع خدماتنا بسهولة، ولتتمكن من الاستفادة من العروض
                      والفرص المتاحة لك.
                    </p>
                  </div>
                  <div className="register-form-upload mx-auto text-center">
                    <label>
                      <div
                        className="register-form-upload-card d-flex align-items-center justify-content-center"
                        style={{ margin: "20px 0" }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
                          <path
                            d="M59.5625 42.1875V50.625H68V56.25H59.5625V64.6875H53.9375V56.25H45.5V50.625H53.9375V42.1875H59.5625ZM59.585 8.4375C61.1262 8.4375 62.375 9.68906 62.375 11.2303V37.5244C60.5683 36.8862 58.6661 36.5609 56.75 36.5625V14.0625H11.75L11.7528 53.4375L37.8866 27.3009C38.3702 26.8157 39.0144 26.5239 39.6981 26.4804C40.3818 26.4369 41.0578 26.6447 41.5991 27.0647L41.8606 27.3038L51.8337 37.2881C49.6531 37.9526 47.6295 39.0519 45.8852 40.5196C44.1408 41.9873 42.7117 43.7931 41.6841 45.828C40.6565 47.863 40.0517 50.0849 39.9061 52.36C39.7605 54.635 40.0771 56.916 40.8369 59.0653L8.915 59.0625C8.17479 59.0618 7.46515 58.7672 6.942 58.2435C6.41886 57.7198 6.125 57.0099 6.125 56.2697V11.2303C6.13015 10.4917 6.42566 9.78474 6.94769 9.26217C7.46973 8.73961 8.17638 8.44339 8.915 8.4375H59.585ZM23 19.6875C24.4918 19.6875 25.9226 20.2801 26.9775 21.335C28.0324 22.3899 28.625 23.8207 28.625 25.3125C28.625 26.8043 28.0324 28.2351 26.9775 29.29C25.9226 30.3449 24.4918 30.9375 23 30.9375C21.5082 30.9375 20.0774 30.3449 19.0225 29.29C17.9676 28.2351 17.375 26.8043 17.375 25.3125C17.375 23.8207 17.9676 22.3899 19.0225 21.335C20.0774 20.2801 21.5082 19.6875 23 19.6875Z"
                            fill="#B3B3B7"
                          />
                        </svg>
                      </div>
                      <input type="file" hidden id="upload-photo" />
                    </label>
                    <p>ارفع صورة ملفك الشخصي أو شعارك</p>
                  </div>
                  <div className="form-container">
                    <form>
                      <div className="row">
                        <div className="col-lg-6 col-12">
                          <div className="mb-3 form-group">
                            <label htmlFor="name" className="form-label">
                              اسم الطالب ثلاثي
                            </label>
                            <input
                              type="text"
                              id="name"
                              className="form-control"
                              placeholder="ادخل اسم الطالب"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-12">
                          <div className="mb-3 form-group">
                            <label htmlFor="mobile" className="form-label">
                              ادخل رقم الموبايل
                            </label>
                            <input
                              type="text"
                              id="mobile"
                              className="form-control"
                              placeholder="رقم الموبايل"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row" style={{ marginTop: "20px", marginBottom: "20px" }}>
                        <div className="col-lg-4 col-12">
                          <div className="mb-3 form-group">
                            <label htmlFor="department" className="form-label">
                              القسم
                            </label>
                            <select className="form-select">
                              <option value="" disabled selected>
                                القسم
                              </option>
                              <option value="1">قسم 1</option>
                              <option value="2">قسم 2</option>
                              <option value="3">قسم 3</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-12">
                          <div className="mb-3 form-group">
                            <label htmlFor="level" className="form-label">
                              المرحله
                            </label>
                            <select className="form-select">
                              <option value="" disabled selected>
                                حدد المرحله
                              </option>
                              <option value="1">قسم 1</option>
                              <option value="2">قسم 2</option>
                              <option value="3">قسم 3</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-12">
                          <div className="mb-3 form-group">
                            <label htmlFor="level2" className="form-label">
                              الصف
                            </label>
                            <select className="form-select">
                              <option value="" disabled selected>
                                حدد الصف
                              </option>
                              <option value="1">قسم 1</option>
                              <option value="2">قسم 2</option>
                              <option value="3">قسم 3</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary w-100" style={{ margin: "10px 0" }}>
                        تسجيل
                      </button>
                    </form>
                    <div className="mt-3 text-center">
                      <p className="fw-light" style={{ margin: "10px 0" }}>
                        هل لديك حساب بالفعل؟{" "}
                        <Link to="/login" className="text-link fw-normal">
                          تسجيل الدخول
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}
export default RegisterData;