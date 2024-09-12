import DataBg from "@/components/elements/DataBg"
import Header1 from "@/components/layout/header/Header1"
import Header2 from "@/components/layout/header/Header2"

export default function Login() {

    return (
        <>
            <DataBg />
            <Header1 />
            <main className="main-content">
                <div className="noise-bg" data-background="/assets/img/bg/noise_bg.png" />
                <div className="main-shape" data-background="/assets/img/images/main_shape.png" />
                <section className="login-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 col-md-10">
                                <div className="login-content">
                                    <h3 className="title">Login to your account</h3>
                                    <span>👋 Welcome back! Please enter your details.</span>
                                    <form action="#">
                                        <div className="form-grp">
                                            <label htmlFor="email">Your Email</label>
                                            <input type="email" id="email" />
                                        </div>
                                        <div className="form-grp">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" id="password" />
                                        </div>
                                        <div className="password-wrap">
                                            <button type="reset">Forgot Password</button>
                                        </div>
                                        <button type="submit" className="sine-btn">sing in</button>
                                   
                                        <span>Don’t have an account? <a href="/signup">Sign up for free</a></span>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="login-right-content-wrap">
                                    <div className="login-right-bg" data-background="assets/img/bg/error_bg.jpg" />
                                    <div className="login-right-content-inner">
                                        <img src="assets/img/images/login_img.png" alt="" />
                                        <h4 className="title">Revolutionize your writing: Try <span>AI writer today</span> and watch your content soar</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}