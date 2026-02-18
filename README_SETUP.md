# Setup Instructions for Red Bull RB20 Scrollytelling

Due to environment restrictions preventing automated setup, please follow these steps to run the project locally.

## 1. Navigate to Project Directory

Open your terminal in the `rb20-f1` directory:

```bash
cd rb20-f1
```

## 2. Install Dependencies

Run the following command to install all required packages:

```bash
npm install
```

## 3. Migrate Images

Move all `ezgif-frame-*.jpg` files from the parent directory (`..`) into `public/sequence/`.

If using PowerShell:

```powershell
move ..\ezgif-frame-*.jpg public\sequence\
```

Or use File Explorer to move them.

## 4. Rename Images

Run the provided script to rename the images to `frame_0.jpg`, `frame_1.jpg`, etc.:

```bash
node rename_assets.js
```

## 5. Run Development Server

Start the application:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the scrollytelling experience.
