import React, { useState } from 'react';

import { FileUploaderRegular } from '@uploadcare/react-uploader';
// OutputFileEntry is not exported from @uploadcare/react-uploader
// Use 'any' as a fallback for file entries

import '@uploadcare/react-uploader/core.css';
import st from './RegularView.module.css';

export default function RegularView() {
  const [files, setFiles] = useState<any[]>([]);

  const handleChangeEvent: NonNullable<React.ComponentProps<typeof FileUploaderRegular>["onChange"]> = (event) => {
    const successfulFiles = event.allEntries.filter(
      (entry: any) => entry.status === 'success'
    );
    setFiles(successfulFiles);
  };

  return (
    <div>
      <FileUploaderRegular
        pubkey="a6ca334c3520777c0045"
        onChange={handleChangeEvent}
      />

      <div className={st.previews}>
        {files.map((file) => (
          <div key={file.uuid} className={st.previewWrapper}>
            <img
              className={st.previewImage}
              src={`${file.cdnUrl}/-/preview/-/resize/x400/`}
              width={200}
              height={200}
              alt={file.fileInfo.originalFilename ?? ''}
            />

            <p className={st.previewData}>
              {file.fileInfo.originalFilename}
            </p>

            <p className={st.previewData}>
              {formatSize(file.fileInfo.size)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function formatSize(bytes: number | null): string {
  if (!bytes) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${(bytes / k ** i).toFixed(2)} ${sizes[i]}`;
}
