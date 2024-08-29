import React from "react";
import {
  FileInput as FileInputField,
  FileInputProps as FileInputFieldProps,
} from "@mantine/core";
import { FiFileUpload } from "@nabiq-icons";

import styles from "./FileInput.module.scss";

interface FileInputProps extends Omit<FileInputFieldProps, "onChange"> {
  onChange: (file: File | null) => void;
}

const FileInput: React.FC<FileInputProps> = ({ onChange, ...props }) => {
  return (
    <div className="relative overflow-hidden w-full h-full flex items-center justify-center border border-gray-200 py-4 px-6 rounded-lg">
      <FileInputField
        variant="unstyled"
        classNames={{
          wrapper: styles.mantineFileInputWrapper,
          input: styles.mantineFileInput,
        }}
        accept="image/svg+xml,image/png,image/jpeg,image/gif"
        onChange={(file) => {
          if (file) {
            const image = new Image();
            image.src = URL.createObjectURL(file);
            image.onload = () => {
              if (image.width <= 800 && image.height <= 400) {
                onChange(file);
              } else {
                alert("Image dimensions should not exceed 800x400 pixels.");
                onChange(null);
              }
            };
          } else {
            onChange(null);
          }
        }}
        {...props}
      />

      <div className="flex flex-col items-center justify-center text-center gap-3">
        <div className="w-10 h-10 rounded-lg border border-gray-200 shadow-custom-xs p-2.5">
          <FiFileUpload />
        </div>

        <div className="flex flex-col gap-1">
          <div className="font-open text-sm leading-5 text-left">
            <span className="font-semibold text-primary-600">
              Click to upload
            </span>
            <span className="font-normal text-gray-600"> or drag and drop</span>
          </div>

          <div className="font-open text-xs font-normal leading-4 text-center text-gray-600">
            SVG, PNG, JPG, or GIF (max. 800x400px)
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileInput;
