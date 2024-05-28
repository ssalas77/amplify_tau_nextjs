// export { APIRoute as default } from "next-s3-upload";

import { APIRoute } from "next-s3-upload";

// Files are uploaded to applicant directory in site-form-data bucket, not generic nextS3Upload dir
export default APIRoute.configure({
    key(req, filename) {
        return `applicant/${filename}`;
    }
});