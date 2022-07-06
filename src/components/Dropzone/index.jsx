import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './index.scss';

const Dropzone = () => {
  const onDrop = useCallback((acceptedFiles) => {
    const [file] = acceptedFiles;
    console.log(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      className="dropzone flex justify-center items-center"
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p className="">CLICK TO UPLOAD</p>
      )}
    </div>
  );
};

export default Dropzone;
