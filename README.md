# This is my first project

This project started as a personal need for a financial projection over time
Is combining a regular expense-income app, plus some goodies

## App v1.0

This project will evolve through time in a beautiful and easy to understand application
Is created using CREATE REACT APP

### Help

You can create PR for this project, any help will be appreciated

### Contact

You can contact me at: iulian.carnaru@yahoo.co.uk

### Dinamic relative links

    const assignments = [
    { id: "abc", name: "Mid-Term Paper" },
    { id: "123", name: "Chapter 4 Quiz" }
    ];

    <Router>
        <App path="/">
            <Assignments path="assignments">
                {/* relative paths in the route config ... */}
                <Assignment path=":assignmentId" />
            </Assignments>
        </App>
    </Router>

    <ul role="navigation">
      {assignments.map(assignment => (
        <li>
          {/*
             ... allow for relative links in the
             route components. We can link to just
             the `id`, because the href is relative,
             the full href will be "/assignments/${id}"
          */}
          <Link to={assignment.id}>{assignment.name}</Link>
        </li>
      ))}
    </ul>

Probably the most common reason to use navigate is a form submission. Perhaps the user submits a form, you save some data, and then navigate to the record

    import {
      Router,
      Link,
      navigate
    } from "@reach/router"

      <form
      onSubmit={event => {
        event.preventDefault()
        const id = event.target.elements[0].value
        event.target.reset()

        // pretend like we saved a record to the DB here
        // and then we navigate imperatively
        navigate(`/invoices/${id}`)
      }}
