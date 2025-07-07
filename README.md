# DocCom - Document Conversion Web Application

A modern web application for converting Word documents to XDP format with data integration capabilities.

## Features

- **Word Document Upload**: Accepts .docx files
- **Data Upload**: Accepts Excel files (.xlsx, .xls)
- **XDP Generation**: Converts Word documents to XDP format via API
- **Modern UI**: Beautiful, responsive design with gradient backgrounds
- **Real-time Feedback**: Shows upload status, loading states, and results

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

The application will automatically open in your default browser.

### Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Usage

1. **Upload Word Document**: Click on the "Upload Word Document" area and select a .docx file
2. **Upload Data** (Optional): Click on the "Upload Data" area and select an Excel file
3. **Generate XDP**: Click the "Generate XDP" button to convert your Word document
4. **View Results**: The API response will be displayed in the result section

## API Integration

The application makes a POST request to:
```
https://e1bc-103-43-112-97.ngrok-free.app/wordToXdp
```

The request includes the uploaded Word document as form data with the field name `wordDoc`.

## Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Axios**: HTTP client for API requests
- **CSS3**: Modern styling with gradients and animations

## File Structure

```
src/
├── App.jsx          # Main application component
├── App.css          # Application styles
├── main.jsx         # React entry point
└── index.css        # Global styles
```

## Browser Support

The application works on all modern browsers that support:
- ES6+ JavaScript
- CSS Grid and Flexbox
- CSS Custom Properties
- Fetch API

## License

This project is open source and available under the MIT License. 