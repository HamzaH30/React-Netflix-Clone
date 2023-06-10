import "./invalidPage.module.css";

export default function InvalidPage(props) {
  return (
    <div>
      <h1 className="errorHeading">Invalid Page</h1>
      <p className="errorMessage">
        There are only {props.totalPages} pages available. Please enter a valid
        page number between 1 - {props.totalPages}!
      </p>
    </div>
  );
}
