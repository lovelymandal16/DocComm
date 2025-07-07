import React, { useState } from 'react'
import './App.css'

function App() {
  const [wordFile, setWordFile] = useState(null)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [sending, setSending] = useState(false)

  const handleGenerateXdp = () => {
    alert('Button clicked!')
    console.log('Generate XDP button clicked')
  }

  const handleWordFileChange = (event) => {
    const file = event.target?.files?.[0] || null
    console.log('File selected:', file)
    setWordFile(file)
    setError(null)
    console.log('File set successfully:', file?.name)
  }

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>DocCom</h1>
          <p>Document Conversion Tool</p>
        </header>

        <div className="upload-section">
          <div className="upload-group">
            <label htmlFor="word-upload" className="upload-label">
              <div className="upload-icon">📄</div>
              <span>Upload Word Document</span>
              <small>Accepts .docx files</small>
            </label>
            <input
              id="word-upload"
              type="file"
              accept=".docx"
              onChange={handleWordFileChange}
              className="file-input"
            />
            {wordFile && (
              <div className="file-info">
                <span>✓ {wordFile.name}</span>
              </div>
            )}
          </div>
        </div>

        

        {error && (
          <div className="error-message">
            <span>⚠️ {error}</span>
          </div>
        )}
      </div>
      <div className="action-section">
        <button className="generate-btn" onClick={handleGenerateXdp}>Generate XDP</button>
      </div>
    </div>
  )
}

export default App 