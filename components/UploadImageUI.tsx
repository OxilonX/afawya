"use client";
import { ImageUpload } from "@/components/image-upload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useRef, useCallback } from "react";
import { toPng } from "html-to-image";
import { Phone, X, MessageSquare, Bell, User, Download } from "lucide-react";

const UploadImageUI = () => {
  const [image, setImage] = useState<string | null>(null);
  const [callerName, setCallerName] = useState("العفوية");
  const memeRef = useRef(null);

  const handleImageChange = (fileOrBlob: File | Blob | string) => {
    if (fileOrBlob instanceof File || fileOrBlob instanceof Blob) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(fileOrBlob);
    } else if (typeof fileOrBlob === "string") {
      setImage(fileOrBlob);
    }
  };

  const handleDownload = useCallback(async () => {
    if (!memeRef.current) return;

    await new Promise((resolve) => setTimeout(resolve, 100));

    try {
      const dataUrl = await toPng(memeRef.current, {
        cacheBust: false,
        pixelRatio: 2,
        skipFonts: true,
        backgroundColor: "#000",
      });

      const link = document.createElement("a");
      link.download = `afawya-${callerName || "meme"}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Download failed:", err);
      alert("Failed to generate image. Please try a smaller photo.");
    }
  }, [callerName]);

  return (
    <div className="max-w-md mx-auto space-y-8 p-4 bg-background text-foreground">
      <div className="space-y-2">
        <label className="text-sm font-medium text-muted-foreground ml-1 flex items-center gap-2">
          <User size={14} /> Name of the Caller
        </label>
        <Input
          value={callerName}
          onChange={(e) => setCallerName(e.target.value)}
          placeholder="e.g. burropongas"
          className="bg-secondary/15 border-border rounded-xl focus-visible:ring-primary"
        />
      </div>

      {!image ? (
        <ImageUpload onUpload={handleImageChange} />
      ) : (
        <div className="flex flex-col items-center space-y-6">
          <div
            ref={memeRef}
            className="relative w-[340px] h-[600px] rounded-[40px] overflow-hidden shadow-2xl border-none bg-secondary/10 flex flex-col items-center"
          >
            <p className="mt-6 text-muted-foreground text-lg font-light tracking-tight">
              mobile
            </p>

            <h2 className="mt-4 text-white text-4xl font-bold tracking-tight px-4 text-center">
              {callerName || "Unknown"}
            </h2>

            <div className="mt-8 w-48 h-48 overflow-hidden bg-transparent">
              <img
                src={image}
                alt="Caller"
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
              />
            </div>

            <div className="mt-auto mb-10 w-full flex justify-between px-12">
              <div className="flex flex-col items-center gap-2 text-white">
                <Bell size={24} className="fill-current" />
                <span className="text-xs font-medium">Remind Me</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-white">
                <MessageSquare size={24} className="fill-current" />
                <span className="text-xs font-medium">Message</span>
              </div>
            </div>

            <div className="mb-12 w-full flex justify-between px-10">
              <div className="flex flex-col items-center gap-3">
                <div className="w-18 h-18 bg-destructive rounded-full flex items-center justify-center text-destructive-foreground shadow-lg">
                  <Phone size={36} className="rotate-[135deg] fill-current" />
                </div>
                <span className="text-base font-medium text-white">رفض</span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-18 h-18 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  <Phone size={36} className="fill-current" />
                </div>
                <span className="text-base font-medium text-white">قبول</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 w-full">
            <Button
              variant="outline"
              onClick={() => setImage(null)}
              className="flex-1 rounded-xl"
            >
              <X className="mr-2 h-4 w-4" /> Change Image
            </Button>

            <Button
              variant="default"
              className="flex-1 font-bold rounded-xl bg-[oklch(0.6723_0.1606_244.9955)] text-black hover:opacity-90"
              onClick={handleDownload}
            >
              <Download className="mr-2 h-4 w-4" /> Generate Meme
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadImageUI;
