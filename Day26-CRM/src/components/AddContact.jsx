import { useState } from "react";

function AddContact() {
  const [ContactForm, setContactForm] = useState({
    firstname: {
      value: "",
      type: "string",
      placeholder: "First Name",
      required: true,
      min: 3,
      max: 10,
      error: false,
      errorText: "Required Field",
    },
    lastname: {
      value: "",
      type: "string",
      placeholder: "Last Name",
      required: true,
      min: 3,
      max: 10,
      error: false,
      errorText: "Required Field",
    },
    email: {
      value: "",
      type: "email",
      placeholder: "Email",
      required: true,
      error: false,
      errorText: "Email is Required",
    },
    company: {
      value: "",
      type: "string",
      placeholder: "Company",
      required: true,
      min: 3,
      max: 10,
      error: false,
      errorText: "Required Field",
    },
    city: {
      value: "",
      type: "string",
      placeholder: "City",
      required: true,
      min: 3,
      max: 10,
      error: false,
      errorText: "Required Field",
    },
    phoneNumber: {
        value: "",
        type: "number",
        placeholder: "Phone Number",
        required: true,
        min: 9,
        max: 12,
        error: false,
        errorText: "Required Field",
      },
  });

  const SubmitForm = () => {
    for (let key in ContactForm) {
      if (ContactForm[key].type == "string") {
        let min = ContactForm[key].min;
        let max = ContactForm[key].max;
        if (
          ContactForm[key].value.length <= min ||
          ContactForm[key].value.length >= max
        ) {
          ContactForm[key].error = true;
        } else {
          ContactForm[key].error = false;
        }
      }

      if (ContactForm[key].type == "email") {
        const emailRegex = new RegExp(
          /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
          "gm"
        );
        const isValidEmail = emailRegex.test(ContactForm[key].value);
        ContactForm[key].error = !isValidEmail;
      }
    }

    setContactForm({ ...ContactForm });
  };

  return (
    <>
      <div className="add-contact">
        <h2>Add Contact</h2>
        <span>
          Enter the contact's details bleow to save them to your address book.
        </span>
        <input
          type="text"
          className={ContactForm.firstname.error ? "__error" : null}
          placeholder={ContactForm.firstname.placeholder}
          onChange={(event) =>
            (ContactForm.firstname.value = event.target.value)
          }
        />
        {ContactForm.firstname.error && (
          <p>{ContactForm.firstname.errorText}</p>
        )}

        <input
          type="text"
          className={ContactForm.lastname.error ? "__error" : null}
          placeholder={ContactForm.lastname.placeholder}
          onChange={(event) =>
            (ContactForm.lastname.value = event.target.value)
          }
        />
        {ContactForm.lastname.error && <p>{ContactForm.lastname.errorText}</p>}

        <input
          type="text"
          className={ContactForm.email.error ? "__error" : null}
          placeholder={ContactForm.email.placeholder}
          onChange={(event) => (ContactForm.email.value = event.target.value)}
        />
        {ContactForm.email.error && <p>{ContactForm.email.errorText}</p>}

        <input
          type="text"
          className={ContactForm.company.error ? "__error" : null}
          placeholder={ContactForm.company.placeholder}
          onChange={(event) => (ContactForm.company.value = event.target.value)}
        />
        {ContactForm.company.error && <p>{ContactForm.company.errorText}</p>}
        <input
          type="text"
          className={ContactForm.city.error ? "__error" : null}
          placeholder={ContactForm.city.placeholder}
          onChange={(event) => (ContactForm.city.value = event.target.value)}
        />
        {ContactForm.city.error && <p>{ContactForm.city.errorText}</p>}

        <input
          type="text"
          className={ContactForm.phoneNumber.error ? "__error" : null}
          placeholder={ContactForm.phoneNumber.placeholder}
          onChange={(event) => (ContactForm.phoneNumber.value = event.target.value)}
        />
        {ContactForm.phoneNumber.error && <p>{ContactForm.phoneNumber.errorText}</p>}

        <div className="btn-secondary" onClick={SubmitForm}>
          Add Contact
        </div>
      </div>
      <div className="overlay" onClick={close}></div>
    </>
  );
}

export default AddContact;
