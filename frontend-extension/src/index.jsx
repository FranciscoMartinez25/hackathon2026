import React, { useState } from 'react';

function App() {
  const [bugReport, setBugReport] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bugReport.trim()) return;

    // Lógica para enviar el reporte (puedes conectarla a tu API o backend)
    console.log("Bug enviado:", bugReport);
    
    setSubmitted(true);
    setBugReport('');

    // Ocultar la alerta de éxito después de 4 segundos
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
     

      {/* Contenido Principal */}
      <main className="flex-grow-1 p-4">
        
          <h2 className="fw-bold mb-3">Descripción del Bug</h2>
          
          {submitted && (
            <div className="alert alert-success alert-dismissible fade show mb-4" role="alert">
              <i className="bi bi-check-circle-fill me-2"></i> 
              ¡Reporte enviado con éxito! Gracias por colaborar.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="Describe el bug que encontraste..."
              id="bug-report"
              className="form-control mb-3"
              rows="1"
              value={bugReport}
              onChange={(e) => setBugReport(e.target.value)}
              required
            ></textarea>

            <button type="submit" className="btn btn-primary" id="submit-report">
              <i className="bi bi-send-fill me-2"></i> Enviar Reporte
            </button>
          </form>
      </main>

      {/* Pie de página */}
      <footer>
        <p align="center" className="bg-dark text-white p-3 mb-0">
          &copy; 2026 Reporte de Bugs. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;