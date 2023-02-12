import React, { useState } from 'react';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import download from 'downloadjs';
import { fetchTemplate } from './templateService';

const discountTypes = [
  { label: 'GLR', value: 'GLR' },
  { label: 'BLR', value: 'BLR' },
  { label: 'C2C', value: 'C2C' },
];

const packingTypes = [
  { label: 'Std packing', value: 'Std packing' },
  { label: 'taiwan', value: 'taiwan' },
  { label: 'pillow', value: 'pillow' },
  { label: 'LD', value: 'LD' },
];

async function generatePdf(discountType, packingType) {
  const templatePdf = await fetchTemplate("template3.pdf");
  const pdfDoc = await PDFDocument.load(templatePdf);

  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const title = `Discount Type: ${discountType}, Packing Type: ${packingType}`;
  const titleWidth = helveticaFont.widthOfTextAtSize(title, 24);
  const titleHeight = helveticaFont.heightAtSize(24);

  const page = pdfDoc.getPages()[0];
  const { width, height } = page.getSize();
  page.drawText(title, {
    x: (width - titleWidth) / 2,
    y: height - titleHeight - 50,
    size: 24,
    font: helveticaFont,
  });

  const pdfBytes = await pdfDoc.saveAsBase64({ dataUri: true });
  return pdfBytes;
}

function App() {
  const [discountType, setDiscountType] = useState('GLR');
  const [packingType, setPackingType] = useState('Std packing');

  const handleDownload = async () => {
    const pdfBytes = await generatePdf(discountType, packingType);
    download(pdfBytes, 'example.pdf', 'application/pdf');
  };

  return (
    <div className='p-5 flex flex-col'>
      <div className='mt-3'>
        <label>Discount Type:</label>
        <select className='select' value={discountType} onChange={(e) => setDiscountType(e.target.value)}>
          {discountTypes.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      <div className='my-3'>
        <label>Packing Type:</label>
        <select className='select' value={packingType} onChange={(e) => setPackingType(e.target.value)}>
          {packingTypes.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      <button onClick={handleDownload} className="btn btn-primary">Download PDF</button>
    </div>
  );
}

export default App;
