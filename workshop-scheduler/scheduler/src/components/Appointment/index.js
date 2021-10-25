import React, { useEffect } from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import useVisualMode from "components/hooks/useVisualMode";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  useEffect(() => {
    if (props.interview && mode === EMPTY) {
      transition(SHOW);
    }
    if (props.interview === null && mode === SHOW) {
      transition(EMPTY);
    }
  }, [props.interview, transition, mode]);

  const getInterviewerDetails = (interviewerId) => {
    return props.interviewers.find((interviewer) => {
      return interviewer.id === interviewerId;
    });
  };

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);
    props
      .bookInterview(props.id, interview)
      .then(() => {
        transition(SHOW);
      })
      .catch((error) => {
        console.error(error);
        transition(ERROR_SAVE, true);
      });
  }

  function deleteInterview() {
    transition(DELETING, true);
    props
      .cancelInterview(props.id)
      .then(() => {
        transition(EMPTY);
      })
      .catch((e) => {
        transition(ERROR_DELETE, true);
      });
  }

  return (
    <article className="appointment" data-testid="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}

      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onCancel={back}
          onSave={(name, interviewer) => save(name, interviewer)}
        />
      )}
      {mode === SAVING && <Status message={SAVING} />}
      {mode === DELETING && <Status message={DELETING} />}
      {mode === CONFIRM && (
        <Confirm onConfirm={deleteInterview} onCancel={back} />
      )}
      {mode === EDIT && props.interview && props.interview.interviewer && (
        <Form
          name={props.interview.student}
          interviewers={props.interviewers}
          onCancel={back}
          interviewer={props.interview.interviewer}
          onSave={(name, interviewer) => save(name, interviewer)}
        />
      )}
      {mode === SHOW && props.interview && props.interview.interviewer && (
        <Show
          student={props.interview.student}
          interviewer={getInterviewerDetails(props.interview.interviewer)}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === ERROR_SAVE && <Error message={"err"} onClose={back} />}
      {mode === ERROR_DELETE && <Error message={"err"} onClose={back} />}
    </article>
  );
}

export default Appointment;
