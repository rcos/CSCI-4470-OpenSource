function Page(props) {
  return (
    <>
      <div className={props.cName}>
          <div className="pageText">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
          </div>
      </div>
    </>
  );
}

export default Page;