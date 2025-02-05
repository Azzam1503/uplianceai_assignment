import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify";

const RichTextEditor = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const savedUserData = localStorage.getItem("userData");
    if (savedUserData) {
      const userData = JSON.parse(savedUserData);
      const formattedContent = `
        <p><strong>Name:</strong> ${userData.name}</p>
        <p><strong>Address:</strong> ${userData.address}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
        <p><strong>Phone:</strong> ${userData.phone}</p>
      `;
      setContent(formattedContent);
    }
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">
        Rich Text Editor
      </h2>
      <ReactQuill
        value={content}
        onChange={setContent}
        className="bg-white rounded h-[400px] mb-5"
        theme="snow"
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "blockquote", "code-block"],
            ["clean"],
          ],
        }}
      />
      <div className="mt-10">
        <div
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
