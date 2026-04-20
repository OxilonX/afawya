'use client';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react'; // shadcn usually uses Lucide icons

export function ImageUpload({ onUpload }) {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles && acceptedFiles[0]) {
      onUpload(URL.createObjectURL(acceptedFiles[0]));
    }
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: false
  });

  return (
    <div
      {...getRootProps()}
      className={`
        relative border-2 border-dashed rounded-3xl p-12 
        transition-all cursor-pointer flex flex-col items-center justify-center
        ${isDragActive 
          ? 'border-[oklch(0.6723_0.1606_244.9955)] bg-[oklch(0.6723_0.1606_244.9955/0.1)]' 
          : 'border-slate-700 hover:border-slate-500 bg-slate-900/50'}
      `}
    >
      <input {...getInputProps()} />
      <div className="bg-slate-800 p-4 rounded-full mb-4">
        <Upload className="w-8 h-8 text-[oklch(0.6723_0.1606_244.9955)]" />
      </div>
      <p className="text-lg font-medium text-white">
        {isDragActive ? "Drop it here!" : "Upload the caller's photo"}
      </p>
      <p className="text-sm text-slate-400 mt-2">
        Click or drag and drop (PNG, JPG)
      </p>
    </div>
  );
}