import { Dropzone } from "@dropzone-ui/react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useState } from "react";

import { docsUpload } from "../services/services";

const CustomDropzoneWrapper = styled.div`
  .files-ui-footer-border-rd-top-bg-color-default {
    display: none;
  }

  .files-ui-dropzone-children-container {
    padding-bottom: 24px;
  }
`;

export default function DropzoneArea({ label, accept, onFilesChange }) {
  const [files, setFiles] = useState([]);

  const updateFiles = async (incomingFiles) => {
    if (incomingFiles[0] !== undefined) {
      let formData = new FormData();
      formData.append("files", incomingFiles[0].file);

      try {
        const res = await docsUpload(formData);
        console.log(res);
        const imageUrl = res?.data?.data?.doc0;

        const newFile = {
          url: imageUrl,
          file: incomingFiles[0].file,
        };

        setFiles((prevFiles) => [...prevFiles, newFile]);
        if (onFilesChange) {
          onFilesChange([...files, newFile]);
        }
      } catch (error) {
        console.error("Error uploading files:", error);
      }
    }
  };

  return (
    <Box sx={{ marginBlock: "1rem" }}>
      <CustomDropzoneWrapper
        style={{ background: "#cabfb623", borderRadius: "10px" }}
      >
        <Dropzone
          onChange={updateFiles}
          value={files}
          accept={accept}
          label={label}
        >
          {files.map((file, index) => (
            <div key={index}>
              {file.file.type.startsWith("image/") ? (
                <img
                  src={file.url}
                  alt={`Uploaded image ${index}`}
                  style={{ maxWidth: "200px", maxHeight: "200px" }}
                />
              ) : file.file.type.startsWith("video/") ? (
                <video
                  src={file.url}
                  controls
                  style={{ maxWidth: "200px", maxHeight: "200px" }}
                />
              ) : null}
            </div>
          ))}
        </Dropzone>
      </CustomDropzoneWrapper>
    </Box>
  );
}
