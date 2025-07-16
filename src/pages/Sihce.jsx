const SIHCEPage = () => {
  return (
    <div className="container py-5 text-center">
      <div className="ratio ratio-16x9">
        <iframe
          title="Power BI SIHCE"
          width="100%"
          height="600"
          src="https://app.powerbi.com/view?r=eyJrIjoiZTNmMWNjYWQtMTEyNy00NzYzLTgyYWMtYjI4ZmEyYzZlZTRjIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9"
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
};

export default SIHCEPage;
