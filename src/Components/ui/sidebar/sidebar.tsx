import { Feedback } from "../feedback/Feedback";
import { Logosvg } from "../icons/logo";
import "./sidebar.scss";
export const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <Logosvg />
          <h1 title="title">brix templates </h1>
        </div>
        <div className="steps">
          <div className="steps_item">
            <div className="steps-number steps-number_active">1</div>
            <div className="steps-text">
              <h4 className="steps-title">Personal information</h4>
              <p className="steps-description">
                Tell us who you are to get started.
              </p>
            </div>
          </div>
          <div className="line line-50"></div>

          <div className="steps_item">
            <div className="steps-number">2</div>
            <div className="steps-text">
              <h4 className="steps-title">Personal information</h4>
              <p className="steps-description">
                Choose the product plan that fits your needs.
              </p>
            </div>
          </div>
          <div className="line line-0"></div>
          <div className="steps_item">
            <div className="steps-number">3</div>
            <div className="steps-text">
              <h4 className="steps-title">Identity verification</h4>
              <p className="steps-description">
                Verify your identity for security purposes.
              </p>
            </div>
          </div>

          <div className="line line-0"></div>
          <div className="steps_item">
            <div className="steps-number">4</div>
            <div className="steps-text">
              <h4 className="steps-title">Activate account</h4>
              <p className="steps-description">
                Final step! Let’s activate your account.
              </p>
            </div>
          </div>
        </div>
        <Feedback />
      </div>
    </>
  );
};
