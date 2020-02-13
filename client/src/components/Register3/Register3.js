import React from "react";
import Header from "../Header/Header";
import {
  InputField,
  GeneralText,
  InputSubHeading,
  FormBox
} from "../masterCss";
import Button from "../button";
import { Formik, ErrorMessage, Field, Form } from "formik";
import InsertUserData from "../../utils/postFormData";
import postFormData from "../../utils/postFormData";

function Register3({ setReg3 }) {
  return (
    <>
      {/* progress graphic thing */}
      <GeneralText>
        We recommend that you aim For 10 minutes of chatti activity everyday
      </GeneralText>
      <Button buttonText="Continue with recommended settings" />
      {/* video and caption */}
      {/* scroll down arrow */}
      <Formik
        initialValues={{
          how_often: "daily",
          new_ideas_time: "20:00:00",
          weekly_goal: 80
        }}
        // validate={values => {
        //   const errors={}
        //   if(!values.how_often) {
        //     errors.how_often = "select an option"
        //   } else if (!values.new_ideas_time){
        //     errors.new_ideas_time = "select an option"
        //   } else if (!values.weekly_goal) {
        //     errors.weekly_goal = "select an option"
        //   }
        //   return errors

        // }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setReg3(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputSubHeading>
              How often do you want to get new ideas?
              <Field as="select" name="how_often">
                {/* <option name="how_often" type="text">daily</option> */}
                <option name="how_often" type="text">
                  weekly
                </option>
                <option name="how_often" type="text">
                  fortnightly
                </option>
                <option name="how_often" type="text">
                  monthly
                </option>
              </Field>
              <ErrorMessage name="how_often" component="div"></ErrorMessage>
            </InputSubHeading>

            <InputSubHeading>
              What time do you want to get new ideas?
              <Field as="select" name="new_ideas_time">
                {/* <option name="new_ideas_time" type="text">8pm</option> */}
                <option name="new_ideas_time" type="text">
                  7pm
                </option>
                <option name="new_ideas_time" type="text">
                  6pm
                </option>
                <option name="new_ideas_time" type="text">
                  5pm
                </option>
                <option name="new_ideas_time" type="text">
                  4pm
                </option>
                <option name="new_ideas_time" type="text">
                  3pm
                </option>
                <option name="new_ideas_time" type="text">
                  2pm
                </option>
                <option name="new_ideas_time" type="text">
                  1pm
                </option>
              </Field>
              <ErrorMessage
                name="new_ideas_time"
                component="div"
              ></ErrorMessage>
            </InputSubHeading>

            <InputSubHeading>
              What is your weekly goal?
              <Field as="select" name="weekly_goal">
                {/* <option name="weekly_goal" type="text">80</option> */}
                <option name="weekly_goal" type="text">
                  30
                </option>
                <option name="weekly_goal" type="text">
                  60
                </option>
                <option name="weekly_goal" type="text">
                  100
                </option>
              </Field>
              <ErrorMessage name="weekly_goal" component="div"></ErrorMessage>
            </InputSubHeading>

            <Button disabled={isSubmitting} buttonText="Continue"></Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Register3;
