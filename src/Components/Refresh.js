const Refresh = (props) => {
  return (
    <div className="refresh_button">
      <button onClick={() => props.clearApp()} className="refresh">
        Refresh
      </button>
    </div>
  );
};

export default Refresh;
