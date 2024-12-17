import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { z } from 'zod';


const fileSchema = z.object({
  name: z.string().max(50, 'File name must be less than 50 characters'),
  type: z.string().refine((type) => ['image/jpeg', 'image/png', 'application/pdf'].includes(type), {
    message: 'Only JPEG, PNG, and PDF files are allowed',
  }),
  size: z.number().max(5 * 1024 * 1024, 'File size must be less than 5MB'),
});

const InputFileButtonSTNK = () => {
  const [fileName, setFileName] = useState('Input File');
  const [fileError, setFileError] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      try {
        const file = e.target.files[0];
        fileSchema.parse({ name: file.name, type: file.type, size: file.size });
        const fileNameParts = file.name.split('.');
        const fileExtension = fileNameParts.pop() || '';
        const fileNameText = fileNameParts.join('.');
        const truncatedFileName = fileNameText.length > 10 ? `${fileNameText.slice(0, 10)}...` : fileNameText;
        setFileName(`${truncatedFileName}.${fileExtension}`);
        setFileError('');
      } catch (error) {
        if (error instanceof z.ZodError) {
          setFileError(error.errors[0].message);
        } else {
          setFileError('An unexpected error occurred.');
        }
      }
    }
  };

  return (
    <div>
      <Button
        variant="secondary"
        className="bg-dspOrange text-white px-4 py-2 rounded-none border-2 border-white hover:bg-[#D87C00]"
      >
        <label htmlFor="file-input-stnk" className="cursor-pointer">
          {fileName}
        </label>
        <input
          id="file-input-stnk"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </Button>
      {fileError && <p className="text-red-500 text-xs mt-1">{fileError}</p>}
    </div>
  );
};

export default InputFileButtonSTNK;