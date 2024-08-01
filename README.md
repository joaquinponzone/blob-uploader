# Blob Uploader

The **Blob Uploader** is a JavaScript application designed to upload files to Vercel's blob storage, integrating with a third-party API for status updates. The application includes file size validation and a user interface to display and manage uploaded files.

## Features

- **File Upload to Vercel's Blob Storage**: Seamlessly upload files to Vercel's secure and efficient blob storage service.
- **Third-Party API Integration**: Update file upload status using an external API.
- **File Size Validation**: Ensure files meet size requirements before uploading.
- **User-Friendly Interface**: View, manage, and delete uploaded files through a responsive UI.

## Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

- Node.js (v14 or later recommended)
- pnpm
- Vercel account

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/joaquinponzone/blob-uploader.git
    cd blob-uploader
    ```

2. **Install dependencies:**

    ```bash
    pnpm install
    ```

3. **Environment Variables:**

    Create a `.env` file in the root directory and add your environment variables:

    ```plaintext
    VERCEL_BLOB_TOKEN=your_vercel_blob_token
    API_KEY=your_api_key
    ```

### Running the Application

To start the development server, run:

    ```bash
    pnpm dev
    ```

Visit `http://localhost:3000` in your browser to access the application.

## Usage

1. **Upload Files:**

    - Click the "Upload" button and select files from your local machine.
    - Ensure the files meet size requirements before uploading.

2. **View and Manage Files:**

    - The dashboard displays all uploaded files.
    - You can delete files by clicking the "Delete" button next to each file.


## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## Contact

For questions or feedback, please open an issue or contact me directly at [ponzonejoaquin@gmail.com](mailto:ponzonejoaquin@gmail.com).

