import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Html5Qrcode } from "html5-qrcode";
import { toast } from "react-toastify";

const QRCodeScanner = ({ isOpen, onClose, onScan }) => {
  const scannerRef = useRef(null);
  const [error, setError] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const startScanner = async () => {
      try {
        setError(null);
        setIsScanning(true);

        const html5QrCode = new Html5Qrcode("qr-reader");
        scannerRef.current = html5QrCode;

        // 🔍 Get available cameras
        const devices = await Html5Qrcode.getCameras();
        console.log("Cameras:", devices);

        if (!devices || devices.length === 0) {
          setError("No camera found on this device.");
          setIsScanning(false);
          return;
        }

        // 🎯 Prefer back camera if available
        const backCamera =
          devices.find((d) =>
            d.label.toLowerCase().includes("back")
          ) || devices[0];

        await html5QrCode.start(
          backCamera.id,
          {
            fps: 10,
            qrbox: 250,
            aspectRatio: 1.0,
          },
          (decodedText) => {
            const code = decodedText.trim().toUpperCase();
            console.log("Scanned:", code);

            if (code.length === 8 && /^[A-Z0-9]+$/.test(code)) {
              onScan(code);
              stopScanner();
              onClose();
            } else {
              toast.warning("Invalid QR code format");
            }
          },
          (err) => {
            // ignore scan errors (normal behavior)
          }
        );
      } catch (err) {
        console.error("FULL ERROR:", err);
        setError(err.message || "Camera not available");
        setIsScanning(false);
      }
    };

    startScanner();

    return () => {
      stopScanner();
    };
  }, [isOpen]);

  const stopScanner = async () => {
    if (scannerRef.current) {
      try {
        await scannerRef.current.stop();
        await scannerRef.current.clear();
        scannerRef.current = null;
      } catch (e) {
        console.log("Stop error:", e);
      }
    }
    setIsScanning(false);
  };

  const handleClose = () => {
    stopScanner();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={handleClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-xl shadow-xl p-6 max-w-sm w-full"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.95 }}
        >
          <h2 className="text-2xl font-bold text-center mb-4">
            Scan QR Code
          </h2>

          <p className="text-gray-600 text-sm text-center mb-4">
            Point your camera at the QR code
          </p>

          {error ? (
            <div className="bg-red-50 p-4 rounded-lg text-center mb-4">
              <p className="text-red-600 mb-3">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Try Again
              </button>
            </div>
          ) : (
            <div
              id="qr-reader"
              className="w-full h-64 mb-4 rounded overflow-hidden"
            />
          )}

          <button
            onClick={handleClose}
            className="w-full bg-gray-200 hover:bg-gray-300 py-3 rounded-lg font-semibold"
          >
            Cancel
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QRCodeScanner;