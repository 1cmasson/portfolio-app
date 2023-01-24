import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import ScrollAnimate from '../ScrollAnimate';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const [isSuccessed, setIsSuccessed] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  const onSuccess = () => {
    setIsSuccessed(true);
    setInterval(() => {
      setIsSuccessed(false);
    }, 5000)
  };

  const onFailure = () => {
    setIsFailed(true);
    setInterval(() => {
      setIsFailed(false);
    }, 5000)
  }
  
  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      reset();
      onSuccess();
    } catch (e) {
      console.log(e);
      onFailure();
    }
  };

  return (
    <section id="section-contact" className="section-contact">
      <div className="de-gradient-edge-top"></div>
      <img src="images/background/l5.jpg" className="jarallax-img" alt="" />
      <div className="container z-index-1000">
        <div className="row">
          <ScrollAnimate className="col-md-12 text-center">
            <h2>Contact Me</h2>
            <div className="space-border"></div>
          </ScrollAnimate>
          <ScrollAnimate className="col-lg-8 offset-lg-2">
            <div className="contact_form_wrapper">
              <form
                name="contactForm"
                id="contact_form"
                className="form-border"
                method="post"
                action="#"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="field-set mb-3">
                      <input
                        type="text"
                        name="name"
                        {...register('name', {
                          required: { value: true, message: 'Please enter your name' },
                          maxLength: {
                            value: 30,
                            message: 'Please use 30 characters or less'
                          }
                        })}
                        className="form-control"
                        placeholder="Your Name"
                      />
                      {errors.name && <span className="red">{errors.name.message}</span>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="field-set mb-3">
                      <input
                        type="text"
                        name="email"
                        {...register('email', {
                          required: { value: true, message: 'Please enter your email' },
                          pattern: {
                            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "invalid email address"
                          }
                        })}
                        className="form-control"
                        placeholder="Your Email"
                      />
                      {errors.email && <span className="red">{errors.email.message}</span>}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="field-set mb-3">
                      <input
                        type="text"
                        name="subject"
                        {...register('subject', {
                          required: { value: true, message: 'Please enter your subject' },
                          maxLength: {
                            value: 75,
                            message: 'Subject cannot exceed 75 characters'
                          }
                        })}
                        className="form-control"
                        placeholder="Your Subject"
                      />
                      {errors.subject && <span className="red">{errors.subject.message}</span>}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="field-set mb-3">
                      <textarea
                        name="message"
                        {...register('message', {
                          required: { value: true, message: 'Please enter your message' },
                        })}
                        className="form-control"
                        placeholder="Your Message"
                      />
                      {errors.message && <span className="red">{errors.message.message}</span>}
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div id="submit" className="mt10">
                    <input type="submit" id="send_message" value="Send Message" className="btn-main" />
                  </div>

                  <div id="success_message" className="success" style={{ display: isSuccessed ? 'block' : 'none' }}>
                    Your message has been sent successfully.
                  </div>
                  <div id="error_message" className="error" style={{ display: isFailed ? 'block' : 'none' }}>
                    Sorry there was an error sending your form.
                  </div>
                </div>
              </form>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;