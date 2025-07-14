const Ipress = () => {
  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Establecimientos de Primer Nivel (I-1 / I-2 / I-3 / I-4)</h3>
      <div className="ratio ratio-16x9">
        <iframe
          title="Power BI SIHCE"
          width="100%"
          height="600"
          src="https://app.powerbi.com/view?r=eyJrIjoiMjMzMDMyNDYtZjlkYy00ZmU4LWFjMjItOWM1Y2ZhMjdhMzRmIiwidCI6IjkzODI4NmQ4LTRhM2EtNGJkNS1iZGZjLThlYzgzMmNjYTljZiIsImMiOjR9"
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
};

export default Ipress;
