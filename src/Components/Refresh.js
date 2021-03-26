const Refresh = (props) => {
  return (
    <div className="refresh_button">
      <button onClick={() => props.clearCounter()} className="refresh">
        Refresh
      </button>
    </div>
  );
};

export default Refresh;
